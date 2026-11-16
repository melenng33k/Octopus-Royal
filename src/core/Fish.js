// ============================================================
// FishSchool — poissons du bassin, avec VRAIS MODÈLES 3D animés
// (packs Quaternius CC0, animations de nage incluses).
// - 8 petites espèces attrapables (clown, chirurgien bleu, koi...)
// - 4 "grands hôtes" d'ambiance non attrapables : requin, raie manta, 2 dauphins
// - teinte par poisson, contour noir, nage cruise/rapide animée
// L'hôte (pair au plus petit id) simule l'IA et diffuse les positions ;
// les invités interpolent. Attrape / mange local.
// En cas d'échec de chargement : repli sur les poissons procéduraux.
// ============================================================
import * as THREE from 'three'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { clone as skeletonClone } from 'three/addons/utils/SkeletonUtils.js'
import { mergeGeometries as mergeGeos } from 'three/addons/utils/BufferGeometryUtils.js'
import { CFG } from '../config.js'
import { rand, randi, clamp, damp } from '../utils.js'
import { outlineMaterial, computeHullWidth } from './Outline.js'

// --- Espèces (CC0 Quaternius) : url relative depuis src/assets/models ---
const SMALL_SPECIES = [
  { name: 'Clownfish',     len: 0.52 },
  { name: 'BlueTang',      len: 0.55 },
  { name: 'Koi',           len: 0.62 },
  { name: 'Goldfish',      len: 0.5  },
  { name: 'CoralGrouper',  len: 0.66 },
  { name: 'ButterflyFish', len: 0.5  },
  { name: 'CardinalFish',  len: 0.5  },
  { name: 'Anglerfish',    len: 0.55 }
]
const BIG_SPECIES = [
  { name: 'Shark',      len: 2.9, deep: [4, 18], tint: 0x9fb8c8 },
  { name: 'Manta_ray',  len: 3.6, deep: [9, 19], tint: 0x8f9fd0 },
  { name: 'Dolphin',    len: 1.9, deep: [3, 16], tint: 0xaec6d8 },
  { name: 'Dolphin',    len: 1.9, deep: [3, 16], tint: 0xaec6d8 }
]

const MODELS = import.meta.glob('../assets/models/*.glb', { eager: true, query: '?url', import: 'default' })
// les fichiers ont des préfixes (q_cute_Clownfish.glb, q_fish_Shark.glb...) :
// on matche par suffixe de basename, sans le '/'
const modelUrl = (name) => {
  const key = Object.keys(MODELS).find(k => k.endsWith(name + '.glb'))
  return key ? MODELS[key] : null
}

