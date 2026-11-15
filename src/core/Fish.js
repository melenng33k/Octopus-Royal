// ============================================================
// FishSchool — poissons qui se baladent et t'évitent.
// L'hôte (pair au plus petit id) simule l'IA et diffuse les
// positions ; les invités interpolent. Attrape / mange local.
// ============================================================
import * as THREE from 'three'
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js'
import { CFG } from '../config.js'
import { rand, randi, clamp, damp } from '../utils.js'

const PALETTES = [
  { body: 0xffc93c, fin: 0xff8a3c },   // jaune
  { body: 0xff7043, fin: 0xffffff },   // clown
  { body: 0x29c2a9, fin: 0x1f8f7d },   // turquoise
  { body: 0xf2f2f2, fin: 0x2e6f6f },   // blanc
  { body: 0xff5f8f, fin: 0xffd166 }    // rose
]

function buildFishGeometry(pal) {
  const geos = []
  const paint = (geo, color) => {
    const c = new THREE.Color(color)
    const n = geo.attributes.position.count
    const arr = new Float32Array(n * 3)
    for (let i = 0; i < n; i++) arr[i * 3] = c.r, arr[i * 3 + 1] = c.g, arr[i * 3 + 2] = c.b
    geo.setAttribute('color', new THREE.BufferAttribute(arr, 3))
    return geo
  }
  // corps : sphère aplatie + queue + nageoire dorsale + yeux
  const body = new THREE.SphereGeometry(0.16, 10, 8)
  body.scale(1.5, 0.9, 0.62)
  geos.push(paint(body, pal.body))
  const tail = new THREE.ConeGeometry(0.1, 0.2, 6)
  tail.rotateZ(Math.PI / 2)
  tail.translate(-0.3, 0, 0)
  geos.push(paint(tail, pal.fin))
  const dorsal = new THREE.ConeGeometry(0.05, 0.14, 5)
  dorsal.translate(0.02, 0.16, 0)
  geos.push(paint(dorsal, pal.fin))
  for (const s of [-1, 1]) {
    const eye = new THREE.SphereGeometry(0.032, 6, 6)
    eye.translate(0.14, 0.03, s * 0.09)
    geos.push(paint(eye, 0x101418))
  }
  return geos
}

export class FishSchool {
  constructor(scene, world) {
    this.scene = scene
    this.world = world
    this.count = CFG.fish.count
    this.fish = []

    // une géométrie fusionnée par palette (1 draw call / poisson)
    this.geometries = PALETTES.map(pal => mergeGeometries(buildFishGeometry(pal)))

    for (let i = 0; i < this.count; i++) {
      this.fish.push(this._spawn(i))
    }
    // synchro réseau
    this.netPos = new Map() // id -> {x,y,z,yaw,alive}
    this.tempV = new THREE.Vector3()
  }

  _spawn(id) {
    const gi = id % this.geometries.length
    const geo = this.geometries[gi]
    const mesh = new THREE.Mesh(geo, this._materialFor(gi))
    const f = {
      id,
      mesh,
      pos: mesh.position,
      yaw: rand(0, Math.PI * 2),
      speed: rand(0.7, 1.3),
      target: new THREE.Vector3(),
      stateTimer: rand(1, 4),
      alive: true,
      holder: null,
      respawnT: 0,
      phase: rand(0, Math.PI * 2),
      hasNet: false
    }
    this._pickTarget(f)
    f.pos.set(rand(-14, 14), rand(1.5, 10), rand(-8, 8))
    this.scene.add(mesh)
    return f
  }

