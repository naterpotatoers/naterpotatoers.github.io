import defaultTheme from "tailwindcss/defaultTheme";
import typography from "@tailwindcss/typography";
import daisyui from "daisyui";
import daisyuiThemes from "daisyui/src/theming/themes";

const sharedThemeTokens = {
  "--rounded-box": "1rem",
  "--rounded-btn": "0.5rem",
  "--rounded-badge": "1.9rem",
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  daisyui: {
    themes: [
      {
        lofi: {
          ...daisyuiThemes["lofi"],
          ...sharedThemeTokens,
        },
        black: {
          ...daisyuiThemes["black"],
          ...sharedThemeTokens,
          secondary: "#e5e5e5",
        },
      },
    ],
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [typography, daisyui],
};
