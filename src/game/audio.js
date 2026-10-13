// 程序化音频：不依赖外部音频文件，使用 Web Audio 合成长安氛围、音乐和交互音效。
import { store } from './store.js'

const AC = () => window.AudioContext || window.webkitAudioContext

export class AudioSystem {
  constructor() {
    this.ctx = null
    this.ready = false
    this.musicTimer = null
    this._uiPointer = (e) => {
      if (e.target.closest && e.target.closest('button:not(.shutter), .spawn-card, .lmi, .ph')) this.ui()
    }
  }

  unlock() {
    const AudioContext = AC()
    if (!AudioContext) return false
    if (!this.ctx) this.setup(new AudioContext())
    if (this.ctx.state === 'suspended') this.ctx.resume().catch(() => {})
    this.applySettings()
    return true
  }

  setup(ctx) {
    this.ctx = ctx
    this.master = ctx.createGain()
    this.musicGain = ctx.createGain()
    this.sfxGain = ctx.createGain()
    this.ambientGain = ctx.createGain()
    this.musicGain.connect(this.master)
    this.sfxGain.connect(this.master)
    this.ambientGain.connect(this.master)
    this.master.connect(ctx.destination)

    const n = Math.max(1, Math.floor(ctx.sampleRate * 2))
    this.noiseBuffer = ctx.createBuffer(1, n, ctx.sampleRate)
    const data = this.noiseBuffer.getChannelData(0)
    let last = 0
    for (let i = 0; i < n; i++) {
      last = last * 0.75 + (Math.random() * 2 - 1) * 0.25
      data[i] = last
    }

    this.rainGain = this.loopNoise('highpass', 1200)
    this.windGain = this.loopNoise('lowpass', 520)
    this.engineGain = ctx.createGain()
    this.engineGain.gain.value = 0
    const engine = ctx.createOscillator()
    engine.type = 'sawtooth'
    engine.frequency.value = 46
    const engineFilter = ctx.createBiquadFilter()
    engineFilter.type = 'lowpass'
    engineFilter.frequency.value = 170
    engine.connect(engineFilter).connect(this.engineGain).connect(this.ambientGain)
    engine.start()
    this.engine = engine

    document.addEventListener('pointerdown', this._uiPointer, true)
    this.ready = true
    this.startMusic()
  }

  loopNoise(type, freq) {
    const src = this.ctx.createBufferSource()
    const filter = this.ctx.createBiquadFilter()
    const gain = this.ctx.createGain()
    src.buffer = this.noiseBuffer
    src.loop = true
    filter.type = type
    filter.frequency.value = freq
    gain.gain.value = 0
    src.connect(filter).connect(gain).connect(this.ambientGain)
    src.start()
    return gain
  }

  applySettings() {
    if (!this.ctx) return
    const s = store.save.settings
    const t = this.ctx.currentTime
    const master = s.audio === false ? 0 : Math.max(0, Math.min(1, s.volume ?? 0.75))
    this.master.gain.setTargetAtTime(master, t, 0.04)
    this.musicGain.gain.setTargetAtTime(s.music === false ? 0 : 0.28, t, 0.1)
    this.sfxGain.gain.setTargetAtTime(s.sfx === false ? 0 : 0.9, t, 0.04)
    this.ambientGain.gain.setTargetAtTime(s.sfx === false ? 0 : 0.6, t, 0.1)
  }

  startMusic() {
    if (this.musicTimer) return
    const phrase = () => {
      if (!this.ctx || this.ctx.state !== 'running' || store.save.settings.audio === false || store.save.settings.music === false) return
      const root = 220
      const notes = [1, 1.5, 1.25, 2, 1.5, 1.25, 1, 0.75]
      const now = this.ctx.currentTime + 0.08
      notes.forEach((n, i) => this.pluck(root * n, 1.8, 0.045, now + i * 0.62))
      this.pluck(110, 4.2, 0.025, now)
      this.pluck(165, 3.4, 0.018, now + 2.5)
    }
    phrase()
    this.musicTimer = setInterval(phrase, 11500)
  }

  pluck(freq, dur = 0.5, gain = 0.08, at = null) {
    if (!this.ctx) return
    const t = at ?? this.ctx.currentTime
    for (const [mul, level] of [[1, 1], [2, 0.25], [3, 0.08]]) {
      const osc = this.ctx.createOscillator()
      const amp = this.ctx.createGain()
      osc.type = mul === 1 ? 'triangle' : 'sine'
      osc.frequency.setValueAtTime(freq * mul, t)
      osc.frequency.exponentialRampToValueAtTime(freq * mul * 0.992, t + dur)
      amp.gain.setValueAtTime(0.0001, t)
      amp.gain.exponentialRampToValueAtTime(gain * level, t + 0.012)
      amp.gain.exponentialRampToValueAtTime(0.0001, t + dur)
      osc.connect(amp).connect(this.musicGain)
      osc.start(t)
      osc.stop(t + dur + 0.05)
    }
  }

