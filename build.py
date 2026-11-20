"""Rebuild the local previews from the GHL paste-in blocks.

  custom-block.html  -> index.html            (the landing page)
  reading-block.html -> writing-sample.html   (the writing sample page)

Run after editing either block:  python3 build.py
"""
from pathlib import Path

here = Path(__file__).parent

# On the live site the pages link by path; the previews link to each other's files.
LINKS = {
    'href="/writing-sample': 'href="writing-sample.html',
}

PAGES = [
    ("custom-block.html", "index.html", "Family Legacy — Mapel Firm",
     "A book and a documentary film of your parent's life, in their own words, preserved in three countries."),
    ("reading-block.html", "writing-sample.html", "The Writing Sample — Mapel Firm",
     "Pages from a Family Legacy book, in the speaker's own words."),
]

for src, out, title, description in PAGES:
    block = (here / src).read_text()
    for live, preview in LINKS.items():
        block = block.replace(live, preview)
    page = f"""<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
<title>{title}</title>
<meta name="description" content="{description}">
<link rel="stylesheet" href="styles.css">
</head>
<body>
<!-- Generated from {src} by build.py. Edit that file, not this one. -->
{block}</body>
</html>
"""
    (here / out).write_text(page)
    print(out, "rebuilt")
