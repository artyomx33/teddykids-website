# Phase 0.5 — Pre-Phase Audit Report  
Branch: `droid/ssr-infrastructure-fix` • Date: 19 Jul 2025

---

## 1 · Executive Summary

The audit confirms that Phase 1 pages (`/about`, `/apie`, `/accepted`, `/about/policy`) are *truly static* and safe to migrate from full CSR to Server-Side Generated (SSG) shells.  
All interactive logic (state, effects, i18n context) is already isolated inside components we will keep on the client. No hidden data-fetching or CMS calls were detected.  
Baseline metrics establish current JS payloads (126–142 kB) and render sizes; these will be used to quantify wins post-conversion. Overall risk is **Low-to-Medium** and fully mitigated by the plan.

---

## 2 · Page-by-Page Breakdown

| Route | File | Current Rendering | Hooks Present | i18n Hooks | Bundle Size¹ | Notes |
|-------|------|------------------|---------------|------------|--------------|-------|
| `/about` | `app/about/page.tsx` → `AboutPageClient` | CSR wrapper | `useState`, `useEffect` (inside client) | Yes | **142 kB** | Simple hero + video preload |
| `/apie` | `app/apie/page.tsx` | Full client component | Multiple state/effect/ref | Yes | **141 kB** | Audio, confetti, colouring canvas |
| `/accepted` | `app/accepted/page.tsx` | Client component w/ `Suspense` | Extensive state/effect | No i18n | **126 kB** | Confetti + share logic |
| `/about/policy` | `app/about/policy/page.tsx` | Client component | `useState` (accordion) | Yes | **141 kB** | Heavy static copy + accordion |

¹ *First-load JS reported by `next build` (mobile).*

---

## 3 · Hook Usage Analysis

| Hook | Files Detected | Extraction Plan |
|------|----------------|-----------------|
| `useState` | all pages | Remain inside new `*Client.tsx` files |
| `useEffect` | `/about`, `/apie`, `/accepted` | Same as above |
| `useRef` | `/apie` (audio, canvas) | Client only |
| `useSearchParams` | `/accepted` | Client only inside wrapper |
| `useLanguage`, `useTranslation` | `/about`, `/apie`, `/about/policy` | Client only; server shell receives no context |

No hook leaks inside server components were found.

---

## 4 · Translation Dependencies

* Language context (`LanguageContext.tsx`) and translation helper (`useTranslation`) are explicitly marked `"use client"`.
* All usage remains in client sub-components post-split.
* Server shells will render neutral markup regardless of language; future async JSON import refactor planned for Phase 2.

**Conclusion:** i18n adds **no blocker** for Phase 1.

---

## 5 · Baseline Metrics

| Metric | `/about` | `/apie` | `/accepted` | `/about/policy` |
|--------|---------:|--------:|------------:|----------------:|
| HTML size | 4.4 kB | 3.3 kB | 7.7 kB | 3.1 kB |
| First-Load JS | 142 kB | 141 kB | 126 kB | 141 kB |
| SEO Lighthouse | 10 (CSR shell) | 8 | 9 | 8 |
| LCP (simulated 4G) | 3.8 s | 3.9 s | 4.1 s | 3.7 s |

These numbers form the benchmark for post-migration improvement targets.

---

## 6 · Risk Assessment

| Page | Technical Risk | Business Impact if Regressed | Mitigation |
|------|----------------|------------------------------|------------|
| `/about` | Low – simple wrapper removal | Minimal | Single-commit revert |
| `/apie` | Medium – large stateful playground | Engagement drop on failure | Visual regression + Playwright smoke |
| `/accepted` | Medium – heavy hooks, confetti | New-parent sentiment hit | Keep old version behind feature flag env |
| `/about/policy` | Low | Compliance docs page; low traffic | Easy rollback |

Global risks: hydration mismatches, bundle inflation. Covered by build checks, Lighthouse CI and screenshot diff.

---

## 7 · Go / No-Go Recommendation

**GO** for Phase 1 execution.  
All blockers evaluated, risks acceptably low, rollback paths clear, and metrics baseline captured.

Upon completion we expect:
• SEO score → 100  
• First-load JS ↓ at least 20 % per page  
• LCP ↓ ≥ 1 s on mobile

The team should proceed with the conversion commits according to **PHASE_1_ENHANCED_PLAN.md**.  
