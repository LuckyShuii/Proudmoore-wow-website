import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const isProd = process.env.VITE_STATUS === 'PROD';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    host: true,
    port: 7002,
    strictPort: true,
    hmr: {
      protocol: 'wss',
      host: 'wildtransfer.fr',
      clientPort: 443,
    },
    origin: 'https://wildtransfer.fr'
  }
})