# SEO Checklist — Jungle Labs Website

## After Every Deploy

### 1. Submit Sitemap to Google Search Console
1. Go to https://search.google.com/search-console
2. Add property: `https://www.junglelabsworld.ca`
3. Go to **Sitemaps** → Submit: `https://www.junglelabsworld.ca/sitemap.xml`

### 2. Verify these pages are indexed
Priority pages to check in Search Console:
- `/` — homepage
- `/reptrack` — RepTrack IRCC scanner
- `/newton-immigration` — Newton Immigration platform
- `/jungle-table-ordering` — Table Ordering OS
- `/solutions/ircc-portal-scanner`
- `/solutions/immigration-consultant-surrey-bc`
- `/solutions/express-entry-canada-consultant`
- `/solutions/crs-score-calculator-canada`
- All `/blog/` posts

### 3. Request Indexing for New Pages
In Search Console → URL Inspection → paste each new URL → "Request Indexing"

---

## What's Already Done ✅

### Schema Markup
- `Organization` + `hasOfferCatalog` on homepage (all 4 products listed)
- `SoftwareApplication` with pricing on `/reptrack`
- `ProfessionalService` on `/newton-immigration`
- `SoftwareApplication` on `/jungle-table-ordering`
- `FAQPage` on all 13 solution pages
- `FAQPage` on all French learning pages
- `Article` + `BreadcrumbList` on all blog posts
- `BreadcrumbList` on all solution pages

### Metadata
- Canonical URLs on every page
- OpenGraph tags on every page
- Twitter card tags on every page
- Keywords on every page
- Descriptive titles using target keywords

### Technical
- `sitemap.xml` — all pages with priorities
- `robots.txt` — allows all, blocks `/api/` and `/_next/`
- Security headers (`X-Frame-Options`, `X-Content-Type-Options`, etc.)
- Static asset caching headers
- `compress: true` in Next.js config

---

## Optional Next Steps

- [ ] Add Google Analytics 4 measurement ID to `AnalyticsProvider`
- [ ] Add `NEXT_PUBLIC_GA_ID` to Vercel environment variables
- [ ] Create a `google-site-verification` meta tag (get from Search Console)
- [ ] Add Bing Webmaster Tools verification
- [ ] Set up monthly blog posting schedule (1-2 posts/month minimum for crawl frequency)
