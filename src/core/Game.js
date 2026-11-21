// ============================================================
// Game — orchestrateur : rendu, boucle, combat, primes,
// événements réseau, interactions des panneaux.
// ============================================================
import * as THREE from 'three'
import { CFG, WEAPON_BY_ID } from '../config.js'
import { World } from './World.js'
import { Player } from './Player.js'
import { FishSchool } from './Fish.js'
import { Fx } from './Fx.js'
import { InkCloud } from './InkCloud.js'
import { RemotePlayer } from './RemotePlayer.js'
import { NpcBounty } from './NpcBounty.js'
import { Boards } from '../systems/Boards.js'
import { WatchMenu } from '../systems/WatchMenu.js'
import { Hud } from '../systems/Hud.js'
import { Network } from '../net/Network.js'
import { sfx } from '../sfx.js'
import { randomName, fmtMoney, rand } from '../utils.js'

export class Game {
  constructor(mode, name, roomName) {
    this.mode = mode // 'vr' | 'desktop'
    this.renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' })
    this.renderer.setSize(innerWidth, innerHeight)
    this.renderer.setPixelRatio(Math.min(devicePixelRatio, 1.5))
    this.renderer.xr.enabled = mode === 'vr'
    // rendu cinéma : tone mapping ACES + ombres douces
    if (CFG.fx.toneMapping) {
      this.renderer.toneMapping = THREE.ACESFilmicToneMapping
      this.renderer.toneMappingExposure = 1.12
    }
    if (CFG.fx.shadows) {
      this.renderer.shadowMap.enabled = true
      // PCFSoftShadowMap a été retiré de three r187 : PCF + radius
      this.renderer.shadowMap.type = THREE.PCFShadowMap
    }
    document.getElementById('app').appendChild(this.renderer.domElement)

    this.scene = new THREE.Scene()
    this.world = new World(this.scene)
    this.fx = new Fx(this.scene)
    this.fish = new FishSchool(this.scene, this.world)
    this.player = new Player(this, name)
    this.net = new Network(this)
    this.remotes = new Map()
    this.npcs = []          // vois IA PARTAGÉS (l'hôte simule, les invités interpolent)
    this.inkClouds = []
    this.bounties = []
    this.uiPointing = false
    this.uiClickRequested = false
    this._bountyTimers = []
    this._npcRespawnT = CFG.npc.firstSpawnDelay // rare : délai avant le 1er voyou

    this.boards = new Boards(this.scene, this.world, this)
    this.watch = new WatchMenu(this)
    this.hud = new Hud(this)
    this.hud.setWristAnchor(null)

    // XR : le HUD passe au poignet
    this.renderer.xr.addEventListener('sessionstart', () => {
      this.hud.setWristAnchor(this.player.controllers.find(c => c.userData.hand === 'left') || null)
    })
    this.renderer.xr.addEventListener('sessionend', () => {
      this.hud.setWristAnchor(null)
      this.renderer.setSize(innerWidth, innerHeight)
    })

    addEventListener('resize', () => {
      this.camera.aspect = innerWidth / innerHeight
      this.camera.updateProjectionMatrix()
      this.renderer.setSize(innerWidth, innerHeight)
    })

    this._raycaster = new THREE.Raycaster()
    this._ray = new THREE.Ray()
    this._v1 = new THREE.Vector3()
    this._v2 = new THREE.Vector3()
    this._last = performance.now()
    this._threats = []

    this.net.connect(roomName).then(() => {
      this.refreshBounties()
    })
    this.refreshBounties()

    window.__game = this // accès debug (NPC punch)
    addEventListener('beforeunload', () => { this.net.leave() })

    this.renderer.setAnimationLoop((t) => this._loop(t))
  }

  get camera() { return this.player.camera }

