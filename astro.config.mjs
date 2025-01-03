import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";
import icon from "astro-icon";
import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";

import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  site: 'https://nate-garza.dev',
  integrations: [tailwind(), icon(), compress(), sitemap(), partytown({
    config: {
      forward: ['dataLayer.push'],
    }
  })]
});