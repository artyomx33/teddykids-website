# Teddy Kids ‑ /public/docs

## 1. Purpose  
This folder stores **all downloadable documents** shown on the `/about/policy` page.  
During local development we ship **empty placeholder PDFs** so the links work and the site builds without the real (often large) files.  
Before each production release, replace the placeholders with the signed-off, final PDFs supplied by management.

---

## 2. File Inventory  

### 📚 Pedagogical Policy  
| File | Description |
|------|-------------|
| `PedagogischBeleidsplan-TeddyKids-NL.pdf` | Dutch pedagogical plan required by the GGD. |
| `PedagogicalPolicy-TeddyKids-EN.pdf` | English translation of the pedagogical plan. |

### 🏥 GGD Inspection Reports (most recent)  
| File | Location | Year |
|------|----------|------|
| `GGD-RBW-2024.pdf` | Rijnsburgerweg 35 (RBW) | 2024 |
| `GGD-RB3RB5-2024.pdf` | Rijnsburgerweg 3 & 5 (RB3/RB5) | 2024 |
| `GGD-LRZ-2024.pdf` | Lorentzkade (LRZ) | 2024 |
| `GGD-ZML-2024.pdf` | Zeemanlaan (ZML) | 2024 |

### 🔐 Privacy & GDPR  
| File | Description |
|------|-------------|
| `TeddyKids-PrivacyPolicy-GDPR.pdf` | Official privacy policy covering GDPR/AVG compliance. *(Placeholder until final legal review is complete.)* |

### 📎 Additional Forms  
| File | Description |
|------|-------------|
| `IncidentenMeldingenFormulier.pdf` | Standard incident reporting form (NL). |
| `VerklaringOmtrentGedragVoorbeeld.pdf` | Sample VOG (Certificate of Good Conduct) for staff. |

---

## 3. Replacing Placeholder Files  

1. Obtain the **final, signed PDF** from the responsible stakeholder (Site Leader, Quality Manager, or Legal Counsel).  
2. **Name the file exactly** as listed above—capitalisation & hyphens matter because links are case-sensitive on most servers.  
3. Drop the PDF into this `/public/docs` folder, overwriting the placeholder.  
4. Commit & push the change. The live site will automatically serve the new document on the next deployment.  

**Tip:** Keep large PDFs (<5 MB recommended) to minimise first-time download latency for parents on mobile.

---

## 4. Adding New Documents  

If future regulations require more documents:  
1. Add the blank PDF here with a clear, kebab-case filename.  
2. Update `/app/about/policy/page.tsx` **and** the translation keys (`lib/translations.ts`) so the link appears in both languages.  
3. Ensure the link has `target="_blank"` so it opens in a new tab.  

Happy documenting! 🧸
