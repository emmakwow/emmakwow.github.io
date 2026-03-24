# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start local dev server (localhost:4321)
npm run build    # Production build to dist/
npm run preview  # Serve built site locally
```

Deployment is automatic: push to `source` branch → GitHub Actions builds and deploys to GitHub Pages.

## Architecture

Astro v4 static site for writer Emma Jones, deployed to `ekj.ink`.

**Content flow:**
- `src/content/essays.json`, `criticism.json`, `talks.json` — JSON arrays, one object per entry (`title`, `titleUrl?`, `source`, `sourceUrl?`); order in the array = display order
- `src/pages/index.astro` — imports the three JSON files directly and renders them
- `src/styles/global.css` — all styles; no inline styles anywhere

**Adding content:** append an object to the relevant JSON array. Position in the array controls display order.

**Deployment note:** GitHub Pages must be configured to use "GitHub Actions" as the source (repo Settings → Pages). The `public/CNAME` file handles the custom domain.
