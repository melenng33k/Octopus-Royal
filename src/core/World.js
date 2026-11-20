// ============================================================
// World — l'aquarium : décor, collisions, raycast, ambiance
// VERSION RELIEF : le fond marin est un vrai champ de hauteur
// (dunes, buttes, vasques) partagé par le mesh visuel, les
// collisions sphère, les raycasts et le posé des props — tout
// concorde. Deux grottes bâties en blobs de rochers procéduraux
// (grotte à cristaux + arche traversable) sont des surfaces de
// poussée Gorilla Tag à part entière. Le décor organique reste
// fait de VRAIS modèles 3D du kit « Coral Reef » de Polyfork
// (CC BY 4.0), posés SUR le relief, fusionnés en 1-2 draw calls.
// ============================================================
import * as THREE from 'three'
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { clone as cloneSkinned } from 'three/addons/utils/SkeletonUtils.js'
import { CFG } from '../config.js'
import { rand, clamp } from '../utils.js'
import { addOutline, applyRimMaterial } from './Outline.js'

const C = {
  sand: 0xe3cf9e,
  sandDark: 0xb8a276,
  glass: 0x9fe8ff,
  frame: 0x1e2c33,
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
// Les clips d'animation sont rangés HORS de la scène : un clone
// SkeletonUtils sérialise userData en JSON et détruit les classes
// des tracks (createInterpolant disparaît). On garde donc les vrais
// AnimationClips dans ce registre, par nom de prop.
const propAnims = new Map()
function loadProp(name) {
  if (!propCache.has(name)) {
    const url = propUrl(name)
    propCache.set(name, url
      ? new Promise((res) => new GLTFLoader().load(url, (g) => {
          propAnims.set(name, g.animations || [])
          res(g.scene)
        }, undefined, () => res(null)))
      : Promise.resolve(null))
  }
  return propCache.get(name)
}
const propAnimations = (name) => propAnims.get(name) || []

// ---- bake des modèles du récif (Polyfork) ----

// Extrait les géométries d'un GLB « à plat » dans son repère racine,
// avec des attributs homogènes (position/normal/color) pour permettre
// la fusion de dizaines d'instances en un seul mesh.
function extractWorldGeos(root) {
  root.updateMatrixWorld(true)
  const list = []
  root.traverse((o) => {
    if (!o.isMesh || !o.geometry) return
    // ignore les helpers dégénérés éventuels
    if (!o.geometry.boundingSphere) o.geometry.computeBoundingSphere()
    const rr = o.geometry.boundingSphere ? o.geometry.boundingSphere.radius : 0
    if (!isFinite(rr) || rr > 500) return
    const g = o.geometry.clone().applyMatrix4(o.matrixWorld)
    for (const name of Object.keys(g.attributes)) {
      if (name !== 'position' && name !== 'normal' && name !== 'color') g.deleteAttribute(name)
    }
    if (!g.attributes.color) {
      const n = g.attributes.position.count
      const white = new Float32Array(n * 3).fill(1)
      g.setAttribute('color', new THREE.BufferAttribute(white, 3))
    }
    g.morphAttributes = {}
    list.push(g)
  })
  return list
}

// Matrice d'instance : pose le modèle (bbox connue) posé sur le sable,
// centré sur (x, z), taille max = size, avec rotation/inclinaison/enfoncement.
// baseY = hauteur du terrain à (x, z) : les props suivent le relief.
function placeMatrix(bbox, { x, z, size, baseY = 0, rotY = 0, tiltX = 0, tiltZ = 0, sink = 0 }) {
  const s = new THREE.Vector3()
  bbox.getSize(s)
  const k = size / (Math.max(s.x, s.y, s.z) || 1)
  const c = new THREE.Vector3()
  bbox.getCenter(c)
  const M = new THREE.Matrix4().makeTranslation(x, baseY - sink, z)
  const R = new THREE.Matrix4().makeRotationY(rotY)
  if (tiltX) R.multiply(new THREE.Matrix4().makeRotationX(tiltX))
  if (tiltZ) R.multiply(new THREE.Matrix4().makeRotationZ(tiltZ))
  M.multiply(R)
    .multiply(new THREE.Matrix4().makeScale(k, k, k))
    .multiply(new THREE.Matrix4().makeTranslation(-c.x, -bbox.min.y, -c.z))
  return M
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
    this._buildTerrainRocks()
    this._buildGlass()
    this._buildReef()
    this._buildAlgae()
    this._buildCritters()
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

  // ============================================================
  // RELIEF DU FOND — champ de hauteur analytique. Dunes, grosses
  // buttes, vasques. La MÊME fonction sert au mesh visuel, aux
  // collisions, aux raycasts et au posé des props : zéro décalage.
  // ============================================================
  _smooth01(t) { t = clamp(t, 0, 1); return t * t * (3 - 2 * t) }

  // bosse lisse : 1 au centre, tangente horizontale au bord (r en m)
  _bump(dx, dz, r) {
    const d = Math.sqrt(dx * dx + dz * dz) / r
    if (d >= 1) return 0
    const t = 1 - d * d
    return t * t
  }

  // masque d'aplanissement : 0 = zone gardée à plat (spawn, épave,
  // coffre, grottes), 1 = relief normal, transition douce entre les deux
  _flat(cx, cz, rx, rz, x, z) {
    const d = Math.sqrt(((x - cx) / rx) ** 2 + ((z - cz) / rz) ** 2)
    return this._smooth01((d - 0.55) / 0.75)
  }

  terrainHeight(x, z) {
    // dunes ondulantes (4 octaves douces, pentes VR-comfortables)
    let y =
      1.05 * Math.sin(x * 0.11 + 1.2) * Math.cos(z * 0.14 - 0.8) +
      0.65 * Math.sin(x * 0.23 - 2.0) * Math.cos(z * 0.27 + 1.1) +
      0.32 * Math.sin(x * 0.47 + z * 0.41 + 0.7) +
      0.14 * Math.sin(x * 0.93) * Math.cos(z * 0.81 - 1.9)
    // bosses marquées : grande butte est, crête ouest, mamelon central
    y += 2.9 * this._bump(x - 24, z - 2, 11.5)
    y += 2.5 * this._bump(x + 24, z - 8, 9)
    y += 2.0 * this._bump(x - 2, z + 4, 8)
    // vasques (creux sableux)
    y -= 1.5 * this._bump(x - 6, z + 16, 7)
    y -= 1.2 * this._bump(x + 18, z - 14, 6.5)
    // zones à garder plates : commissariat + spawn, épave, coffre, grottes
    let m = 1
    m = Math.min(m, this._flat(0.5, 17.5, 15.5, 7.5, x, z))
    m = Math.min(m, this._flat(-22, -12, 10.5, 8.5, x, z))
    m = Math.min(m, this._flat(15.5, -7.5, 4.5, 4.5, x, z))
    m = Math.min(m, this._flat(25, 13, 8, 8, x, z))
    m = Math.min(m, this._flat(-6, -15, 7.5, 7.5, x, z))
    y *= m
    // fond de la grotte à cristaux légèrement creusé (on est DEDANS)
    const dg = Math.sqrt((x - 25) ** 2 + (z - 13) ** 2)
    if (dg < 5.8) y -= 0.55 * (1 - this._smooth01((dg - 3.4) / 2.4))
    return y
  }

  // ---------- Sable bosselé + CAUSTIQUES animées en shader ----------
  _buildFloor() {
    const { w, d } = this
    const geo = new THREE.PlaneGeometry(w, d, 132, 84)
    geo.rotateX(-Math.PI / 2)
    const pos = geo.attributes.position
    const colors = new Float32Array(pos.count * 3)
    const base = new THREE.Color(C.sand)
    const dark = new THREE.Color(C.sandDark)
    const rockTint = new THREE.Color(0x9a8c72)
    const algaeTint = new THREE.Color(0x86a878)
    const tmp = new THREE.Color()
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i), z = pos.getZ(i)
      const y = this.terrainHeight(x, z)
      pos.setY(i, y)
      // pente locale : plus raide -> tire vers le rocheux
      const e = 1.1
      const gx = (this.terrainHeight(x + e, z) - this.terrainHeight(x - e, z)) / (2 * e)
      const gz = (this.terrainHeight(x, z + e) - this.terrainHeight(x, z - e)) / (2 * e)
      const slope = Math.min(1, Math.sqrt(gx * gx + gz * gz) * 0.75)
      const t = clamp((y + 2.4) / 7.0, 0, 1)
      const c = tmp.copy(dark).lerp(base, t)
      c.lerp(rockTint, slope * 0.6)
      // vasques : léger voile d'algue dans les creux
      if (y < -0.5) c.lerp(algaeTint, Math.min(0.4, (-y - 0.5) * 0.35))
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

  // ============================================================
  // RELIEF BÂTI — blobs de rochers procéduraux + sphères de
  // collision : GROTTE À CRISTAUX (dôme habitable à 2 entrées,
  // fond creusé, cristaux lumineux), ARCHE DE PIERRE traversable,
  // SURPLOMB sur la dune ouest. Tous ces rochers sont des
  // surfaces de poussée Gorilla Tag : on grimpe, on traverse, on
  // se cache dedans.
  // ============================================================
  _rockBlobGeo(r, seed) {
    const g = new THREE.IcosahedronGeometry(1, 2)
    g.deleteAttribute('uv')
    const pos = g.attributes.position
    const colors = new Float32Array(pos.count * 3)
    const seen = new Map()
    const cLow = new THREE.Color(0x6a5c45)
    const cHigh = new THREE.Color(0xa99b7a)
    const cAlgae = new THREE.Color(0x74885c)
    const tmp = new THREE.Color()
    const h1 = (n) => { const s = Math.sin(n * 127.1 + seed * 311.7) * 43758.5453; return s - Math.floor(s) }
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i), y = pos.getY(i), z = pos.getZ(i)
      // même déplacement pour les sommets confondus (géométrie non indexée)
      const key = x.toFixed(3) + '|' + y.toFixed(3) + '|' + z.toFixed(3)
      let d = seen.get(key)
      if (d === undefined) {
        d = 0.9 + 0.13 * h1(x * 2.7 + y * 5.3 + z * 3.9) + 0.09 * h1(x * 7.9 - z * 6.3 + y * 1.7)
        seen.set(key, d)
      }
      pos.setXYZ(i, x * d, y * d, z * d)
      const t = clamp((y * d + 1) / 2, 0, 1)
      tmp.copy(cLow).lerp(cHigh, t)
      if (t > 0.58) tmp.lerp(cAlgae, (t - 0.58) * 1.1 * (0.35 + 0.65 * h1(z * 3.1 + y * 2.2)))
      colors[i * 3] = tmp.r; colors[i * 3 + 1] = tmp.g; colors[i * 3 + 2] = tmp.b
    }
    g.setAttribute('color', new THREE.BufferAttribute(colors, 3))
    g.scale(r, r * 0.84, r) // posé : un peu plus large que haut
    g.computeVertexNormals()
    return g
  }

  _addBoulder(parts, colliders, x, y, z, r, seed) {
    const g = this._rockBlobGeo(r, seed)
    g.translate(x, y, z)
    parts.push(g)
    colliders.push({ x, y, z, r: r * 0.98 })
  }

  _buildTerrainRocks() {
    const parts = [], cols = []
    const cx1 = 25, cz1 = 13 // grotte à cristaux (pad aplani)
    const cx2 = -6, cz2 = -15 // arche de pierre (pad aplani)
    let s = 7

    // ---------- GROTTE À CRISTAUX : dôme habitable, 2 entrées ----------
    const R = 5.2
    const gaps = [[Math.PI - 0.42, Math.PI + 0.42], [-Math.PI / 2 - 0.42, -Math.PI / 2 + 0.42]]
    const inGap = (a) => gaps.some(([lo, hi]) => a >= lo && a <= hi)
    // couronne basse (jours des entrées : ouest et nord)
    for (let i = 0; i < 12; i++) {
      const a = (i / 12) * Math.PI * 2 + 0.09
      if (inGap(a)) continue
      this._addBoulder(parts, cols, cx1 + Math.cos(a) * R, 1.05 + rand(-0.15, 0.3), cz1 + Math.sin(a) * R, rand(1.7, 2.15), s++)
    }
    // couronne haute (décalée d'un demi-pas pour casser l'alignement)
    for (let i = 0; i < 10; i++) {
      const a = ((i + 0.5) / 10) * Math.PI * 2 + 0.22
      if (inGap(a)) continue
      this._addBoulder(parts, cols, cx1 + Math.cos(a) * (R - 0.8), 2.85 + rand(-0.2, 0.35), cz1 + Math.sin(a) * (R - 0.8), rand(1.55, 1.95), s++)
    }
    // linteaux au-dessus des deux entrées (ouverture ~2,4 m de haut)
    this._addBoulder(parts, cols, cx1 - (R - 1.1), 3.7, cz1, 1.85, s++)
    this._addBoulder(parts, cols, cx1, 3.55, cz1 - (R - 1.1), 1.8, s++)
    // toit : dalles en couronne + claveau central
    for (let i = 0; i < 6; i++) {
      const a = (i / 6) * Math.PI * 2 + 0.26
      this._addBoulder(parts, cols, cx1 + Math.cos(a) * 2.5, 5.1 + rand(0, 0.35), cz1 + Math.sin(a) * 2.5, rand(1.95, 2.3), s++)
    }
    this._addBoulder(parts, cols, cx1, 6.0, cz1, 2.05, s++)
    // rocher « mobilier » à l'intérieur
    this._addBoulder(parts, cols, cx1 - 1.3, -0.15, cz1 + 1.0, 0.85, s++)

    // ---------- ARCHE DE PIERRE : tunnel traversable ----------
    for (const rx of [cx2 - 2.2, cx2 + 2.2]) {
      for (let i = 0; i < 9; i++) {
        const a = (i / 9) * Math.PI * 2 + (rx < cx2 ? 0.2 : 0.55)
        this._addBoulder(parts, cols, rx, 2.6 + Math.sin(a) * 3.3, cz2 + Math.cos(a) * 3.3, rand(1.35, 1.7), s++)
      }
    }
    this._addBoulder(parts, cols, cx2, 5.75, cz2, 1.55, s++) // clé de voûte
    // assises naturelles au pied des piles
    this._addBoulder(parts, cols, cx2 - 4.8, 0.55, cz2 + 1.3, 1.35, s++)
    this._addBoulder(parts, cols, cx2 + 4.8, 0.5, cz2 - 1.0, 1.45, s++)
    this._addBoulder(parts, cols, cx2 - 3.4, 0.3, cz2 - 2.6, 1.1, s++)
    this._addBoulder(parts, cols, cx2 + 3.2, 0.35, cz2 + 2.5, 1.05, s++)

    // ---------- SURPLOMB sur la dune ouest (petit abri ombragé) ----------
    {
      const t1 = this.terrainHeight(-25.6, 7.0)
      const t2 = this.terrainHeight(-22.8, 9.2)
      const t3 = this.terrainHeight(-24.4, 8.1)
      this._addBoulder(parts, cols, -25.6, t1 + 0.9, 7.0, 1.9, s++)
      this._addBoulder(parts, cols, -22.8, t2 + 0.7, 9.2, 1.7, s++)
      this._addBoulder(parts, cols, -24.4, t3 + 2.5, 8.1, 2.1, s++) // dalle au-dessus
    }

    // fusion : 1 mesh, 1 draw call, liseré cartoon
    if (parts.length) {
      const merged = mergeGeometries(parts)
      if (merged) {
        const mat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.92, metalness: 0 })
        applyRimMaterial(mat, { str: 0.62 })
        const mesh = new THREE.Mesh(merged, mat)
        mesh.castShadow = mesh.receiveShadow = true
        mesh.frustumCulled = false
        this.group.add(mesh)
      }
    }
    for (const c of cols) this.colliders.push(c)

    // ---------- CRISTAUX de la grotte + lumière ----------
    const floorY1 = (x, z) => this.terrainHeight(x, z)
    const mkShards = (defs, mat) => {
      const gs = []
      for (const [sx, sz, rad, k] of defs) {
        const g = new THREE.OctahedronGeometry(rad, 0)
        g.scale(1, k, 1)
        g.rotateZ(rand(-0.3, 0.3)); g.rotateX(rand(-0.25, 0.25))
        g.translate(sx, floorY1(sx, sz) + rad * k * 0.42, sz)
        gs.push(g)
      }
      const m = mergeGeometries(gs)
      if (m) this.group.add(new THREE.Mesh(m, mat))
    }
    const cyanMat = new THREE.MeshStandardMaterial({
      color: 0x35e0ff, emissive: 0x00c2e8, emissiveIntensity: 2.2, toneMapped: false,
      roughness: 0.28, metalness: 0.1, transparent: true, opacity: 0.95
    })
    const magentaMat = new THREE.MeshStandardMaterial({
      color: 0xff6ec7, emissive: 0xe0359a, emissiveIntensity: 1.9, toneMapped: false,
      roughness: 0.3, metalness: 0.1, transparent: true, opacity: 0.95
    })
    mkShards([
      [26.7, 13.9, 0.34, 2.3], [27.3, 12.3, 0.26, 1.9], [24.0, 14.9, 0.3, 2.1],
      [24.9, 11.7, 0.22, 1.7], [26.3, 15.0, 0.2, 1.6]
    ], cyanMat)
    mkShards([
      [23.4, 12.2, 0.24, 1.9], [26.0, 11.4, 0.19, 1.7], [24.4, 15.3, 0.17, 1.6]
    ], magentaMat)
    const caveLight = new THREE.PointLight(0x59e8ff, 16, 14, 1.7)
    caveLight.position.set(25.2, 2.4, 13)
    this.group.add(caveLight)
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

  // ============================================================
  // RÉCIF CORALLIEN — vrais modèles 3D du kit « Coral Reef »
  // (Polyfork, CC BY 4.0). Fini les icosahèdres, cônes et tuyaux :
  // rochers incrustés, coraux sculptés, éponges organiques.
  // Toutes les instances statiques sont FUSIONNÉES en 1 seul mesh
  // (vertex colors + un seul matériau) => 1 draw call pour tout.
  // ============================================================
  _scatter(n, mx = 4, mz = 3.5, minR = 0) {
    const pts = []
    let guard = n * 60
    while (pts.length < n && guard-- > 0) {
      const x = rand(-this.w / 2 + mx, this.w / 2 - mx)
      const z = rand(-this.d / 2 + mz, this.d / 2 - mz)
      if (Math.abs(x) < 13 && z > this.d / 2 - 9) continue // commissariat dégagé
      if (Math.abs(x + 22) < 9 && Math.abs(z + 12) < 7) continue // zone épave
      if (Math.abs(x - 15.5) < 3.4 && Math.abs(z + 7.5) < 3.4) continue // coffre dégagé
      if (Math.abs(x - 25) < 7.6 && Math.abs(z - 13) < 7.6) continue // grotte à cristaux
      if (Math.abs(x + 6) < 7 && Math.abs(z + 15) < 7) continue // arche de pierre
      if (minR > 0 && pts.some(p => (p[0] - x) ** 2 + (p[1] - z) ** 2 < minR * minR)) continue
      pts.push([x, z])
    }
    return pts
  }

  _buildReef() {
    // col = rayon de collision (x taille) : les rochers et grosses
    // éponges deviennent des surfaces de poussée Gorilla Tag.
    const RIGID = [
      // --- matrices rocheuses (collision) ---
      { id: 'pf_small-reef-rock-99062d', n: 12, size: [1.2, 2.4], col: 0.42, minR: 2.2, sink: 0.1 },
      { id: 'pf_encrusted-reef-boulder-972d95', n: 7, size: [2.0, 3.2], col: 0.4, minR: 3.4, sink: 0.12 },
      { id: 'pf_reef-rubble-terrain-blob-df5888', n: 5, size: [4.5, 7.0], col: 0.34, minR: 6, sink: 0.2, margin: [8, 6] },
      { id: 'pf_coral-bommie-772b22', n: 4, size: [3.0, 4.4], col: 0.4, minR: 4.2, sink: 0.12 },
      { id: 'pf_coral-pinnacle-0d9756', n: 3, size: [4.0, 5.6], col: 0.24, minR: 4.5, sink: 0.15, spire: true },
      // --- coraux (décor, sans collision) ---
      { id: 'pf_brain-coral-head-7db21a', n: 9, size: [0.8, 1.6], minR: 1.8, sink: 0.05 },
      { id: 'pf_lettuce-coral-e16e43', n: 7, size: [0.8, 1.5], minR: 1.7, sink: 0.04 },
      { id: 'pf_mushroom-coral-a2906e', n: 10, size: [0.5, 0.95], minR: 1.2, sink: 0.03 },
      { id: 'pf_pillar-coral-b6deba', n: 6, size: [1.2, 2.2], minR: 1.9, sink: 0.06 },
      { id: 'pf_staghorn-coral-422d23', n: 8, size: [0.9, 1.8], minR: 1.8, sink: 0.05 },
      { id: 'pf_soft-coral-tree-450af0', n: 7, size: [0.8, 1.6], minR: 1.7, sink: 0.05 },
      { id: 'pf_table-coral-193fa6', n: 6, size: [1.2, 2.4], minR: 2.0, sink: 0.05 },
      { id: 'pf_sea-fan-bafd49', n: 7, size: [0.8, 1.5], minR: 1.7, sink: 0.04, tiltZ: 0.14 },
      // --- éponges (elles remplacent les vieux tuyaux PVC) ---
      { id: 'pf_tube-sponge-df576b', n: 9, size: [1.0, 2.0], col: 0.36, minR: 2.0, sink: 0.06 },
      { id: 'pf_barrel-sponge-ab460c', n: 6, size: [0.9, 1.8], col: 0.38, minR: 2.0, sink: 0.06 }
    ]
    const parts = []
    let pending = RIGID.length
    const mat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.85, metalness: 0 })
    for (const def of RIGID) {
      loadProp(def.id).then(src => {
        if (!src) { if (--pending === 0) this._commitReef(parts, mat); return }
        const geos = extractWorldGeos(src)
        const bbox = new THREE.Box3().setFromObject(src)
        const [mx, mz] = def.margin || [4, 3.5]
        for (const [x, z] of this._scatter(def.n, mx, mz, def.minR)) {
          const size = rand(def.size[0], def.size[1])
          const sink = def.sink * rand(0.7, 1.3)
          const baseY = this.terrainHeight(x, z)
          const M = placeMatrix(bbox, { x, z, size, baseY, rotY: rand(0, Math.PI * 2), tiltZ: def.tiltZ ? rand(-def.tiltZ, def.tiltZ) : 0, sink })
          for (const g0 of geos) parts.push(g0.clone().applyMatrix4(M))
          if (def.col) {
            const r = size * def.col
            this.colliders.push({ x, y: baseY + Math.max(0.3, r * 0.85 - sink), z, r })
            if (def.spire) this.colliders.push({ x, y: baseY + size * 0.52, z, r: r * 0.62 })
          }
        }
        if (--pending === 0) this._commitReef(parts, mat)
      })
    }
  }

  _commitReef(parts, mat) {
    if (!parts.length) return
    // sécurité : tout indexé ou tout non-indexé (jamais les deux)
    const src = parts.every(p => p.index) ? parts : parts.map(p => (p.index ? p.toNonIndexed() : p))
    const merged = mergeGeometries(src)
    if (!merged) return
    const mesh = new THREE.Mesh(merged, mat)
    mesh.castShadow = mesh.receiveShadow = true
    mesh.frustumCulled = false
    applyRimMaterial(mat, { str: 0.7 })
    this.group.add(mesh)
  }

  // ============================================================
  // ALGUES — herbiers, frondes et fouets de mer (Polyfork) fusionnés
  // en 1 mesh. Balancement GPU par shader : aSway.x = amplitude du
  // modèle, aSway.y = hauteur normalisée sur la plante (0 racine,
  // 1 sommet). Les positions étant cuites en monde, chaque plant a
  // naturellement sa propre phase de balancement.
  // ============================================================
  _buildAlgae() {
    const ALGAE = [
      { id: 'pf_seagrass-tuft-862cc5', n: 26, size: [0.9, 1.8], amp: 1.0, minR: 1.4 },
      { id: 'pf_broad-algae-frond-88a644', n: 16, size: [1.2, 2.2], amp: 0.45, minR: 1.6 },
      { id: 'pf_sea-whip-e56668', n: 12, size: [1.6, 2.8], amp: 0.8, minR: 1.8 }
    ]
    const mat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.9, metalness: 0, side: THREE.DoubleSide })
    mat.onBeforeCompile = (shader) => {
      shader.uniforms.uTime = { value: 0 }
      shader.vertexShader = shader.vertexShader
        .replace('#include <common>', '#include <common>\nuniform float uTime;\nattribute vec2 aSway;')
        .replace('#include <begin_vertex>', `#include <begin_vertex>
          float swA = aSway.x * aSway.y * aSway.y;
          transformed.x += sin(uTime * 1.25 + position.x * 0.55 + position.z * 0.4) * 0.34 * swA;
          transformed.z += cos(uTime * 0.85 + position.x * 0.35 + position.z * 0.5) * 0.2 * swA;`)
      this.algaeShader = shader
    }
    // liseré noir cartoon : injecté APRÈS le balancement pour chaîner
    // les deux patchs shader (applyRimMaterial enveloppe onBeforeCompile)
    applyRimMaterial(mat, { str: 0.8 })
    const parts = []
    let pending = ALGAE.length
    for (const def of ALGAE) {
      loadProp(def.id).then(src => {
        if (!src) { if (--pending === 0) this._commitAlgae(parts, mat); return }
        const geos = extractWorldGeos(src)
        const bbox = new THREE.Box3().setFromObject(src)
        for (const [x, z] of this._scatter(def.n, 4, 3, def.minR)) {
          const size = rand(def.size[0], def.size[1])
          const M = placeMatrix(bbox, { x, z, size, baseY: this.terrainHeight(x, z), rotY: rand(0, Math.PI * 2), sink: 0.04 })
          for (const g0 of geos) {
            const g = g0.clone().applyMatrix4(M)
            // aSway : amplitude du modèle + hauteur normalisée du sommet
            g.computeBoundingBox()
            const hh = Math.max(1e-4, g.boundingBox.max.y - g.boundingBox.min.y)
            const pos = g.attributes.position
            const sw = new Float32Array(pos.count * 2)
            for (let i = 0; i < pos.count; i++) {
              const h = clamp((pos.getY(i) - g.boundingBox.min.y) / hh, 0, 1)
              sw[i * 2] = def.amp
              sw[i * 2 + 1] = h
            }
            g.setAttribute('aSway', new THREE.BufferAttribute(sw, 2))
            parts.push(g)
          }
        }
        if (--pending === 0) this._commitAlgae(parts, mat)
      })
    }
  }

  _commitAlgae(parts, mat) {
    if (!parts.length) return
    const src = parts.every(p => p.index) ? parts : parts.map(p => (p.index ? p.toNonIndexed() : p))
    const merged = mergeGeometries(src)
    if (!merged) return
    const mesh = new THREE.Mesh(merged, mat)
    mesh.frustumCulled = false
    this.group.add(mesh)
  }

  // ============================================================
  // BESTIOLES ANIMÉES du récif : bénitiers (s'ouvrent quand on
  // approche), anémones, oursins et étoiles de mer posées + méduses
  // translucides qui dérivent en pleine eau. Clones SkeletonUtils
  // (meshes skinnés) + AnimationMixer, mis à jour dans update().
  // ============================================================
  _buildCritters() {
    this.critters = []
    this.jellies = []
    const CRITTERS = [
      { id: 'pf_giant-clam-6408ba', n: 2, size: [1.0, 1.4], react: true },
      { id: 'pf_sea-anemone-9c2a94', n: 3, size: [0.9, 1.4] },
      { id: 'pf_sea-urchin-b599d4', n: 4, size: [1.3, 1.9] },
      { id: 'pf_starfish-772749', n: 7, size: [0.42, 0.7] }
    ]
    for (const def of CRITTERS) {
      loadProp(def.id).then(src => {
        if (!src) return
        for (const [x, z] of this._scatter(def.n, 3.5, 3, 1.2)) {
          const inst = cloneSkinned(src)
          const size = rand(def.size[0], def.size[1])
          const baseY = this.terrainHeight(x, z)
          const holder = this._placeModel(inst, {
            pos: [x, baseY + 0.05, z], rotY: rand(0, Math.PI * 2), size,
            rim: { str: 0.55 }
          })
          const mixer = new THREE.AnimationMixer(inst)
          const anims = propAnimations(def.id)
          if (anims.length) {
            const idle = anims.find(a => /idle/i.test(a.name)) || anims[0]
            mixer.clipAction(idle).play()
          }
          this.critters.push({
            mixer, holder, clips: anims, react: def.react,
            state: 'idle', cooldown: rand(0, 2),
            pos: new THREE.Vector3(x, baseY + 0.6, z)
          })
        }
      })
    }
    // méduses : translucides, dérive lente en pleine eau (pas d'ombre,
    // pas de liseré : le rim ternirait la transparence)
    loadProp('pf_moon-jellyfish-0fa43c').then(src => {
      if (!src) return
      for (let i = 0; i < 3; i++) {
        const inst = cloneSkinned(src)
        const holder = this._placeModel(inst, {
          pos: [rand(-this.w / 2 + 6, this.w / 2 - 6), rand(4, this.h - 4), rand(-this.d / 2 + 5, this.d / 2 - 5)],
          size: rand(1.2, 1.9), shadow: false
        })
        const mixer = new THREE.AnimationMixer(inst)
        const anims = propAnimations('pf_moon-jellyfish-0fa43c')
        const swim = anims.find(a => /swim/i.test(a.name) && !/fast/i.test(a.name))
        if (swim) mixer.clipAction(swim).play()
        this.jellies.push({
          holder, mixer,
          cx: holder.position.x, cz: holder.position.z,
          baseY: holder.position.y,
          phase: rand(0, Math.PI * 2),
          speed: rand(0.05, 0.12),
          radius: rand(2.5, 6)
        })
      }
    })
  }

  // ---------- Bulles montantes ----------
  _buildBubbles() {
    const N = 320
    this.bubbleData = []
    const pos = new Float32Array(N * 3)
    for (let i = 0; i < N; i++) {
      const x = rand(-this.w / 2 + 1, this.w / 2 - 1)
      const z = rand(-this.d / 2 + 1, this.d / 2 - 1)
      const y = this.terrainHeight(x, z) + rand(0.3, this.h - 2)
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
      const y = this.terrainHeight(x, z) + rand(0.5, this.h - 1)
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
      const anims = propAnimations('k_pirate_chest')
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
    // clone(true) obligatoire : loadProp met la MÊME scène en cache, et
    // Object3D.add() détache l'enfant de son parent précédent (sinon les
    // 2e/3e placements restaient des holders vides).
    const barrels = [[-18.5, -8.2, 0.7], [17.5, 6.5, -0.4], [-7.5, 14, 1.9]]
    for (const [x, z, ry] of barrels) {
      loadProp('k_pirate_barrel').then(s => {
        if (!s) return
        const by = this.terrainHeight(x, z)
        this._placeModel(s.clone(true), {
          pos: [x, by + 0.15, z], rotY: ry, size: 1.05,
          colliders: [[x, by + 0.55, z, 0.55]], rim: true
        })
      })
    }
    const crates = [[16.8, -9.6, 0.35], [-26, 3.5, 1.2], [10.5, -14.5, 2.2]]
    for (const [x, z, ry] of crates) {
      loadProp('k_pirate_crate').then(s => {
        if (!s) return
        const by = this.terrainHeight(x, z)
        this._placeModel(s.clone(true), {
          pos: [x, by + 0.15, z], rotY: ry, size: 1.0,
          colliders: [[x, by + 0.5, z, 0.6]], rim: true
        })
      })
    }

    // (Les anciens « rochers sculptés » Kenney k_pirate_rocks-a/b/c sont
    // RETIRÉS : leur géométrie était cassée (tas de triangles bleus) —
    // ce sont les vrais rochers du récif Polyfork qui les remplacent.)

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
  // Collision : sphère contre les murs / sol (RELIEF) / props
  // Le sol suit le champ de hauteur : dunes, buttes, vasques et
  // fond de grotte. La normale de pente permet de se pousser sur
  // les flancs des bosses comme sur une vraie parois.
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
    // sol en relief : échantillon du champ de hauteur sous la sphère
    const th = this.terrainHeight(pos.x, pos.z)
    if (pos.y < th + r) {
      pos.y = th + r
      hit = true; floor = true
      // normale de pente (gradient local du champ de hauteur)
      const e = 0.4
      const gx = (this.terrainHeight(pos.x + e, pos.z) - this.terrainHeight(pos.x - e, pos.z)) / (2 * e)
      const gz = (this.terrainHeight(pos.x, pos.z + e) - this.terrainHeight(pos.x, pos.z - e)) / (2 * e)
      const inv = 1 / Math.sqrt(gx * gx + gz * gz + 1)
      nx = -gx * inv; ny = inv; nz = -gz * inv
    }
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

  // Raycast analytique : murs AABB + sol en RELIEF (marche le long du
  // rayon contre le champ de hauteur, impact affiné par bissection)
  // + props sphériques. Retourne { t, point } ou null.
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
    // sol en relief : marche adaptative + bissection (le rayon peut
    // partir du haut et plonger dans une dune, une butte ou une grotte)
    if (origin.y < 5.5 || dir.y < 0) {
      const step = 0.9
      let t = 0.05
      while (t < best) {
        const tn = Math.min(t + step, best)
        const py = origin.y + dir.y * tn
        if (py > 5.5 && dir.y >= 0) break // au-dessus de tout le relief, ça monte
        const d = py - this.terrainHeight(origin.x + dir.x * tn, origin.z + dir.z * tn)
        if (d <= 0) {
          let lo = t, hi = tn
          for (let i = 0; i < 12; i++) {
            const mid = (lo + hi) / 2
            const dm = (origin.y + dir.y * mid) - this.terrainHeight(origin.x + dir.x * mid, origin.z + dir.z * mid)
            if (dm > 0) lo = mid; else hi = mid
          }
          best = (lo + hi) / 2
          break
        }
        t = tn
      }
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
      const th = this.terrainHeight(b.x, b.z)
      if (y < th + 0.12) y = th + 0.12 // jamais sous le relief
      if (y > this.h - 0.3) { y = th + 0.15; b.x = rand(-this.w / 2 + 1, this.w / 2 - 1); b.z = rand(-this.d / 2 + 1, this.d / 2 - 1) }
      p.setXYZ(i, b.x + Math.sin(time * 1.3 + b.wobble) * 0.25, y, b.z + Math.cos(time * 1.1 + b.wobble) * 0.25)
    }
    p.needsUpdate = true
    // plancton
    if (this.plankton) {
      const pp = this.plankton.geometry.attributes.position
      for (let i = 0; i < this.planktonData.length; i++) {
        const m = this.planktonData[i]
        let y = m.y + m.vy * dt * 6
        const th = this.terrainHeight(m.x, m.z)
        if (y > this.h - 0.8) { y = th + 0.4 }
        if (y < th + 0.22) { y = th + 0.22; if (m.vy < 0) m.vy = -m.vy }
        m.y = y
        pp.setXYZ(i,
          m.x + Math.sin(time * m.speed + m.phase) * m.amp,
          y,
          m.z + Math.cos(time * m.speed * 0.8 + m.phase) * m.amp)
      }
      pp.needsUpdate = true
    }
    // algues : le balancement est GPU (uTime), plus rien à mettre à jour
    if (this.algaeShader) this.algaeShader.uniforms.uTime.value = time
    // bestioles du récif : mixers + bénitiers qui s'ouvrent quand on approche
    if (this.critters) {
      for (const c of this.critters) {
        c.mixer.update(dt)
        c.cooldown = Math.max(0, c.cooldown - dt)
        if (!c.react) continue
        const near = playerPos ? playerPos.distanceTo(c.pos) < 3.2 : false
        if (near && c.state === 'idle' && c.cooldown <= 0) {
          c.state = 'react'
          c.cooldown = 3.6
          const clip = c.clips.find(a => /react/i.test(a.name))
          if (clip) {
            const a = c.mixer.clipAction(clip)
            a.reset(); a.setLoop(THREE.LoopOnce); a.clampWhenFinished = true; a.play()
          }
        } else if (!near && c.state === 'react' && c.cooldown <= 0) {
          c.state = 'idle'
          c.cooldown = 0.8
          const clip = c.clips.find(a => /idle/i.test(a.name))
          if (clip) { const a = c.mixer.clipAction(clip); a.reset(); a.play() }
        }
      }
    }
    // méduses : dérive circulaire lente + pulsation verticale
    if (this.jellies) {
      for (const j of this.jellies) {
        j.mixer.update(dt)
        j.phase += dt * j.speed
        const x = j.cx + Math.cos(j.phase) * j.radius
        const z = j.cz + Math.sin(j.phase * 0.83) * j.radius * 0.7
        j.holder.position.set(x, j.baseY + Math.sin(time * 0.55 + j.phase) * 0.9, z)
        j.holder.rotation.z = Math.sin(time * 0.7 + j.phase) * 0.07
        j.holder.rotation.x = Math.cos(time * 0.6 + j.phase) * 0.06
      }
    }
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