  // ============================================================
  // BOUCLE
  // ============================================================
  _loop(t) {
    const dt = Math.min((t - this._last) / 1000, 0.05)
    this._last = t
    const time = t / 1000

    this.world.update(dt, time, this.player.bodyCenter.clone())
    this.player.update(dt, time)

    // poissons : l'hôte simule, les invités interpolent
    if (this.net.isHost) {
      this._collectThreats()
      this.fish.simulate(dt, time, this._threats)
    } else {
      this.fish.updateRemote(dt)
    }

    // vois IA : MONDE PARTAGÉ — l'hôte simule et diffuse (8 Hz),
    // les invités interpolent. Le voyou traque le joueur le plus proche.
    if (this.net.isHost) {
      // migration d'hôte : les vois recus du réseau passent en simulation locale
      for (const n of this.npcs) if (n && n.remote) n.remote = false
      this._updateNpcSpawns(dt)
      for (const npc of this.npcs) {
        if (!npc || npc.dead) continue
        const tgt = this._nearestPlayerFor(npc)
        npc.update(dt, time, tgt.pos, tgt.dead, this.inkClouds)
      }
    } else {
      for (const npc of this.npcs) {
        if (!npc || npc.dead) continue
        npc.update(dt, time, this.player.bodyCenter.clone(), this.player.dead, this.inkClouds)
      }
    }
    for (let i = this.npcs.length - 1; i >= 0; i--) {
      if (this.npcs[i] && this.npcs[i].dead) this._npcDied(this.npcs[i])
    }

    // joueurs distants
    for (const r of this.remotes.values()) r.update(dt, time)

    // nuages d'encre
    for (let i = this.inkClouds.length - 1; i >= 0; i--) {
      if (this.inkClouds[i].update(dt)) {
        this.inkClouds[i].dispose()
        this.inkClouds.splice(i, 1)
      }
    }

    this.fx.update(dt)

    // interface : visée + clics sur les panneaux
    this._updateUI(dt)

    this.hud.update(dt)
    this.net.update(dt, this.player)

    // timers de primes
    for (let i = this._bountyTimers.length - 1; i >= 0; i--) {
      this._bountyTimers[i].t -= dt
      if (this._bountyTimers[i].t <= 0) {
        this._bountyTimers[i].cb()
        this._bountyTimers.splice(i, 1)
      }
    }

    this.renderer.render(this.scene, this.camera)
  }

  _collectThreats() {
    const th = this._threats
    th.length = 0
    if (!this.player.dead) {
      th.push(this.player.headWorld.clone())
      th.push(this.player._handPos('left', new THREE.Vector3()))
      th.push(this.player._handPos('right', new THREE.Vector3()))
    }
    for (const r of this.remotes.values()) {
      if (r.alive && r._hasState) {
        th.push(r.headPos.clone())
        th.push(r.lHand.clone())
        th.push(r.rHand.clone())
      }
    }
  }

  // ============================================================
  // INTERFACE (panneaux)
  // ============================================================
  _updateUI(dt) {
    this.boards.update() // redessine si dirty (primes achetées, stats...)
    let ray = null
    if (this.renderer.xr.isPresenting && this.player.xrHands.right) {
      this.player.xrHands.right.getWorldQuaternion(this._q1 || (this._q1 = new THREE.Quaternion()))
      this.player.xrHands.right.getWorldPosition(this._v1)
      this._ray.origin.copy(this._v1)
      this._ray.direction.set(0, 0, -1).applyQuaternion(this._q1)
      ray = this._ray
    } else if (!this.renderer.xr.isPresenting) {
      this._raycaster.setFromCamera({ x: 0, y: 0 }, this.camera)
      ray = this._raycaster.ray
    }
    const hit = ray ? this.boards.raycast(ray) : null
    const boardUi = this.boards.cursorAt(hit)
    // montre-boussole (VR) : menu personnel — prioritaire sur les panneaux
    const watchUi = this.watch.update(dt, ray)
    this.uiPointing = boardUi || watchUi
    if (this.uiClickRequested) {
      this.uiClickRequested = false
      if (watchUi) { sfx.ui(); this.watch.click() }
      else if (hit) { sfx.ui(); this.boards.click(hit) }
    }
  }

