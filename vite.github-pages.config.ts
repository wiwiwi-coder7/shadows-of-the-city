import path from "node:path";
import fs from "node:fs";
import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/shadows-of-the-city/",
  define: { "import.meta.env.VITE_STATIC_RUNTIME": JSON.stringify("true") },
  plugins: [react(), tailwindcss(), {
    name: "github-pages-index-name",
    closeBundle() {
      const output = path.resolve(import.meta.dirname, "dist", "github-pages");
      fs.renameSync(path.join(output, "index.github-pages.html"), path.join(output, "index.html"));
    },
  } satisfies Plugin],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
    },
  },
  root: path.resolve(import.meta.dirname, "client"),
  publicDir: false,
  preview: {
    host: true,
    allowedHosts: ["4173-ism9jhcvmk1rkssvmqlvj-04f68d10.us2.manus.computer", ".manus.computer", ".manuspre.computer", "localhost", "127.0.0.1"],
  },
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/github-pages"),
    emptyOutDir: true,
    rollupOptions: { input: { index: path.resolve(import.meta.dirname, "client", "index.github-pages.html") } },
  },
});
