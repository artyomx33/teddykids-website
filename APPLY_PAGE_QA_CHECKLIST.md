# Apply Page – QA Checklist

| # | Area | Item | Status | Priority | Description |
|---|------|------|--------|----------|-------------|
| **1** | **Translation / Content** | EN keys `applyPage.brutalLuna.*`, `applyPage.cta.*`, `audioSection` & `howItWorks` added | ✅ Fixed | High | Confirmed new copy renders instead of raw keys |
|  |  | NL parity for new sections | ⚠️ Needs Testing | High | Verify Dutch page shows proper text & no missing keys |
|  |  | Hero title/subtitle accuracy | ⚠️ Needs Testing | Medium | Ensure copy matches latest marketing wording |
|  |  | Form field labels & validation messages bilingual | ⚠️ Needs Testing | Medium | Review both languages, especially error strings |

| **2** | **Visual / UI** | Brutal-Luna CTA styling (gradient, shadow, heading weight) | ✅ Fixed | High | Matches Luna specs (#ffefef gradient, bold copy) |
|  |  | Progress bar & step icons alignment desktop/mobile | ⚠️ Needs Testing | Medium | Check visual glitches at each step |
|  |  | Checkbox + label spacing | ⚠️ Needs Testing | Low | Slight overlap on Safari iOS reported |

| **3** | **Functional** | Multi-step navigation (Next/Previous) | ⚠️ Needs Testing | High | Validate no dead-ends, preserves state |
|  |  | Validation & error messaging each step | ⚠️ Needs Testing | High | Required fields & checkbox enforcement |
|  |  | EmailJS async send + success transition to step 6 | ⚠️ Needs Testing | High | Use test account; ensure failure fallback alert works |
|  |  | Audio playback button (Appies welcome) | ⚠️ Needs Testing | Medium | Works on iOS (needs user gesture) & Android |
|  |  | Dynamic import chunk loads without SSR flash | ✅ Fixed | Medium | Verified in code; still smoke-test in browser |

| **4** | **Mobile / Responsive** | Hero video disabled <768 px, fallback image sharp | ⚠️ Needs Testing | High | Check bandwidth & CLS on mobile |
|  |  | Grid→single-column transitions (program & location cards) | ⚠️ Needs Testing | Medium | Ensure padding doesn’t collapse |
|  |  | Form inputs zoom on iOS | ⚠️ Needs Testing | Low | Safari auto-zoom annoyance |

| **5** | **Performance** | EmailJS lazy-loaded (code-split) | ✅ Fixed | High | Bundle shrink ~1.6 kB |
|  |  | Fonts preconnect / preload implemented | ✅ Fixed | Medium | Verify no FOIT/flash |
|  |  | Lighthouse Performance ≥ 90 | ⚠️ Needs Testing | High | Re-run after fixes |

| **6** | **SEO / Accessibility** | Headings hierarchy (H1→H2 etc.) | ⚠️ Needs Testing | Medium | Ensure no skipped levels |
|  |  | Alt text for images/video poster | ⚠️ Needs Testing | Low | Screen-reader compliance |
|  |  | Button roles / ARIA labels for dynamic icons | ⚠️ Needs Testing | Low | Especially audio button |

| **7** | **Conversion (Luna Requirements)** | “Let’s make this real.” punch copy present | ✅ Fixed | High | Matches exact phrasing |
|  |  | Dual CTAs: Apply (primary), Tour (secondary) | ✅ Fixed | High | Primary pink button, outline secondary |
|  |  | Scarcity note “Takes 2 minutes…” visible | ✅ Fixed | Medium | Encourages completion |
|  |  | Animated hover scale on Apply button | ⚠️ Needs Testing | Low | Confirm subtle 1.05 scale |

---

### Legend
✅ Fixed – implemented & smoke-tested  
⚠️ Needs Testing – implement appears correct; requires manual/QA confirmation  
❌ Issue – known bug not yet addressed  
