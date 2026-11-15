// ============================================================
// Player — LE poulpe local
// - Nage aux mains façon Gorilla Tag (poussée + jet d'eau)
// - Grand mouvement de haut en bas = propulsion vers le HAUT
// - Attraper les poissons à la gâchette, les manger -> grandir
// - Armes, coups de tentacule, saut, dash, camouflage
// - 3 coups reçus -> nuage d'encre automatique
// - Mode VR (WebXR) + repli bureau (clavier/souris)
// ============================================================
import * as THREE from 'three'
import { CFG, WEAPON_BY_ID } from '../config.js'
import { clamp, damp, lerp, rand, loadSave, saveGame, sanitizeName, randomName } from '../utils.js'
import { Tentacle } from './Tentacle.js'
import { buildGunMesh, initWeaponProtos } from '../systems/Weapons.js'
import { sfx } from '../sfx.js'

initWeaponProtos()

const TMP = {
  v1: new THREE.Vector3(), v2: new THREE.Vector3(), v3: new THREE.Vector3(),
  v4: new THREE.Vector3(), q1: new THREE.Quaternion()
}

export class Player {
  constructor(game, name) {
    this.game = game
    this.scene = game.scene
    this.renderer = game.renderer

    const save = loadSave(CFG.save) || {}
    this.name = sanitizeName(name, save.name || randomName())
    this.money = typeof save.money === 'number' ? save.money : CFG.economy.startMoney
    this.fishCount = typeof save.fish === 'number' ? save.fish : 0
    this.owned = Array.isArray(save.owned) && save.owned.length ? save.owned : ['fists']
    this.weaponIdx = 0 // index dans this.owned

    // état de combat
    this.hp = this.maxHp
    this.maxHp = 0 // recalculé plus bas
    this.dead = false
    this.deadT = 0
    this.invuln = 0
    this.hitFlash = 0
    this.hitTimes = [] // timestamps des coups reçus (fenêtre encre)
    this.regenT = 0

    // vitesse / corps
    this.vel = new THREE.Vector3()
    this.scaleCur = this.targetScale
    this.heldFish = { left: null, right: null }

    // capacités
    this.jumpCharges = 1
    this.jumpRechargeT = 0
    this.dashCd = 0
    this.camoActive = false
    this.camoT = 0
    this.camoCd = 0

    // tir
    this.ammo = {}
    this.fireCd = 0
    this.reloadT = 0
    this.punchCd = 0
    this.punchAnimT = 0 // anim de coup en mode bureau

    this._buildBody()
    this._buildRig()

    this._updateStats(true)
    this.hp = this.maxHp
    this._equip(this.owned[this.weaponIdx], true)

    //------ entrées VR ------
    this.xrHands = { left: null, right: null }
    this.controllers = [null, null]
    for (let i = 0; i < 2; i++) {
      const c = this.renderer.xr.getController(i)
      c.userData.hand = null
      c.addEventListener('connected', (e) => {
        c.userData.hand = e.data.handedness || (i === 0 ? 'left' : 'right')
        this.xrHands[c.userData.hand] = c
        if (c.userData.hand === 'right') this._attachGun(c)
      })
      c.addEventListener('disconnected', () => {
        if (c.userData.hand === 'right') this._attachGun(null)
        c.userData.hand = null
      })
      c.addEventListener('selectstart', () => this._trigger(c.userData.hand, true))
      c.addEventListener('selectend', () => this._trigger(c.userData.hand, false))
      c.addEventListener('squeezestart', () => this._grip(c.userData.hand))
      c.addEventListener('squeezeend', () => {})
      this.rig.add(c)
      this.controllers[i] = c
    }
    this.triggerHeld = { left: false, right: false }
    this._btnPrev = { a: false, b: false, stick: false }
    this._xrPosPrev = { left: new THREE.Vector3(), right: new THREE.Vector3(), has: false }
    this.handVelRel = { left: new THREE.Vector3(), right: new THREE.Vector3() }

    //------ entrées bureau ------
    // (desktopYaw / desktopPitch déjà initialisés dans _buildRig)
    this.keys = {}
    this._bindDesktop()

    this.saveT = 0
  }

