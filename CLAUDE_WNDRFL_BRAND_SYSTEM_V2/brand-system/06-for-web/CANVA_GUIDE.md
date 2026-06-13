# wndrfl Canva Setup Guide
**Version 2.0**

---

## Overview

Canva does not support OTF/TTF font uploads on free plans. Brand Kit requires a Canva Pro or Teams account. All setup below assumes Pro or Teams.

---

## Brand Kit Configuration

Navigate to: **Brand Hub > Brand Kit > + New Brand Kit > "wndrfl"**

### Colors

Add all five in this order:

| Label | HEX |
|---|---|
| Warm Gray 2 (Primary BG) | `#D3CCC2` |
| Warm Gray 1 (Secondary BG) | `#DDD7CE` |
| Cool Gray 1 (Tertiary) | `#E5E1DF` |
| Black | `#000000` |
| White (Reversal) | `#FFFFFF` |

Do not add any other colors. Canva's default palette suggestions will appear — ignore them.

### Fonts

Upload via **Brand Kit > Fonts > + Upload a font**:

| Upload | File |
|---|---|
| ITC Garamond Std Light Narrow (Heading) | `ITCGaramondStd-LtNarrow.otf` |
| ITC Garamond Std Light Narrow Italic (Heading Italic) | `ITCGaramondStd-LtNarrowIta.otf` |
| GT Pressura Mono Light (Body) | `gt-pressura-mono-light.ttf` |

After upload, assign:
- **Heading font:** ITC Garamond Std
- **Subheading font:** GT Pressura Mono
- **Body font:** GT Pressura Mono

If font uploads fail (file format restriction), use these Canva-native substitutes:
- Heading: **EB Garamond** (search Canva font library)
- Body: **Space Mono** (search Canva font library)

### Logo

Upload from `Web Ready Optimized Assets/Assets/`:

| Upload | File | Label |
|---|---|---|
| Primary logotype (black) | Export PNG from `wndrfl_logotype.svg` at 2× | "wndrfl logotype — dark" |
| Primary logotype (white) | Export PNG from `wndrfl_logotype.svg` at 2× with white fill | "wndrfl logotype — light" |
| MOMENTUM lockup | PNG from `wndrfl_lockup_momentum.svg` | "MOMENTUM lockup" |
| ODYSSEY lockup | PNG from `wndrfl_lockup_odyssey.svg` | "ODYSSEY lockup" |
| JOURNEY lockup | PNG from `wndrfl_lockup_journey.svg` | "JOURNEY lockup" |
| SHELTER lockup | PNG from `wndrfl_lockup_shelter.svg` | "SHELTER lockup" |

SVG → PNG export: open SVG in browser, screenshot at 2× zoom, or use Illustrator/Inkscape to export at 300dpi.

Do not upload the symbol as a logo for use in social posts or stories.

---

## Graphic Elements Upload

Upload to **Brand Kit > Graphics** or **Uploads**:

Export each SVG from `Web Ready Optimized Assets/Assets/graphic_elements/` as PNG with transparent background (positive = black paths, negative = white paths).

Naming convention in Canva uploads:
- `dots-01` through `dots-15` (black)
- `dots-01-white` through `dots-15-white` (white)
- `lines-01` through `lines-09` (black / white variants)
- `pattern-wave` / `pattern-geometric`

---

## Template Setup

For each social format, create a Canva template locked to brand specs:

### Instagram Post (1080×1350)
Background: `#D3CCC2`
Logo position: top-center, ~22% canvas width (~238px)
Fonts: ITC Garamond Std for headlines, GT Pressura Mono for body/labels

### Instagram Story (1080×1920)
Background: `#D3CCC2` or photography
Logo position: top-center, ~23% canvas width (~248px)

Lock background color and font selections before sharing as a template to prevent off-brand edits.

---

## Canva-Specific Constraints

Canva does not support:
- Letter-spacing values below 0 (fine — wndrfl tracking is all positive)
- Advanced SVG fill control (use pre-exported PNG variants instead)
- Opacity at the text style level (apply manually per element)

For sub-brand label tracking (0.32em): use Canva's spacing slider. At 20px, 0.32em ≈ 6.4px — set to the nearest available increment.
