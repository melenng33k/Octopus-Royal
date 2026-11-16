// ============================================================
// OctoModel — le modèle de poulpe 3D (octo.glb) partagé par
// TOUS les poulpes : joueur local, joueurs distants et vois IA.
// - charge une seule fois, puis clones (squelette inclus)
// - teinte par poulpe (orange / vert / violet), flash rouge,
//   camouflage (opacité)
// - joue automatiquement l'animation de nage (boucle 5 s)
// - contour noir cartoon (hull skinné partageant le squelette)
// Le modèle regarde -Z : nos corps utilisent -Z comme avant.
// ============================================================
import * as THREE from 'three'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { clone as skeletonClone } from 'three/addons/utils/SkeletonUtils.js'
import octoUrl from '../assets/octo.glb?url'
import { CFG } from '../config.js'
import { outlineMaterial, computeHullWidth } from './Outline.js'

// état partagé (une seule charge pour toute l'appli)
const shared = {
  promise: null,
  scene: null,
  clip: null,
  scale: 0.3,      // modèle brut ~2.5 u de haut -> ~0.75 m par poulpe
  baseColor: null  // couleur d'origine du matériau (pour la teinte)
}

function load() {
  if (!shared.promise) {
    shared.promise = new Promise((resolve, reject) => {
      new GLTFLoader().load(octoUrl, (gltf) => {
        shared.scene = gltf.scene
        // l'animation la plus riche = celle des os (nage)
        shared.clip = gltf.animations.slice().sort((a, b) => b.tracks.length - a.tracks.length)[0] || null
        // couleur de base du matériau (gris clair) -> teinte multipliée
        gltf.scene.traverse(o => {
          if (o.isMesh && o.material) shared.baseColor = o.material.color.clone()
        })
        resolve(shared)
      }, undefined, (e) => reject(new Error('Chargement octo.glb impossible : ' + e)))
    })
  }
  return shared.promise
}

/**
 * Crée un clone de poulpe prêt à l'emploi.
 * tint : couleur hexadécimale du corps.
 * Retour : { root, mixer, mats, setTint, flash, setOpacity, update, ready }
 *   - root : THREE.Group à ajouter au parent (déjà mis à l'échelle de base)
 *   - update(dt) : à appeler chaque frame (anime la nage)
 */
export function createOcto(tint = 0xe8642c) {
  const api = {
    root: null,
    mixer: null,
    mats: [],
    outlineHulls: [],
    ready: false,
    _tint: new THREE.Color(tint),
    _flash: 0
  }

  api._applyColor = () => {
    const red = api._flash > 0
    for (const m of api.mats) {
      m.color.copy(shared.baseColor || new THREE.Color(0xffffff))
      m.color.multiply(red ? new THREE.Color(0xff3c22) : api._tint)
    }
  }

  api.flash = (t = 0.15) => { api._flash = t; api._applyColor() }
  api.setTint = (hex) => { api._tint.set(hex); api._applyColor() }
  api.setOpacity = (o) => {
    const transparent = o < 1
    for (const m of api.mats) {
      m.transparent = transparent
      m.opacity = o
      m.depthWrite = !transparent
    }
    // le contour suit (et disparaît au camouflage)
    for (const h of api.outlineHulls) {
      h.material.transparent = true
      h.material.opacity = o
      h.visible = o > 0.5
    }
  }

  api.update = (dt) => {
    if (api._flash > 0) {
      api._flash -= dt
      if (api._flash <= 0) api._flash = 0
      api._applyColor()
    }
    if (api.mixer && api.ready) api.mixer.update(dt)
  }

  load().then(() => {
    const inst = skeletonClone(shared.scene)
    inst.scale.setScalar(shared.scale)
    // collecter d'abord (les hulls ajoutés pendant traverse créeraient une récursion)
    const skinMeshes = []
    inst.traverse(o => { if (o.isMesh && o.material) skinMeshes.push(o) })
    for (const o of skinMeshes) {
      o.material = o.material.clone()
      o.material.transparent = true
      o.material.depthWrite = true
      o.material.roughness = 0.62
      o.material.envMapIntensity = 0.4
      o.frustumCulled = false // squelette animé : bbox peu fiable
      api.mats.push(o.material)
      // contour noir : coquille skinnée qui partage géométrie + squelette
      if (CFG.fx.outlines) {
        const w = computeHullWidth(o.geometry, CFG.fx.outlineWidth.octo)
        if (w > 0) {
          const hull = new THREE.SkinnedMesh(o.geometry, outlineMaterial(w))
          hull.skeleton = o.skeleton
          hull.bindMatrix.copy(o.bindMatrix)
          hull.bindMatrixInverse.copy(o.bindMatrixInverse)
          if (o.bindMode) hull.bindMode = o.bindMode
          hull.frustumCulled = false
          hull.renderOrder = -1
          hull.userData.isOutline = true
          o.add(hull)
          api.outlineHulls.push(hull)
        }
      }
    }
    api.root = inst
    api.ready = true
    if (shared.clip) {
      api.mixer = new THREE.AnimationMixer(inst)
      api.mixer.clipAction(shared.clip).play()
    }
    api._applyColor()
  }).catch(err => console.error(err.message))

  return api
}
