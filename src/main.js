// ============================================================
// main.js — écran titre, démarrage VR / bureau
// ============================================================
import { Game } from './core/Game.js'
import { sfx } from './sfx.js'
import { sanitizeName, randomName, loadSave } from './utils.js'
import { CFG } from './config.js'

const $ = (id) => document.getElementById(id)

// support WebXR ?
let xrSupported = false
if (navigator.xr && navigator.xr.isSessionSupported) {
  navigator.xr.isSessionSupported('immersive-vr').then(ok => {
    xrSupported = ok
    $('btn-vr').disabled = !ok
    $('btn-vr').textContent = ok ? 'PLONGER EN VR' : 'VR INDISPONIBLE ICI'
  }).catch(() => {})
}

// pseudo par défaut depuis la sauvegarde
const save = loadSave(CFG.save)
$('name').value = (save && save.name) || randomName()
// salle depuis l'URL ?room=...
const urlRoom = new URLSearchParams(location.search).get('room')
if (urlRoom) $('room').value = urlRoom

let started = false

async function start(mode) {
  if (started) return
  started = true
  sfx.init()
  sfx.resume()
  if (CFG.fx.ambientSound) sfx.ambient()

  const name = sanitizeName($('name').value, randomName())
  const room = ($('room').value || CFG.net.room).trim().toLowerCase().replace(/[^a-z0-9_-]/g, '-') || CFG.net.room

  $('title').style.display = 'none'
  $('loading').style.display = 'flex'

  let session = null
  if (mode === 'vr') {
    try {
      session = await navigator.xr.requestSession('immersive-vr', {
        optionalFeatures: ['local-floor', 'bounded-floor', 'hand-tracking']
      })
    } catch (e) {
      started = false
      $('title').style.display = 'flex'
      $('loading').style.display = 'none'
      $('xr-error').textContent = 'Impossible de démarrer la VR : ' + (e.message || e)
      return
    }
  }

  const game = new Game(mode, name, room)
  if (session) {
    await game.renderer.xr.setSession(session)
  }
  $('loading').style.display = 'none'
  $('hud').style.display = mode === 'vr' ? 'none' : 'block'
  $('crosshair').style.display = mode === 'vr' ? 'none' : 'block'

  // Entrer dans le bassin = pointer lock en mode bureau
  if (mode === 'desktop') {
    game.renderer.domElement.requestPointerLock?.()
    game.hud.toast('Bienvenue dans le bassin, ' + name + ' !', 4000)
  } else {
    game.hud.toast('Bienvenue dans le bassin, ' + name + ' !', 4000)
  }
}

$('btn-vr').addEventListener('click', () => start('vr'))
$('btn-desktop').addEventListener('click', () => start('desktop'))
$('btn-mute').addEventListener('click', () => {
  sfx.init()
  const m = sfx.toggleMute()
  $('btn-mute').textContent = m ? 'SON : OFF' : 'SON : ON'
})
