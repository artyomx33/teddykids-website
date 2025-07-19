# Phase 1 – Enhanced Static Conversion Plan  
File: **PHASE_1_ENHANCED_PLAN.md**  
Branch: `droid/ssr-infrastructure-fix`

This plan supersedes the original Phase 1 quick-win document, incorporating Grok’s useful suggestions while **avoiding** partial-prerendering, ISR and full metadata refactors (they stay in Phase 2+).

---

## 0 · Scope Recap
Static-only conversion of four content pages:

| Route | File | Action |
|-------|------|--------|
| `/about` | `app/about/page.tsx` | Strip CSR wrapper → SSG |
| `/apie` | `app/apie/page.tsx` | Move interactive playground to client sub-component |
| `/accepted` | `app/accepted/page.tsx` | Move confetti/searchParams to client sub-component |
| `/about/policy` | `app/about/policy/page.tsx` | Extract accordion into client sub-component |

---

## 0.5 · Pre-Phase Audit   🕵️‍♂️ (NEW)

| Task | Command / Tool | Owner | Result |
|------|----------------|-------|--------|
| Inventory `"use client"` directives | `grep -r "use client" app/ components/` | Dev-1 | List of 28 occurrences |
| Detect hook usage in target pages | `grep -r "useState\\|useEffect" app/about app/apie app/accepted app/about/policy` | Dev-1 | Verify extraction needed |
| List data-fetches | Quick code scan (no external CMS) | Dev-2 | Confirm pages are **static** |
| Verify translation calls | Search `useTranslation` & `useLanguage` | Dev-2 | Confirm client-only usage |
| Baseline screenshots | `npx playwright test --update-snapshots` | QA | Stored in `__screenshots__/baseline` |
| Record baseline Web Vitals | Vercel Analytics (prod) | Dev-Ops | LCP, CLS, TTFB snapshots |

_Outcome: no hidden async data, i18n confirmed client-only, safe to proceed._

---

## 1 · i18n Safety Net   🌍 (NEW)

Problem: `lib/LanguageContext.tsx` and `useTranslation()` are client-only hooks.  
Solution for Phase 1:

1. **Keep language context inside the client sub-components** we’re already extracting.  
2. Server components will accept a `lang` prop if needed (later phases may move to async JSON imports).  
3. Confirm no server component imports `translations.ts` directly. (Audit step above.)

_No additional refactor required for Phase 1._

---

## 2 · Core Phase 1 Steps (unchanged logic, safer)

1. **Remove `"use client"`** from each `page.tsx`.  
2. `export const dynamic = 'force-static';` at top of each `page.tsx`.  
3. Create `*Client.tsx` files containing **all** hooks/UI logic.  
4. Update pages to render server shell + client component.  
5. Commit **one page per commit**.

---

## 3 · Enhanced Testing & QA   🧪 (NEW)

| Layer | Tool / Script | Pass Criteria |
|-------|---------------|---------------|
| Build | `npm run build` | No RSC / hook errors |
| HTML Snapshot | `curl -s localhost:<port>/<page>` | `<h1>` present |
| Axe Accessibility | `npx axe-cli <url>` | 0 new violations |
| Lighthouse CI | `lhci autorun` (mobile) | SEO ≥ 95, Perf +5 vs baseline |
| **Visual Regression** | Playwright screenshot diff | ≤ 2 px drift |
| Bundle Analyse | `next build --analyze` | < 100 kB / page |
| Real Browser Smoke | Playwright headful `JS disabled` | Content visible |

Playwright config stores baseline screenshots on the first run; CI fails if diff > 0.1 %.

---

## 4 · Success Metrics   📈 (UPDATED)

| Metric | Target |
|--------|--------|
| Google Indexed Pages | 4/4 within 48 h after deploy |
| Lighthouse SEO | 100 |
| LCP (mobile, 4G) | < 2.5 s |
| First Load JS Reduction | ‑20 % on the four pages |
| **Vercel Analytics** | No regressions (LCP, CLS) 48 h post-deploy |
| Visual Regression | 0 blocking diffs |

_Add `@vercel/analytics` script to `app/layout.tsx` after Phase 1 merge (toggle via env)._

---

## 5 · Common Pitfalls & Mitigations

| Pitfall | Mitigation |
|---------|------------|
| Hydration mismatch | Keep all stateful code inside client files; run build locally |
| Data staleness | Not applicable (static pages) |
| i18n context missing | Ensure client component is a child of `<LanguageProvider>` in layout |
| Bundle bloat | Run `next build --analyze`; warning if > 120 kB |
| Visual drift | Playwright diff step blocks merge |

---

## 6 · Timeline & Owners

| Day | Slot | Task | Owner |
|-----|------|------|-------|
| 0 | PM | **Pre-Phase Audit** | Dev-1 / Dev-2 / QA |
| 1 | AM | Convert `/about` | Dev-1 |
| 1 | PM | Convert `/apie` + tests | Dev-1 |
| 2 | AM | Convert `/accepted` + tests | Dev-2 |
| 2 | PM | Convert `/about/policy` + LHCI, screenshots, PR | Dev-2 + QA |

---

## 7 · Rollback Playbook

1. `git revert <commit_sha>` (per page).  
2. Remove `dynamic='force-static'`, restore `"use client"` in `page.tsx`.  
3. Push → preview redeploy.  
4. Verify screenshots match baseline. Total time: **5 min**.

---

### ✅ Ready for Go-Ahead
This enhanced plan keeps Phase 1 simple yet adds Grok’s smart safety layers (audit, i18n sanity, visual tests, analytics).  
Signal **“GO”** and we’ll execute!  
