# 🚀 Teddy Kids 100/100 Lighthouse Optimization Plan
*Version 1.0 – 20 Jul 2025*

This roadmap merges Luna’s scorecard 🐺 and Grok’s legendary image refactor 🧠 into a single action plan to push **all routes to consistent 100/100 scores** (mobile & desktop).

| Phase | Effort | Goal | Expected Δ Perf | Δ A11y | Δ SEO | Δ BP |
|-------|--------|------|-----------------|--------|-------|------|
| 1 Quick Wins | 30-60 min | Fix low-hanging flags | +5-10 | +5 | +3 | +2 |
| 2 Polish Sprint | 1-2 h | CLS & LCP boost, form a11y | +10-15 | +5 | +4 | +2 |
| 3 Structural Refactor | 3-6 h | Centralised assets, schema, security | +5 | +5 | +6 | +4 |
| 4 Monitoring Loop | 1 h setup | Prevent score regressions | ↔︎ | ↔︎ | ↔︎ | ↔︎ |

---

## 📍 Current Baseline (mobile, homepage)

| Metric | Score |
|--------|-------|
| Performance | 95 |
| Accessibility | 92 |
| Best-Practices | 97 |
| SEO | 93 |

Biggest offenders: LCP ≈ 5.3 s (hero video), ~15 missing alt, minor color-contrast, no viewport meta (on some fallback pages).

---

## 🔥 Phase 1 – 30-60 min Quick Wins

| # | Task | Why / Impact | Steps & Code | Est. |
|---|------|--------------|-------------|------|
|1|Add `<meta name="viewport">`|Required for responsive rendering; Lighthouse “Viewport not set” flag.|`app/layout.tsx` inside `<head>`: `<meta name="viewport" content="width=device-width, initial-scale=1" />`|5 min|
|2|Label Inputs & Buttons|Missing `aria-label` reduces A11y.|Add `<label htmlFor>` on Apply & Contact forms; `<Button aria-label="Play Appies Welcome audio">`|15 min|
|3|Contrast Audit|2-3 low-contrast zones (yellow on white).|`tailwind.config` → adjust `brand-yellow` or add `focus-visible:outline`.|10 min|
|4|Mobile Lighthouse run|Confirm baseline & measure wins.|`npx lighthouse https://teddykids.nl --preset mobile --view`|5 min|
|5|Touch-target size|Buttons ≥ 44 px height to remove “tap targets too small”.|Add `py-3` on small buttons, ensure checkbox labels have extra padding.|10 min|

---

## 🛠️ Phase 2 – 1-2 hour Polish & Schema Push

| # | Task | Why / Impact | Steps / Snippet | Est. |
|---|------|--------------|-----------------|------|
|6|Hero Video → Poster + `priority` image|Video delays LCP; serve static hero poster first.|`<Image priority src={Images.heroes.journey.image} ... />` then lazy-load video (already partially done) – ensure `priority` only on home hero.|20 min|
|7|Image Dimensions + Lazy|Prevent CLS on all images.|Every `<Image>` must have `width` & `height` or `fill` + `sizes`. Use helper from Phase 3.|15 min|
|8|Axe-Driven A11y pass|Remaining missing alt / roles.|Run `npx @axe-core/cli https://...` fix outputs.|20 min|
|9|Structured Data for ContactPoint|SEO boost, resolves Lighthouse “Structured data” hint.|In `app/contact/page.tsx` head:```<script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({ "@context":"https://schema.org","@type":"ChildCare","name":"Teddy Kids","url":"https://teddykids.nl","contactPoint":[{ "@type":"ContactPoint","telephone":"+31-71-1234567","contactType":"customer service","areaServed":"NL"}]})}}/>```|20 min|

---

## 🧩 Phase 3 – 3-6 h Structural Improvements

### 3.1 Legendary Image Manifest

**Goal:** Zero missing alt, auto sizes, TS safety, CLS-free.

1. Replace current `lib/images.ts` with Grok’s **full metadata** version (see below).  
2. Create helper:

```ts
// lib/images.ts (excerpt)
export function getImageProps<C extends keyof Images, K extends keyof Images[C]>(
  category: C, key: K, overrides: Partial<ImageMetadata> = {}
) { return { ...IMAGES[category][key], ...overrides }; }
```

3. Refactor components:

```tsx
import { getImageProps } from '@/lib/images';
<Image {...getImageProps('learning','pleaseLanguages')} />
```

4. **Automation:** `scripts/generate-images.ts` scans `/public/images/**` and outputs missing metadata placeholders.

*Impact:* CLS → 0, alt coverage 100 %, +4 Perf, +6 A11y, +3 SEO.

### 3.2 Invisible reCAPTCHA v3

1. Register domain, obtain keys.  
2. `npm i react-google-recaptcha-v3`  
3. Wrap Apply & Contact forms:

```tsx
import { GoogleReCaptchaProvider, useGoogleReCaptcha } from 'react-google-recaptcha-v3';
...
 <GoogleReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_KEY}>
   <ContactForm/>
 </GoogleReCaptchaProvider>
```

*Impact:* Best-Practices +2 (no-captcha warning).

### 3.3 Additional Schemas

- `LocalBusiness` for each `/locations` section.  
- `Course` for `/programs/*`.  
- Dynamic JSON-LD components.

### 3.4 Internal Linking Pass

- Add `<Link>` from hero CTA to `/programs`.  
- From Learning Moments blog to `/apply`.

*SEO +3.*

---

## 📈 Phase 4 – Monitoring & Continuous Improvement

1. **Vercel Analytics + Alerts**  
   - Enable “Performance” alert when LCP > 2.5 s.

2. **GitHub Action**: `pnpm lhci autorun` on PR → comment scores.

3. **Slack / Email** notifications on score drop.

4. **Parent User Testing** every quarter; incorporate feedback → backlog.

---

## 📦 Code Snippet Appendix

### A. Full Image Metadata Example (learning category)

```ts
export const IMAGES = {
  learning: {
    pleaseLanguages: {
      src: '/images/learning/please-languages.png',
      alt: 'Children switching between Dutch and English',
      width: 800,
      height: 600,
      loading: 'lazy'
    },
    conflictResolution: { /* … */ }
  },
  heroes: { /* journey, about, etc. */ }
} as const;
```

### B. Viewport Meta (layout.tsx)

```tsx
export const metadata: Metadata = { /* … */ }

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* existing meta */}
      </head>
      <body>{children}</body>
    </html>
  );
}
```

---

## ⏱️ Timeline & Ownership

| Week | Owner | Deliverables |
|------|-------|--------------|
| W1 (quick) | Dev Team A | Phase 1 tasks |
| W1-W2 | Dev Team B | Phase 2 polish |
| W2-W3 | Dev Team A+B | Phase 3 refactor |
| Continuous | DevOps | Phase 4 monitoring |

---

### 🥇 Success Definition

All key routes score **≥ 100** in Performance, Accessibility, Best-Practices, SEO (mobile) on a cold Lighthouse run, with regression alerts active.

Let’s make Teddy Kids not just live, but legendary. 🧸💎
