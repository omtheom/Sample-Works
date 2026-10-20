# Legacy Codex · Landing Page

A single landing page for the Legacy Codex book and film, laid out like an essay page: a sticky contents sidebar, one reading column, and an off-white / black theme switch in the header.

| File | What it is |
|------|------------|
| `index.html` | Page markup. Open it in a browser to preview. |
| `styles.css` | All styles, both themes, and the phone layout (under 900px). |
| `script.js` | Theme switch, contents toggle, section highlighting, video play buttons and the carousel. |

## Sections

1. **The Filmmaking**: landscape (16:9) video.
2. **The Penmanship**: text.
3. **The Book**: portrait (4:5) carousel with two photos and a video.
4. **The Preservation**: landscape image.
5. **The Investment**: the $36,000 price card and a comparison table against published competitor prices.

## Adding the videos

Each video has an empty `<source src="">` in `index.html`. Put the MP4 URL there. The play button stays inactive until a source is set.

## Theme

The page follows the visitor's system setting on first visit. The header switch changes it and the choice is remembered in the browser.

## Competitor prices

Taken from each provider's own pricing page, checked October 2026. Update the table in `index.html` if they change.
