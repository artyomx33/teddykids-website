# 🛠️ TESTING-DEVELOPMENT_GUIDE.md

A practical handbook for shipping fast, accessible, **server-first** features on the Teddy Kids website.

---

## 1 · Tech Stack

| Layer | Lib / Runtime | Why we picked it |
|-------|---------------|------------------|
| Rendering | **Next.js 14 App Router** (Edge & Node targets) | Hybrid SSR / SSG with file-system routing |
| Language | **TypeScript** | Strict, autocompletion, zero `any` policy |
| Styling | **Tailwind CSS** + PostCSS | Atomic CSS, no unused bytes via `@next/font` pruning |
| Data | **Prisma** + PlanetScale | Typed SQL, instant branching |
| Images | **next/image** + `@vercel/og` | Automatic AVIF/WebP & social cards |
| Auth | **NextAuth v5** | Session & JWT flavours |
| AI Helpers | OpenAI / Factory SDK | Content QA, translation, micro-copy |
| Testing | Vitest · Testing Library · Axe | Unit, component, a11y smoke |
| CI/CD | GitHub Actions → Vercel | PR previews, LHCI budgets, URL-level tracing |

> Default assumption: every new page is a **server component** rendered at the edge **unless** it truly needs client interactivity.

---

## 2 · SSR-first Architecture

### 2.1 Pattern: Server Component Page  

```tsx
// app/[locale]/about/page.tsx
import { getCopy } from '@/lib/i18n';

export default async function AboutPage({ params }) {
  const t = await getCopy('about', params.locale);
  return (
    <main className="prose">
      <h1>{t('title')}</h1>
      {/* purely static / streamed HTML */}
    </main>
  );
}
```

• No `'use client'` at top.  
• Fetch inside the component or a colocated `loader.ts`.  
• **Edge runtime** by default → add `export const runtime = 'nodejs'` only for heavy libs.

### 2.2 Pattern: Island Component

```tsx
'use client';
import { useState } from 'react';

export function Carousel({ images }) {
  const [idx, setIdx] = useState(0);
  // hydration limited to this island
}
```

Place islands in `/components/client/`. Pass data from the server parent via props to avoid double fetch.

### 2.3 Anti-pattern: “Refactor to shared layout, accidentally client-side”

Adding `'use client'` to `layout.tsx` or high-level shared components forces **every child** to hydrate, killing perf & SEO.  
➡️ Instead, create a tiny client island and keep parent tree server-side.

---

## 3 · Performance Checklist 🏎️

Target numbers (Lighthouse mobile throttling):

| Metric | Budget |
|--------|--------|
| Performance | **≥ 85** |
| Largest Contentful Paint | ≤ 2.5 s |
| First Input Delay | ≤ 100 ms |
| CLS | ≤ 0.1 |
| TBT (CI) | ≤ 250 ms |
| Bundle Size (JS) | ≤ 150 kB per route (after gzip) |

Before merge:  

```bash
npm run lhci:local          # saves ./lhci-reports
open lhci-reports/index.html
```

CI fails if budgets breached. Fix tips:

• Move logic to server component  
• Lazy-load islands with `dynamic(() => import('./Map'), { ssr:false })`  
• Compress images (`npm run img:opt`)  
• Purge unused Tailwind via content globs

---

## 4 · Accessibility (A11y) ♿️

1. **Automated** – `npm run test:a11y` (Vitest + Axe) for each MDX page & component island.  
2. **Keyboard** – Tab through PR preview; all focus rings visible.  
3. **Screen reader smoke** – macOS VoiceOver: headings hierarchy, landmark regions, form labels.  
4. **Color contrast** – Figma plugin + Axe violations < **5** per page.

Common issues & fixes:

| Issue | Fix |
|-------|-----|
| Missing `alt` on `<Image>` | Provide meaningful text or `alt=""` if decorative |
| Low contrast on buttons | Use `bg-primary` + `text-white` Tailwind tokens |
| Improper heading order | `h1` once per page, increment sequentially |

---

## 5 · Refactor Warnings ⚠️

| Scenario | Danger | Safe approach |
|----------|--------|---------------|
| Moving logic from `page.tsx` to a shared component and adding `'use client'` | Entire route becomes client-side; drops perf 20-30 pts | Keep shared component **server** by default; create thin island if needed |
| Importing browser-only lib (e.g., `window.localStorage`) in server tree | Build fails or moves to client unexpectedly | Guard with `typeof window !== 'undefined'` in a client file |
| CSS extraction swap | Re-ordering Tailwind plugins can purge critical styles | Run visual regression in Percy before merge |

Remember: **Server-first** is not optional; it’s the backbone of our SEO & Core Web Vitals.

---

## 6 · Local DX Commands

| Command | What it does |
|---------|--------------|
| `npm run dev` | Next.js dev w/ Type-checker |
| `npm run type:strict` | `--noEmit` compile pass |
| `npm run lint:fix` | ESLint + Prettier autofix |
| `npm run test` | Vitest unit/component |
| `npm run test:a11y` | Axe accessibility smoke |
| `npm run lhci:local` | Lighthouse budgets |

---

## 7 · Appendix: File & Folder Conventions

```
app/                  # Route segments (server by default)
  (marketing)/        # Parallel segment for marketing pages
components/
  client/             # Islands marked 'use client'
  server/             # Pure server helpers (no React)
lib/                  # Non-React utilities, Prisma, i18n
public/images/        # Optimised assets
scripts/              # One-off CLIs (db seed, img optim)
```

Naming: `PascalCase.tsx` for components, `camelCase.ts` for utils.

---

### Changelog
* **v1.0 (Jul 20 2025)** – Initial Grok-enhanced guide: SSR-first patterns, perf & a11y budgets, refactor warnings.