  // ============================================================
  // COMBAT
  // ============================================================
  // tir local (le tireur est autoritaire sur les dégâts)
  doHitscan(shooter, origin, dir, weapon) {
    const worldHit = this.world.raycast(origin, dir, 110)
    let dist = worldHit ? worldHit.t : 70
    let target = null

    // joueurs distants — hitbox EN 2 SPHÈRES : tête + corps (le poulpe visible
    // est un gros corps derrière la tête ; viser le corps doit TOUCHER,
    // sinon le tir « passe à travers » et on croit que tirer ne fait rien)
    for (const r of this.remotes.values()) {
      if (!r.alive || !r._hasState) continue
      const tHead = this._raySphere(origin, dir, r.position, 0.55 * r.scale)
      const tBody = this._raySphere(origin, dir, r.group.position, 0.72 * r.scale)
      const t = tHead !== null && tBody !== null ? Math.min(tHead, tBody) : (tHead !== null ? tHead : tBody)
      if (t !== null && t < dist) { dist = t; target = { kind: 'remote', obj: r } }
    }
    // vois IA
    for (const npc of this.npcs) {
      if (npc.dead) continue
      const t = this._raySphere(origin, dir, npc.bodyCenter, npc.bodyRadius)
      if (t !== null && t < dist) { dist = t; target = { kind: 'npc', obj: npc } }
    }

    const color = weapon.id === 'sniper' ? 0xaff8ff : weapon.id === 'minigun' ? 0xffd27a : 0xfff1a8
    this.fx.tracer(origin.clone(), dir.clone(), dist, color, weapon.id === 'sniper' ? 0.014 : 0.024)
    const hitPoint = origin.clone().addScaledVector(dir, dist)
    this.fx.impact(hitPoint, target ? 0xff6a5a : 0xffd27a, 5)

    if (target) {
      if (target.kind === 'remote') {
        this.net.sendEv({ t: 'hit', to: target.obj.id, dmg: weapon.dmg, w: weapon.id })
        // feedback TIREUR : sans ce son, toucher un joueur ne « dit » rien
        sfx.impact()
      } else {
        this.damageNpc(target.obj, weapon.dmg)
      }
    }
    // montrer le tir aux autres (visuel uniquement)
    this.net.sendEv({ t: 'shot', o: [origin.x, origin.y, origin.z], d: [dir.x, dir.y, dir.z], w: weapon.id })
  }

  _raySphere(origin, dir, center, radius) {
    const ox = origin.x - center.x, oy = origin.y - center.y, oz = origin.z - center.z
    const b = ox * dir.x + oy * dir.y + oz * dir.z
    const c = ox * ox + oy * oy + oz * oz - radius * radius
    const disc = b * b - c // dir est normalisé
    if (disc < 0) return null
    const t = -b - Math.sqrt(disc)
    if (t < 0.1) return null
    return t
  }

  // cible de coup de tentacule (bouts des bras) — même hitbox 2 sphères
  // que les tirs : toucher le CORPS du poulpe distant compte aussi
  findPunchTarget(tip, range, attacker) {
    let best = null, bd = range
    for (const r of this.remotes.values()) {
      if (!r.alive || !r._hasState) continue
      const d = Math.min(tip.distanceTo(r.position), tip.distanceTo(r.group.position))
      if (d < bd) { bd = d; best = { kind: 'remote', obj: r } }
    }
    for (const npc of this.npcs) {
      if (npc.dead) continue
      const d = tip.distanceTo(npc.bodyCenter)
      if (d < bd) { bd = d; best = { kind: 'npc', obj: npc } }
    }
    return best
  }

  applyPunch(attacker, target, dmg, tip) {
    this.fx.impact(tip.clone(), 0xffb0a0, 5)
    if (target.kind === 'remote') {
      this.net.sendEv({ t: 'hit', to: target.obj.id, dmg, w: 'fists' })
      sfx.impact() // feedback du coup donné à un joueur
    } else {
      this.damageNpc(target.obj, dmg)
    }
  }

