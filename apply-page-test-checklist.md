# Apply Page Translation Test Checklist

## 1 – Areas to Test
| Section | Key UI Elements |
|---------|-----------------|
| Hero    | Title & subtitle text |
| Audio Section | Header, sub-header, button text, note |
| “How It Works” | Section header, every step title & description |
| Brutal Luna CTA | Header, sub-header, note, Apply/Tour buttons |
| Multi-step Form | Step names in progress bar + field labels & error messages |
| FAQ / Footer snippets | Any copy pulled from `applyPage.*` keys |

---

## 2 – Expected Results
1. **English locale** (`en`) shows polished English strings (no `applyPage.*` keys visible).
2. **Dutch locale** (`nl`) shows the Dutch equivalents.
3. No mixed-language fragments; entire page follows the currently active locale.
4. Server-rendered HTML already contains translated text (view-source shows real strings).
5. Switching languages triggers instantaneous text swap without full reload errors.

---

## 3 – How to Test Language Switching
1. **Manual toggle**  
   • Click the site’s language button (EN/NL).  
   • Observe every section updates.

2. **Header spoof**  
   • Open DevTools → Network → Disable cache & set “Accept-Language” to `nl`.  
   • Hard-refresh `/apply`.  
   • Verify server sends Dutch HTML.

3. **cURL check** (CLI)  
   ```
   curl -s -H "Accept-Language: nl" https://localhost:3000/apply | grep -o "Jullie avontuur"
   ```
   Should return Dutch hero string; zero occurrences of `applyPage.hero.title`.

---

## 4 – Issues to Look For
| Issue Type | Symptom |
|------------|---------|
| Literal keys | `applyPage.hero.title` or `locationsPage.applyPage.*` visible |
| Partial update | Some sections switch language while others stay English |
| Missing Dutch copy | English text appears when Dutch selected |
| Broken links | CTA buttons lose routing after language switch |
| A11y errors | Form error messages not translated / missing ARIA `aria-live` |
| SEO regression | Page HTML devoid of copy until JS loads (inspect `view-source`) |

---

## 5 – Next Steps

### If All Tests Pass
1. Merge branch & deploy to staging.
2. Re-run Lighthouse (Mobile & Desktop) → expect +5 Perf / 100 SEO.
3. Close “Apply Page i18n” issue; open follow-ups for ARIA & FAQ schema enhancements.

### If Tests Fail
| Failure | Immediate Action |
|---------|------------------|
| Literal keys | Check wrong path; ensure `applyPage.*` is **flat** (or update code paths). |
| Dutch missing | Copy key block from `en` to `nl` translation file & translate. |
| Server HTML empty | Remove Suspense/dynamic import; ensure `force-static` wrapper pattern. |
| Mixed language | Confirm `setLanguage()` propagation and no hard-coded English strings. |
| Form errors un-translated | Add keys under `applyPage.form.errors.*`; update validation. |

Document each failure in issue tracker before re-deploying. 
