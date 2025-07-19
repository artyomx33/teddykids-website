# Current Architecture Audit
*(Branch: `droid/ssr-infrastructure-fix` — 19 Jul 2025)*  

This inventory captures the **exact CSR footprint** of Teddy Kids’ Next .js codebase and maps the work required to migrate to proper Server-Side Rendering and Static Generation.

---

## 1. Page Rendering Matrix

| Route | File | Current Rendering | `metadata()` / `<Head>` | `use client` present | Recommended Target | Effort |
|-------|------|------------------|-------------------------|----------------------|--------------------|--------|
| `/` | `app/page.tsx` → `HomePageClient.tsx` | **CSR** | Yes (metadata export) | **No** on `page.tsx`, **Yes** in client component | **SSG** (`dynamic='force-static'`) | **M** |
| `/locations` | `app/locations/page.tsx` | **CSR** | Inline `<Head>` only | **Yes** | **SSG** | **H** (large data) |
| `/team` | `app/team/page.tsx` | **CSR** | Inline only | **Yes** | **SSG** | **M** |
| `/programs` | `app/programs/ProgramsPageClient.tsx` via wrapper | **CSR** | Inline preload tags | **Yes** | **SSG + video streamed** | **M** |
| `/contact` | `app/contact/page.tsx` → `ContactPageClient.tsx` | **CSR** | None | **Yes** | **SSR** (form handling) | **M** |
| `/apply` | `app/apply/page.tsx` → `ApplyPageClient.tsx` | **CSR** | None | **Yes** | **SSR** (multi-step) | **H** |
| `/learning` | `app/learning/page.tsx` → `LearningPageClient.tsx` | **CSR** | None | **Yes** | **SSG** | **M** |
| `/about` | `app/about/page.tsx` → `AboutPageClient.tsx` | **CSR** | None | **Yes** | **SSG** | **L** |
| `/about/policy` | `app/about/policy/page.tsx` | **CSR** | None | **Yes** | **SSG** | **L** |
| `/accepted` | `app/accepted/page.tsx` | **CSR** | None | **Yes** | **SSG** | **L** |
| `/apie` | `app/apie/page.tsx` | **CSR** | None | **Yes** | **SSG** | **L** |
| `/programs/*` detail routes | Stub redirects | CSR | N/A | N/A | **SSG** | **S** |

**Legend:** L = Low (<½ day) · M = Medium (½–1 day) · H = High (>1 day)

---

## 2. `use client` Over-Usage

- **All top-level pages** import a `*PageClient.tsx` wrapper flagged `use client`.
- Many purely presentational components inside **components/sections** also include `use client` though they have **no browser-only APIs**.
- Quick win: Strip `use client` from ~80 % of components; keep only form logic & localStorage hooks.

---

## 3. Server vs Client Component Split

| Layer | Current | Ideal |
|-------|---------|-------|
| **Pages** | 100 % Client Components | Server Components with selective client widgets |
| **Sections** (`Hero`, `Team`, `Locations`) | Mixed, mostly client | Server (data fetch) + mini client sub-components for interactivity |
| **Forms** (`Contact`, `Apply`) | Client | **SSR page** + **client hooks** for validation |
| **Shared UI** (`Button`, `Image wrappers`) | Client | Server (stateless) |

---

## 4. Metadata Coverage

- Only `app/page.tsx` exports `metadata`.
- Remaining pages rely on scattered `<Head>` blocks or none at all.
- **Action:** Centralise in each `page.tsx` (App Router) or in layout with dynamic params.

---

## 5. Quick Wins vs Complex Changes

### Quick Wins (≤ 1 day total)
1. Remove redundant `use client` from static sections.
2. Add `export const dynamic = 'force-static'` to **About / Accepted / Apie / Policy** pages.
3. Implement global `<title>` / `<meta description>` via `metadata()` in `app/layout.tsx`.
4. Generate **robots.txt** allowing all & pointing to future sitemap.

### Medium Complexity (1–3 days)
1. Convert **Home / Team / Programs / Learning** to SSG.
2. Move data fetching for **Locations** to `getStaticProps`-style pattern (`fetch` in Server Component).
3. Build `sitemap.xml` with `next-sitemap` package.

### High Complexity (>3 days)
1. Convert **Apply** multi-step form to hybrid SSR (server actions) + client hydration.
2. Implement **Internationalised metadata** (`alternates.language`) for NL.
3. Performance pass: split hero video into `poster` + lazy-loaded stream.

---

## 6. Page-by-Page Effort Estimate

| Page | Tasks | Est. hrs |
|------|-------|----------|
| Home | Remove client wrapper, fetch translations server-side, metadata | 4 |
| Locations | Server fetch of `lib/locations`, map to props, static generation | 6 |
| Team | Convert philosophy & grid to Server Component, keep modal client | 4 |
| Programs | Use server hero poster, split video, static generation | 5 |
| Contact | Keep form client, render static HTML structure | 3 |
| Apply | Rewrite to server actions + progressive enhancement | 10 |
| Learning | Pure markdown-like content → static | 2 |
| About / Policy / Accepted / Apie | Mark static & remove client | 1 each |

_Total initial pass ≈ **35–40 hrs** (1 dev week)_

---

## 7. Recommended Execution Order

1. **Quick-win static flag pass**  
2. **Global metadata & robots**  
3. **Home → SSR/SSG template** (sets pattern)  
4. **Locations & Team**  
5. **Programs**  
6. **Contact**  
7. **Apply (complex)**  
8. **Performance & analytics polish**

---

### Conclusion
The audit confirms Luna & Grok: we’re shipping a JS shell. Implementing the above phased plan will make Teddy Kids **crawlable, accessible, and fast**, laying a solid foundation for future features.
