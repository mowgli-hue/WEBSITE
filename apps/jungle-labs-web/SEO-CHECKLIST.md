# SEO Checklist — Jungle Labs Website

## What's Done ✅

### Schema Markup (JSON-LD)
- **LocalBusiness + Organization + ProfessionalService** combined schema on homepage
  - Full Surrey BC address with geo coordinates (49.1881, -122.8454)
  - Service area: Surrey, Vancouver, Burnaby, Richmond, Coquitlam, Langley, New Westminster, Delta, BC, Canada, USA
  - AggregateRating (5.0 / 18 reviews)
  - Full service & product offer catalog
- **WebSite schema** with SearchAction
- **FAQPage schema** on homepage (8 questions)
- **Review schemas** (3 testimonials)
- **BreadcrumbList** on homepage, case studies, and solution pages
- **SoftwareApplication** schema on `/jungle-table-ordering`
- **FAQPage** on all solution pages
- **Article + BreadcrumbList** on case studies and blog posts

### Metadata
- Canonical URLs on every page
- OpenGraph tags (with locale `en_CA`)
- Twitter card tags
- Targeted keyword arrays
- `robots` directive with `max-image-preview: large` for Google
- GSC verification slot ready (via `NEXT_PUBLIC_GSC_VERIFICATION` env var)

### Technical
- `sitemap.xml` — auto-generated, all blog posts + solution pages
- `robots.txt` — allows all, blocks `/api/`, `/_next/`, `/admin/`
- Security headers, compression, caching (from `next.config.mjs`)
- 404 page with sensible internal links

### Content (after this update)
- Homepage emphasizes **AI / Blockchain / CRM Automation** (not immigration)
- `/case-studies` page live with 3 detailed case studies + Article schema
- Visible FAQ accordion with 8 common questions
- Testimonials section with star ratings (paired with Review schema)
- All hero/section image alt text rewritten with location + service keywords

---

## After Every Deploy

### 1. Submit Sitemap to Google Search Console
1. Go to https://search.google.com/search-console
2. Add property: `https://www.junglelabsworld.ca`
3. Go to **Sitemaps** → Submit: `https://www.junglelabsworld.ca/sitemap.xml`

### 2. Submit to Bing Webmaster Tools
1. Go to https://www.bing.com/webmasters
2. Add site, verify, submit the same sitemap URL

### 3. Validate Schema
Test these URLs in the Rich Results tool: https://search.google.com/test/rich-results
- `https://www.junglelabsworld.ca/` (LocalBusiness, FAQ, Review)
- `https://www.junglelabsworld.ca/case-studies` (Article, BreadcrumbList)

### 4. Request Indexing for New Pages
In Search Console → URL Inspection → paste each new URL → "Request Indexing"
- `/case-studies`
- Any new blog posts

---

## Next-Round SEO Wins

- [ ] Convert PNG hero photos to optimized WebP (cuts page weight ~60%)
- [ ] Add `/pricing` page with `Offer` schema
- [ ] Add city pages: `/ai-automation-vancouver`, `/blockchain-development-burnaby`
- [ ] Add `/about` route with detailed Organization profile
- [ ] Add Google Analytics 4 measurement ID
- [ ] Add Bing Webmaster Tools verification meta tag
- [ ] Internal linking: hero CTAs to specific solution pages
- [ ] Set up monthly blog posting (1-2 posts/month for crawl frequency)

---

## Ongoing — Keyword Targets

Primary:
- AI automation agency Surrey / Vancouver
- Custom CRM development Canada
- Blockchain development Canada
- Tokenization platform
- Industry CRM automation

Long-tail:
- Fully automated CRM platform
- Business workflow automation Surrey
- Smart contract development BC
- AI agent development Canada
- Web3 integration Vancouver
