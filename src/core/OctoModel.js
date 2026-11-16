// ============================================================
// OctoModel — le modèle de poulpe 3D (octo.glb) partagé par
// TOUS les poulpes : joueur local, joueurs distants et vois IA.
// - charge une seule fois, puis clones (squelette inclus)
// - teinte par poulpe (orange / vert / violet), flash rouge,
//   camouflage (opacité)
// - joue automatiquement l'animation de nage (boucle 5 s)
// Le modèle regarde -Z : nos corps utilisent -Z comme avant.
// ============================================================
import * as THREE from 'three'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { clone as skeletonClone } from 'three/addons/utils/SkeletonUtils.js'
import octoUrl from '../assets/octo.glb?url'

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
    inst.traverse(o => {
      if (o.isMesh && o.material) {
        o.material = o.material.clone()
        o.material.transparent = true
        o.material.depthWrite = true
        o.frustumCulled = false // squelette animé : bbox peu fiable
        api.mats.push(o.material)
      }
    })
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
