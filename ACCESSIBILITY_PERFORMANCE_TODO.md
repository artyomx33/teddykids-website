# Accessibility & Performance TODO
_Updated: 2025-07-18_

## 📊 Current Lighthouse Scores (Home page – mobile)
| Category | Score | Target |
|----------|-------|--------|
| Performance | **28–46** | 90+ |
| Accessibility | **60–78** | 95+ |
| Best-Practices | **68–82** | 90+ |
| SEO | **70–84** | 95+ |

---

## 🔥 High-Priority Tasks

### PERFORMANCE
- [ ] **Optimize Largest Contentful Paint (LCP)**
  - Pages: `app/page.tsx` (hero), `app/programs/page.tsx`, `app/locations/page.tsx`
  - Actions:  
    - Convert hero images in `/public/shared-images/*` to **WebP/AVIF**.  
    - Add `<link rel="preload" as="image" href="/shared-images/hero banner 1.webp">` in `app/layout.tsx`.  
    - Ensure `<Image>` props include `priority` for LCP element only.
  - Goal: LCP < **2.5 s**

- [ ] **Bundle / JS Payload Reduction**
  - Inspect dynamic imports in `components/*` and split heavy ones (`@heroicons`, `react-markdown`).
  - Remove unused deps in `package.json` (`moment.js`, legacy icon sets).
  - Enable `experimental.optimizePackageImports = true` in `next.config.ts`.

- [ ] **Enable Brotli / Gzip compression**
  - Verify Vercel settings or add `compress: true` in `next.config.ts`.

### ACCESSIBILITY
- [ ] **Fix Color Contrast Site-wide**
  - Search for classes `text-gray-300`, `text-brand-yellow`, `opacity-60` in `app/**/*.{tsx,css}`.
  - Replace with accessible utilities (≥4.5:1): e.g. `text-gray-700`, `text-brand-yellow-dark`.
  - Adjust palette in `tailwind.config.ts` (`primary: '#B78A45'`, `background: '#FFFAF0'`).

- [ ] **Add Form Labels / ARIA**
  - Files:  
    - `app/contact/page.tsx`  
    - `app/apply/page.tsx`
  - Ensure each `<input>` & `<select>` has `<label htmlFor>` OR `aria-label`.
  - Add `aria-live="polite"` for form validation summaries.

### SEO
- [ ] **Meta Descriptions for Every Route**
  - Add `export const metadata` in each page file missing it. Length 110-150 chars, keyword-rich.

---

## 🔧 Medium-Priority Tasks

### PERFORMANCE
- [ ] Lazy-load below-the-fold images (`loading="lazy"`) across `app/**/*`.
- [ ] Audit third-party scripts; defer or remove (google maps embed placeholder).

### ACCESSIBILITY
- [ ] Add `focus-visible` ring utilities to interactive elements (`Button`, `Link` components).
- [ ] Replace text opacity utilities with solid colors + darker background overlays.

### BEST-PRACTICES
- [ ] Resolve console warnings:
  - Hydration mismatch in `app/apie/page.tsx`
  - Missing image files logged 404 in DevTools.

### SEO
- [ ] Ensure single `<h1>` per page (`app/programs/*` sub-pages currently duplicate).
- [ ] Add descriptive `alt` text & rename images (e.g. `/rbw front.png` → `rbw-location-front.jpg`).

---

## 🧩 Low-Priority / Nice-to-Have

- [ ] **Back/Forward Cache friendliness**
  - Avoid `router.refresh()` on simple links.
- [ ] **Set Lighthouse budgets in CI**
  - Add GitHub Action using `treosh/lighthouse-ci-action` with thresholds:
    - Performance ≥70, LCP ≤2.5 s, TBT ≤300 ms.
- [ ] **Schema.org JSON-LD**
  - Add `Organization` & `LocalBusiness` markup in `app/layout.tsx`.
- [ ] **Figma Contrast Grid**
  - Create grid to validate all brand colors before final QA.

---

## 📅 Suggested Sprint Order
1. LCP image & compression fixes  
2. Color-contrast refactor (affects many styles)  
3. Meta descriptions + titles  
4. Bundle & console clean-up  
5. Form accessibility & focus states  
6. Remaining SEO / schema / CI budgets  

Track progress with PR labels: `perf`, `a11y`, `seo`, `cleanup`.  
Aim for **Lighthouse 90+** across all categories by end of sprint.  
