import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import tailwindcss from "@tailwindcss/vite";
import tsconfigpaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    preact({
      prerender: {
        enabled: true,
        renderTarget: "#app",
        additionalPrerenderRoutes: ["/404"],
        previewMiddlewareEnabled: true,
        previewMiddlewareFallback: "/404",
      },
    }),
    tailwindcss(),
    tsconfigpaths(),
  ],
});
