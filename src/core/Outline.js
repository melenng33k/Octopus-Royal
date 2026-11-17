// ============================================================
// Outline — liseré noir façon cartoon (RIM fresnel) — v2 ROBUSTE
// ============================================================
// ANCIENNE TECHNIQUE (inverted hull) : un mesh noir jumeau poussé
// le long des normales, rendu en BackSide. Bugs constatés en VR
// première personne :
//   - caméra à l'intérieur de la coquille (poulpe, tentacules,
//     requin) -> tout l'écran devient noir ;
//   - modèles skinnés à géométrie fine -> débris noirs hachurés ;
//   - tube noir des tentacules recalculé sur CPU à chaque frame.
// NOUVELLE TECHNIQUE : assombrissement fresnel injecté dans le
// fragment shader des matériaux. Les faces vues en angle rasant
// (bord de silhouette) glissent vers le noir, le centre reste
// intact. AUCUNE géométrie ajoutée -> rien ne peut « exploser ».
// Compatible meshes skinnés, morphs, échelles non uniformes,
// matériaux transparents (camouflage) et fog. Coût : ~4
// instructions par fragment, zéro draw call supplémentaire.
// ============================================================
import * as THREE from 'three'
import { CFG } from '../config.js'

// paramètres par défaut (CFG.fx.rim) : str = force du noir,
// lo/hi = seuils d'angle (0 = face caméra, 1 = silhouette),
// color = couleur du liseré.
export function rimDefaults(over = {}) {
  const r = (CFG.fx && CFG.fx.rim) || {}
  return {
    str: over.str ?? r.str ?? 0.9,
    lo: over.lo ?? r.lo ?? 0.5,
    hi: over.hi ?? r.hi ?? 0.92,
    color: over.color ?? r.color ?? 0x05070c
  }
}

const RIM_DEFS = /* glsl */`
uniform float uRimStr;
uniform float uRimLo;
uniform float uRimHi;
uniform vec3  uRimCol;
`

// Points d'ancrage du fragment shader selon les versions de three :
// on écrit le liseré juste avant l'écriture de gl_FragColor (le fog
// et le tone mapping s'appliquent ensuite, comme au reste de la scène).
const RIM_CHUNK = /* glsl */`
  // RIM cartoon : assombrit les angles rasants (silhouette)
  {
    vec3 rimN = normalize(normal);
    vec3 rimV = normalize(vViewPosition);
    float rimD = 1.0 - abs(dot(rimN, rimV));
    float rimF = smoothstep(uRimLo, uRimHi, rimD) * uRimStr;
    outgoingLight = mix(outgoingLight, uRimCol, rimF);
  }
`

// Patche UN matériau avec le liseré fresnel (idempotent).
// Fonctionne sur les matériaux éclairés (standard/physical/lambert/
// phong) qui exposent `normal` et `vViewPosition` en fragment.
// Les ShaderMaterial (ciel, surface d'eau) et sprites sont ignorés.
export function applyRimMaterial(mat, over = {}) {
  if (!mat || mat.isShaderMaterial || mat.userData.__rim) return mat
  if (mat.isSpriteMaterial || mat.isLineBasicMaterial || mat.isPointsMaterial) return mat
  // types supportés : le fragment doit avoir `normal` + `vViewPosition`
  const lit = mat.isMeshStandardMaterial || mat.isMeshPhysicalMaterial ||
              mat.isMeshLambertMaterial || mat.isMeshPhongMaterial
  if (!lit) return mat

  const { str, lo, hi, color } = rimDefaults(over)
  mat.userData.__rim = { str, lo, hi, color }

  const uniforms = {
    uRimStr: { value: str },
    uRimLo: { value: lo },
    uRimHi: { value: hi },
    uRimCol: { value: new THREE.Color(color) }
  }

  const prev = mat.onBeforeCompile
  mat.onBeforeCompile = (shader, renderer) => {
    if (prev) prev(shader, renderer)
    if (!shader.fragmentShader.includes('vViewPosition')) return // sécurité
    Object.assign(shader.uniforms, uniforms)
    shader.fragmentShader = shader.fragmentShader
      .replace('#include <common>', '#include <common>\n' + RIM_DEFS)
    const anchor = shader.fragmentShader.includes('#include <opaque_fragment>')
      ? '#include <opaque_fragment>'
      : '#include <output_fragment>'
    shader.fragmentShader = shader.fragmentShader
      .replace(anchor, RIM_CHUNK + '\n' + anchor)
  }
  // clé de cache : des valeurs différentes -> programmes séparés
  // (les uniforms restent par matériau, donc aucune fuite d'état)
  const prevKeyFn = mat.customProgramCacheKey
  mat.customProgramCacheKey = () => {
    const base = prevKeyFn ? prevKeyFn.call(mat) : (mat.type || 'lit')
    return `${base}|rim_${str}_${lo}_${hi}_${color}`
  }
  return mat
}

/**
 * Applique le liseré noir à tous les matériaux d'un sous-arbre.
 * opts : { str, lo, hi, color, skip = fn(mesh)->bool }
 * Retourne la liste des matériaux patchés (dédupliqués).
 */
export function addOutline(root, { skip = null, ...over } = {}) {
  if (!CFG.fx || !CFG.fx.outlines) return []
  const mats = new Set()
  root.traverse((o) => {
    if (!o.isMesh || o.userData.isOutline) return
    if (o.material && o.material.isSpriteMaterial) return
    if (skip && skip(o)) return
    if (o.material) mats.add(o.material)
  })
  const patched = []
  for (const m of mats) {
    if (m.userData.__rim) { patched.push(m); continue }
    applyRimMaterial(m, over)
    patched.push(m)
  }
  return patched
}
