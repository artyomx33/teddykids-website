# Contributing to the Teddy Kids Website 🧸

Welcome — whether you’re tackling a one-line typo or a heroic feature, this guide gets you productive **fast** and keeps our CI green.

---

## 1 · Development Setup

1. **Clone & install**

   ```bash
   git clone https://github.com/artyomx33/teddykids-website.git
   cd teddykids-website
   npm install
   ```

2. **Start dev server**

   ```bash
   npm run dev   # http://localhost:3000
   ```

3. **Prereqs**

   • Node ≥ 20 • npm ≥ 10 • macOS/Linux/WSL (Windows via WSL2)

> **Future projects:** after cloning, run `npm run init-project`.  
> It scaffolds SSR-by-default boilerplate (app/layout.tsx, `dynamic = 'force-static'` flags) and seeds a Lighthouse baseline so you never face another “client-only refactor.”

---

## 2 · Code Quality Standards

| Category | Rule (excerpt) | Why |
|----------|----------------|-----|
| Images   | `@next/next/no-img-element: error` | Use `<Image>` for optimisation |
| JSX Text | `react/no-unescaped-entities: error` | Prevent HTML parse issues |
| Imports  | `@typescript-eslint/no-unused-vars: error` | Zero dead code |
| Style    | Tailwind first; CSS modules fallback | Bundle size & consistency |
| Types    | Everything in `/app` & `/components` must be TypeScript | Safety & DX |
| SSR 🔄   | **Server components by default** — add `'use client'` only when interactive | Perf, SEO, no hydration bugs |

Run locally:

```bash
npm run lint        # check
npm run lint:fix    # auto-fix
```

---

## 3 · Pre-commit Hooks (Husky v9 + lint-staged)

```bash
# one-off
npx husky init
echo "npm run lint:fix && npm run build && npm run lhci:local" > .husky/pre-commit
chmod +x .husky/pre-commit
```

*Every commit now auto-fixes lint, builds, **and** fails if Lighthouse Performance < 80.*

---

## 4 · Development Workflow

1. Branch from `main` → `feat/…`, `fix/…`.  
2. Commit early; pre-commit guard handles quality.  
3. Open PR; GitHub Actions runs lint/build/LHCI.  
4. Squash & merge when green.  
5. Vercel preview = final sanity check.

---

## 5 · Common Pitfalls & How to Avoid Them

| Pitfall | Prevention |
|---------|------------|
| Raw `<img>` tags | Use `<Image>` with `alt`, `sizes`. |
| Hard-coded English | All copy goes through `useTranslation`. |
| **Client-only renders** | Default server components; add `'use client'` sparingly & justify in PR. |
| Unescaped quotes in JSX | `'` → `&apos;`, `"` → `&quot;`. |
| Large assets (>1 MB) | Compress & store in `/public/images/…`. |
| Skipping build locally | `npm run build` before heavy PRs. |

---

## 6 · VS Code Setup (Recommended)

Extensions:

• **ESLint** – auto-fix on save  
• **Tailwind CSS IntelliSense**  
• **Next.js** – highlights server vs client & route metadata  
• **LHCI Viewer** (optional) – local perf checks

Add to *settings.json*:

```jsonc
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": { "source.fixAll.eslint": true },
  "eslint.validate": ["typescriptreact", "typescript", "javascriptreact", "javascript"]
}
```

You can also add a task to run `npm run lhci:local` for one-click perf audits.

---

## 7 · Build Gate Before Merge

A PR may merge **only if**:

1. `npm run lint` → 0 errors.  
2. `npm run build` passes.  
3. Lighthouse CLI mobile ≥ 80 Perf / ≥ 95 A11y / 100 SEO.  
4. No untranslated keys, no unused vars, no `<img>`.  
5. All images exist in `/public`.

---

## 8 · Need Help?

Open a GitHub Discussion or ping **@Artem** on Slack. We’re friendly. 🧸

---

### Changelog
* **v1.2 (Jul 20 2025)** – Added SSR default rule, LHCI hook, client-render pitfall, VS Code Next.js tip, and future-project notes.
