import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // allowedHosts: [
    //   "74fe-103-47-133-191.ngrok-free.app", // Add your Ngrok host here
    // ],
  },
  base: "/conceptTwo",
});
