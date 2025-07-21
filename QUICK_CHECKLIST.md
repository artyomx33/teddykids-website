# QUICK_CHECKLIST.md

A lightning-fast reference for every dev before committing changes.

---

## ✅ BEFORE ADDING IMAGES
- [ ] **Optimize first** – run `npm run img:opt` (lossless, WebP/PNG ≤ 2200 px).
- [ ] **Place correctly**  
  • Heroes → `public/images/heroes/`  
  • Team → `public/images/team/` (`name.jpg` + optional `name-alt.jpg`)  
  • Other → context-specific folder.
- [ ] **Use next/image** – add `priority` + `sizes` for above-the-fold.
- [ ] **Include descriptive `alt` text** (keyword + context).
- [ ] **Decorative?** add `aria-hidden` and `loading="lazy" fetchPriority="low"`.
- [ ] **Visual match** – ensure artwork follows current branding guidelines  
      (see `/public/images/branding/` or confirm with design lead).

---

## ✅ BEFORE CREATING COMPONENTS
- [ ] Is it **stateful / interactive**? → mark `'use client'`. Otherwise keep server.
- [ ] Keep components **atomic** (UI) or **section** (page block) – place accordingly.
- [ ] Export **Prop types** with strict TypeScript (`no any`).
- [ ] Add **unit test** in `__tests__/` if logic > trivial  
      (e.g., `ComponentName.test.tsx`, `myFunction.test.ts`).
- [ ] Ensure **a11y**: labels, keyboard focus, color contrast ≥ 4.5 : 1.

---

## ✅ BEFORE SUBMITTING GPT-GENERATED CODE
- [ ] `npm run check` – zero type, lint, and test errors.
- [ ] Choose correct component type: **server by default**, add `'use client'` only when needed.
- [ ] Use **`next/image`** (never raw `<img>`); follow image rules above.
- [ ] Avoid new heavy dependencies – prefer built-ins or existing utilities.
- [ ] All text must use **`useTranslation()`** keys (no hard-coded copy).
- [ ] Style via Tailwind or shared components – no inline CSS unless utility.

---

## ✅ BEFORE MAKING PERFORMANCE CHANGES
- [ ] Run **Lighthouse CLI** (mobile) baseline – target ≥ 85.
- [ ] Avoid importing heavy libs in client components – use **dynamic import()**.
- [ ] Verify images/vids have proper `sizes`, `poster`, `preload`.
- [ ] Check **bundle size** with `next build` → look for warnings.
- [ ] Confirm caching headers (`Cache-Control`) unaffected.

---

## ✅ BEFORE DEPLOYING
- [ ] `npm run check` – type, lint, test all green.
 - [ ] Lighthouse **mobile & desktop ≥ 95**, SEO 100, A11y ≥ 95.
- [ ] Verify no **broken links** or 404s (run `npm run link-check`).
- [ ] Review **DEV GUIDE** for structural compliance.
- [ ] Push to branch → **Preview deploy** passes.
- [ ] Merge to `main` → watch Vercel build until **● Ready**.
- [ ] Commit messages: present-tense, conventional prefix  
      (e.g., `feat: add lazy load`, `fix: update hero alt text`).
