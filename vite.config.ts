import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // GitHub Pages sirve el sitio en /Ponentes-gob/
  base: '/Ponentes-gob/',
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
})
