import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import electron from "vite-plugin-electron";
import { visualizer } from "rollup-plugin-visualizer"; // Для анализа бандлов

const isElectron = process.env.ELECTRON === "true";

export default defineConfig({
  plugins: [
    react(),
    ...(isElectron
      ? [
          electron({
            entry: "electron/main.ts",
          }),
        ]
      : []),
    visualizer({
      filename: "dist/bundle-stats.html",
      open: true,
    }),
  ],
  resolve: {
    alias: {
      "@app": path.resolve(__dirname, "./src/app"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@widgets": path.resolve(__dirname, "./src/widgets"),
      "@features": path.resolve(__dirname, "./src/features"),
      "@entities": path.resolve(__dirname, "./src/entities"),
      "@shared": path.resolve(__dirname, "./src/shared"),
    },
  },
  build: {
    outDir: "dist",
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes("node_modules")) {
            return "vendor";
          }

          if (id.includes("pages/")) {
            const pageName = id.split("pages/")[1].split("/")[0].toLowerCase();
            return `page-${pageName}`;
          }

          if (id.includes("widgets/")) {
            const widgetName = id
              .split("widgets/")[1]
              .split("/")[0]
              .toLowerCase();
            return `widget-${widgetName}`;
          }
        },
        chunkFileNames: "js/[name]-[hash].js",
        entryFileNames: "js/[name]-[hash].js",
        assetFileNames: "assets/[name]-[hash][extname]",
      },
    },
    ...(isElectron
      ? {
          emptyOutDir: true,
          minify: false,
        }
      : {}),
  },
});
