import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";

dotenv.config();

// https://vite.dev/config/
export default defineConfig({
  base: process.env.REPOSITORY_NAME ? `/${process.env.REPOSITORY_NAME}/` : "/",
  plugins: [react()],
});
