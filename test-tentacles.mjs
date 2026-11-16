// Test anti-explosion des tentacules : reproduit le bug des PNJ
// (cible plus loin que la portée de la chaîne -> Verlet explosait vers l'infini)
import * as THREE from 'three'
import { Tentacle } from './src/core/Tentacle.js'
import { CFG } from './src/config.js'

let failures = 0
const check = (label, ok, detail = '') => {
  console.log((ok ? '  OK  ' : ' FAIL ') + label + (detail ? ' — ' + detail : ''))
  if (!ok) failures++
}

const maxDistFromRoot = (t) => {
  const r = t.pts[0]
  let m = 0
  for (const p of t.pts) {
    const d = Math.hypot(p.x - r.x, p.y - r.y, p.z - r.z)
    if (d > m) m = d
  }
  return m
}

// --- Test 1 : scénario PNJ "lunge" — cible à 5.4 m, chaîne de 1.55 m (adaptive)
{
  const T = CFG.tent
  const t = new Tentacle({ n: T.npcN, segLen: T.npcSegLen, stiffness: 0.07, adaptive: true })
  const root = new THREE.Vector3(10, 3, -5)
  t.setRoot(root)
  const farTarget = new THREE.Vector3(12, 6, -9) // ~5.4 m de la racine
  let exploded = false
  for (let f = 0; f < 900; f++) {
    t.setTip(farTarget)
    t.update(1 / 60, f / 60, null, false)
    if (!isFinite(maxDistFromRoot(t))) { exploded = true; break }
  }
  const m = maxDistFromRoot(t)
  check('PNJ lunge 5m : pas d explosion NaN', !exploded)
  check('PNJ lunge 5m : points bornes', m < (T.npcN - 1) * T.npcSegLen * T.adaptiveMax * 1.25,
    `max=${m.toFixed(2)}m attendu <${((T.npcN - 1) * T.npcSegLen * T.adaptiveMax * 1.25).toFixed(2)}m`)
}

// --- Test 2 : ancien scénario bugué — chaîne NON-adaptive avec cible hors de portée
{
  const T = CFG.tent
  const t = new Tentacle({ n: T.n, segLen: T.segLen, stiffness: 0.075, adaptive: false })
  t.setRoot(new THREE.Vector3(0, 5, 0))
  const farTarget = new THREE.Vector3(0, 5, -6) // 6 m > chaîne 2.73 m
  let exploded = false
  for (let f = 0; f < 900; f++) {
    t.setTip(farTarget)
    t.update(1 / 60, f / 60, null, false)
    const m = maxDistFromRoot(t)
    if (!isFinite(m) || m > 10) { exploded = true; break }
  }
  check('Desktop cible hors portee : borne par le clamp du bout', !exploded,
    `max=${maxDistFromRoot(t).toFixed(2)}m`)
}

// --- Test 3 : injection de NaN -> la chaîne se réinitialise au lieu de rester cassée
{
  const t = new Tentacle({ n: 11, segLen: 0.145, adaptive: true })
  t.setRoot(new THREE.Vector3(0, 4, 0))
  t.setTip(new THREE.Vector3(1, 3, 0))
  t.update(1 / 60, 0, null, false)
  t.pts[3].x = NaN // corruption volontaire
  for (let f = 0; f < 30; f++) {
    t.update(1 / 60, f / 60, null, false)
    t.setTip(new THREE.Vector3(1, 3, 0))
  }
  const allFinite = t.pts.every(p => isFinite(p.x + p.y + p.z))
  check('NaN injecte : chaine reinitialisee', allFinite)
}

// --- Test 4 : suivi de main VR — le bout doit rester proche de la main
{
  const T = CFG.tent
  const t = new Tentacle({ n: T.vrN, segLen: T.vrSegLen, adaptive: true, stiffness: 0.075 })
  const root = new THREE.Vector3(0, 1.5, 0)
  t.setRoot(root)
  // la main décrit un cercle de 0.7 m de rayon autour du corps
  let errSum = 0, errN = 0
  const hand = new THREE.Vector3()
  const tip = new THREE.Vector3()
  for (let f = 0; f < 600; f++) {
    const time = f / 60
    hand.set(
      root.x + Math.sin(time * 2.5) * 0.7 + 0.25,
      root.y + Math.cos(time * 1.7) * 0.3,
      root.z + Math.cos(time * 2.5) * 0.7 - 0.25
    )
    t.setTip(hand)
    t.update(1 / 60, time, null, false)
    if (f > 120) { // après stabilisation
      t.getTip(tip)
      errSum += tip.distanceTo(hand); errN++
    }
  }
  const errMoy = errSum / errN
  check('VR suivi de main : erreur moyenne < 0.35m', errMoy < 0.35, `erreur=${errMoy.toFixed(3)}m`)
}

// --- Test 5 : repos VR (main collée au corps, immobile) -> pend et reste sagement
{
  const T = CFG.tent
  const t = new Tentacle({ n: T.vrN, segLen: T.vrSegLen, adaptive: true })
  t.setRoot(new THREE.Vector3(0, 1.5, 0))
  t.clearTip()
  for (let f = 0; f < 600; f++) t.update(1 / 60, f / 60, null, false)
  const len = maxDistFromRoot(t)
  const expected = (T.vrN - 1) * T.vrSegLen
  check('Repos : pend sous la racine (~longueur chaine)', Math.abs(len - expected) < 0.35,
    `longueur=${len.toFixed(2)}m attendu~${expected.toFixed(2)}m`)
}

// --- Test 6 : racine téléportée (respawn) -> la chaîne suit sans exploser
{
  const t = new Tentacle({ n: 11, segLen: 0.155, adaptive: true })
  t.setRoot(new THREE.Vector3(0, 4, 0))
  for (let f = 0; f < 120; f++) { t.setTip(new THREE.Vector3(0.5, 3.5, 0)); t.update(1 / 60, f / 60, null, false) }
  t.setRoot(new THREE.Vector3(30, 2, -20)) // téléportation brutale
  let ok = true
  for (let f = 0; f < 600; f++) {
    t.setTip(new THREE.Vector3(30.5, 1.5, -20))
    t.update(1 / 60, f / 60, null, false)
    const m = maxDistFromRoot(t)
    if (!isFinite(m) || m > 4) { ok = false; break }
  }
  check('Teleportation racine : stable', ok, `max=${maxDistFromRoot(t).toFixed(2)}m`)
}

// --- Test 7 : reshape bureau <-> casque
{
  const T = CFG.tent
  const t = new Tentacle({ n: T.n, segLen: T.segLen, adaptive: false })
  t.setRoot(new THREE.Vector3(0, 4, 0))
  t.setTip(new THREE.Vector3(1, 3, 0))
  t.update(1 / 60, 0, null, false)
  t.reshape(T.vrN, T.vrSegLen, true)
  const okGeom = t.mesh.geometry.attributes.position.count === T.vrN * 8
  t.setRoot(new THREE.Vector3(0, 4, 0))
  t.setTip(new THREE.Vector3(0.5, 3.5, 0))
  let ok = okGeom
  for (let f = 0; f < 300; f++) {
    t.update(1 / 60, f / 60, null, false)
    const m = maxDistFromRoot(t)
    if (!isFinite(m) || m > 3) { ok = false; break }
  }
  check('reshape casque : geometrie + simulation stables', ok,
    `verts=${t.mesh.geometry.attributes.position.count}`)
}

console.log('')
if (failures) { console.log(`${failures} test(s) en échec`); process.exit(1) }
console.log('Tous les tests tentacules passent.')