  // ============================================================
  // VOIS IA PARTAGÉS — tout le monde voit les MÊMES voyous.
  // L'hôte fait tourner l'IA et diffuse l'état ; les dégâts sont
  // routés vers l'hôte (tir d'un invité -> event npcHit), et la mort
  // est annoncée à tous avec le crédit de la prime au vrai tueur.
  // ============================================================
  // coup reçu par un vois : routage hôte (source de vérité)
  damageNpc(npc, dmg) {
    sfx.impact() // feedback immédiat du tireur, où qu'il soit
    if (this.net.isHost) {
      npc.lastHitBy = 'host'
      npc.damage(dmg)
    } else {
      this.net.sendEv({ t: 'npcHit', id: npc.id, dmg })
    }
  }

  // apparition rare : au plus CFG.npc.maxActive voyou(s) partagé(s),
  // espacés d'un délai aléatoire — le bassin est calme entre deux
  _updateNpcSpawns(dt) {
    const alive = this.npcs.filter(n => n && !n.dead).length
    if (alive >= CFG.npc.maxActive) return
    this._npcRespawnT -= dt
    if (this._npcRespawnT <= 0) {
      this._spawnSharedNpc()
      this._npcRespawnT = rand(CFG.npc.respawnMin, CFG.npc.respawnMax)
    }
  }

  _spawnSharedNpc() {
    const eco = CFG.economy
    // niveau du voyou calé sur le niveau MOYEN des joueurs présents
    const levels = [this.player.level]
    for (const r of this.remotes.values()) {
      if (r.alive && r._hasState) levels.push(Math.floor(r.fish / CFG.growth.levelPerFish) + 1)
    }
    const avg = levels.reduce((a, b) => a + b, 0) / levels.length
    const level = Math.max(1, Math.round(avg + (Math.random() < 0.5 ? 0 : 1)))
    const reward = Math.round((eco.bountyBase + (level - 1) * eco.bountyPerLevel) / 5) * 5
    const name = randomName() + '_V'
    const npc = new NpcBounty(this.scene, this.world, { name, level, reward })
    npc.lastHitBy = 'host'
    this.npcs.push(npc)
    this.sendNpcRoster()
    this.refreshBounties()
    this.hud.toast('Un voyou rôde dans le bassin : ' + name + '  (' + reward + ' ¢)')
  }

  // le voyou traque le joueur (local ou distant) le plus proche
  _nearestPlayerFor(npc) {
    let best = { pos: this.player.bodyCenter.clone(), dead: this.player.dead, id: 'self' }
    let bd = best.dead ? Infinity : best.pos.distanceToSquared(npc.pos)
    for (const r of this.remotes.values()) {
      if (!r.alive || !r._hasState) continue
      const d = r.group.position.distanceToSquared(npc.pos)
      if (d < bd) { bd = d; best = { pos: r.group.position.clone(), dead: false, id: r.id } }
    }
    npc.curTarget = best.id
    return best
  }

  // ----- réseau vois : état binaire [count, (x,y,z,yaw,scale,hp,attaque)*n] -----
  encodeNpcs() {
    const alive = this.npcs.filter(n => n && !n.dead)
    const arr = new Float32Array(1 + alive.length * 7)
    arr[0] = alive.length
    alive.forEach((n, i) => {
      const o = 1 + i * 7
      arr[o] = n.pos.x
      arr[o + 1] = n.pos.y
      arr[o + 2] = n.pos.z
      arr[o + 3] = n.yaw
      arr[o + 4] = n.scale
      arr[o + 5] = Math.max(0, n.hp / n.maxHp)
      arr[o + 6] = Math.max(0, n.attackAnim)
    })
    return arr
  }

