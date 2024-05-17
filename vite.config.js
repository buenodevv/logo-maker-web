import path from "path"
import react from "@vitejs/plugin-react"
import { __dirname } from 'node:path'
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
