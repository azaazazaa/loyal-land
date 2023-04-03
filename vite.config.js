import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": __dirname+"/src/",
    },
    extensions: [".js", ".vue"],
  },
  base: '/',
  plugins: [vue()]
})