  decodeNpcs(f32) {
    if (this.net.isHost) return
    const count = Math.min(Math.floor(f32[0] || 0), Math.floor((f32.length - 1) / 7))
    for (let i = 0; i < count; i++) {
      const npc = this.npcs[i] // même ordre que le roster de l'hôte
      if (!npc || npc.dead) continue
      const o = 1 + i * 7
      npc.netX = f32[o]
      npc.netY = f32[o + 1]
      npc.netZ = f32[o + 2]
      npc.netYaw = f32[o + 3]
      npc.netScale = f32[o + 4]
      npc.netAttack = f32[o + 6]
      const hp01 = f32[o + 5]
      // flash quand les pv baissent (retour visuel du dégât reçu)
      if (npc._hp01 !== undefined && hp01 < npc._hp01 - 0.001 && npc.octo) npc.octo.flash(0.15)
      npc._hp01 = hp01
      npc.hasNet = true
    }
  }

  // ----- roster : liste nominative des vois vivants (id, nom, prime) -----
  npcRoster() {
    return {
      t: 'npcRoster',
      list: this.npcs.filter(n => n && !n.dead).map(n => ({
        id: n.id, name: n.name, level: n.level, reward: n.reward, maxHp: n.maxHp
      }))
    }
  }

  sendNpcRoster() {
    if (this.net.isHost) this.net.sendEv(this.npcRoster())
  }

  sendNpcRosterTo(peerId) {
    if (this.net.isHost) this.net.sendEvTo(peerId, this.npcRoster())
  }

  // côté invité : crée/supprime les vois pour coller au roster de l'hôte
  _applyNpcRoster(list) {
    if (this.net.isHost) return
    const seen = new Set()
    let changed = false
    for (const r of list) {
      seen.add(r.id)
      let npc = this.npcs.find(n => n && n.id === r.id)
      if (!npc) {
        npc = new NpcBounty(this.scene, this.world, {
          name: r.name, level: r.level, reward: r.reward, id: r.id, maxHp: r.maxHp, remote: true
        })
        this.npcs.push(npc)
        changed = true
        this.hud.toast('Un voyou rôde dans le bassin : ' + r.name + '  (' + r.reward + ' ¢)')
      }
    }
    for (const n of this.npcs) {
      if (n && !seen.has(n.id)) { n.dispose(); changed = true }
    }
    if (changed) {
      this.npcs = this.npcs.filter(n => n && seen.has(n.id))
      this.refreshBounties()
    }
  }

  onNpcPunch(npc) {
    // le voyou frappe le joueur qu'il traque (hôte) : si c'est un joueur
    // distant, on lui transmet le coup, il s'inflige lui-même
    if (npc.curTarget && npc.curTarget !== 'self') {
      this.net.sendEvTo(npc.curTarget, { t: 'npcHitP', to: npc.curTarget, npcId: npc.id, dmg: npc.dmg })
    } else {
      this.player.damage(npc.dmg, 'npc:' + npc.id)
      this.hud.flashHit()
    }
  }

  spawnInk(pos, ownerId = this.net.selfId) {
    this.inkClouds.push(new InkCloud(this.scene, pos, ownerId))
    this.fx.inkBurst(pos.clone(), 10)
  }

