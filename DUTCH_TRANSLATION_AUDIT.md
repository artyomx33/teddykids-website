# 🇳🇱 Dutch Translation Audit
_Last updated: 18 July 2025_

## 1. Overview
• **i18n system:** `lib/translations.ts` with `en` & `nl` keys, consumed via `useTranslation()`.  
• **Issue:** Several hard-coded English strings still live inside React components → they bypass the translator and show English to Dutch visitors.  
• **Scope of audit:** pages touched since _appiesGPT_ performance refactor (Team, Learning, Apply, Accepted).  

| Metric | Status |
|--------|--------|
| Keys in `lib/translations.ts` | ✅ Complete for existing entries |
| Hard-coded strings found | ❌ **46** (see tables) |
| Dutch coverage | ~ 92 % |

---

## 2. Hard-coded English Strings & Suggested NL Copy

### 2.1 Team Page (`app/team/page.tsx`)

| Line | English Literal | 🎯 Suggested Dutch |
|------|-----------------|--------------------|
| 19   | Meet Our Team | Maak kennis met ons team |
| 20   | Passionate caregivers, bilingual hearts, one big Teddy family. | Gepassioneerde begeleiders, tweetalige harten, één grote Teddy-familie. |
| 46   | The People Who Make Magic Happen | De mensen die de magie mogelijk maken |

### 2.2 Learning Page (`app/learning/LearningPageClient.tsx`)

| Line | English Literal | 🎯 Suggested Dutch |
|------|-----------------|--------------------|
| 155  | Where brilliance hides in everyday moments | Waar genialiteit schuilt in alledaagse momenten |
| 162  | Peek inside to see how your child learns when they think they’re just playing. | Neem een kijkje en zie hoe uw kind leert terwijl het denkt dat het alleen maar speelt. |
| 210  | Learning in Action | Leren in actie |
| 214  | Witness the magic of discovery in our bilingual environment | Ervaar de magie van ontdekkingen in onze tweetalige omgeving |

### 2.3 Apply Page (`app/apply/ApplyPageClient.tsx`)

| Step | English Title | English Description | 🎯 Dutch Suggestion |
|------|---------------|---------------------|---------------------|
| 1 | Complete Application | Just 3 minutes of clicking & dreaming. | Aanvraag invullen | Slechts 3 minuten klikken & dromen. |
| 2 | Application Review | Our team reads every word. Real humans. | Beoordeling aanvraag | Ons team leest alles – echte mensen. |
| 3 | Tour & Interview | Come meet us, touch the toys, feel the vibe. | Rondleiding & gesprek | Kom langs, speel met het speelgoed, proef de sfeer. |
| 4 | Enrollment Confirmation | Paperwork made simple. Clarity first. | Plaatsing bevestigd | Papierwerk simpel gemaakt. Duidelijkheid eerst. |
| 5 | Welcome to Teddy Kids | We help with the first day, the nerves, and the celebration. | Welkom bij Teddy Kids | We helpen bij de eerste dag, de spanning en het feest. |
|   | Parent + Child Info | - | Ouder + kind informatie |
|   | Almost there! | - | Bijna klaar! |

_Total strings: 22_

### 2.4 Accepted Page (`app/accepted/page.tsx`)

| Section | English Literal | 🎯 Dutch Suggestion |
|---------|-----------------|---------------------|
| Timeline | You’ll receive a personal message from your Site Leader | U ontvangt een persoonlijk bericht van uw locatiemanager |
| Timeline | You’ll receive your onboarding packet right here | U ontvangt hier uw onboarding-pakket |
| Timeline | Schedule a soft-start day to ease the transition | Plan een wen-dag om de overgang soepel te maken |
| Timeline | You prepare. We get ready. | U bereidt zich voor. Wij staan klaar. |

_Total strings: 7_

---

## 3. Action Items

| Priority | Task | Owner | Status |
|----------|------|-------|--------|
| P0 | Extract every literal listed above into `lib/translations.ts` (`en` & `nl` sections) | Front-end dev | ⬜ |
| P0 | Replace literals in **Team** & **Learning** components with `t('…')` look-ups | Front-end dev | ⬜ |
| P1 | Add Apply-page process steps & subtitles to translations file; update component | Front-end dev | ⬜ |
| P1 | Localise Accepted page timeline strings | Front-end dev | ⬜ |
| P2 | Run grep for residual English literals (`"[A-Z][^\\n]*[a-z]"`) & verify | QA | ⬜ |
| P2 | Update unit tests to expect translated output | QA | ⬜ |

---

## 4. Implementation Guide

1. **Add keys** – follow existing nesting, e.g.  
   ```ts
   teamPage: { hero: { title: 'Meet Our Team' /* en */, title_nl: 'Maak kennis…' } }
   ```
2. **Import** in component:
   ```tsx
   const { t } = useTranslation(language);
   <h1>{t('teamPage.hero.title')}</h1>
   ```
3. **Default language fallback** – ensure `en` remains default if `nl` missing.
4. **Verify** – run site in Dutch (`?lang=nl`) & English, confirm no English bleed-through.
5. **Lighthouse / SEO** – re-run audits; translation changes should not affect scores.

---

## 5. Done-Definition Checklist (per PR)

- [ ] New keys added to both `en` & `nl`
- [ ] Component uses `t()` instead of literal
- [ ] Unit test snapshot updated
- [ ] `npm run check` passes
- [ ] `Quick_Checklist` followed
