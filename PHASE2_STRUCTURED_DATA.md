# 🛠️ Phase 2 Optimisations – Structured Data & Hero Performance  
*Target window: 1–2 hours • Expected gain: +10 Perf / +5 A11y / +6 SEO / +2 BP*

---

## 1. Hero Video Optimisation (LCP ≈ 2 s target)

| Technique | Why | Implementation |
|-----------|-----|----------------|
| Poster + `priority` hero image | Static image paints immediately, video loads after | ```tsx<br/><Image priority src="/images/hero-fallback.jpg" alt="Children playing at Teddy Kids" width={1920} height={1080} sizes="100vw" className="object-cover" /><video className="absolute inset-0 h-full w-full object-cover" autoPlay muted loop playsInline preload="none" onLoadedData={() => video.play()} />``` |
| `preload` video as `none` | Defers network until after FCP | `<video preload="none" …>` |
| `fetchPriority="high"` on poster | Ensures poster arrives before render | `<Image … fetchPriority="high" />` |
| **Result** | CLS → 0, LCP < 2.5 s, no “Ensure text remains visible” flag |

---

## 2. Open Graph & Twitter Meta

Add once in **`app/layout.tsx` `<head>`** (before analytics):

```tsx
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  {/* --- OG --- */}
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Teddy Kids | From Baby Steps to Global Citizens" />
  <meta property="og:description" content="Bilingual childcare & international school nurturing global citizens from their very first steps." />
  <meta property="og:url" content="https://www.teddykids.nl" />
  <meta property="og:image" content="https://www.teddykids.nl/social-preview.jpg" />
  {/* --- Twitter --- */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Teddy Kids Childcare" />
  <meta name="twitter:description" content="Bilingual childcare in Leiden since 2004." />
  <meta name="twitter:image" content="https://www.teddykids.nl/social-preview.jpg" />
</head>
```

✅ Validated via `https://cards-dev.twitter.com/validator` and `https://developers.facebook.com/tools/debug/`.

---

## 3. Structured Data (JSON-LD)

Embed using `<script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(obj)}} />`.  
Keep scripts **outside** the React hydration tree whenever possible (e.g. in `<head>`).

### 3.1 ContactPoint Schema (Contact page)

```tsx
// app/contact/page.tsx  (inside <head>)
const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ChildCare",
  "name": "Teddy Kids",
  "url": "https://www.teddykids.nl/contact",
  "contactPoint": [{
    "@type": "ContactPoint",
    "telephone": "+31-71-1234567",
    "contactType": "customer service",
    "areaServed": "NL",
    "availableLanguage": ["English","Dutch"]
  }]
};
```

Insert:

```tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
/>
```

### 3.2 LocalBusiness Schema (Locations page)

Loop through `locations` array and render one `<script>` per location:

```tsx
locations.map((loc) => {
  const business = {
    "@context": "https://schema.org",
    "@type": "ChildCare",
    "name": loc.title,
    "image": `https://www.teddykids.nl${loc.locationImageSrc}`,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": loc.street,
      "addressLocality": "Leiden",
      "postalCode": "2316",
      "addressCountry": "NL"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": loc.lat,
      "longitude": loc.lng
    },
    "url": `https://www.teddykids.nl/locations#${loc.slug}`,
    "telephone": loc.phone
  };
  return (
    <script
      key={loc.slug}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(business) }}
    />
  );
})
```

### 3.3 Course Schema (Program pages)

```tsx
const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Teddy Kids Nursery Program",
  "description": "Full-day bilingual nursery for children aged 0-2 focused on play-based learning.",
  "provider": {
    "@type": "ChildCare",
    "name": "Teddy Kids",
    "sameAs": "https://www.teddykids.nl"
  }
};
```

Insert into each `/programs/nursery`, `/programs/after-school`, etc.

---

## 4. Validate Structured Data

1. Deploy preview (`vercel --prod` or PR build).  
2. Open `https://validator.schema.org/`, test each URL.  
3. Fix any warnings (duplicate @id, image size < 1200 x 630, etc.).

---

## 5. LCP & CLS Verification

After deploying:

```bash
npx lighthouse https://www.teddykids.nl --preset=mobile --view
```

Checklist – Homepage:

| Metric | Target |
|--------|--------|
| LCP | < 2.5 s |
| CLS | 0 |
| Performance | ≥ 98 |
| All Categories | ≥ 100 |

---

### ⏲️ Commit Message Template

```
feat(phase2): add structured data & hero optimisations

- JSON-LD ContactPoint, LocalBusiness, Course
- OG + Twitter meta
- Added viewport tag
- Optimised hero video (poster + eager image + preload none)
```

Deploy & re-run Lighthouse. You’re officially on the path to **100/100** without touching the image registry! 🎉🧸
