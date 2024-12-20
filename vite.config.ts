import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import checker from "vite-plugin-checker";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    checker({
      // e.g. use TypeScript check
      typescript: true,
    }),
  ],
  resolve: {
    alias: {
      src: "/src",
    },
  },
  server: {
    host: true,
    port: 5173,
    strictPort: true,
  },
  build: {
    target: "esnext",
  },
});
