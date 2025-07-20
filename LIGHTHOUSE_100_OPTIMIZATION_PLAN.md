# 🚀 Lighthouse 100/100 Optimization Plan  
*Focus: Non-Image Tasks Only – v1.0 (20 Jul 2025)*

This roadmap compiles **Luna** & **Grok** feedback, trimmed to exclude the large image-registry refactor. Follow these steps to move every public route on `teddykids.nl` to *consistent 100/100 scores* for **Performance, Accessibility, Best-Practices & SEO** (mobile + desktop).

| Phase | Effort | Goals | Perf Δ | A11y Δ | SEO Δ | BP Δ |
|-------|--------|-------|--------|--------|-------|------|
| 1 Quick Wins | 30-60 min | Fix low-hanging audit flags | +5-10 | +5 | +3 | +2 |
| 2 Polish Sprint | 1-2 h | LCP/CLS, meta, schema | +10-15 | +5 | +6 | +2 |
| 3 Security & Monitoring | 1 h | Bot-stop & alerts | ↔︎ | ↔︎ | +2 | +2 |
| 4 Regression Guard | 30 min | CI Lighthouse & analytics | ↔︎ | ↔︎ | ↔︎ | ↔︎ |

---

## 📍 Baseline (mobile, homepage – Jul 20)

| Metric | Score |
|--------|-------|
| Performance | 95 |
| Accessibility | 92 |
| Best-Practices | 97 |
| SEO | 93 |

Main offenders:  
• Missing `<meta viewport>` on some pages (Viewport flag)  
• LCP ≈ 5 s (autoplay hero video)  
• 15 inputs/buttons missing labels  
• Minor color-contrast infractions  
• No structured data for Contact/Locations/Programs  
• No reCAPTCHA on forms

---

## 🔥 Phase 1 – 30-60 min Quick Wins

| # | Task | Why & Impact | Code / Steps | Est. |
|---|------|--------------|--------------|------|
|1|Add `<meta name="viewport">` to **app/layout.tsx**|Fix “no viewport” flag, mobile zoom issues|```html\n<meta name="viewport" content="width=device-width, initial-scale=1" />```|5 min|
|2|Label Inputs & Buttons|A11y + Screen-reader compliance|Add `<label htmlFor>` to all form fields; for icon buttons add `aria-label`|15 min|
|3|Color-Contrast Fix|Pass WCAG AA|Use Tailwind shade tweaks or `focus-visible:outline` helpers; check Axe|10 min|
|4|Touch Target ≥ 44 px|Mobile BP flag|Increase `py-3` / `px-4` on small buttons & link paddings|10 min|
|5|Add missing **alt** text (simple)|A11y & SEO; no image refactor|Audit with Axe → add `alt=""` where missing; decorative images keep empty alt|10 min|
|6|Mobile Lighthouse re-run|Confirm wins; gather new LCP/CLS|`npx lighthouse https://teddykids.nl --preset=mobile --view`|5 min|

---

## 🛠️ Phase 2 – 1–2 h Polish & Structured Data

| # | Area | Action | Snippet / Tool | Est. |
|---|------|--------|----------------|------|
|7|Hero LCP|Use static **poster + `priority`** image, video lazy-load after `onLoad`|```tsx\n<Image priority src=\"/images/hero-fallback.jpg\" ... />\n<video loading=\"lazy\" ... />```|20 min|
|8|CLS|Ensure every `<Image>` has `width` & `height` (or `fill`+`sizes`) – **manual**, no registry|Search `src=` & patch|15 min|
|9|Structured Data – ContactPoint|Improve SEO + BP|Add JSON-LD script on `/contact` (see Luna example)|15 min|
|10|Structured Data – LocalBusiness (locations)|Inject per-location JSON-LD in `/locations` page|Generate dynamically from props|15 min|
|11|Program Schema (`Course`)|Add JSON-LD to each `programs/*` route|Use static object or helper|15 min|
|12|OG / Twitter Cards|Enhance link previews|Add `og:*` + `twitter:*` meta in `app/layout.tsx`|10 min|

---

## 🔐 Phase 3 – Security, Best-Practices & Monitoring (1 h)

| # | Task | Why | Steps | Est. |
|---|------|-----|-------|------|
|13|Invisible **reCAPTCHA v3** on Contact + Apply forms|Prevent spam, satisfy BP|Register keys → `react-google-recaptcha-v3` → wrap submit|30 min|
|14|Vercel Analytics + Performance Alerts|Catch LCP spikes|Enable in project → set alert when LCP > 2.5 s |10 min|
|15|Slack / Email Error Alerts|DevOps|Vercel → Alerts → Errors & Builds|10 min|

---

## 🧪 Phase 4 – CI Regression Guard (30 min)

1. **GitHub Action:**  
   ```yaml
   - name: Lighthouse CI
     uses: treosh/lighthouse-ci-action@v10
     with:
       urls: |
         https://teddykids.nl/
         https://teddykids.nl/apply
       budgetPath: ./.lighthouseci/budget.json
   ```
2. **Fail build** if any category < 95.  
3. **PR Comment Bot** posts scores.

---

## 📅 Implementation Timeline

| Week | Owner | Deliverables |
|------|-------|--------------|
|W1 | Dev Team A | Phase 1 tasks complete |
|W1-W2 | Dev Team B | Phase 2 polish live |
|W2 | DevOps | Phase 3 security & alerts |
|Continuous | QA | CI regression & monitoring |

---

## ✅ Definition of “Done”

• All public routes ≥ 100/100 in **Performance, A11y, BP, SEO** on fresh Lighthouse mobile run  
• No Axe or Lighthouse accessibility violations  
• Structured data validated (https://validator.schema.org)  
• reCAPTCHA active; spam < 1/day  
• Vercel alerting enabled; CI gate active

Let’s push Teddy Kids from “amazing” to **legendary**—without touching the image architecture 🚀🧸
