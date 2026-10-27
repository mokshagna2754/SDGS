# S.D.G.S College, Hindupur · Website

React (Vite) site for Saradamba Dasa Govindiah Setty College. Every route is prerendered to static HTML at build time, so search engines and AI answer engines read the full content without running JavaScript.

## Run

```bash
npm install
npm run dev       # local development at http://localhost:5173
npm run build     # production build + prerender into dist/
npm run preview   # serve dist/ at http://localhost:4173
```

Deploy the `dist/` folder to any static host (Netlify, Vercel, Cloudflare Pages, Apache, nginx). Each page exists as both `about.html` and `about/index.html`, so clean URLs like `/about` work everywhere.

## Before going live

1. **Domain**: set `siteUrl` in `src/data.js`. Canonical URLs, Open Graph, JSON-LD and `sitemap.xml` are generated from it. It is currently a placeholder.
2. **Photos**: all images are Unsplash placeholders, mapped in one place (`img` in `src/data.js`). Put the college photos in `public/assets/photos/` and change each entry to e.g. `"/assets/photos/campus.jpg"`.
3. **Accreditation logos**: drop official files as `public/assets/accreditation/ugc.png`, `sku.png`, `naac.png`, `aicte.png`. They replace the drawn emblems automatically.
4. **Enquiry leads**: by default, form submissions open WhatsApp with the details pre-filled to the college number. To also store every lead (Google Sheet, CRM), set `leadEndpoint` in `src/data.js` to a URL that accepts a JSON POST (e.g. a Google Apps Script web app).
5. **Social links**: Twitter/X, LinkedIn and WhatsApp channel are empty in `src/data.js` and shown as "coming soon".
6. **Pending content**: items marked with a dashed "to be provided" tag (founder, management, principal, faculty, calendars, NAAC documents, alumni profiles). Vision/mission text is draft wording for the college to confirm.

## Where things live

| What | File |
| --- | --- |
| Contacts, notifications, programmes, departments, gallery, images | `src/data.js` |
| Page titles, descriptions, JSON-LD, FAQ answers | `src/seo.js` |
| Header, nav, footer, enquiry modal, contact dock | `src/components/Layout.jsx` |
| Hero slider, notification bar, course rail, course finder, gallery | `src/components/Showcase.jsx` |
| Pages | `src/pages/*.jsx` |
| Design system (colours, type, layout) | `src/styles.css` |
| Prerender, sitemap.xml, robots.txt | `prerender.js` |
| Original logo and reference image from the brief | `design-source/` (not published) |

## Layout rules

- `--gutter` `clamp(1.25rem, 3vw, 2rem)`, always equal left and right. Every page container uses `.frame`: `padding-inline: max(var(--gutter), calc((100% - var(--page)) / 2))`.
- `--page` `96rem`: content width, centred in the remaining space.
- Above a 1440px viewport the root font size grows with the screen (`calc(100vw / 90)`), and all sizes are in rem, so large displays show the laptop layout scaled up instead of empty side margins. Only hairline borders (under 5px) stay in px.
- From 960px up, section heads and page heroes use two columns: the heading holds `--measure` (44rem) and the space beside it takes the lead paragraph or action. Do not leave an empty right field.
- Below 960px: one column, same gutter, no horizontal scroll. Card grids (accreditation, departments, people, stats, steps) stay two-up from 640px to 960px and stack to one below 640px.
- Image boxes use `.media` (not `.frame`).

## SEO included

- Prerendered HTML for all 19 routes, one H1 per page, breadcrumbs
- Unique title, meta description, canonical, Open Graph and Twitter tags per page
- JSON-LD: `CollegeOrUniversity` (address, phone, founding date, accreditations, social profiles), `WebSite`, `WebPage`, `BreadcrumbList`, `FAQPage` (home, academics), `Course` / `ItemList`
- FAQ answers are visible on the page and match the schema
- `sitemap.xml`, `robots.txt` (allows Google, Bing, OAI-SearchBot, PerplexityBot), `llms.txt`
- After launch: verify the domain in Google Search Console, submit `sitemap.xml`, and create or claim the Google Business Profile with the same name, address and phone as the site.
# SDGS