  _materialFor(gi) {
    if (!this.materials) this.materials = []
    if (!this.materials[gi]) {
      this.materials[gi] = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.55, metalness: 0.05 })
    }
    return this.materials[gi]
  }

  _pickTarget(f) {
    const b = this.world.bounds
    f.target.set(rand(b.xmin + 2, b.xmax - 2), rand(1.2, b.topY - 1), rand(b.zmin + 2, b.zmax - 2))
  }

  // ----- simulation hôte -----
  simulate(dt, time, threats) {
    // threats : tableau de Vector3 (têtes + mains des joueurs)
    for (const f of this.fish) {
      if (!f.alive) {
        f.respawnT -= dt
        if (f.respawnT <= 0) this._respawn(f)
        continue
      }
      if (f.holder) continue // porté par un joueur

      // fuite ?
      let fleeFrom = null, fleeDist = 1e9
      for (const t of threats) {
        const d = t.distanceTo(f.pos)
        if (d < CFG.fish.fleeRadius && d < fleeDist) { fleeDist = d; fleeFrom = t }
      }

      const desired = this.tempV
      if (fleeFrom) {
        desired.copy(f.pos).sub(fleeFrom).normalize()
        f.speed = CFG.fish.fleeSpeed
        f.stateTimer = 1.2
      } else {
        f.stateTimer -= dt
        if (f.stateTimer <= 0) { this._pickTarget(f); f.stateTimer = rand(2, 5) }
        desired.copy(f.target).sub(f.pos)
        if (desired.lengthSq() < 0.4) { this._pickTarget(f); f.stateTimer = rand(2, 5) }
        desired.normalize()
        f.speed = damp(f.speed, CFG.fish.cruiseSpeed, 2, dt)
      }
      // tourner en douceur vers la direction voulue
      const targetYaw = Math.atan2(desired.x, desired.z)
      let dy = targetYaw - f.yaw
      while (dy > Math.PI) dy -= Math.PI * 2
      while (dy < -Math.PI) dy += Math.PI * 2
      f.yaw += dy * Math.min(1, 4.5 * dt)
      const pitch = clamp(-desired.y * 0.8, -0.6, 0.6)
      const move = desired.clone().multiplyScalar(f.speed * dt)
      f.pos.add(move)
      // rester dans le bassin
      const b = this.world.bounds
      f.pos.x = clamp(f.pos.x, b.xmin + 1, b.xmax - 1)
      f.pos.z = clamp(f.pos.z, b.zmin + 1, b.zmax - 1)
      f.pos.y = clamp(f.pos.y, 0.8, b.topY - 0.8)
      f.mesh.rotation.set(pitch, f.yaw, Math.sin(time * 6 + f.phase) * 0.18)
    }
  }

  _respawn(f) {
    f.alive = true
    f.holder = null
    f.mesh.visible = true
    const b = this.world.bounds
    f.pos.set(rand(b.xmin + 3, b.xmax - 3), rand(1.5, b.topY - 2), rand(b.zmin + 3, b.zmax - 3))
    this._pickTarget(f)
  }

  // ----- capture / repas -----
  findGrab(handPos, maxDist = 0.55) {
    let best = null, bd = maxDist * maxDist
    for (const f of this.fish) {
      if (!f.alive || f.holder) continue
      const d = f.pos.distanceToSquared(handPos)
      if (d < bd) { bd = d; best = f }
    }
    return best
  }

  grab(f, holderId) {
    f.holder = holderId
    f.mesh.visible = true
  }

  eat(f, bySelf) {
    f.alive = false
    f.holder = null
    f.mesh.visible = false
    f.respawnT = CFG.fish.respawnDelay
    if (!bySelf) f.mesh.visible = false
  }

  release(f) {
    f.holder = null
  }

  // Le poisson porté suit la main du joueur local
  followHand(f, handPos) {
    f.pos.copy(handPos)
    f.mesh.rotation.set(0, Math.PI, 0)
  }

  // Poisson porté par un joueur DISTANT (sa main reçue du réseau)
  followRemoteHand(f, handPos) {
    f.pos.copy(handPos)
    f.mesh.rotation.set(0, Math.PI, 0)
  }

  // ----- réseau : hôte écrit un Float32Array [id, x, y, z, yaw, alive] * N -----
  encodeSync() {
    const arr = new Float32Array(this.count * 6)
    this.fish.forEach((f, i) => {
      const o = i * 6
      arr[o] = i
      arr[o + 1] = f.pos.x
      arr[o + 2] = f.pos.y
      arr[o + 3] = f.pos.z
      arr[o + 4] = f.yaw
      arr[o + 5] = f.holder ? 2 : (f.alive ? 1 : 0)
    })
    return arr
  }

  decodeSync(arr) {
    // arr : Float32Array reçu (Uint8Array converti par le réseau)
    const f32 = arr instanceof Float32Array ? arr : new Float32Array(arr.buffer ? arr.buffer : arr)
    for (let i = 0; i < this.count && (i * 6 + 5) < f32.length; i++) {
      const o = i * 6
      const f = this.fish[i]
      if (!f.hasNet) f.hasNet = true
      const alive = f32[o + 5]
      f.netX = f32[o + 1]; f.netY = f32[o + 2]; f.netZ = f32[o + 3]
      f.netYaw = f32[o + 4]
      if (alive === 1 && !f.alive && !f.holder) { f.alive = true; f.mesh.visible = true }
      else if (alive === 0 && f.alive && !f.holder) { f.alive = false; f.mesh.visible = false }
      if (alive === 0 && !f.holder) { f.mesh.visible = false; f.alive = false }
    }
  }

  // interpolation côté invité
  updateRemote(dt) {
    for (const f of this.fish) {
      if (!f.hasNet || f.holder) continue
      if (f.alive) {
        f.pos.x = damp(f.pos.x, f.netX, 10, dt)
        f.pos.y = damp(f.pos.y, f.netY, 10, dt)
        f.pos.z = damp(f.pos.z, f.netZ, 10, dt)
        let dy = f.netYaw - f.yaw
        while (dy > Math.PI) dy -= Math.PI * 2
        while (dy < -Math.PI) dy += Math.PI * 2
        f.yaw += dy * Math.min(1, 8 * dt)
        f.mesh.rotation.set(0, f.yaw, Math.sin(f.phase * 7) * 0.15)
      }
    }
  }

  dispose() {
    for (const f of this.fish) this.scene.remove(f.mesh)
  }
}
