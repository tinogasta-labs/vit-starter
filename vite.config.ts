import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { ViteMinifyPlugin as minify } from "vite-plugin-minify";
import compression from "vite-plugin-compression";

const DEFAULT_PORT = Number(process.env.PORT || 3000);

export default defineConfig({
  server: {
    port: DEFAULT_PORT,
  },
  preview: {
    port: DEFAULT_PORT,
  },
  build: {
    minify: "esbuild",
    sourcemap: false,
    target: "esnext",
  },
  plugins: [tailwindcss(), react(), minify(), compression()],
});
