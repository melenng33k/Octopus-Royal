// ============================================================
// Sons 100% procéduraux (WebAudio) — aucun fichier à héberger
// ============================================================
class Sfx {
  constructor() {
    this.ctx = null
    this.master = null
    this.muted = false
  }

  init() {
    if (this.ctx) return
    const AC = window.AudioContext || window.webkitAudioContext
    if (!AC) return
    this.ctx = new AC()
    this.master = this.ctx.createGain()
    this.master.gain.value = 0.5
    this.master.connect(this.ctx.destination)
    // buffer de bruit blanc réutilisable
    const len = this.ctx.sampleRate
    this.noiseBuf = this.ctx.createBuffer(1, len, this.ctx.sampleRate)
    const d = this.noiseBuf.getChannelData(0)
    for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1
  }

  resume() { if (this.ctx && this.ctx.state === 'suspended') this.ctx.resume() }
  toggleMute() { this.muted = !this.muted; if (this.master) this.master.gain.value = this.muted ? 0 : 0.5; return this.muted }

  _noise(dur, vol = 0.3, freq = 1200, type = 'lowpass', slideTo = null) {
    if (!this.ctx || this.muted) return
    const t = this.ctx.currentTime
    const src = this.ctx.createBufferSource()
    src.buffer = this.noiseBuf; src.loop = true
    const f = this.ctx.createBiquadFilter()
    f.type = type; f.frequency.value = freq
    if (slideTo) f.frequency.exponentialRampToValueAtTime(Math.max(40, slideTo), t + dur)
    const g = this.ctx.createGain()
    g.gain.setValueAtTime(vol, t)
    g.gain.exponentialRampToValueAtTime(0.001, t + dur)
    src.connect(f); f.connect(g); g.connect(this.master)
    src.start(t); src.stop(t + dur + 0.05)
  }

  _tone(freq, dur, { type = 'sine', vol = 0.25, slideTo = null, delay = 0 } = {}) {
    if (!this.ctx || this.muted) return
    const t = this.ctx.currentTime + delay
    const o = this.ctx.createOscillator()
    o.type = type; o.frequency.setValueAtTime(freq, t)
    if (slideTo) o.frequency.exponentialRampToValueAtTime(Math.max(20, slideTo), t + dur)
    const g = this.ctx.createGain()
    g.gain.setValueAtTime(vol, t)
    g.gain.exponentialRampToValueAtTime(0.001, t + dur)
    o.connect(g); g.connect(this.master)
    o.start(t); o.stop(t + dur + 0.05)
  }

  // --- Sons du jeu ---
  chomp() { this._tone(180, 0.18, { type: 'square', vol: 0.3, slideTo: 60 }); this._noise(0.12, 0.25, 500) }
  punch() { this._noise(0.14, 0.5, 300, 'lowpass', 120); this._tone(90, 0.12, { type: 'sine', vol: 0.4, slideTo: 45 }) }
  hurt() { this._tone(220, 0.2, { type: 'sawtooth', vol: 0.22, slideTo: 110 }) }
  die() { this._tone(160, 0.6, { type: 'sawtooth', vol: 0.3, slideTo: 40 }); this._noise(0.5, 0.3, 800, 'lowpass', 100) }
  coin() { this._tone(880, 0.09, { vol: 0.22 }); this._tone(1320, 0.14, { vol: 0.22, delay: 0.09 }) }
  ui() { this._tone(660, 0.05, { vol: 0.15 }) }
  buy() { this._tone(520, 0.08, { vol: 0.2 }); this._tone(780, 0.1, { vol: 0.2, delay: 0.08 }); this._tone(1040, 0.14, { vol: 0.2, delay: 0.16 }) }
  denied() { this._tone(180, 0.15, { type: 'square', vol: 0.2, slideTo: 120 }) }
  unlock() { [523, 659, 784, 1047].forEach((f, i) => this._tone(f, 0.16, { vol: 0.22, delay: i * 0.09 })) }
  ink() { this._noise(0.45, 0.4, 900, 'lowpass', 200); this._tone(70, 0.4, { type: 'sine', vol: 0.3, slideTo: 30 }) }
  jet() { this._noise(0.25, 0.18, 600, 'bandpass') }
  dash() { this._noise(0.3, 0.3, 1400, 'bandpass', 300); this._tone(300, 0.2, { vol: 0.15, slideTo: 900 }) }
  dryfire() { this._tone(900, 0.04, { type: 'square', vol: 0.12 }) }
  shoot(kind) {
    switch (kind) {
      case 'sniper': this._noise(0.35, 0.7, 2500, 'lowpass', 200); this._tone(140, 0.3, { vol: 0.4, slideTo: 50 }); break
      case 'minigun': this._noise(0.08, 0.4, 1800, 'lowpass', 500); this._tone(180, 0.05, { vol: 0.2 }); break
      case 'uzi': this._noise(0.06, 0.35, 2000, 'lowpass', 600); break
      default: this._noise(0.1, 0.45, 2200, 'lowpass', 400); this._tone(220, 0.06, { vol: 0.18 }) // glock
    }
  }
  impact() { this._noise(0.08, 0.2, 2500, 'highpass') }
  reload() { this._tone(500, 0.05, { type: 'square', vol: 0.12 }); this._tone(400, 0.05, { type: 'square', vol: 0.12, delay: 0.15 }) }
  grab() { this._tone(320, 0.1, { type: 'triangle', vol: 0.2, slideTo: 480 }) }
  fanfare() { [392, 523, 659, 784, 1047].forEach((f, i) => this._tone(f, 0.22, { vol: 0.2, delay: i * 0.11 })) }
}

export const sfx = new Sfx()
