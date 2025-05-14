import { defineConfig as testConfig } from "vitest/config";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Vite configuration
const config = defineConfig({
  plugins: [react()],
  server: {
    open: true,
    port: 3000,
  },
});

// Vitest configuration
const tstConfig = testConfig({
  test: {
    environment: "jsdom",
    setupFiles: ["./src/setupTests.ts"],
    globals: true,
  },
});

// Merge configurations
export default {
  ...config,
  ...tstConfig,
};
