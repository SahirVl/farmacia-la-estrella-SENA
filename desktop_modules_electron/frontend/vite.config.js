import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  base: './', // 👈 Esto es clave para Electron
server: {
  host: true,
  open: true,
  port:5173
}
})

