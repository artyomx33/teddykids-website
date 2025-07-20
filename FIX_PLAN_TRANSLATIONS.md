# Translation Fix Plan – Teddy Kids Website  
*Date: 20 Jul 2025*  

---

## 1. Current Translation Architecture

| Layer | File | Purpose | Observations |
|-------|------|---------|--------------|
| **Client hook** | `lib/translations.ts` | Exposes `useTranslation(language)` returning helper `t(path)` | Works as expected. |
| **English bundle** | same `translations.ts` (`enTranslations.en`) | Full EN tree, including all pages & UI strings | Complete. |
| **Dutch bundle** | `lib/nl.json` | Intended NL mirror of EN | Large sections present but *incomplete / outdated*. |
| **Component usage** | `t('…')` in most **client** components | i18n-aware | OK. |
| **Server components (/*.page.tsx)** | Often inject **hard-coded English** props (hero titles, paragraphs) | Bypasses `t()`, so Dutch never shows. |

### Key Architectural Gaps  
1. Two separate Dutch sources (`nl.json` + `translations.ts › nl`) causing duplication/confusion.  
2. Server components supply literal EN strings to client components → no translation pathway.  
3. Some client components still contain hard-coded EN snippets (e.g. Contact hero, Learning cards).  

---

## 2. Pages / Blocks Missing Dutch

| Route | Block(s) lacking NL | Severity |
|-------|--------------------|----------|
| `/about` | **Entire page** (placeholders) | 🔴 |
| `/locations` | Hero + second info block | 🟠 |
| `/team` | Hero + philosophy (first two blocks) | 🟠 |
| `/learning` | Hero + all learning-moment cards | 🟠 |
| `/contact` | Hero (“Contact Us”) + intro paragraph | 🟠 |
| `/apply` | Hero + audio CTA + sections (everything except form wizard) | 🟠 |

---

## 3. Root Causes

1. **Missing NL keys** – `about.*` (and others) never added to `nl.json`.
2. **Hard-coded EN in SSR shells** – hero/intro props bypass i18n.
3. **File split confusion** – contributors unsure where to place Dutch; some keys live in `translations.ts`, others in `nl.json`.
4. **Image path mismatches** – e.g. team images renamed `.jpeg` but components still point to `.jpg` (breaks UI & alt tags).

---

## 4. Step-by-Step Fix Approach

### A. Consolidate Translation Source
1. **Choose single Dutch file** → keep `nl.json` only.  
2. Move any `translations.ts › nl` content into `nl.json`, then delete `nl` object from `translations.ts`.  
3. Update `translations.ts` export:  
   ```ts
   export const translations = { en: enTranslations.en, nl: nlJson } as const;
   ```

### B. Complete Dutch Keys
1. Use EN tree as canonical structure.  
2. Script (`npm run i18n:sync`) to diff EN vs NL and output missing keys.  
3. Populate NL copy for all missing paths (start with pages listed in §2).

### C. Refactor Server Components
1. Replace **literal props** with translation look-ups:  
   ```ts
   const { t } = useTranslation(language);
   const heroContent = {
     imageSrc: '/images/heroes/team-hero-new.png',
     title: t('teamPage.hero.title'),
     subtitle: t('teamPage.hero.subtitle'),
   };
   ```
2. Where heavy static copy is needed (e.g. philosophy paragraphs), move text into translations under `teamPage.philosophy.*`.

### D. Sweep for Hard-coded English
1. `grep -R "Passionate caregivers" src/` etc. Automated linter rule: no EN literals inside JSX unless `/* i18n-ok */`.
2. Fix Contact, Learning, Apply, etc.

### E. Image & Asset Corrections
1. Align file names/extensions in components to actual assets (`.jpeg`).  
2. Add alt-text keys alongside copy for accessibility: `teamPage.philosophy.imageAlt`.

### F. Clean-up & Documentation
1. Update **CONTRIBUTING.md** with i18n guidelines.  
2. Enum naming convention: `page.section.block.label`.

---

## 5. Testing Strategy

1. **Type-safety build**  
   * `npm run build` – missing keys trigger TS errors (strict object typing).  

2. **Automated i18n diff test**  
   * CI step: fail if EN vs NL keys diverge.  

3. **Visual QA**  
   * Manual check every route with `?lang=nl` & `?lang=en`.  
   * Percy/Chromatic snapshot diff for hero sections.

4. **Lighthouse i18n audit**  
   * Run `npm run lhci` mobile/desktop – verify no “document has no lang” or “link text” issues.  

5. **Real-device smoke**  
   * Load new.teddykids.nl on iOS/Android – verify hero copy, images, and no 404s.

6. **Regression for EN**  
   * Ensure English remains unchanged.

---

## Timeline & Owners

| Task | Owner | ETA |
|------|-------|-----|
| Consolidate translation source | Dev Droid α | +1 h |
| Add missing NL keys (`about`, `contact`, `learning`, etc.) | Content Droid β | +4 h |
| Refactor server components | Dev Droid α | +3 h |
| Testing & QA sweep | QA Droid γ | +2 h |
| Deploy preview & stakeholder sign-off | PM | +1 h |

*Total*: **~1 working day** to full bilingual parity.
