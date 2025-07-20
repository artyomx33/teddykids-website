# Translation Fixes — Phase 2  
Date: 20 Jul 2025  
Owner: i18n Task-Force (Droid-2)  

---

## 1 · Objective  
Eliminate the final pockets of untranslated copy and minor layout issues so the Teddy Kids site is 100 % bilingual (EN/NL) and visually consistent in both languages.

---

## 2 · Task Breakdown by Page

### 2.1 Learning Page (`/learning`)
| Area | Issue | Action Items |
|------|-------|--------------|
| Cards – **Bilingual** | Title “Bilingual” still English in NL | 1. Add key `learningMoments.categories.bilingual` already exists → ensure component uses it.<br>2. Verify Dutch copy: “Tweetalig”. |
| Card – **Cultural Celebrations: Sinterklaas** | Title & description English | 1. Add keys under `learningMoments.cards.item5.title` / `.description` (already partially Dutch).<br>2. Fix card import to use `t(...)`. |
| Card – **The Teddy Garden Project** | Title & description English | 1. Keys exist `learningMoments.cards.item6.*` → wire to component. |
| CTA Section (Bottom) | Entire paragraph & buttons English | 1. Add keys:<br>  • `learningMoments.ctaTitle`<br>  • `learningMoments.ctaSubtitle`<br>  • `learningMoments.ctaPrimary`<br>  • `learningMoments.ctaSecondary` (already present).<br>2. Replace hard-coded copy with translations. |
| “Watch Video” / “Read More” buttons | English strings | 1. Keys `learningMoments.watchVideo`, `learningMoments.readMore`.<br>2. Swap to `t(...)`. |

### 2.2 Contact Page (`/contact`)
| Area | Issue | Action Items |
|------|-------|--------------|
| Hero alignment | Text not vertically centered | 1. Adjust Flexbox/CSS (`items-center justify-center`). |
| Hero translation | Title & subtitle fixed English | 1. Verify keys under `contact.hero.*` (already Dutch).<br>2. Replace static text with `t(...)`. |
| Entire page body | Forms / labels remain English | 1. Audit all text nodes inside Contact components.<br>2. Add missing NL keys to `nl.json` and English counterparts to `translations.ts`. |
| **AppiesGPT** placement | Should appear top-of-page | 1. Move `AppiesGPTButton` component above main form section. |

### 2.3 Apply Page (`/apply`)
| Area | Issue | Action Items |
|------|-------|--------------|
| Multi-step form headings/labels | NL missing on majority of steps | 1. Map every current hard-coded string to new keys under `locationsPage.applyPage.*` (sections already partly defined).<br>2. Update `ApplyPageClient` to use translations. |
| Process-timeline titles | English | Add keys `locationsPage.applyPage.processSteps.*` and swap. |
| Validation messages | English | Introduce helper `getValidationMessage(key)` with locale variants. |
| Floating WhatsApp overlay vs CTA buttons | Overlap ‑ UI bug | 1. Relocate fixed WhatsApp FAB to earlier z-index.<br>2. Remove duplicate “Apply / Book” buttons inside FAB if redundant.<br>3. Alternatively combine into speed-dial style component. |
| Dutch copy for confirmation (Teddy Mafia screen) | English headings | Keys under `locationsPage.applyPage.confirmation.*` -> translate. |

### 2.4 Home Page (`/`)
| Area | Issue | Action Items |
|------|-------|--------------|
| Hero “Apply Now” button | Should deep-link | 1. Change `href="/apply#application-form"` so users land at form. |
| Dutch translation verification | Ensure new deep link label uses `t('hero.cta2')`. |

---

## 3 · Global Tasks
1. **Translation Inventory**  
   • Run `grep -R ">" app | grep -iE "[A-Za-z]{4,}"` to catch remaining literals.  
   • Cross-check with `DUTCH_TRANSLATION_AUDIT.md` list.

2. **Add Missing Keys**  
   • Extend `lib/translations.ts` (EN) and `lib/nl.json` keeping _flat_ key structure.

3. **Automated i18n Test**  
   • Jest test renders each route in both locales and asserts no string contains regex `[A-Za-z]{3,}` when locale=nl & key absent (flag placeholder).

4. **Lighthouse Regression**  
   • Re-run on both locales, maintain thresholds (Perf ≥ 96, A11y ≥ 98).

---

## 4 · Acceptance Criteria
- Switching language instantly updates **all** visible strings on the specified pages.
- Visual layout identical between locales; no overflow or mis-aligned elements.
- No untranslated English appears in NL mode (manual spot + automated test).
- WhatsApp FAB no longer obscures CTA buttons.
- Home “Apply Now” routes directly to form section.

---

## 5 · Timeline
| Task | ETA | Responsible |
|------|-----|-------------|
| Learning page fixes | 1 h | Droid-2 |
| Contact page fixes | 1 h | Droid-2 |
| Apply page overhaul | 2 h | Droid-3 |
| Home button link | 10 m | Droid-1 |
| Global audit & tests | 1 h | Droid-QA |

_Total: 5 h development + 30 m QA_

---

## 6 · Next Steps
1. Create `feature/i18n-phase2` branch.  
2. Implement tasks in order above; commit per page with Conventional Commit messages (`fix(i18n): …`).  
3. Open PR → run CI + deploy to `new.teddykids.nl`.  
4. Stakeholder review (Artem).  
5. Merge to `main` → Vercel production deploy.

---
