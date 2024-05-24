import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: true,
    port: 3000,
    strictPort: true,
    proxy: {
      '/png':'https://logoexpress.tubeguruji.com'
    },
    
  },
  preview: {
    host: '0.0.0.0',
    port: 8000,
  },
})
