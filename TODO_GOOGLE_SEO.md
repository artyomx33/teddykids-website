# 🗂️ Google SEO & Analytics TODO List

A clear, actionable checklist to ensure Teddy Kids is fully optimized for Google before, during, and after the move from **new.teddykids.nl → www.teddykids.nl**.

---

## 🚀 Immediate Actions (Pre-Launch) — Priority **P0**

- [ ] **Add GA4 tag inside Google Tag Manager**  
  - Container ID: **GTM-NQN5S9KF**  
  - GA4 Measurement ID: **G-5B0TC2V08H**  
  - Trigger: **All Pages**  
  - Publish container.

- [ ] **Verify www.teddykids.nl in Google Search Console**  
  - Use **DNS TXT** method for fastest propagation.  
  - Property type: **Domain (recommended)**.

- [ ] **Submit sitemap** in Search Console  
  - URL: `https://www.teddykids.nl/sitemap.xml`.

- [ ] **Run Rich-Results Test** on a few key pages  
  - `/`, `/programs`, `/locations`, `/learning`  
  - Confirm no errors for **ChildCare**, **Course**, **Article** schemas.

- [ ] **Staging crawl** with Screaming Frog / Sitebulb  
  - Ensure **robots.txt** allows crawling.  
  - Check for broken links or 404s.

---

## 🛫 Launch-Day Checklist — Priority **P0**

- [ ] **Switch primary domain in Vercel** to `www.teddykids.nl`.  
- [ ] **301 Redirects**  
  - From every `new.teddykids.nl/*` URL to the matching `www` URL.  
  - Test random pages to confirm.

- [ ] **Cache & CDN purge** after DNS cut-over.  
- [ ] **Live robots.txt & sitemap** reachable on production domain.

---

## 📈 Early Post-Launch Tasks — Priority **P1**

- [ ] **Monitor Search Console Coverage & Enhancements**  
  - Check for crawl errors, indexing issues, or structured-data warnings.

- [ ] **Validate GA4 Data Streams**  
  - Real-time traffic visible?  
  - Geographic distribution reasonable?

- [ ] **Set up Conversion Events** in GA4 via GTM  
  - `book_tour_click` – any click on “Book a Tour” buttons.  
  - `apply_now_click` – clicks on “Apply Now”.  
  - `whatsapp_chat` – clicks on WhatsApp floating button.

- [ ] **Link GA4 to Google Ads** (if advertising) and Search Console.

---

## 🔄 Ongoing Optimizations — Priority **P2**

- [ ] **Google Business Profile (GBP) maintenance**  
  - Ensure all 4 Leiden locations + TISA Portugal have up-to-date info.  
  - Upload new photos quarterly.  
  - Reply to every review within 48 h.

- [ ] **Core Web Vitals monitoring** (PageSpeed Insights)  
  - Aim for **LCP < 2.5 s**, **CLS < 0.1**, **FID/INP < 200 ms**.

- [ ] **Content Freshness Cycle**  
  - Add at least **1 new Learning Moment** article per month.  
  - Update homepage copy seasonally.

- [ ] **Internal-Link Audit** every 6 months  
  - Ensure new pages are linked from at least 2 other pages.

- [ ] **Schema Expansion**  
  - Add `FAQPage` schema where appropriate (e.g., Programs FAQ).  
  - Add `Event` schema for open days or holiday programs.

- [ ] **Periodic SEO Health Checks**  
  - Crawl with Screaming Frog quarterly.  
  - Review Search Console performance & keywords monthly.  
  - Adjust on-page titles/descriptions for underperforming pages.

---

### 🔖 Done / Notes

Keep this file updated. Move completed items to “Done” with the deployment date for easy tracking.
