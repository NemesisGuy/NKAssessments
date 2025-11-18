# NK Assessments Landing Page

Single-page Bootstrap 5 website for Naadirah Kagee (psychometrist) featuring hero, services, assessment process, contact form, and a global light/dark-mode toggle.

## Features

- SEO-friendly meta tags + Open Graph/Twitter previews
- Structured data (Person + ProfessionalService) for rich snippets
- Sticky navbar with smooth scroll and collapse-on-select
- Hero, About, Services, Psychometric Assessments, and Contact sections
- Responsive cards, accordion timeline, and CTA buttons
- Contact form with client-side validation + confirmation toast
- Light/Dark mode with persistence and mobile fixed CTA button

## Project Structure

```
NKAssessments/
├── index.html              # Main single-page site
├── assets/
│   ├── css/styles.css      # Custom theme + component overrides
│   ├── js/main.js          # Theme toggle, form handler, nav helpers
│   └── images/             # Place profile + hero imagery here
├── README.md               # This file
└── spec.md                 # Original requirements brief
```

## Getting Started

1. Open `index.html` directly in a browser or serve with any static server.
2. Update placeholder assets:
   - Favicon files: `favicon-32x32.png`, `favicon-16x16.png`, `apple-touch-icon.png`
   - Hero/About images under `assets/images/`
   - Open Graph image `link-to-og-image.png` in `<head>`
3. Replace contact links (WhatsApp number, LinkedIn URL) with verified details.
4. If you have an email provider/Formspree endpoint, hook it into `#contactForm`.

### Recommended Static Server (optional)

```powershell
cd c:\Users\Reign\Projects\NKAssessments
python -m http.server 8000
```

Then navigate to `http://localhost:8000/`.

## Docker usage

Build the containerized static site with nginx and run it locally:

```powershell
cd c:\Users\Reign\Projects\NKAssessments
docker build -t nkassessments:latest .
docker run --rm -p 8080:80 nkassessments:latest
```

Visit `http://localhost:8080` to preview the page inside the container.

### Publish to Docker Hub (nemesisguy/nkassessments)

```powershell
cd c:\Users\Reign\Projects\NKAssessments
docker build --no-cache -t nemesisguy/nkassessments:latest .
docker login --username nemesisguy
docker push nemesisguy/nkassessments:latest
```

Use `--no-cache` for reproducible builds before pushing, and keep the `latest` tag synchronized with the source of truth.

## Customization Notes

- Adjust palettes in `assets/css/styles.css` via CSS custom properties.
- Update structured data (JSON-LD) in `index.html` with final URLs and imagery.
- Add testimonials or analytics scripts in the designated optional sections when content is ready.

## Image Guidance

- Optimize images (≤ 200 KB) and export WebP/PNG as needed.
- Use descriptive filenames (e.g., `naadirah-hero.jpg`) and update `alt` text for accessibility.

## Deployment Checklist

- Verify light/dark toggle + localStorage persistence
- Confirm contact links (mailto, WhatsApp, LinkedIn)
- Run through responsive breakpoints (mobile, tablet, desktop)
- Minify CSS/JS for production if bundling (e.g., via Parcel or Vite)
