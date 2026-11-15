import { defineConfig } from 'vite'

// base './' => le build marche partout : GitHub Pages (sous-chemin /poulpe-royale/),
// Vercel, Netlify, ou un simple serveur statique.
export default defineConfig({
  base: './',
  build: {
    target: 'es2022',
    chunkSizeWarningLimit: 2000
  },
  server: { host: true }
})
