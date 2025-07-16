# Image Placeholders Guide  
_All placeholder files currently use the tiny **Apie-monkey** icon (24 × 24 px PNG). Replace each file with a **real, production-ready asset** that matches the specs below._

---

## Legend  
• **Path** – exact location in `public/`  
• **Replace with** – what the final asset should be  
• **Suggested size / format** – guidance for optimal web performance  

---

## 1. Home Page (`/`)
| Path | Replace with | Suggested size / format |
|------|--------------|-------------------------|
`images/hero-fallback.jpg` | Hero fallback photo (matches hero video) | 2560 × 1440 px JPG, ≤300 KB |
`videos/tk-hero-loop.mp4` | Silent hero loop video | 1920×1080 px H-264 MP4, ≤8 MB |
`images/og-image.jpg` | Social share image | 1200 × 630 px JPG |
### Social-proof logos
`images/logos/leiden-university.png`  
`images/logos/gemeente-leiden.png`  
`images/logos/erasmus.png`  
`images/logos/partner-4.png` | Official partner logos (transparent) | ~220 × 80 px PNG or SVG |

### Location preview cards (front page)
`images/locations/rbw_1.jpg`  
`images/locations/rb3rb5_1.jpg`  
`images/locations/lrz_1.jpg` | 1 hero photo per location | 1280 × 800 px JPG |

---

## 2. Locations Page (`/locations`)
| Path | Replace with | Suggested size / format |
|------|--------------|-------------------------|
`images/locations/map-hero.jpg` | Stylised map / aerial montage | 1920 × 1080 px JPG |
#### Individual location galleries (3 shots each)
`images/locations/{rbw|rb3rb5|lrz|zml}_{1..3}.jpg` | Real site photos (indoor / outdoor) | 1920 px wide JPG, ≤300 KB |
#### TISA logos
`images/logos/tisa-logo-placeholder.png`  
`images/logos/tisa-pt-logo-placeholder.png` | Official TISA NL / PT logos | Transparent PNG or SVG, ~300 × 120 px |

---

## 3. Team Page (`/team`)
| Path | Replace with | Suggested size / format |
|------|--------------|-------------------------|
`images/team/team-group.jpg` | Group photo of HQ team | 2000 × 1200 px JPG |
`images/team/{artem|tess|jess|meral|antonela|pamela|svetlana|sofia}.jpg` | Individual headshots | 600 × 800 px JPG, ≤120 KB |
`images/team/team-{rbw|rb3rb5|lrz|zml}.jpg` | Crew photo per location | 1600 × 1000 px JPG |

---

## 4. Global Assets
| Path | Replace with | Suggested size / format |
|------|--------------|-------------------------|
`images/icons/banana-icon.png` | (kept) Apie monkey icon 24 × 24 px PNG |
`favicon.ico` | Multi-size favicons (16–48 px) | ICO |
`images/hero-bg-pattern.svg` | Optional subtle pattern | SVG |

---

## 5. Programs Section (Home → “What We Offer” cards)
| Path | Replace with | Suggested size / format |
|------|--------------|-------------------------|
`images/programs/nursery.jpg` | Real nursery / baby-care photo | 800 × 600 px JPG, ≤200 KB |
`images/programs/preschool.jpg` | Preschool activities & learning | 800 × 600 px JPG, ≤200 KB |
`images/programs/afterschool.jpg` | After-school fun & exploration | 800 × 600 px JPG, ≤200 KB |
`images/programs/tisa.jpg` | TISA campus / logo montage | 800 × 600 px JPG (PNG if logo), ≤200 KB |

Each card uses the image as a full-bleed background with text & emoji overlaid, so choose photos with good contrast or add a subtle darken/lighten overlay.

---

### How to Replace
1. Keep the **exact filename & path** so code references remain valid.  
2. Optimise files (TinyPNG, Squoosh) before copying over the placeholder.  
3. After replacement, run `npm run dev` to verify images load.  
4. Commit and push changes on your feature branch.  

Happy updating! 🐵
