import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  esbuild: {
    jsx: 'automatic', // Garante parse JSX consistente (evita erros em template literals)
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'lucide-react'], // Pré-otimiza deps para HMR suave
  },
  server: {
    port: 5173,
    open: true,
    hmr: {
      overlay: true, // Mantém o overlay de erros (útil para debug)
    },
  },
})
