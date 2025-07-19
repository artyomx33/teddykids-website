# 🚨 STOP & READ THIS FIRST ! 🚨

This repo ships with **87 / 100 Performance**, **100 / 100 SEO**, **98 / 100 Accessibility** on Lighthouse **mobile throttling**.  
Those numbers keep parents happy and Google smiling. Ruin them and the site bleeds users.

---

## 📚 Essential Guides

| Guide | Why you need it |
|-------|-----------------|
| **[CONTRIBUTING.md](./CONTRIBUTING.md)** | Local setup, lint/build hooks, Husky instructions |
| **[TRANSLATION_GUIDE.md](./TRANSLATION_GUIDE.md)** | Tone-perfect NL localisation with Luna’s prompt & QA |
| **[DEVELOPMENT_GUIDE.md](./DEVELOPMENT_GUIDE.md)** | Architecture, SSR defaults, perf & a11y playbook |
| **[QUICK_CHECKLIST.md](./QUICK_CHECKLIST.md)** | 60-second pre-commit checklist (images, GPT, deploy) |

_Review them **before** editing a single line._

---

## 💥 Skip the rules, pay the price

• ⏱️ **Slower LCP** → parents bounce  
• 🕳️ **SEO drop** → fewer sign-ups  
• ⚠️ **A11y regressions** → legal & ethical risk  
• 📦 **Bundle bloat** → higher mobile data bills  
• 🧸 **Sad toddlers** (okay, maybe not… but don’t risk it)

---

## 🤖 Note for AI Assistants

ChatGPT, Claude, Gemini, Factory Droids & friends — follow the guides above, especially the **GPT Code Review** in _QUICK_CHECKLIST.md_.  
Future projects: clone, then run `npm run init-setup` to auto-enable Husky, ESLint, LHCI baseline **and** default every new page to **server components** (SSR/SSG first, no top-level `'use client'`). Ignore this and your PR will be rejected.

Happy, guideline-compliant coding! 🎉
