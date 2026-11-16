// ============================================================
// Tentacle — chaîne Verlet avec collision + tube 3D mis à jour
// Chaque main contrôle un tentacule ; le corps en porte aussi
// 4 décoratifs. Réutilisé tel quel pour les joueurs distants.
// Option outline : tube noir jumeau (contour cartoon inverted hull).
// ============================================================
import * as THREE from 'three'
import { CFG } from '../config.js'

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
      adaptive: false,      // auto-longueur : la chaîne s'ajuste à la distance racine->bout
      adaptiveMin: 0.34,    // auto-longueur : raccourcissement max (x longueur au repos)
      adaptiveMax: 1.35,    // auto-longueur : extension max (x longueur au repos)
      colorRoot: 0xc44a17,
      colorTip: 0xf59a5b,
      outline: CFG.fx && CFG.fx.outlines,   // contour noir jumeau
      ...opts
    }
    this.n = o.n
    this.segLen = o.segLen
    this.radius = o.radius
    this.cr = o.collisionRadius
    this.stiffness = o.stiffness
    this.hangGravity = o.hangGravity
    this.baseSegLen = o.segLen
    this.adaptive = o.adaptive
    this.adaptiveMin = o.adaptiveMin
    this.adaptiveMax = o.adaptiveMax

    this.pts = []
    for (let i = 0; i < this.n; i++) {
      this.pts.push({ x: 0, y: 0, z: 0, px: 0, py: 0, pz: 0 })
    }
    this.tipCur = new THREE.Vector3()
    this.tipPrev = new THREE.Vector3()
    this.tipSpeed = 0
    this.initialized = false
    this._lastRoot = new THREE.Vector3()

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

    // tube outline (contour noir) : mêmes indices, rayon + largeur
    this.outlineW = (CFG.fx && CFG.fx.outlineWidth ? CFG.fx.outlineWidth.tentacle : 0.016)
    if (o.outline) {
      const geo2 = new THREE.BufferGeometry()
      geo2.setAttribute('position', new THREE.BufferAttribute(new Float32Array(vertCount * 3), 3))
      geo2.setIndex(idx)
      const mat2 = new THREE.MeshBasicMaterial({ color: 0x05070a, side: THREE.BackSide, fog: false, toneMapped: false })
      this.outlineMesh = new THREE.Mesh(geo2, mat2)
      this.outlineMesh.frustumCulled = false
      this.outlineMesh.matrixAutoUpdate = false
      this.outlineMesh.renderOrder = -1
      this.mesh.add(this.outlineMesh)
    }

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

  // change la configuration de la chaîne (nb de points, longueur, mode)
  // utilisé au passage bureau <-> casque : reconstruit points + géométrie
  reshape(n, segLen, adaptive = this.adaptive) {
    if (n === this.n && Math.abs(segLen - this.baseSegLen) < 1e-6 && adaptive === this.adaptive) return
    this.n = n
    this.baseSegLen = segLen
    this.segLen = segLen
    this.adaptive = adaptive
    this.pts = []
    for (let i = 0; i < n; i++) this.pts.push({ x: 0, y: 0, z: 0, px: 0, py: 0, pz: 0 })
    this.initialized = false
    this.tipTarget = null
    this.tipCur.set(0, 0, 0)
    this.tipPrev.set(0, 0, 0)
    const radial = this.radial
    const vertCount = n * (radial + 1)
    const geo = this.mesh.geometry
    geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(vertCount * 3), 3))
    geo.setAttribute('color', new THREE.BufferAttribute(new Float32Array(vertCount * 3), 3))
    const idx = []
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < radial; j++) {
        const a = i * (radial + 1) + j
        const b = a + 1
        const c = a + radial + 1
        const d = c + 1
        idx.push(a, c, b, b, c, d)
      }
    }
    geo.setIndex(idx)
    if (this.outlineMesh) {
      const geo2 = this.outlineMesh.geometry
      geo2.setAttribute('position', new THREE.BufferAttribute(new Float32Array(vertCount * 3), 3))
      geo2.setIndex(idx)
    }
    this._colorsInit = false
  }

  // réinitialise la chaîne en suspension sous sa racine (après un NaN)
  _resetChain() {
    const r = this.pts[0]
    const ok = r && isFinite(r.x + r.y + r.z)
    const rx = ok ? r.x : 0, ry = ok ? r.y : 4, rz = ok ? r.z : 0
    for (let i = 0; i < this.n; i++) {
      const q = this.pts[i]
      q.x = rx; q.y = ry - i * this.segLen; q.z = rz
      q.px = q.x; q.py = q.y; q.pz = q.z
    }
    this.tipCur.set(rx, ry, rz)
    this.tipPrev.set(rx, ry, rz)
    this.tipTarget = null
    this.initialized = true
  }

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

    // garde-fou : point invalide (NaN/Infinity) -> chaîne réinitialisée
    const chk = pts[1]
    if (!chk || !isFinite(chk.x + chk.y + chk.z)) this._resetChain()

    // garde-fou : racine TÉLÉPORTÉE (respawn, spawn réseau) -> la chaîne
    // se réaccroche instantanément sous la nouvelle racine
    {
      const r0 = pts[0], lr = this._lastRoot
      const jdx = r0.x - lr.x, jdy = r0.y - lr.y, jdz = r0.z - lr.z
      if (jdx * jdx + jdy * jdy + jdz * jdz > 2.25) this._resetChain()
      this._lastRoot.set(r0.x, r0.y, r0.z)
    }

    // auto-longueur : la chaîne s'ajuste en douceur à la distance racine->bout
    // (jamais plus courte que la distance -> jamais d'explosion Verlet)
    if (this.adaptive) {
      let target = this.baseSegLen
      if (this.tipTarget) {
        const r = pts[0]
        const ddx = this.tipTarget.x - r.x
        const ddy = this.tipTarget.y - r.y
        const ddz = this.tipTarget.z - r.z
        const dd = Math.sqrt(ddx * ddx + ddy * ddy + ddz * ddz)
        const mn = this.baseSegLen * this.adaptiveMin
        const mx = this.baseSegLen * this.adaptiveMax
        target = Math.min(mx, Math.max(mn, (dd * 1.12) / (n - 1)))
      }
      this.segLen += (target - this.segLen) * (1 - Math.exp(-14 * dt))
    }

    // cible du bout : lissage organique vers la main
    if (this.tipTarget) {
      const k = 1 - Math.exp(-20 * dt)
      this.tipPrev.copy(this.tipCur)
      this.tipCur.lerp(this.tipTarget, k)
      // anti-explosion : le bout ne dépasse JAMAIS la portée max de la chaîne
      const r = pts[0]
      const tdx = this.tipCur.x - r.x
      const tdy = this.tipCur.y - r.y
      const tdz = this.tipCur.z - r.z
      const td = Math.sqrt(tdx * tdx + tdy * tdy + tdz * tdz)
      const maxReach = (n - 1) * this.segLen * 0.985
      if (td > maxReach) {
        const s = maxReach / td
        this.tipCur.set(r.x + tdx * s, r.y + tdy * s, r.z + tdz * s)
      }
    }
    this.tipSpeed = this.tipPrev.distanceTo(this.tipCur) / Math.max(dt, 1e-4)

    // --- Verlet : intégration des points du milieu ---
    // (sans cible, le bout aussi est libre : suspension naturelle)
    const lastFree = !this.tipTarget
    const nEnd = lastFree ? n : n - 1
    // garde-fou : vitesse max par point et par frame (aucune explosion possible,
    // même avec des données réseau aberrantes ou une téléportation)
    const vmax = Math.max(0.14, this.segLen * 1.4)
    for (let i = 1; i < nEnd; i++) {
      const p = pts[i]
      let vx = (p.x - p.px) * 0.93
      let vy = (p.y - p.py) * 0.93
      let vz = (p.z - p.pz) * 0.93
      const vlen = Math.sqrt(vx * vx + vy * vy + vz * vz)
      if (vlen > vmax) { const s = vmax / vlen; vx *= s; vy *= s; vz *= s }
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
    const oPos = this.outlineMesh ? this.outlineMesh.geometry.attributes.position : null
    const radial = this.radial
    const pts = this.pts, n = this.n
    const R = this.radius
    const OW = this.outlineW

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
        if (oPos) oPos.setXYZ(k, p.x + nx * (r + OW), p.y + ny * (r + OW), p.z + nz * (r + OW))
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
    if (oPos) oPos.needsUpdate = true
    if (!this._normalsDoneOnce) { /* recalcul chaque frame, léger */ }
    geo.computeVertexNormals()
    geo.attributes.normal.needsUpdate = true
  }

  getTip(out = new THREE.Vector3()) {
    const p = this.pts[this.n - 1]
    return out.set(p.x, p.y, p.z)
  }

  // opacité (camouflage) : tube + contour suivent
  setOpacity(o) {
    const transparent = o < 1
    this.mesh.material.transparent = transparent
    this.mesh.material.opacity = o
    if (this.outlineMesh) {
      this.outlineMesh.material.transparent = true
      this.outlineMesh.material.opacity = o
      this.outlineMesh.visible = o > 0.5
    }
  }

  dispose() {
    this.mesh.geometry.dispose()
    this.mesh.material.dispose()
    if (this.outlineMesh) {
      this.outlineMesh.geometry.dispose()
      this.outlineMesh.material.dispose()
    }
  }
}
