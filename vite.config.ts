import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ["4sklg6-5173.csb.app"], // ✅ allow CodeSandbox preview domain
  },
});
