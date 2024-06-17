/// <reference types="vitest" />
import { defineConfig } from "vite";
import svgLoader from "vite-svg-loader";

export default defineConfig({
  test: {
    setupFiles: ["./vitest-setup.ts"],
    environment: "jsdom",
  },
  plugins: [
    svgLoader({
      defaultImport: "raw",
    }),
  ],
});
