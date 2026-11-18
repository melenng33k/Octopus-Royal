# Crédits des modèles 3D

Tous les modèles ajoutés proviennent de bibliothèques **CC0 (domaine public)**,
utilisables librement, y compris commercialement, sans attribution obligatoire.

## Poissons — Quaternius (CC0)
- Source : https://quaternius.com — packs « Animated Fish » / « Cute Fish »
- Miroir utilisé : https://github.com/trebeljahr/quaternius-showcase (public/glb)
- Fichiers : q_cute_*.glb (Clownfish, BlueTang, Koi, Goldfish, CoralGrouper,
  Anglerfish, ButterflyFish, CardinalFish) et q_fish_*.glb (Fish1-3, Shark,
  Dolphin, Manta_ray)
- Animations incluses : nage (Swimming_Normal / Swimming_Fast / Swim)

## Épave de navire (galion) — Quaternius (CC0)
- Source : https://quaternius.com — pack « Pirate Kit » (novembre 2023),
  modèle « Sail ship », redistribué entre autres sur poly.pizza (CC0)
- Fichier : q_ship_sailship.glb (coque complète, 3 mâts, voiles et guidons)
- Conversion FBX → GLB (FBX2glTF), matériaux en couleurs pleines.
- L'épave est posée penchée et semi-enfoncée dans le sable ; teinte algue
  appliquée par le jeu.

## Props — Kenney (CC0)
- Source : https://kenney.nl/assets (kit « Pirate Kit », « Watercraft Pack »)
- Miroir utilisé : https://github.com/shorepine/kenney (3d/pirate, 3d/watercraft)
- Fichiers : k_pirate_chest.glb (coffre animé), k_pirate_barrel.glb,
  k_pirate_crate.glb, k_buoy.glb (bouée flottante)
- La texture colormap.png a été incorporée dans chaque .glb pour le bundling.
- (Les anciens « ship-wreck » et « rocks » de Kenney, à la géométrie cassée,
  ont été remplacés par le galion Quaternius et les rochers Polyfork.)

## Récif corallien — Polyfork (CC BY 4.0)
- Source : https://polyfork.dev — kit « Coral Reef » (54 pièces low-poly)
- Ligne de crédit officielle (par modèle) :
  `<a href="https://polyfork.dev/asset/{id}">{Nom}</a> by <a href="https://polyfork.dev">Polyfork</a>, CC BY 4.0`
- Fichiers utilisés (préfixe pf_) :
  - Rochers & matrices : pf_small-reef-rock-99062d, pf_encrusted-reef-boulder-972d95,
    pf_reef-rubble-terrain-blob-df5888, pf_coral-bommie-772b22, pf_coral-pinnacle-0d9756
  - Coraux : pf_brain-coral-head-7db21a, pf_lettuce-coral-e16e43, pf_mushroom-coral-a2906e,
    pf_pillar-coral-b6deba, pf_staghorn-coral-422d23, pf_soft-coral-tree-450af0,
    pf_table-coral-193fa6, pf_sea-fan-bafd49
  - Éponges (remplacent les anciens tuyaux) : pf_tube-sponge-df576b, pf_barrel-sponge-ab460c
  - Algues : pf_seagrass-tuft-862cc5, pf_broad-algae-frond-88a644, pf_sea-whip-e56668
  - Faune animée : pf_giant-clam-6408ba (Idle/React), pf_sea-anemone-9c2a94 (Idle/React),
    pf_sea-urchin-b599d4 (Idle/Crawl), pf_moon-jellyfish-0fa43c (Idle/Swim/Swim fast),
    pf_starfish-772749
- Utilisation : géométries cuites et fusionnées en 1-2 draw calls (statique),
  clones SkeletonUtils + AnimationMixer pour la faune.

## Poulpe — octo.glb
- Modèle « Baby Octopus » animé, déjà présent dans le projet d'origine.
