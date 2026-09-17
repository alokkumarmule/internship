# Jordan Ellis — Portfolio

A personal portfolio website built with plain HTML, CSS, and JavaScript — no frameworks or build tools.

## What it is

A single-page portfolio with:

- **Hero** — name and one-line pitch
- **About** — short bio
- **Skills** — languages, tools, and practices, grouped
- **Projects** — three project showcases, each with a title, description, tech used, and live/GitHub links
- **Contact** — email and social links

The layout is fully responsive from 375px (mobile) through 768px (tablet) to 1280px+ (desktop), built with semantic HTML (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`) rather than generic `<div>`s.

## Tech used

- **HTML5** — semantic structure
- **CSS3** — custom properties (design tokens), CSS Grid and Flexbox, mobile-first media queries, no framework
- **Vanilla JavaScript** — no libraries or dependencies
- **Fonts** — Fraunces (display) and Inter (body), loaded from Google Fonts

## JavaScript interactions

- **Mobile nav toggle** — a hamburger button opens/closes the navigation menu below 768px
- **Scrollspy** — the active section's nav link is highlighted as you scroll, using `IntersectionObserver`
- **Smooth scroll** — enabled via CSS (`scroll-behavior: smooth`), respecting `prefers-reduced-motion`

## Project structure

```
portfolio/
├── index.html      # Page structure and content
├── styles.css       # All styling, including responsive breakpoints
├── script.js        # Nav toggle + scrollspy behavior
└── README.md         # This file
```

## Running it locally

No build step or dependencies required.

**Option 1 — just open it:**
Double-click `index.html`, or open it in your browser directly.

**Option 2 — with a local server (recommended, avoids any file:// quirks):**

```bash
# If you have Python installed:
python3 -m http.server 8000
# then visit http://localhost:8000

# Or with VS Code:
# install the "Live Server" extension, right-click index.html, and choose
# "Open with Live Server"
```

## Customizing

Before publishing, replace the placeholder content in `index.html`:

- Name, pitch, and About text
- Skills lists
- The three project entries (titles, descriptions, tech tags, and links)
- Email address and social links in the Contact section

## Browser support

Tested in current versions of Chrome and Firefox at 375px, 768px, and 1280px+ widths using DevTools' device toolbar.
