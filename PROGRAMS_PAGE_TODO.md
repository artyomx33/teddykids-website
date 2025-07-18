# Programs Page ‑ To-Do Tracker
_Last updated: 18 Jul 2025_

## ✅ Completed
| # | Task | Details | PR / Commit |
|---|------|---------|-------------|
| 1 | **Hero layout upgraded** | Switched from padded banner to full-height parallax section (matches Team / Learning). | `f4dbbf9` |
| 2 | **Image paths corrected** | Card images now point to existing files (`nursery.jpg`, `preschool.jpg`, `afterschool.jpg`, `tisa.jpg`). | `f4dbbf9` |
| 3 | **Component refactor** | `<ProgramsPageClient>` cleaned: removed obsolete gradient overlay markup, simplified hero copy pull from i18n. | `a2b0dfa` |

---

## 🚧 Still To Do
| Priority | Task | Owner | Notes |
|----------|------|-------|-------|
| P0 | **Provide hero asset** | Design | Create `programs-hero.jpg` (1920×600) in `/public/images/heroes/`. Alt: “Children engaged in various programs at Teddy Kids”. |
| P0 | **Link hero image** | FE | Update `<Image src="/images/heroes/programs-hero.jpg" … />` once file exists. |
| P0 | **Fix raw translation keys** | FE | Keys like `programsPage.hero.overlayTitle` display on live site → add to `lib/translations.ts` (`en` & `nl`) and use `t()` lookup. |
| P0 | **Schedule items i18n** | FE | Replace hard-coded bullet arrays with translation arrays: `programsPage.sections.nursery.scheduleItems`, `…afterSchool.scheduleItems`. |
| P1 | **Audit remaining literals** | QA | Run `grep` for residual English strings; ensure 100 % translation coverage (see Dutch audit doc). |
| P1 | **Add hero copy NL variants** | Content | Provide Dutch for `programsPage.hero.title/subtitle`. |
| P2 | **Update Lighthouse baseline** | QA | After hero image & i18n fixes, rerun mobile Lighthouse → keep Performance ≥ 85. |

---

## 📎 References
- Design prompt for hero image: _Studio-storybook style, golden-hour, children in action (1920×600)_.
- Dutch translation audit: `DUTCH_TRANSLATION_AUDIT.md`.
- Development standards: `DEVELOPMENT_GUIDE.md` & `QUICK_CHECKLIST.md`.

---

### Definition of Done
- Hero image renders on **/programs** without CLS.
- No raw translation keys visible in any locale.
- `npm run check` passes; Lighthouse ≥ 85 (mobile), SEO 100.
- PR linked to this TODO file with all boxes checked.
