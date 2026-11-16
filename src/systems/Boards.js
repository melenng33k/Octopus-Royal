// ============================================================
// Boards — les panneaux du commissariat (menu VR) :
//  - AVIS DE RECHERCHE : 3 affiches de primes (joueurs ou vois IA)
//  - ARMURERIE : achat des armes avec l'argent des primes
//  - TON POULPE : stats, capacités débloquées
// Visée + gâchette pour cliquer. Texte dessiné sur canvas.
// ============================================================
import * as THREE from 'three'
import { CFG, WEAPON_BY_ID } from '../config.js'
import { canvasTexture, fmtMoney } from '../utils.js'

const INK = '#22333b'
const PAPER = '#f3ead8'
const RED = '#c8442e'
const GREEN = '#2e7d4f'

class Board {
  constructor(w, h, ppm = 260) {
    this.wMeters = w
    this.hMeters = h
    const pxW = Math.round(w * ppm), pxH = Math.round(h * ppm)
    const { canvas, ctx, tex } = canvasTexture(pxW, pxH)
    this.canvas = canvas; this.ctx = ctx; this.tex = tex
    this.W = pxW; this.H = pxH
    this.buttons = []
    this.mesh = new THREE.Mesh(
      new THREE.PlaneGeometry(w, h),
      new THREE.MeshBasicMaterial({ map: tex, toneMapped: false })
    )
    this.mesh.userData.board = this
  }

  draw(fn) {
    const ctx = this.ctx
    ctx.setTransform(1, 0, 0, 1, 0, 0)
    ctx.fillStyle = PAPER
    ctx.fillRect(0, 0, this.W, this.H)
    this.buttons = []
    fn(ctx, this.W, this.H)
    this.tex.needsUpdate = true
  }

  button(x, y, w, h, label, cb, color = GREEN) {
    const ctx = this.ctx
    ctx.fillStyle = color
    ctx.beginPath(); ctx.roundRect(x, y, w, h, 10); ctx.fill()
    ctx.fillStyle = '#fff'
    ctx.font = 'bold 26px system-ui, sans-serif'
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle'
    ctx.fillText(label, x + w / 2, y + h / 2)
    this.buttons.push({ x, y, w, h, cb })
  }

  click(px, py) {
    for (const b of this.buttons) {
      if (px >= b.x && px <= b.x + b.w && py >= b.y && py <= b.y + b.h) {
        b.cb()
        return true
      }
    }
    return false
  }
}

export class Boards {
  constructor(scene, world, game) {
    this.scene = scene
    this.game = game
    this.cursor = new THREE.Mesh(
      new THREE.SphereGeometry(0.02, 8, 8),
      new THREE.MeshBasicMaterial({ color: 0x7dffb0 })
    )
    this.cursor.visible = false
    scene.add(this.cursor)

    // ----- Commissariat : 3 avis de recherche -----
    this.police = new Board(3.6, 2.2)
    this.police.mesh.position.copy(world.policeAnchor.pos)
    this.police.mesh.rotation.y = world.policeAnchor.rotY
    scene.add(this.police.mesh)

    // ----- Armurerie -----
    this.shop = new Board(2.6, 2.4)
    this.shop.mesh.position.copy(world.shopAnchor.pos)
    this.shop.mesh.rotation.y = world.shopAnchor.rotY
    scene.add(this.shop.mesh)

    // ----- Stats -----
    this.stats = new Board(2.4, 1.9)
    this.stats.mesh.position.copy(world.statsAnchor.pos)
    this.stats.mesh.rotation.y = world.statsAnchor.rotY
    scene.add(this.stats.mesh)

    this._all = [this.police, this.shop, this.stats]
    this._hit = new THREE.Raycaster()
    this.dirty = true
    this.redrawAll()
  }

  markDirty() { this.dirty = true }

  redrawAll() {
    this._drawPolice()
    this._drawShop()
    this._drawStats()
    this.dirty = false
  }

  // ================= AVIS DE RECHERCHE =================
  _drawPolice() {
    const b = this.police
    b.draw((ctx, W, H) => {
      ctx.fillStyle = '#2b3a42'
      ctx.fillRect(0, 0, W, H * 0.13)
      ctx.fillStyle = '#ffd166'
      ctx.font = 'bold 42px system-ui, sans-serif'
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle'
      ctx.fillText('AVIS DE RECHERCHE — COMMISSARIAT DU BASSIN', W / 2, H * 0.068)

      const list = this.game.bounties
      const pw = W / 3
      list.forEach((bt, i) => {
        const x = pw * i + pw / 2
        this._poster(ctx, x, H * 0.18, pw * 0.86, H * 0.74, bt, i)
      })
      if (!list.length) {
        ctx.fillStyle = '#8899a0'
        ctx.font = '28px system-ui, sans-serif'
        ctx.fillText('Aucune prime pour le moment...', W / 2, H / 2)
      }
    })
  }

