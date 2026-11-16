// ============================================================
// Hud — montres du poulpe : HUD au poignet gauche en VR,
// HUD DOM en mode bureau. Vie, argent, poissons, arme,
// munitions, compteur d'encre, capacités, joueurs connectés.
// ============================================================
import * as THREE from 'three'
import { CFG } from '../config.js'
import { canvasTexture, fmtMoney } from '../utils.js'

export class Hud {
  constructor(game) {
    this.game = game
    this.dirty = true
    this._t = 0

    // --- HUD poignet (VR) ---
    const { canvas, ctx, tex } = canvasTexture(512, 352)
    this.canvas = canvas; this.ctx = ctx; this.tex = tex
    const mat = new THREE.MeshBasicMaterial({ map: tex, transparent: true, toneMapped: false })
    this.mesh = new THREE.Mesh(new THREE.PlaneGeometry(0.115, 0.079), mat)
    this.mesh.position.set(0, 0.045, 0.075)
    this.mesh.rotation.x = -0.6
    this.anchor = null

    // --- HUD bureau (DOM) ---
    this.el = document.getElementById('hud')
    this.flashEl = document.getElementById('hitflash')
    this.toastEl = document.getElementById('toasts')
  }

  setWristAnchor(obj) {
    if (this.anchor) this.anchor.remove(this.mesh)
    this.anchor = obj || this.game.player.camera
    this.anchor.add(this.mesh)
    if (!obj) {
      this.mesh.position.set(-0.26, -0.18, -0.5)
      this.mesh.rotation.set(-0.25, 0.35, 0)
    } else {
      this.mesh.position.set(0, 0.045, 0.075)
      this.mesh.rotation.set(-0.6, 0, 0)
    }
    this.mesh.visible = true
  }

  toast(text, ms = 3200) {
    if (!this.toastEl) return
    const div = document.createElement('div')
    div.className = 'toast'
    div.textContent = text
    this.toastEl.appendChild(div)
    setTimeout(() => div.remove(), ms)
  }

  flashHit() {
    if (!this.flashEl) return
    this.flashEl.style.opacity = '0.55'
    clearTimeout(this._flashTo)
    this._flashTo = setTimeout(() => { this.flashEl.style.opacity = '0' }, 160)
  }

