// ============================================================
// InkCloud — nuage d'encre : grosse sphère sombre qui gonfle
// et bloque la vue des autres joueurs, puis se dissipe.
// ============================================================
import * as THREE from 'three'
import { CFG } from '../config.js'
import { dotTexture, rand } from '../utils.js'

export class InkCloud {
  constructor(scene, pos, ownerId = null) {
    this.scene = scene
    this.R = CFG.ink.radius
    this.life = CFG.ink.life
    this.ttl = this.life
    this.pos = pos.clone()
    this.ownerId = ownerId
    // le propriétaire voit à travers SON nuage (il encre les autres)
    this._visible = ownerId === null

    const geo = new THREE.SphereGeometry(1, 18, 14)
    const mat = new THREE.MeshBasicMaterial({
      color: 0x120c18, transparent: true, opacity: 0.92, depthWrite: false
    })
    this.sphere = new THREE.Mesh(geo, mat)
    this.sphere.position.copy(pos)
    this.sphere.scale.setScalar(0.4)
    this.sphere.visible = this._visible
    scene.add(this.sphere)

    // boules sombres qui dérivent pour donner du mouvement
    this.blobs = []
    const dot = dotTexture()
    for (let i = 0; i < 22; i++) {
      const mat2 = new THREE.SpriteMaterial({
        map: dot, color: 0x17101f, transparent: true, opacity: 0.8, depthWrite: false
      })
      const s = new THREE.Sprite(mat2)
      s.position.copy(pos).add(new THREE.Vector3(rand(-1, 1), rand(-1, 1), rand(-1, 1)))
      s.scale.setScalar(rand(1.5, 3.2))
      s.visible = this._visible
      s.userData.drift = new THREE.Vector3(rand(-0.35, 0.35), rand(0.05, 0.45), rand(-0.35, 0.35))
      scene.add(s)
      this.blobs.push(s)
    }
  }

  // le joueur est-il aveuglé par ce nuage ?
  blocks(origin) {
    return origin.distanceTo(this.pos) < this.R * 0.92
  }

  update(dt) {
    this.ttl -= dt
    const age = this.life - this.ttl
    const growT = Math.min(age / 1.3, 1)
    const r = 0.4 + (this.R - 0.4) * (1 - Math.pow(1 - growT, 3)) // ease-out
    this.sphere.scale.setScalar(r)
    this.sphere.position.y = this.pos.y + Math.sin(age * 0.8) * 0.15
    let fade = 1
    if (this.ttl < 2.2) fade = Math.max(this.ttl / 2.2, 0)
    this.sphere.material.opacity = 0.92 * fade
    this.sphere.visible = this._visible && fade > 0
    for (const b of this.blobs) {
      b.position.addScaledVector(b.userData.drift, dt)
      b.material.opacity = 0.8 * fade
      b.visible = this._visible && fade > 0
    }
    return this.ttl <= 0 // true = terminé, à supprimer
  }

  dispose() {
    this.scene.remove(this.sphere)
    this.sphere.geometry.dispose()
    this.sphere.material.dispose()
    for (const b of this.blobs) {
      this.scene.remove(b)
      b.material.dispose()
    }
  }
}
