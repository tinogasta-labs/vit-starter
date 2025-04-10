import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import compression from 'vite-plugin-compression'
import { ViteMinifyPlugin as minify } from 'vite-plugin-minify'
import tsconfigPaths from 'vite-tsconfig-paths'

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
    rollupOptions: {
      output: {
        manualChunks: id => {
          if (id.includes('react-router')) {
            return 'vendor-rr'
          }
          if (id.includes('react') && !id.includes('react-dom')) {
            return 'vendor-r'
          }
          if (id.includes('react-dom')) {
            return 'vendor-rd'
          }
          if (id.includes('node_modules')) {
            return 'vendor'
          }
          return null
        },
      },
    },
  },
  plugins: [tsconfigPaths(), tailwindcss(), react(), minify(), compression()],
})
