# POULPE ROYALE

**Jeu VR multijoueur en ligne (WebXR) : tu es un poulpe dans un aquarium géant.**
Nage avec tes mains façon Gorilla Tag, gobes des poissons pour grandir, traque les
avis de recherche du commissariat, encaisse les primes et achète des armes.
Après 3 coups reçus, tu relâches un nuage d'encre qui aveugle tes adversaires.

- Plateforme cible : **Meta Quest 2 / 3 / 3S** (navigateur du casque, WebXR) — et un
  **mode bureau** (clavier/souris) pour tester sans casque.
- Multijoueur : **P2P WebRTC sans serveur** (Trystero), salle mondiale partagée.
- Déploiement : **GitHub Pages** automatique à chaque `git push` (GitHub Actions inclus).

---

## Fonctionnalités

| Demande | Implémentation |
| --- | --- |
| Chaque main contrôle 1 tentacule avant | Tentacules physiques (chaînes Verlet) avec collision, 2x plus longs : pendent en suspension sous toi et s'étirent vers tes mains quand tu les bouges |
| Grands mouvements haut/bas = propulsion | Jet d'eau : main lancée vers le bas te propulse vers le haut |
| Déplacements réalistes type Gorilla Tag | Poussée de réaction aquatique + poussée sur les surfaces (murs, sol, rochers) — **bonus de vitesse x2-x3 réservé au casque** (le bureau garde ses réglages) |
| Poissons qui se baladent et t'évitent | IA errance + fuite douce : ils nagent lentement, t'aperçoivent tard et sont largement rattrapables (rayon d'attrape généreux) |
| Attraper à la gâchette puis manger | Gâchette (sans arme) ou gâchette latérale : saisir, re-presser : manger |
| Manger → grandir, vie, vitesse, dégâts | +1 poisson = taille, pv max, vitesse et dégâts de tentacule accrus |
| 3 avis de recherche de ton niveau | Panneau du commissariat : 3 affiches de joueurs proches de ton niveau, complétées par des « poulpes voyous » IA (avis personnel) |
| Tuer en tapant ou en tirant | Coups de tentacule à vitesse + tirs hitscan |
| Somme indiquée sur l'affiche | Prime en ¢ calculée sur le niveau de la cible, affichée et encaissée au kill |
| Armes de plus en plus chères | Glock 500 ¢ → Uzi 1200 ¢ → Sniper 2500 ¢ → Mitrailleuse 5000 ¢ (armurerie du commissariat **ou menu-montre**) |
| 3 coups reçus → nuage d'encre | Compteur HUD, encre automatique qui cache la vue des autres (et des vois IA) |
| Double saut, dash, camouflage | Débloqués à 10 / 25 / 50 poissons mangés |
| **Montre-boussole (VR)** | Accrochée à ta tentacule gauche : son aiguille pointe toujours vers le commissariat ; **touche-la pour ouvrir ton menu** (armurerie, son, téléport commissariat) |
| **Grand bassin** | Aquarium 72 × 46 × 22 m, décor densifié, brume adaptée |

## Jouer (Meta Quest)

1. Déploie le jeu (voir plus bas) ou ouvre une URL en **HTTPS**.
2. Sur la Quest : **Navigateur → va sur ton URL → bouton « PLONGER EN VR »**.
3. Accorde la permission de réalité immersive. C'est parti.

> WebXR et WebRTC exigent HTTPS : GitHub Pages, Vercel et Netlify le fournissent.

## Contrôles

### VR (Quest)

| Action | Entrée |
| --- | --- |
| Nager | Bouger les mains dans l'eau (bouger vite = aller vite) |
| Propulsion vers le haut | Grands mouvements de main de haut en bas |
| Se pousser (murs, sol) | Appuyer la main sur une surface et la pousser |
| Attraper un poisson / tirer | Gâchette index (sans arme : attraper ; avec arme : tirer) |
| Saisir / manger le poisson tenu | Gâchette latérale (grip) |
| Saut propulsé (x2 au niveau 10 poissons) | **A** ou **X** |
| Dash (25 poissons) | **B** ou **Y** |
| Camouflage (50 poissons) | **Stick droit cliqué** |
| Changer d'arme | Stick droit gauche/droite |
| Menus (avis de recherche, armurerie) | Viser le panneau + gâchette |
| **Ouvrir le menu personnel** | **Toucher la montre de ta tentacule gauche** (une main) |
| Se repérer | L'aiguille de la montre pointe vers le commissariat |

### Bureau (sans casque)

| Action | Entrée |
| --- | --- |
| Nager | **W A S D** (+ **Shift** sprint) |
| Monter / descendre | **Z** (ou Espace) / **C** |
| Tirer / coup de poing | Clic gauche (viser avec la souris) |
| Attraper / manger un poisson | **F** |
| Dash / Camouflage | **E** / **X** |
| Armes | **1** à **5** |
| Menus | Crosshair sur le panneau + clic |

## Déployer ton propre dépôt

### GitHub Pages (recommandé, 100 % gratuit)

```bash
# 1. Crée un dépôt vide sur github.com (ex : mon-poulpe-royale), puis :
cd poulpe-royale
git init
git add -A
git commit -m "Poulpe Royale - initial"
git branch -M main
git remote add origin https://github.com/<TON-COMPTE>/<TON-REPO>.git
git push -u origin main
```

2. Sur GitHub : **Settings → Pages → Build and deployment → Source : GitHub Actions**.
3. La workflow `.github/workflows/deploy.yml` construit et publie automatiquement à
   chaque push sur `main`.
4. Ton jeu est en ligne sur `https://<ton-compte>.github.io/<ton-repo>/`.

### Alternatives

- **Vercel** / **Netlify** : importe le dépôt, commande de build `npm run build`,
  dossier de sortie `dist`. Aucune config supplémentaire.

## Le multijoueur

- **P2P WebRTC** via [Trystero](https://github.com/dmotz/trystero) : aucune API, aucun
  serveur à gérer. Les navigateurs se découvrent via des relais Nostr publics puis
  jouent en direct.
- Salle mondiale par défaut : `ocean-global`. Tu peux tester un autre bassin avec
  l'URL `https://.../?room=mon-bassin` (utile pour une partie privée entre potes).
- L'hôte (le pair au plus petit identifiant) simule les poissons et diffuse leurs
  positions ; les dégâts sont validés par la victime ; le tir est visuel pour les autres.
- **NAT stricts** : le P2P peut échouer sans TURN. Ajoute tes serveurs TURN dans
  `src/config.js` (`net.turn`) — voir les commentaires dans le fichier.
- Le nombre de poissons, l'argent et les armes sont **sauvegardés localement**
  (localStorage) : ta croissance persiste entre les sessions.

## Développement

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # génère dist/
npm run preview    # sert dist/ en local
```

Tout l'équilibrage est dans **`src/config.js`** : physique de nage, croissance,
armes, primes, capacités, taille du bassin, réseau.

### Arborescence

```
src/
├── main.js              écran titre, démarrage VR / bureau
├── config.js            tout l'équilibrage
├── utils.js             utilitaires, sprites texte, sauvegarde
├── sfx.js               sons 100% procéduraux (WebAudio)
├── assets/
│   └── octo.glb         modèle de poulpe animé (tous les joueurs + vois)
├── core/
│   ├── World.js         aquarium : décor, collisions, raycast
│   ├── Player.js        ton poulpe : nage, croissance, armes, encre
│   ├── OctoModel.js     modèle GLB partagé : clones, teintes, anim de nage
│   ├── Tentacle.js      tentacules Verlet + collision + rendu tube
│   ├── Fish.js          banc de poissons + synchro hôte
│   ├── RemotePlayer.js  avatars des autres joueurs
│   ├── NpcBounty.js     vois IA des avis de recherche
│   ├── InkCloud.js      nuage d'encre
│   ├── Fx.js            traceurs, impacts, bulles, popups
│   └── Game.js          boucle de jeu, combat, primes, réseau
├── systems/
│   ├── Boards.js        commissariat, armurerie, panneau de stats
│   ├── WatchMenu.js     montre-boussole + menu personnel (VR)
│   ├── Hud.js           HUD poignet (VR) et HUD bureau
│   └── Weapons.js       modèles d'armes procéduraux
└── net/
    └── Network.js       Trystero : pose, poissons, événements, méta
```

## Dépannage

| Problème | Solution |
| --- | --- |
| « VR INDISPONIBLE » | Ouvre le site **dans le navigateur de la Quest**, en HTTPS |
| On ne se voit pas entre joueurs | Vérifie la même URL/salle ; NAT strict → ajoute TURN (`net.turn`) |
| Lags | Le P2P dépend des connexions ; rester dans la même région aide |
| Tu coules sans arrêt | Normal : tu es dans l'eau, remue les mains (ou Z/Espace en bureau) |
| Recomencer sa progression | Vide le localStorage du site |

## Notes de conception

- Anti-cheat : aucun (jeu entre amis, le client est de confiance).
- Les vois IA des avis de recherche sont des cibles **personnelles** (fantômes) :
  seuls toi et ton chasseur les voyez, ce qui garantit 3 primes disponibles même seul.
- Performance Quest : géométries fusionnées, modèle de poulpe optimisé (~38 k triangles,
  quantifié, ~1,4 Mo), pixel ratio limité — vise 72 Hz.
- La vitesse de nage aux mains est **amplifiée uniquement en casque** (`phys.vrSwimMult`,
  `vrPushMult`, `vrJetMult`, `vrMaxSpeed` dans `config.js`) ; le mode bureau n'est pas touché.

Licence : MIT — amuse-toi bien et partage tes améliorations.
