// ============================================================
// WatchMenu — montre-boussole accrochée à la tentacule gauche
// (VR uniquement) :
//  - l'aiguille pointe en permanence vers le commissariat
//    (avis de recherche + armurerie)
//  - la TOUCHER avec une main ouvre/ferme le menu personnel :
//    armurerie (achat/équipement), son, téléport commissariat
// Menu dessiné sur canvas, visée + gâchette pour cliquer.
// ============================================================
import * as THREE from 'three'
import { CFG, WEAPON_BY_ID } from '../config.js'
import { canvasTexture, fmtMoney } from '../utils.js'
import { sfx } from '../sfx.js'

const INK = '#22333b'
const PAPER = '#f3ead8'
const RED = '#c8442e'
const GREEN = '#2e7d4f'

export class WatchMenu {
  constructor(game) {
    this.game = game
    this.open = false
    this._touching = false
    this._cd = 0
    this._lastHit = null
    this._scale = 1

    // ---------- la montre ----------
    const g = new THREE.Group()
    this.group = g
    g.visible = false
    game.scene.add(g)

    // bracelet : petit tore derrière le boîtier
    const strap = new THREE.Mesh(
      new THREE.TorusGeometry(0.052, 0.011, 8, 20),
      new THREE.MeshStandardMaterial({ color: 0x2c3138, roughness: 0.8 })
    )
    g.add(strap)
    // boîtier métallique (axe Z local = normale du cadran)
    const caseM = new THREE.Mesh(
      new THREE.CylinderGeometry(0.044, 0.046, 0.018, 24),
      new THREE.MeshStandardMaterial({ color: 0x9fb4be, roughness: 0.3, metalness: 0.75 })
    )
    caseM.rotation.x = Math.PI / 2
    g.add(caseM)
    // couronne
    const crown = new THREE.Mesh(
      new THREE.CylinderGeometry(0.006, 0.006, 0.012, 10),
      caseM.material
    )
    crown.rotation.z = Math.PI / 2
    crown.position.set(0.048, 0, 0)
    g.add(crown)

    // cadran (canvas : ticks + lettrage)
    const dial = canvasTexture(128, 128)
    this._dial = dial
    const face = new THREE.Mesh(
      new THREE.CircleGeometry(0.037, 24),
      new THREE.MeshBasicMaterial({ map: dial.tex, toneMapped: false })
    )
    face.position.z = 0.0105
    g.add(face)
    this._drawDial()

    // aiguille (pivot au centre, pointe vers +Y à rotation nulle)
    const needle = new THREE.Group()
    const body = new THREE.Mesh(
      new THREE.BoxGeometry(0.005, 0.03, 0.0025),
      new THREE.MeshBasicMaterial({ color: 0xd33a2c, toneMapped: false })
    )
    body.position.y = 0.0105
    needle.add(body)
    const tail = new THREE.Mesh(
      new THREE.BoxGeometry(0.005, 0.01, 0.0025),
      new THREE.MeshBasicMaterial({ color: 0xf0e6d2, toneMapped: false })
    )
    tail.position.y = -0.008
    needle.add(tail)
    const hub = new THREE.Mesh(
      new THREE.CylinderGeometry(0.0045, 0.0045, 0.004, 10),
      new THREE.MeshStandardMaterial({ color: 0x22333b, roughness: 0.4, metalness: 0.6 })
    )
    hub.rotation.x = Math.PI / 2
    needle.add(hub)
    needle.position.z = 0.013
    g.add(needle)
    this._needle = needle

    // lueur quand le menu est ouvert
    this._glow = new THREE.Mesh(
      new THREE.CircleGeometry(0.052, 24),
      new THREE.MeshBasicMaterial({ color: 0x7dffb0, transparent: true, opacity: 0, toneMapped: false })
    )
    this._glow.position.z = 0.0098
    g.add(this._glow)

    // ---------- le panneau-menu ----------
    const pw = 1024, ph = 1280
    const panel = canvasTexture(pw, ph)
    this._panel = panel
    this._PW = pw; this._PH = ph
    this.buttons = []
    this.panelMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(1.3, 1.625),
      new THREE.MeshBasicMaterial({ map: panel.tex, toneMapped: false })
    )
    this.panelMesh.visible = false
    this.panelMesh.userData.watchMenu = this
    game.scene.add(this.panelMesh)

