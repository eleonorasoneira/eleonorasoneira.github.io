// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

// https://eleonorasoneira.github.io
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [react()],
});
