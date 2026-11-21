// ============================================================
// Network — multijoueur P2P sans serveur (Trystero / WebRTC).
// - pose binaire à 12 Hz (tête, mains, arme, camouflage...)
// - poissons ET vois IA diffusés par l'hôte (le pair au plus petit id)
// - événements : coups, tirs, encre, morts, poissons attrapés,
//   dégâts aux vois, roster des vois, coups de vois reçus
// - méta : pseudo, poissons, argent (pour les primes)
// ============================================================
import { joinRoom } from 'trystero'
import { CFG } from '../config.js'

export class Network {
  constructor(game) {
    this.game = game
    this.room = null
    this.selfId = null
    this.connected = false
    this._stateAcc = 0
    this._fishAcc = 0
    this._npcAcc = 0
  }

  async connect(roomName) {
    const cfg = {
      appId: CFG.net.appId
    }
    if (CFG.net.turn && CFG.net.turn.length) cfg.turnConfig = CFG.net.turn
    try {
      this.room = joinRoom(cfg, roomName)
    } catch (e) {
      console.error('Trystero joinRoom:', e)
      this.game.hud.toast('Réseau indisponible : ' + e.message)
      return
    }
    const self = await this.room.getSelf()
    this.selfId = self.peerId
    this.connected = true
    this.roomName = roomName

    // --- actions ---
    this.poseA = this.room.makeAction('pose')
    this.fishA = this.room.makeAction('fish')
    this.npcA = this.room.makeAction('npc')
    this.evA = this.room.makeAction('ev')
    this.metaA = this.room.makeAction('meta')

    const toF32 = (data) => {
      if (data instanceof Float32Array) return data
      if (data && data.buffer) return new Float32Array(data.buffer, data.byteOffset, data.byteLength / 4)
      return null
    }

    this.poseA.onMessage((data, ctx) => {
      const r = this.game.remotes.get(ctx.peerId)
      const f32 = toF32(data)
      if (r && f32) r.applyState(f32)
    })

    this.fishA.onMessage((data) => {
      const f32 = toF32(data)
      if (f32) this.game.fish.decodeSync(f32)
    })

    // vois IA partagés : seul l'hôte diffuse (positions, vie, attaque)
    this.npcA.onMessage((data) => {
      const f32 = toF32(data)
      if (f32) this.game.decodeNpcs(f32)
    })

    this.evA.onMessage((data, ctx) => {
      if (data && typeof data === 'object') this.game.onEvent(data, ctx.peerId)
    })

    this.metaA.onMessage((data, ctx) => {
      const r = this.game.remotes.get(ctx.peerId)
      if (r) r.setMeta(data)
      this.game.refreshBounties()
    })

    // --- présence ---
    this.room.onPeerJoin(({ peerId }) => {
      this.game.onPeerJoin(peerId)
      this.sendMetaTo(peerId)
      // l'hôte envoie immédiatement l'état des poissons et le roster des
      // vois IA au nouveau venu
      if (this.isHost) {
        this.game.fishDirty = true
        this.game.sendNpcRosterTo(peerId)
      }
    }, { replay: true })

    this.room.onPeerLeave(({ peerId }) => {
      this.game.onPeerLeave(peerId)
    })

    this.room.onError((err) => {
      console.warn('Trystero error:', err && err.code || err)
    })

    // pose immédiate pour être visible tout de suite
    this._lastSent = 0
  }

  get peerCount() {
    if (!this.room) return 0
    const peers = this.room.getPeers()
    return peers ? Object.keys(peers).length : 0
  }

  get peerIds() {
    if (!this.room) return []
    const peers = this.room.getPeers()
    return peers ? Object.keys(peers) : []
  }

  // l'hôte = pair avec le plus petit id (moi inclus)
  get isHost() {
    if (!this.connected) return true // hors ligne : je simule tout
    const ids = this.peerIds.sort()
    return ids.length === 0 || this.selfId <= ids[0]
  }

  sendState(arr) {
    if (this.connected) {
      try { this.poseA.send(arr) } catch { /* pair absent */ }
    }
  }

  sendFish(arr) {
    if (this.connected) {
      try { this.fishA.send(arr) } catch { /* */ }
    }
  }

  sendNpc(arr) {
    if (this.connected) {
      try { this.npcA.send(arr) } catch { /* */ }
    }
  }

  sendEv(obj) {
    if (this.connected) {
      try { this.evA.send(obj) } catch { /* */ }
    }
  }

  // événement destiné à UN seul pair (ex. : coup de voyou reçu)
  sendEvTo(peerId, obj) {
    if (this.connected) {
      try { this.evA.send(obj, { target: peerId }) } catch { /* */ }
    }
  }

  _myMeta() {
    return { name: this.game.player.name, fish: this.game.player.fishCount, money: Math.round(this.game.player.money) }
  }

  sendMetaTo(peerId) {
    if (this.connected) {
      try { this.metaA.send(this._myMeta(), { target: peerId }) } catch { /* */ }
    }
  }

  sendMeta() {
    if (this.connected) {
      try { this.metaA.send(this._myMeta()) } catch { /* */ }
    }
  }

  update(dt, player) {
    if (!this.connected) return
    this._stateAcc += dt
    if (this._stateAcc >= 1 / CFG.net.stateHz) {
      this._stateAcc = 0
      this.sendState(player.encodeState())
    }
    // poissons + vois IA : uniquement l'hôte diffuse
    if (this.isHost) {
      this._fishAcc += dt
      if (this._fishAcc >= 1 / CFG.net.fishHz) {
        this._fishAcc = 0
        this.sendFish(this.game.fish.encodeSync())
      }
      this._npcAcc += dt
      if (this._npcAcc >= 1 / CFG.net.npcHz) {
        this._npcAcc = 0
        this.sendNpc(this.game.encodeNpcs())
      }
    }
  }

  async leave() {
    if (this.room) {
      try { await this.room.leave() } catch { /* */ }
      this.connected = false
    }
  }
}
