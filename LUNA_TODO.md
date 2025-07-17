# LUNA Integration To-Do List

1. **404 Page**  
   Verify that `404 image appies.png` loads from `/shared-images/`, layout centers on all break-points, CTA buttons (“Take Me Home”, “Contact Us”) work, and mobile view keeps emojis/background elements from overlapping content.

2. **Accepted Page**  
   • Hero celebration image `accepted to teddy kids.png` renders full-width at top.  
   • Confetti uses real window dimensions and mute/unmute toggle functions.  
   • Share links (WhatsApp, Facebook, Copy) reference the correct URL.  
   • “Welcome Package” download buttons point to real files in `/downloads/`.

3. **Programs Page**  
   Ensure `/shared-images/hero banner 1.png` displays as the hero backdrop above the four program cards. Provide alt text and keep `hero banner 2.png` available for seasonal swap.

4. **Locations Page**  
   • Restore original map-hero (`/images/locations/map-hero.jpg`) while keeping Luna location thumbnails.  
   • Each location card shows its front image (rbw, rb3, zml, lrz).  
   • Character PNGs (`teddy-character-3.png`, `teddy-character-4.png`) remain correctly positioned on all devices.

5. **After-School Page**  
   Integrate `rb3 playground.png` into the Adventure section or gallery and confirm background tree/girl/dino image scales responsively.

6. **Learning Moments**  
   Add `maelyn sharing.jpeg` as a side or hero image; verify filter UI and cards retain proper spacing with the new visual.

7. **Team Page**  
   Insert portrait visuals (`rbw front portrait.png`, `lrz front portrait.png`) in appropriate staff/location callouts. Check bio cards and fun-fact layout after insertion.

8. **Shared-Images Sanity Check**  
   Run `grep -R "/shared-images/" .` to catch broken paths, ensure all 15 Luna assets exist in `public/shared-images/`, and filenames match import strings.

9. **Responsive & Accessibility QA**  
   • Confirm every image has descriptive `alt` text.  
   • Test hero, gallery, and full-width sections across break-points.  
   • Lazy-load below-the-fold assets to protect performance.

10. **Final Build & Smoke Test**  
    Run `npm run lint` then `npm run build`. Manually navigate every updated page (404, Accepted, Programs, Locations, After-School, Learning, Team, Apply) to ensure no raw translation keys or missing assets appear and all interactions work.
