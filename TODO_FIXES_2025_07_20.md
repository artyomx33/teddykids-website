# Teddy Kids – TODO Fixes (20 Jul 2025)

Comprehensive task list for the final QA sprint.  
All fixes are **blockers for go-live** unless otherwise stated.

---

## 1 ️⃣ Critical P0 – Mobile Hero Video Shows Black Screen
**Symptoms**  
• On mobile the home-page hero remains black (poster not displayed, video never plays).  
• Brief black frame also visible on desktop before the video starts.

**Likely files / areas**  
- `components/sections/Hero.tsx` (or similarly named hero component)  
- `/public/videos/hero.*` poster image path (check `poster` attribute)  
- Next-js `<video>` optimization settings (check if `preload`, `playsInline`, `muted`, `autoPlay` set).  

**What to look for**  
1. Wrong `poster` path → black screen while loading.  
2. Media query / CSS that hides the `<video>` on mobile but fails to reveal fallback poster.  
3. iOS autoplay policy – video must be **muted** + **playsInline** for auto-start.  
4. Video format not supported on some browsers – ensure `mp4/h264` source provided.

**Fix approach**  
- Supply a valid `poster="/images/heroes/home-fallback.jpg"` (verified exists).  
- Add multiple `<source>` tags (`.mp4`, `.webm`) for broader support.  
- Enforce attributes: `autoPlay muted loop playsInline preload="auto"`.  
- For mobile below 768 px optionally swap to a static hero image to avoid heavy bandwidth.

**How to test**  
1. `npm run dev` → inspect on Chrome mobile emulator & real iOS/Android.  
2. Verify poster appears instantly then video starts (≤ 2 s) or static image fallback shown.  
3. Lighthouse mobile Perf: ensure no large layout shift from video injection.



## 2 ️⃣ High P1 – Dutch Translation Gaps

| Page | Blocks Missing NL | Source Files | Translation key path |
|------|-------------------|--------------|----------------------|
| About (`/about?lang=nl`) | Entire page uses placeholders | `app/about/*.tsx` + `lib/translations.ts` | `about.*` |
| Locations (`/locations`) | Hero & block 2 | `components/sections/Locations*.tsx` | `locations.hero.*`, `locations.block2.*` |
| Team (`/team`) | Hero & block 2 text | `components/sections/Team.tsx` | `team.hero.*`, `team.block2.*` |
| Learning (`/learning`) | Whole page | `app/learning/*.tsx` | `learning.*` |
| Contact (`/contact`) | Hero & block 2 | `components/sections/Contact.tsx` | `contact.hero.*`, `contact.block2.*` |
| Apply (`/apply`) | All except apply form | `app/apply/*.tsx` | `apply.*` |

**Steps**

1. Open `lib/translations.ts`. For each missing key add Dutch copy.  
   - Use EN as template; request copy-writing if wording unclear.  
2. In component files verify we reference keys correctly (`t('locations.hero.title')`).  
3. Run `npm run lint` – TS will error on missing keys.  
4. Manual QA: visit each route with `?lang=nl` and ensure no placeholder text like `teddyKids.lorem` shows.

**Testing**  
- Automated: `npm run build` must succeed without “property does not exist on type Translation”.  
- Visual: page screenshots in Dutch & English, spot-check with stakeholder.  
- Lighthouse i18n flag: ensure no “lang mismatch” warnings.



## 3 ️⃣ Medium P2 – Team Page Image Missing (Block 2)

**Issue**  
Second block on `/team` shows broken image (404).

**Check list**  
- Verify filename & extension in `components/sections/Team.tsx`.  
- Confirm actual file exists under `public/images/team/…`.  
- Last commit indicates extension changed from `.jpg`→`.jpeg`. Cross-check.

**Fix**  
- Align component `img src` to real file path.  
- Run `npm run build && npm start` and open `/team` (both EN & NL).  
- Inspect network → image returns 200 and displayed in layout.

**Regression test**  
- All team avatars load correctly across responsive breakpoints.  
- Lighthouse accessibility: “image elements have alt attributes”.

---

### Post-fix Checklist

1. **Run full Lighthouse CI** (`npm run lhci`) – aim ≥ 95 Perf mobile.  
2. Deploy preview to `https://new.teddykids.nl` → smoke test on real devices.  
3. QA sign-off (translations accurate & media loads).  
4. Merge → tag `v1.0.0-launch`.

_Assigned_: 🐻 Teddy Dev Droid  
_Due_: **20 Jul 2025 23:59 CET**

