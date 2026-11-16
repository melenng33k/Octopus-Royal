// ============================================================
// Tentacle — chaîne Verlet avec collision + tube 3D mis à jour
// Chaque main contrôle un tentacule ; le corps en porte aussi
// 4 décoratifs. Réutilisé tel quel pour les joueurs distants.
// ============================================================
import * as THREE from 'three'

const UP = new THREE.Vector3(0, 1, 0)

export class Tentacle {
  /**
   * opts: { n, segLen, radius, colorRoot, colorTip, collisionRadius, stiffness }
   */
  constructor(opts = {}) {
    const o = {
      n: 12,
      segLen: 0.17,
      radius: 0.055,
      collisionRadius: 0.05,
      stiffness: 0.05,
      hangGravity: 1.1,     // gravité de suspension (eau) : fait pendre la chaîne
      colorRoot: 0xc44a17,
      colorTip: 0xf59a5b,
      ...opts
    }
    this.n = o.n
    this.segLen = o.segLen
    this.radius = o.radius
    this.cr = o.collisionRadius
    this.stiffness = o.stiffness
    this.hangGravity = o.hangGravity

    this.pts = []
    for (let i = 0; i < this.n; i++) {
      this.pts.push({ x: 0, y: 0, z: 0, px: 0, py: 0, pz: 0 })
    }
    this.tipCur = new THREE.Vector3()
    this.tipPrev = new THREE.Vector3()
    this.tipSpeed = 0
    this.initialized = false

    // géométrie du tube : rings = n, radial = 7
    const radial = 7
    this.radial = radial
    const vertCount = this.n * (radial + 1)
    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(vertCount * 3), 3))
    geo.setAttribute('color', new THREE.BufferAttribute(new Float32Array(vertCount * 3), 3))
    const idx = []
    for (let i = 0; i < this.n - 1; i++) {
      for (let j = 0; j < radial; j++) {
        const a = i * (radial + 1) + j
        const b = a + 1
        const c = a + radial + 1
        const d = c + 1
        idx.push(a, c, b, b, c, d)
      }
    }
    geo.setIndex(idx)
    this.colorRoot = new THREE.Color(o.colorRoot)
    this.colorTip = new THREE.Color(o.colorTip)
    this._colorsInit = false

    const mat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.72, metalness: 0.02 })
    this.mesh = new THREE.Mesh(geo, mat)
    this.mesh.frustumCulled = false
    this.mesh.matrixAutoUpdate = false

    // temporaires
    this._v1 = new THREE.Vector3()
    this._v2 = new THREE.Vector3()
    this._tangent = new THREE.Vector3()
    this._normal = new THREE.Vector3()
    this._binormal = new THREE.Vector3()
  }

  setRoot(v) {
    const p = this.pts[0]
    p.x = v.x; p.y = v.y; p.z = v.z
    p.px = v.x; p.py = v.y; p.pz = v.z
    if (!this.initialized) {
      // aligne toute la chaîne sous la racine au premier frame
      for (let i = 1; i < this.n; i++) {
        const q = this.pts[i]
        q.x = v.x; q.y = v.y - i * this.segLen; q.z = v.z
        q.px = q.x; q.py = q.y; q.pz = q.z
      }
      this.tipCur.copy(v)
      this.tipPrev.copy(v)
      this.initialized = true
    }
  }

  setTip(v) { this.tipTarget = v }

  // relâche le bout : la chaîne retombe en suspension sous sa racine
  clearTip() {
    if (this.tipTarget) {
      this.tipTarget = null
      // initialise le bout à sa position actuelle pour un retour doux
      const last = this.pts[this.n - 1]
      last.px = last.x; last.py = last.y; last.pz = last.z
    }
  }

  update(dt, time, world, collidable = true) {
    dt = Math.min(dt, 0.05)
    const pts = this.pts, n = this.n, L = this.segLen

    // cible du bout : lissage organique vers la main
    if (this.tipTarget) {
      const k = 1 - Math.exp(-20 * dt)
      this.tipPrev.copy(this.tipCur)
      this.tipCur.lerp(this.tipTarget, k)
    }
    this.tipSpeed = this.tipPrev.distanceTo(this.tipCur) / Math.max(dt, 1e-4)

    // --- Verlet : intégration des points du milieu ---
    // (sans cible, le bout aussi est libre : suspension naturelle)
    const lastFree = !this.tipTarget
    const nEnd = lastFree ? n : n - 1
    for (let i = 1; i < nEnd; i++) {
      const p = pts[i]
      const vx = (p.x - p.px) * 0.93
      const vy = (p.y - p.py) * 0.93
      const vz = (p.z - p.pz) * 0.93
      p.px = p.x; p.py = p.y; p.pz = p.z
      // presque apesanteur (eau) + ondulation de repos
      p.x = p.x + vx + Math.sin(time * 2.1 + i * 0.55) * 0.018 * dt * 60 * 0.016
      p.y = p.y + vy - this.hangGravity * dt * dt
      p.z = p.z + vz + Math.cos(time * 1.7 + i * 0.5) * 0.018 * dt * 60 * 0.016
    }

    // --- Contraintes de longueur (3 passes) ---
    const tip = this.tipCur
    for (let iter = 0; iter < 3; iter++) {
      pts[0].x = pts[0].px; pts[0].y = pts[0].py; pts[0].z = pts[0].pz
      for (let i = 0; i < n - 1; i++) {
        const a = pts[i], b = pts[i + 1]
        let dx = b.x - a.x, dy = b.y - a.y, dz = b.z - a.z
        let d = Math.sqrt(dx * dx + dy * dy + dz * dz)
        if (d < 1e-8) { dx = 0; dy = -L; dz = 0; d = L }
        const diff = (d - L) / d
        const half = diff * 0.5
        if (i === 0) {
          b.x -= dx * diff; b.y -= dy * diff; b.z -= dz * diff
        } else if (!lastFree && i === n - 2) {
          a.x += dx * diff; a.y += dy * diff; a.z += dz * diff
        } else {
          a.x += dx * half; a.y += dy * half; a.z += dz * half
          b.x -= dx * half; b.y -= dy * half; b.z -= dz * half
        }
      }
      // rigidité : redresser légèrement vers la ligne racine->bout
      if (this.stiffness > 0 && !lastFree) {
        for (let i = 1; i < n - 1; i++) {
          const t = i / (n - 1)
          const a = pts[0]
          const idealX = a.x + (tip.x - a.x) * t
          const idealY = a.y + (tip.y - a.y) * t
          const idealZ = a.z + (tip.z - a.z) * t
          const p = pts[i]
          p.x += (idealX - p.x) * this.stiffness
          p.y += (idealY - p.y) * this.stiffness
          p.z += (idealZ - p.z) * this.stiffness
        }
      }
    }
    // recoller le bout à sa cible
    if (!lastFree) {
      const last = pts[n - 1]
      last.x = tip.x; last.y = tip.y; last.z = tip.z
    } else {
      this.tipCur.set(pts[n - 1].x, pts[n - 1].y, pts[n - 1].z)
    }

    // --- Collisions du corps du tentacule ---
    if (collidable && world) {
      for (let i = 1; i < n - 1; i++) {
        const p = pts[i]
        this._v1.set(p.x, p.y, p.z)
        world.collideSphere(this._v1, this.cr)
        p.x = this._v1.x; p.y = this._v1.y; p.z = this._v1.z
      }
    }

    this._rebuildTube()
  }

  _rebuildTube() {
    const geo = this.mesh.geometry
    const pos = geo.attributes.position
    const col = geo.attributes.color
    const radial = this.radial
    const pts = this.pts, n = this.n
    const R = this.radius

    for (let i = 0; i < n; i++) {
      const p = pts[i]
      const prev = pts[Math.max(0, i - 1)]
      const next = pts[Math.min(n - 1, i + 1)]
      this._tangent.set(next.x - prev.x, next.y - prev.y, next.z - prev.z)
      if (this._tangent.lengthSq() < 1e-8) this._tangent.set(0, 1, 0)
      this._tangent.normalize()
      // normale stable : produit vectoriel avec up
      this._normal.crossVectors(this._tangent, UP)
      if (this._normal.lengthSq() < 1e-6) this._normal.set(1, 0, 0)
      this._normal.normalize()
      this._binormal.crossVectors(this._tangent, this._normal).normalize()

      const t = i / (n - 1)
      let r = R * (1 - 0.62 * t)
      if (i === n - 1) r = R * 0.5 * 1.5 // petite ventouse au bout
      if (i === 0) r = R * 0.8

      for (let j = 0; j <= radial; j++) {
        const ang = (j / radial) * Math.PI * 2
        const nx = this._binormal.x * Math.cos(ang) + this._normal.x * Math.sin(ang)
        const ny = this._binormal.y * Math.cos(ang) + this._normal.y * Math.sin(ang)
        const nz = this._binormal.z * Math.cos(ang) + this._normal.z * Math.sin(ang)
        const k = i * (radial + 1) + j
        pos.setXYZ(k, p.x + nx * r, p.y + ny * r, p.z + nz * r)
        if (!this._colorsInit) {
          // dégradé + "ventouses" (anneaux alternés plus clairs)
          const c = this.colorRoot.clone().lerp(this.colorTip, t)
          const stripe = (i % 2 === 0) ? 1.22 : 0.92
          col.setXYZ(k, c.r * stripe, c.g * stripe, c.b * stripe)
        }
      }
    }
    this._colorsInit = true
    pos.needsUpdate = true
    if (!this._normalsDoneOnce) { /* recalcul chaque frame, léger */ }
    geo.computeVertexNormals()
    geo.attributes.normal.needsUpdate = true
  }

  getTip(out = new THREE.Vector3()) {
    const p = this.pts[this.n - 1]
    return out.set(p.x, p.y, p.z)
  }

  dispose() {
    this.mesh.geometry.dispose()
    this.mesh.material.dispose()
  }
}
