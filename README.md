# ekj.ink

Portfolio site for writer Emma Jones. Built with [Astro](https://astro.build), deployed to GitHub Pages at [ekj.ink](https://ekj.ink).

## Development

```bash
npm install
npm run dev      # localhost:4321
npm run build    # build to dist/
npm run preview  # preview built site
```

## Content

Add or edit work entries in `src/content/`:

- `essays.json` — essay pieces
- `criticism.json` — criticism and reviews
- `talks.json` — interviews and talks

Each file is a JSON array of objects with `title`, `titleUrl` (optional), `source`, and `sourceUrl` (optional). Order in the array controls display order.

## Deployment

Pushes to the `source` branch trigger the GitHub Actions workflow (`.github/workflows/deploy.yml`), which builds and deploys to GitHub Pages.

**One-time setup:** in the repo's GitHub Pages settings, set the source to **GitHub Actions**.
