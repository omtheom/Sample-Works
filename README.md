# Mapel Firm — Legacy Codex Landing Page

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
- The Investment: one table with our package as the first row and six published competitor packages below it, each with its price, what that price covers, and ticks for each of our deliverables.

The photo and video frames are empty placeholders until the media is ready.

## Competitor prices

From each provider's own pricing page, checked October 2026. Update the table rows in `custom-block.html` if they change, then run `python3 build.py`.
