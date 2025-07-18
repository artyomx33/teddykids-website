# Teddy Kids Website • Development Guide

_Last updated: July 18, 2025 – reflects all optimizations since **appiesGPT**_

---

## 1. OVERVIEW  
• **Purpose** – Ensure every future change preserves performance, accessibility, and code quality.  
• **Current scores** – Lighthouse Performance **87/100**, SEO **100/100**, A11y **98/100**.  
• **Tech stack** – Next.js 14 (App Router), TypeScript, Tailwind CSS, Vercel.

---

## 2. PERFORMANCE OPTIMIZATIONS IMPLEMENTED

| Phase | Focus | Key Techniques | Impact |
|-------|-------|----------------|--------|
| 1 | LCP (Hero) | `priority`, `sizes`, image preload, mobile-specific video fallback | –2 s LCP |
| 2 | Lazy Loading | `loading="lazy"`, `fetchPriority="low"` for decorative imgs | 18 % ↓ data |
| 3 | Font & CSS | `next/font/google` with subset, purge unused Tailwind | 40 KB ↓ CSS |
| 4 | JS Splitting | Dynamic imports for heavy components | –12 KB initial JS |
| 5 | Caching | `Cache-Control`, `etag` on static assets | 100 % cache hits |
| 6 | Compression | Brotli + optimized PNG/WebP | Avg 38 % smaller imgs |

_Before_: Perf 66 / _After_: **87** (mobile throttled).

---

## 3. FILE STRUCTURE & ORGANIZATION

```
public/
  images/
    heroes/          ← page-level hero art (`team-hero.png`, `learning-hero.png`)
    team/            ← staff photos (`name.jpg`, `name 2.jpeg` for hover)
    learning/        ← screenshots & article thumbs
    characters/, locations/, programs/
components/
  sections/          ← large reusable page blocks
  ui/                ← small atomic UI pieces (Button, Tag…)
app/
  [route]/           ← server component by default
  [route]/Client.tsx ← client-side interactivity
```

Naming conventions  
• Kebab-case for folders, dash-separated descriptive file names (`team-hero.png`).  
• Alternate/hover images suffixed with `" 2"` (legacy) or `-alt` (new).  
• **Test files** – `ComponentName.test.tsx` for React components,  
  `myFunction.test.ts` for utility helpers (placed in `__tests__/`).

---

## 4. IMAGE OPTIMIZATION 🖼️

1. Always import via **`next/image`**.  
2. Above-the-fold → `priority`, `sizes`, and explicit `alt`.  
3. Below-the-fold → `loading="lazy"` **AND** `fetchPriority="low"`.  
4. Serve PNG / JPEG only if transparency required; otherwise use WebP.  
5. Keep hero widths ≤ 2200 px; thumbnails ≤ 600 px.  
6. Store page heroes inside `/public/images/heroes/` to keep root clean.
7. **Match visual branding** – artwork and photo-grading should align with
   current brand guidelines (see `/public/images/branding/` or consult design lead).

_Example:_

```tsx
<Image
  src="/images/heroes/team-hero.png"
  alt="Teddy Kids team smiling in the garden"
  fill
  priority
  sizes="(max-width:768px) 100vw, (max-width:1280px) 80vw, 1280px"
/>
```

---

## 5. SEO & METADATA

• Every route exports **`generateMetadata()`** server side.  
• Titles < 60 chars, descriptions < 155 chars, primary keyword first.  
• Open Graph images in `/public/og/…`.  
• JSON-LD for organisation & article pages (see `app/about/schema.ts`).  
• Breadcrumbs added via `@/components/BreadcrumbJsonLd`.

---

## 6. COMPONENT ARCHITECTURE

| Type | When to use | Notes |
|------|-------------|-------|
| **Server** (default) | Static or data-fetching content | Fast, streamed, no JS bloat |
| **Client** (`'use client'`) | State, event handlers, `useEffect` | Keep light; split per feature |
| Hybrid | Page + `PageClient.tsx` | Pattern used on Learning page |

Guidelines  
• Never mark entire page client-side unless unavoidable.  
• Use React hooks only inside client components.

---

## 7. CODE QUALITY & BEST PRACTICES

• **TypeScript strict** – no `any`, enable in `tsconfig`.  
• Centralised translations via `useTranslation(language)`.  
• **Accessibility**: labels on all inputs, alt text, color-contrast > 4.5 : 1, focus styles.  
• ESLint + Prettier pre-commit hook (`husky`).  
• Unit tests in `/__tests__/` with Jest & React Testing Library.
• **GPT validation** – When committing AI-generated code, run through the
  “GPT Checklist” in `QUICK_CHECKLIST.md` to confirm image rules, i18n,
  dependency weight, and component type are correct.

---

## 8. THINGS TO WATCH OUT FOR ⚠️

1. **Large images checked-in** – run `npm run img:opt`.  
2. **Missing `sizes`** on hero images → LCP regression.  
3. Avoid client components importing heavy libs (chart.js) – use dynamic import.  
4. Translation key mismatch → build error.  
5. Tailwind class purge: only safelist if dynamic.  
6. Duplicate route metadata – causes SEO cannibalization.  

---

## 9. TESTING & DEPLOYMENT

1. `pnpm build && pnpm start` to test production build.  
2. Performance: Lighthouse CI (`npm run lhci`) – target ≥ 85 mobile.  
3. Vercel – push to `main` → production.  
4. Preview deployments on PR branches.  
5. Git workflow: `feat/…`, squash merge, conventional commits.
   *Examples:* `feat: add lazy-load to hero`, `fix: update hero alt text`,
   `docs: add development guide`, `perf: reduce bundle size`.

---

## 10. FUTURE IMPROVEMENTS

| Area | Idea |
|------|------|
| Core Web Vitals | Replace heavy character PNGs with SVGs or Lottie. |
| Images | Add AVIF generation pipeline. |
| PWA | Service-worker for offline nursery tour. |
| Monitoring | Integrate Vercel Web Vitals + Sentry. |
| Docs | Storybook for components, visual regression tests. |

---

**Remember:** Before committing — run `npm run check` (type, lint, test) **and** verify Lighthouse CLI ≥ 85.  
Welcome aboard & build brilliantly! 🎉

---

## AT-A-GLANCE SUMMARY

| Element          | Status  | Notes                                   |
|------------------|---------|-----------------------------------------|
| Clarity          | ✅ Good | Step-by-step sections & examples        |
| Performance      | ✅ 87   | 6-phase optimisation documented         |
| SEO              | ✅ 100  | Metadata & JSON-LD covered              |
| A11y             | ✅ 98   | Colour-contrast & ARIA guidelines       |
| AI Readiness     | ✅ Yes  | GPT checklist & validation workflow     |
