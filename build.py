"""Rebuild index.html (local preview) from custom-block.html (the GHL paste-in block).

Run after editing custom-block.html:  python3 build.py
"""
from pathlib import Path

here = Path(__file__).parent
block = (here / "custom-block.html").read_text()

page = f"""<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
<title>Legacy Codex — Mapel Firm</title>
<meta name="description" content="A book and a documentary film of your parent's life, in their own words, preserved in three countries.">
<link rel="stylesheet" href="styles.css">
</head>
<body>
<!-- Generated from custom-block.html by build.py. Edit that file, not this one. -->
{block}</body>
</html>
"""

(here / "index.html").write_text(page)
print("index.html rebuilt")
