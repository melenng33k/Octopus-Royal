// ============================================================
// World — l'aquarium : décor, collisions, raycast, ambiance
// VERSION CINÉMA : caustiques animées sur le sable, surface d'eau
// ondulante au-dessus du bassin, rayons de lumière doux, plancton
// en suspension, ombres douces, tone mapping ACES, et les VRAIS
// modèles 3D CC0 (épave, coffre animé, barils, caisses, rochers,
// bouées) venus de Kenney / Quaternius.
// ============================================================
import * as THREE from 'three'
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { CFG } from '../config.js'
import { rand, randi, clamp } from '../utils.js'
import { addOutline, applyRimMaterial } from './Outline.js'

const C = {
  sand: 0xe3cf9e,
  sandDark: 0xb8a276,
  glass: 0x9fe8ff,
  frame: 0x1e2c33,
  rock: 0x8a94a0,
  rockDark: 0x5f6b74,
  weed: 0x2fa15c,
  weed2: 0x35c06e,
  coralA: 0xff8a70,
  coralB: 0xffb56b,
  coralC: 0xe86fa8,
  pipe: 0x9fb0b8,
  water: 0x11a2c4,
  deep: 0x065b74,
  lamp: 0xfff2c4
}

// textures de particules (bulle avec liseré + reflet, disque doux)
function bubbleTexture() {
  if (World._bubbleTex) return World._bubbleTex
  const cv = document.createElement('canvas'); cv.width = cv.height = 64
  const ctx = cv.getContext('2d')
  ctx.strokeStyle = 'rgba(255,255,255,0.9)'
  ctx.lineWidth = 3.5
  ctx.beginPath(); ctx.arc(32, 32, 24, 0, Math.PI * 2); ctx.stroke()
  const g = ctx.createRadialGradient(24, 22, 2, 24, 22, 10)
  g.addColorStop(0, 'rgba(255,255,255,0.95)'); g.addColorStop(1, 'rgba(255,255,255,0)')
  ctx.fillStyle = g; ctx.beginPath(); ctx.arc(24, 22, 10, 0, Math.PI * 2); ctx.fill()
  const t = new THREE.CanvasTexture(cv)
  World._bubbleTex = t
  return t
}
function dotTexture() {
  if (World._dotTex) return World._dotTex
  const cv = document.createElement('canvas'); cv.width = cv.height = 64
  const ctx = cv.getContext('2d')
  const g = ctx.createRadialGradient(32, 32, 2, 32, 32, 28)
  g.addColorStop(0, 'rgba(255,255,255,1)'); g.addColorStop(0.6, 'rgba(255,255,255,0.4)'); g.addColorStop(1, 'rgba(255,255,255,0)')
  ctx.fillStyle = g; ctx.beginPath(); ctx.arc(32, 32, 28, 0, Math.PI * 2); ctx.fill()
  World._dotTex = new THREE.CanvasTexture(cv)
  return World._dotTex
}

