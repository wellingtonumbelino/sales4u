import { defineConfig } from "vite";
import path from "path";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@components": path.resolve(__dirname, "src/components/views"),
      "@data": path.resolve(__dirname, "src/data"),
      "@layout": path.resolve(__dirname, "src/components/layout"),
      "@plugin": path.resolve(__dirname, "src/plugins"),
      "@template": path.resolve(__dirname, "src/components/templates"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@views": path.resolve(__dirname, "src/views"),
    },
  },
});
