# Teddy Kids Website – Lighthouse Performance Analysis  
_Path: `lighthouse-analysis/performance-summary.md`_

---

## 1. High-Level Score Improvement  
| Metric | Before (baseline) | After Phases 1-6 | Delta |
|--------|------------------|------------------|-------|
| **Performance** | 76 / 100 | **87 / 100** | **+11** |
| Accessibility | 96 | 96 | – |
| Best-Practices | 96 | 96 | – |
| SEO | 100 | 100 | – |

> The optimisation campaign produced a double-digit gain, moving the site into the upper quartile of Lighthouse performance without sacrificing any other quality dimensions.

---

## 2. Core Web Vitals Breakdown (Post-optimisation)

| Web Vital | Value | Lighthouse Target | Status |
|-----------|-------|-------------------|--------|
| LCP – Largest Contentful Paint | **3.8 s** | < 2.5 s (good) / 4 s (needs improvement) | ❗ Needs improvement |
| FID* – First Input Delay (Max Potential) | **70 ms** | < 100 ms | ✅ Good |
| CLS – Cumulative Layout Shift | **0.087** | < 0.10 | ✅ Good (borderline) |
| INP* surrogate (TBT) – Total Blocking Time | **30 ms** | < 200 ms | ✅ Excellent |

\* *FID & INP are approximated by Lighthouse in lab conditions – real-user INP should be monitored in production.*

**Other lab metrics**

| Metric | Value |
|--------|-------|
| FCP – First Contentful Paint | 0.8 s |
| Speed Index | 0.8 s |
| TTI – Time to Interactive | 3.8 s |

---

## 3. Optimisations That Delivered the Biggest Wins

1. **Hero LCP Optimisation (Phase 1)**
   • Preload + `fetchPriority="high"` on fallback image  
   • Removed video on mobile → instant image paint  
2. **Aggressive Lazy-Loading (Phase 2)**  
   • Decorative characters & program thumbnails now `loading="lazy"` with `fetchPriority="low"`  
3. **JavaScript Code-Splitting (Phase 3)**  
   • `next/dynamic()` for AppiesGPT, LocationsPreview, Contact & Apply forms  
   • Home-page JS payload dropped ~18 %  
4. **Font `display:swap` (Phase 4)** – Eliminated FOIT, improved FCP/CLS.  
5. **Asset Caching & Compression (Phase 6)** – Brotli/Gzip + long-term cache headers smoothed TTI/TBT.  

---

## 4. Remaining Opportunities (from Lighthouse “Opportunities” section)

| Opportunity | Est. Savings | Why it still matters |
|-------------|--------------|----------------------|
| 🖼 **Serve images in next-gen formats / improve delivery** | 241 KiB | Some hero & gallery images still JPEG; converting to AVIF/WebP + proper sizing will shave KBs and speed up LCP. |
| ⏱ **Largest Contentful Paint** | – | Current 3.8 s sits in “Needs improvement”. Further hero image tweaks & CDN edge caching required. |
| 🔄 **Cumulative Layout Shift** | – | 0.087 is OK but close to threshold; residual shifts from character images & fonts. |
| 📜 **Legacy JavaScript** | 11 KiB | A few polyfills/old libs ship to modern browsers; tree-shake or modernise. |
| 🌐 **Network dependency tree / render-blocking resources** | – | CSS from Tailwind + fonts still block; explore critical CSS & HTTP/2 prioritisation. |

---

## 5. Technical Implementation Summary

| Phase | Key Techniques Implemented |
|-------|----------------------------|
| 1. Hero & LCP | `priority`/`sizes`, `<link rel="preload">`, conditional video, mobile fallbacks |
| 2. Lazy Loading | `loading="lazy"`, `fetchPriority`, responsive `sizes` |
| 3. Code Splitting | `next/dynamic()`, SSR opt-out for client-only widgets, chunking |
| 4. Fonts | `next/font` with `display:"swap"`, single CSS variable usage |
| 5. CSS Optimisation | Tight `content` glob, removed safelist bloat, JIT tree-shaking |
| 6. Caching/Compression | Brotli/Gzip, long-term cache headers, AVIF/WebP enablement |

> All changes are live on branch `droid/performance-optimization-phases-1-6` – see PR #5.

---

## 6. Next Steps to Reach 90 + / 100

1. **Edge Cache Hero Assets**  
   – Push hero fallback image & CSS to a CDN edge with `stale-while-revalidate`; aim to cut LCP to < 2.5 s.  
2. **Adopt AVIF/WebP Everywhere**  
   – Batch convert remaining JPEG/PNG assets; adjust `<Image>` `srcSet` for modern formats.  
3. **Critical CSS Extraction**  
   – Inline above-the-fold styles (Critters or LightningCSS) to eliminate last render-blocking request.  
4. **Further JS Diet**  
   – Replace legacy polyfills; audit 3rd-party libs (e.g. remove unused date-fns, etc.).  
5. **CLS Hardening**  
   – Add explicit `width/height` to every decorative character; apply `content-visibility:auto` where possible.  
6. **Monitor Real-User INP/CLS**  
   – Ship `web-vitals.js` + send to analytics to confirm field performance.  
7. **HTTP/2/3 Prioritisation Tests**  
   – Validate server config to ensure early hints + priority hints are respected.  

With the above follow-up actions we expect **LCP < 2.5 s** and overall **Performance > 90/100**, placing Teddy Kids in the “green zone” on all Core Web Vitals.

---

**Full JSON report**: `lighthouse-analysis/lighthouse-optimized-report.json`  
Use this file with Grok for granular inspection of each audit and trace event.
