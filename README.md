# Nates Portfolio

Built using Astro, DaisyUI, and TailwindCSS. Deployed to GitHub Pages on push to `main`.

## Commands

| Command          | Action                                 |
| ---------------- | -------------------------------------- |
| `npm run dev`    | Start the dev server                   |
| `npm run build`  | Build the site to `dist/`              |
| `npm run check`  | Type-check and validate content schema |
| `npm run format` | Format with Prettier                   |

## Content

All copy lives in `src/content/` (schemas in `src/content/config.ts`). Entries in
`jobs`, `projects`, `education`, `books`, and `contact` are sorted by their `order` field.

Thanks to [mmouzo](https://github.com/mmouzo/astro-cv-esquelete) for the original template
