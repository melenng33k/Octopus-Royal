// Petites utilitaires partagées
import * as THREE from 'three'

export const rand = (a, b) => a + Math.random() * (b - a)
export const randi = (a, b) => Math.floor(rand(a, b + 1))
export const clamp = (v, a, b) => Math.max(a, Math.min(b, v))
export const lerp = (a, b, t) => a + (b - a) * t
// amortissement exponentiel indépendant du framerate
export const damp = (cur, target, lambda, dt) => lerp(cur, target, 1 - Math.exp(-lambda * dt))

const NAMES1 = ['Kraken', 'Calmar', 'Pieuvre', 'Bloup', 'Tako', 'Inko', 'Poulpi', 'Marlin', 'Requin', 'Corail', 'Bulles', 'Choco']
const NAMES2 = ['Jr', 'Le Fugitif', 'Le Voyou', 'Malin', 'Furax', 'Titan', 'Mini', 'Fantome', 'Champion', 'Le Peintre']

export function randomName() {
  return NAMES1[randi(0, NAMES1.length - 1)] + '_' + NAMES2[randi(0, NAMES2.length - 1)]
}

export function sanitizeName(s, fallback) {
  const clean = (s || '').replace(/[^\p{L}\p{N}_-]/gu, '').slice(0, 14).trim()
  return clean || fallback
}

export const fmtMoney = (n) => Math.round(n).toLocaleString('fr-FR') + ' ¢'

// ----- Sauvegarde locale (argent, poissons, armes possédées) -----
export function loadSave(key) {
  try { return JSON.parse(localStorage.getItem(key) || 'null') } catch { return null }
}
export function saveGame(key, data) {
  try { localStorage.setItem(key, JSON.stringify(data)) } catch { /* mode privé */ }
}

// Canvas -> texture (pour panneaux / étiquettes)
export function canvasTexture(w, h) {
  const canvas = document.createElement('canvas')
  canvas.width = w; canvas.height = h
  const ctx = canvas.getContext('2d')
  const tex = new THREE.CanvasTexture(canvas)
  tex.colorSpace = THREE.SRGBColorSpace
  tex.anisotropy = 4
  return { canvas, ctx, tex }
}

// Sprite de texte flottant (étiquette de nom, "+450 ¢", etc.)
export function makeTextSprite(text, { fontSize = 42, color = '#ffffff', bg = 'rgba(8,20,26,0.72)', pad = 18 } = {}) {
  const probe = canvasTexture(64, 64)
  const pc = probe.ctx
  pc.font = `bold ${fontSize}px system-ui, sans-serif`
  const lines = Array.isArray(text) ? text : [text]
  let wmax = 0
  for (const l of lines) wmax = Math.max(wmax, pc.measureText(l).width)
  const W = Math.min(1024, Math.ceil(wmax) + pad * 2)
  const H = lines.length * (fontSize * 1.25) + pad * 2
  const { canvas, ctx, tex } = canvasTexture(W, H)
  ctx.font = `bold ${fontSize}px system-ui, sans-serif`
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle'
  if (bg) {
    ctx.fillStyle = bg
    const r = 16
    ctx.beginPath(); ctx.roundRect(0, 0, W, H, r); ctx.fill()
  }
  lines.forEach((l, i) => {
    ctx.fillStyle = Array.isArray(color) ? color[i] : color
    ctx.fillText(l, W / 2, pad + fontSize * 0.62 + i * fontSize * 1.25, W - pad * 2)
  })
  tex.needsUpdate = true
  const mat = new THREE.SpriteMaterial({ map: tex, transparent: true, depthWrite: false })
  const sprite = new THREE.Sprite(mat)
  const scale = 0.0016
  sprite.scale.set(W * scale, H * scale, 1)
  return sprite
}

// Disque doux pour particules (bulles, encre...)
let _dotTex = null
export function dotTexture() {
  if (_dotTex) return _dotTex
  const { canvas, ctx, tex } = canvasTexture(64, 64)
  const g = ctx.createRadialGradient(32, 32, 2, 32, 32, 30)
  g.addColorStop(0, 'rgba(255,255,255,1)')
  g.addColorStop(0.7, 'rgba(255,255,255,0.5)')
  g.addColorStop(1, 'rgba(255,255,255,0)')
  ctx.fillStyle = g
  ctx.beginPath(); ctx.arc(32, 32, 30, 0, Math.PI * 2); ctx.fill()
  _dotTex = tex
  return tex
}