  _poster(ctx, cx, top, w, h, bt, idx) {
    // cadre affiche
    ctx.fillStyle = '#e9dcc0'
    ctx.beginPath(); ctx.roundRect(cx - w / 2, top, w, h, 8); ctx.fill()
    ctx.strokeStyle = '#b8a888'; ctx.lineWidth = 3
    ctx.strokeRect(cx - w / 2, top, w, h)
    // punaise
    ctx.fillStyle = RED
    ctx.beginPath(); ctx.arc(cx, top + 14, 8, 0, Math.PI * 2); ctx.fill()

    ctx.fillStyle = INK
    ctx.font = 'bold 24px system-ui, sans-serif'
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle'
    ctx.fillText('AVIS DE RECHERCHE', cx, top + 42)

    // portrait de poulpe (taille selon niveau)
    const cy = top + h * 0.4
    const s = 0.6 + Math.min((bt.level || 1) * 0.12, 1.1)
    this._octopusPortrait(ctx, cx, cy, 34 * s, bt.npc ? '#8a3d6e' : '#3f8f6a')

    ctx.fillStyle = INK
    ctx.font = 'bold 27px system-ui, sans-serif'
    ctx.fillText(bt.name, cx, top + h * 0.66)
    ctx.font = '22px system-ui, sans-serif'
    ctx.fillText('TAILLE : Niv ' + (bt.level || 1) + (bt.npc ? '  (VOYOU)' : '  (JOUEUR)'), cx, top + h * 0.74)
    ctx.font = 'bold 30px system-ui, sans-serif'
    ctx.fillStyle = RED
    ctx.fillText('PRIME : ' + bt.reward + ' ¢', cx, top + h * 0.83)

    if (bt.status === 'done') {
      ctx.fillStyle = 'rgba(46,125,79,0.85)'
      ctx.save()
      ctx.translate(cx, top + h / 2)
      ctx.rotate(-0.3)
      ctx.font = 'bold 52px system-ui, sans-serif'
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle'
      ctx.fillText('LIQUIDÉ', 0, 0)
      ctx.restore()
    } else if (bt.status === 'gone') {
      ctx.fillStyle = 'rgba(120,110,90,0.85)'
      ctx.font = 'bold 34px system-ui, sans-serif'
      ctx.fillText('PARTI SE CACHER', cx, top + h / 2)
    }
    // bouton : cliquer pour suivre la cible
    this.police.button(cx - w / 2 + 8, top + h - 40, w - 16, 34, bt.hint || 'VISER POUR TRACKER', () => {
      this.game.trackBounty(idx)
    }, '#3a5a68')
  }

  _octopusPortrait(ctx, x, y, r, color) {
    ctx.save()
    ctx.fillStyle = color
    ctx.beginPath(); ctx.ellipse(x, y, r, r * 0.9, 0, 0, Math.PI * 2); ctx.fill()
    // tentacules
    ctx.strokeStyle = color; ctx.lineWidth = r * 0.22; ctx.lineCap = 'round'
    for (let i = 0; i < 4; i++) {
      const a = Math.PI * (0.25 + i * 0.17)
      ctx.beginPath()
      ctx.moveTo(x + Math.cos(a) * r * 0.5, y + Math.sin(a) * r * 0.4)
      ctx.quadraticCurveTo(
        x + Math.cos(a) * r * 1.3, y + r * 0.9,
        x + Math.cos(a) * r * 1.5, y + r * 0.5 + Math.sin(time2()) * 2
      )
      ctx.stroke()
    }
    // yeux
    ctx.fillStyle = '#fff'
    for (const s of [-1, 1]) {
      ctx.beginPath(); ctx.arc(x + s * r * 0.35, y - r * 0.25, r * 0.3, 0, Math.PI * 2); ctx.fill()
      ctx.fillStyle = '#182028'
      ctx.beginPath(); ctx.arc(x + s * r * 0.35, y - r * 0.25, r * 0.13, 0, Math.PI * 2); ctx.fill()
      ctx.fillStyle = '#fff'
    }
    ctx.restore()
  }

