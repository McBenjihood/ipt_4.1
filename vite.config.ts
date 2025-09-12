import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/ipt_4.1/',
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  server: {
    proxy: {
      '/quotes': {
        target: 'https://zenquotes.io/api',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/quotes/, ''),
      },
    },
  }
})
