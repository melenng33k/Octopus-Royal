// ============================================================
// RemotePlayer — l'avatar d'un autre poulpe connecté
// Interpole la pose reçue (tête, mains), affiche corps + yeux +
// tentacules + étiquette de nom + barre de vie + arme + camouflage.
// ============================================================
import * as THREE from 'three'
import { Tentacle } from './Tentacle.js'
import { createOcto } from './OctoModel.js'
import { buildGunMesh, initWeaponProtos } from '../systems/Weapons.js'
import { makeTextSprite, canvasTexture, damp, clamp } from '../utils.js'
import { CFG } from '../config.js'

initWeaponProtos()

export class RemotePlayer {
  constructor(scene, peerId, game, meta) {
    this.scene = scene
    this.id = peerId
    this.game = game
    this.name = (meta && meta.name) || 'Poulpe'
    this.fish = (meta && meta.fish) || 0

    // cibles interpolées
    this.headPos = new THREE.Vector3(0, 5, 0)
    this.headQuat = new THREE.Quaternion()
    this.lHand = new THREE.Vector3().copy(this.headPos)
    this.rHand = new THREE.Vector3().copy(this.headPos)
    this.rHandQuat = new THREE.Quaternion()
    this.scale = 1
    this.hpNorm = 1
    this.weaponIdx = 0
    this.camo = false
    this.alive = true
    this.fishL = -1
    this.fishR = -1
    this._hasState = false
    this.vrPeer = false
    this._peerVr = null

    this._build()
    this._refreshName()
  }