  // ============================================================
  // ÉVÉNEMENTS RÉSEAU
  // ============================================================
  onEvent(ev, fromPeerId) {
    switch (ev.t) {
      case 'hit': {
        if (ev.to === this.net.selfId) {
          this.player.damage(ev.dmg, fromPeerId)
          this.hud.flashHit()
        }
        break
      }
      case 'shot': {
        const o = this._v1.set(ev.o[0], ev.o[1], ev.o[2])
        const d = this._v2.set(ev.d[0], ev.d[1], ev.d[2]).clone().normalize()
        const w = WEAPON_BY_ID[ev.w] || WEAPON_BY_ID.glock
        const wh = this.world.raycast(o, d, 70)
        const dist = wh ? wh.t : 40
        this.fx.tracer(o.clone(), d, dist, 0xfff1a8, w.id === 'sniper' ? 0.014 : 0.024)
        this.fx.impact(o.clone().addScaledVector(d, dist), 0xffd27a, 4)
        break
      }
      case 'ink': {
        this.spawnInk(new THREE.Vector3(ev.p[0], ev.p[1], ev.p[2]), fromPeerId)
        sfx.ink()
        break
      }
      case 'died': {
        const victim = this.remotes.get(ev.victim)
        if (victim) {
          this.fx.inkBurst(victim.position.clone(), 14)
          this.fx.popup(`${victim.name} a été liquidé !`, victim.position.clone().add(new THREE.Vector3(0, 1.2, 0)), { color: '#ff9a8a', ttl: 2.6 })
        }
        if (ev.killer === this.net.selfId) this._killCredit(ev.victim, null)
        break
      }
      case 'grab': {
        const f = this.fish.fish[ev.id]
        if (f) f.holder = 'net'
        break
      }
      case 'ate': {
        const f = this.fish.fish[ev.id]
        if (f) {
          f.alive = false
          f.holder = null
          f.mesh.visible = false
          if (this.net.isHost) f.respawnT = CFG.fish.respawnDelay
        }
        break
      }
      case 'npcHit': {
        // un invité a touché le voyou partagé : l'hôte applique les dégâts
        if (!this.net.isHost) break
        const npc = this.npcs.find(n => n && n.id === ev.id && !n.dead)
        if (npc) {
          npc.lastHitBy = fromPeerId
          npc.damage(ev.dmg)
        }
        break
      }
      case 'npcRoster': {
        // liste officielle des vois vivants (diffusée par l'hôte)
        this._applyNpcRoster(ev.list || [])
        break
      }
      case 'npcDied': {
        // le voyou partagé est tombé : effet + retrait chez tout le monde,
        // la prime va au vrai tueur (event.killer)
        const i = this.npcs.findIndex(n => n && n.id === ev.id)
        if (i < 0) break
        const npc = this.npcs[i]
        this.fx.inkBurst(npc.pos.clone(), 16)
        this.fx.popup('VOYOU ' + npc.name + ' neutralisé !', npc.pos.clone().add(new THREE.Vector3(0, 0.8, 0)), { color: '#ff9a8a', ttl: 2.4 })
        sfx.die()
        npc.dispose()
        this.npcs.splice(i, 1)
        const bt = this.bounties.find(b => b.npcRef === npc && b.status === 'alive')
        if (ev.killer === this.net.selfId) {
          // je suis le tueur : _killCredit encaisse la prime et marque 'done'
          this._killCredit(null, npc)
        } else {
          if (bt) bt.status = 'done'
          this._bountyTimers.push({ t: CFG.economy.bountyRefreshDelay, cb: () => this.refreshBounties() })
        }
        this.boards.markDirty()
        break
      }
      case 'npcHitP': {
        // le voyou partagé m'a frappé (je suis le joueur traqué)
        if (ev.to === this.net.selfId) {
          this.player.damage(ev.dmg, 'npc:' + (ev.npcId || 'npc'))
          this.hud.flashHit()
        }
        break
      }
    }
  }

  onPeerJoin(peerId) {
    if (this.remotes.has(peerId)) return
    const r = new RemotePlayer(this.scene, peerId, this, null)
    this.remotes.set(peerId, r)
    this.hud.toast('Un poulpe entre dans le bassin')
    sfx.coin()
    this.refreshBounties()
  }

  onPeerLeave(peerId) {
    const r = this.remotes.get(peerId)
    if (r) {
      r.dispose()
      this.remotes.delete(peerId)
      this.hud.toast('Un poulpe a quitté le bassin')
    }
    this.refreshBounties()
  }

