import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import mkcert from "vite-plugin-mkcert";

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [react(), tsconfigPaths(), mkcert()],
  assetsInclude: [
    "**/*.glb",
    "**/*.gltf",
    "**/*.txt",
    "**/*.xml",
    "**/*.glb",
    "**/*.aac",
    "**/*.opus",
    "**/*.mov",
    "**/*.m4a",
    "**/*.vtt",
    "**/*.woff",
    "**/*.woff2",
    "**/*.eot",
    "**/*.ttf",
    "**/*.otf",
    "**/*.webmanifest",
    "**/*.pdf",
    "**/*.txt",
  ],
  server: {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
        secure: false,
      },
    },
    https: true,
  },
});
