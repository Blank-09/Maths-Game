import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  root: path.resolve(__dirname, "src"),
  build: {
    assetsDir: "dist/assets/",
    outDir: __dirname,
  },

  resolve: {
    alias: {
      "@bootstrap": path.resolve(__dirname, "node_modules/bootstrap"),
    },
  },

  server: {
    port: 8080,
    hmr: true,
  },
});
