// ============================================================
// NpcBounty — "Poulpe voyou" : cible IA personnelle des avis de
// recherche (visible seulement de son chasseur). Il traque,
// fuit quand il est blessé, frappe de ses tentacules.
// ============================================================
import * as THREE from 'three'
import { Tentacle } from './Tentacle.js'
import { makeTextSprite, rand, clamp } from '../utils.js'
import { CFG } from '../config.js'

let NPC_SEQ = 0

export class NpcBounty {
  constructor(scene, world, { name, level, reward }) {
    this.scene = scene
    this.world = world
    this.id = 'npc_' + (++NPC_SEQ)
    this.name = name
    this.level = level
    this.reward = reward
    this.scale = Math.min(1 + level * 0.06, 2.0)
    this.maxHp = 60 + level * 25
    this.hp = this.maxHp
    this.dmg = 8 + level * 2
    this.dead = false

    this.pos = new THREE.Vector3()
    // loin du joueur à l'apparition (et pas dans le commissariat)
    const spawn = new THREE.Vector3(CFG.spawn.x, CFG.spawn.y, CFG.spawn.z)
    let tries = 0
    do {
      this.pos.set(rand(-13, 13), rand(2, 9), rand(-9, 8))
      tries++
    } while (this.pos.distanceTo(spawn) < 8 && tries < 30)
    this.vel = new THREE.Vector3()
    this.yaw = rand(0, Math.PI * 2)
    this.target = new THREE.Vector3()
    this.stateTimer = 0
    this.mode = 'wander'
    this.punchT = rand(0.5, 1.5)
    this.attackAnim = 0
    this.fleeT = 0
    this._flashT = 0
    this.speed = 2.1 + level * 0.05

    this._build()
  }

  _build() {
    const g = new THREE.Group()
    this.group = g
    this.scene.add(g)
    const mat = new THREE.MeshStandardMaterial({ color: 0x8a3d6e, roughness: 0.6 })
    this.mantleMat = mat
    const mantle = new THREE.Mesh(new THREE.SphereGeometry(0.34, 14, 12), mat)
    mantle.scale.set(1, 0.95, 1.25)
    g.add(mantle)
    const tip = new THREE.Mesh(new THREE.ConeGeometry(0.2, 0.5, 10), mat)
    tip.position.set(0, 0.12, 0.42)
    tip.rotation.x = Math.PI / 2.2
    g.add(tip)
    const eyeMat = new THREE.MeshStandardMaterial({ color: 0xffe9c9, roughness: 0.3 })
    const pupilMat = new THREE.MeshStandardMaterial({ color: 0x181018, roughness: 0.3 })
    for (const s of [-1, 1]) {
      const eye = new THREE.Mesh(new THREE.SphereGeometry(0.09, 10, 10), eyeMat)
      eye.position.set(s * 0.15, 0.16, -0.26)
      g.add(eye)
      const pupil = new THREE.Mesh(new THREE.SphereGeometry(0.045, 8, 8), pupilMat)
      pupil.position.set(s * 0.15, 0.16, -0.335)
      g.add(pupil)
    }
    this.mats = [mat, eyeMat, pupilMat]

    // 4 tentacules courtes (2 avant = ses "poings")
    this.tentF = [new Tentacle({ colorRoot: 0x6e2d55, colorTip: 0xa04a7c }), new Tentacle({ colorRoot: 0x6e2d55, colorTip: 0xa04a7c })]
    this.deco = []
    for (let i = 0; i < 3; i++) {
      this.deco.push(new Tentacle({ n: 10, segLen: 0.14, radius: 0.038, stiffness: 0.02, colorRoot: 0x572443, colorTip: 0x6e2d55 }))
    }
    for (const t of [...this.tentF, ...this.deco]) this.scene.add(t.mesh)

    this.nameSprite = makeTextSprite(['VOYOU — ' + this.name, 'PRIME : ' + this.reward + ' ¢'], {
      fontSize: 40, color: ['#ffb0d8', '#ffd166'], bg: 'rgba(30,6,20,0.78)'
    })
    this.scene.add(this.nameSprite)
  }

  damage(amount) {
    if (this.dead) return
    this.hp -= amount
    this._flashT = 0.15
    if (this.hp < this.maxHp * 0.25 && this.fleeT <= 0) this.fleeT = 4
    if (this.hp <= 0) this.dead = true
  }

