// ============================================================
// NpcBounty — "Poulpe voyou" : cible IA des avis de recherche.
// MONDE PARTAGÉ : il n'existe qu'UNE copie de chaque voyou pour toute
// la salle. L'hôte (pair au plus petit id) fait tourner l'IA et diffuse
// son état ; les invités interpolent (mode remote). Il traque le joueur
// le plus proche, fuit quand il est blessé, frappe de ses tentacules.
// ============================================================
import * as THREE from 'three'
import { Tentacle } from './Tentacle.js'
import { createOcto } from './OctoModel.js'
import { makeTextSprite, rand, clamp, damp } from '../utils.js'
import { CFG } from '../config.js'

let NPC_SEQ = 0

export class NpcBounty {
  // remote = true : l'invité n'exécute PAS l'IA, il interpole l'état réseau.
  // id/maxHp : imposés par le roster de l'hôte pour que tous les pairs
  // désignent le même voyou.
  constructor(scene, world, { name, level, reward, id, maxHp, remote } = {}) {
    this.scene = scene
    this.world = world
    this.id = id || ('npc_' + (++NPC_SEQ))
    this.name = name
    this.level = level
    this.reward = reward
    this.remote = !!remote
    this.scale = Math.min(1 + level * 0.06, 2.0)
    this.maxHp = maxHp || (60 + level * 25)
    this.hp = this.maxHp
    this.dmg = 8 + level * 2
    this.dead = false
    // --- synchronisation réseau (côté invité) ---
    this.hasNet = false
    this.netX = 0; this.netY = 0; this.netZ = 0
    this.netYaw = 0
    this.netScale = this.scale
    this.netAttack = 0
    this._hp01 = 1
    this._hidden = false
    // --- qui il traque / qui l'a touché (côté hôte) ---
    this.curTarget = 'self'   // 'self' ou peerId du joueur traqué
    this.lastHitBy = null     // 'host' ou peerId du dernier tireur

    this.pos = new THREE.Vector3()
    // loin du joueur à l'apparition (et pas dans le commissariat)
    const spawn = new THREE.Vector3(CFG.spawn.x, CFG.spawn.y, CFG.spawn.z)
    const b0 = world.bounds
    let tries = 0
    do {
      this.pos.set(rand(b0.xmin + 4, b0.xmax - 4), 0, rand(b0.zmin + 4, b0.zmax - 6))
      tries++
    } while (this.pos.distanceTo(spawn) < 10 && tries < 30)
    // apparition près du fond : entre 1 et 3 m au-dessus du relief (jamais en haute eau)
    this.pos.y = this.world.terrainHeight(this.pos.x, this.pos.z) + rand(1.2, 3)
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

    // corps : modèle 3D du poulpe (octo.glb), teinté violet voyou
    this.octo = createOcto(0x8a3d6e)

    // 2 tentacules d'attaque ("poings") : auto-longueur -> proportionnés au
    // corps et SANS risque d'explosion quand il fonce sur le joueur
    const T = CFG.tent
    this.tentF = [
      new Tentacle({ n: T.npcN, segLen: T.npcSegLen * this.scale, radius: T.radius, stiffness: 0.07, adaptive: true, colorRoot: 0x6e2d55, colorTip: 0xa04a7c }),
      new Tentacle({ n: T.npcN, segLen: T.npcSegLen * this.scale, radius: T.radius, stiffness: 0.07, adaptive: true, colorRoot: 0x6e2d55, colorTip: 0xa04a7c })
    ]
    this.deco = []
    for (let i = 0; i < 3; i++) {
      this.deco.push(new Tentacle({ n: T.decoN, segLen: T.decoSegLen, radius: 0.038, stiffness: 0, colorRoot: 0x572443, colorTip: 0x6e2d55 }))
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
    if (this.octo) this.octo.flash(0.15)
    if (this.hp < this.maxHp * 0.25 && this.fleeT <= 0) this.fleeT = 4
    if (this.hp <= 0) this.dead = true
  }

  update(dt, time, playerPos, playerDead, inkClouds) {
    if (this.dead) return
    let dist = 1e9
    if (this.remote) {
      // INVITÉ : aucun IA — on interpole l'état diffusé par l'hôte
      if (!this._applyNet(dt)) return // pas encore d'état reçu : reste caché
      dist = playerPos ? playerPos.distanceTo(this.pos) : 1e9
    } else {
      // HÔTE : simulation complète (IA + physique)
      dist = this._ai(dt, time, playerPos, playerDead, inkClouds)
    }
    this._visuals(dt, time, playerPos, dist)
  }

  // ----- invité : interpolation de l'état réseau -----
  _applyNet(dt) {
    if (!this.hasNet) {
      this._setHidden(true)
      return false
    }
    this._setHidden(false)
    this.pos.x = damp(this.pos.x, this.netX, 10, dt)
    this.pos.y = damp(this.pos.y, this.netY, 10, dt)
    this.pos.z = damp(this.pos.z, this.netZ, 10, dt)
    let dy = this.netYaw - this.yaw
    while (dy > Math.PI) dy -= Math.PI * 2
    while (dy < -Math.PI) dy += Math.PI * 2
    this.yaw += dy * Math.min(1, 8 * dt)
    this.scale = damp(this.scale, this.netScale, 6, dt)
    if (this.netAttack > 0.02) this.attackAnim = this.netAttack
    return true
  }

  _setHidden(v) {
    if (this._hidden === v) return
    this._hidden = v
    this.group.visible = !v
    this.nameSprite.visible = !v
    for (const t of [...this.tentF, ...this.deco]) t.mesh.visible = !v
  }

  // ----- hôte : IA + physique (renvoie la distance au joueur traqué) -----
  _ai(dt, time, playerPos, playerDead, inkClouds) {
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
        this.target.set(rand(b.xmin + 2, b.xmax - 2), 0, rand(b.zmin + 2, b.zmax - 2))
        // cible près du fond : entre 1 et 3 m au-dessus du relief
        this.target.y = this.world.terrainHeight(this.target.x, this.target.z) + rand(1, 3)
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

    // ---- plafond d'altitude : le voyou reste ENTRE 0 ET 3 M DU SOL ----
    // (il traque au ras des dunes ; s'il est trop haut il redescend au lieu de monter)
    const groundY = this.world.terrainHeight(this.pos.x, this.pos.z)
    const alt = this.pos.y - groundY
    if (alt > 1.8 && desired.y > 0) desired.y *= 0.15 // freine la montée près du plafond
    if (alt > 3) desired.y = Math.min(desired.y, 0) - 1.4 // redescend activement

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
    // bornes dures : JAMAIS plus de 3 m au-dessus du relief (le fond, lui,
    // est géré par la collision sphère ↔ terrain juste en dessous)
    const capY = this.world.terrainHeight(this.pos.x, this.pos.z) + 3
    if (this.pos.y > capY) {
      this.pos.y = capY
      if (this.vel.y > 0) this.vel.y = 0
    }
    this.world.collideSphere(this.pos, 0.45 * this.scale)
    return dist
  }

  // ----- visuel commun (hôte ET invité) : modèle, étiquette, tentacules -----
  _visuals(dt, time, playerPos, dist) {
    this.group.position.copy(this.pos)
    // convention -Z local = avant (le modèle GLB regarde -Z)
    this.group.rotation.y = this.yaw + Math.PI
    this.group.scale.setScalar(this.scale)

    // modèle GLB : branchement + anim + flash
    if (this.octo.root && this.octo.root.parent !== this.group) this.group.add(this.octo.root)
    this.octo.update(dt)
    if (this._flashT > 0) {
      this._flashT -= dt
    }

    // étiquette
    const up = this.pos.clone().add(new THREE.Vector3(0, 0.8 * this.scale, 0))
    this.nameSprite.position.copy(up)

    // tentacules
    const rootL = new THREE.Vector3(-0.17, -0.12, -0.04).applyMatrix4(this.group.matrixWorld)
    const rootR = new THREE.Vector3(0.17, -0.12, -0.04).applyMatrix4(this.group.matrixWorld)
    const lunge = this.attackAnim > 0
    if (lunge) this.attackAnim -= dt
    const aim = lunge && dist < 3 && playerPos ? playerPos : this.pos.clone().add(new THREE.Vector3(0, -0.6 * this.scale, -0.7 * this.scale).applyQuaternion(this.group.quaternion))
    const pL = lunge && dist < 3 && playerPos ? playerPos.clone() : aim.clone().add(new THREE.Vector3(-0.1, 0, 0))
    const pR = lunge && dist < 3 && playerPos ? playerPos.clone() : aim.clone().add(new THREE.Vector3(0.1, 0, 0))
    this.tentF[0].setRoot(rootL); this.tentF[0].setTip(pL)
    this.tentF[1].setRoot(rootR); this.tentF[1].setTip(pR)
    this.tentF[0].update(dt, time, this.world)
    this.tentF[1].update(dt, time, this.world)

    // tentacules décoratifs : suspension libre (derrière = +Z local)
    const offsets = [
      new THREE.Vector3(-0.1, -0.16, 0.13),
      new THREE.Vector3(0.1, -0.16, 0.13),
      new THREE.Vector3(0, -0.2, 0.18)
    ]
    this.deco.forEach((t, i) => {
      const root = offsets[i].clone().applyMatrix4(this.group.matrixWorld)
      t.setRoot(root)
      t.clearTip()
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
