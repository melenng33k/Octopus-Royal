// ============================================================
// Outline — contour noir façon cartoon (inverted hull)
// Un second mesh (matériau noir, BackSide) partage la géométrie :
// les sommets sont poussés le long de la normale (espace objet),
// ce qui dessine un liseré noir fin autour du modèle.
// Compatible meshes skinnés (même squelette partagé) et statiques.
// ============================================================
import * as THREE from 'three'

const outlineMats = new Map()

// matériau contour partagé (par largeur) — exporté pour les skinnés
export function outlineMaterial(width) {
  const key = Math.round(width * 10000)
  if (outlineMats.has(key)) return outlineMats.get(key)
  const mat = new THREE.MeshBasicMaterial({
    color: 0x05070a,
    side: THREE.BackSide,
    fog: false,
    toneMapped: false
  })
  mat.userData.outlineWidth = width
  mat.onBeforeCompile = (shader) => {
    shader.uniforms.uOutlineW = { value: width }
    // MeshBasicMaterial ne définit objectNormal que si USE_SKINNING/USE_ENVMAP :
    // on pousse le long de la normale skinnée si disponible, sinon l'attribut normal.
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', `#include <common>\nuniform float uOutlineW;`)
      .replace('#include <begin_vertex>', `#include <begin_vertex>
        #ifdef USE_SKINNING
          transformed += objectNormal * uOutlineW;
        #else
          transformed += normal * uOutlineW;
        #endif`)
  }
  mat.customProgramCacheKey = () => 'outline' + key
  outlineMats.set(key, mat)
  return mat
}

// Crée la coquille outline d'un mesh (statique OU skinné) et l'ajoute
// comme enfant du mesh source (hérite de la transformation).
// La poussée est bornée à 8% du rayon de la géométrie : certains GLB
// skinnés contiennent des micro-maillages (nageoires) sur un grand
// squelette — une poussée absolue les ferait exploser.
function hullFor(mesh, width) {
  // garde-fou : géométrie dégénérée (helpers exportés dans certains GLB,
  // ex. Group_2 de l'épave Kenney, boundingSphere ~1e36) -> pas de contour
  if (mesh.geometry) {
    width = computeHullWidth(mesh.geometry, width)
    if (width <= 0) return null
  }
  const mat = outlineMaterial(width)
  let hull
  if (mesh.isSkinnedMesh) {
    hull = new THREE.SkinnedMesh(mesh.geometry, mat)
    hull.skeleton = mesh.skeleton
    hull.bindMatrix.copy(mesh.bindMatrix)
    hull.bindMatrixInverse.copy(mesh.bindMatrixInverse)
    if (mesh.bindMode) hull.bindMode = mesh.bindMode
    hull.frustumCulled = false
    hull.name = mesh.name + '_outline'
  } else {
    hull = new THREE.Mesh(mesh.geometry, mat)
    hull.name = (mesh.name || 'mesh') + '_outline'
  }
  hull.renderOrder = (mesh.renderOrder || 0) - 1
  mesh.add(hull)
  return hull
}

// Largeur de poussée pour une géométrie donnée : bornée à 8% de son rayon
// (micro-maillages skinnés) et quantisée (limite les programmes GLSL).
export function computeHullWidth(geometry, width) {
  if (!geometry) return width
  if (!geometry.boundingSphere) geometry.computeBoundingSphere()
  const r = geometry.boundingSphere ? geometry.boundingSphere.radius : 0
  if (!isFinite(r) || r > 500) return 0 // géométrie dégénérée : pas de contour
  const w = Math.max(0.0015, Math.min(width, r * 0.08))
  return Math.round(w * 1000) / 1000
}

/**
 * Ajoute un contour noir fin à tous les meshes d'un sous-arbre.
 * opts : { width = 0.02, skip = fn(mesh)->bool, scaleWithObject = false }
 * Retourne la liste des coquilles créées.
 */
export function addOutline(root, { width = 0.02, skip = null } = {}) {
  // 1) collecter d'abord (on ne peut pas ajouter d'enfants pendant traverse :
  //    le nouveau mesh serait visité et créerait une récursion infinie)
  const meshes = []
  root.traverse((o) => {
    if (!o.isMesh || o.userData.isOutline) return
    if (skip && skip(o)) return
    // pas de contour sur les sprites / plans UI
    if (o.material && o.material.isSpriteMaterial) return
    meshes.push(o)
  })
  // 2) puis créer les coquilles
  const created = []
  for (const m of meshes) {
    const h = hullFor(m, width)
    if (h) created.push(h)
  }
  return created
}