  // ============================================================
  // AVIS DE RECHERCHE — affiches personnelles, cibles PARTAGÉES :
  // d'abord les vrais joueurs proches de mon niveau, puis le(s)
  // voyou(s) IA partagé(s) du bassin (les mêmes pour tout le monde).
  // ============================================================
  refreshBounties() {
    const eco = CFG.economy
    const list = []

    // d'abord les vrais joueurs proches de mon niveau (2 max :
    // on laisse une affiche au voyou partagé)
    const peers = [...this.remotes.values()]
      .filter(r => r.alive && r._hasState)
      .sort((a, b) => Math.abs(a.fish - this.player.fishCount) - Math.abs(b.fish - this.player.fishCount))
    for (const r of peers) {
      if (list.length >= 2) break
      const reward = Math.round((eco.bountyBase + r.fish / CFG.growth.levelPerFish * eco.bountyPerLevel + r.fish * eco.bountyPerFish) / 5) * 5
      list.push({ type: 'peer', id: r.id, name: r.name, level: Math.floor(r.fish / CFG.growth.levelPerFish) + 1, reward, status: 'alive', npc: false })
    }

    // puis le(s) voyou(s) IA partagé(s) — rares, donc parfois aucune affiche
    for (const npc of this.npcs) {
      if (list.length >= 3) break
      if (!npc || npc.dead) continue
      list.push({
        type: 'npc', id: npc.id, npcRef: npc, name: npc.name,
        level: npc.level, reward: npc.reward, status: 'alive', npc: true
      })
    }
    this.bounties = list
    this.boards.markDirty()
  }

  trackBounty(idx) {
    const bt = this.bounties[idx]
    if (!bt || bt.status !== 'alive') return
    let pos = null
    if (bt.type === 'peer') {
      const r = this.remotes.get(bt.id)
      if (r) pos = r.position.clone()
    } else if (bt.npcRef) {
      pos = bt.npcRef.pos.clone()
    }
    if (pos) {
      this.fx.popup('CIBLE : ' + bt.name, pos.add(new THREE.Vector3(0, 0.8, 0)), { color: '#ffd166', ttl: 2.2 })
      sfx.ui()
    }
  }

  _killCredit(victimId, npcRef) {
    const eco = CFG.economy
    const bt = npcRef
      ? this.bounties.find(b => b.npcRef === npcRef && b.status === 'alive')
      : this.bounties.find(b => b.type === 'peer' && b.id === victimId && b.status === 'alive')
    if (bt) {
      this.player.money += bt.reward
      this.hud.toast('PRIME ENCAISSÉE : ' + fmtMoney(bt.reward) + '  (' + bt.name + ')')
      sfx.fanfare()
      bt.status = 'done'
      this._bountyTimers.push({ t: eco.bountyRefreshDelay, cb: () => this.refreshBounties() })
    } else {
      this.player.money += eco.killBonus
      this.hud.toast('Élimination ! +' + eco.killBonus + ' ¢')
    }
    this.player.persist()
    this.net.sendMeta()
    this.boards.markDirty()
  }

  // mort d'un vois partagé (côté hôte — les invités passent par l'event npcDied)
  _npcDied(npc) {
    const i = this.npcs.indexOf(npc)
    if (i >= 0) this.npcs.splice(i, 1)
    npc.dispose()
    if (!this.net.isHost) return // sécurité : un invité ne devrait jamais ici

    this.fx.inkBurst(npc.pos.clone(), 16)
    this.fx.popup('VOYOU ' + npc.name + ' neutralisé !', npc.pos.clone().add(new THREE.Vector3(0, 0.8, 0)), { color: '#ff9a8a', ttl: 2.4 })
    sfx.die()
    // la prime revient au DERNIER tireur (hôte ou invité)
    const killer = npc.lastHitBy || 'host'
    if (killer === 'host') {
      this._killCredit(null, npc) // programme déjà le rafraîchissement des affiches
    } else {
      const bt = this.bounties.find(b => b.npcRef === npc && b.status === 'alive')
      if (bt) bt.status = 'done'
      this._bountyTimers.push({ t: CFG.economy.bountyRefreshDelay, cb: () => this.refreshBounties() })
    }
    this.net.sendEv({ t: 'npcDied', id: npc.id, killer })
    this.sendNpcRoster()
    // rare : le prochain voyou n'arrivera qu'après un délai aléatoire
    this._npcRespawnT = rand(CFG.npc.respawnMin, CFG.npc.respawnMax)
  }

  tryBuy(id) {
    const ok = this.player.buyWeapon(id)
    if (ok) {
      this.hud.toast('Arme achetée : ' + WEAPON_BY_ID[id].name)
      this.boards.markDirty()
    }
  }
}
