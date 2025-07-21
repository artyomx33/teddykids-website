# Home Page File & Component Map

_Last updated: 21 Jul 2025_

## 1. Top-Level Routing Entry

| File | Type | Purpose |
| --- | --- | --- |
| **`app/page.tsx`** | Server Component (`force-static`) | • Entry point for `/` route<br>• Imports UI primitives and **StandardHero**<br>• Renders static sections, defers interactive widgets to dynamic imports |

### Key Imports in `app/page.tsx`

```tsx
import { Hero as StandardHero } from '@/components/ui/StandardHero';
import Pillars         from '@/components/sections/Pillars';
import SocialProof     from '@/components/sections/SocialProof';
import Programs        from '@/components/sections/Programs';
const AppiesGPT        = dynamic(() => import('@/components/sections/AppiesGPT'));
const LocationsPreview = dynamic(() => import('@/components/sections/LocationsPreview'));
```

Relationship:

```
/ (route)
└─► app/page.tsx
     ├─► StandardHero        (hero banner)
     ├─► Pillars             (values section)
     ├─► SocialProof         (reviews section)
     ├─► Programs            (program cards)
     ├─► AppiesGPT (dynamic) (AI widget)
     └─► LocationsPreview (dynamic)
```

## 2. Legacy / Fallback Client Shell

| File | Type | Notes |
| --- | --- | --- |
| `app/HomePageClient.tsx` | **Client Component** | Older client wrapper still present for quick prototyping. _Not_ referenced by router after migration but kept for comparison. Uses the same **StandardHero** import. |

## 3. Hero Implementation Stack

| Layer | File | Highlights |
| --- | --- | --- |
| API Surface | `components/ui/Hero.tsx` | Thin re-export: `export { Hero } from './StandardHero'` for backward compatibility. |
| Core Component | **`components/ui/StandardHero.tsx`** | • Fixed height `h-[675px]` (per Grok spec)<br>• Accepts `title`, `subtitle`, `imageSrc`, optional `videoSrc`, `ctaText`, `ctaLink`.<br>• Handles SSR, accessibility, and image optimisation (`getImageProps`). |
| Helper (internal) | `getImageProps` (inside same file) | Centralises `next/image` props (priority, sizes, quality etc.). |

Flow:

```
app/page.tsx
     └─ import { Hero as StandardHero }
StandardHero.tsx
     ├─ renders <section class="relative h-[675px] ...">
     └─ may include <video> or <Image> background
```

## 4. Home-Specific Section Components

These are children of `app/page.tsx`, independent of the hero but part of the home experience.

| Component | Path | Role |
|-----------|------|------|
| Pillars | `components/sections/Pillars.tsx` | Core values columns |
| SocialProof | `components/sections/SocialProof.tsx` | Testimonials & ratings |
| Programs | `components/sections/Programs.tsx` | Nursery / Preschool / BSO cards |
| AppiesGPT | `components/sections/AppiesGPT.tsx` | Chat assistant (dynamic, client-only) |
| LocationsPreview | `components/sections/LocationsPreview.tsx` | Mini map + CTA to `/locations` |

## 5. Asset Relationships

```
StandardHero
   ├─ imageSrc e.g. /images/heroes/hero-fallback.jpg
   └─ optional videoSrc e.g. /videos/tk-hero-loop.mp4
```

All hero media live under `public/images/heroes/` and `public/videos/`.

## 6. How to Trace Hero Usage

1. Search imports: `grep -r "ui/StandardHero" app/`
2. Confirm only **StandardHero** is used (the re-export handles any stray `ui/Hero` imports).
3. Inspect rendered HTML: `<section class="relative h-[675px] ...">` should appear once per page.

---

**TL;DR**  
The home page route (`app/page.tsx`) directly consumes **StandardHero**. All other hero appearances across the site import the same component, ensuring a single source of truth for styling, height, and performance.
