import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const isProd = process.env.VITE_PROJECT_STATUS === 'PROD'

export default defineConfig({
  plugins: [vue()],
  resolve: { 
    alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) }
  },
  server: {
    host: '0.0.0.0',
    port: 5173,
    watch: { 
      usePolling: true,
      interval: 500
    },
    hmr: isProd ? false : { 
      port: 7002,
      host: '0.0.0.0'
    }
  }
})