  update(dt, time, playerPos, playerDead, inkClouds) {
    if (this.dead) return
    const toPlayer = playerPos.clone().sub(this.pos)
    const dist = toPlayer.length()

    // l'encre le bloque : il ne voit plus rien
    let blinded = false
    for (const c of inkClouds) {
      if (c.blocks(this.pos) || this.pos.distanceTo(c.pos) < CFG.ink.npcBlindRadius) blinded = true
    }

    // IA
    if (blinded || playerDead) {
      this.mode = 'wander'
    } else if (this.fleeT > 0) {
      this.mode = 'flee'
      this.fleeT -= dt
    } else if (dist < 8) {
      this.mode = dist < 1.5 * this.scale ? 'attack' : 'chase'
    } else {
      this.mode = 'wander'
    }

    const desired = new THREE.Vector3()
    let speed = this.speed
    if (this.mode === 'wander') {
      this.stateTimer -= dt
      if (this.stateTimer <= 0) {
        const b = this.world.bounds
        this.target.set(rand(b.xmin + 2, b.xmax - 2), rand(1.5, b.topY - 1.5), rand(b.zmin + 2, b.zmax - 2))
        this.stateTimer = rand(2.5, 5)
      }
      desired.copy(this.target).sub(this.pos)
      if (desired.lengthSq() < 1) this.stateTimer = 0
      speed *= 0.6
    } else if (this.mode === 'chase') {
      desired.copy(toPlayer).normalize()
      speed *= 1.15
    } else if (this.mode === 'attack') {
      desired.set(0, 0, 0)
      this.punchT -= dt
      if (this.punchT <= 0 && dist < 2.2 * this.scale) {
        this.punchT = 1.2
        this.attackAnim = 0.35
        window.__game && window.__game.onNpcPunch(this)
      }
    } else if (this.mode === 'flee') {
      desired.copy(toPlayer).multiplyScalar(-1).normalize()
      speed *= 1.5
    }

    if (desired.lengthSq() > 1e-6) {
      desired.normalize()
      const targetYaw = Math.atan2(desired.x, desired.z)
      let dy = targetYaw - this.yaw
      while (dy > Math.PI) dy -= Math.PI * 2
      while (dy < -Math.PI) dy += Math.PI * 2
      this.yaw += dy * Math.min(1, 5 * dt)
      this.vel.lerp(desired.clone().multiplyScalar(speed), Math.min(1, 4 * dt))
    } else {
      this.vel.multiplyScalar(Math.exp(-3 * dt))
    }
    this.pos.addScaledVector(this.vel, dt)
    // légère flottaison + bornes + collision
    this.pos.y += Math.sin(time * 1.8 + this.id.length) * 0.003
    const res = this.world.collideSphere(this.pos, 0.45 * this.scale)

    this.group.position.copy(this.pos)
    this.group.rotation.y = this.yaw
    this.group.scale.setScalar(this.scale)

    // flash de dégât
    if (this._flashT > 0) {
      this._flashT -= dt
      this.mantleMat.color.setHex(0xff5a3c)
    } else this.mantleMat.color.setHex(0x8a3d6e)

    // étiquette
    const up = this.pos.clone().add(new THREE.Vector3(0, 0.8 * this.scale, 0))
    this.nameSprite.position.copy(up)

    // tentacules
    const rootL = new THREE.Vector3(-0.24, -0.05, -0.05).applyMatrix4(this.group.matrixWorld)
    const rootR = new THREE.Vector3(0.24, -0.05, -0.05).applyMatrix4(this.group.matrixWorld)
    const lunge = this.attackAnim > 0
    if (lunge) this.attackAnim -= dt
    const pL = lunge && dist < 3 ? playerPos.clone() : this.pos.clone().add(new THREE.Vector3(-0.1, -0.6 * this.scale, -0.7 * this.scale).applyQuaternion(this.group.quaternion).add(this.pos))
    const pR = lunge && dist < 3 ? playerPos.clone() : this.pos.clone().add(new THREE.Vector3(0.1, -0.6 * this.scale, -0.7 * this.scale).applyQuaternion(this.group.quaternion).add(this.pos))
    this.tentF[0].setRoot(rootL); this.tentF[0].setTip(pL)
    this.tentF[1].setRoot(rootR); this.tentF[1].setTip(pR)
    this.tentF[0].update(dt, time, this.world)
    this.tentF[1].update(dt, time, this.world)

    const back = new THREE.Vector3(0, 0, 1).applyQuaternion(this.group.quaternion)
    const offsets = [new THREE.Vector3(-0.1, -0.14, 0.2), new THREE.Vector3(0.1, -0.14, 0.2), new THREE.Vector3(0, -0.15, 0.22)]
    this.deco.forEach((t, i) => {
      const root = offsets[i].clone().applyMatrix4(this.group.matrixWorld)
      const tip = root.clone().addScaledVector(back, 0.7 * this.scale)
        .add(new THREE.Vector3(Math.sin(time * 1.4 + i) * 0.25, -0.4 * this.scale, 0))
      t.setRoot(root); t.setTip(tip)
      t.update(dt, time, this.world)
    })
  }

  get bodyCenter() { return this.pos }
  get bodyRadius() { return 0.5 * this.scale }

  dispose() {
    this.scene.remove(this.group, this.nameSprite)
    for (const t of [...this.tentF, ...this.deco]) this.scene.remove(t.mesh)
  }
}
