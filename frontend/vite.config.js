import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: true, // Adicione isso para melhorar a resolução no Windows
    strictPort: true, 
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:5000', // Use o IP direto para evitar problemas de DNS interno
        changeOrigin: true,
        secure: false,
      }
    }
  }
})