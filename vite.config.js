import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import tailwindcss from '@tailwindcss/vite'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    babel({ presets: [reactCompilerPreset()] }),
    ViteImageOptimizer({
      png:  { quality: 80 },
      jpeg: { quality: 80 },
      jpg:  { quality: 80 },
      webp: { lossless: false, quality: 80 },
      svg:  { plugins: [{ name: 'preset-default' }] },
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          icons:  ['lucide-react'],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
})
