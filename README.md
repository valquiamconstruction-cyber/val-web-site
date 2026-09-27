# VALQUIAM Construction Services — Website

Static site (HTML/CSS/vanilla JS). See `docs/SPEC.md` for the full spec — content outline,
sitemap, `projects.json` schema, and open questions.

## Local development

Open this folder in VS Code, install the **Live Server** extension, right-click `index.html` →
"Open with Live Server".

## Deployment

Connect this repo to Netlify — every push to `main` auto-deploys. No build step needed
(publish directory = repo root).

## Structure

- `index.html`, `about.html`, `services.html`, `projects.html`, `contact.html` — pages
- `css/style.css` — all styles
- `js/main.js` — shared site behavior
- `js/projects.js` — fetches and renders `data/projects.json` on the Projects page
- `data/projects.json` — edit this to add/update projects (no HTML editing needed)
- `images/` — put logo, hero, and project photos here
- `docs/SPEC.md` — the working spec for this build

## Still needed

- Phone number / email
- Logo file
- Confirmed brand colors
- Real project photos + entries in `data/projects.json`
- A Formspree form ID (replace `YOUR_FORM_ID` in `contact.html`)
