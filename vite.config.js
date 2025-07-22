import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['gsap-bonus/InertiaPlugin'],
  }
})// vite.config.ts
