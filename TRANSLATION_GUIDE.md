# 📚 Teddy Kids Translation Guide (EN ➜ NL)

> **Goal:** Translate English content into _native-level_ Dutch while preserving Teddy Kids’ warm-yet-cheeky mafia-family vibe.

---

## 1. Luna’s Master Prompt

**🎯 Goal:** Translate the English content into native-level Dutch, maintaining emotional tone, brand personality, and psychological engagement.

**🔥 INSTRUCTIONS:**

* This is **not** a word-for-word translation — it’s a **tone-perfect localisation**.  
* Match the Teddy Kids vibe: **warm, confident, a little cheeky, emotionally intelligent, always clear**.  
* Use impactful Dutch phrasing that feels natural to parents — never robotic or corporate.  
* **Do NOT soften the messaging.** Keep the boldness: e.g. “Je wordt gekozen”, “We ghosten niet”.  
* Where literal English sounds weird, craft a better native line that sparks **vertrouwen, verbondenheid, of een glimlach**.  
* Tone = mix of *familie-uitnodiging* + *inner-circle privilege* (Netflix-mafia-doc × liefdevolle ouder).  

**🧠 Tricks**
* Short punchy lines > long formal ones.  
* Sprinkle idiomatic Dutch for flavour.  
* Keep power words consistent: **familie, uitnodiging, startdatum, persoonlijk contact**, etc.

Copy this block whenever you brief a translator or GPT.

---

## 2. Good vs Bad Examples

| English Source                              | 🚫 Bad NL (literal)                                     | ✅ Good NL (approved)                                                      |
|--------------------------------------------|---------------------------------------------------------|---------------------------------------------------------------------------|
| **“Welcome to the Inner Circle.”**         | “Welkom bij de Binnenste Cirkel.”                       | “Welkom in onze inner circle.”                                            |
| **“We don’t ghost.”**                      | “We spooken niet.”                                      | “We ghosten niet.” *(intentionally keeps English loanword for punch)*     |
| **“Your start date will be custom-fit.”**  | “Uw startdatum zal aangepast worden.”                   | “We prikken samen een startdatum die precies bij je gezin past.”          |
| **“Book a tour” (button)**                 | “Boek een rondleiding” *(too formal)*                   | “Plan een bezoek”                                                         |
| **“The pact is sealed.”**                  | “Het pact is verzegeld.” *(okay but stiff)*             | “De deal is beklonken.”                                                   |

_Heuristic: If it sounds like a government brochure, rewrite._

---

## 3. Brand Voice Keywords (Keep Consistent)

| EN Key Term           | Preferred NL Term    |
|-----------------------|----------------------|
| family                | **familie**          |
| chosen / induct       | **uitnodiging**, **gekozen** |
| no ghosting           | **ghosten niet**     |
| start date            | **startdatum**       |
| personal contact      | **persoonlijk contact** |
| inner circle          | **inner circle** (loanword) |
| free trial days       | **proefdagen**       |
| location head / chief | **locatie-hoofd**    |
| pact / seal           | **deal**, **zegel**  |

---

## 4. Common Pitfalls & How to Avoid Them

| Pitfall                                | Fix / Prevention                                   |
|----------------------------------------|----------------------------------------------------|
| Literal translations (“u” everywhere)  | Use **je/jullie** unless legal copy.               |
| Over-formal tone                       | Read aloud; if it sounds stiff, rewrite shorter.   |
| Dropping bold mafia flavour            | Keep punch words: _inner circle, gekozen, ghosten_.|
| Losing CTA urgency                     | Buttons must start with strong verbs: “Apply Now” → “Nu aanmelden”. |
| HTML entities within translations      | Escape once only. Lint will warn.                  |

---

## 5. Technical Implementation

### File Structure
```
/app
/locales
  ├─ en.json
  └─ nl.json
```

* **Key = snake_case English**  
* **Value = string** (may contain `{variables}`)

### Adding / Updating Keys
1. Add English key/value to `en.json`.
2. Copy key to `nl.json` and translate per Luna’s prompt.
3. Run: `npm run lint:fix` – ESLint checks for missing keys.

### Finding Missing or Stale Keys
* Script: `npm run i18n:report` (coming soon) will output:
  * `missing` – keys in EN but not NL  
  * `obsolete` – keys in NL not in EN  
  * `diff-length` – suspect mismatches (>40 % length diff)

### Pre-commit Hook (already set up)
`husky → .husky/pre-commit`
```
npm run lint:fix && npm run build
```
Fails the commit if:
* There are untranslated keys.
* React `no-unescaped-entities` errors.
* Build breaks.

### Lint Rules
```jsonc
// .eslintrc
"@next/next/no-html-link-for-pages": "off",
"i18n/no-missing-translation-key": "error",
"i18n/no-different-translation-content": "warn"
```
_Custom rules live in `/scripts/eslint-rules/`._

### Adding New Languages
1. Duplicate `en.json` → `de.json` (etc.)
2. Add file to `locales/index.ts`.
3. Update `i18n.config.ts` with new locale code.

---

## 6. Workflow Checklist (TL;DR)

1. **Create / update keys** in **en.json**.  
2. **Translate** into **nl.json** using Luna’s prompt.  
3. **Run lint/build** (pre-commit does this).  
4. **Preview** Vercel deploy – check line breaks & emoji.  
5. **QA** with a native Dutch reader.  
6. **Merge → main** ✅  

Happy translating & welkom in de inner circle! 🧸✨  
