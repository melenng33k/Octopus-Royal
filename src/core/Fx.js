// ============================================================
// Fx — effets visuels : traceurs de balles, impacts, flashs,
// popups de pièces, bulles. Pools simples, zéro allocation GC.
// ============================================================
import * as THREE from 'three'
import { dotTexture, makeTextSprite } from '../utils.js'
import { rand } from '../utils.js'

export class Fx {
  constructor(scene) {
    this.scene = scene
    this.items = []      // { obj, ttl, life, vel, grow, fade }
    this._unitCyl = new THREE.CylinderGeometry(1, 1, 1, 6, 1, true)
    this._plane = new THREE.PlaneGeometry(1, 1)
    this.dot = dotTexture()
  }

  _add(obj, ttl, vel = null, grow = 0, fade = 1) {
    this.scene.add(obj)
    const baseOpacity = obj.material ? obj.material.opacity : 1
    this.items.push({ obj, ttl, life: ttl, vel, grow, fade, baseOpacity })
    return obj
  }

  // ---------- traceur de balle ----------
  tracer(origin, dir, dist, color = 0xfff1a8, thick = 0.02) {
    const mat = new THREE.MeshBasicMaterial({
      color, transparent: true, opacity: 0.95,
      blending: THREE.AdditiveBlending, depthWrite: false
    })
    const m = new THREE.Mesh(this._unitCyl, mat)
    m.position.copy(origin).addScaledVector(dir, dist / 2)
    m.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir)
    m.scale.set(thick, dist, thick)
    this._add(m, 0.09)
  }

  // ---------- flash de bouche ----------
  muzzle(point, scale = 0.3) {
    const mat = new THREE.SpriteMaterial({
      map: this.dot, color: 0xffe08a, transparent: true, opacity: 0.95,
      blending: THREE.AdditiveBlending, depthWrite: false
    })
    const s = new THREE.Sprite(mat)
    s.position.copy(point)
    s.scale.setScalar(scale)
    this._add(s, 0.06, null, 1.5)
  }

  // ---------- éclaboussure d'impact ----------
  impact(point, color = 0xffd27a, n = 6) {
    for (let i = 0; i < n; i++) {
      const mat = new THREE.SpriteMaterial({
        map: this.dot, color, transparent: true, opacity: 0.9, depthWrite: false
      })
      const s = new THREE.Sprite(mat)
      s.position.copy(point)
      s.scale.setScalar(rand(0.06, 0.14))
      const vel = new THREE.Vector3(rand(-1.6, 1.6), rand(0.5, 2.4), rand(-1.6, 1.6))
      this._add(s, rand(0.25, 0.45), vel, -0.4)
    }
  }

  // ---------- bulles depuis un point (jet propulsion, dash...) ----------
  bubbles(point, n = 6, spread = 0.12) {
    for (let i = 0; i < n; i++) {
      const mat = new THREE.SpriteMaterial({
        map: this.dot, color: 0xdff6ff, transparent: true, opacity: 0.65, depthWrite: false
      })
      const s = new THREE.Sprite(mat)
      s.position.copy(point)
      s.position.x += rand(-spread, spread)
      s.position.y += rand(-spread, spread)
      s.position.z += rand(-spread, spread)
      s.scale.setScalar(rand(0.04, 0.12))
      const vel = new THREE.Vector3(rand(-0.3, 0.3), rand(0.6, 1.6), rand(-0.3, 0.3))
      this._add(s, rand(0.6, 1.4), vel, 0.5)
    }
  }

  // ---------- popup "+450 ¢" flottant ----------
  coinPopup(text, pos, color = '#7dff9b') {
    const sprite = makeTextSprite(text, { fontSize: 46, color, bg: 'rgba(6,18,14,0.75)' })
    sprite.position.copy(pos)
    this._add(sprite, 1.6, new THREE.Vector3(0, 0.9, 0), 0.06)
  }

  // ---------- texte flottant générique (annonces) ----------
  popup(text, pos, { color = '#ffffff', size = 60, ttl = 2.4 } = {}) {
    const sprite = makeTextSprite(text, { fontSize: size, color, bg: 'rgba(8,20,26,0.8)' })
    sprite.position.copy(pos)
    this._add(sprite, ttl, new THREE.Vector3(0, 0.35, 0), 0)
    return sprite
  }

  // ---------- burst d'encre (mort, petit nuage) ----------
  inkBurst(point, n = 12) {
    for (let i = 0; i < n; i++) {
      const mat = new THREE.SpriteMaterial({
        map: this.dot, color: 0x1a1420, transparent: true, opacity: 0.85, depthWrite: false
      })
      const s = new THREE.Sprite(mat)
      s.position.copy(point)
      s.scale.setScalar(rand(0.3, 0.7))
      const vel = new THREE.Vector3(rand(-1.4, 1.4), rand(0.2, 1.8), rand(-1.4, 1.4))
      this._add(s, rand(0.8, 1.6), vel, 0.8)
    }
  }

  update(dt) {
    for (let i = this.items.length - 1; i >= 0; i--) {
      const it = this.items[i]
      it.life -= dt
      const k = Math.max(it.life / it.ttl, 0)
      if (it.life <= 0) {
        this.scene.remove(it.obj)
        if (it.obj.material) it.obj.material.dispose()
        this.items.splice(i, 1)
        continue
      }
      if (it.obj.material && it.obj.material.transparent) {
        it.obj.material.opacity = it.baseOpacity * k
      }
      if (it.vel) it.obj.position.addScaledVector(it.vel, dt)
      if (it.grow) it.obj.scale.multiplyScalar(1 + it.grow * dt)
    }
  }
}
