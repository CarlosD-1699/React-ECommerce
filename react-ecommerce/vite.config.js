import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      // string shorthand
      "/foo": "http://localhost:5000",
      "/api": {
        target: "https://back-ecommerce-wu5w.onrender.com/",
        changeOrigin: true,
        secure: false,
      },
    },
  },
  plugins: [react()],
  base: "/React-ECommerce/",
});
