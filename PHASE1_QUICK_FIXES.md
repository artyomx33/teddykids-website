# 🏃‍♂️ Phase 1 Quick Fixes – Teddy Kids Lighthouse Sprint  
*Target: +5–10 Perf, +5 A11y, +3 SEO, +2 BP in ≤ 60 min*

---

## 1. Add `<meta name="viewport">` (Responsive Flag)

**File:** `app/layout.tsx`

1. Open the `<head>` block.
2. Insert the meta tag **above** any `<link rel="preconnect">`.

```tsx
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
  …
</head>
```

**Test**

```bash
# Run Lighthouse mobile preset
npx lighthouse https://teddykids.nl --preset=mobile --view
# “Viewport not set” should disappear
```

---

## 2. Accessibility Labels (Forms & Icon Buttons)

### 2-a. Contact & Apply Inputs

**Files:**  
- `app/contact/ContactForm.tsx`  
- `app/apply/ApplyForm.tsx`

For each input:

**Before**

```tsx
<input
  type="text"
  placeholder="Parent name"
/>
```

**After**

```tsx
<label htmlFor="parentName" className="sr-only">
  Parent name
</label>
<input
  id="parentName"
  name="parentName"
  type="text"
  placeholder="Parent name"
  aria-required="true"
/>
```

### 2-b. Icon-Only Buttons

**Example file:** `components/PlayPauseButton.tsx`

```tsx
<button aria-label="Play Appies welcome audio" …>
  <PlayIcon />
</button>
```

**Test (Chrome DevTools → Lighthouse → Accessibility)**  
“No form field labels” & “Buttons do not have accessible names” warnings should be 0.

---

## 3. Colour-Contrast Tweaks

**Problem areas:** brand-yellow text on white backgrounds.

**File:** `tailwind.config.js`

```js
theme: {
  extend: {
    colors: {
      'brand-yellow': '#C9A40B' // darken from #EAC81E
    }
  }
}
```

Re-build assets:

```bash
npm run build
```

**Visual check**

Run Axe DevTools → ensure “Elements have sufficient colour contrast” passes.

---

## 4. Touch-Target Size (≥ 44 px)

Locate small buttons/links:

```bash
grep -R "<button" app | grep "py-1"
```

**Fix**

Change paddings:

```diff
- className="px-3 py-1 text-sm"
+ className="px-4 py-3 text-sm"
```

Verify tap targets:

```bash
npx lighthouse https://teddykids.nl --preset=mobile --only-categories=best-practices
# “Tap targets are not sized appropriately” should be 0 failures
```

---

## 5. Simple Alt-Text Pass

Search for missing alt attributes:

```bash
grep -R "<Image[^>]*alt={\"\"}" app | wc -l   # decorative images OK
grep -R "<Image[^>]*alt={" app | grep -v alt=\"\" | wc -l
grep -R "<img " app | grep -v alt
```

Add meaningful alt text for content images:

```tsx
<Image
  src="/images/learning/puddle-science.png"
  alt="Preschoolers exploring water science in the Teddy garden"
  width={800}
  height={600}
/>
```

**Re-run accessibility audit**  
`npx @axe-core/cli https://teddykids.nl --exit`

---

## 6. Final Validation

1. **CI/Local**

```bash
npm run lint
npm run build
```

2. **Lighthouse Full Run**

```bash
npx lighthouse https://teddykids.nl \
  --preset=mobile \
  --only-categories=performance,accessibility,seo,best-practices \
  --view
```

Expect ≥ 98 in all categories (99-100 after caching).

---

### ⏱️ Checklist

- [ ] Viewport meta tag committed
- [ ] All inputs have `<label>` + `aria-label`
- [ ] Icon buttons labelled
- [ ] Contrast ratios pass WCAG AA
- [ ] Buttons & links ≥ 44 px
- [ ] No missing descriptive `alt=` on content images
- [ ] Lighthouse mobile run shows no **red** or **orange** a11y items

*Complete these six tasks, commit, and redeploy. Your next Lighthouse run should show green across the board!* 🧸🚦
