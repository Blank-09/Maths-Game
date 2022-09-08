import { defineConfig } from "vite";
import path from "path";
// import autoprifixer from "autoprefixer";
// import uncss from "postcss-uncss";

// const isProd = process.env.NODE_ENV === "production" || null;

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
  css: {
    // postcss: {
    //   plugins: [
    //     autoprifixer({ grid: "autoplace" }),
    //     uncss({
    //       html: [
    //         "./index.html",
    //         "./src/**/*.html",
    //         "./src/template/rankListTemplate.html",
    //       ],
    //     }),
    //   ],
    // },
  },
  server: {
    port: 8080,
    hmr: true,
  },
});
