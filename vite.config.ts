import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  base: process.env.VITE_DEPLOY_TARGET === 'render' ? '/' : '/Portfolio/',
  plugins: [react()],
})