  // ================= corps & rig =================
  _buildBody() {
    const body = new THREE.Group()
    this.bodyGroup = body
    this.scene.add(body)

    const orange = new THREE.MeshStandardMaterial({ color: 0xe8642c, roughness: 0.6, transparent: true })
    this.mantleMat = orange
    const mantle = new THREE.Mesh(new THREE.SphereGeometry(0.34, 14, 12), orange)
    mantle.scale.set(1, 0.95, 1.25)
    body.add(mantle)
    const tip = new THREE.Mesh(new THREE.ConeGeometry(0.2, 0.5, 10), orange)
    tip.position.set(0, 0.12, 0.42)
    tip.rotation.x = Math.PI / 2.2
    body.add(tip)
    // yeux
    const eyeMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.3, transparent: true })
    const pupilMat = new THREE.MeshStandardMaterial({ color: 0x101018, roughness: 0.3, transparent: true })
    for (const s of [-1, 1]) {
      const eye = new THREE.Mesh(new THREE.SphereGeometry(0.09, 10, 10), eyeMat)
      eye.position.set(s * 0.15, 0.16, -0.26)
      body.add(eye)
      const pupil = new THREE.Mesh(new THREE.SphereGeometry(0.042, 8, 8), pupilMat)
      pupil.position.set(s * 0.15, 0.16, -0.335)
      body.add(pupil)
    }

    // 2 tentacules contrôlés par les mains
    this.tentL = new Tentacle({ n: 12, segLen: 0.17, radius: 0.055, stiffness: 0.08 })
    this.tentR = new Tentacle({ n: 12, segLen: 0.17, radius: 0.055, stiffness: 0.08 })
    this.scene.add(this.tentL.mesh, this.tentR.mesh)

    // 4 tentacules décoratifs qui traînent derrière
    this.deco = []
    for (let i = 0; i < 4; i++) {
      const t = new Tentacle({
        n: 10, segLen: 0.15, radius: 0.04, stiffness: 0.02,
        colorRoot: 0xa63f14, colorTip: 0xd97a3a
      })
      this.scene.add(t.mesh)
      this.deco.push(t)
    }
  }

  _buildRig() {
    this.rig = new THREE.Group()
    this.scene.add(this.rig)
    this.camera = new THREE.PerspectiveCamera(72, innerWidth / innerHeight, 0.05, 120)
    this.rig.add(this.camera)
    this.rig.position.set(CFG.spawn.x, CFG.spawn.y, CFG.spawn.z)
    this.desktopYaw = Math.PI // regarde le commissariat (mur nord)
    this.desktopPitch = -0.12
    this.camera.rotation.set(this.desktopPitch, Math.PI, 0, 'YXZ')

    // arme dans la main droite (bureau) — en VR elle s'accroche au contrôleur
    this.gunHolder = new THREE.Group()
    this.camera.add(this.gunHolder)
    this.gunHolder.position.set(0.26, -0.24, -0.42)
    this.gunMesh = null
  }

  _bindDesktop() {
    const cv = this.renderer.domElement
    cv.addEventListener('click', () => {
      if (!this.renderer.xr.isPresenting && !document.pointerLockElement) cv.requestPointerLock()
    })
    document.addEventListener('mousemove', (e) => {
      if (document.pointerLockElement === cv) {
        this.desktopYaw -= e.movementX * 0.0023
        this.desktopPitch = clamp(this.desktopPitch - e.movementY * 0.0023, -1.35, 1.35)
      }
    })
    document.addEventListener('pointerlockchange', () => {
      if (document.pointerLockElement !== cv) this.keys = {}
    })
    document.addEventListener('keydown', (e) => {
      if (this.renderer.xr.isPresenting) return
      this.keys[e.code] = true
      if (e.code === 'KeyF') this._desktopGrabOrEat()
      if (e.code === 'KeyE') this._doDash()
      if (e.code === 'KeyX') this._toggleCamo()
      if (e.code === 'Space') { e.preventDefault(); this._doJump() }
      if (/^Digit[1-5]$/.test(e.code)) this._selectWeaponSlot(parseInt(e.code.slice(5)) - 1)
    })
    document.addEventListener('keyup', (e) => { this.keys[e.code] = false })
    this._mouseDown = false
    document.addEventListener('mousedown', (e) => {
      if (this.renderer.xr.isPresenting || document.pointerLockElement !== cv) return
      this._mouseDown = true
      if (e.button === 2) { this._desktopEat() ; return }
      if (!this.game.uiPointing) {
        if (this.curWeapon !== 'fists') this._firePressed = true
        else { this.punchAnimT = 0.18 }
      } else {
        this.game.uiClickRequested = true
      }
    })
    document.addEventListener('mouseup', () => { this._mouseDown = false; this._firePressed = false })
    document.addEventListener('contextmenu', (e) => e.preventDefault())
  }

  // ================= stats de croissance =================
  get fish() { return this.fishCount }
  get targetScale() {
    return Math.min(1 + this.fishCount * CFG.growth.scalePerFish, CFG.growth.scaleMax)
  }
  get level() { return Math.floor(this.fishCount / CFG.growth.levelPerFish) + 1 }
  get dmgStat() {
    return Math.min(CFG.growth.dmgBase + this.fishCount * CFG.growth.dmgPerFish, 60)
  }
  get speedMult() {
    return Math.min(1 + this.fishCount * CFG.growth.speedPerFish, CFG.growth.speedMax)
  }
  get bodyRadius() { return CFG.phys.bodyRadius * this.scaleCur }
  get bodyCenter() {
    // juste sous la tête
    return TMP.v1.copy(this.headWorld).addScaledVector(TMP.v2.set(0, 1, 0), -0.18 * this.scaleCur)
  }
  get unlocked() {
    const a = CFG.growth.abilities
    return {
      doubleJump: this.fishCount >= a.doubleJump,
      dash: this.fishCount >= a.dash,
      camo: this.fishCount >= a.camo
    }
  }

  _updateStats(init = false) {
    const oldMax = this.maxHp
    this.maxHp = Math.min(CFG.growth.hpBase + this.fishCount * CFG.growth.hpPerFish, CFG.growth.hpMax)
    if (!init && this.maxHp > oldMax) this.hp += this.maxHp - oldMax
    this.hp = clamp(this.hp, 1, this.maxHp)
  }

  persist() {
    saveGame(CFG.save, { name: this.name, money: this.money, fish: this.fishCount, owned: this.owned })
  }

  // ================= entrées =================
  _trigger(hand, down) {
    if (!hand) return
    const was = this.triggerHeld[hand]
    this.triggerHeld[hand] = down
    if (down && !was) this._onTriggerPress(hand)
    if (!down && was && hand === 'right') this._firePressed = false
  }

  _grip(hand) {
    if (!hand) return
    this._grabOrEat(hand)
  }

  _onTriggerPress(hand) {
    // clic d'interface d'abord (panneaux)
    if (this.game.uiPointing) { this.game.uiClickRequested = true; return }
    // poings : gâchette attrape / mange
    if (this.curWeapon === 'fists' || hand === 'left') {
      this._grabOrEat(hand)
    }
    if (hand === 'right' && this.curWeapon !== 'fists') {
      this._firePressed = true
    }
  }

  _desktopGrabOrEat() {
    if (this.heldFish.right) this._eat('right')
    else this._tryGrab('right')
  }
  _desktopEat() {
    if (this.heldFish.right) this._eat('right')
    else if (this.heldFish.left) this._eat('left')
  }

  // ================= saisir / manger un poisson =================
  _grabOrEat(hand) {
    if (this.heldFish[hand]) { this._eat(hand); return }
    this._tryGrab(hand)
  }

  _tryGrab(hand) {
    if (this.dead) return
    const tip = hand === 'left' ? this._handPos('left', TMP.v3) : this._handPos('right', TMP.v3)
    const f = this.game.fish.findGrab(tip, 0.6)
    if (f) {
      this.heldFish[hand] = f
      this.game.fish.grab(f, 'self')
      this.game.net.sendEv({ t: 'grab', id: f.id, by: this.game.net.selfId, hand })
      sfx.grab()
    }
  }

  _eat(hand) {
    const f = this.heldFish[hand]
    if (!f) return
    this.heldFish[hand] = null
    this.game.fish.eat(f, true)
    this.game.net.sendEv({ t: 'ate', id: f.id, by: this.game.net.selfId })
    this.fishCount++
    this._updateStats()
    this.hp = clamp(this.hp + CFG.growth.healPerFish, 1, this.maxHp)
    sfx.chomp()
    this.game.fx.bubbles(this.headWorld, 6)
    // débloquage de capacité ?
    const a = CFG.growth.abilities
    for (const [key, need, label] of [
      ['doubleJump', a.doubleJump, 'DOUBLE SAUT'],
      ['dash', a.dash, 'DASH'],
      ['camo', a.camo, 'CAMOUFLAGE']
    ]) {
      if (this.fishCount === need) {
        sfx.unlock()
        this.game.fx.popup('CAPACITÉ DÉBLOQUÉE : ' + label, this.headWorld.clone().add(new THREE.Vector3(0, 0.6, 0)), { color: '#7dff9b', size: 54, ttl: 3 })
      }
    }
    this.game.hud.dirty = true
    this.game.net.sendMeta()
    this.persist()
    this.game.boards.markDirty()
  }

  // ================= armes =================
  get curWeapon() { return this.owned[this.weaponIdx] || 'fists' }

  // accroche l'arme au contrôleur droit (VR) ou à la caméra (bureau)
  _attachGun(controller) {
    const parent = controller || this.camera
    if (this.gunHolder.parent !== parent) {
      parent.add(this.gunHolder)
      this.gunHolder.position.copy(controller ? new THREE.Vector3(0, 0, -0.02) : new THREE.Vector3(0.26, -0.24, -0.42))
      this.gunHolder.rotation.set(0, 0, 0)
    }
  }

  _equip(id, silent = false) {
    if (this.gunMesh) { this.gunHolder.remove(this.gunMesh); this.gunMesh = null }
    this.curWeaponId = id
    if (id !== 'fists') {
      this.gunMesh = buildGunMesh(id)
      this.gunHolder.add(this.gunMesh)
      if (this.ammo[id] === undefined) this.ammo[id] = WEAPON_BY_ID[id].mag
    }
    if (!silent) sfx.ui()
    if (this.game.hud) this.game.hud.dirty = true
  }

  _selectWeaponSlot(slot) {
    if (slot >= 0 && slot < this.owned.length && slot !== this.weaponIdx) {
      this.weaponIdx = slot
      this._equip(this.owned[slot])
    }
  }

  cycleWeapon(dir = 1) {
    if (this.owned.length <= 1) return
    this.weaponIdx = (this.weaponIdx + dir + this.owned.length) % this.owned.length
    this._equip(this.owned[this.weaponIdx])
  }

  buyWeapon(id) {
    const w = WEAPON_BY_ID[id]
    if (!w || this.owned.includes(id)) return false
    if (this.money < w.price) { sfx.denied(); return false }
    this.money -= w.price
    this.owned.push(id)
    this.weaponIdx = this.owned.length - 1
    this._equip(id)
    sfx.buy()
    this.persist()
    this.game.net.sendMeta()
    return true
  }

  _fire(dt) {
    const w = WEAPON_BY_ID[this.curWeapon]
    if (!w || !w.dmg) return
    if (this.reloadT > 0) return
    const wantsFire = w.auto ? (this._firePressed || (this.renderer.xr.isPresenting && this.triggerHeld.right)) : this._firePressed
    if (!wantsFire || this.fireCd > 0) return
    const id = w.id
    if ((this.ammo[id] || 0) <= 0) { this._startReload(); return }
    this.fireCd = w.rate
    this.ammo[id]--
    this.game.hud.dirty = true

    // origine = museau de l'arme ; direction = viseur
    const origin = TMP.v1
    const dir = TMP.v2
    this._getMuzzleWorld(origin, dir)
    // dispersion
    if (w.spread > 0) {
      dir.x += rand(-w.spread, w.spread)
      dir.y += rand(-w.spread, w.spread)
      dir.z += rand(-w.spread, w.spread)
      dir.normalize()
    }
    this.game.doHitscan(this, origin, dir, w)
    sfx.shoot(id)
    this.game.fx.muzzle(origin.clone(), id === 'sniper' ? 0.4 : 0.25)
    // léger recul
    this.vel.addScaledVector(dir, -0.35)
  }

  _getMuzzleWorld(outPos, outDir) {
    if (this.gunMesh) {
      // museau réel du modèle d'arme
      outPos.copy(this.gunMesh.userData.muzzle || new THREE.Vector3(0, 0, -0.2))
      this.gunMesh.localToWorld(outPos)
      this.gunHolder.getWorldQuaternion(TMP.q1)
      outDir.set(0, 0, -1).applyQuaternion(TMP.q1)
      return outDir
    }
    if (this.renderer.xr.isPresenting && this.xrHands.right) {
      const c = this.xrHands.right
      c.getWorldQuaternion(TMP.q1)
      c.getWorldPosition(outPos)
      outDir.set(0, 0, -1).applyQuaternion(TMP.q1)
    } else {
      this.camera.getWorldPosition(outPos)
      this.camera.getWorldDirection(outDir)
      outPos.addScaledVector(outDir, 0.45)
    }
    return outDir
  }

  _startReload() {
    const w = WEAPON_BY_ID[this.curWeapon]
    if (!w || !w.dmg || this.reloadT > 0) return
    this.reloadT = w.reload
    sfx.reload()
  }

  // ================= capacités =================
  _doJump() {
    if (this.dead) return
    if (this.jumpCharges > 0) {
      this.jumpCharges--
      this.jumpRechargeT = CFG.abilities.jumpRecharge
      this.vel.y += CFG.abilities.jumpImpulse
      sfx.jet()
      this.game.fx.bubbles(this.bodyCenter.clone(), 8)
    }
  }

  _doDash() {
    if (this.dead || !this.unlocked.dash || this.dashCd > 0) return
    this.dashCd = CFG.abilities.dashCooldown
    const dir = TMP.v3
    if (this.renderer.xr.isPresenting) {
      // dash dans la direction pointée par la main droite (ou la tête)
      if (this.xrHands.right) {
        this.xrHands.right.getWorldQuaternion(TMP.q1)
        dir.set(0, 0, -1).applyQuaternion(TMP.q1)
      } else this.getLookDir(dir)
    } else this.getLookDir(dir)
    this.vel.addScaledVector(dir, CFG.abilities.dashSpeed)
    sfx.dash()
    this.game.fx.bubbles(this.bodyCenter.clone(), 12, 0.25)
  }

  _toggleCamo() {
    if (this.dead || !this.unlocked.camo) return
    if (this.camoActive) return // laisse se finir (pas de désactivation manuelle)
    if (this.camoCd > 0) return
    this.camoActive = true
    this.camoT = CFG.abilities.camoDuration
    sfx.ui()
    this.game.hud.dirty = true
  }

  // ================= dégâts / mort / encre =================
  damage(amount, fromId) {
    if (this.dead || this.invuln > 0) return
    this.hp -= amount
    this.hitFlash = 0.22
    this.regenT = CFG.combat.regenDelay
    sfx.hurt()
    this.game.hud.dirty = true
    // compteur encre : 3 coups dans la fenêtre -> nuage !
    const now = performance.now() / 1000
    this.hitTimes.push(now)
    this.hitTimes = this.hitTimes.filter(t => now - t <= CFG.combat.inkWindow)
    if (this.hitTimes.length >= CFG.combat.inkHits) {
      this.hitTimes = []
      this.emitInk()
    }
    if (this.hp <= 0) this.die(fromId)
  }

  emitInk() {
    const pos = this.bodyCenter.clone()
    this.game.spawnInk(pos)
    this.game.net.sendEv({ t: 'ink', p: [pos.x, pos.y, pos.z] })
    sfx.ink()
  }

  die(fromId) {
    this.dead = true
    this.deadT = 3
    this.hp = 0
    sfx.die()
    this.game.fx.inkBurst(this.bodyCenter.clone(), 16)
    this.game.net.sendEv({ t: 'died', victim: this.game.net.selfId, killer: fromId })
    this.game.hud.dirty = true
  }

  respawn() {
    this.dead = false
    this.hp = this.maxHp
    this.invuln = CFG.invulnAfterDeath
    this.vel.set(0, 0, 0)
    this.rig.position.set(CFG.spawn.x, CFG.spawn.y, CFG.spawn.z)
    this.hitTimes = []
    this.game.hud.dirty = true
  }

  // ================= positions utiles =================
  get headWorld() {
    return this.camera.getWorldPosition(TMP.v2)
  }
  getLookDir(out) {
    if (this.renderer.xr.isPresenting) {
      this.camera.getWorldQuaternion(TMP.q1)
      return out.set(0, 0, -1).applyQuaternion(TMP.q1).normalize()
    }
    return this.camera.getWorldDirection(out).normalize()
  }

  _handPos(hand, out) {
    if (this.renderer.xr.isPresenting && this.xrHands[hand]) {
      return this.xrHands[hand].getWorldPosition(out)
    }
    // bureau : mains imaginaires devant la caméra
    this.camera.getWorldPosition(out)
    this.camera.getWorldQuaternion(TMP.q1)
    const side = hand === 'left' ? -1 : 1
    const off = new THREE.Vector3(side * 0.3, -0.22, -0.5).applyQuaternion(TMP.q1)
    out.add(off)
    return out
  }

  // ================= boucle =================
  update(dt, time) {
    this.scaleCur = damp(this.scaleCur, this.targetScale, 6, dt)
    const inVR = this.renderer.xr.isPresenting

    // timers
    this.fireCd = Math.max(0, this.fireCd - dt)
    this.punchCd = Math.max(0, this.punchCd - dt)
    this.dashCd = Math.max(0, this.dashCd - dt)
    this.camoCd = Math.max(0, this.camoCd - dt)
    this.invuln = Math.max(0, this.invuln - dt)
    this.hitFlash = Math.max(0, this.hitFlash - dt)
    this.punchAnimT = Math.max(0, this.punchAnimT - dt)
    if (this.reloadT > 0) {
      this.reloadT -= dt
      if (this.reloadT <= 0) {
        this.reloadT = 0
        this.ammo[this.curWeapon] = WEAPON_BY_ID[this.curWeapon].mag
        this.game.hud.dirty = true
      }
    }
    if (this.camoActive) {
      this.camoT -= dt
      if (this.camoT <= 0) { this.camoActive = false; this.camoCd = CFG.abilities.camoCooldown; this.game.hud.dirty = true }
    }
    if (this.jumpCharges < (this.unlocked.doubleJump ? 2 : 1)) {
      this.jumpRechargeT -= dt
      if (this.jumpRechargeT <= 0) this.jumpCharges++
    }

    // mort / respawn
    if (this.dead) {
      this.deadT -= dt
      if (this.deadT <= 0) this.respawn()
      this._updateBodyVisuals(dt, time, true)
      return
    }

    if (inVR) this._updateVRInput(dt)
    else this._updateDesktopInput(dt, time)

    this._locomotion(dt)
    this._updateBodyVisuals(dt, time, false)
    this._updateTentacles(dt, time)
    this._updateHeldFish()
    this._fire(dt)
    this._punchCheck()
    this._updateCamoVisuals()

    // régénération
    this.regenT = Math.max(0, this.regenT - dt)
    if (this.regenT <= 0 && this.hp < this.maxHp) {
      this.hp = Math.min(this.hp + CFG.combat.regenRate * dt, this.maxHp)
      this.game.hud.dirty = true
    }

    // sauvegarde périodique
    this.saveT += dt
    if (this.saveT > 10) { this.saveT = 0; this.persist() }
  }

  _updateVRInput(dt) {
    // boutons A/B + stick via gamepad (polling)
    const session = this.renderer.xr.getSession()
    if (session) {
      let a = false, b = false, stick = false
      let stickX = 0
      for (const src of session.inputSources) {
        const gp = src.gamepad
        if (!gp) continue
        if (src.handedness === 'right') {
          a = gp.buttons[4] && gp.buttons[4].pressed
          b = gp.buttons[5] && gp.buttons[5].pressed
          stick = gp.buttons[3] && gp.buttons[3].pressed
          stickX = gp.axes[2] || 0
        }
      }
      if (a && !this._btnPrev.a) this._doJump()
      if (b && !this._btnPrev.b) this._doDash()
      if (stick && !this._btnPrev.stick) this._toggleCamo()
      if (Math.abs(stickX) > 0.65 && this._stickEdge !== Math.sign(stickX)) {
        this._stickEdge = Math.sign(stickX)
        this.cycleWeapon(this._stickEdge > 0 ? 1 : -1)
      } else if (Math.abs(stickX) < 0.4) this._stickEdge = 0
      this._btnPrev = { a, b, stick }
    }

    // vitesses des mains (relatives au corps)
    for (const hand of ['left', 'right']) {
      const now = this._handPos(hand, new THREE.Vector3())
      const prev = this._xrPosPrev[hand]
      if (this._xrPosPrev.has) {
        const rel = now.clone().sub(prev).divideScalar(Math.max(dt, 1e-4))
        rel.sub(this.vel) // vitesse RELATIVE au corps
        this.handVelRel[hand].lerp(rel, 0.6)
      }
      this._xrPosPrev[hand].copy(now)
      this._xrPosPrev.has = true
    }
  }

  _updateDesktopInput(dt, time) {
    // caméra souris
    this.camera.rotation.set(this.desktopPitch, this.desktopYaw, 0, 'YXZ')
    // clavier -> impulsion de nage
    const dir = TMP.v3.set(0, 0, 0)
    const look = this.getLookDir(TMP.v4)
    const right = new THREE.Vector3().crossVectors(look, new THREE.Vector3(0, -1, 0)).normalize()
    const sprint = (this.keys['ShiftLeft'] || this.keys['ShiftRight']) ? CFG.desktop.sprintMult : 1
    const sp = CFG.desktop.speed * sprint
    if (this.keys['KeyW']) dir.addScaledVector(look, 1)
    if (this.keys['KeyS']) dir.addScaledVector(look, -1)
    if (this.keys['KeyA']) dir.addScaledVector(right, -1)
    if (this.keys['KeyD']) dir.addScaledVector(right, 1)
    if (this.keys['Space']) dir.y += 1
    if (this.keys['KeyC'] || this.keys['ControlLeft']) dir.y -= 1
    if (dir.lengthSq() > 0) {
      dir.normalize().multiplyScalar(sp * 0.9)
      this.vel.lerp(dir, Math.min(1, 5 * dt))
    }
    // vitesse "mains" bureautique : anim de coup
    if (this.punchAnimT > 0) {
      this.handVelRel.right.copy(look).multiplyScalar(7)
    } else {
      this.handVelRel.right.set(0, 0, 0)
      this.handVelRel.left.set(0, 0, 0)
    }
    // tir maintenu (armes auto)
    if (this._mouseDown && this.curWeapon !== 'fists' && !this.game.uiPointing) this._firePressed = true
  }

  _locomotion(dt) {
    const p = CFG.phys
    // poussées des mains (réaction + jet vers le haut + poussée sur surfaces)
    for (const hand of ['left', 'right']) {
      const hv = this.handVelRel[hand]
      const speed = hv.length()
      if (speed > 0.4) {
        // réaction aquatique : la main repousse l'eau
        this.vel.addScaledVector(hv, -p.swimGain * dt)
        // jet : grand mouvement vers le BAS -> propulsion vers le HAUT
        if (hv.y < -p.jetThreshold) {
          this.vel.y += (-hv.y) * p.jetGain * dt
          if (Math.random() < dt * 8) {
            this.game.fx.bubbles(this._handPos(hand, TMP.v3).clone(), 2)
            sfx.jet()
          }
        }
        // poussée Gorilla Tag : main en contact avec une surface
        const test = this._handPos(hand, TMP.v4).clone()
        const res = this.game.world.collideSphere(test, p.handRadius + 0.03)
        if (res.hit && speed > 0.9) {
          this.vel.addScaledVector(hv, -p.pushGain * dt)
        }
      }
    }
    // gravité douce + traînée de l'eau (chute limitée : on est dans l'eau)
    this.vel.y -= p.gravity * dt
    if (this.vel.y < -0.45) this.vel.y = -0.45
    this.vel.multiplyScalar(Math.exp(-p.drag * dt))
    // vitesse maximale
    const vmax = p.maxSpeed * this.speedMult
    if (this.vel.length() > vmax) this.vel.setLength(vmax)
    // déplacement du rig
    this.rig.position.addScaledVector(this.vel, dt)
    // collision du corps
    const head = this.camera.getWorldPosition(new THREE.Vector3())
    const center = head.clone().add(new THREE.Vector3(0, -0.18 * this.scaleCur, 0))
    const r = this.bodyRadius
    const before = center.clone()
    const res = this.game.world.collideSphere(center, r)
    if (res.hit) {
      const delta = center.sub(before)
      this.rig.position.add(delta)
      if (res.floor && this.vel.y < 0) this.vel.y = 0
      if (Math.abs(res.nx) > 0.5 && Math.sign(this.vel.x) === -Math.sign(res.nx)) this.vel.x *= 0.2
      if (Math.abs(res.nz) > 0.5 && Math.sign(this.vel.z) === -Math.sign(res.nz)) this.vel.z *= 0.2
    }
  }

  _updateBodyVisuals(dt, time, isDead) {
    // le corps suit la tête, orienté par le yaw, légèrement derrière
    const head = this.headWorld.clone()
    const look = this.getLookDir(new THREE.Vector3())
    look.y = 0; look.normalize()
    this.bodyGroup.position.copy(head).addScaledVector(look, -0.5 * this.scaleCur)
    this.bodyGroup.position.y -= 0.12 * this.scaleCur
    this.bodyGroup.rotation.y = Math.atan2(look.x, look.z)
    const s = this.scaleCur
    this.bodyGroup.scale.setScalar(s)
    if (isDead) this.bodyGroup.visible = false
    else this.bodyGroup.visible = true
    // teinte de dégât
    const hurt = this.hitFlash > 0
    this.mantleMat.color.setHex(hurt ? 0xff5a3c : 0xe8642c)
    this.mantleMat.opacity = this.camoActive ? 0.35 : 1
  }

  _updateTentacles(dt, time) {
    // racines : flancs du corps ; bouts : les mains
    const rootL = new THREE.Vector3(-0.24, -0.05, -0.05)
    const rootR = new THREE.Vector3(0.24, -0.05, -0.05)
    const back = new THREE.Vector3(0, 0, 1) // derrière = +Z local (mantle regarde -Z)
    this.bodyGroup.updateMatrixWorld()
    rootL.applyMatrix4(this.bodyGroup.matrixWorld)
    rootR.applyMatrix4(this.bodyGroup.matrixWorld)
    this.tentL.setRoot(rootL); this.tentL.setTip(this._handPos('left', new THREE.Vector3()))
    this.tentR.setRoot(rootR); this.tentR.setTip(this._handPos('right', new THREE.Vector3()))
    this.tentL.update(dt, time, this.game.world)
    this.tentR.update(dt, time, this.game.world)

    // tentacules décoratifs
    const offsets = [
      new THREE.Vector3(-0.16, -0.12, 0.16),
      new THREE.Vector3(0.16, -0.12, 0.16),
      new THREE.Vector3(-0.06, -0.14, 0.2),
      new THREE.Vector3(0.06, -0.14, 0.2)
    ]
    const sway = Math.sin(time * 1.6) * 0.25
    this.deco.forEach((t, i) => {
      const root = offsets[i].clone().applyMatrix4(this.bodyGroup.matrixWorld)
      const backW = back.clone().applyQuaternion(this.bodyGroup.quaternion)
      const tip = root.clone()
        .addScaledVector(backW, 0.9 * this.scaleCur)
        .add(new THREE.Vector3(Math.sin(time * 1.3 + i * 1.7) * 0.3, -0.55 * this.scaleCur + sway, Math.cos(time * 1.1 + i) * 0.2))
      t.setRoot(root)
      t.setTip(tip)
      t.update(dt, time, this.game.world)
    })
  }

  _updateHeldFish() {
    for (const hand of ['left', 'right']) {
      const f = this.heldFish[hand]
      if (!f) continue
      this._handPos(hand, TMP.v3)
      this.game.fish.followHand(f, TMP.v3)
    }
  }

  _updateCamoVisuals() {
    // transparence locale quand camouflé (les autres nous voient quasi invisible)
    const o = this.camoActive ? 0.35 : 1
    for (const t of [this.tentL, this.tentR, ...this.deco]) {
      t.mesh.material.transparent = o < 1
      t.mesh.material.opacity = o
    }
  }

  // ================= coups de tentacule =================
  _punchCheck() {
    if (this.punchCd > 0) return
    for (const t of [this.tentL, this.tentR]) {
      if (t.tipSpeed < CFG.combat.punchSpeedMin) continue
      const tip = t.getTip(new THREE.Vector3())
      const hit = this.game.findPunchTarget(tip, CFG.combat.punchRange, this)
      if (hit) {
        this.punchCd = CFG.combat.punchCooldown
        const factor = clamp(1 + (t.tipSpeed - CFG.combat.punchSpeedMin) * 0.22, 1, 2.2)
        const dmg = Math.round(this.dmgStat * factor)
        this.game.applyPunch(this, hit, dmg, tip)
        sfx.punch()
        break
      }
    }
  }

  // ================= synchro =================
  encodeState() {
    const a = new Float32Array(29)
    const head = this.headWorld
    a[0] = head.x; a[1] = head.y; a[2] = head.z
    this.camera.getWorldQuaternion(TMP.q1)
    a[3] = TMP.q1.x; a[4] = TMP.q1.y; a[5] = TMP.q1.z; a[6] = TMP.q1.w
    const l = this._handPos('left', new THREE.Vector3())
    const r = this._handPos('right', new THREE.Vector3())
    a[7] = l.x; a[8] = l.y; a[9] = l.z
    a[10] = r.x; a[11] = r.y; a[12] = r.z
    a[13] = this.scaleCur
    a[14] = clamp(this.hp / this.maxHp, 0, 1)
    a[15] = CFG.weapons.findIndex(w => w.id === this.curWeapon)
    a[16] = this.camoActive ? 1 : 0
    a[17] = this.fishCount
    a[18] = this.dead ? 0 : 1
    if (this.renderer.xr.isPresenting && this.xrHands.right) {
      this.xrHands.right.getWorldQuaternion(TMP.q1)
      a[19] = TMP.q1.x; a[20] = TMP.q1.y; a[21] = TMP.q1.z; a[22] = TMP.q1.w
    } else {
      this.camera.getWorldQuaternion(TMP.q1)
      a[19] = TMP.q1.x; a[20] = TMP.q1.y; a[21] = TMP.q1.z; a[22] = TMP.q1.w
    }
    if (this.renderer.xr.isPresenting && this.xrHands.left) {
      this.xrHands.left.getWorldQuaternion(TMP.q1)
      a[23] = TMP.q1.x; a[24] = TMP.q1.y; a[25] = TMP.q1.z; a[26] = TMP.q1.w
    } else {
      a[23] = 0; a[24] = 0; a[25] = 0; a[26] = 1
    }
    a[27] = this.heldFish.left ? this.heldFish.left.id : -1
    a[28] = this.heldFish.right ? this.heldFish.right.id : -1
    return a
  }

  // rééquiper depuis une liste reçue (non utilisé en local, garde l'API)
  weaponIdFromIdx(idx) {
    return CFG.weapons[clamp(idx, 0, CFG.weapons.length - 1)].id
  }
}
