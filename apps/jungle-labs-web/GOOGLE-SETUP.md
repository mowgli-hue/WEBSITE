# Google Search Console + Analytics Setup
## For: www.junglelabsworld.ca

---

## Step 1 — Google Search Console (Free — do this first)

### Add your property
1. Go to https://search.google.com/search-console
2. Click **Add property** → choose **URL prefix**
3. Enter: `https://www.junglelabsworld.ca`
4. Click **Continue**

### Verify ownership (HTML tag method)
1. Choose **HTML tag** verification method
2. Copy the content value — it looks like: `abc123xyzDEFGHIJK`
   (just the value inside `content="..."`, not the full tag)
3. Open your Vercel dashboard → your project → **Settings** → **Environment Variables**
4. Add: `NEXT_PUBLIC_GSC_VERIFICATION` = `abc123xyzDEFGHIJK`
5. Redeploy the site
6. Back in Search Console, click **Verify**

### Submit your sitemap
1. In Search Console, go to **Sitemaps** (left sidebar)
2. Enter: `sitemap.xml`
3. Click **Submit**

### Request indexing for priority pages
In Search Console → **URL Inspection** → paste each URL → **Request Indexing**:
- `https://www.junglelabsworld.ca/`
- `https://www.junglelabsworld.ca/reptrack`
- `https://www.junglelabsworld.ca/newton-immigration`
- `https://www.junglelabsworld.ca/jungle-table-ordering`
- `https://www.junglelabsworld.ca/solutions/ircc-portal-scanner`
- `https://www.junglelabsworld.ca/solutions/immigration-consultant-surrey-bc`
- `https://www.junglelabsworld.ca/solutions/express-entry-canada-consultant`
- `https://www.junglelabsworld.ca/solutions/crs-score-calculator-canada`

---

## Step 2 — Google Analytics 4 (Free)

### Create a GA4 property
1. Go to https://analytics.google.com
2. Click **Admin** (bottom left gear icon)
3. Click **Create** → **Property**
4. Name: `Jungle Labs Web`, timezone: `Canada/Pacific`, currency: `CAD`
5. Click **Next** → fill in business details → **Create**

### Get your Measurement ID
1. In Admin → **Data Streams** → **Add stream** → **Web**
2. Enter URL: `www.junglelabsworld.ca`, stream name: `Jungle Labs Web`
3. Click **Create stream**
4. Copy the **Measurement ID** — format: `G-XXXXXXXXXX`

### Add to Vercel
1. Vercel dashboard → your project → **Settings** → **Environment Variables**
2. Add: `NEXT_PUBLIC_GA_ID` = `G-XXXXXXXXXX`
3. Redeploy

Analytics will now track every page view, with events already wired up for:
- `explore_solutions_click` (hero CTA)
- `start_project_click` (navbar + contact CTA)
- `ai_demo_prompt_submit` (chatbot use)
- `lead_form_submit` (contact form)
- `chatbot_fab_click` (floating button)

---

## Step 3 — Bing Webmaster Tools (Optional but free SEO coverage)

1. Go to https://www.bing.com/webmasters
2. Add site: `https://www.junglelabsworld.ca`
3. Import from Google Search Console (fastest option — one click)
4. Bing will automatically pick up your sitemap

---

## Ongoing — Blog Posting Schedule

Google rewards sites that publish consistently. Suggested schedule:

| Week | Topic |
|------|-------|
| Week 1 | IRCC / immigration (RepTrack + Newton) |
| Week 2 | AI automation / software (services) |
| Week 3 | French learning (Franco) |
| Week 4 | Restaurant tech / hospitality (Table Ordering OS) |

Each post should be 600–1200 words, target one primary keyword, and link to at least one product or solution page internally.

---

## How to Check It's Working

After 2–4 weeks:
- Search Console → **Performance** → you'll see which queries are showing your pages
- Analytics → **Reports** → **Acquisition** → see where traffic is coming from
- Search `site:junglelabsworld.ca` in Google to see how many pages are indexed
