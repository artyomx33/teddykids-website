# Lighthouse Audit Summary  
*TeddyKids Website – Development Build*  
*Audit date: 18 July 2025 • 12 primary routes tested via LHCI*

---

## 1. Executive Summary
The full-site Lighthouse CI audit highlighted a number of critical accessibility, performance, and SEO gaps that will materially affect user experience and search visibility if left unresolved. Most failures stem from development-mode assets (un-minified bundles, missing source maps) and design/content issues (poor contrast, missing meta descriptions). Addressing the critical items below will unlock the largest quality gains before production release.

---

## 2. Overall Scores (worst-case across routes)
| Category | Lowest Score | Typical Range |
|----------|--------------|---------------|
| Performance | **28 / 100** (LCP & heavy payloads) | 28 – 46 |
| Accessibility | **60 / 100** (contrast & labels) | 60 – 78 |
| Best-Practices | **68 / 100** (console errors, legacy JS) | 68 – 82 |
| SEO | **70 / 100** (meta description) | 70 – 84 |

> Scores are lower than production expectations because the audit was run against an un-optimized dev build.

---

## 3. Critical Issues (score 0 or blocking)
| Issue | Impact |
|-------|--------|
| **bf-cache** – pages block back/forward cache restoration | Slower navigation & UX |
| **Color-contrast** failures | Accessibility compliance (WCAG AA) |
| **Errors-in-console** | Indicates JS runtime problems |
| **Image-delivery-insight** | Large, un-optimized images hurt Performance |
| **Label-content-name-mismatch** | Screen-reader confusion |
| **LCP-discovery-insight** | Poor Largest Contentful Paint |
| **Legacy-javascript-insight** (0.5) | Extra polyfills increase bundle size |
| **Meta-description missing** | SEO click-through & indexing |
| **Network-dependency-tree-insight** | Inefficient request waterfall |
| **Valid-source-maps missing** | Debugging & error tracking in prod |

**Immediate action**: fix these items on all templates before pushing to production.

---

## 4. Performance Optimizations Needed
1. **Offscreen Images** – ≥1 images per page should be lazy-loaded.  
2. **Total-byte-weight** – payload ~0.5 score; compress & prune oversized assets.  
3. **Unminified CSS / JS** – 1 CSS & 7-8 JS bundles need minification.  
4. **Unused JavaScript** – 3+ bundles include dead code; tree-shake.  
5. **Responsive Images** – 1-7 images served larger than viewport.  
6. **Rel-preconnect** – Add preconnect for 2 critical third-party origins.  
7. **Render-blocking resources** – 1+ blocking CSS/JS; split or defer.

---

## 5. Accessibility Issues
• Insufficient text–background contrast on multiple components  
• Mismatched visible labels vs ARIA names  
• Heading order inconsistencies on *About* page  
• Missing alt text & responsive sizing for several images (related to image-delivery-insight)

---

## 6. SEO Issues
• Pages lack `<meta name="description">` – critical for SERP snippets  
• Legacy JavaScript and slow LCP (0.28) can hinder Core Web Vitals ranking  
• Missing optimized image formats (WebP/AVIF) flagged as *modern-image-formats*

---

## 7. Recommended Next Steps
1. **Switch to production build** (`next build && next start`) and re-run Lighthouse to isolate dev-only noise.  
2. **Design & content fixes**  
   • Apply WCAG-compliant color palette.  
   • Add concise meta-description to each route.  
   • Ensure visible labels match accessible names.  
3. **Performance engineering**  
   • Enable image optimisation (`next/image`) with proper sizes & lazy loading.  
   • Minify, tree-shake and split JS/CSS; remove legacy polyfills where possible.  
   • Add `preconnect`/`dns-prefetch` hints for external resources.  
4. **Back/Forward Cache**  
   • Audit `<script>` side-effects and `unload` listeners blocking bfcache.  
5. **Re-audit before launch** – Aim for ≥90 scores in all categories.

---

*This report consolidates findings for all 12 audited routes: `/`, `/about`, `/about/policy`, `/programs`, `/programs/after-school`, `/programs/nursery`, `/team`, `/locations`, `/learning`, `/contact`, `/apply`, `/accepted`.*