// palettes de repli procédural
const PALETTES = [
  { body: 0xffc93c, fin: 0xff8a3c },
  { body: 0xff7043, fin: 0xffffff },
  { body: 0x29c2a9, fin: 0x1f8f7d },
  { body: 0xf2f2f2, fin: 0x2e6f6f },
  { body: 0xff5f8f, fin: 0xffd166 }
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

// ---- chargement partagé des espèces (une fois pour toute l'appli) ----
const speciesCache = new Map() // name -> Promise<{ scene, clips, fitScale, yawFix } | null>

function loadSpecies(name, targetLen, yawFix = 0) {
  if (speciesCache.has(name)) return speciesCache.get(name)
  const url = modelUrl(name)
  const p = new Promise((resolve) => {
    if (!url) { resolve(null); return }
    new GLTFLoader().load(url, (gltf) => {
      const scene = gltf.scene
      const clips = gltf.animations || []
      // normalisation d'échelle : plus grande dimension X/Z = longueur du poisson
      const box = new THREE.Box3().setFromObject(scene)
      const size = new THREE.Vector3()
      box.getSize(size)
      const rawLen = Math.max(size.x, size.z) || 1
      const fitScale = targetLen / rawLen
      resolve({ scene, clips, fitScale, yawFix })
    }, undefined, () => resolve(null))
  })
  speciesCache.set(name, p)
  return p
}

export class FishSchool {
  constructor(scene, world) {
    this.scene = scene
    this.world = world
    this.ready = false
    this.count = CFG.fish.count
    this.fish = []

    // géométries procédurales de repli
    this.geometries = PALETTES.map(pal => mergeGeos(buildFishGeometry(pal)))

    // espèce par index (déterministe : identique chez tous les pairs)
    const nBig = BIG_SPECIES.length
    this._speciesFor = []
    for (let i = 0; i < this.count; i++) {
      if (i >= this.count - nBig) {
        const b = BIG_SPECIES[i - (this.count - nBig)]
        this._speciesFor.push(loadSpecies(b.name, b.len).then(s => s ? { ...b, loaded: s } : null))
      } else {
        const s = SMALL_SPECIES[i % SMALL_SPECIES.length]
        this._speciesFor.push(loadSpecies(s.name, s.len).then(loaded => loaded ? { ...s, loaded } : null))
      }
    }

    for (let i = 0; i < this.count; i++) {
      this.fish.push(this._spawn(i))
    }
    // brancher les vrais modèles dès qu'ils arrivent
    Promise.all(this._speciesFor).then(list => {
      for (let i = 0; i < this.fish.length; i++) {
        if (list[i]) this._attachModel(this.fish[i], list[i])
      }
      this.ready = true
    })
    // synchro réseau
    this.netPos = new Map()
    this.tempV = new THREE.Vector3()
  }

  // ================= création =================
  _spawn(id) {
    const gi = id % this.geometries.length
    const mesh = new THREE.Mesh(this.geometries[gi], this._materialFor(gi))
    const big = id >= this.count - BIG_SPECIES.length
    const f = {
      id,
      mesh,
      big,
      deepBand: big ? [[4, 18], [9, 19], [3, 16], [3, 16]][id - (this.count - BIG_SPECIES.length)] : null,
      model: null,       // { root, mixer, actions, mats }
      pos: mesh.position,
      yaw: rand(0, Math.PI * 2),
      speed: rand(0.7, 1.3),
      target: new THREE.Vector3(),
      stateTimer: rand(1, 4),
      alive: true,
      holder: null,
      respawnT: 0,
      phase: rand(0, Math.PI * 2),
      hasNet: false,
      fleeing: false
    }
    this._pickTarget(f)
    f.pos.set(rand(-14, 14), big ? rand(6, 16) : rand(1.5, 10), rand(-8, 8))
    mesh.visible = true
    this.scene.add(mesh)
    return f
  }

  // remplace le placeholder procédural par le modèle animé
  _attachModel(f, spec) {
    this.scene.remove(f.mesh)
    if (f.mesh.material) f.mesh.material.dispose()
    const g = new THREE.Group()
    const inst = skeletonClone(spec.loaded.scene)
    inst.scale.setScalar(spec.loaded.fitScale)
    if (spec.loaded.yawFix) inst.rotation.y = spec.loaded.yawFix
    const mats = []
    const hulls = []
    // teinte unique par poisson (léger décalage HSL) + contour noir
    const hShift = rand(-0.045, 0.045)
    const vMul = rand(0.88, 1.14)
    // collecter d'abord (les hulls ajoutés pendant traverse créeraient une récursion)
    const skinMeshes = []
    inst.traverse(o => { if (o.isMesh && o.material) skinMeshes.push(o) })
    for (const o of skinMeshes) {
      o.material = o.material.clone()
      o.material.color.getHSL(_hsl, THREE.SRGBColorSpace)
      const c = new THREE.Color()
      c.setHSL(clamp(_hsl.h + hShift, 0, 1), clamp(_hsl.s * rand(0.92, 1.1), 0, 1), clamp(_hsl.l * vMul, 0.04, 0.92), THREE.SRGBColorSpace)
      // les grands hôtes arrivent trop sombres : on les ré-éclaire
      if (f.big && spec.tint) {
        c.lerp(new THREE.Color(spec.tint), 0.62)
      }
      o.material.color.copy(c)
      o.material.roughness = 0.55
      o.frustumCulled = true // bbox bind-pose : largement suffisant pour culler
      o.castShadow = f.big && CFG.fx.shadows // seuls les grands hôtes portent ombre
      mats.push(o.material)
      if (CFG.fx.outlines) {
        const w0 = CFG.fx.outlineWidth.fish / Math.max(0.12, spec.loaded.fitScale)
        const w = computeHullWidth(o.geometry, w0)
        if (w > 0) {
          const hull = new THREE.SkinnedMesh(o.geometry, outlineMaterial(w))
          hull.skeleton = o.skeleton
          hull.bindMatrix.copy(o.bindMatrix)
          hull.bindMatrixInverse.copy(o.bindMatrixInverse)
          if (o.bindMode) hull.bindMode = o.bindMode
          hull.frustumCulled = true
          hull.renderOrder = -1
          o.add(hull)
          hulls.push(hull)
        }
      }
    }
    g.add(inst)
    const mixer = new THREE.AnimationMixer(inst)
    const actions = {}
    for (const clip of spec.loaded.clips) {
      const nm = clip.name.toLowerCase()
      let key = 'swim'
      if (nm.includes('fast')) key = 'fast'
      else if (nm.includes('impulse')) key = 'impulse'
      else if (nm.includes('death')) key = 'death'
      else if (nm.includes('normal')) key = 'swim'
      const a = mixer.clipAction(clip)
      // seules les animations de nage tournent en boucle ; les autres
      // (attaque, mort...) restent disponibles mais muettes
      if (key === 'swim' || key === 'fast') a.play()
      actions[key] = a
    }
    if (actions.swim && actions.fast) actions.fast.setEffectiveWeight(0)
    f.mesh = g
    f.pos = g.position
    f.model = { root: g, inst, mixer, actions, mats, hulls, spec }
    // recopie l'état actuel
    g.position.copy(f.pos)
    this.scene.add(g)
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
    if (f.big) {
      const [lo, hi] = f.deepBand || [3, 17]
      f.target.set(rand(b.xmin + 3, b.xmax - 3), rand(lo, Math.min(hi, b.topY - 1)), rand(b.zmin + 3, b.zmax - 3))
    } else {
      f.target.set(rand(b.xmin + 2, b.xmax - 2), rand(1.2, b.topY - 1), rand(b.zmin + 2, b.zmax - 2))
    }
  }

  // ================= animation des modèles =================
  _animate(dt) {
    for (const f of this.fish) {
      if (!f.model || !f.alive) continue
      const m = f.model.mixer
      // vitesse d'animation liée à la vitesse réelle
      const ts = clamp(0.6 + f.speed / (f.big ? 1.6 : 1.3), 0.55, 2.2)
      const A = f.model.actions
      if (A.swim && A.fast) {
        const targetW = f.fleeing ? 1 : 0
        A.fast.setEffectiveWeight(damp(A.fast.getEffectiveWeight(), targetW, 6, dt))
        A.swim.setEffectiveWeight(1 - A.fast.getEffectiveWeight())
      }
      m.update(dt)
    }
  }

  // ----- simulation hôte -----
  simulate(dt, time, threats) {
    this._animate(dt)
    for (const f of this.fish) {
      if (!f.alive) {
        f.respawnT -= dt
        if (f.respawnT <= 0) this._respawn(f)
        continue
      }
      if (f.holder) continue // porté par un joueur

      // fuite ? (les grands hôtes, imperturbables, ne fuient personne)
      let fleeFrom = null, fleeDist = 1e9
      if (!f.big) {
        for (const t of threats) {
          const d = t.distanceTo(f.pos)
          if (d < CFG.fish.fleeRadius && d < fleeDist) { fleeDist = d; fleeFrom = t }
        }
      }

      const desired = this.tempV
      if (fleeFrom) {
        desired.copy(f.pos).sub(fleeFrom).normalize()
        f.speed = CFG.fish.fleeSpeed
        f.stateTimer = 1.2
        f.fleeing = true
      } else {
        f.fleeing = false
        f.stateTimer -= dt
        if (f.stateTimer <= 0) { this._pickTarget(f); f.stateTimer = rand(2, 5) }
        desired.copy(f.target).sub(f.pos)
        if (desired.lengthSq() < 0.4) { this._pickTarget(f); f.stateTimer = rand(2, 5) }
        desired.normalize()
        f.speed = damp(f.speed, f.big ? rand(1.1, 1.4) : CFG.fish.cruiseSpeed, 2, dt)
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
      f.pos.y = clamp(f.pos.y, f.big ? 2.5 : 0.8, b.topY - (f.big ? 2.2 : 0.8))
      f.mesh.rotation.set(pitch, f.yaw, Math.sin(time * 6 + f.phase) * (f.big ? 0.08 : 0.18))
    }
  }

  _respawn(f) {
    f.alive = true
    f.holder = null
    f.mesh.visible = true
    const b = this.world.bounds
    f.pos.set(rand(b.xmin + 3, b.xmax - 3), rand(f.big ? 6 : 1.5, f.big ? b.topY - 4 : b.topY - 2), rand(b.zmin + 3, b.zmax - 3))
    this._pickTarget(f)
  }

  // ----- capture / repas -----
  findGrab(handPos, maxDist = 0.55) {
    let best = null, bd = maxDist * maxDist
    for (const f of this.fish) {
      if (!f.alive || f.holder || f.big) continue
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
    this._animate(dt)
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

// --- utilitaires ---
const _hsl = { h: 0, s: 0, l: 0 }
