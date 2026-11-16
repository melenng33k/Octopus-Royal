// ============================================================
// World — l'aquarium : décor, collisions, raycast, ambiance
// ============================================================
import * as THREE from 'three'
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js'
import { CFG } from '../config.js'
import { rand, randi, clamp } from '../utils.js'

const C = {
  sand: 0xd8c68f,
  sandDark: 0xb3a071,
  glass: 0x9fe8ff,
  frame: 0x1e2c33,
  rock: 0x7d8a80,
  rockDark: 0x5f6b63,
  weed: 0x2fa15c,
  coralA: 0xff8a70,
  coralB: 0xffb56b,
  coralC: 0xe86fa8,
  pipe: 0x9fb0b8,
  water: 0x0d9cb8,
  deep: 0x065b74,
  lamp: 0xfff2c4
}

export class World {
  constructor(scene) {
    this.scene = scene
    const { w, d, h } = CFG.tank
    this.w = w; this.d = d; this.h = h

    this.group = new THREE.Group()
    scene.add(this.group)

    // bornes de collision (marges internes)
    this.bounds = {
      xmin: -w / 2, xmax: w / 2,
      zmin: -d / 2, zmax: d / 2,
      floorY: 0.22, topY: h - 0.4
    }
    this.colliders = [] // {x,y,z,r}

    this._buildLights()
    this._buildOuterShell()
    this._buildFloor()
    this._buildGlass()
    this._buildProps()
    this._buildWeeds()
    this._buildBubbles()
    this._buildShafts()
    this._buildPoliceStation()
  }

  // ---------- Lumière & ambiance ----------
  _buildLights() {
    const hemi = new THREE.HemisphereLight(0xbfeefc, 0x4a8a6e, 1.05)
    this.scene.add(hemi)
    const sun = new THREE.DirectionalLight(0xeafff5, 1.7)
    sun.position.set(3, 20, 2)
    this.scene.add(sun)
    const fill = new THREE.DirectionalLight(0x66d9e8, 0.5)
    fill.position.set(-6, 8, -6)
    this.scene.add(fill)
    this.scene.fog = new THREE.FogExp2(C.water, 0.0095)
    this.scene.background = new THREE.Color(C.water)
  }

  // Coquille sombre extérieure (la salle du musée) + rampes lumineuses
  _buildOuterShell() {
    const { w, d, h } = this
    const shell = new THREE.Mesh(
      new THREE.BoxGeometry(w + 26, h + 16, d + 26),
      new THREE.MeshBasicMaterial({ color: C.water, side: THREE.BackSide, fog: false })
    )
    shell.position.y = h / 2 + 3
    this.group.add(shell)

    const stripGeo = new THREE.BoxGeometry(0.22, 0.22, 1)
    const stripMat = new THREE.MeshBasicMaterial({ color: C.lamp, fog: false })
    const strips = []
    const mk = (x, y, z, len, axis) => {
      const g = stripGeo.clone()
      if (axis === 'x') g.scale(len, 1, 1)
      else if (axis === 'z') g.scale(1, 1, len)
      else g.scale(1, len, 1)
      g.translate(x, y, z)
      strips.push(g)
    }
    const off = 2.6
    mk(0, h + 2.5, d / 2 + off, w + 8, 'x')
    mk(0, h + 2.5, -d / 2 - off, w + 8, 'x')
    mk(w / 2 + off, h + 2.5, 0, d + 8, 'z')
    mk(-w / 2 - off, h + 2.5, 0, d + 8, 'z')
    this.group.add(new THREE.Mesh(mergeGeometries(strips), stripMat))
  }

