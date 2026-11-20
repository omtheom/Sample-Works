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

The Book shows the cover as a hardcover built in CSS (boards, spine, page edges, title page). It turns with the pointer or a drag and opens on a tap or with the "Open the book" button; with reduced motion it stays still and opens instantly. To change the book, edit the cover image, spine text and title page text in `custom-block.html`, and the `--cloth` colour in `styles.css` (sampled from the cover's edge). The Preservation photo fills a 16:9 frame. The page opens on the film's still, full width, with the title over it; pressing play runs the film there. The contents list numbers the five parts and a hairline fills as the reader scrolls.

## Competitor prices

From each provider's own pricing page, checked October 2026. Update the table rows in `custom-block.html` if they change, then run `python3 build.py`.

## Media

`media/` holds web-ready copies of the photos and clips: clips are silent, 720px wide, and loop without a visible jump. The page cannot load files from this folder; each file must be uploaded to the GoHighLevel media library.

Six of them are switched on by pasting their links into the `LC_MEDIA` block at the top of `custom-block.html`. A line left empty keeps that clip or photo off, and the page still works.

| File | Line in `LC_MEDIA` | Where it shows |
|------|--------------------|----------------|
| `06-crew-softbox.mp4` | `softbox` | The Filmmaking |
| `07-camera-operator.mp4` | `operator` | The Filmmaking |
| `08-focus-ring.mp4` | `focus` | The Filmmaking |
| `09-car-ride.mp4` | `carRide` | The Filmmaking |
| `05-interview.jpg` | `interview` | The Filmmaking |
| `10-archiving.mp4` | `archiving` | The Preservation |

Files `01` to `04` are lighter copies of photos already linked in the page from the media library.

## The Filmmaking sequence

The section's paragraph is told as a film: the screen holds in place while the shots change, and each sentence appears as a caption. The order is set by `data-beats-wide` (desktop, where clips share the screen side by side) and `data-beats-narrow` (a phone held upright, one shot at a time), written as `shot:sentence`. Shots with no link are skipped. Without scripts it is one photo with the paragraph under it; with reduced motion the clips stay still.

## The writing sample page

`reading-block.html` is a standalone reading page: the whole writing sample in one column, read by scrolling. The top bar holds only the logo (which goes to mapelfirm.com) and the theme switch; a contents sidebar on the left lists the two chapters and can be hidden with the ×. There are no other links or buttons. The theme a visitor picks carries over from the landing page.

1. Create a new page in GoHighLevel with the path `/writing-sample`.
2. Paste `styles.css` into its Custom CSS.
3. Paste `reading-block.html` into a Custom Code element.

The landing page (at `/sample`) links to it from The Penmanship and from the open book.

`python3 build.py` rebuilds both previews: `index.html` and `writing-sample.html`.
