import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  root: "./docs",
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler",
      },
    },
  },
  build: {
    outDir: "../dist/docs",
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("react-syntax-highlighter")) {
            return "syntax-highlighter";
          }

          if (id.includes("react-router") || id.includes("@remix-run")) {
            return "router";
          }

          if (
            id.includes("react-dom") ||
            id.includes("react/jsx-runtime") ||
            id.includes("/react/")
          ) {
            return "react-vendor";
          }
        },
      },
    },
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "./docs"),
      "@components": resolve(__dirname, "./src/components"),
    },
  },
});
