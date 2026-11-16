// ============================================================
// POULPE ROYALE — configuration globale (équilibrage du jeu)
// Toutes les valeurs importantes sont ici : ajuste à ton goût.
// ============================================================

export const CFG = {
  // ---------- Bassin (aquarium) ----------
  tank: {
    w: 72,   // largeur  (axe X : -36 .. +36)
    d: 46,   // profondeur (axe Z : -23 .. +23)
    h: 22    // hauteur  (axe Y : 0 .. 22)
  },

  // ---------- Physique / nage ----------
  phys: {
    gravity: 2.1,        // gravité réduite (on est dans l'eau)
    drag: 1.35,          // traînée de l'eau (par seconde, exponentiel)
    swimGain: 0.42,      // poussée de réaction : bouger les mains = avancer
    pushGain: 0.85,      // poussée "Gorilla Tag" : se pousser sur une surface
    jetThreshold: 2.4,   // vitesse de main vers le bas (m/s) déclenchant la propulsion
    jetGain: 1.5,        // bonus de propulsion vers le HAUT (grands mouvements haut/bas)
    maxSpeed: 6.5,       // vitesse max BUREAU (m/s) avant bonus de croissance
    // Bonus de vitesse RÉSERVÉS AU CASQUE (WebXR) — le bureau garde maxSpeed :
    vrSwimMult: 2.7,     // x2.7 sur la poussée de nage aux mains
    vrPushMult: 2.2,     // x2.2 sur la poussée Gorilla Tag sur surfaces
    vrJetMult: 2.1,      // x2.1 sur le jet vertical
    vrMaxSpeed: 16,      // vitesse max en VR (m/s)
    bodyRadius: 0.4,     // rayon du corps (x échelle de croissance)
    handRadius: 0.07
  },

  // ---------- Tentacules ----------
  tent: {
    // principaux BUREAU : longues tentacules fluides (comportement validé)
    n: 14, segLen: 0.21, radius: 0.058,
    // principaux CASQUE : bras plus courts qui suivent les vraies mains
    vrN: 11, vrSegLen: 0.145,
    // PNJ : bras proportionnés au corps (l'auto-longueur les sécurise)
    npcN: 11, npcSegLen: 0.155,
    // auto-longueur : la chaîne s'étire/raccourcit selon la distance main-racine
    adaptiveMin: 0.34,   // raccourcissement max (x longueur au repos)
    adaptiveMax: 1.35,   // extension max (x longueur au repos)
    decoN: 13, decoSegLen: 0.19,         // décoratifs
    restZone: 0.3,       // (casque) main à moins de X m du corps -> tentacule pend
    restSpeed: 0.6,      // (casque) vitesse de main (m/s) considérée "au repos"
    hangFree: 0.5,   // distance main-racine sous laquelle le tentacule PEND librement (bureau)
    hangReach: 1.15, // distance à laquelle il est totalement tendu vers la main (bureau)
    hangSpeed: 1.8   // vitesse de main (m/s) qui force la poursuite de la main (bureau)
  },

  // ---------- Croissance (manger des poissons) ----------
  growth: {
    scalePerFish: 0.028,   // + taille par poisson
    scaleMax: 2.4,
    hpBase: 100,
    hpPerFish: 8,
    hpMax: 480,
    speedPerFish: 0.012,   // + vitesse par poisson (multiplicateur)
    speedMax: 1.45,
    dmgBase: 12,
    dmgPerFish: 1.6,
    healPerFish: 10,
    levelPerFish: 5,       // 1 niveau tous les 5 poissons
    // Capacités débloquées au nombre de poissons mangés :
    abilities: { doubleJump: 10, dash: 25, camo: 50 }
  },

  // ---------- Combat ----------
  combat: {
    punchSpeedMin: 3.2,    // vitesse du bout de tentacule (m/s) pour un coup
    punchCooldown: 0.45,
    punchRange: 1.2,       // portée du coup (m) depuis le bout
    inkHits: 3,            // nombre de coups reçus -> nuage d'encre
    inkWindow: 15,         // secondes pour cumuler ces coups
    regenDelay: 8,
    regenRate: 3
  },

  // ---------- Armes (prix croissants) ----------
  weapons: [
    { id: 'fists',   name: 'Poings',        price: 0,    dmg: null, rate: 0,     mag: 0,  reload: 0,   spread: 0,    auto: false },
    { id: 'glock',   name: 'Glock',         price: 500,  dmg: 16,   rate: 0.38,  mag: 12, reload: 1.6, spread: 0.015, auto: false },
    { id: 'uzi',     name: 'Uzi',           price: 1200, dmg: 10,   rate: 0.105, mag: 24, reload: 2.0, spread: 0.05,  auto: true },
    { id: 'sniper',  name: 'Sniper',        price: 2500, dmg: 65,   rate: 1.5,   mag: 5,  reload: 2.6, spread: 0.002, auto: false },
    { id: 'minigun', name: 'Mitrailleuse',  price: 5000, dmg: 13,   rate: 0.07,  mag: 60, reload: 3.4, spread: 0.045, auto: true }
  ],

  // ---------- Économie ----------
  economy: {
    startMoney: 150,
    killBonus: 25,          // petite prime de combat sur chaque élimination
    bountyBase: 200,        // prime de base d'un avis de recherche
    bountyPerLevel: 80,     // + par niveau de la cible
    bountyPerFish: 5,       // + par poisson mangé par la cible
    bountyRefreshDelay: 5   // délai avant une nouvelle affiche
  },

  // ---------- Capacités ----------
  abilities: {
    jumpImpulse: 3.6,     // saut propulsé (A / X)
    jumpRecharge: 2.2,    // délai de recharge d'une charge de saut
    dashSpeed: 9.5,       // dash (B / Y)
    dashCooldown: 2.5,
    camoDuration: 8,      // camouflage (stick droit cliqué)
    camoCooldown: 14,
    camoOpacity: 0.16
  },

  // ---------- Poissons ----------
  fish: {
    count: 34,
    cruiseSpeed: 0.85,
    fleeSpeed: 2.25,      // largement rattrapable maintenant
    fleeRadius: 1.45,     // t'aperçoit plus tard
    grabRadius: 1.05,     // rayon d'attrape (m) — généreux
    respawnDelay: 6
  },

  // ---------- Montre-boussole (VR) ----------
  watch: {
    touchRadius: 0.17,    // distance main -> montre pour l'activer
    cooldown: 0.7,        // anti-rebond au toucher
    panelDist: 1.45,      // distance du menu devant le joueur
    closeDist: 6          // le menu se ferme si on s'éloigne
  },

  // ---------- Encre ----------
  ink: {
    radius: 4.5,
    life: 8,
    npcBlindRadius: 6
  },

  // ---------- Réseau (Trystero / WebRTC, sans serveur) ----------
  net: {
    // Identifiant global unique de l'application (change-le si tu fais un fork public)
    appId: 'poulpe-royale.global.v1',
    // Salle mondiale par défaut (modifiable via ?room=nom dans l'URL)
    room: 'ocean-global',
    stateHz: 12,          // envoi de pose
    fishHz: 8,            // envoi des poissons (par l'hôte)
    // TURN optionnel pour les NAT stricts (laisser vide sinon).
    // Exemple : [{ urls: 'turn:ton-serveur.com:3478', username: 'x', credential: 'y' }]
    turn: []
  },

  // ---------- Divers ----------
  spawn: { x: 1, y: 4.6, z: 16.5 },  // face au commissariat (dépend de tank.d)
  invulnAfterDeath: 3,
  desktop: {
    speed: 4.2,           // vitesse nage clavier (mode bureau)
    sprintMult: 1.8
  },
  save: 'poulpe_save_v1'
}

// Raccourci : arme par id
export const WEAPON_BY_ID = Object.fromEntries(CFG.weapons.map(w => [w.id, w]))