// ---- chargement des props (GLB Kenney / Quaternius, textures incorporées) ----
const PROPS = import.meta.glob('../assets/models/*.glb', { eager: true, query: '?url', import: 'default' })
const propUrl = (name) => {
  const key = Object.keys(PROPS).find(k => k.endsWith('/' + name + '.glb'))
  return key ? PROPS[key] : null
}
const propCache = new Map()
function loadProp(name) {
  if (!propCache.has(name)) {
    const url = propUrl(name)
    propCache.set(name, url
      ? new Promise((res) => new GLTFLoader().load(url, (g) => {
          // les animations sont portées par le gltf, pas la scène :
          // on les accroche au root pour les retrouver après coup
          g.scene.userData.animations = g.animations || []
          res(g.scene)
        }, undefined, () => res(null)))
      : Promise.resolve(null))
  }
  return propCache.get(name)
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
    this.time = 0

    this._buildLights()
    this._buildOuterShell()
    this._buildFloor()
    this._buildGlass()
    this._buildProps()
    this._buildWeeds()
    this._buildBubbles()
    this._buildPlankton()
    this._buildShafts()
    this._buildWaterCeiling()
    this._buildPoliceStation()
    this._buildModelProps()
  }

  // ---------- Lumière & ambiance ----------
  _buildLights() {
    const hemi = new THREE.HemisphereLight(0xcdeefc, 0x3f8a72, 1.25)
    this.scene.add(hemi)
    const sun = new THREE.DirectionalLight(0xeafff0, 2.3)
    sun.position.set(6, 24, 4)
    this.sun = sun
    this.scene.add(sun)
    const fill = new THREE.DirectionalLight(0x5ad4e8, 0.55)
    fill.position.set(-8, 10, -8)
    this.scene.add(fill)
    // lumière d'accent chaude côté commissariat
    const warm = new THREE.PointLight(0xffd9a0, 25, 22, 1.8)
    warm.position.set(1, 6.5, this.d / 2 - 4)
    this.scene.add(warm)

    if (CFG.fx.shadows) {
      sun.castShadow = true
      sun.shadow.mapSize.set(1024, 1024)
      const sc = sun.shadow.camera
      sc.left = -42; sc.right = 42; sc.top = 34; sc.bottom = -34
      sc.near = 2; sc.far = 70
      sun.shadow.bias = -0.0004
      sun.shadow.normalBias = 0.3
      sun.shadow.radius = 5
    }
    this.scene.fog = new THREE.FogExp2(C.water, 0.0102)
    this.scene.background = new THREE.Color(C.water)
  }

  // Coquille extérieure : dégradé "salle du musée" + rampes lumineuses
  _buildOuterShell() {
    const { w, d, h } = this
    const shellMat = new THREE.ShaderMaterial({
      side: THREE.BackSide,
      fog: false,
      depthWrite: false,
      uniforms: { uH: { value: h } },
      vertexShader: `
        varying vec3 vPos;
        void main() {
          vPos = position;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }`,
      fragmentShader: `
        varying vec3 vPos;
        uniform float uH;
        void main() {
          float t = smoothstep(-4.0, uH + 6.0, vPos.y);
          vec3 deep = vec3(0.015, 0.10, 0.145);
          vec3 mid  = vec3(0.05, 0.26, 0.32);
          vec3 top  = vec3(0.04, 0.13, 0.185);
          vec3 col = mix(mid, top, smoothstep(0.45, 1.0, t));
          col = mix(deep, col, smoothstep(0.0, 0.5, t));
          gl_FragColor = vec4(col, 1.0);
        }`
    })
    const shell = new THREE.Mesh(
      new THREE.BoxGeometry(w + 26, h + 16, d + 26),
      shellMat
    )
    shell.position.y = h / 2 + 3
    this.group.add(shell)

    const stripGeo = new THREE.BoxGeometry(0.22, 0.22, 1)
    const stripMat = new THREE.MeshBasicMaterial({ color: C.lamp, fog: false, toneMapped: false })
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
    mk(-w / 2 + -off, h + 2.5, 0, d + 8, 'z')
    this.group.add(new THREE.Mesh(mergeGeometries(strips), stripMat))
  }

  // ---------- Sable bosselé + CAUSTIQUES animées en shader ----------
  _buildFloor() {
    const { w, d } = this
    const geo = new THREE.PlaneGeometry(w, d, 76, 48)
    geo.rotateX(-Math.PI / 2)
    const pos = geo.attributes.position
    const colors = new Float32Array(pos.count * 3)
    const base = new THREE.Color(C.sand)
    const dark = new THREE.Color(C.sandDark)
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i), z = pos.getZ(i)
      const y = 0.17 * Math.sin(x * 0.42) * Math.cos(z * 0.56) + 0.07 * Math.sin(x * 1.8 + z * 1.4)
      pos.setY(i, y)
      const t = clamp((y + 0.22) / 0.45, 0, 1)
      const c = dark.clone().lerp(base, t)
      // variations subtiles de teinte (zones plus chaudes / plus vertes)
      const hueShift = 0.02 * Math.sin(x * 0.11 + z * 0.13)
      c.offsetHSL(hueShift, 0.02, 0.02 * Math.cos(x * 0.07 - z * 0.09))
      colors[i * 3] = c.r; colors[i * 3 + 1] = c.g; colors[i * 3 + 2] = c.b
    }
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3))
    geo.computeVertexNormals()
    const mat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 1, metalness: 0 })
    mat.receiveShadow = true

    // injection des caustiques (lumière dansante projetée par la surface)
    if (CFG.fx.caustics) {
      mat.onBeforeCompile = (shader) => {
        shader.uniforms.uTime = { value: 0 }
        shader.uniforms.uCausticStrength = { value: 0.78 }
        shader.vertexShader = shader.vertexShader
          .replace('#include <common>', '#include <common>\nvarying vec3 vWPos;\nuniform float uTime;')
          .replace('#include <begin_vertex>', `#include <begin_vertex>
            vWPos = (modelMatrix * vec4(transformed, 1.0)).xyz;`)
        shader.fragmentShader = shader.fragmentShader
          .replace('#include <common>', `#include <common>
            varying vec3 vWPos;
            uniform float uTime;
            uniform float uCausticStrength;
            float caustLayer(vec2 p, float t) {
              float c = 0.0;
              for (int i = 0; i < 3; i++) {
                float fi = float(i);
                vec2 q = p * (1.35 + fi * 0.75);
                q += vec2(sin(t * 0.7 + fi * 2.1 + q.y * 1.35), cos(t * 0.6 + fi * 1.7 + q.x * 1.15)) * 0.55;
                c += 0.5 + 0.5 * sin(q.x * 3.1 + t * 0.9) * sin(q.y * 2.7 - t * 0.7);
              }
              c /= 3.0;
              return pow(max(c, 0.0), 4.0) * 1.9;
            }
            float caustic(vec2 uv, float t) {
              return clamp(caustLayer(uv * 0.55, t * 0.6) + 0.45 * caustLayer(uv * 0.9 + 7.3, t * 0.45), 0.0, 1.6);
            }`)
          .replace('#include <opaque_fragment>', `
            {
              float ca = caustic(vWPos.xz * 0.55, uTime);
              outgoingLight += vec3(1.0, 0.96, 0.82) * ca * uCausticStrength * diffuseColor.rgb;
            }
            #include <opaque_fragment>`)
        this.floorShader = shader
      }
    }
    const floor = new THREE.Mesh(geo, mat)
    floor.receiveShadow = true
    this.group.add(floor)
  }

  // ---------- Vitres + cadre ----------
  _buildGlass() {
    const { w, d, h } = this
    const glassMat = new THREE.MeshPhongMaterial({
      color: C.glass, transparent: true, opacity: 0.08,
      side: THREE.DoubleSide, depthWrite: false, shininess: 90
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
    const frame = new THREE.Mesh(mergeGeometries(frameGeos), new THREE.MeshStandardMaterial({ color: C.frame, roughness: 0.55, metalness: 0.35 }))
    frame.castShadow = true
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

    // Rochers procéduraux (collision sphérique) — complétés par les
    // vrais modèles Kenney dans _buildModelProps()
    const area = w * d
    const nRocks = Math.round(9 * area / (40 * 24))
    for (let i = 0; i < nRocks; i++) {
      const r = rand(0.7, 1.9)
      const x = rand(-w / 2 + 3, w / 2 - 3), z = rand(-d / 2 + 2.5, d / 2 - 3.5)
      if (Math.abs(x) < 13 && z > d / 2 - 9) continue // commissariat dégagé
      if (Math.abs(x + 22) < 9 && Math.abs(z + 12) < 7) continue // zone épave
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
    const nCorals = Math.round(16 * area / (40 * 24))
    for (let i = 0; i < nCorals; i++) {
      const x = rand(-w / 2 + 2.5, w / 2 - 2.5), z = rand(-d / 2 + 2, d / 2 - 3.5)
      if (Math.abs(x) < 13 && z > d / 2 - 9) continue
      if (Math.abs(x + 22) < 9 && Math.abs(z + 12) < 7) continue
      const col = [C.coralA, C.coralB, C.coralC][i % 3]
      const n = randi(3, 5)
      for (let k = 0; k < n; k++) {
        const hh = rand(0.5, 1.6)
        const g = new THREE.ConeGeometry(rand(0.08, 0.17), hh, 5)
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
    const rockMesh = new THREE.Mesh(mergeGeometries(rockGeos), mat)
    const coralMat = mat.clone()
    applyRimMaterial(coralMat, { str: 0.8 })
    const coralMesh = new THREE.Mesh(mergeGeometries(coralGeos), coralMat)
    const pipeMesh = new THREE.Mesh(mergeGeometries(pipeGeos), new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.5, metalness: 0.35, side: THREE.DoubleSide }))
    rockMesh.castShadow = rockMesh.receiveShadow = true
    addOutline(rockMesh)
    addOutline(pipeMesh)
    this.group.add(rockMesh, coralMesh, pipeMesh)
  }

  // ---------- Algues : fusionnées en 1 draw call, balancement GPU ----------
  _buildWeeds() {
    const { w, d } = this
    const mat = new THREE.MeshStandardMaterial({ color: 0x2fa15c, roughness: 0.9, side: THREE.DoubleSide })
    // balancement dans le shader (pas d'anim CPU) : uv.y = hauteur sur la lame
    mat.onBeforeCompile = (shader) => {
      shader.uniforms.uTime = { value: 0 }
      shader.vertexShader = shader.vertexShader
        .replace('#include <common>', '#include <common>\nuniform float uTime;')
        .replace('#include <begin_vertex>', `#include <begin_vertex>
          float sway = sin(uTime * 1.3 + position.x * 0.6 + position.z * 0.45);
          transformed.x += sway * 0.28 * uv.y * uv.y;
          transformed.z += cos(uTime * 0.9 + position.x * 0.4) * 0.16 * uv.y * uv.y;`)
      this.weedShader = shader
    }
    // liseré noir cartoon : injecté APRÈS le balancement pour chaîner
    // les deux patchs shader (applyRimMaterial enveloppe onBeforeCompile)
    applyRimMaterial(mat, { str: 0.85 })
    const geos = []
    for (let i = 0; i < 22; i++) {
      const x = rand(-w / 2 + 2, w / 2 - 2), z = rand(-d / 2 + 1.5, d / 2 - 3)
      if (Math.abs(x) < 13 && z > d / 2 - 8) continue
      if (Math.abs(x + 22) < 9 && Math.abs(z + 12) < 7) continue
      const n = randi(3, 5)
      const clusterRot = rand(0, Math.PI * 2)
      for (let k = 0; k < n; k++) {
        const hh = rand(1.6, 3.6)
        const g = new THREE.PlaneGeometry(rand(0.24, 0.42), hh, 1, 5)
        g.translate(0, hh / 2, 0)
        const p = g.attributes.position
        for (let v = 0; v < p.count; v++) {
          const y = p.getY(v)
          p.setX(v, p.getX(v) + Math.sin(y * 1.2) * 0.2 * (y / hh))
        }
        // pose monde : cluster + offset local
        g.rotateY(clusterRot + rand(-0.8, 0.8))
        g.translate(x + rand(-0.5, 0.5), 0.1, z + rand(-0.4, 0.4))
        geos.push(g)
      }
    }
    const merged = mergeGeometries(geos)
    merged.computeVertexNormals()
    const weeds = new THREE.Mesh(merged, mat)
    weeds.frustumCulled = false
    this.group.add(weeds)
  }

  // ---------- Bulles montantes ----------
  _buildBubbles() {
    const N = 320
    this.bubbleData = []
    const pos = new Float32Array(N * 3)
    for (let i = 0; i < N; i++) {
      const x = rand(-this.w / 2 + 1, this.w / 2 - 1)
      const z = rand(-this.d / 2 + 1, this.d / 2 - 1)
      const y = rand(0, this.h)
      pos[i * 3] = x; pos[i * 3 + 1] = y; pos[i * 3 + 2] = z
      this.bubbleData.push({ x, z, speed: rand(0.4, 1.2), wobble: rand(0, Math.PI * 2), size: rand(0.5, 1) })
    }
    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3))
    const mat = new THREE.PointsMaterial({
      size: 0.26, map: bubbleTexture(), transparent: true, opacity: 0.6,
      depthWrite: false, color: 0xdff6ff, sizeAttenuation: true
    })
    this.bubbles = new THREE.Points(geo, mat)
    this.bubbles.frustumCulled = false
    this.group.add(this.bubbles)
  }

  // ---------- Plancton en suspension (matière vivante de l'eau) ----------
  _buildPlankton() {
    if (!CFG.fx.plankton) return
    const N = 460
    this.planktonData = []
    const pos = new Float32Array(N * 3)
    for (let i = 0; i < N; i++) {
      const x = rand(-this.w / 2, this.w / 2)
      const z = rand(-this.d / 2, this.d / 2)
      const y = rand(0.5, this.h - 1)
      pos[i * 3] = x; pos[i * 3 + 1] = y; pos[i * 3 + 2] = z
      this.planktonData.push({
        x, y, z,
        vy: rand(-0.05, 0.08), phase: rand(0, Math.PI * 2),
        amp: rand(0.15, 0.5), speed: rand(0.15, 0.45)
      })
    }
    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3))
    const mat = new THREE.PointsMaterial({
      size: 0.085, map: dotTexture(), transparent: true, opacity: 0.34,
      depthWrite: false, color: 0xcdf3ff, sizeAttenuation: true,
      blending: THREE.AdditiveBlending
    })
    this.plankton = new THREE.Points(geo, mat)
    this.plankton.frustumCulled = false
    this.group.add(this.plankton)
  }

  // ---------- Rayons de lumière (shader doux, effet volumétrique) ----------
  _buildShafts() {
    if (!CFG.fx.godRays) return
    this.shafts = []
    const frag = `
      varying vec2 vUv;
      uniform float uTime;
      uniform float uPhase;
      uniform vec3 uColor;
      void main() {
        float edge = smoothstep(0.0, 0.35, vUv.x) * smoothstep(1.0, 0.65, vUv.x);
        float grad = pow(vUv.y, 1.4);
        float flicker = 0.62 + 0.38 * sin(uTime * 0.45 + uPhase) * sin(uTime * 0.23 + uPhase * 2.7);
        float bands = 0.82 + 0.18 * sin(vUv.x * 22.0 + uTime * 0.4 + uPhase);
        float a = edge * grad * flicker * bands * 0.42;
        gl_FragColor = vec4(uColor, a);
      }`
    const vert = `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }`
    for (let i = 0; i < 7; i++) {
      const mat = new THREE.ShaderMaterial({
        transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide,
        fog: false, toneMapped: false,
        uniforms: {
          uTime: { value: 0 },
          uPhase: { value: rand(0, Math.PI * 2) },
          uColor: { value: new THREE.Color(i % 2 ? 0xa8ecff : 0xd8f4ff) }
        },
        vertexShader: vert, fragmentShader: frag
      })
      const w = rand(3.2, 5.4)
      const m = new THREE.Mesh(new THREE.PlaneGeometry(w, this.h * 1.02), mat)
      m.position.set(rand(-16, 16), this.h * 0.52, rand(-11, 11))
      m.rotation.y = rand(0, Math.PI)
      m.rotation.z = rand(-0.14, 0.14)
      m.userData.speed = rand(0.02, 0.07) * (i % 2 ? 1 : -1)
      this.shafts.push(m)
      this.group.add(m)
    }
  }

  // ---------- Surface de l'eau au-dessus du bassin (shader) ----------
  _buildWaterCeiling() {
    if (!CFG.fx.waterCeiling) return
    const { w, d, h } = this
    const mat = new THREE.ShaderMaterial({
      transparent: true, depthWrite: false, side: THREE.DoubleSide, fog: false,
      uniforms: { uTime: { value: 0 } },
      vertexShader: `
        varying vec2 vUv;
        varying vec3 vP;
        uniform float uTime;
        void main() {
          vUv = uv;
          vec3 p = position;
          p.z += (sin(p.x * 0.42 + uTime * 1.15) + cos(p.y * 0.6 + uTime * 0.85)) * 0.13;
          p.z += sin(p.x * 1.7 + uTime * 2.1) * cos(p.y * 1.4 - uTime * 1.6) * 0.05;
          vP = p;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
        }`,
      fragmentShader: `
        varying vec2 vUv;
        varying vec3 vP;
        uniform float uTime;
        void main() {
          // voiles d'ondes croisées (vue par en dessous)
          float w1 = sin(vP.x * 0.55 + uTime * 1.1) * cos(vP.y * 0.62 - uTime * 0.8);
          float w2 = sin((vP.x + vP.y) * 0.9 - uTime * 1.7);
          float w3 = sin((vP.x * 0.31 - vP.y * 0.27) * 2.2 + uTime * 0.5);
          float pat = 0.5 + 0.25 * w1 + 0.2 * w2 + 0.18 * w3;
          vec3 deep = vec3(0.015, 0.14, 0.19);
          vec3 lite = vec3(0.35, 0.83, 0.92);
          vec3 col = mix(deep, lite, pow(pat, 2.2));
          // assombrit vers les bords du bassin
          float vig = smoothstep(0.0, 0.45, vUv.x) * smoothstep(1.0, 0.55, vUv.x)
                    * smoothstep(0.0, 0.45, vUv.y) * smoothstep(1.0, 0.55, vUv.y);
          col *= 0.55 + 0.45 * vig;
          gl_FragColor = vec4(col, 0.9);
        }`
    })
    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(w + 2, d + 2, 48, 32), mat)
    mesh.rotation.x = -Math.PI / 2
    mesh.position.y = h + 0.05
    this.waterCeiling = mesh
    this.group.add(mesh)
  }

  // ---------- Le commissariat (panneaux du menu) ----------
  _buildPoliceStation() {
    const g = new THREE.Group()
    // mur bois + panneau
    const wall = new THREE.Mesh(
      new THREE.BoxGeometry(13, 5.2, 0.35),
      new THREE.MeshStandardMaterial({ color: 0x35525c, roughness: 0.8 })
    )
    wall.position.set(1, 3.0, this.d / 2 - 0.2)
    wall.castShadow = wall.receiveShadow = true
    g.add(wall)
    const sign = new THREE.Mesh(
      new THREE.BoxGeometry(7.2, 0.75, 0.18),
      new THREE.MeshStandardMaterial({ color: 0x183a44, roughness: 0.5, metalness: 0.2 })
    )
    sign.position.set(1, 6.0, this.d / 2 - 0.45)
    g.add(sign)
    const desk = new THREE.Mesh(
      new THREE.BoxGeometry(5.2, 1.15, 1.5),
      new THREE.MeshStandardMaterial({ color: 0x6d5236, roughness: 0.85 })
    )
    desk.position.set(1, 0.72, this.d / 2 - 1.6)
    desk.castShadow = desk.receiveShadow = true
    g.add(desk)
    this.colliders.push({ x: 1, y: 0.72, z: this.d / 2 - 1.6, r: 1.5 })
    if (CFG.fx.outlines) {
      addOutline(wall)
      addOutline(sign)
      addOutline(desk)
    }
    this.group.add(g)

    // ancres pour les panneaux interactifs (Boards.js)
    this.policeAnchor = { pos: new THREE.Vector3(-2.6, 3.9, this.d / 2 - 0.5), rotY: Math.PI }
    this.shopAnchor = { pos: new THREE.Vector3(4.6, 3.6, this.d / 2 - 0.5), rotY: Math.PI }
    this.statsAnchor = { pos: new THREE.Vector3(8.5, 3.4, this.d / 2 - 0.8), rotY: Math.PI + 0.42 }
    this.spawnPos = new THREE.Vector3(CFG.spawn.x, CFG.spawn.y, CFG.spawn.z)
  }

  // ============================================================
  // PROPS 3D réels (Kenney / Quaternius CC0) : épave de galion,
  // coffre animé, barils, caisses, rochers sculptés, bouées.
  // ============================================================
  _placeModel(scene3d, { pos, rotY = 0, rotZ = 0, size, tint = null, colliders = null, rim = null, shadow = true, doubleSide = false }) {
    // inclinaison AVANT les calculs de pose
    if (rotZ) scene3d.rotation.z = rotZ
    // normalisation d'échelle : plus grande dimension -> size (m)
    const box = new THREE.Box3().setFromObject(scene3d)
    const s = new THREE.Vector3()
    box.getSize(s)
    const raw = Math.max(s.x, s.y, s.z) || 1
    const k = size / raw
    const holder = new THREE.Group()
    scene3d.scale.setScalar(k)
    holder.add(scene3d)
    holder.rotation.y = rotY
    // poser sur le sol : bas de la bbox (après rotation) -> pos.y
    holder.updateMatrixWorld(true)
    const box2 = new THREE.Box3().setFromObject(holder)
    holder.position.set(pos[0], pos[1] - box2.min.y, pos[2])
    scene3d.traverse(o => {
      if (o.isMesh) {
        // les GLB Kenney contiennent parfois des meshes helpers dégénérés
        if (o.geometry) {
          if (!o.geometry.boundingSphere) o.geometry.computeBoundingSphere()
          const rr = o.geometry.boundingSphere ? o.geometry.boundingSphere.radius : 0
          if (!isFinite(rr) || rr > 500) { o.visible = false; return }
        }
        o.castShadow = shadow && CFG.fx.shadows
        o.receiveShadow = shadow && CFG.fx.shadows
        if (tint && o.material && o.material.color) {
          o.material = o.material.clone()
          o.material.color.lerp(new THREE.Color(tint), 0.25)
        }
        o.material && (o.material.roughness = 0.75)
        // voiles / feuilles simple-face : visibles de partout sous l'eau
        if (doubleSide && o.material) o.material.side = THREE.DoubleSide
      }
    })
    if (rim) addOutline(scene3d, rim === true ? {} : rim)
    this.group.add(holder)
    if (colliders) {
      for (const c of colliders) {
        this.colliders.push({ x: c[0], y: c[1], z: c[2], r: c[3] })
      }
    }
    return holder
  }

  _buildModelProps() {
    const { w, d, h } = this

    // --- ÉPAVE DE NAVIRE (galion Quaternius, pièce maîtresse du coin
    //     nord-ouest) : coque complète, 3 mâts et voiles, penchée et
    //     semi-enfoncée dans le sable. Rim léger (grande surface) et
    //     faces doubles pour que les voiles restent visibles de partout.
    loadProp('q_ship_sailship').then(s => {
      if (!s) return
      this._placeModel(s, {
        pos: [-22, -0.55, -12], rotY: 2.55, rotZ: 0.3, size: 16,
        tint: 0x5a7a68,
        colliders: [[-25.5, 1.8, -7.8, 2.6], [-22, 2.4, -12, 2.8], [-18.6, 1.6, -16.4, 2.4]],
        rim: { str: 0.6 },
        doubleSide: true
      })
    })

    // --- COFFRE AU TRÉSOR (animé : s'ouvre quand on s'approche) ---
    loadProp('k_pirate_chest').then(s => {
      if (!s) return
      const holder = this._placeModel(s, {
        pos: [15.5, 0.15, -7.5], rotY: -0.9, size: 1.1,
        colliders: [[15.5, 0.6, -7.5, 0.65]], rim: true
      })
      const mixer = new THREE.AnimationMixer(s)
      const clips = {}
      const anims = s.userData.animations || []
      for (const c of anims) {
        const nm = c.name.toLowerCase()
        if (nm.includes('open') && nm.includes('close')) clips.loop = c
        else if (nm.includes('open')) clips.open = c
        else if (nm.includes('close')) clips.close = c
      }
      this.chest = {
        holder, mixer, clips,
        root: s,
        pos: new THREE.Vector3(15.5, 1, -7.5),
        state: 'closed',
        cooldown: 0
      }
    }).catch(() => {})

    // --- BARILS & CAISSES (épave + autour du bassin) ---
    const barrels = [[-18.5, -8.2, 0.7], [17.5, 6.5, -0.4], [-7.5, 14, 1.9]]
    for (const [x, z, ry] of barrels) {
      loadProp('k_pirate_barrel').then(s => {
        if (!s) return
        this._placeModel(s, {
          pos: [x, 0.15, z], rotY: ry, size: 1.05,
          colliders: [[x, 0.55, z, 0.55]], rim: true
        })
      })
    }
    const crates = [[16.8, -9.6, 0.35], [-26, 3.5, 1.2], [10.5, -14.5, 2.2]]
    for (const [x, z, ry] of crates) {
      loadProp('k_pirate_crate').then(s => {
        if (!s) return
        this._placeModel(s, {
          pos: [x, 0.15, z], rotY: ry, size: 1.0,
          colliders: [[x, 0.5, z, 0.6]], rim: true
        })
      })
    }

    // --- GROS ROCHERS SCULPTÉS (Kenney) : 6 instances ---
    const rockDefs = [
      ['k_pirate_rocks-a', -10, -16, 3.4, 0.6],
      ['k_pirate_rocks-b', 24, -12, 3.0, 2.1],
      ['k_pirate_rocks-c', -28, 8, 2.7, 4.0],
      ['k_pirate_rocks-a', 8, 12, 2.6, 1.1],
      ['k_pirate_rocks-b', -4, -6, 2.2, 3.3],
      ['k_pirate_rocks-c', 30, 10, 2.9, 5.2]
    ]
    for (const [name, x, z, size, ry] of rockDefs) {
      loadProp(name).then(s => {
        if (!s) return
        const inst = s.clone(true)
        this._placeModel(inst, {
          pos: [x, 0.15, z], rotY: ry, size,
          colliders: [[x, 0.8, z, size * 0.42]], rim: true
        })
      })
    }

    // --- BOUÉES flottantes à la surface ---
    this.buoys = []
    const buoyDefs = [[10, 7], [-15, -4]]
    for (const [x, z] of buoyDefs) {
      loadProp('k_buoy').then(s => {
        if (!s) return
        const inst = s.clone(true)
        const holder = this._placeModel(inst, { pos: [x, h - 0.7, z], size: 1.4, shadow: false, rim: true })
        this.buoys.push({ holder, baseY: h - 0.7, phase: rand(0, Math.PI * 2) })
      })
    }
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

  update(dt, time, playerPos = null) {
    this.time = time
    // bulles
    const p = this.bubbles.geometry.attributes.position
    for (let i = 0; i < this.bubbleData.length; i++) {
      const b = this.bubbleData[i]
      let y = p.getY(i) + b.speed * dt
      if (y > this.h - 0.3) { y = 0.1; b.x = rand(-this.w / 2 + 1, this.w / 2 - 1); b.z = rand(-this.d / 2 + 1, this.d / 2 - 1) }
      p.setXYZ(i, b.x + Math.sin(time * 1.3 + b.wobble) * 0.25, y, b.z + Math.cos(time * 1.1 + b.wobble) * 0.25)
    }
    p.needsUpdate = true
    // plancton
    if (this.plankton) {
      const pp = this.plankton.geometry.attributes.position
      for (let i = 0; i < this.planktonData.length; i++) {
        const m = this.planktonData[i]
        let y = m.y + m.vy * dt * 6
        if (y > this.h - 0.8) { y = 0.6; m.y = 0.6 }
        if (y < 0.4) { y = this.h - 1; m.y = y }
        m.y = y
        pp.setXYZ(i,
          m.x + Math.sin(time * m.speed + m.phase) * m.amp,
          y,
          m.z + Math.cos(time * m.speed * 0.8 + m.phase) * m.amp)
      }
      pp.needsUpdate = true
    }
    // algues : le balancement est GPU (uTime), plus rien à mettre à jour
    if (this.weedShader) this.weedShader.uniforms.uTime.value = time
    // rayons
    if (this.shafts) {
      for (const s of this.shafts) {
        s.rotation.y += s.userData.speed * dt
        s.material.uniforms.uTime.value = time
      }
    }
    // caustiques
    if (this.floorShader) this.floorShader.uniforms.uTime.value = time
    // surface d'eau
    if (this.waterCeiling) this.waterCeiling.material.uniforms.uTime.value = time
    // bouées : flottement sinusoïdal
    if (this.buoys) {
      for (const b of this.buoys) {
        b.holder.position.y = b.baseY + Math.sin(time * 0.9 + b.phase) * 0.18
        b.holder.rotation.z = Math.sin(time * 0.7 + b.phase) * 0.06
        b.holder.rotation.x = Math.cos(time * 0.5 + b.phase) * 0.05
      }
    }
    // coffre : s'ouvre quand le joueur s'approche
    if (this.chest) {
      const ch = this.chest
      ch.mixer.update(dt)
      ch.cooldown = Math.max(0, ch.cooldown - dt)
      const near = playerPos ? playerPos.distanceTo(ch.pos) < 3.4 : false
      if (near && ch.state === 'closed' && ch.cooldown <= 0 && ch.clips.open) {
        ch.state = 'open'
        ch.cooldown = 1.2
        const a = ch.mixer.clipAction(ch.clips.open)
        a.reset(); a.setLoop(THREE.LoopOnce); a.clampWhenFinished = true; a.play()
      } else if (!near && ch.state === 'open' && ch.cooldown <= 0 && ch.clips.close) {
        ch.state = 'closed'
        ch.cooldown = 1.2
        const a = ch.mixer.clipAction(ch.clips.close)
        a.reset(); a.setLoop(THREE.LoopOnce); a.clampWhenFinished = true; a.play()
      }
    }
  }
}
