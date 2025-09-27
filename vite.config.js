import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': '/src',
      '@components': '/src/components',
      '@composable': '/src/composable',
      '@store': '/src/store',
      '@assets': '/src/assets',
      '@views': '/src/views',
    }
  }
})
