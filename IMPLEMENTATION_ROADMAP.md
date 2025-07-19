# SSR & SSG Migration – Implementation Roadmap  
Branch: `droid/ssr-infrastructure-fix`  
Owner: Teddy Kids Platform Team  
Duration: **2 sprints (10 working days)**  

---

## Phase-0 – Project Kick-off & Safety Nets (Day 1)

### Deliverables  
1. New branch `droid/ssr-infrastructure-fix` (✔ created).  
2. Preview deployment for every push (Vercel).  
3. Baseline Lighthouse + Web-Vitals snapshot.

### Technical Steps  
- Enable **preview URL** in Vercel.  
- Add LHCI GitHub action to store mobile Lighthouse scores on every PR.  
- Freeze current production SHA for easy rollback.

### Success Criteria  
- Preview builds green in CI.  
- Baseline performance/SEO numbers stored in LHCI.

### Risk Mitigation  
- No prod code touched yet.  
- Failing preview blocks merge.

### Testing  
- Simple smoke test: open `/`, `/locations`, `/team`.

### Rollback  
- Delete branch, revert nothing.

### Benchmarks to Track  
- LCP, CLS, SEO score, bundle size.

---

## Phase-1 – Quick-Win Static Flags (Day 1-2)

| Page | Action | Owner |
|------|--------|-------|
| /about, /apie, /accepted, /policy | Remove `use client`; add `export const dynamic = 'force-static'`. | Dev-1 |

### Technical Steps  
1. Strip `"use client"` from files that don’t access browser APIs.  
2. Add static flag in each page file.  
3. Update imports to server-safe components.

### Success Criteria  
- Pages render server-side HTML (`curl` shows text).  
- CI Lighthouse SEO ≥ 95, Perf +5 points.

### Risks & Mitigation  
- **Risk:** Breaking imports that rely on hooks.  
- *Mitigation:* grep for `useState`, `useEffect`; keep those components client.

### Testing  
- Snapshot HTML of each page in Jest.  
- LHCI diff expected +5 perf.

### Rollback  
- Revert commit or remove static flag.

### Benchmarks  
- Bundle ‑10 kB per page.

---

## Phase-2 – Home Page SSG Template (Day 3-4)

### Deliverables  
- `/` rendered via Server Component with `dynamic='force-static'`.  
- Global `metadata()` in `app/layout.tsx`.

### Technical Steps  
1. Convert `HomePageClient.tsx` to pure RSC.  
2. Move translations/data fetch to server (`await import('../../lib/translations')`).  
3. Add OG/Twitter tags in `layout.tsx` metadata.  
4. Remove top-level `"use client"`.

### Success Criteria  
- `curl http://localhost:3000 | grep "<h1"` shows hero text.  
- Lighthouse: SEO 100, Perf ≥ 90.

### Risks  
- Hydration mismatch.  
- *Mitigation:* run `next build && next start` locally before merge.

### Testing  
- Jest snapshot for hero HTML.  
- Playwright test: JS disabled still shows content.

### Rollback  
- Re-enable previous client version by env flag `LEGACY_CSR=true`.

### Benchmarks  
- LCP on 4G < 2.5 s.

---

## Phase-3 – Locations & Team Pages Static Generation (Day 5-7)

### Deliverables  
- `/locations` & `/team` fully statically generated.  
- `sitemap.xml` & `robots.txt`.

### Technical Steps  
1. Move data (`lib/locations.ts`) fetch to server component.  
2. Add `export const dynamic = 'force-static'`.  
3. Implement `next-sitemap` config & npm script.  
4. Remove redundant `"use client"` from section components; keep modals client.  

### Success Criteria  
- HTML contains location cards & team grid.  
- Sitemap lists all static routes.  
- Google Rich Result Test passes.

### Risks  
- Modal triggers fail when client removed.  
- *Mitigation:* isolate modals behind dynamic import with `use client`.

### Testing  
- Axe-core a11y pass.  
- Lighthouse SEO remains 100.

### Rollback  
- Comment out `dynamic='force-static'`, fall back to CSR.

### Benchmarks  
- Bundle size `/locations` ≤ 150 kB → ≤ 100 kB.

---

## Phase-4 – Programs, Contact, Learning (Day 8-9)

### Deliverables  
- `/programs` static hero poster + progressive video.  
- `/learning` static.  
- `/contact` server rendered form shell + client validation.

### Technical Steps  
- Replace hero video initial load with JPEG poster (done earlier).  
- Use server component for content; dynamic import `ContactFormClient`.

### Success Criteria  
- FCP < 1.5 s on throttled 3G.  
- Forms still submit via existing endpoint.

### Risks  
- Env vars on server only forms.  
- *Mitigation:* test in preview with dummy POST.

### Testing  
- Playwright form E2E in preview.

### Rollback  
- Re-export legacy client page component.

### Benchmarks  
- FID < 50 ms.

---

## Phase-5 – Apply Multi-Step Form (Day 10)

### Deliverables  
- `/apply` migrated to server actions with progressive enhancement.

### Technical Steps  
1. Introduce `<form action={applyAction}>`.  
2. Keep stepper UI client.  
3. Validate server-side & return errors as props.

### Success Criteria  
- Works with JS disabled (full page reload).  
- No hydration mismatch.

### Risks  
- Largest scope; schedule at end.  
- *Mitigation:* feature flag `ENABLE_SSR_APPLY`.

### Testing  
- E2E happy & unhappy path (Playwright).  
- Lighthouse perf unchanged.

### Rollback  
- Toggle feature flag.

### Benchmarks  
- No extra JS > 10 kB.

---

## Phase-6 – Performance & Analytics Polish (Post-migration)

- Font preloading (`<link rel="preload" as="font">`).  
- Add `@vercel/analytics` to track TTFB.  
- Automate LHCI thresholds in CI.

---

## Global Testing Strategy

| Layer | Tool | Frequency |
|-------|------|-----------|
| Unit (HTML snapshot) | Jest | Pull Request |
| Integration JS-off | Playwright `--disable-js` | Each phase merge |
| Lighthouse CI | `@lhci/cli` | PR & nightly cron |
| SEO Crawl | `next-sitemap` + ScreamingFrog | Post-Phase-3 |
| A11y | axe-core automated | PR |
| Real-user | Vercel Analytics | Continuous |

---

## Rollback Playbook

1. Git revert the phase commit.  
2. Toggle feature flag env to `LEGACY_CSR=true`.  
3. Redeploy.  
4. Restore baseline Lighthouse numbers.

---

## Timeline (10-Day Sprint)

| Day | Phase |
|-----|-------|
| 1 | Phase-0, Phase-1 start |
| 2 | Finish Phase-1 |
| 3-4 | Phase-2 |
| 5-7 | Phase-3 |
| 8-9 | Phase-4 |
| 10 | Phase-5 & wrap-up |

---

## Go / No-Go Checklist (End of Sprint)

- [ ] All pages return meaningful HTML in `curl` source.  
- [ ] Lighthouse mobile: Perf ≥ 90, SEO 100, A11y ≥ 98.  
- [ ] Sitemap accessible `/sitemap.xml`.  
- [ ] Error logs clean in Vercel for 24 h.  
- [ ] Traffic graphs steady (no bounce spike).

*When every box is ticked, merge to `main` and ship 🚀*
