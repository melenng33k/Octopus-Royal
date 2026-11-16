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
import { randomName, fmtMoney } from '../utils.js'

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
    this.npcs = []
    this.inkClouds = []
    this.bounties = []
    this.uiPointing = false
    this.uiClickRequested = false
    this._bountyTimers = []

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

    // vois IA (avis de recherche personnels)
    for (const npc of this.npcs) {
      if (!npc) continue
      npc.update(dt, time, this.player.bodyCenter.clone(), this.player.dead, this.inkClouds)
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

    // joueurs distants
    for (const r of this.remotes.values()) {
      if (!r.alive || !r._hasState) continue
      const t = this._raySphere(origin, dir, r.position, 0.55 * r.scale)
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
      } else {
        target.obj.damage(weapon.dmg)
        sfx.impact()
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

  // cible de coup de tentacule (bouts des bras)
  findPunchTarget(tip, range, attacker) {
    let best = null, bd = range
    for (const r of this.remotes.values()) {
      if (!r.alive || !r._hasState) continue
      const d = tip.distanceTo(r.position)
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
    } else {
      target.obj.damage(dmg)
      sfx.impact()
    }
  }

  onNpcPunch(npc) {
    this.player.damage(npc.dmg, 'npc:' + npc.id)
    this.hud.flashHit()
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
  // AVIS DE RECHERCHE (3 affiches, cibles de mon niveau)
  // ============================================================
  refreshBounties() {
    const eco = CFG.economy
    const myLevel = this.player.level
    const list = []

    // d'abord les vrais joueurs proches de mon niveau
    const peers = [...this.remotes.values()]
      .filter(r => r.alive && r._hasState)
      .sort((a, b) => Math.abs(a.fish - this.player.fishCount) - Math.abs(b.fish - this.player.fishCount))
    for (const r of peers) {
      if (list.length >= 3) break
      const reward = Math.round((eco.bountyBase + r.fish / CFG.growth.levelPerFish * eco.bountyPerLevel + r.fish * eco.bountyPerFish) / 5) * 5
      list.push({ type: 'peer', id: r.id, name: r.name, level: Math.floor(r.fish / CFG.growth.levelPerFish) + 1, reward, status: 'alive', npc: false })
    }

    // puis des "poulpes voyous" IA pour compléter jusqu'à 3
    while (list.length < 3) {
      const slot = list.length
      const existing = this.npcs[slot]
      if (existing && !existing.dead && existing.level >= myLevel - 2 && existing.level <= myLevel + 2) {
        list.push({
          type: 'npc', id: existing.id, npcRef: existing, name: existing.name,
          level: existing.level, reward: existing.reward, status: existing.dead ? 'done' : 'alive', npc: true
        })
      } else {
        const level = Math.max(1, myLevel + (Math.random() < 0.5 ? 0 : 1) - (Math.random() < 0.3 ? 1 : 0))
        const reward = Math.round((eco.bountyBase + (level - 1) * eco.bountyPerLevel) / 5) * 5
        const name = randomName() + '_V'
        const npc = new NpcBounty(this.scene, this.world, { name, level, reward })
        this.npcs[slot] = npc
        list.push({ type: 'npc', id: npc.id, npcRef: npc, name, level, reward, status: 'alive', npc: true })
      }
    }
    // retire les vois devenus inutiles
    for (let i = 0; i < this.npcs.length; i++) {
      if (this.npcs[i] && !list.some(b => b.npcRef === this.npcs[i])) {
        this.npcs[i].dispose()
        this.npcs[i] = null
      }
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

  _npcDied(npc) {
    this.fx.inkBurst(npc.pos.clone(), 16)
    this.fx.popup('VOYOU ' + npc.name + ' neutralisé !', npc.pos.clone().add(new THREE.Vector3(0, 0.8, 0)), { color: '#ff9a8a', ttl: 2.4 })
    sfx.die()
    npc.dispose()
    this.npcs = this.npcs.map(n => (n === npc ? null : n))
    this._killCredit(null, npc)
    this._bountyTimers.push({ t: CFG.economy.bountyRefreshDelay, cb: () => this.refreshBounties() })
  }

  tryBuy(id) {
    const ok = this.player.buyWeapon(id)
    if (ok) {
      this.hud.toast('Arme achetée : ' + WEAPON_BY_ID[id].name)
      this.boards.markDirty()
    }
  }
}