    // curseur de visée
    this.cursor = new THREE.Mesh(
      new THREE.SphereGeometry(0.018, 8, 8),
      new THREE.MeshBasicMaterial({ color: 0x7dffb0 })
    )
    this.cursor.visible = false
    game.scene.add(this.cursor)

    // temporaires
    this._v1 = new THREE.Vector3(); this._v2 = new THREE.Vector3()
    this._v3 = new THREE.Vector3(); this._q1 = new THREE.Quaternion()
    this._m1 = new THREE.Matrix4()
    this._raycaster = new THREE.Raycaster()
  }

  // ---------- cadran ----------
  _drawDial() {
    const { ctx, tex } = this._dial
    ctx.setTransform(1, 0, 0, 1, 0, 0)
    ctx.clearRect(0, 0, 128, 128)
    ctx.fillStyle = '#f5efe0'
    ctx.beginPath(); ctx.arc(64, 64, 62, 0, Math.PI * 2); ctx.fill()
    // ticks
    ctx.strokeStyle = '#4a5560'; ctx.lineWidth = 2.4
    for (let i = 0; i < 12; i++) {
      const a = (i / 12) * Math.PI * 2
      const r1 = i % 3 === 0 ? 47 : 53
      ctx.beginPath()
      ctx.moveTo(64 + Math.sin(a) * r1, 64 - Math.cos(a) * r1)
      ctx.lineTo(64 + Math.sin(a) * 58, 64 - Math.cos(a) * 58)
      ctx.stroke()
    }
    // marque "commissariat" en haut (l'aiguille suit, la marque rappelle l'usage)
    ctx.fillStyle = RED
    ctx.font = 'bold 17px system-ui, sans-serif'
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle'
    ctx.fillText('COMMISSARIAT', 64, 92)
    ctx.fillStyle = '#8fa0aa'
    ctx.font = '13px system-ui, sans-serif'
    ctx.fillText('TOUCHER = MENU', 64, 106)
    tex.needsUpdate = true
  }

  // ---------- panneau-menu ----------
  _btn(x, y, w, h, label, cb, color = GREEN) {
    const ctx = this._panel.ctx
    ctx.fillStyle = color
    ctx.beginPath(); ctx.roundRect(x, y, w, h, 12); ctx.fill()
    ctx.fillStyle = '#fff'
    ctx.font = 'bold 34px system-ui, sans-serif'
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle'
    ctx.fillText(label, x + w / 2, y + h / 2, w - 14)
    this.buttons.push({ x, y, w, h, cb })
  }

  draw() {
    const p = this.game.player
    const ctx = this._panel.ctx
    const W = this._PW, H = this._PH
    ctx.setTransform(1, 0, 0, 1, 0, 0)
    ctx.fillStyle = '#20313b'
    ctx.fillRect(0, 0, W, H)
    this.buttons = []

    // en-tête
    ctx.fillStyle = PAPER
    ctx.beginPath(); ctx.roundRect(24, 24, W - 48, 118, 16); ctx.fill()
    ctx.fillStyle = INK
    ctx.font = 'bold 44px system-ui, sans-serif'
    ctx.textAlign = 'left'; ctx.textBaseline = 'middle'
    ctx.fillText('MENU DE ' + p.name.toUpperCase(), 48, 62)
    ctx.font = '30px system-ui, sans-serif'
    ctx.fillStyle = '#5b6b73'
    ctx.fillText('Niv ' + p.level + ' — ' + p.fishCount + ' poissons — ' + Math.round(p.hp) + ' pv', 48, 108)
    ctx.fillStyle = '#2e7d4f'
    ctx.font = 'bold 40px system-ui, sans-serif'
    ctx.textAlign = 'right'
    ctx.fillText(fmtMoney(p.money), W - 48, 84)

    // armurerie
    ctx.fillStyle = '#ffd166'
    ctx.font = 'bold 36px system-ui, sans-serif'
    ctx.textAlign = 'left'
    ctx.fillText('ARMURERIE DU RÉCIF', 32, 190)

    let y = 220
    for (const w of CFG.weapons) {
      if (w.id === 'fists') continue
      const owned = p.owned.includes(w.id)
      ctx.fillStyle = PAPER
      ctx.beginPath(); ctx.roundRect(24, y, W - 48, 148, 14); ctx.fill()
      ctx.fillStyle = INK
      ctx.font = 'bold 34px system-ui, sans-serif'
      ctx.textAlign = 'left'
      ctx.fillText(w.name, 48, y + 42)
      ctx.font = '24px system-ui, sans-serif'
      ctx.fillStyle = '#5b6b73'
      ctx.fillText(w.dmg ? `Dégâts ${w.dmg} — chargeur ${w.mag} — ${w.auto ? 'auto' : 'semi'}` : 'Vos deux tentacules', 48, y + 84)
      ctx.fillStyle = RED
      ctx.font = 'bold 30px system-ui, sans-serif'
      ctx.fillText(w.price + ' ¢', 48, y + 120)
      if (owned) {
        const equipped = p.curWeapon === w.id
        this._btn(W - 300, y + 52, 250, 56, equipped ? 'ÉQUIPÉE' : 'ÉQUIPER', () => {
          p._selectWeaponSlot(p.owned.indexOf(w.id))
          this.draw()
        }, equipped ? '#3a5a68' : GREEN)
      } else {
        const can = p.money >= w.price
        this._btn(W - 300, y + 52, 250, 56, 'ACHETER', () => {
          this.game.tryBuy(w.id)
          this.draw()
        }, can ? GREEN : '#8a5a4a')
      }
      y += 158
    }

    // actions
    const muted = sfx.muted
    this._btn(24, y + 16, (W - 60) / 2, 92, muted ? 'SON : NON' : 'SON : OUI', () => {
      sfx.toggleMute(); this.draw()
    }, muted ? '#8a5a4a' : '#3a5a68')
    this._btn(W / 2 + 6, y + 16, (W - 60) / 2, 92, 'AU COMMISSARIAT', () => {
      this.game.player.rig.position.set(CFG.spawn.x, CFG.spawn.y, CFG.spawn.z)
      this.game.player.vel.set(0, 0, 0)
      this.close()
      sfx.dash()
    }, '#3a5a68')

    // note + fermer
    ctx.fillStyle = '#7f97a3'
    ctx.font = '24px system-ui, sans-serif'
    ctx.textAlign = 'left'
    ctx.fillText("L'aiguille de la montre montre toujours le commissariat.", 32, H - 108)
    this._btn(W / 2 - 130, H - 92, 260, 72, 'FERMER', () => this.close(), RED)

    this._panel.tex.needsUpdate = true
  }

  openMenu() {
    this.open = true
    this._scale = 0.5
    this.draw()
    sfx.ui()
  }

  close() {
    this.open = false
    this.panelMesh.visible = false
    this.cursor.visible = false
    sfx.ui()
  }

  // ---------- boucle (appelée par Game._updateUI) ----------
  // retourne true si la visée touche le panneau-menu
  update(dt, ray) {
    const game = this.game
    const p = game.player
    const inVR = game.renderer.xr.isPresenting
    this._cd = Math.max(0, this._cd - dt)

    // mode bureau : invisible, tout est éteint (le menu reste l'écran titre / DOM)
    if (!inVR || !p.tentL || p.tentL.pts.length < 4) {
      this.group.visible = false
      if (this.open) this.close()
      return false
    }
    this.group.visible = !p.dead

    // --- position sur la tentacule gauche (3e segment) ---
    const pt = p.tentL.pts[3]
    this._v1.set(pt.x, pt.y, pt.z)
    this.group.position.copy(this._v1)
    // normale du cadran (+Z du groupe) : vers l'extérieur gauche du corps
    p.bodyGroup.getWorldPosition(this._v2)
    const outward = this._v3.copy(this._v1).sub(this._v2)
    outward.y = 0
    if (outward.lengthSq() < 1e-8) outward.set(-1, 0, 0)
    outward.normalize()
    outward.y = -0.25 // légèrement incliné vers le bas : lisible par le joueur
    outward.normalize()
    // Matrix4.lookAt(eye, target, up) donne -Z de eye vers target :
    // on vise (pos - outward) pour que le +Z du groupe pointe vers l'extérieur
    this._m1.lookAt(this._v1, this._v1.clone().sub(outward), new THREE.Vector3(0, 1, 0))
    this.group.quaternion.setFromRotationMatrix(this._m1)

    // --- aiguille boussole : vers le commissariat ---
    const target = game.world.policeAnchor.pos
    this._v2.set(0, 0, 1).applyQuaternion(this.group.quaternion) // normale du cadran
    const mUp = new THREE.Vector3(0, 1, 0).applyQuaternion(this.group.quaternion)
    const mRight = new THREE.Vector3(1, 0, 0).applyQuaternion(this.group.quaternion)
    const dir = target.clone().sub(this._v1)
    dir.addScaledVector(this._v2, -dir.dot(this._v2)) // projection sur le plan du cadran
    if (dir.lengthSq() > 1e-8) {
      const lx = dir.dot(mRight), ly = dir.dot(mUp)
      this._needle.rotation.z = -Math.atan2(lx, ly)
    }
    this._glow.material.opacity = this.open ? 0.28 + Math.sin(performance.now() / 180) * 0.1 : 0

    // --- toucher la montre avec une main = bascule du menu ---
    let touched = false
    for (const hand of ['left', 'right']) {
      const c = p.xrHands[hand]
      if (!c) continue
      c.getWorldPosition(this._v2)
      if (this._v2.distanceTo(this._v1) < CFG.watch.touchRadius) { touched = true; break }
    }
    if (touched && !this._touching && this._cd <= 0) {
      this._cd = CFG.watch.cooldown
      if (this.open) this.close()
      else this.openMenu()
    }
    this._touching = touched

    // --- panneau-menu ouvert ---
    if (!this.open) { this.panelMesh.visible = false; this.cursor.visible = false; return false }

    // place le panneau devant le joueur (yaw seulement)
    const head = p.headWorld
    const look = p.getLookDir(this._v2)
    look.y = 0
    if (look.lengthSq() < 1e-6) look.set(0, 0, -1)
    look.normalize()
    this.panelMesh.position.copy(head).addScaledVector(look, CFG.watch.panelDist)
    this.panelMesh.position.y -= 0.18
    this.panelMesh.lookAt(head)
    this._scale = Math.min(1, this._scale + dt * 4)
    this.panelMesh.scale.setScalar(this._scale)
    this.panelMesh.visible = true

    // fermeture automatique si trop loin
    if (this.panelMesh.position.distanceTo(head) > CFG.watch.panelDist + CFG.watch.closeDist) { this.close(); return false }

    // visée + curseur
    this._lastHit = null
    if (ray) {
      this._raycaster.ray.copy(ray)
      const list = this._raycaster.intersectObject(this.panelMesh, false)
      if (list.length) {
        const h = list[0]
        this._lastHit = { uv: h.uv, point: h.point }
        this.cursor.visible = true
        this.cursor.position.copy(h.point)
      } else this.cursor.visible = false
    } else this.cursor.visible = false

    return !!this._lastHit
  }

  // consomme le clic (appelé par Game quand uiClickRequested && watchUi)
  click() {
    const h = this._lastHit
    if (!h) return false
    const px = h.uv.x * this._PW
    const py = (1 - h.uv.y) * this._PH
    for (const b of this.buttons) {
      if (px >= b.x && px <= b.x + b.w && py >= b.y && py <= b.y + b.h) {
        b.cb()
        return true
      }
    }
    return false
  }
}
