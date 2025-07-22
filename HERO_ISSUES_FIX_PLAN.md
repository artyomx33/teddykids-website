# Apply Page – Hero Issues Fix Plan  
_Version 1.0 · July 2025_

---

## 1 · Root-Cause Analysis (Why the hero vanished)

| # | Finding | Evidence | Impact |
|---|---------|----------|--------|
| 1 | **Missing hero image asset** | Browser console shows `GET /images/hero-fallback.jpg 404` | React renders an empty `<img>` / collapses hero container → section disappears. |
| 2 | **Conditional rendering guard fails** | `ApplyPageClient` likely returns `null` if `heroImage` prop or translation is falsy. Once image 404s, component bails out. | No hero markup in DOM, only later sections show. |
| 3 | **Image component misuse** | Logo image warning: `fill` without `sizes`. Same pattern may be in hero → Next’s runtime may mask render until prop is valid. | Image withheld until error resolved. |
| 4 | **Font preload CORS mismatch** | Google-fonts `<link rel="preload">` lacks `crossorigin`, triggers warnings but **not** the disappearance. | Secondary perf issue only. |

---

## 2 · Current Errors & Warnings

| Type | Message / Symptom |
|------|-------------------|
| **Error** | `404 GET /images/hero-fallback.jpg` |
| **Warning** | `Image with src "...logo-placeholder.png" has "fill" but is missing "sizes" prop` |
| **Warning** | `link preload but not used within a few seconds` for Baloo 2 & Geist fonts |
| **Info** | Font preload `crossorigin` mismatch |
| **Info** | Vercel analytics debug logs (safe to ignore in dev) |

---

## 3 · Priority Fixes

| P | Action | Reason |
|---|--------|--------|
| 1 | Restore / re-point hero image asset | Returns hero visually, blocks layout shift |
| 2 | Add `sizes` to all `next/image` elements using `fill` (logo + hero) | Prevent Next.js runtime warnings, ensure render |
| 3 | Remove over-strict early-return guard in hero component (if present) | Make hero resilient even when image temporarily missing |
| 4 | Clean up font preloads (`crossorigin="anonymous"` or drop) | Eliminate console noise, minor perf gain |
| 5 | Optional: lazy-load fallback hero image, add alt text | SEO / accessibility polish |

---

## 4 · Step-by-Step Solutions

### 4.1 Restore Hero Image
1. Locate design file: `/public/images/hero-fallback.jpg` (or actual hero asset).  
2. If file truly missing, copy correct image into same path **or** update `src` in `ApplyPageClient` to existing asset.  
3. Confirm in dev: `curl -I http://localhost:3008/images/hero-fallback.jpg` returns `200`.

### 4.2 Fix `next/image` Prop Warnings
1. In `Navigation.tsx` & `ApplyPageClient.tsx`, for every `<Image fill …>` add  
   `sizes="(max-width: 768px) 100vw, 50vw"` (tune as needed).  
2. If hero uses `layout="fill"` legacy prop, switch to `fill` boolean.  
3. Run `npm run lint` – expect zero `next/image` warnings.

### 4.3 Harden Hero Component
1. Open `ApplyPageClient.tsx` hero JSX.  
2. Replace early return pattern:

   ```tsx
   if (!heroImage) return null;
   ```
   with fallback rendering (e.g., placeholder div) so missing asset doesn’t nuke entire section.  
3. Add sanity default:

   ```tsx
   const heroSrc = heroImage ?? '/images/hero-placeholder.jpg';
   ```

### 4.4 Font Preload Cleanup
1. In `app/layout.tsx`, add `crossorigin="anonymous"` to each Google-fonts `<link rel="preload">`.  
2. Or remove preload lines and rely on single stylesheet import.  
3. Verify warnings gone in console.

### 4.5 Regression Tests
1. `npm run dev` → http://localhost:3008/apply  
2. **Checklist:**  
   - Hero image renders, text visible EN & NL.  
   - No 404s in Network tab.  
   - Zero `next/image` warnings.  
   - Lighthouse ↑ CLS score.  
3. Build: `npm run build && npm run start` – ensure same in production mode.

---

## 5 · Done Criteria

- Hero section visible across viewports.
- All console errors / warnings listed in §2 resolved.
- Apply page translations intact, SSR still functional.
- PR merged with screenshot & Lighthouse diff.

---

_Authored by Factory assistant_  
