// ============================================================
// Player — LE poulpe local
// - DÉPLACEMENT GORILLA TAG : on se pousse AVEC LES MAINS sur les
//   surfaces (sol, rochers, épave, parois). Tant qu'une main touche,
//   vitesse du corps = -(vitesse de la main relative au corps).
//   Main posée sans bouger = frein net. Décollage = élan conservé.
//   Rien dans le vide : pas de poussée sans contact, comme le vrai jeu.
// - DOUBLE SAUT dans l'eau : A ou X — 2 charges, recharge rapide
// - Gravité marquée, vibrations, bulles : chaque poussée est juteuse
// - Attraper les poissons à la gâchette, les manger -> grandir
// - Armes, coups de tentacule, dash, camouflage
// - 3 coups reçus -> nuage d'encre automatique
// - Mode VR (WebXR) + repli bureau (clavier/souris)
// ============================================================
import * as THREE from 'three'
import { CFG, WEAPON_BY_ID } from '../config.js'
import { clamp, damp, lerp, rand, loadSave, saveGame, sanitizeName, randomName } from '../utils.js'
import { Tentacle } from './Tentacle.js'
import { createOcto } from './OctoModel.js'
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
    this._btnPrev = { a: false, b: false, xl: false, stick: false }
    this._xrPosPrev = { left: new THREE.Vector3(), right: new THREE.Vector3(), has: false }
    // vitesse des mains RELATIVE au corps (c'est LE cœur de Gorilla Tag)
    this.handVelRel = { left: new THREE.Vector3(), right: new THREE.Vector3() }
    // lissage type GT : moyenne des dernières vitesses de main
    this._handVelHist = { left: [], right: [] }
    // nouvelle session casque : historique de positions des mains remis à
    // zéro pour ne pas créer une fausse vitesse au retour dans le casque
    this.renderer.xr.addEventListener('sessionstart', () => {
      this._xrPosPrev.has = false
      this._handVelHist.left.length = 0
      this._handVelHist.right.length = 0
      this.handVelRel.left.set(0, 0, 0)
      this.handVelRel.right.set(0, 0, 0)
    })
    // contact main ↔ surface (par main)
    this.handTouching = { left: false, right: false }
    this._wasTouching = false

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

    // corps : modèle 3D du poulpe (octo.glb), teinté orange
    this.octo = createOcto(0xe8642c)

    // 2 tentacules contrôlés par les mains (2x plus longs qu'avant)
    const T = CFG.tent
    this.tentL = new Tentacle({ n: T.n, segLen: T.segLen, radius: T.radius, stiffness: 0.075 })
    this.tentR = new Tentacle({ n: T.n, segLen: T.segLen, radius: T.radius, stiffness: 0.075 })
    this.scene.add(this.tentL.mesh, this.tentR.mesh)

    // 4 tentacules décoratifs : en suspension libre sous le corps
    this.deco = []
    for (let i = 0; i < 4; i++) {
      const t = new Tentacle({
        n: T.decoN, segLen: T.decoSegLen, radius: 0.04, stiffness: 0,
        colorRoot: 0xa63f14, colorTip: 0xd97a3a
      })
      this.scene.add(t.mesh)
      this.deco.push(t)
    }
  }

  _buildRig() {
    this.rig = new THREE.Group()
    this.scene.add(this.rig)
    this.camera = new THREE.PerspectiveCamera(72, innerWidth / innerHeight, 0.05, 180)
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
      doubleJump: true, // le double saut fait partie du déplacement : actif dès le départ
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
  // vibration du contrôleur (satisfaction des mouvements)
  pulse(hand, intensity = 0.5, ms = 40) {
    if (!CFG.phys.hapticEnabled) return
    const session = this.renderer.xr.getSession()
    if (!session) return
    for (const src of session.inputSources) {
      if (src.handedness === hand && src.gamepad && src.gamepad.hapticActuators && src.gamepad.hapticActuators[0]) {
        try { src.gamepad.hapticActuators[0].pulse(intensity, ms) } catch { /* non supporté */ }
      }
    }
  }
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
    const f = this.game.fish.findGrab(tip, CFG.fish.grabRadius)
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
    // débloquage de capacité ? (le double saut est actif dès le départ)
    const a = CFG.growth.abilities
    for (const [key, need, label] of [
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
      sfx.jetUp()
      this.pulse('left', 0.4, 35)
      this.pulse('right', 0.4, 35)
      this.game.fx.bubbles(this.bodyCenter.clone(), 10, 0.22)
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
    this.pulse('left', 0.75, 60)
    this.pulse('right', 0.75, 60)
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
    // recharge du double saut : toujours 2 charges
    if (this.jumpCharges < 2) {
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
    // boutons A/B/X + stick via gamepad (polling)
    const session = this.renderer.xr.getSession()
    if (session) {
      let a = false, b = false, xl = false, stick = false
      let stickX = 0
      for (const src of session.inputSources) {
        const gp = src.gamepad
        if (!gp) continue
        if (src.handedness === 'right') {
          a = !!(gp.buttons[4] && gp.buttons[4].pressed)
          b = !!(gp.buttons[5] && gp.buttons[5].pressed)
          stick = !!(gp.buttons[3] && gp.buttons[3].pressed)
          stickX = gp.axes[2] || 0
        } else if (src.handedness === 'left') {
          xl = !!(gp.buttons[4] && gp.buttons[4].pressed) // bouton X
        }
      }
      // DOUBLE SAUT : A (droite) OU X (gauche) — 2 charges, même en pleine eau
      if ((a && !this._btnPrev.a) || (xl && !this._btnPrev.xl)) this._doJump()
      if (b && !this._btnPrev.b) this._doDash()
      if (stick && !this._btnPrev.stick) this._toggleCamo()
      if (Math.abs(stickX) > 0.65 && this._stickEdge !== Math.sign(stickX)) {
        this._stickEdge = Math.sign(stickX)
        this.cycleWeapon(this._stickEdge > 0 ? 1 : -1)
      } else if (Math.abs(stickX) < 0.4) this._stickEdge = 0
      this._btnPrev = { a, b, xl, stick }
    }

    // vitesse des mains RELATIVE au corps — LE cœur de Gorilla Tag.
    // On mesure la main DANS LE REPÈRE DU RIG (position monde − position du
    // rig) : c'est le tracking PUR, c'est-à-dire exactement la main vue depuis
    // le corps. La main posée sur une surface sans bouger → vitesse relative
    // NULLE → frein. La main qui pousse → poussée proportionnelle.
    // Correctif caméra qui vibrait violemment de haut en bas dès qu'on
    // touchait le sol (2 causes) :
    //  1. les corrections de collision (_collideBody / _fixHandPenetration)
    //     déplacent le rig d'un coup : mesurées en coordonnées monde, elles
    //     polluaient la vitesse de main → poussée inversée → nouveau choc →
    //     boucle oscillante. Dans le repère du rig, main ET rig bougent
    //     ensemble → elles s'annulent EXACTEMENT.
    //  2. l'historique stockait la vitesse calculée (now.sub(prev) mute now)
    //     au lieu de la position → une main IMMOBILE générait des vitesses
    //     fantômes énormes (±P/dt, P = position monde) alternées chaque frame.
    // Lissage : moyenne des 4 dernières frames (comme l'historique GT).
    for (const hand of ['left', 'right']) {
      const now = this._handPos(hand, new THREE.Vector3()).sub(this.rig.position) // repère du corps
      const prev = this._xrPosPrev[hand]
      if (this._xrPosPrev.has && dt > 0) {
        const rel = new THREE.Vector3().subVectors(now, prev).divideScalar(dt) // vitesse main ↔ corps
        const hist = this._handVelHist[hand]
        hist.push(rel)
        if (hist.length > 4) hist.shift()
        const avg = new THREE.Vector3()
        for (const v of hist) avg.add(v)
        avg.divideScalar(hist.length)
        this.handVelRel[hand].copy(avg)
      }
      this._xrPosPrev[hand].copy(now) // on stocke bien la POSITION (now n'est plus mutée)
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
    const inVR = this.renderer.xr.isPresenting

    if (inVR) {
      // ================= DÉPLACEMENT GORILLA TAG =================
      // 1) contact main ↔ surface pour chaque main (sphère de contact)
      this.handTouching.left = this._handContact('left')
      this.handTouching.right = this._handContact('right')
      const touching = this.handTouching.left || this.handTouching.right

      if (touching) {
        // 2) FORMULE GORILLA TAG : la vitesse du corps devient la somme des
        //    vitesses des mains EN CONTACT, inversée (relative au corps).
        //    - main posée sans bouger -> vitesse nulle -> on s'arrête net (frein)
        //    - main qui pousse vers le bas -> on monte (on se soulève du sol)
        //    - main qui pousse vers l'arrière -> on avance (on se pousse)
        //    - les 2 mains qui poussent -> vitesses cumulées
        //    Léger lissage (0.75/frame) pour absorber le jitter du tracking,
        //    tout en restant quasi instantané comme dans le vrai jeu.
        const push = TMP.v1.set(0, 0, 0)
        if (this.handTouching.left) push.add(this.handVelRel.left)
        if (this.handTouching.right) push.add(this.handVelRel.right)
        push.multiplyScalar(-p.gtGain)
        this.vel.lerp(push, 0.75)
      } else {
        // 3) EN VOL (dans l'eau) : élan conservé + gravité + traînée.
        //    C'est là que la poussée devient SATISFAISANTE : tu décolles
        //    avec toute ta vitesse et tu glisses loin.
        this.vel.y -= p.gravity * dt
        const fallCap = -p.fallCapVr
        if (this.vel.y < fallCap) this.vel.y = fallCap
        this.vel.multiplyScalar(Math.exp(-p.drag * dt))
        // retour d'asticot au décollage : on quitte une surface avec de l'élan
        if (this._wasTouching && this.vel.length() > 1.6) {
          const k = clamp(this.vel.length() / 8, 0.4, 1)
          this.pulse('left', p.launchHaptic * k, 50)
          this.pulse('right', p.launchHaptic * k, 50)
          this.game.fx.bubbles(this.bodyCenter.clone(), 6, 0.16)
        }
      }
      this._wasTouching = touching

      // souffle continu : vitesse des mains + vitesse du corps
      const hs = this.handVelRel.left.length() + this.handVelRel.right.length()
      sfx.handRush(Math.max(hs * 0.45, this.vel.length() * 0.5))

      // vitesse maximale (cap réaliste Gorilla Tag)
      const vmax = p.vrMaxSpeed * this.speedMult
      if (this.vel.length() > vmax) this.vel.setLength(vmax)
      // déplacement du rig
      this.rig.position.addScaledVector(this.vel, dt)
      // collision du corps
      this._collideBody()
      // 4) les mains ne traversent JAMAIS les surfaces : la pénétration
      //    d'une main repousse tout le corps (ancre physique, comme GT)
      this._fixHandPenetration()
    } else {
      // ================= BUREAU (clavier) =================
      this.vel.y -= p.gravity * dt
      const fallCap = -p.fallCapDesktop
      if (this.vel.y < fallCap) this.vel.y = fallCap
      this.vel.multiplyScalar(Math.exp(-p.drag * dt))
      const vmax = p.maxSpeed * this.speedMult
      if (this.vel.length() > vmax) this.vel.setLength(vmax)
      this.rig.position.addScaledVector(this.vel, dt)
      this._collideBody()
      // souffle continu (bureau : vitesse du corps)
      sfx.handRush(this.vel.length() * 0.55)
      // kick de FOV (bureau uniquement — jamais en casque, confort VR)
      const targetFov = 72 + clamp(this.vel.length() * 0.95, 0, 11)
      if (Math.abs(this.camera.fov - targetFov) > 0.05) {
        this.camera.fov = damp(this.camera.fov, targetFov, 6, dt)
        this.camera.updateProjectionMatrix()
      }
    }
  }

  // contact main ↔ surface (test sphère, sur une copie pour ne rien déplacer)
  _handContact(hand) {
    const test = this._handPos(hand, new THREE.Vector3())
    // +2 mm : _fixHandPenetration gare la main posée EXACTEMENT à
    // surface + contactRadius ; sans cet epsilon, le test strict la
    // déclare hors contact à chaque frame → la gravité s'accumule sous le
    // corps pendant que la correction la remonte → la caméra tremble
    // rapidement de haut en bas dès qu'on pose la main au sol.
    return this.game.world.collideSphere(test, CFG.phys.contactRadius + 0.002).hit
  }

  // collision du corps (sphère sous la tête) : ressort + amortissement
  _collideBody() {
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

  // anti-traversée façon Gorilla Tag : si une main pénètre une surface,
  // le corps est repoussé du même pas (les mains sont des ancres solides)
  _fixHandPenetration() {
    for (const hand of ['left', 'right']) {
      const pos = this._handPos(hand, new THREE.Vector3())
      const before = pos.clone()
      this.game.world.collideSphere(pos, CFG.phys.contactRadius)
      const delta = pos.sub(before)
      if (delta.lengthSq() > 1e-8) {
        if (delta.length() > 0.25) delta.setLength(0.25)
        this.rig.position.add(delta)
      }
    }
  }

  _updateBodyVisuals(dt, time, isDead) {
    // le corps suit la tête, orienté par le yaw, légèrement derrière
    // convention : -Z local = AVANT (le modèle GLB regarde -Z)
    const head = this.headWorld.clone()
    const look = this.getLookDir(new THREE.Vector3())
    look.y = 0; look.normalize()
    this.bodyGroup.position.copy(head).addScaledVector(look, -0.5 * this.scaleCur)
    this.bodyGroup.position.y -= 0.12 * this.scaleCur
    this.bodyGroup.rotation.y = Math.atan2(look.x, look.z) + Math.PI
    // inclinaison dynamique (lean) : le corps s"incline dans son mouvement,
    // la caméra ne bouge JAMAIS (confort VR)
    const right = new THREE.Vector3().crossVectors(look, new THREE.Vector3(0, -1, 0)).normalize()
    const vRight = clamp(this.vel.dot(right) * 0.055, -0.32, 0.32)
    const vFwd = clamp(this.vel.dot(look) * 0.028, -0.2, 0.2)
    this._leanRoll = damp(this._leanRoll || 0, vRight, 6, dt)
    this._leanPitch = damp(this._leanPitch || 0, vFwd, 6, dt)
    this.bodyGroup.rotation.z = this._leanRoll
    this.bodyGroup.rotation.x = this._leanPitch
    const s = this.scaleCur
    this.bodyGroup.scale.setScalar(s)
    if (isDead) this.bodyGroup.visible = false
    else this.bodyGroup.visible = true

    // modèle GLB : branché une fois chargé + anim de nage + teintes
    if (this.octo.root && this.octo.root.parent !== this.bodyGroup) {
      this.bodyGroup.add(this.octo.root)
    }
    this.octo.update(dt)
    if (this.hitFlash > 0 && !this._wasHurt) this.octo.flash(0.22)
    this._wasHurt = this.hitFlash > 0
    this.octo.setOpacity(this.camoActive ? 0.3 : 1)
  }

  _updateTentacles(dt, time) {
    const T = CFG.tent
    // racines : flancs du corps ; bouts : les mains (ou suspension libre)
    // convention : -Z local = avant, donc -Z local = face avant du corps
    const rootL = new THREE.Vector3(-0.17, -0.12, -0.04)
    const rootR = new THREE.Vector3(0.17, -0.12, -0.04)
    this.bodyGroup.updateMatrixWorld()
    rootL.applyMatrix4(this.bodyGroup.matrixWorld)
    rootR.applyMatrix4(this.bodyGroup.matrixWorld)

    const inVR = this.renderer.xr.isPresenting
    // au passage bureau <-> casque : reconfigurer les tentacules principaux
    // (casque = bras courts à auto-longueur ; bureau = longues tentacules fluides)
    if (this._tentVrMode !== inVR) {
      this._tentVrMode = inVR
      const n = inVR ? T.vrN : T.n
      const seg = inVR ? T.vrSegLen : T.segLen
      this.tentL.reshape(n, seg, inVR)
      this.tentR.reshape(n, seg, inVR)
    }
    for (const [tent, root, hand] of [
      [this.tentL, rootL, 'left'],
      [this.tentR, rootR, 'right']
    ]) {
      tent.setRoot(root)
      const handPos = this._handPos(hand, new THREE.Vector3())
      if (inVR) {
        // CASQUE : le bout suit la VRAIE main (manette) — c'est le bras du poulpe.
        // Il pend librement seulement si la main est collée au corps ET immobile.
        const dist = handPos.distanceTo(root)
        const near = dist < T.restZone * this.scaleCur
        const slow = this.handVelRel[hand].length() < T.restSpeed
        if (near && slow) tent.clearTip()
        else tent.setTip(handPos)
      } else {
        // BUREAU : la tentacule PEND librement quand la main imaginaire est
        // proche du corps ; s'étire vers elle sinon (comportement validé)
        const dist = handPos.distanceTo(root)
        const wD = clamp((dist - T.hangFree * this.scaleCur) / (T.hangReach * this.scaleCur), 0, 1)
        const wS = clamp(this.handVelRel[hand].length() / T.hangSpeed, 0, 1)
        const w = Math.max(wD, wS * 0.85, 0.85) // bureau : mains imaginaires toujours visées
        const len = (T.n - 1) * T.segLen * 0.8
        const hang = root.clone()
        hang.y -= len * this.scaleCur
        hang.x += Math.sin(time * 1.4 + (hand === 'left' ? 0 : 2.1)) * 0.1
        hang.z += Math.cos(time * 1.1 + (hand === 'left' ? 0 : 2.1)) * 0.1
        hang.lerp(handPos, w * w)
        tent.setTip(hang)
      }
      tent.update(dt, time, this.game.world)
    }

    // tentacules décoratifs : pure suspension (verlet libre)
    const offsets = [
      new THREE.Vector3(-0.1, -0.16, 0.12),
      new THREE.Vector3(0.1, -0.16, 0.12),
      new THREE.Vector3(-0.04, -0.2, 0.17),
      new THREE.Vector3(0.04, -0.2, 0.17)
    ]
    this.deco.forEach((t, i) => {
      const root = offsets[i].clone().applyMatrix4(this.bodyGroup.matrixWorld)
      t.setRoot(root)
      t.clearTip()
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
    for (const t of [this.tentL, this.tentR, ...this.deco]) t.setOpacity(o)
    if (this.octo.ready) this.octo.setOpacity(o)
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
        this.punchAnimT = 0.12
        this.pulse(t === this.tentL ? 'left' : 'right', 0.8, 50)
        break
      }
    }
  }

  // ================= synchro =================
  encodeState() {
    const a = new Float32Array(30)
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
    a[29] = this.renderer.xr.isPresenting ? 1 : 0 // mode VR (pour les bras distants)
    return a
  }

  // rééquiper depuis une liste reçue (non utilisé en local, garde l'API)
  weaponIdFromIdx(idx) {
    return CFG.weapons[clamp(idx, 0, CFG.weapons.length - 1)].id
  }
}
