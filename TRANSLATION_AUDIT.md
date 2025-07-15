# Translation Audit – Teddy Kids Website  
This document lists every **hard-coded English string** that still requires a Dutch translation.  
Organised by **page / component** and further grouped into:  
• Metadata (title, description, etc.)  
• UI text (headings, paragraphs, alt text)  
• Interactive text (buttons, form labels, validation, tooltips, aria-labels)  

> Fill the right-hand **Dutch Translation** column with Teddy Kids-style wording.  
> Leave the original English intact for reference.

---

## Legend  
EN = English source text  
NL = Dutch translation (to be filled)  

---

## 1. Root Layout (`app/layout.tsx`)  
| Context | EN Text | NL Translation |
|---------|---------|----------------|
| LanguageContext default WhatsApp message (Button component) | “Hi Teddy Kids! I would like to book a tour.” | |

---

## 2. Home Page (`app/page.tsx` + Section Components)

### 2.1 Metadata  
| EN Text | NL |
|---------|----|
| Teddy Kids \| From Baby Steps to Global Citizens | |
| “Where your child's first words lead to a world of possibilities. Bilingual childcare and international school in Leiden, Netherlands.” | |
| keywords list | |

### 2.2 Sections still hard-coded  
| Component | EN Text | NL |
|-----------|---------|----|
| LocationsPreview (placeholder) | *(verify after implementation)* | |
| Common image alt text (e.g. `/images/hero-fallback.jpg`) | “Teddy Kids children playing” | |

---

## 3. About Page (`app/about/page.tsx`)

### 3.1 Metadata  
(Title, description, keywords, OpenGraph) – all English.

### 3.2 Hero Section  
| EN | NL |
|----|----|
| Why Teddy Kids Exists | |
| “We didn’t build another daycare. We built what we wish we had as kids.” | |
| Image alt: “Children at Teddy Kids” | |

### 3.3 Mission Section  
long paragraphs:  
1. “At Teddy Kids, we believe every child …”  
2. “We create spaces where children …”  
3. “Through our unique approach …”

### 3.4 Timeline Items  
Year headings & descriptions:  
• “2004 – Teddy Kids Opens in Leiden …”  
• “2010 – Expansion to 3rd Location …”  
• “2022 – Launch of TISA …”  
• “2023 – TISA Portugal …”  
• “2024 – 20 Years of Teddy Kids …”

### 3.5 Vision / Manifesto  
Heading “Our Future” and bullet list lines.

### 3.6 Team Preview  
Heading, sub-heading & Button:  
| EN | NL |
|----|----|
| The People Behind Teddy Kids | |
| “Our passionate team brings …” | |
| Button: “Meet Our Full Team” | |

---

## 4. Contact Page (`app/contact/page.tsx`)  
Only metadata – needs NL.

Component `Contact` already uses i18n placeholders (✓).

---

## 5. Locations Page (`app/locations/page.tsx`)

### 5.1 Metadata – all English.

### 5.2 Hero Section  
Headings / paragraphs / alt text:  
• “Find Your Nearest Teddy Kids”  
• Across Leiden, our locations offer …  
• “{locations.length} Locations Worldwide”

### 5.3 Filter Bar Buttons  
“All Locations”, “Leiden”, “Oegstgeest”, “International”, “Filter by:”

### 5.4 Content Sections  
Headings & paragraphs:  
• “TISA – Our International Schools”  
• Card texts: “Bilingual international primary school in Leiden.”, “Our sunny international campus in Lisbon.”, card buttons “Visit TISA Netherlands”, “Visit TISA Portugal”.

• “Getting to Teddy Kids” section headings & bullet sentences.  
• CTA section (“Ready to Visit a Location?” etc.) plus buttons “Book a Tour”, “Apply Now”.

### 5.5 Locations component (`components/sections/Locations.tsx`)  
Check building names, “Opening Hours”, “View Details”, etc. (some already i18n).

---

## 6. Apply Page (`app/apply/page.tsx`)

**Large amount of strings.** Key groups:

### 6.1 Hero  
• Heading: “Your journey with Teddy Kids begins here.”  
• Subtitle paragraph.

### 6.2 Audio button label  
“Play”, “Hear from a parent who just applied” + quote paragraph.

### 6.3 Progress Steps Titles & Descriptions  
e.g. “Program Selection — Where would your child feel most at home?”

### 6.4 Program / Location Cards  
Titles, “Ages:”, addresses.

### 6.5 Validation Errors  
“Please select a program”, “First name is required”, etc.

### 6.6 Form Labels / Placeholders  
Parent & Child info, check-box labels:  
“I’d like to book a tour”, “I’m ready to apply now”, “Please WhatsApp me instead”, etc.

### 6.7 Success Step  
Heading “Welcome to the Teddy Family!”, body paragraphs, buttons “Return to Home”.

### 6.8 Footer CTA  
Heading, paragraph, buttons “Begin My Teddy Journey”, “Talk to a Teddicated Human”.

---

## 7. Programs Pages  
( `/app/programs/*.tsx` ) – repeat pattern:

| File | Strings |
|------|---------|
| nursery | Heading/intro sentences, age info |
| preschool | “Teddy Learners” etc. |
| afterschool | “Teddy BSO Explorers” etc. |
| tisa | copy lines about curriculum |

---

## 8. Team Page (`app/team/page.tsx`)  
Headings, bios, “Did You Know?” facts.

---

## 9. Learning Page (`app/learning/page.tsx`)  
Headings, category names, “Read More”, etc. (many placeholders already but verify).

---

## 10. Accepted Page (`app/accepted/page.tsx`)  
Confirmation texts.

---

## 11. Apie’s Playground (`app/apie/page.tsx`)  
Heading, fun copy, downloads “Download Coloring Page”, etc.

---

## 12. Shared Components

### 12.1 Button Component  
Default WhatsApp message (listed above).

### 12.2 Navigation  
Hidden “🍌 Secret” label in mobile menu.

### 12.3 Language Switcher  
ARIA label: “Switch to Dutch language / Switch to English language”.

### 12.4 Validation Messages & ARIA  
Generic: “Play”, “Previous”, “Next”.

---

## 13. Public Assets  
Alt text for images/icons not yet in translation file (e.g. hero-fallback, map, logos).

---

### ✅ Next Steps
1. **Fill NL column** using custom GPT for all rows above.  
2. Update `lib/translations.ts` with new Dutch strings **OR** switch components to reference translation keys instead of hardcoded text.  
3. Run site in Dutch to confirm every string replaced.  
4. Remove any remaining unused English literals.

