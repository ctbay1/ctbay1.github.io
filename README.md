# ctbay1.github.io

Personal website of Tarık Bayraktar: https://ctbay1.github.io

Plain HTML and CSS, served by GitHub Pages straight from the `main` branch. There is no build step: edit a file, commit, and the site updates within a minute or two.

## What's where

| Path | What it is |
| --- | --- |
| `index.html` | The homepage |
| `404.html` | Shown for any address that doesn't exist |
| `assets/css/site.css` | All styles; colour, type and spacing tokens are at the top in `:root` |
| `assets/fonts/` | Self-hosted Space Grotesk, Inter and IBM Plex Mono (SIL Open Font License, licence files included) |
| `assets/img/` | Portrait and project screenshots. The One More Passenger JPEGs are copied unchanged from the game's support site, so they keep their Content Credentials |
| `cv/` | Downloadable CVs in English and Turkish |
| `favicon.svg`, `favicon.ico`, `apple-touch-icon.png` | Browser and home-screen icons |
| `og.png` | Preview image shown when the link is shared (1200×630) |
| `legacy/` | The first version of this site, kept as it was |

## Common updates

- **Text:** edit `index.html`.
- **Accent colour:** change `--accent` in `assets/css/site.css`.
- **CVs:** replace the PDFs in `cv/`, keeping the same file names so existing links keep working.
- **Portrait in colour:** remove the `filter` line under `.portrait img` in `assets/css/site.css`.
- **New project:** copy one of the `<li>` cards under "More projects" in `index.html`.
