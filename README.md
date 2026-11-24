# Vridhi Gandhi — Portfolio

Personal portfolio site of Vridhi Gandhi, Solution Engineer (OTT platforms, AI systems, data pipelines).

Live site: https://vridhigandhi.github.io

## Stack
Plain HTML, CSS and JavaScript. No build step and no dependencies.

## Structure
| Path | Purpose |
|---|---|
| `index.html` | Home: hero, experience, stack, projects, clients, chatbot |
| `about.html`, `services.html`, `certificates.html`, `contact.html` | Inner pages |
| `images/` | Optimized WebP/PNG assets and favicons |
| `404.html`, `robots.txt`, `sitemap.xml` | Hosting and SEO files |
| `.github/workflows/lighthouse.yml` | Lighthouse performance and accessibility check |

## Run locally
```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Notes
- Images: keep new images as WebP and under about 250 KB.
- The home-page chatbot is a client-side keyword lookup. It makes no API calls and holds no secrets.
- Deployed with GitHub Pages.
