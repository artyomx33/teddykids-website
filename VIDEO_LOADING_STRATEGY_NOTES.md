# Video Loading Strategy – Notes & TODOs

## 1. Hero Section (all pages)

Current behaviour  
• Hero image renders instantly, but background video tries to load/play right away (or isn’t wired at all on Apply page).

Desired behaviour  
1. Display compressed PNG/JPEG placeholder immediately.  
2. After **500 ms** delay (once LCP settled) start lazy‐loading the video source.  
3. Autoplay **muted**, **playsInline**, loop, but *do not block* CLS / user interaction.  
4. Use `intersectionObserver` guard so video loads only when hero is actually in viewport (helps on mobile).

Pending tasks  
- Add `data-video-src` attribute + small script to swap `src` after delay.  
- Provide <picture> fallback for browsers with `prefers-reduced-motion: reduce`.  
- Verify that hero still SSRs with real text for SEO, even if video JS fails.

## 2. Apply Page – “Seal” Confirmation Video

Issue  
• New optimised file `appies_seal_placeholder.mp4` (163 KB) exists and returns 200 OK, but video never starts.  
• Element uses `autoPlay muted playsInline`, poster is correct; likely blocked by browser because it hasn’t loaded in time or because it is inside a component hidden until step 5.

Action items  
- Add `preload="metadata"` to hint browser.  
- Ensure element isn’t hidden (CSS `display:none`) until after play starts; fade‐in via opacity instead.  
- Add `onCanPlay` listener → set `sealVideoEnded` state only after playback succeeds.  
- Remove legacy `.gif` reference after confirming MP4 works cross-browser.

## 3. Global Performance Optimisation

Checklist  
- Serve all hero videos in **H.264 + WebM**; fallback to static image on Safari < 13.  
- Bitrate budget: <= 1 Mbps desktop, <= 500 kbps mobile (use `srcSet` or manual detection).  
- Store videos in `/public/videos/` with cache headers (`Cache-Control: immutable, max-age=31536000`).  
- Add `loading="lazy"` and `fetchPriority="low"` to non-critical videos.  
- Audit Largest Contentful Paint after changes; target LCP < 2.5 s on 4G.

---

These notes are **for future implementation**, no code changes made yet.
