# farmanalytica.com.br

Vite + Vue 3 + TypeScript website for **FARM Analytica**, replacing the current
WordPress implementation of [farmanalytica.com.br](https://farmanalytica.com.br).

## Stack

- **Vite 6** + **Vue 3** (`<script setup>`, TypeScript)
- **vue-router** (history mode, SPA)
- Lightweight custom **i18n** (pt-BR default, en-US toggle) — see `src/i18n/`
- Plain global CSS design system in `src/styles/main.css` (shared design tokens,
  `.btn`, `.card`, `.step`, etc.) — same approach as the FARM tools site
- Deployed to **GitHub Pages** at the custom domain root (`public/CNAME`,
  `public/404.html` SPA redirect, `public/.nojekyll`)

## Develop

```bash
npm install
npm run dev        # local dev server
npm run typecheck  # vue-tsc --noEmit
npm run build      # type-check + production build to dist/
npm run preview    # preview the production build
```

## Structure

```
src/
  components/   SiteHeader, SiteFooter, SolutionCard
  data/         site.ts (contact constants), solutions.ts, posts.ts
  i18n/         index.ts + pt-BR.ts + en-US.ts
  pages/        HomePage, SolucoesPage, BlogPage, ContatoPage, PrivacidadePage
  router/       index.ts
  styles/       main.css
public/         logo.svg, logo-white.svg, farm_icon.svg, CNAME, 404.html
```

## Content status / TODO

- Logos in `public/` are **placeholder SVG wordmarks** — replace with official brand assets.
- Blog posts (`src/data/posts.ts`) link out to the existing WordPress articles;
  migrate post bodies in-app when ready.
- `PrivacidadePage.vue` holds **provisional** privacy text — replace with the
  official legal copy before launch.
- Pricing reflects the live site at scrape time (BASIC R$179,90 · PREMIUM R$479,90).
