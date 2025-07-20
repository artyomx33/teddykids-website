# 🛑 MEGA MERGE CONFLICT REPORT
Branch: `droid/mega-merge-integration`  
Generated: 20 Jul 2025 12:18 UTC

---

## 🔥 CURRENT STATUS

1. **Conflicts Active** – This branch still contains unresolved merge markers, so regular `git commit` is blocked until they are fixed.  
2. **Base Integration Done** – The mega-merge has already cherry-picked ✔️ the Tailwind fix (`droid-3`) and Dutch i18n commit (`droid/website-fixes`).  
3. **Phase-4 Stash Applied** – The Phase 4 optimisation stash was popped; it introduced new files and created the current conflict set.  
4. **Push Blocked** – Do **not** push to remote until all conflicts below are resolved and the project passes `npm run build`.

---

## 1 · Merge Conflicts Detected so Far

| File | Conflict Type | Notes |
|------|---------------|-------|
| `app/layout.tsx` | **Content + **_unresolved markers_** | Head section cleanup, GTM script, sticky CTA. Markers removed for first header but **later “</LanguageProvider>” block still duplicated – needs manual scan. |
| `app/sitemap.ts` | **Logic & constants conflict** | `baseUrl` differs (`https://www.teddykids.nl` vs `https://new.teddykids.nl`) **and** Phase-4 turns array into rich objects (priority, changeFrequency). Markers present. |
| `.lighthouserc.js` | **Config conflict** | “desktop preset + many chromeFlags” (main) **vs** “mobile formFactor + custom throttling” (Phase-4). Markers present. |

> Action: Conflict markers still present in `app/sitemap.ts` and `.lighthouserc.js`. `app/layout.tsx` merged but must be code-reviewed.

---

## 2 · Build-Time Errors (Vercel)

```
Module not found: Can't resolve '@/lib/seo' in ./app/layout.tsx
```

Additional missing artefacts
• `@/lib/seo.ts` – not committed  
• `@/lib/images.ts` – referenced by Phase-4 nav audit script  
• Deleted hero images still referenced in JSX (`locations-hero2.png`, `team-hero.png`)  

Root cause: Phase-4 introduced new helpers & renamed assets but only some were added to git. Build for branch `sprint1/post-merge` fails during webpack module resolution.

---

## 3 · Files Requiring Manual Review / Completion

1. `app/layout.tsx` – validate resolved version & remove temporary `eslint-disable` if unused.
2. `app/sitemap.ts` – finish conflict merge; ensure correct export (`dynamic = 'error'` etc.).
3. `.lighthouserc.js` – decide final Lighthouse budgets.
4. `lib/seo.ts` – add or restore committed file to satisfy import.
5. `lib/images.ts`, `scripts/assert-nav.js`, newly added images – verify path & case-sensitive names for Linux builds.
6. Removed images (`public/images/heroes/locations-hero2.png`, `team-hero.png`) – update any refs.
7. `.lighthouseci/**` artifacts – commit or ignore via `.gitignore`.

---

## 4 · Proposed Resolution Plan

1. **Lock Branch**
   • Push current WIP branch to remote so all droids can pull.  
   • Freeze other merges until conflicts resolved.

2. **Assign Owners**
   • UI/Layout: Droid-3  
   • SEO/Sitemap: Droid-2  
   • Perf Budgets: Droid-1  

3. **Conflict Fix Session**
   1. Checkout `droid/mega-merge-integration`.
   2. Resolve `.lighthouserc.js`  
      • Keep **mobile formFactor + throttling** (aligns with CI budgets)  
      • Merge Chrome flags from desktop profile that improve stability  
      • Final budgets: Perf ≥ 0.8, A11y ≥ 0.95, SEO ≥ 0.95  
   3. Resolve `app/sitemap.ts`  
      • Use `https://www.teddykids.nl` as canonical `baseUrl`  
      • Adopt rich-object structure (priority/lastModified) for **all** routes  
      • Export `dynamic = 'error'` at top for runtime safety  
   4. Add missing helper files  
      • Restore `lib/seo.ts` (title templating + openGraph defaults)  
      • Ensure `lib/images.ts` committed or remove import  
      • Re-add renamed hero images or update JSX references

4. **Validation Checklist**
   - `npm run lint` → 0 errors  
   - `npm run build` locally → succeed  
   - `npm run lhci:local` → budgets honoured  
   - Manual smoke on routes: `/`, `/about`, `/sitemap.xml`

5. **Push & Trigger Vercel Preview**
   • Confirm green build and core web vitals unchanged.

6. **Cross-Droid Testing Phase (per comments)**
   - Phase A: domain-specific tests (15 min each).  
   - Phase B: cross-integration (Lighthouse, E2E).

7. **Final Review & Merge to `main`**
   • Squash merge with message “MEGA MERGE – Tailwind fix, Dutch i18n, Phase-4 perf”.

8. **Post-Merge Cleanup**
   • Delete stale branches (`droid-3`, `droid/website-fixes`, `droid/phase-4-polish`).  
   • Close resolved GitHub issues.

---

### Next Step (blocking)

> Finish conflict resolution in `.lighthouserc.js` and `app/sitemap.ts`, and commit `lib/seo.ts`. Then re-run build.

---

## 5 · TESTING Setup Files & Current Status

We already generated five improved setup guides on branch `droid/enhance-setup-files` and copied them here with the `TESTING-` prefix:

```
TESTING-START_HERE.md
TESTING-CONTRIBUTING.md
TESTING-TRANSLATION_GUIDE.md
TESTING-DEVELOPMENT_GUIDE.md
TESTING-QUICK_CHECKLIST.md
```

Status:
• Content ✅  – reviewed, links updated, now include Teddy Web FixBot.  
• Naming 🚧 – remove `TESTING-` prefix only **after** mega-merge builds green.  

Filename caveats spotted during merge:
1. Spaces in several hero images (`public/images/heroes/locations hero.png`, `team hero.png`).  
   – Either rename to kebab-case (`locations-hero.png`) or update JSX imports.  
2. Double extension in `team-hero 1.png` – pick final asset and delete the rest.  

Quick conflict-fix command sequence for any droid:

```bash
# example: resolve sitemap then continue merge
git checkout droid/mega-merge-integration
npx git-merge-driver list-conflicts   # optional helper
code app/sitemap.ts                   # edit & save
git add app/sitemap.ts
git commit --no-edit                  # or 'git cherry-pick --continue'

# rebuild & lint in one go
npm run lint && npm run build
```

Once the branch is stable and Vercel preview passes:
```bash
git mv TESTING-START_HERE.md START_HERE.md
git mv TESTING-CONTRIBUTING.md CONTRIBUTING.md
# …repeat for the remaining three
git commit -m "docs: promote TESTING guides to production"
```

After merge to `main`, delete the old `droid/enhance-setup-files` branch.
