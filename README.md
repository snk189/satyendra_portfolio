# Satyendra Nayak K — Portfolio

A personal portfolio built with React, Vite, TypeScript, Tailwind CSS, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open the printed local URL (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview   # serve the production build locally
```

The build output goes to `dist/` — deploy that folder to any static host
(Vercel, Netlify, GitHub Pages, Cloudflare Pages, etc).

## Project structure

```
src/
  components/   reusable UI: navbar, cards, diagrams, modal, section heading
  sections/     one file per page section (Hero, About, Projects, ...)
  data/         all portfolio content — edit these to update copy, projects,
                skills, achievements, links, etc. without touching UI code
  hooks/        small reusable hooks (active section, theme, reduced motion)
  utils/        tiny shared helpers
```

## Updating content

Everything text-based lives in `src/data/`:

- `projects.ts` — project cards, tech stack, highlights, architecture diagrams.
  Replace the `github: "#"` placeholders with real repo URLs when ready.
- `nav.ts` — nav items and social links (GitHub, LinkedIn, email, phone).
- `interests.ts`, `stack.ts`, `leadership.ts`, `achievements.ts` — the
  corresponding sections.

## Notes

- Dark theme is the default; there's a light/dark toggle in the navbar.
- Respects `prefers-reduced-motion`.
- Fonts (Space Grotesk / Inter / JetBrains Mono) are loaded from Google
  Fonts in `index.html` — swap for self-hosted fonts if you want to drop
  that external request.