  // ---------- Sable bosselé avec couleurs en dégradé ----------
  _buildFloor() {
    const { w, d } = this
    const geo = new THREE.PlaneGeometry(w, d, 56, 36)
    geo.rotateX(-Math.PI / 2)
    const pos = geo.attributes.position
    const colors = new Float32Array(pos.count * 3)
    const base = new THREE.Color(C.sand)
    const dark = new THREE.Color(C.sandDark)
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i), z = pos.getZ(i)
      const y = 0.16 * Math.sin(x * 0.45) * Math.cos(z * 0.6) + 0.06 * Math.sin(x * 1.7 + z * 1.3)
      pos.setY(i, y)
      const t = clamp((y + 0.2) / 0.45, 0, 1)
      const c = dark.clone().lerp(base, t)
      colors[i * 3] = c.r; colors[i * 3 + 1] = c.g; colors[i * 3 + 2] = c.b
    }
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3))
    geo.computeVertexNormals()
    const floor = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 1, metalness: 0 }))
    this.group.add(floor)
  }

  // ---------- Vitres + cadre ----------
  _buildGlass() {
    const { w, d, h } = this
    const glassMat = new THREE.MeshPhongMaterial({
      color: C.glass, transparent: true, opacity: 0.09,
      side: THREE.DoubleSide, depthWrite: false, shininess: 80
    })
    const mkWall = (wd, ht, x, y, z, ry) => {
      const m = new THREE.Mesh(new THREE.PlaneGeometry(wd, ht), glassMat)
      m.position.set(x, y, z); m.rotation.y = ry
      this.group.add(m)
    }
    mkWall(w, h, 0, h / 2, d / 2, 0)
    mkWall(w, h, 0, h / 2, -d / 2, 0)
    mkWall(d, h, w / 2, h / 2, 0, Math.PI / 2)
    mkWall(d, h, -w / 2, h / 2, 0, Math.PI / 2)

    // cadre
    const t = 0.28
    const frameGeos = []
    const bar = (sx, sy, sz, x, y, z) => {
      const g = new THREE.BoxGeometry(sx, sy, sz)
      g.translate(x, y, z)
      frameGeos.push(g)
    }
    const W = w / 2, D = d / 2
    for (const y of [0.14, h]) {
      bar(w + t, t, t, 0, y, D); bar(w + t, t, t, 0, y, -D)
      bar(t, t, d + t, W, y, 0); bar(t, t, d + t, -W, y, 0)
    }
    for (const x of [-W, W]) for (const z of [-D, D]) bar(t, h, t, x, h / 2, z)
    const frame = new THREE.Mesh(mergeGeometries(frameGeos), new THREE.MeshStandardMaterial({ color: C.frame, roughness: 0.6, metalness: 0.3 }))
    this.group.add(frame)
  }

  // ---------- Rochers, coraux, tuyaux (fusionnés pour la perf) ----------
  _buildProps() {
    const { w, d } = this
    const rockGeos = [], coralGeos = [], pipeGeos = []
    const paint = (geo, color, jitter = 0.06) => {
      const c = new THREE.Color(color)
      const n = geo.attributes.position.count
      const arr = new Float32Array(n * 3)
      for (let i = 0; i < n; i++) {
        const j = 1 + rand(-jitter, jitter)
        arr[i * 3] = c.r * j; arr[i * 3 + 1] = c.g * j; arr[i * 3 + 2] = c.b * j
      }
      geo.setAttribute('color', new THREE.BufferAttribute(arr, 3))
      return geo
    }

    // Rochers (collision sphérique) — densité adaptée à la surface du bassin
    const area = w * d
    const nRocks = Math.round(12 * area / (40 * 24))
    for (let i = 0; i < nRocks; i++) {
      const r = rand(0.7, 1.9)
      const x = rand(-w / 2 + 3, w / 2 - 3), z = rand(-d / 2 + 2.5, d / 2 - 3.5)
      if (Math.abs(x) < 11 && z > d / 2 - 9) continue // on garde le commissariat dégagé
      const y = 0.15 + r * 0.45
      const g = new THREE.IcosahedronGeometry(r, 1)
      const p = g.attributes.position
      for (let v = 0; v < p.count; v++) {
        p.setXYZ(v, p.getX(v) * rand(0.85, 1.2), p.getY(v) * rand(0.6, 0.95), p.getZ(v) * rand(0.85, 1.2))
      }
      g.computeVertexNormals()
      g.translate(x, y, z)
      rockGeos.push(paint(g, i % 2 ? C.rock : C.rockDark))
      this.colliders.push({ x, y, z, r: r * 0.82 })
    }

    // Coraux (déco, sans collision)
    const nCorals = Math.round(14 * area / (40 * 24))
    for (let i = 0; i < nCorals; i++) {
      const x = rand(-w / 2 + 2.5, w / 2 - 2.5), z = rand(-d / 2 + 2, d / 2 - 3.5)
      if (Math.abs(x) < 11 && z > d / 2 - 9) continue
      const col = [C.coralA, C.coralB, C.coralC][i % 3]
      const n = randi(3, 5)
      for (let k = 0; k < n; k++) {
        const hh = rand(0.5, 1.5)
        const g = new THREE.ConeGeometry(rand(0.08, 0.16), hh, 5)
        g.translate(x + rand(-0.5, 0.5), hh / 2 + 0.15, z + rand(-0.5, 0.5))
        coralGeos.push(paint(g, col))
      }
    }

    // Tuyaux PVC (collision)
    const nPipes = Math.max(3, Math.round(3 * area / (40 * 24)))
    for (let i = 0; i < nPipes; i++) {
      const len = rand(2.5, 4.5), r = rand(0.45, 0.6)
      const x = rand(-w / 2 + 4, w / 2 - 4), z = rand(-d / 2 + 2.5, 0)
      const horiz = i % 2 === 0
      const g = new THREE.CylinderGeometry(r, r, len, 12, 1, true)
      if (horiz) { g.rotateZ(Math.PI / 2) } else { g.rotateX(Math.PI / 2) }
      g.translate(x, r + 0.25, z)
      pipeGeos.push(paint(g, C.pipe, 0.03))
      const n = horiz ? { x: 0, z: 1 } : { x: 1, z: 0 }
      for (const s of [-0.35, 0, 0.35]) {
        this.colliders.push(horiz
          ? { x: x + s * len, y: r + 0.25, z, r: r * 0.95 }
          : { x, y: r + 0.25, z: z + s * len, r: r * 0.95 })
      }
    }

    const mat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.95, metalness: 0.02 })
    this.group.add(new THREE.Mesh(mergeGeometries(rockGeos), mat))
    this.group.add(new THREE.Mesh(mergeGeometries(coralGeos), mat.clone()))
    this.group.add(new THREE.Mesh(mergeGeometries(pipeGeos), new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.5, metalness: 0.35, side: THREE.DoubleSide })))
  }

  // ---------- Algues qui ondulent ----------
  _buildWeeds() {
    const { w, d } = this
    this.weeds = []
    const mat = new THREE.MeshStandardMaterial({ color: C.weed, roughness: 0.9, side: THREE.DoubleSide })
    for (let i = 0; i < 15; i++) {
      const x = rand(-w / 2 + 2, w / 2 - 2), z = rand(-d / 2 + 1.5, d / 2 - 3)
      if (Math.abs(x) < 11 && z > d / 2 - 8) continue
      const cluster = new THREE.Group()
      cluster.position.set(x, 0.1, z)
      const n = randi(3, 5)
      for (let k = 0; k < n; k++) {
        const hh = rand(1.6, 3.4)
        const g = new THREE.PlaneGeometry(rand(0.22, 0.4), hh, 1, 5)
        g.translate(0, hh / 2, 0)
        const p = g.attributes.position
        for (let v = 0; v < p.count; v++) {
          const y = p.getY(v)
          p.setX(v, p.getX(v) + Math.sin(y * 1.2) * 0.22 * (y / hh))
        }
        const blade = new THREE.Mesh(g, mat)
        blade.position.set(rand(-0.5, 0.5), 0, rand(-0.4, 0.4))
        blade.rotation.y = rand(0, Math.PI * 2)
        blade.userData.phase = rand(0, Math.PI * 2)
        cluster.add(blade)
        this.weeds.push(blade)
      }
      this.group.add(cluster)
    }
  }

  // ---------- Bulles montantes ----------
  _buildBubbles() {
    const N = 280
    this.bubbleData = []
    const pos = new Float32Array(N * 3)
    for (let i = 0; i < N; i++) {
      const x = rand(-this.w / 2 + 1, this.w / 2 - 1)
      const z = rand(-this.d / 2 + 1, this.d / 2 - 1)
      const y = rand(0, this.h)
      pos[i * 3] = x; pos[i * 3 + 1] = y; pos[i * 3 + 2] = z
      this.bubbleData.push({ x, z, speed: rand(0.4, 1.1), wobble: rand(0, Math.PI * 2), size: rand(0.5, 1) })
    }
    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3))
    const mat = new THREE.PointsMaterial({
      size: 0.22, map: this._dot(), transparent: true, opacity: 0.55,
      depthWrite: false, color: 0xdff6ff, sizeAttenuation: true
    })
    this.bubbles = new THREE.Points(geo, mat)
    this.bubbles.frustumCulled = false
    this.group.add(this.bubbles)
  }
  _dot() {
    // texture disque doux partagée
    if (World._dotTex) return World._dotTex
    const cv = document.createElement('canvas'); cv.width = cv.height = 64
    const ctx = cv.getContext('2d')
    const g = ctx.createRadialGradient(32, 32, 2, 32, 32, 28)
    g.addColorStop(0, 'rgba(255,255,255,1)'); g.addColorStop(0.6, 'rgba(255,255,255,0.4)'); g.addColorStop(1, 'rgba(255,255,255,0)')
    ctx.fillStyle = g; ctx.beginPath(); ctx.arc(32, 32, 28, 0, Math.PI * 2); ctx.fill()
    World._dotTex = new THREE.CanvasTexture(cv)
    return World._dotTex
  }

  // ---------- Rayons de lumière ----------
  _buildShafts() {
    this.shafts = []
    const mat = new THREE.MeshBasicMaterial({
      color: 0xbff4ff, transparent: true, opacity: 0.055,
      blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide
    })
    for (let i = 0; i < 5; i++) {
      const m = new THREE.Mesh(new THREE.PlaneGeometry(rand(3, 5), this.h), mat)
      m.position.set(rand(-14, 14), this.h / 2, rand(-10, 10))
      m.rotation.y = rand(0, Math.PI)
      m.userData.speed = rand(0.02, 0.06) * (i % 2 ? 1 : -1)
      this.shafts.push(m)
      this.group.add(m)
    }
  }

  // ---------- Le commissariat (panneaux du menu) ----------
  _buildPoliceStation() {
    const g = new THREE.Group()
    // mur bois + panneau
    const wall = new THREE.Mesh(
      new THREE.BoxGeometry(13, 5.2, 0.35),
      new THREE.MeshStandardMaterial({ color: 0x3d4c54, roughness: 0.85 })
    )
    wall.position.set(1, 3.0, this.d / 2 - 0.2)
    g.add(wall)
    const sign = new THREE.Mesh(
      new THREE.BoxGeometry(7.2, 0.75, 0.18),
      new THREE.MeshStandardMaterial({ color: 0x204049, roughness: 0.6 })
    )
    sign.position.set(1, 6.0, this.d / 2 - 0.45)
    g.add(sign)
    const desk = new THREE.Mesh(
      new THREE.BoxGeometry(5.2, 1.15, 1.5),
      new THREE.MeshStandardMaterial({ color: 0x5a4632, roughness: 0.9 })
    )
    desk.position.set(1, 0.72, this.d / 2 - 1.6)
    g.add(desk)
    this.colliders.push({ x: 1, y: 0.72, z: this.d / 2 - 1.6, r: 1.5 })
    this.group.add(g)

    // ancres pour les panneaux interactifs (Boards.js)
    this.policeAnchor = { pos: new THREE.Vector3(-2.6, 3.9, this.d / 2 - 0.5), rotY: Math.PI }
    this.shopAnchor = { pos: new THREE.Vector3(4.6, 3.6, this.d / 2 - 0.5), rotY: Math.PI }
    this.statsAnchor = { pos: new THREE.Vector3(8.5, 3.4, this.d / 2 - 0.8), rotY: Math.PI + 0.42 }
    this.spawnPos = new THREE.Vector3(CFG.spawn.x, CFG.spawn.y, CFG.spawn.z)
  }

  // ============================================================
  // Collision : sphère contre les murs / sol / props
  // ============================================================
  collideSphere(pos, r) {
    const b = this.bounds
    let hit = false, floor = false
    let nx = 0, ny = 0, nz = 0
    // murs
    if (pos.x < b.xmin + r) { pos.x = b.xmin + r; nx = 1; hit = true }
    if (pos.x > b.xmax - r) { pos.x = b.xmax - r; nx = -1; hit = true }
    if (pos.z < b.zmin + r) { pos.z = b.zmin + r; nz = 1; hit = true }
    if (pos.z > b.zmax - r) { pos.z = b.zmax - r; nz = -1; hit = true }
    if (pos.y < b.floorY + r) { pos.y = b.floorY + r; ny = 1; hit = true; floor = true }
    if (pos.y > b.topY - r) { pos.y = b.topY - r; ny = -1; hit = true }
    // props sphériques
    for (const c of this.colliders) {
      const dx = pos.x - c.x, dy = pos.y - c.y, dz = pos.z - c.z
      const rr = r + c.r
      const dd = dx * dx + dy * dy + dz * dz
      if (dd < rr * rr && dd > 1e-9) {
        const dist = Math.sqrt(dd)
        const push = (rr - dist) / dist
        pos.x += dx * push; pos.y += dy * push; pos.z += dz * push
        nx = dx / dist; ny = dy / dist; nz = dz / dist
        hit = true
        if (ny > 0.5) floor = true
      }
    }
    return { hit, floor, nx, ny, nz }
  }

  // Raycast analytique : murs AABB + sol + props sphériques.
  // Retourne { t, point } ou null.
  raycast(origin, dir, maxDist = 120) {
    let best = maxDist
    const b = this.bounds
    // boîte englobante (méthode des slabs, sortie côté "far" car on tire de l'intérieur)
    {
      let tExit = Infinity
      const axes = [
        [origin.x, dir.x, b.xmin, b.xmax],
        [origin.y, dir.y, -1, b.topY],
        [origin.z, dir.z, b.zmin, b.zmax]
      ]
      let ok = true
      for (const [o, dD, mn, mx] of axes) {
        if (Math.abs(dD) < 1e-9) {
          if (o < mn || o > mx) { ok = false; break }
          continue
        }
        const t1 = (mn - o) / dD, t2 = (mx - o) / dD
        const tFar = Math.max(t1, t2)
        if (tFar < 0) { ok = false; break }
        tExit = Math.min(tExit, tFar)
      }
      if (ok && tExit < best) best = tExit
    }
    // sol
    if (dir.y < -1e-9) {
      const t = (0.15 - origin.y) / dir.y
      if (t > 0 && t < best) best = t
    }
    // props
    for (const c of this.colliders) {
      const ox = origin.x - c.x, oy = origin.y - c.y, oz = origin.z - c.z
      const A = dir.x * dir.x + dir.y * dir.y + dir.z * dir.z
      const B = 2 * (ox * dir.x + oy * dir.y + oz * dir.z)
      const CC = ox * ox + oy * oy + oz * oz - c.r * c.r
      const disc = B * B - 4 * A * CC
      if (disc < 0 || A < 1e-9) continue
      const t = (-B - Math.sqrt(disc)) / (2 * A)
      if (t > 0.05 && t < best) best = t
    }
    if (best >= maxDist) return null
    return { t: best, point: origin.clone().addScaledVector(dir, best) }
  }

  update(dt, time) {
    // bulles
    const p = this.bubbles.geometry.attributes.position
    for (let i = 0; i < this.bubbleData.length; i++) {
      const b = this.bubbleData[i]
      let y = p.getY(i) + b.speed * dt
      if (y > this.h - 0.3) { y = 0.1; b.x = rand(-this.w / 2 + 1, this.w / 2 - 1); b.z = rand(-this.d / 2 + 1, this.d / 2 - 1) }
      p.setXYZ(i, b.x + Math.sin(time * 1.3 + b.wobble) * 0.25, y, b.z + Math.cos(time * 1.1 + b.wobble) * 0.25)
    }
    p.needsUpdate = true
    // algues
    for (const blade of this.weeds) {
      blade.rotation.z = Math.sin(time * 1.1 + blade.userData.phase) * 0.14
      blade.rotation.x = Math.cos(time * 0.9 + blade.userData.phase) * 0.08
    }
    // rayons
    for (const s of this.shafts) s.rotation.y += s.userData.speed * dt
  }
}
