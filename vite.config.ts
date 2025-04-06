import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import compression from 'vite-plugin-compression'
import { ViteMinifyPlugin as minify } from 'vite-plugin-minify'

// biome-ignore lint/nursery/noProcessEnv: get port from env
const DEFAULT_PORT = Number(process.env.PORT || 3000)

export default defineConfig({
  server: {
    port: DEFAULT_PORT,
  },
  preview: {
    port: DEFAULT_PORT,
  },
  build: {
    minify: 'esbuild',
    sourcemap: false,
    target: 'esnext',
  },
  plugins: [tailwindcss(), react(), minify(), compression()],
})
