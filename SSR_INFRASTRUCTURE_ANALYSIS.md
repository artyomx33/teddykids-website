# SSR Infrastructure Analysis & Battle Plan
*(aka “Dropping an Engine into the Ferrari”)*

---

## 1. Current State Assessment
Luna & Grok’s review confirms:

| Area | Observation |
|------|-------------|
| Rendering | 100 % Client-Side Rendering (CSR). Every page begins with `<div id="__next"></div>` and no meaningful HTML. |
| Routing | Next.js **App Router** is present, but all top-level pages are forced to `"use client"` or delegated to `*PageClient.tsx` components. |
| Data-Fetching | No `getServerSideProps`, `getStaticProps`, `generateStaticParams`, or `dynamic = 'force-static'`. |
| Metadata | Scattered `<Head>` tags, but no central `metadata()` exports → incomplete OG + SEO tags. |
| Crawlability | Googlebot, screen readers, and Lighthouse “view source” see empty shells. |

**Verdict:** Visually attractive SPA, functionally invisible to bots and assistive tech.

---

## 2. Architectural Issues
1. **Pure CSR Pipeline**  
   • No HTML for crawlers → zero indexable content.  
   • JavaScript must bootstrap before anything renders → slow First Contentful Paint (FCP).

2. **Over-use of `"use client"`**  
   • Forces React to ship extra JS + disables server-component optimisations.  

3. **No Static / Incremental Generation**  
   • Pages like `/about`, `/locations` could be pre-rendered once at build — wasting free speed.

4. **Fragmented Metadata**  
   • Missing or inconsistent `<title>`, `<meta description>`, OG tags.  

5. **Missing Sitemap & robots.txt**  
   • Search engines don’t know what to crawl or how often.

6. **Accessibility Gaps**  
   • Screen readers get no initial landmarks or content.  

---

## 3. Impact Analysis

| Impact Area | Effect Today | Business Risk |
|-------------|-------------|---------------|
| SEO | 0–1/100 “SEO” Lighthouse; pages **not indexed** = lost organic traffic | Parents can’t find Teddy Kids → enrolment loss |
| Performance | LCP delayed by JS bootstrap; mobile 3G experience painful | Bounce rate ↑, Core Web Vitals ↓ |
| Accessibility | Screen readers output silence until hydration | Legal & ethical liability |
| Infrastructure Cost | Extra JS shipped to every user | Data costs for users, CDN bills for us |

---

## 4. Technical Plan (Step-by-Step)

| # | Task | Notes |
|---|------|-------|
| 1 | **Audit `use client` directives** | Remove where unnecessary; convert components to Server Components by default. |
| 2 | **Home / Locations / Team → SSG** | In `app/` pages: `export const dynamic = 'force-static'` OR implement `generateStaticParams`. |
| 3 | **Dynamic content pages → SSR** | E.g. `/apply`, `/contact` use `export const dynamic = 'force-dynamic'` or server actions. |
| 4 | **Global Metadata** | Move scattered `<Head>` tags into `layout.tsx` `metadata()` export; include OG + Twitter cards. |
| 5 | **Sitemap & robots.txt** | Add `next-sitemap` package; configure nightly generation. |
| 6 | **Remove client-only data hooks in critical path** | Fetch data server-side, pass as props. |
| 7 | **Image Optimisation Pass** | Ensure `next/image` with `priority` and proper `sizes`. |
| 8 | **Monitoring** | Add `@vercel/analytics` to track TTFB & LCP after rollout. |

---

## 5. Priority Matrix

| Priority | Item | Reason |
|----------|------|--------|
| P0 | Convert Home, Locations, Programs, Team to SSG/SSR | They hold 90 % of crawlable content & revenue keywords |
| P0 | Global Metadata overhaul | SEO cannot function without titles & descriptions |
| P1 | Sitemap / robots.txt | Needed for indexing once HTML exists |
| P1 | Remove redundant `"use client"` | Cuts bundle ~30 % and unlocks RSC perf |
| P2 | Remaining static pages (About, Policy, etc.) to SSG | Small effort, good Lighthouse gains |
| P3 | Fine-grain performance tuning (fonts, images) | Do after major spikes fixed |

---

## 6. Implementation Phases

1. **Phase 0 – Branch & CI Safety**  
   • We’re on `droid/ssr-infrastructure-fix`.  
   • Enable preview deployment for every push.

2. **Phase 1 – Core Pages SSG/SSR**  
   • Remove `use client` on `app/page.tsx`, convert to server components.  
   • Add `export const dynamic = 'force-static'` where possible.  
   • Verify HTML output via `curl` + snapshot tests.

3. **Phase 2 – Metadata & Headless SEO**  
   • Implement unified `metadata()` in root layout.  
   • Add OG, Twitter, canonical, locale alternates.

4. **Phase 3 – Sitemap / robots**  
   • Integrate `next-sitemap`, commit `robots.txt`.

5. **Phase 4 – Remaining Pages & Cleanup**  
   • Convert leftover pages, delete obsolete client bundles.

6. **Phase 5 – Perf Polish**  
   • Font preloading, critical CSS, image size audit.

---

## 7. Testing Strategy

| Layer | Tool | Assertion |
|-------|------|-----------|
| Unit | Jest + React Testing Library | Server components render expected HTML string |
| Integration | Playwright | Navigate without JS – content visible |
| Lighthouse CI | `@lhci/cli` in CI | Scores ≥ 90 Perf / 100 SEO / 100 A11y |
| SEO Crawl | ScreamingFrog (free 500 URLs) | No “JavaScript content” warnings |
| Accessibility | axe-core automated + manual NVDA/VoiceOver pass | Landmark regions, alt text, tab order |
| Production Smoke | Vercel Preview URLs + SpeedCurve | LCP < 2.5 s on 4G, TTFB < 200 ms EU |

---

## 8. Success Metrics

| Metric | Baseline (CSR) | Target (Post-Fix) |
|--------|----------------|-------------------|
| Google Indexed Pages | ~0 | 100 % of public pages within 7 days |
| Lighthouse SEO | 0-10 | **≥ 100** |
| Lighthouse Performance (mobile) | 60-70 | **≥ 90** |
| LCP (4G, EU) | ~3.8 s | **< 2.5 s** |
| First CPU Idle | ~4 s | **< 2 s** |
| Bundle Size (Home) | 180 kB JS | **< 100 kB JS** |
| Screen-Reader Readability | “No content” | All hero text & nav announced |

---

### Final Word
We’re installing the **engine**—server-side rendering and static generation—into our Ferrari body. Once these phases are complete, Teddy Kids will be *visible*, *discoverable*, and *lightning-fast* to every parent, crawler, and screen reader.
