import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import { defineConfig, fontProviders } from "astro/config";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://nate-garza.dev",
  integrations: [icon(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  fonts: [
    {
      name: "Inter",
      cssVariable: "--font-inter",
      provider: fontProviders.fontsource(),
      weights: [300, 400, 700],
      styles: ["normal"],
    },
  ],
});
