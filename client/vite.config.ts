import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";

// Configures Vite to use the React plugin,
// sets the development server port,
// and specifies the output directory for the build.

dotenv.config();
const port = parseInt(process.env.PORT || "3000");

export default defineConfig({
  plugins: [react()],
  server: {
    port: port,
  },
  build: {
    outDir: "../client/dist",
  },
});
