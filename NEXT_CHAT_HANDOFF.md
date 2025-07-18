# NEXT_CHAT_HANDOFF.md

## 1. Project Status Summary
- TeddyKids website (Next 13 / App Router) running locally.
- Phase 2 completed: full Lighthouse CI audit across 12 routes.
- Audit reports stored in `.lighthouseci/` (JSON) + `lighthouse-audit-summary.md`.
- Critical accessibility, performance and SEO issues identified; no fixes applied yet.

## 2. How to Get Started
1. **Install & bootstrap**
   ```bash
   git clone <repo>
   cd teddykids-website
   npm install
   ```
2. **Run dev server**
   ```bash
   npm run dev          # starts on http://localhost:3000
   ```
3. **Run full Lighthouse audit**
   ```bash
   npm run lhci         # outputs to .lighthouseci/
   ```
4. **Open code**
   - Recommended VS Code workspace root = project folder.
   - Open the following files first (see section 5).

## 3. Current Setup
| Item | Detail |
|------|--------|
| **Node** | ≥18.x |
| **Dev Server** | `npm run dev` → `http://localhost:3000` |
| **Production Build** | `npm run build && npm run start` |
| **Linting** | `npm run lint` |
| **Lighthouse CI** | Script `npm run lhci` → uses `.lighthouserc.js` (Chrome flags + 12 URLs) |
| **Key Dev Deps** | `@lhci/cli`, `lighthouse`, `chrome-launcher`, Tailwind 4 |

## 4. Next Steps / Priority Actions
1. **Accessibility**
   - Fix WCAG color-contrast failures.
   - Align visible labels with `aria-label`/`alt`.
2. **SEO**
   - Add unique `<meta name="description">` per page.
3. **Performance**
   - Replace large `<img>` with `next/image` + lazy-load.
   - Minify/treeshake JS & CSS (verify in production build).
   - Add `preconnect` hints (`fonts.gstatic`, etc.).
4. **Best Practices**
   - Resolve console errors.
   - Remove blocking `beforeunload` listeners (bf-cache).
5. Re-run `npm run build && npm run lhci` after each batch; aim for ≥90 in all categories.

## 5. Key Files to Reference
- `package.json` – scripts, deps (`lhci`, `lint`, etc.).
- `.lighthouserc.js` – list of audited URLs & Chrome flags.
- `app/layout.tsx` – shared `<Head>`; add meta descriptions, preconnect.
- `app/**/page.tsx` – individual pages needing meta + content fixes.
- `components/*` – most styling / image components.
- `tailwind.config.js` & `app/globals.css` – colors; adjust for contrast.

## 6. Lighthouse Audit Status (dev build)
| Category | Worst Score | Typical |
|----------|-------------|---------|
| Performance | 28 | 28-46 |
| Accessibility | 60 | 60-78 |
| Best Practices | 68 | 68-82 |
| SEO | 70 | 70-84 |

Reports: `.lighthouseci/lhr-*.json` (one per route).  
High-level summary: `lighthouse-audit-summary.md`.

---

**Hand-off complete.** Open the project, start the dev server, and address items in section 4. Re-audit after each group of fixes.
