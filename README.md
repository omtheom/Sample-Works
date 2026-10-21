# Mapel Firm — Family Legacy Landing Page

Same setup as the main site in Legacy-Codex: one CSS file and one HTML block for GoHighLevel.

| File | What it is | Where it goes in GoHighLevel |
|------|------------|------------------------------|
| `styles.css` | All styles, both themes, phone layout | **Page Settings → Custom CSS**. Paste the whole file. |
| `custom-block.html` | Nav, page content and the script (theme switch, menu, contents, carousel) | A **Custom Code / Custom HTML** element. Paste the whole file. |
| `index.html` | Local preview, generated from `custom-block.html` by `python3 build.py` | Not used in GHL. |

## Paste order in GoHighLevel

1. Paste `styles.css` into the page's Custom CSS.
2. Add one Custom Code element and paste `custom-block.html` into it.
3. Set that section's padding to 0 so the page colour reaches the edges.
4. Publish and preview.

## Page

- Nav: the same logo, links, Apply Now button and phone menu as mapelfirm.com, plus the theme switch. Links go to the sections on mapelfirm.com.
- Theme: off-white by default. The switch changes to black and the choice is remembered.
- Sections: The Filmmaking (landscape video frame), The Penmanship (text), The Book (portrait carousel: two photo frames and one video frame), The Preservation (landscape image frame).
- The Investment: one table with the deliverables down the left and the providers across the top: three competitors first, Mapel Firm last and shaded. Each column shows a tick or dash per deliverable, with the price in the bottom row. It fits a phone screen without scrolling sideways.

The Book carousel shows the thumbnail photo, the second photo, then the book video, in 16:9 frames. The Preservation photo fills a 16:9 frame. The film frame is still an empty placeholder.

## Competitor prices

From each provider's own pricing page, checked October 2026. Update the table rows in `custom-block.html` if they change, then run `python3 build.py`.
