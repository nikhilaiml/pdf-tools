# UsePDF.in — Schema Validation Checklist

> Use [Google Rich Results Test](https://search.google.com/test/rich-results) and [Schema.org Validator](https://validator.schema.org/) to validate each page.

---

## Homepage (/)

| Schema Type | Status | Notes |
|-------------|--------|-------|
| WebSite | ✅ Implemented | Includes SearchAction, inLanguage |
| Organization | ✅ Implemented | foundingLocation: India, sameAs links |
| WebApplication | ✅ Implemented | priceCurrency: INR, aggregateRating |
| BreadcrumbList | ✅ Implemented | Home only |

**Validation URL**: `https://search.google.com/test/rich-results?url=https://www.usepdf.in`

---

## Tool Pages

### /tools/compress-pdf
| Schema Type | Status | Notes |
|-------------|--------|-------|
| SoftwareApplication | ✅ Implemented | Pre-existing rich content |
| FAQPage | ✅ Implemented | Multiple FAQ items |
| HowTo | ✅ Implemented | Step-by-step instructions |
| BreadcrumbList | ✅ Implemented | Home → Compress PDF |

### /tools/merge-pdf
| Schema Type | Status | Notes |
|-------------|--------|-------|
| SoftwareApplication | ✅ Implemented | Pre-existing rich content |
| FAQPage | ✅ Implemented | Multiple FAQ items |
| HowTo | ✅ Implemented | Step-by-step instructions |
| BreadcrumbList | ✅ Implemented | Home → Merge PDF |

### /tools/split-pdf
| Schema Type | Status | Notes |
|-------------|--------|-------|
| WebApplication | ✅ Implemented | With offers, featureList |
| FAQPage | ✅ Implemented | 5+ FAQ items |
| HowTo | ✅ Implemented | Step-by-step guide |
| BreadcrumbList | ✅ Implemented | Home → Split PDF |

### /tools/pdf-to-jpg
| Schema Type | Status | Notes |
|-------------|--------|-------|
| WebApplication | ✅ Implemented | Conversion tool schema |
| FAQPage | ✅ Implemented | 5+ FAQ items |
| HowTo | ✅ Implemented | Conversion steps |
| BreadcrumbList | ✅ Implemented | Home → PDF to JPG |

### /tools/pdf-to-word
| Schema Type | Status | Notes |
|-------------|--------|-------|
| WebApplication | ✅ Implemented | Conversion tool schema |
| FAQPage | ✅ Implemented | 5+ FAQ items |
| HowTo | ✅ Implemented | Conversion steps |
| BreadcrumbList | ✅ Implemented | Home → PDF to Word |

### /tools/rotate-pdf
| Schema Type | Status | Notes |
|-------------|--------|-------|
| WebApplication | ✅ Implemented | Basic tool schema |
| FAQPage | ✅ Implemented | FAQ items |
| HowTo | ✅ Implemented | Rotation steps |
| BreadcrumbList | ✅ Implemented | Home → Rotate PDF |

### /tools/jpg-to-pdf
| Schema Type | Status | Notes |
|-------------|--------|-------|
| WebApplication | ✅ Implemented | Conversion tool schema |
| FAQPage | ✅ Implemented | FAQ items |
| HowTo | ✅ Implemented | Conversion steps |
| BreadcrumbList | ✅ Implemented | Home → JPG to PDF |

### /tools/delete-pdf-pages
| Schema Type | Status | Notes |
|-------------|--------|-------|
| WebApplication | ✅ Implemented | Deletion tool schema |
| FAQPage | ✅ Implemented | FAQ items |
| HowTo | ✅ Implemented | Page deletion steps |
| BreadcrumbList | ✅ Implemented | Home → Delete PDF Pages |

---

## Tools Hub (/tools)

| Schema Type | Status | Notes |
|-------------|--------|-------|
| ItemList | ✅ Implemented | All tools listed with positions |
| Metadata | ✅ Implemented | Title, description, canonical, OG |

---

## 404 Page

| Schema Type | Status | Notes |
|-------------|--------|-------|
| N/A | ✅ No schema needed | Custom 404 with navigation links |
| Metadata | ✅ Implemented | Title tag set |

---

## Blog Articles

All blog articles include proper frontmatter with:
- Title (used as meta title)
- Description (used as meta description)
- Date (used for schema datePublished)

| Article | FAQ Schema | HowTo Schema |
|---------|-----------|--------------|
| pdf-file-size-kaise-kam-kare | ✅ In frontmatter | ✅ In content |
| aadhaar-card-pdf-compress | ✅ In frontmatter | ✅ In content |
| how-to-merge-pdf-files-online-free | ✅ In frontmatter | ✅ In content |
| best-free-pdf-tools-india-2025 | ✅ In frontmatter | N/A (listicle) |
| government-website-pdf-upload-fix | ✅ In frontmatter | ✅ In content |
| pdf-to-jpg-converter-free | ✅ In frontmatter | ✅ In content |
| reduce-pdf-size-for-whatsapp | ✅ In frontmatter | ✅ In content |
| digilocker-pdf-guide | ✅ In frontmatter | ✅ In content |
| pdf-split-online-free | ✅ In frontmatter | ✅ In content |
| image-to-pdf-convert | ✅ In frontmatter | ✅ In content |

---

## ⚠️ Remaining Tool Pages (No Schema Yet)

The following tool pages are still using basic placeholder content and lack structured data:

| Tool Page | Priority |
|-----------|----------|
| /tools/protect-pdf | Medium |
| /tools/unlock-pdf | Medium |
| /tools/add-watermark | Low |
| /tools/add-page-numbers | Low |
| /tools/crop-pdf | Low |
| /tools/pdf-to-excel | Medium |
| /tools/pdf-to-ppt | Low |
| /tools/word-to-pdf | Medium |
| /tools/image-to-pdf | Medium |
| /tools/flatten-pdf | Low |

> **Recommendation**: Prioritize `protect-pdf`, `unlock-pdf`, `word-to-pdf`, `pdf-to-excel`, and `image-to-pdf` for next round of SEO content.

---

*Last validated: March 2026*
