import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    cssCodeSplit: true, // Separar CSS por chunks (ya está habilitado por defecto)
    minify: 'esbuild', // Minificar JS con esbuild (más rápido)
    cssMinify: true, // Minificar CSS (por defecto usa esbuild, que es eficiente)
  },
})
