# TODO – Integrate Teddy Kids Logo into Site Navigation

**Goal:** Display the official Teddy Kids logo in the main navigation (desktop + mobile) so the brand is always visible.

---

## 1. Asset Preparation
- [ ] Export/logo file: `teddykids-logo.svg` (preferred) or high-res PNG with transparency.  
      • Recommended size: ~240 × 64 px.  
      • Save to: `public/images/logos/teddykids-logo.svg`.
- [ ] Optimise SVG (svgo) or PNG (TinyPNG) before adding.

---

## 2. Code Changes
### 2.1 `components/Navigation.tsx`
- [ ] Replace current inline `<Image src="/images/teddy-kids-logo.svg" …/>` **placeholder** with the new asset path.  
      ```tsx
      <Image
        src="/images/logos/teddykids-logo.svg"
        alt="Teddy Kids logo"
        fill
        className="object-contain"
        priority
      />
      ```
- [ ] Confirm container width/height (`h-12 w-36`) fits new proportions; adjust if needed (e.g. `h-14 w-40`).

### 2.2 Mobile Nav (same file)
- [ ] Logo block is reused; verify it still renders crisply on high-dpi screens.

---

## 3. Styling & Accessibility
- [ ] Ensure `alt="Teddy Kids logo"` for accessibility.
- [ ] Maintain surrounding flex layout so logo remains left-aligned with nav items.
- [ ] Test contrast against transparent or coloured nav backgrounds.

---

## 4. Optional Follow-ups
- [ ] Update `favicon.ico` to use the new logo mark (separate task).
- [ ] Replace any remaining “tisa-logo-placeholder.png” usages now that house logo exists.
- [ ] Consider adding `width`/`height` props instead of `fill` if CLS occurs.

---

## Acceptance Checklist
- [ ] Logo visible on desktop (≥768 px).
- [ ] Logo visible on mobile drawer header.
- [ ] No layout shift or broken links.
- [ ] Lighthouse accessibility shows logo `alt` text.
