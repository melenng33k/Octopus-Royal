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

  // ---------- Physique / déplacement ----------
  // DÉPLACEMENT GORILLA TAG (casque) : 100 % physique. On se pousse AVEC
  // LES MAINS sur les surfaces (sol, rochers, épave, parois). Tant qu'une
  // main touche une surface, la vitesse du corps = -(vitesse de la main
  // relative au corps). Main posée sans bouger = frein (on s'arrête net).
  // Main qui pousse fort = gros élan gardé après le décollage.
  // Aucune nage "dans le vide" : que du vrai contact, comme dans le jeu.
  phys: {
    gravity: 4.5,        // gravité marquée : on sent le poids sous l'eau
    fallCapVr: 4.6,      // vitesse de chute max CASQUE (m/s)
    fallCapDesktop: 0.8, // vitesse de chute max BUREAU (m/s)
    drag: 0.85,          // traînée de l'eau (quand on glisse sans contact) : glisse + loin
    gtGain: 1.5,         // force de la poussée Gorilla Tag : petit geste = grand déplacement
    contactRadius: 0.13, // rayon de détection main ↔ surface (généreux, anti-jitter)
    penFix: 1.0,         // correction anti-traversée : les mains bloquent le corps
    handRadius: 0.07,
    bodyRadius: 0.4,     // rayon du corps (x échelle de croissance)
    playerScale: 1.4,    // taille du joueur en casque : rig agrandi, on est plus grand que le décor
    launchHaptic: 0.55,  // vibration quand on décolle d'une surface avec de l'élan
    maxSpeed: 6.5,       // vitesse max BUREAU (m/s) avant bonus de croissance
    vrMaxSpeed: 18,      // vitesse max CASQUE (m/s) : élan Gorilla Tag amplifié
    hapticEnabled: true
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
    jumpImpulse: 4.6,     // DOUBLE SAUT propulsé (A / X) — marche aussi en pleine eau
    jumpRecharge: 1.5,    // délai de recharge d'une charge de saut
    dashSpeed: 9.5,       // dash (B / Y)
    dashCooldown: 2.5,
    camoDuration: 8,      // camouflage (stick droit cliqué)
    camoCooldown: 14,
    camoOpacity: 0.16
  },

  // ---------- Vois IA (avis de recherche) ----------
  // MONDE PARTAGÉ : les vois sont les mêmes pour TOUS les joueurs (l'hôte
  // simule et diffuse, les invités affichent). Bien plus rares qu'avant
  // (avant : 3 vois personnels par joueur, en permanence).
  npc: {
    maxActive: 1,        // voyous simultanés partagés dans tout le bassin
    firstSpawnDelay: 7,  // délai (s) avant le tout premier voyou
    respawnMin: 14,      // délai min (s) avant le prochain voyou après neutralisation
    respawnMax: 26       // délai max (s) : entre les deux, le bassin est calme
  },

  // ---------- Poissons ----------
  fish: {
    count: 38,           // dont 4 "grands hôtes" (requin, raie, dauphins) non attrapables
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
    npcHz: 8,             // envoi des vois IA partagés (par l'hôte)
    // TURN optionnel pour les NAT stricts (laisser vide sinon).
    // Exemple : [{ urls: 'turn:ton-serveur.com:3478', username: 'x', credential: 'y' }]
    turn: []
  },

  // ---------- Rendu / effets ----------
  fx: {
    outlines: true,        // liseré noir cartoon (rim fresnel dans les shaders)
    rim: {                 // réglage du liseré (voir core/Outline.js)
      str: 0.9,            // force du noir sur la silhouette (0..1)
      lo: 0.5,             // seuil bas : en dessous de cet angle, aucune trace
      hi: 0.92,            // seuil haut : au-delà, noir complet
      color: 0x05070c      // couleur du liseré (noir bleuté)
    },
    caustics: true,        // caustiques lumineuses animées sur le sable
    waterCeiling: true,    // surface d'eau ondulante au-dessus du bassin
    plankton: true,        // particules en suspension
    godRays: true,         // rayons de lumière
    shadows: true,         // ombres douces (soleil)
    toneMapping: true,     // ACES filmic + exposition cinéma
    ambientSound: true     // rumeur aquatique continue
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
