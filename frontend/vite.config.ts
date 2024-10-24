import path from "path"
import react from "@vitejs/plugin-react"
// import eslint from 'vite-plugin-eslint';
import { defineConfig } from "vite"
 
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),  // Configure the @ alias to point to your src folder
    },
  },
})
