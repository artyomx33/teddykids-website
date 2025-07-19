# Contributing to the Teddy Kids Website

Welcome 🧸 – Whether you are a core developer or jumping in for one fix, this guide will get you productive **fast** and keep our CI green.

---

## 1. Development Setup

1. **Clone & Install**

   ```bash
   git clone https://github.com/artyomx33/teddykids-website.git
   cd teddykids-website
   npm install
   ```

2. **Start Dev Server**

   ```bash
   npm run dev     # http://localhost:3000
   ```

3. **Prerequisites**

   * Node >= 20  
   * npm >= 10  
   * macOS/Linux/WSL (Windows works via WSL2)

---

## 2. Code Quality Standards

| Category | Rule (excerpt) | Why |
|----------|----------------|-----|
| Images   | `@next/next/no-img-element: error` | Always use `next/image` for optimisation. |
| JSX Text | `react/no-unescaped-entities: error` | Escape `' "` to avoid HTML parse issues. |
| Imports  | `@typescript-eslint/no-unused-vars: error` | Keep bundle lean. |
| Style    | Follow **Tailwind first**, fallback to local CSS modules or inline styles. |
| Naming   | `camelCase` for vars & fns, `PascalCase` for React components. |
| Types    | Everything in `/app` & `/components` must be TypeScript. |

Run locally:

```bash
npm run lint        # check
npm run lint:fix    # auto-fix
```

---

## 3. Pre-commit Hooks (Husky v9+)

```bash
# one-off initialisation
npm install --save-dev husky lint-staged
npx husky init                # creates .husky folder
echo "npm run lint:fix && npm run build" > .husky/pre-commit
chmod +x .husky/pre-commit    # make executable on some shells
```

*Every commit now auto-fixes lint AND guarantees the project still builds.*

---

## 4. Development Workflow

1. **Branch** from `main`:  
   `feat/short-description`, `fix/bug-description`.
2. **Commit early, push often.** Pre-commit hook prevents bad lint/build.
3. **Create PR** → wait for GitHub Actions (lint + build) to pass.
4. **Squash & Merge** (or let maintainer do it).  
5. **Vercel Preview** is auto-generated per PR. Verify before production deploy.

---

## 5. Common Pitfalls & How to Avoid Them

| Pitfall | Prevention |
|---------|------------|
| Using `<img>` | Use `<Image />` with `alt` & `sizes`. |
| Forgetting to escape quotes | `'` → `&apos;`, `"` → `&quot;` in JSX blocks. |
| Unused variables/imports | VSCode ESLint highlights – delete before commit. |
| Pushing without building | Pre-commit hook + run `npm run build` locally if large refactor. |
| Large video/image files | Compress & place under `/public/images/...`, keep under **1 MB** where possible. |

---

## 6. VS Code Setup (Recommended)

Install extensions:

* **ESLint** – autofix on save  
* **Prettier** – formatting (optional, Tailwind prettier plugin recommended)  
* **Tailwind CSS IntelliSense**

Add to *settings.json*:

```jsonc
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.validate": ["javascript", "typescript", "javascriptreact", "typescriptreact"]
}
```

---

## 7. Build Requirements Before Deploy

A PR can be merged only if **all** are true:

1. `npm run lint` passes (zero errors, warnings acceptable but discouraged).  
2. `npm run build` passes (Next.js + type-check).  
3. **No** `@next/next/no-img-element`, **no** `react/no-unescaped-entities`, **no** unused vars.  
4. All images referenced exist in `/public`.  
5. Lighthouse CI score ≥ 80 for Performance & Accessibility (checked nightly).  

---

Happy coding & thank you for helping keep Teddy Kids magical!  
_Questions? Ping **@Artem** on Slack or open a GitHub Discussion._
