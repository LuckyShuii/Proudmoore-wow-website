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
    host: '0.0.0.0', 
    watch: {
      usePolling: true, 
    },
    hmr: isProd ? false : { path: '/hmr', port: 7002 }, 
    allowedHosts: ['wildtransfer.fr']
  }
})