  _build() {
    const g = new THREE.Group()
    this.group = g
    this.scene.add(g)

    // corps : modèle 3D du poulpe (octo.glb), teinté vert
    this.octo = createOcto(0x3f8f6a)

    // tentacules principaux : auto-longueur (sécurité anti-explosion),
    // reconfigurés selon le mode du joueur distant dès son premier état
    const T = CFG.tent
    this.tentL = new Tentacle({ n: T.vrN, segLen: T.vrSegLen, radius: T.radius, stiffness: 0.075, adaptive: true, colorRoot: 0x2e7a54, colorTip: 0x54b183 })
    this.tentR = new Tentacle({ n: T.vrN, segLen: T.vrSegLen, radius: T.radius, stiffness: 0.075, adaptive: true, colorRoot: 0x2e7a54, colorTip: 0x54b183 })
    this.deco = []
    for (let i = 0; i < 4; i++) {
      this.deco.push(new Tentacle({ n: T.decoN, segLen: T.decoSegLen, radius: 0.04, stiffness: 0, colorRoot: 0x255f44, colorTip: 0x3f8f6a }))
    }
    this.scene.add(this.tentL.mesh, this.tentR.mesh)
    for (const t of this.deco) this.scene.add(t.mesh)

    // étiquette de nom + niveau
    this.nameSprite = makeTextSprite([this.name, 'Niv 1'], { fontSize: 44, color: ['#eafff5', '#ffd166'], bg: 'rgba(6,20,26,0.7)' })
    this.scene.add(this.nameSprite)

    // barre de vie
    this._hpCanvas = canvasTexture(128, 16)
    this.hpSprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: this._hpCanvas.tex, transparent: true, depthWrite: false }))
    this.hpSprite.scale.set(0.62, 0.08, 1)
    this._lastHpDrawn = -1
    this.scene.add(this.hpSprite)
    this._drawHp()

    // arme du joueur distant
    this.gunHolder = new THREE.Group()
    this.scene.add(this.gunHolder)
    this.gunMesh = null
    this._lastWeaponIdx = -1

    this._flashT = 0
  }

  _refreshName() {
    this.scene.remove(this.nameSprite)
    const lvl = Math.floor(this.fish / CFG.growth.levelPerFish) + 1
    this.nameSprite = makeTextSprite([this.name, 'Niv ' + lvl], { fontSize: 44, color: ['#eafff5', '#ffd166'], bg: 'rgba(6,20,26,0.7)' })
    this.scene.add(this.nameSprite)
  }

  _drawHp() {
    const { ctx, canvas, tex } = this._hpCanvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.fillStyle = 'rgba(8,16,20,0.75)'
    ctx.beginPath(); ctx.roundRect(0, 0, canvas.width, canvas.height, 6); ctx.fill()
    const w = Math.max(0, Math.min(1, this.hpNorm)) * (canvas.width - 6)
    ctx.fillStyle = this.hpNorm > 0.5 ? '#54d98c' : this.hpNorm > 0.25 ? '#ffd166' : '#ff5a5a'
    ctx.beginPath(); ctx.roundRect(3, 3, w, canvas.height - 6, 4); ctx.fill()
    tex.needsUpdate = true
  }

  applyState(f32) {
    if (!f32 || f32.length < 29) return
    // données corrompues / aberrantes -> on ignore ce paquet
    if (!isFinite(f32[0] + f32[1] + f32[2] + f32[7] + f32[8] + f32[9] + f32[10] + f32[11] + f32[12])) return
    this.headPos.set(f32[0], f32[1], f32[2])
    this.headQuat.set(f32[3], f32[4], f32[5], f32[6])
    this.lHand.set(f32[7], f32[8], f32[9])
    this.rHand.set(f32[10], f32[11], f32[12])
    this.scale = f32[13]
    this.hpNorm = f32[14]
    this.weaponIdx = f32[15]
    this.camo = f32[16] > 0.5
    const newFish = Math.round(f32[17])
    if (newFish !== this.fish) { this.fish = newFish; this._refreshName() }
    this.alive = f32[18] > 0.5
    this.rHandQuat.set(f32[19], f32[20], f32[21], f32[22])
    this.fishL = Math.round(f32[27])
    this.fishR = Math.round(f32[28])
    this.vrPeer = f32.length > 29 && f32[29] > 0.5
    this._hasState = true
    if (Math.abs(this.hpNorm - this._lastHpDrawn) > 0.02) { this._drawHp(); this._lastHpDrawn = this.hpNorm }
  }

  setMeta(meta) {
    if (!meta) return
    if (meta.name && meta.name !== this.name) { this.name = meta.name; this._refreshName() }
    if (typeof meta.fish === 'number') this.fish = meta.fish
  }

  hitFlash() { this._flashT = 0.15; if (this.octo) this.octo.flash(0.15) }

  update(dt, time) {
    if (!this._hasState) return
    // interpolation douce
    this._renderPos = this._renderPos || this.headPos.clone()
    this._renderPos.x = damp(this._renderPos.x, this.headPos.x, 14, dt)
    this._renderPos.y = damp(this._renderPos.y, this.headPos.y, 14, dt)
    this._renderPos.z = damp(this._renderPos.z, this.headPos.z, 14, dt)
    this.group.position.copy(this._renderPos).addScaledVector(this._forward(), -0.5 * this.scale)
    this.group.position.y -= 0.12 * this.scale
    // convention -Z local = avant (le modèle GLB regarde -Z)
    this.group.rotation.y = Math.atan2(this._forward().x, this._forward().z) + Math.PI
    this.group.scale.setScalar(this.scale)
    this.group.visible = this.alive

    // étiquettes au-dessus de la tête
    const up = this._renderPos.clone().add(new THREE.Vector3(0, 0.75 * this.scale, 0))
    this.nameSprite.position.copy(up)
    this.nameSprite.visible = this.alive && !this.camo
    this.hpSprite.position.copy(up).add(new THREE.Vector3(0, 0.16 * this.scale, 0))
    this.hpSprite.visible = this.alive && !this.camo && this.hpNorm < 0.999

    // flash rouge quand touché (via octo.flash appelé dans hitFlash)
    this._flashT = Math.max(0, this._flashT - dt)

    // modèle GLB : branchement + anim + camouflage
    if (this.octo.root && this.octo.root.parent !== this.group) this.group.add(this.octo.root)
    this.octo.update(dt)
    const targetOpacity = this.camo ? CFG.abilities.camoOpacity : 1
    this._octoOpacity = damp(this._octoOpacity === undefined ? 1 : this._octoOpacity, targetOpacity, 8, dt)
    this.octo.setOpacity(this._octoOpacity)
    for (const t of [this.tentL, this.tentR, ...this.deco]) {
      t.mesh.material.transparent = targetOpacity < 1
      t.mesh.material.opacity = damp(t.mesh.material.opacity, targetOpacity, 8, dt)
    }

    // arme
    if (this.weaponIdx !== this._lastWeaponIdx) {
      this._lastWeaponIdx = this.weaponIdx
      if (this.gunMesh) this.gunHolder.remove(this.gunMesh)
      const wId = CFG.weapons[clamp(this.weaponIdx, 0, CFG.weapons.length - 1)].id
      if (wId !== 'fists') {
        this.gunMesh = buildGunMesh(wId)
        this.gunHolder.add(this.gunMesh)
      } else this.gunMesh = null
    }
    this.gunHolder.position.copy(this.rHand)
    this.gunHolder.quaternion.copy(this.rHandQuat)
    this.gunHolder.visible = this.alive

    // tentacules : racines aux flancs ; adaptés au mode du joueur distant
    // (pair VR = vraies mains suivies ; pair bureau = longues tentacules)
    const T = CFG.tent
    if (this._peerVr !== this.vrPeer) {
      this._peerVr = this.vrPeer
      const n = this.vrPeer ? T.vrN : T.n
      const seg = this.vrPeer ? T.vrSegLen : T.segLen
      this.tentL.reshape(n, seg, true)
      this.tentR.reshape(n, seg, true)
    }
    this.group.updateMatrixWorld()
    const rootL = new THREE.Vector3(-0.17, -0.12, -0.04).applyMatrix4(this.group.matrixWorld)
    const rootR = new THREE.Vector3(0.17, -0.12, -0.04).applyMatrix4(this.group.matrixWorld)
    for (const [tent, root, hand] of [
      [this.tentL, rootL, this.lHand],
      [this.tentR, rootR, this.rHand]
    ]) {
      tent.setRoot(root)
      const dist = hand.distanceTo(root)
      if (this.vrPeer) {
        // pair casque : le bout suit la vraie main ; pend si main collée au corps
        if (dist < T.restZone * this.scale) tent.clearTip()
        else tent.setTip(hand)
      } else {
        // pair bureau : pend si la main est proche, s'étire vers elle sinon
        const wD = clamp((dist - T.hangFree * this.scale) / (T.hangReach * this.scale), 0, 1)
        if (wD > 0.04) {
          const len = (T.n - 1) * T.segLen * 0.8
          const hang = root.clone()
          hang.y -= len * this.scale
          hang.lerp(hand, wD * wD)
          tent.setTip(hang)
        } else tent.clearTip()
      }
      tent.update(dt, time, this.game.world)
    }

    // tentacules décoratifs : suspension libre
    const offsets = [
      new THREE.Vector3(-0.1, -0.16, 0.12), new THREE.Vector3(0.1, -0.16, 0.12),
      new THREE.Vector3(-0.04, -0.2, 0.17), new THREE.Vector3(0.04, -0.2, 0.17)
    ]
    this.deco.forEach((t, i) => {
      const root = offsets[i].clone().applyMatrix4(this.group.matrixWorld)
      t.setRoot(root)
      t.clearTip()
      t.update(dt, time, this.game.world)
    })

    // poissons portés par ce joueur
    const fish = this.game.fish
    if (this.fishR >= 0 && this.fishR < fish.fish.length) {
      const f = fish.fish[this.fishR]
      if (f.alive || f.holder === 'net') { f.holder = 'net'; fish.followRemoteHand(f, this.rHand) }
    }
    if (this.fishL >= 0 && this.fishL < fish.fish.length) {
      const f = fish.fish[this.fishL]
      if (f.alive || f.holder === 'net') { f.holder = 'net'; fish.followRemoteHand(f, this.lHand) }
    }
  }

  _forward(out = new THREE.Vector3()) {
    return out.set(0, 0, -1).applyQuaternion(this.headQuat)
  }

  get position() { return this._renderPos || this.headPos }

  dispose() {
    this.scene.remove(this.group, this.nameSprite, this.hpSprite, this.gunHolder,
      this.tentL.mesh, this.tentR.mesh)
    for (const t of this.deco) this.scene.remove(t.mesh)
  }
}
