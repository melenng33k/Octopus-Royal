// ============================================================
// Weapons — modèles d'armes 100% procéduraux (cartoon low-poly)
// Glock < Uzi < Sniper < Mitrailleuse. Tir géré dans Player.js
// Contour noir cartoon sur chaque arme.
// ============================================================
import * as THREE from 'three'
import { WEAPON_BY_ID } from '../config.js'
import { CFG } from '../config.js'
import { addOutline } from '../core/Outline.js'

const metal = (c) => new THREE.MeshStandardMaterial({ color: c, roughness: 0.45, metalness: 0.55 })
const grip = (c) => new THREE.MeshStandardMaterial({ color: c, roughness: 0.85, metalness: 0.05 })

const MATS = {
  dark: metal(0x2b3138),
  steel: metal(0x4a555e),
  wood: grip(0x6b4a2f),
  tan: grip(0x8a7a5c),
  olive: grip(0x55603a),
  black: grip(0x171a1e),
  orange: grip(0xe8642c)
}

// boîte simple centrée sur (x,y,z)
function box(w, h, d, x, y, z, mat) {
  const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat)
  m.position.set(x, y, z)
  return m
}
function cyl(r, len, x, y, z, mat, axis = 'z') {
  const m = new THREE.Mesh(new THREE.CylinderGeometry(r, r, len, 10), mat)
  if (axis === 'z') m.rotation.x = Math.PI / 2
  else if (axis === 'x') m.rotation.z = Math.PI / 2
  m.position.set(x, y, z)
  return m
}

const BUILDERS = {
  glock() {
    const g = new THREE.Group()
    g.add(box(0.05, 0.09, 0.24, 0, 0.02, -0.06, MATS.dark))          // culasse
    g.add(box(0.044, 0.05, 0.2, 0, -0.02, -0.04, MATS.tan))          // carcasse
    const poignee = box(0.045, 0.13, 0.06, 0, -0.09, 0.04, MATS.black)
    poignee.rotation.x = 0.18
    g.add(poignee)
    g.userData.muzzle = new THREE.Vector3(0, 0.02, -0.2)
    return g
  },
  uzi() {
    const g = new THREE.Group()
    g.add(box(0.06, 0.09, 0.3, 0, 0.02, -0.08, MATS.dark))
    g.add(box(0.05, 0.05, 0.22, 0, -0.025, -0.06, MATS.wood))
    g.add(box(0.05, 0.16, 0.05, 0, -0.1, 0.02, MATS.black))          // chargeur
    g.add(cyl(0.018, 0.14, 0, 0.02, -0.28, MATS.steel))
    g.userData.muzzle = new THREE.Vector3(0, 0.02, -0.36)
    return g
  },
  sniper() {
    const g = new THREE.Group()
    g.add(box(0.05, 0.07, 0.6, 0, 0.02, -0.16, MATS.olive))          // canon long
    g.add(cyl(0.02, 0.2, 0, 0.02, -0.52, MATS.steel))
    const scope = cyl(0.035, 0.16, 0, 0.09, -0.1, MATS.black)
    g.add(scope)
    g.add(box(0.045, 0.12, 0.07, 0, -0.07, 0.06, MATS.wood))
    g.userData.muzzle = new THREE.Vector3(0, 0.02, -0.62)
    return g
  },
  minigun() {
    const g = new THREE.Group()
    g.add(cyl(0.07, 0.16, 0, 0, 0.0, MATS.dark, 'z'))
    g.add(box(0.09, 0.09, 0.2, 0, 0, -0.18, MATS.steel))
    for (let i = 0; i < 6; i++) {
      const a = (i / 6) * Math.PI * 2
      g.add(cyl(0.016, 0.3, Math.cos(a) * 0.035, Math.sin(a) * 0.035, -0.4, MATS.black, 'z'))
    }
    g.add(box(0.05, 0.12, 0.05, 0, -0.09, 0.05, MATS.orange))
    g.userData.muzzle = new THREE.Vector3(0, 0, -0.56)
    return g
  }
}

const cache = new Map()

export function buildGunMesh(id) {
  if (cache.has(id)) {
    const proto = cache.get(id)
    return proto.clone(true)
  }
  const g = BUILDERS[id]()
  if (CFG.fx.outlines) addOutline(g, { width: CFG.fx.outlineWidth.gun })
  cache.set(id, g)
  return g.clone(true)
}

export function gunMuzzle(id) {
  return WEAPON_BY_ID[id] && cache.get(id) ? cache.get(id).userData.muzzle : new THREE.Vector3(0, 0, -0.2)
}

// crée une fois les prototypes pour que gunMuzzle fonctionne
export function initWeaponProtos() {
  for (const w of ['glock', 'uzi', 'sniper', 'minigun']) buildGunMesh(w)
}

export function weaponIndex(id) {
  return WEAPON_BY_ID[id] ? WEAPON_BY_ID[id] : null
}
