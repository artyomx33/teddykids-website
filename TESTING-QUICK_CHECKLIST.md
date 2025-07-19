# ⏲️ 60-Second Teddy Kids Checklist

## 1 · Code
- Confirm file lives in correct folder (`app/` server, `components/client/` client).
- Verify **no unwanted `'use client'`** at top of server components.
- Remove unused vars & imports (`⌥⇧O` in VS Code).
- Ensure translations via `t('key')`, **no hard-coded English**.

## 2 · Images & Assets
- Use `<Image>`; delete `<img>`.
- Size ≤ 1 MB, stored in `/public/images/…`.
- Provide `alt` text or `alt=""` if purely decorative.
- Added new image? Run `npm run img:opt`.

## 3 · Lint, Tests, Perf
- `npm run lint:fix` → 0 errors.
- `npm run test` & `npm run test:a11y` → pass.
- `npm run lhci:local` → Performance ≥ 85, A11y ≥ 95, SEO 100.

## 4 · 30-Second GPT Code Review
Prompt (copy-paste):

```
Act as a strict senior Next.js reviewer.
1. Reject any file that adds 'use client' to shared layouts.
2. Highlight bundle bloat or hydration risk.
3. Flag images not using next/image.
4. Enforce i18n & a11y best practices.
Return a concise bullet list of issues only.
```

Run on diff, fix issues, re-run until **“No findings”**.

## 5 · Deploy (Prod Guardrails)
1. Push branch → green PR checks (lint, build, LHCI budgets).
2. Preview on Vercel, spot-check Core Web Vitals overlay.
3. Feature flagged? Enable in **Staging** first.
4. Database change? `prisma migrate deploy --preview-feature` on staging, verify.
5. Hit **“Squash & Merge”** → production auto-deploy.

## 🔗 Cross-References
- Full rules: [CONTRIBUTING](./CONTRIBUTING.md)
- Perf & A11y budgets: [DEVELOPMENT_GUIDE](./DEVELOPMENT_GUIDE.md)
- Translation workflow: [TRANSLATION_GUIDE](./TRANSLATION_GUIDE.md)
- Setup basics: [START_HERE](./START_HERE.md)

---

### Changelog
* **v1.0 (Jul 20 2025)** – Grok upgrade: server-component focus, GPT review prompt, prod deploy safeguards.