  draw() {
    const p = this.game.player
    const ctx = this.ctx
    const W = this.canvas.width, H = this.canvas.height
    ctx.clearRect(0, 0, W, H)
    ctx.fillStyle = 'rgba(6,18,24,0.82)'
    ctx.beginPath(); ctx.roundRect(0, 0, W, H, 18); ctx.fill()
    ctx.strokeStyle = 'rgba(140,220,240,0.35)'
    ctx.lineWidth = 3
    ctx.stroke()

    ctx.textBaseline = 'middle'
    // vie
    const hpK = Math.max(0, p.hp / p.maxHp)
    ctx.fillStyle = 'rgba(255,255,255,0.25)'
    ctx.beginPath(); ctx.roundRect(20, 20, W - 40, 26, 8); ctx.fill()
    ctx.fillStyle = hpK > 0.5 ? '#54d98c' : hpK > 0.25 ? '#ffd166' : '#ff5a5a'
    ctx.beginPath(); ctx.roundRect(20, 20, (W - 40) * hpK, 26, 8); ctx.fill()
    ctx.fillStyle = '#eafff5'
    ctx.font = 'bold 19px system-ui, sans-serif'
    ctx.textAlign = 'center'
    ctx.fillText(Math.ceil(p.hp) + ' / ' + p.maxHp + ' pv', W / 2, 33, W - 80)

    // argent + poissons
    ctx.textAlign = 'left'
    ctx.font = 'bold 21px system-ui, sans-serif'
    ctx.fillStyle = '#7dff9b'
    ctx.fillText(fmtMoney(p.money), 20, 62)
    ctx.fillStyle = '#ffd166'
    ctx.textAlign = 'right'
    ctx.fillText('Poissons : ' + p.fishCount + '  (Niv ' + p.level + ')', W - 20, 62)

    // arme + munitions
    ctx.textAlign = 'left'
    ctx.font = 'bold 20px system-ui, sans-serif'
    ctx.fillStyle = '#eafff5'
    const w = CFG.weapons.find(w => w.id === p.curWeapon)
    let ammoTxt = ''
    if (w && w.dmg) {
      ammoTxt = p.reloadT > 0 ? 'RECHARGEMENT...' : (p.ammo[w.id] || 0) + ' / ' + w.mag
    }
    ctx.fillText('Arme : ' + (w ? w.name : 'Poings') + (ammoTxt ? '  —  ' + ammoTxt : ''), 20, 96)

    // encre (3 pips)
    const pips = CFG.combat.inkHits
    for (let i = 0; i < pips; i++) {
      const on = i < p.hitTimes.length
      ctx.fillStyle = on ? '#8f7dff' : 'rgba(255,255,255,0.2)'
      ctx.beginPath(); ctx.arc(30 + i * 24, 128, 9, 0, Math.PI * 2); ctx.fill()
    }
    ctx.fillStyle = '#cfd8de'
    ctx.font = '17px system-ui, sans-serif'
    ctx.textAlign = 'left'
    ctx.fillText('encre auto', 110, 128)

    // capacités
    const un = p.unlocked
    const caps = [
      ['SAUT x' + (un.doubleJump ? 2 : 1), true, p.jumpCharges],
      ['DASH', un.dash, p.dashCd <= 0 ? 1 : 0],
      ['CAMO', un.camo && !p.camoActive, p.camoCd <= 0 ? 1 : 0]
    ]
    let x = 20
    ctx.font = 'bold 16px system-ui, sans-serif'
    for (const [label, unlocked, charge] of caps) {
      ctx.fillStyle = unlocked && charge ? '#7dff9b' : 'rgba(255,255,255,0.35)'
      ctx.beginPath(); ctx.roundRect(x, 150, 148, 30, 8); ctx.fill()
      ctx.fillStyle = unlocked ? '#0a1a20' : 'rgba(10,26,32,0.8)'
      const txt = label + (unlocked && typeof charge === 'number' && label.startsWith('SAUT') ? ' (' + charge + ')' : '')
      ctx.fillText(txt, x + 10, 165)
      x += 158
    }

    // joueurs
    ctx.textAlign = 'right'
    ctx.fillStyle = '#9fb6c2'
    ctx.font = '16px system-ui, sans-serif'
    const nPeers = this.game.net ? this.game.net.peerCount : 0
    ctx.fillText('Bassin : ' + (nPeers + 1) + ' poulpe' + (nPeers ? 's' : ''), W - 20, 200)

    ctx.textAlign = 'left'
    ctx.font = '14px system-ui, sans-serif'
    ctx.fillStyle = '#7f97a3'
    ctx.fillText('Commissariat au fond du bassin : avis de recherche + armurerie', 20, H - 40)
    ctx.fillStyle = '#7dffb0'
    ctx.fillText("Montre (tentacule gauche) : touche-la = MENU — son aiguille guide vers le commissariat", 20, H - 20)

    this.tex.needsUpdate = true
  }

  drawDesktop() {
    const p = this.game.player
    const w = CFG.weapons.find(w => w.id === p.curWeapon)
    const un = p.unlocked
    const hpK = Math.max(0, p.hp / p.maxHp)
    this.el.innerHTML = `
      <div class="row"><span class="k">Vie</span><div class="bar"><div class="fill" style="width:${hpK * 100}%;background:${hpK > 0.5 ? '#54d98c' : hpK > 0.25 ? '#ffd166' : '#ff5a5a'}"></div></div></div>
      <div class="row"><span class="k">Argent</span><span class="v money">${fmtMoney(p.money)}</span>
      <span class="k">Poissons</span><span class="v">${p.fishCount} (Niv ${p.level})</span></div>
      <div class="row"><span class="k">Arme</span><span class="v">${w ? w.name : 'Poings'}${w && w.dmg ? (p.reloadT > 0 ? ' — RECHARGE' : ' — ' + (p.ammo[w.id] || 0) + '/' + w.mag) : ''}</span>
      <span class="k">Encre</span><span class="v">${p.hitTimes.length}/${CFG.combat.inkHits}</span></div>
      <div class="row small">SAUT ${un.doubleJump ? 'x2' : 'x1'} · DASH ${un.dash ? 'E' : 'à ' + CFG.growth.abilities.dash + ' poissons'} · CAMO ${un.camo ? 'X' : 'à ' + CFG.growth.abilities.camo + ' poissons'}</div>
      <div class="row small">WASD nager · Z monter · C descendre · clic tirer/poing · F saisir/manger · 1-4 armes</div>
    `
  }

  update(dt) {
    this._t += dt
    const inVR = this.game.renderer.xr.isPresenting
    if (inVR) {
      this.mesh.visible = !this.game.player.dead
      if (this.dirty || this._t > 0.25) {
        this._t = 0
        this.draw()
        this.dirty = false
      }
    } else if (this.dirty || this._t > 0.25) {
      this._t = 0
      this.drawDesktop()
      this.dirty = false
    }
  }
}