  // ================= ARMURERIE =================
  _drawShop() {
    const b = this.shop
    b.draw((ctx, W, H) => {
      ctx.fillStyle = '#2b3a42'
      ctx.fillRect(0, 0, W, H * 0.12)
      ctx.fillStyle = '#ffd166'
      ctx.font = 'bold 40px system-ui, sans-serif'
      ctx.textAlign = 'left'; ctx.textBaseline = 'middle'
      ctx.fillText('ARMURERIE DU RÉCIF', 24, H * 0.06)
      ctx.font = 'bold 30px system-ui, sans-serif'
      ctx.fillStyle = '#7dff9b'
      ctx.textAlign = 'right'
      ctx.fillText(fmtMoney(this.game.player.money), W - 24, H * 0.06)

      const rowH = (H * 0.88) / CFG.weapons.length - 4
      let y = H * 0.13
      for (const w of CFG.weapons) {
        if (w.id === 'fists') continue
        const owned = this.game.player.owned.includes(w.id)
        // ligne
        ctx.fillStyle = '#e9dcc0'
        ctx.beginPath(); ctx.roundRect(16, y, W - 32, rowH, 10); ctx.fill()
        ctx.fillStyle = INK
        ctx.textAlign = 'left'
        ctx.font = 'bold 30px system-ui, sans-serif'
        ctx.fillText(w.name, 34, y + rowH * 0.3)
        ctx.font = '20px system-ui, sans-serif'
        ctx.fillStyle = '#5b6b73'
        const stats = w.dmg ? `Dégâts ${w.dmg} — chargeur ${w.mag} — ${w.auto ? 'auto' : 'semi'}` : 'Vos deux tentacules'
        ctx.fillText(stats, 34, y + rowH * 0.68)
        if (owned) {
          b.button(W - 190, y + rowH / 2 - 22, 160, 44, 'POSSÉDÉ', () => { this.game.player._selectWeaponSlot(this.game.player.owned.indexOf(w.id)) }, '#3a5a68')
        } else {
          const can = this.game.player.money >= w.price
          b.button(W - 190, y + rowH / 2 - 22, 160, 44, 'ACHETER', () => { this.game.tryBuy(w.id) }, can ? GREEN : '#8a5a4a')
        }
        ctx.fillStyle = RED
        ctx.font = 'bold 24px system-ui, sans-serif'
        ctx.textAlign = 'center'
        ctx.fillText(w.price + ' ¢', W - 190 + 80, y + rowH / 2 - 34)
        y += rowH + 4
      }
    })
  }

  // ================= TON POULPE =================
  _drawStats() {
    const b = this.stats
    const p = this.game.player
    b.draw((ctx, W, H) => {
      ctx.fillStyle = '#2b3a42'
      ctx.fillRect(0, 0, W, H * 0.12)
      ctx.fillStyle = '#ffd166'
      ctx.font = 'bold 38px system-ui, sans-serif'
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle'
      ctx.fillText('TON POULPE', W / 2, H * 0.06)

      const a = CFG.growth.abilities
      const un = p.unlocked
      const lines = [
        ['Pseudo', p.name],
        ['Poissons mangés', p.fishCount + '  (Niv ' + p.level + ')'],
        ['Vie max', Math.round(p.maxHp) + ' pv'],
        ['Vitesse', 'x' + p.speedMult.toFixed(2)],
        ['Dégâts de tentacule', Math.round(p.dmgStat) + ''],
        ['Double saut', un.doubleJump ? 'ACTIF (A/X)' : 'à ' + a.doubleJump + ' poissons'],
        ['Dash', un.dash ? 'ACTIF (B/Y)' : 'à ' + a.dash + ' poissons'],
        ['Camouflage', un.camo ? 'ACTIF (stick droit)' : 'à ' + a.camo + ' poissons'],
        ['Encre (3 coups)', p.hitTimes.length + ' / ' + CFG.combat.inkHits]
      ]
      ctx.textAlign = 'left'
      let y = H * 0.2
      for (const [k, v] of lines) {
        ctx.fillStyle = '#5b6b73'
        ctx.font = '24px system-ui, sans-serif'
        ctx.fillText(k, 30, y)
        ctx.fillStyle = INK
        ctx.font = 'bold 24px system-ui, sans-serif'
        ctx.fillText(String(v), W - 30, y, W * 0.55)
        y += (H * 0.76) / lines.length
      }
    })
  }

  // ================= interaction =================
  raycast(ray) {
    if (ray) this._hit.ray.copy(ray)
    let best = null
    for (const board of this._all) {
      const hit = this._hit.intersectObject(board.mesh, false)[0]
      if (hit && (!best || hit.distance < best.distance)) {
        best = { board, point: hit.point, uv: hit.uv, distance: hit.distance }
      }
    }
    return best
  }

  click(hit) {
    if (!hit) return false
    const px = hit.uv.x * hit.board.W
    const py = (1 - hit.uv.y) * hit.board.H
    const done = hit.board.click(px, py)
    if (done) this.redrawAll()
    return done
  }

  cursorAt(hit) {
    if (hit && hit.distance < 5.5) {
      this.cursor.visible = true
      this.cursor.position.copy(hit.point)
      return true
    }
    this.cursor.visible = false
    return false
  }

  update() {
    if (this.dirty) this.redrawAll()
  }
}

// petit util pour faire "vivre" le portrait (pas critique)
function time2() { return performance.now() / 500 }
