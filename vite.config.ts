import { defineConfig } from 'vite';

export default defineConfig({
  // Basis-Konfiguration ohne PostCSS
  publicDir: 'public',
  build: {
    assetsInlineLimit: 0
  }
}); 