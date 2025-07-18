# Locations Page — To-Do Tracker  
_Last updated: 18 Jul 2025_

## ✅ Completed
| # | Task | Details | Commit / PR |
|---|------|---------|-------------|
| 1 | **Hero upgraded** | Full-height parallax hero now uses `locations-hero.png` (backup `locations-hero2.png` kept). | `f0b9dc4` |
| 2 | **Google Maps embedded** | Interactive custom map iframe added (shared link). | `a2b0dfa` |
| 3 | **CTA rewritten (EN & NL)** | Luna’s emotional copy + yellow style dropped in. | `a2b0dfa` |
| 4 | **Consistent hero style** | Matches Team / Learning / Programs for brand coherence. | `a2b0dfa` |

---

## 🚧 Remaining
| Priority | Task | Owner | Notes |
|----------|------|-------|-------|
| **P0** | **Replace placeholder TISA logos** | Design → FE | Import real SVG/PNG for NL & PT and update `/images/logos/` references. |
| **P0** | **Add i18n keys for new CTA** | Content → FE | Ensure `locationsPage.cta.*` EN & NL strings live in `lib/translations.ts`. Remove inline fallback literals. |
| **P1** | Hero alt-text NL variant | Content | Add `locationsPage.hero.alt` Dutch copy. |
| **P1** | Visual QA (mobile) | QA | Verify map iframe responsiveness & CLS. |
| **P2** | Lighthouse baseline | QA | Mobile ≥ 85 after logo swap & translations. |
| **P2** | Optional background illo | Design | Faint Appies / bubbles per Luna bonus idea (if approved). |

---

### Definition of Done
- Real TISA logos render & pass contrast checks.
- No raw translation keys visible in either locale.
- Lighthouse mobile ≥ 85, SEO 100.
- Map iframe accessible (title, loading="lazy").
- PR references this file and checks required boxes.
