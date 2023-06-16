import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@", replacement: path.resolve(__dirname, "src") },
      { find: "@styles", replacement: path.resolve(__dirname, "src/styles") },
      { find: "@components", replacement: path.resolve(__dirname, "src/components") },
      { find: "@assets", replacement: path.resolve(__dirname, "src/assets") },
      { find: "@layout", replacement: path.resolve(__dirname, "src/layout") },
      { find: "@context", replacement: path.resolve(__dirname, "src/context") },
      { find: "@hooks", replacement: path.resolve(__dirname, "src/hooks") },
      { find: "@template", replacement: path.resolve(__dirname, "src/template") },
      { find: "@icons", replacement: path.resolve(__dirname, "src/assets/Icons") },
      { find: "@utils", replacement: path.resolve(__dirname, "src/utils") },
    ],
  },
});
