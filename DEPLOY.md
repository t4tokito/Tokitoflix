# Tokitoflix — Deploy to Netlify

## Quick Deploy (3 steps)

### 1. Push to GitHub
```bash
cd notes-maker-website
git init
git add .
git commit -m "Initial Tokitoflix website"
git remote add origin https://github.com/YOUR_USERNAME/tokitoflix-website.git
git push -u origin main
```

### 2. Connect to Netlify
1. Go to [app.netlify.com](https://app.netlify.com)
2. Click **"Add new site"** → **"Import an existing project"**
3. Select **GitHub** → Choose your `tokitoflix-website` repo
4. Build settings (auto-detected from `netlify.toml`):
   - Build command: `npm run build`
   - Publish directory: `.next`
5. Click **"Deploy site"**

### 3. Set Custom Subdomain
1. In Netlify dashboard → **Site settings** → **Change site name**
2. Set name to: `tokitoflix`
3. Your site will be live at: **https://tokitoflix.netlify.app**

## SEO Checklist (Already Done)

- [x] Optimized title tag with keywords
- [x] Meta description with CTA
- [x] Open Graph tags for social sharing
- [x] Twitter Card tags
- [x] JSON-LD structured data (WebApplication schema)
- [x] robots.txt with sitemap
- [x] sitemap.xml
- [x] Semantic HTML (`<article>`, `<section>`, `<nav>`)
- [x] Proper heading hierarchy (h1 → h2 → h3)
- [x] Keywords meta tag
- [x] Canonical URL
- [x] Security headers (X-Frame-Options, CSP, etc.)

## Post-Deploy Tasks

1. **Google Search Console**: Add your site and submit sitemap
2. **Google Analytics**: Add tracking code (optional)
3. **OG Image**: Create and add `public/og-image.png` (1200x630px)
4. **Custom Domain** (optional): Buy `tokitoflix.com` and connect to Netlify

## Files Structure

```
notes-maker-website/
├── src/
│   ├── app/
│   │   ├── layout.tsx      # SEO meta tags + JSON-LD
│   │   ├── page.tsx         # Main landing page
│   │   ├── sitemap.ts       # Auto-generated sitemap
│   │   └── robots.ts        # Robots.txt
│   └── components/
│       ├── Navbar.tsx
│       ├── Hero.tsx
│       ├── Features.tsx
│       ├── Screenshots.tsx
│       ├── HowItWorks.tsx
│       ├── DownloadSection.tsx
│       └── Footer.tsx
├── public/
│   └── manifest.json        # PWA manifest
├── netlify.toml             # Netlify config
└── package.json
```
