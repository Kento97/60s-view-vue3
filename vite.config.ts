import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    port: 3333,
    proxy: {
      '/api': {
        target: 'https://kento97-news.deno.dev/', 
        secure: false, // set https
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '/api')
      },
    }
  },
})
