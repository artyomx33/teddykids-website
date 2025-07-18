# Lighthouse Action Items

Focused, actionable fixes based on the latest full-site Lighthouse audit.  
Check off each item as it’s addressed.

---

## ✅ CRITICAL FIXES (Do First)

- [ ] **Color Contrast Issues**  
  - **Problem:** Text/background combinations fail WCAG AA (4.5 : 1).  
  - **Fix:** Adjust palette in global Tailwind/SCSS variables. Verify with the Chrome DevTools “Accessibility → Contrast” checker.  
  - **Likely files:**  
    - `app/globals.css` (or Tailwind config)  
    - Component styles in `components/*`

- [ ] **Missing Meta Descriptions**  
  - **Problem:** Every route lacks a `<meta name="description">`.  
  - **Fix:** Add unique descriptions via the Next.js `<Head>` component.  
  - **Likely files:**  
    - `app/layout.tsx` (shared head)  
    - Page files: `app/**/page.tsx`

- [ ] **Console Errors**  
  - **Problem:** JavaScript runtime errors logged.  
  - **Fix:** Reproduce in browser console; patch logic, null checks, or API calls.  
  - **Likely files:**  
    - Offending component indicated by stack trace in console.

- [ ] **Accessibility Labels**  
  - **Problem:** Visible labels differ from accessible names.  
  - **Fix:** Ensure `aria-label`, `aria-labelledby`, or `alt` matches visible text.  
  - **Likely files:**  
    - Buttons/links in `components/*`  
    - Form elements in `app/contact/page.tsx`, etc.

---

## 🚀 PERFORMANCE FIXES (High Impact)

- [ ] **Image Optimization**  
  - **Problem:** Oversized & non-lazy images (1–7 per page).  
  - **Fix:** Replace `<img>` with `next/image`, set `sizes`, enable `loading="lazy"`.  
  - **Likely files:** `components/Image*`, every page importing hero/banner images.

- [ ] **Unminified Assets (Dev Mode)**  
  - **Problem:** 7–8 JS & 1 CSS file unminified.  
  - **Fix:** Audit using production build:  
    ```bash
    npm run build && npm run start
    ```  
  - **Likely files:** build pipeline only (no code changes expected).

- [ ] **Unused JavaScript**  
  - **Problem:** 3+ bundles include dead code.  
  - **Fix:** Run `next build --profile`, inspect with `@next/bundle-analyzer`, remove unused exports/deps.  
  - **Likely files:** large utility files, legacy libraries in `lib/` or `utils/`.

- [ ] **Large Network Payloads**  
  - **Problem:** Total payload >1.6 MB.  
  - **Fix:** Compress images, code-split dynamic sections, purge unused CSS.  
  - **Likely files:** same as image/JS tasks above.

---

## 🔍 SEO & BEST-PRACTICE IMPROVEMENTS

- [ ] **Preconnect Missing**  
  - **Problem:** Two third-party origins lack preconnect.  
  - **Fix:** In `<Head>`, add:  
    ```html
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    ```  
  - **Likely files:** `app/layout.tsx`

- [ ] **Modern Image Formats**  
  - **Problem:** PNG/JPEG served instead of WebP/AVIF.  
  - **Fix:** Ensure `next/image` `formats: ['image/avif','image/webp']` in `next.config.js`.  
  - **Likely files:** `next.config.js`, any static image imports.

- [ ] **Render-Blocking Resources**  
  - **Problem:** 1+ CSS/JS blocks first paint.  
  - **Fix:** Inline critical CSS (`@next/critical-css`), `defer` non-essential scripts.  
  - **Likely files:** global CSS imports in `app/layout.tsx`, third-party script tags.

- [ ] **Back/Forward Cache (bfcache) Blocking**  
  - **Problem:** Pages prevent bfcache restoration.  
  - **Fix:** Remove `beforeunload/unload` listeners; ensure no synchronous XHR in teardown.  
  - **Likely files:** custom hooks or effects in `components/*`.

---

### How to Verify Fixes
1. Re-run Lighthouse (`npm run lhci`) after each group of fixes.  
2. Aim for ≥90 in all categories on production build.  
3. Keep this checklist in source control (`docs/lighthouse-action-items.md`) and update as issues are resolved.

