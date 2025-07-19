# 🏳️‍🌈 TESTING-TRANSLATION_GUIDE.md  
### *“Als je het goed zegt, zegt Google dankjewel.”*  

Welkom vertalers, devs & AI-helpers! This guide shows you how we keep Teddy Kids sounding vrolijk in every language **without** breaking SEO, a11y or sanity.

---

## 1 · How localisation works

| Layer | Tech | File / Setting |
|-------|------|----------------|
| Routing | Next.js App Router | `/app/[locale]/page.tsx` |
| Content | `i18next` + JSON | `/locales/{locale}/{ns}.json` |
| Images  | `<Image>` + `alt` + captions | Markdown / MDX front-matter |
| Metadata | Next.js `generateMetadata` | Dynamic based on locale param |

Supported locales today:  
`nl-NL` (default) & `en`. More can join the feestje later.

### Fallback chain  

```
nl-NL ➜ en ➜ translation key
```

If a Dutch string is missing we **temporarily** show English, never raw keys.

---

## 2 · Metadata for dynamic language switching

Inside every top-level route we export:

```ts
export async function generateMetadata({ params: { locale } }) {
  return {
    alternates: {
      canonical: '/',
      languages: {
        'nl-NL': '/nl',
        en: '/en'
      }
    },
    openGraph: {
      locale,
      localeAlternate: ['nl-NL', 'en']
    }
  };
}
```

Rules:
1. `locale` param **must** drive both `<html lang="">` and OG tags.  
2. Add new language? Update `i18nConfig.locales` **and** this `languages` map.  
3. Keep canonical pointing at default (`/`).

---

## 3 · Text translation workflow

1. Copy the English namespace file → create `nl-NL/…`
2. Translate strings keeping placeholders intact (`{{firstName}}`, `%d` etc.)
3. Run `npm run i18n:check` → lints missing keys & placeholder mismatches.
4. Open PR tagged **#translation**.

### Creative Dutch examples

| English key | 💬 Good Dutch | 😬 Vermijd |
|-------------|--------------|-----------|
| `hero.tagline` | “Waar spelen leren wordt.” | “Spelen en leren.” (saai) |
| `cta.bookTour` | “Plan een rondleiding” | “Maak een tour” (Dinglish) |
| `footer.copyright` | “© {{year}} Teddy Kids. Alle rechten voorbehouden” | “Alle rechten gereserveerd” |

---

## 4 · Image-based translation 🖼️

Some banners contain baked-in text. Options:

| Scenario | What to do |
|----------|------------|
| Decorative only | Put `alt=""` and leave. |
| Contains text **and** localisable | 1) Provide locale-specific PNG/JPG in `/public/images/{locale}/…` **and** 2) keep original in Figma for translators. |
| Vector / SVG with live text | Use `<Svg translate="no">` and wrap `<text>` nodes with `data-i18n="key"`. |

Got a stubborn PNG? Use GPT-4o Vision:  
“Translate the Dutch text in this daycare banner to English, retain font weight, return transparent PNG.”  
Check contrast & upload.

---

## 5 · Meet Luna, our AI translation sidekick 🌙

**Personality:** 7-year-old polyglot girl who loves picture books and asks “maar waarom?” a lot.

### Prompt template

```
You are Luna, an enthusiastic Dutch child translating website copy.
1. Keep it playful, age-appropriate
2. Prefer short, active sentences
3. Avoid Anglicisms unless no Dutch equivalent exists
4. Maintain placeholders intact ({{likeThis}})
5. Return JSON only, no extra commentary
```

### QA flow

1. Human writes source English.  
2. Run prompt in Factory ➜ get Dutch draft.  
3. Reviewer toggles **Voice-over mode** in browser extension → reads copy aloud.  
4. If it feels “klunky”, adjust and re-run.  
5. Commit when Luna & reviewer both happy.

---

## 6 · Quick checklist ✅

- [ ] Did you update both **title** and **description** in metadata?  
- [ ] Are all placeholders unchanged?  
- [ ] Do images have locale-specific versions if needed?  
- [ ] Does `npm run i18n:check` pass?  
- [ ] Lighthouse A11y still ≥ 95?  

---

## 7 · Common pitfalls & fixes

| Pitfall | Fix |
|---------|-----|
| Hard-coding language in route (`/about-us`) | Use `/[locale]/about` |
| Capitalising every word in Dutch | Only first word & proper nouns! |
| `&` in Dutch copy | Replace with “en” |
| Missing alt after swapping image | Re-run `npm run alt:scan` |

---

### Changelog
* **v1.1 (Jul 20 2025)** – Added image translation section, dynamic metadata sample, Luna expansion, fallback chain.