  tone(freq, dur = 0.15, gain = 0.1, type = 'sine', delay = 0) {
    if (!this.ctx || store.save.settings.audio === false || store.save.settings.sfx === false) return
    const t = this.ctx.currentTime + delay
    const osc = this.ctx.createOscillator()
    const amp = this.ctx.createGain()
    osc.type = type
    osc.frequency.setValueAtTime(freq, t)
    amp.gain.setValueAtTime(0.0001, t)
    amp.gain.exponentialRampToValueAtTime(gain, t + 0.008)
    amp.gain.exponentialRampToValueAtTime(0.0001, t + dur)
    osc.connect(amp).connect(this.sfxGain)
    osc.start(t)
    osc.stop(t + dur + 0.03)
  }

  noise(dur = 0.08, gain = 0.08, freq = 900, type = 'lowpass', delay = 0) {
    if (!this.ctx || store.save.settings.audio === false || store.save.settings.sfx === false) return
    const t = this.ctx.currentTime + delay
    const src = this.ctx.createBufferSource()
    const filter = this.ctx.createBiquadFilter()
    const amp = this.ctx.createGain()
    src.buffer = this.noiseBuffer
    filter.type = type
    filter.frequency.value = freq
    amp.gain.setValueAtTime(gain, t)
    amp.gain.exponentialRampToValueAtTime(0.0001, t + dur)
    src.connect(filter).connect(amp).connect(this.sfxGain)
    src.start(t)
    src.stop(t + dur + 0.03)
  }

  ui() {
    this.unlock()
    this.tone(420, 0.045, 0.035, 'square')
    this.tone(620, 0.035, 0.018, 'square', 0.035)
  }
  step(run = false) {
    this.noise(0.075, run ? 0.1 : 0.065, run ? 260 : 210)
    this.tone(run ? 82 : 68, 0.06, run ? 0.045 : 0.03, 'triangle')
  }
  jump() {
    this.tone(145, 0.18, 0.08, 'triangle')
    this.tone(230, 0.15, 0.045, 'sine', 0.04)
  }
  land() {
    this.noise(0.13, 0.13, 180)
    this.tone(58, 0.12, 0.08, 'sine')
  }
  shutter() {
    this.noise(0.045, 0.16, 1900, 'highpass')
    this.tone(180, 0.055, 0.11, 'square')
    this.tone(105, 0.09, 0.08, 'triangle', 0.06)
  }
  interact() {
    this.tone(330, 0.09, 0.075, 'triangle')
    this.tone(495, 0.13, 0.055, 'sine', 0.07)
  }
  discover() {
    ;[523, 659, 784, 1047].forEach((f, i) => this.tone(f, 0.42, 0.075, 'sine', i * 0.11))
  }
  purchase() {
    this.tone(880, 0.08, 0.07, 'square')
    this.tone(1175, 0.18, 0.075, 'sine', 0.09)
  }
  transport(kind = 'metro') {
    const base = kind === 'bus' ? 120 : kind === 'cruise' ? 96 : 170
    this.tone(base, 0.42, 0.09, 'sawtooth')
    this.tone(base * 1.5, 0.5, 0.05, 'triangle', 0.12)
  }
  weather(kind) {
    if (kind === 'rain' || kind === 'typhoon') this.noise(0.8, 0.06, kind === 'typhoon' ? 700 : 1200, 'bandpass')
    else this.tone(392, 0.35, 0.035, 'sine')
  }

  update({ weather = 'sunny', night = 0, speed = 0, ride = null } = {}) {
    if (!this.ctx) return
    const t = this.ctx.currentTime
    const raining = weather === 'rain' ? 0.22 : weather === 'typhoon' ? 0.34 : 0
    const wind = weather === 'typhoon' ? 0.18 : weather === 'cloudy' ? 0.045 : night > 0.55 ? 0.025 : 0.012
    const engine = ride === 'bus' ? 0.09 : ride === 'cruise' ? 0.055 : 0
    this.rainGain.gain.setTargetAtTime(raining, t, 0.35)
    this.windGain.gain.setTargetAtTime(wind, t, 0.7)
    this.engineGain.gain.setTargetAtTime(engine, t, 0.25)
    this.engine.frequency.setTargetAtTime(ride === 'bus' ? 48 + Math.min(10, speed) : 39, t, 0.2)
  }

  dispose() {
    document.removeEventListener('pointerdown', this._uiPointer, true)
    clearInterval(this.musicTimer)
    this.musicTimer = null
    if (this.ctx) this.ctx.close().catch(() => {})
    this.ctx = null
    this.ready = false
  }
}

export const audio = new AudioSystem()
