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
  plugins: [vue(
    {
      template: {
        transformAssetUrls: {
            // The Vue plugin will re-write asset URLs, when referenced
            // in Single File Components, to point to the Laravel web
            // server. Setting this to `null` allows the Laravel plugin
            // to instead re-write asset URLs to point to the Vite
            // server instead.
            base: '/vendor/landing/assets/',

            // The Vue plugin will parse absolute URLs and treat them
            // as absolute paths to files on disk. Setting this to
            // `false` will leave absolute URLs un-touched so they can
            // reference assets in the public directory as expected.
            includeAbsolute: false,
        },
      },
    }
  )],
  build: {
    assetsDir: 'vendor/landing/assets',
    outDir: '../core/public/vendor/landing',
  }
})
