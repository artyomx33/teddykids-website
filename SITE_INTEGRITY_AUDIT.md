# 🛡️ Teddy Kids Site Integrity Audit

_Audit branch: **feature/site-integrity-audit** • Prepared by Factory Droid_

---

## Phase-0 • Setup & Baseline ✅ **(Completed)**

| Check | Result | Notes |
|-------|--------|-------|
| Branch created | `feature/site-integrity-audit` | fresh from `main` |
| Lint | **PASSED** ✅ | `next lint` → 0 warnings / errors |
| Build | **PASSED** ✅ | 21 static routes compiled without issues |
| Security `npm audit` | **PASSED** ✅ | 0 vulnerabilities |
| Bundle size (first-load JS) | **~147 kB** | meets guideline (<150 kB) |

### Lighthouse Baseline (Mobile)

| Page | Perf | A11y | Best Prac | SEO |
|------|------|------|-----------|-----|
| / (Home) | 87 | 98 | 100 | 100 |
| /about | 88 | 98 | 100 | 100 |
| /locations | 85 | 97 | 100 | 100 |
| /team | 86 | 98 | 100 | 100 |
| /apply | 85 | 95 | 100 | 100 |

_Baseline JSON reports stored in `audit-results/`._

---

## Phase-1 • Error Detection 🕵️‍♂️ ✅ **(Completed)**

Focus: code quality, runtime errors & asset integrity.

| ID | Issue | Location | Priority | Est. Fix |
|----|-------|----------|----------|-----------|
| 1 | `console.log` / `console.table` in production code | `app/apply/ApplyPageClient.tsx` (≈ lines 395-402) | P1 | 15 min |
| 2 | `console.error` for non-critical audio failure | `app/about/AboutPageClient.tsx` | P2 | 10 min |
| 3 | `console.error` for form submission (could spam logs) | `components/sections/Contact.tsx` | P2 | 10 min |
| 4 | _Keep_ `console.error` in global `ErrorBoundary` | `components/ErrorBoundary.tsx` | — | — |
| 5 | Empty `alt=""` attributes (2) | `HomePageClient.tsx` (lines 42, 65) | P1 | 20 min |
| 6 | Empty `alt=""` attribute (1) | `PolicyPageClient.tsx` (line 108) | P1 | 10 min |
| 7 | Empty `alt=""` attributes (2) | `ApiePlaygroundClient.tsx` (lines 98, 107) | P1 | 15 min |
| 8 | Empty `alt=""` attribute (1) | `ContactPageClient.tsx` (line 65) | P1 | 10 min |
| 9 | Empty `alt=""` attributes (2) | `LocationsPageClient.tsx` (lines 89, 98) | P1 | 15 min |
| 10 | Decorative image with empty alt (OK) | `layout.tsx` (line 210) | — | — |
| 11 | Empty `alt=""` attribute (1) | `locations/page.tsx` (line 117) | P1 | 10 min |
| 12 | 58 missing English translation keys | `lib/translations.ts` audit | P1 | 1 h |
| 13 | No hero-image 404s detected | — | — | — |

Key outcomes:
1. All console noise mapped; only ErrorBoundary logging retained.  
2. 11 non-decorative images need descriptive `alt` text.  
3. Translation audit shows 58 EN keys missing – NL ahead.  
4. No missing hero assets detected (0× 404).

---

## Phase-2 • Content & Consistency 🎨

1. Translation key diff (EN vs NL)  
2. Tone & branding alignment per **TRANSLATION_GUIDE**  
3. Heading hierarchy & duplicate content  
4. CTA, nav, footer consistency

---

## Phase-3 • Performance & SEO 🚀

- Re-run Lighthouse after quick-fixes  
- Core Web Vitals deep-dive  
- Image & font optimisation audit  
- Structured-data / meta validation  
- Accessibility colour-contrast sweep

---

## Phase-4 • Report & Quick Fixes 📑

Deliverables:
1. **Comprehensive Markdown report** (this file, final version)  
2. **PR of auto-fixable items** (lint, alts, meta)  
3. Prioritised backlog with effort estimates

---

### Next-Step Checklist

- [ ] Complete Phase-1 scans (code & runtime)
- [ ] Populate findings tables with severity & fixes
- [ ] Draft quick-wins PR
- [ ] Kick off Lighthouse re-test (Phase-3)

_ETA for full audit completion: **1–1.5 days**._

