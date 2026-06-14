# farmanalytica.com.br

Vite + Vue 3 + TypeScript website for **FARM Analytica**, replacing the current
WordPress implementation of [farmanalytica.com.br](https://farmanalytica.com.br).

## Stack

- **Vite 6** + **Vue 3** (`<script setup>`, TypeScript)
- **vue-router** (history mode, SPA)
- Lightweight custom **i18n** (pt-BR default, en-US toggle) — see `src/i18n/`
- Plain global CSS design system in `src/styles/main.css` (shared design tokens,
  `.btn`, `.card`, `.step`, etc.) — same approach as the FARM tools site
- Deployed to **GitHub Pages** via `.github/workflows/deploy.yml`
  (`public/404.html` SPA redirect, `public/.nojekyll`)

## Deploy & base path

The workflow builds on every push to `main`. The base path is controlled by the
`VITE_BASE` **repository variable**:

| `VITE_BASE` | Result | URL |
| --- | --- | --- |
| unset / empty (default) | project subpath build | `https://farmanalytica.github.io/homesite/` |
| `/` | root build + auto-generated `CNAME` | `https://farmanalytica.com.br` |

All public asset paths resolve through `import.meta.env.BASE_URL` (`src/lib/asset.ts`),
so both modes work without code changes.

**Switch to the custom domain:**

```bash
gh variable set VITE_BASE --body "/"
# then configure DNS (A/ALIAS to GitHub Pages) and set the domain in repo Pages settings
```

Set it back to the subpath with `gh variable delete VITE_BASE`.

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
