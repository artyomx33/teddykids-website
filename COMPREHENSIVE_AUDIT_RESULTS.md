# Comprehensive Audit Results

## 1. After-School Page – Translation Issue  
**Error:** `TypeError: a(...).map is not a function` during prerender of `/programs/after-school`.

**Cause**  
`AfterSchoolPageContent.tsx` calls  
```tsx
t('afterSchoolPage.[section].items').map(...)
```  
but `afterSchoolPage.*.items` **do not exist** in `lib/translations.ts` (EN & NL).  
At build-time the call returns a **string**, not an array, so `.map()` crashes.

**Fix**  
1. Add structured translation keys for `afterSchoolPage` in both languages.  
   Suggested shape:  
   ```json
   "afterSchoolPage": {
     "overview": { "items": ["…", "…"] },
     "schedule": {
       "schoolDays": { "items": [ { "time": "", "activity": "", "description": "" } ] },
       "holidays":   { "items": [ … ] }
     },
     "activities": { "items": ["…"] },
     "themeWeeks": { "items": ["…"] },
     "features":   { "items": [ { "icon": "", "title": "", "description": "" } ] },
     "quotes":     { "items": [ "…" ] },
     "hero": { "title": "", "tagline": "" }
   }
   ```
2. Ensure every `.map()` loop receives an **array**.
3. Add fallback guards (`Array.isArray(...) ? … : []`) to prevent future crashes.

---

## 2. StandardHero Prop Audit

| Page / Component | Current Props Passed | Issues | Action Needed |
|------------------|----------------------|--------|---------------|
| **Apply** (`app/apply/ApplyPageClient`) | `title, subtitle, imageSrc, alt, ctaText, ctaLink` | ✅ correct | none |
| **Home** (`app/HomePageClient`) | `title, subtitle, imageSrc, videoSrc` | • missing `alt` (uses default fallback)<br>• no CTA | optional: add `alt`, decide on CTA |
| **Learning** (`app/learning/LearningPageClient`) | `title, subtitle, imageSrc, videoSrc` | same as Home | add `alt`, optional CTA |
| **About** (`app/about/AboutPageClient`) | `title, subtitle, imageSrc, videoSrc` | same | add `alt`, optional CTA |
| **Programs (listing)** (`app/programs/ProgramsPageClient`) | `title, subtitle, imageSrc, videoSrc` | same | add `alt`, optional CTA |
| **After-School** (`app/programs/after-school/AfterSchoolPageContent`) | `title, subtitle, imageSrc` | • missing `alt` & CTA<br>• relies on missing translations (see §1) | add `alt`, optional CTA |
| **Root / (Marketing home)** (`app/page.tsx`) | hard-coded `title, subtitle, imageSrc, videoSrc` | • missing `alt`, CTA | add `alt`, decide CTA |

**HeroProps reference**

```ts
type HeroProps = {
  title: string;
  subtitle: string;
  imageSrc: string;
  videoSrc?: string;
  ctaText?: string;
  ctaLink?: string;
  alt?: string;
};
```

All usages must conform to this.

---

## 3. Consolidated Fix Checklist

Priority | Task | Files / Areas
---------|------|--------------
P1 | Add `afterSchoolPage` translations (EN & NL) with **array values** | `lib/translations.ts`, `nl.json`
P1 | Guard `.map()` calls with `Array.isArray` where appropriate | `AfterSchoolPageContent.tsx`
P2 | Add missing `alt` prop to all StandardHero usages for accessibility & type-safety | Home, Learning, About, Programs, After-school, Root
P2 | Decide on and add CTA (`ctaText`, `ctaLink`) for pages where marketing flow benefits | (marketing team decision)
P3 | Run `npm run type-check && npm run build` locally to confirm zero TS errors | —
P3 | Trigger new deployment & verify Vercel build passes | —

---

### Next Steps

1. **Implement translation objects** → commit.  
2. **Patch all StandardHero calls** → commit.  
3. **Local build** (`next build`) must succeed.  
4. **Push to `main`** → observe successful Vercel deployment.  
5. Smoke-test live site & run Lighthouse.

This single round of fixes should eliminate remaining build blockers and fully deliver the optimised site. 🚀
