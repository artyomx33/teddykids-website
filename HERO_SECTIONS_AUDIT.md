# Hero Sections Audit  
Reference design = Contact page hero  
Goal: every hero block (visual banner at top of a page) should share the same structural pattern, differing only in source media (video / image) and copy.

---

## 0. Reference – Contact Page Hero  ✅

| Property | Value |
|----------|-------|
| Container class | `relative h-[50vh] md:h-[60vh] overflow-hidden` |
| Background media | `<video>` (desktop) + same image as `poster` + in-DOM `Image` fallback (covers whole area) |
| Gradient overlay | `<div class="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20" />` |
| Content wrapper | `relative z-10 h-full flex items-center justify-center text-center px-4` + inner `max-w-2xl` |
| Height strategy | fixed viewport fraction, never `h-screen` |
| Extra mascots | Optional character outside content (z-10) |
| Mobile logic | Mobile always shows image; video only rendered on `!isMobile` |

---

## 1. Home Page Hero  ⚠️

### Current implementation
```
<section class="relative h-[60vh] md:h-[70vh] hero-parallax overflow-hidden">
  (Image OR video) 
  <div class="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20" />
  <div class="relative z-10 h-full flex items-center justify-center text-center">
      ...
```
Differences:  
1. Extra inner **30 % black overlay** on image (`bg-black bg-opacity-30`).  
2. Uses `hero-parallax` utility not in reference (fine, optional).  
3. No mascot (ok).  

### Proposed Fix Snippet
Remove the inner black overlay:
```tsx
{/* Fallback image – no extra dark layer */}
<Image ... fill className="object-cover object-center" />
```

---

## 2. Learning Page Hero  ⚠️

### Current implementation
* Matches reference nearly 1-for-1.  
* Inner 30 % overlay on image identical to Home.

### Key Differences
Same extra 30 % overlay → image appears darker than Contact.

### Proposed Fix
Delete `<div class="absolute inset-0 bg-black/30" />`.

---

## 3. About Page Hero  ⚠️

### Current implementation
* Gradient direction **to-r** ✔
* Has inner 30 % black overlay ❌  
* Container height `h-[60vh] md:h-[70vh]` (✔)

### Proposed Fix
Remove inner overlay.

---

## 4. Apply Page Hero  ⚠️

### Current implementation
* Gradient direction **to-r** ✔  
* Inner 30 % overlay ❌  
* Content wrapper class identical.  

### Proposed Fix
Remove inner overlay.

---

## 5. Programs Root Hero  ⚠️

### Current implementation
* Some pages have static `Image` only, older markup (`h-screen`, gradient to-b).  

### Key Differences
1. Uses `h-screen` (too tall).  
2. Gradient different direction + only 2 stops.  
3. No video logic guard.

### Proposed Fix Snippet
```tsx
<section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
  <Image ... fill className="object-cover object-center" />
  <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20" />
  <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
     ...
```

---

## 6. Locations Page Hero  ⚠️
Similar to Programs: tall, `to-b` gradient, 2-stop.

### Fix: same snippet as Programs.

---

## 7. Team Page Hero  ⚠️
Same legacy structure as Programs/Locations.

### Fix: apply reference snippet.

---

## 8. Accepted / Policy / Minor Pages (if any)
Often reuse About hero; apply same “remove inner overlay” rule.

---

## Summary of Required Changes

| Page | Delete inner 30 % overlay | Change gradient → reference `to-r` 3-stop | Set height `h-[50vh] md:h-[60vh]` | Ensure video mobile guard |
|------|---------------------------|------------------------------------------|-----------------------------------|---------------------------|
| Home | ✅ | already ok | ✅ (already) | ✅ |
| Learning | ✅ | ok | ✅ | ✅ |
| About | ✅ | ok | ✅ | ✅ |
| Apply | ✅ | ok | ✅ | ✅ |
| Programs | n/a (no overlay) | ✅ | ✅ | n/a |
| Locations | n/a | ✅ | ✅ | n/a |
| Team | n/a | ✅ | ✅ | n/a |

After applying these small, page-specific tweaks, all hero blocks will present identically to the Contact page, ensuring consistent contrast, height, and media behaviour across the site.

---

## 🔧 Implementation Guide — “Copy-paste Ready” snippets

Below are **ready-to-use JSX blocks** for each page.  
Replace the existing hero section _only_ inside the relevant page/client file.

### 0. Reference (Contact) – keep as-is
```tsx
<section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
  <video … poster="/images/heroes/<FILE>.png" className="absolute inset-0 w-full h-full object-cover" />
  <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20" />
  <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
    …content…
  </div>
</section>
```

### 1. Home
```tsx
<section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
  {!isMobile && (
    <video autoPlay muted loop playsInline preload="metadata"
           className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${videoLoaded?'opacity-100':'opacity-0'}`}
           onLoadedData={()=>setVideoLoaded(true)}
           poster="/images/heroes/hero-fallback.jpg">
      <source src="/videos/tk-hero-loop.mp4" type="video/mp4" />
    </video>
  )}
  {(isMobile || !videoLoaded) && (
    <Image src="/images/heroes/hero-fallback.jpg" alt="" fill priority sizes="100vw"
           className="object-cover object-center" />
  )}
  <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20" />
  <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
    …content…
  </div>
</section>
```

### 2. Learning (replace inner overlay, keep existing imports/logic)
```tsx
…same pattern as Home but use learning-hero.* media…
```

### 3. About
```tsx
<section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
  …video / image fallback identical pattern…
  <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20" />
  …content…
</section>
```

### 4. Apply
Use same snippet; media = `journey-starts-here.*`

### 5–7. Programs / Locations / Team
Static-image only version:
```tsx
<section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
  <Image src="<page>-hero.jpg" alt="" fill priority className="object-cover object-center" />
  <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20" />
  <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
    …content…
  </div>
</section>
```

---

## 🚀 Step-by-Step Checklist
1. Delete **inner `bg-black/30` overlay div** on every page (**Home, Learning, About, Apply**).
2. Ensure outer gradient matches reference (`to-r`, 3-stop, no z-index).
3. Set height to `h-[50vh] md:h-[60vh]`; remove `h-screen`.
4. For video pages, wrap video in `!isMobile` guard + `videoLoaded` opacity fade.
5. Verify poster/fallback image path points at `/images/heroes/...`.
6. Build & deploy; visually QA on desktop + mobile.

Follow this order page-by-page until table above shows all ✅.
