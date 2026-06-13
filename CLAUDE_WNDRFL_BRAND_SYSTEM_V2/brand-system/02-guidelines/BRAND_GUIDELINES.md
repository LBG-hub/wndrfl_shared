# wndrfl Brand Guidelines
**Version 2.0 | Source: Brandbook, Yucatan MX 2025 | Inventory: 2026-04-19**

---

## What wndrfl Is

wndrfl is an embodiment of a shared ethos — deep respect for the natural world, commitment to sustainable and regenerative practices, and a desire to foster personal growth and exploration. At its core: impact. Creating meaningful, sustainable change through actions, choices, and relationships.

**Brand taglines (approved):**

`Life is wndrfl` / `Our Planet is wndrfl` / `The sea is wndrfl` / `Adventure is wndrfl` / `Silence is wndrfl`

Pattern: `[Subject] is wndrfl` — subject in Garamond upright, `wndrfl` in Garamond italic. No punctuation between phrase and logotype.

**What wndrfl is not:** Corporate. Clinical. Performatively sustainable. Conventional luxury. A hotel brand.

---

## Sub-brand Extensions

| Sub-brand | Use Cases |
|---|---|
| MOMENTUM | Events, concerts, art residences, curated multisensory experiences, activations, single-day events |
| ODYSSEY | Joint ventures, partnerships, collaborations, impact work |
| JOURNEY | Travel, expeditions, roadtrips, adventures, multi-day events |
| SHELTER | Hotels, residences, homes, places all around the planet |

Sub-brand labels use GT Pressura Mono tracked uppercase. Each label has one letter set in Garamond italic — this detail is embedded in the SVG lockup asset. Never fake it in text.

---

## Color System

Four colors only. No gradients. No off-palette colors.

| Token | HEX | CMYK | Pantone | Role |
|---|---|---|---|---|
| `--wndrfl-warm-gray-2` | `#D3CCC2` | C17 M16 Y21 K0 | Warm Gray 2 C | Primary background |
| `--wndrfl-warm-gray-1` | `#DDD7CE` | C13 M12 Y16 K0 | Warm Gray 1 C | Secondary background |
| `--wndrfl-cool-gray-1` | `#E5E1DF` | C9 M9 Y9 K0 | Cool Gray 1 C | Tertiary neutral |
| `--wndrfl-black` | `#000000` | C0 M0 Y0 K100 | Black 6 C | Text, logo on light |
| `--wndrfl-white` | `#FFFFFF` | — | — | Reversal only |

**Rules:**
- Light backgrounds: Warm Gray 2 or Warm Gray 1
- Dark backgrounds: Black
- All type and logos on light: Black
- All type and logos on dark or photography: White
- Print: PANTONE/CMYK. Digital: HEX/RGB
- SVG path fills (`#191817`, `#181717`) are rasterization artifacts — normalize to `#000000` via CSS

**Never use:** gradients, gold, green, magenta, neon, or any saturated primary color.

---

## Typography

Two typefaces only. Hierarchy never inverts. No third typeface.

### Primary: ITC Garamond Std — Light Narrow + Light Narrow Italic
All headings, display text, logotype compositions, brand phrase.

### Secondary: GT Pressura Mono — Light
All body copy, labels, UI, metadata, sub-brand labels.

### Type Scale (1080px canvas base)

| Role | Font | Size | Tracking | Notes |
|---|---|---|---|---|
| Display headline | ITC Garamond Italic | 54px | 0 | Centered |
| Brand phrase | ITC Garamond | 42px | 0 | Subject upright, `wndrfl` italic |
| Sub-brand label | GT Pressura Mono | 20px | 0.32em | Tracked uppercase |
| Date / Location | GT Pressura Mono | 18px | 0.18em | |
| Body copy | GT Pressura Mono | 16px | 0.04em | 65% opacity on photography |
| URL | GT Pressura Mono | 14px | 0.12em | 40% opacity |

Scale proportionally for other canvas sizes.

### Rules
- `wndrfl` always lowercase — never `WNDRFL` or `Wndrfl` in logo applications
- Headlines: sentence case or lowercase. Never all-caps in primary voice
- Body copy: always GT Pressura Mono. Never Garamond for body text
- Alignment: centered in editorial/advertising. Left-aligned in document/body contexts
- Line height: 1.1 headings, 1.5 body

### Fallbacks

| Context | Heading | Body |
|---|---|---|
| Web / AI | EB Garamond (Google Fonts) | Space Mono (Google Fonts) |
| Google Slides | EB Garamond | Roboto Mono |
| PowerPoint / Keynote | Georgia | Courier New |

---

## Logo System

### Logo Versions

| Name | File | Context |
|---|---|---|
| Primary Logotype | `wndrfl_logotype.svg` | Main brand mark. Full-bleed photography, large format |
| Symbol | `wndrfl_symbol.svg` | App icon, social profile, embossed/embroidered merch. NOT social posts |
| Star Compass | `wndrfl_logotype_alternative_composition_1.svg` | Alternative graphic element |
| Letter Grid | `wndrfl_logotype_alternative_composition_2.svg` | Alternative graphic element |
| Horizontal Lockup | `wndrfl_horizontal_brand_lockup.svg` | Stationery, email headers, postcards, horizontal format |
| Vertical Lockup | `wndrfl_vertical_brand_lockup.svg` | Portrait/square posters, cards, print |
| MOMENTUM Lockup | `wndrfl_lockup_momentum.svg` | MOMENTUM sub-brand events and activations |
| ODYSSEY Lockup | `wndrfl_lockup_odyssey.svg` | ODYSSEY partnerships and collaborations |
| JOURNEY Lockup | `wndrfl_lockup_journey.svg` | JOURNEY travel and expeditions |
| SHELTER Lockup | `wndrfl_lockup_shelter.svg` | SHELTER accommodations and residences |

### SVG viewBox Values (authoritative — from actual files)

| File | viewBox |
|---|---|
| `wndrfl_logotype.svg` | `1228.85 1949.68 2041.15 601.64` |
| `wndrfl_symbol.svg` | `798.51 814.61 2903.17 2870.39` |
| `wndrfl_horizontal_brand_lockup.svg` | `761.65 338.85 2976.35 1080.15` |
| `wndrfl_vertical_brand_lockup.svg` | `593.81 943.19 1938.19 2613.08` |
| `wndrfl_logotype_alternative_composition_1.svg` | `1287.74 1306.88 1924.79 1886.43` |
| `wndrfl_logotype_alternative_composition_2.svg` | `1126.50 875.09 2246.68 2749.90` |
| `wndrfl_lockup_momentum.svg` | `1512.80 770.02 1474.20 2958.98` |
| `wndrfl_lockup_odyssey.svg` | `1522.97 792.15 1454.03 2915.33` |
| `wndrfl_lockup_journey.svg` | `1521.80 770.50 1456.20 2958.79` |
| `wndrfl_lockup_shelter.svg` | `1513.76 773.56 1472.24 2952.76` |

**Critical SVG rules:**
- Never use `viewBox="0 0 4500 4500"` — all SVGs are offset on a 4500pt master canvas
- Always use the viewBox values above
- Use inline SVG in HTML (GitHub raw URLs are CORS-blocked)
- Control fill via CSS class (`wndrfl-logo-on-light` / `wndrfl-logo-on-dark`) — never swap files
- Do not place a separate logotype above a lockup SVG — the lockup already contains the logotype
- Symbol does not appear in Instagram posts or stories

### Digital Logo Sizing

| Canvas | Logotype Width | Symbol Diameter |
|---|---|---|
| Social post 1080×1350 | 18–22% canvas = 195–238px | 10–12% = 108–130px |
| Story 1080×1920 | 20–25% canvas = 216–270px | 10–12% = 108–130px |
| Master graphic 2560×1440 | 12–15% canvas = 307–384px | 6–8% = 154–205px |
| Minimum (any context) | 110px | 60px diameter |

Logo is never the largest element on canvas.

### Clear Space
Two nested bounding boxes around every logo version. The gap between outer boundary and inner boundary = minimum clear space. Nothing enters this gap — including wndrfl's own graphic elements. X unit = cap height of logotype (~25% of logotype height).

---

## Graphic Elements

Supporting elements. Never standalone logos. Never decorative filler. Always compositionally motivated.

**All graphic elements are original commissioned hand-drawn art. Describe in formal terms only: dot, circle, path, stroke, cluster, line, organic, asymmetric, layered, etching-style. No cultural, geographic, heritage, ethnic, or origin references.**

### Element Types

| Type | SVG Files | Character |
|---|---|---|
| Dot trails | `wndrfl_dots_1` through `_15` | Irregular circular paths of varying density — narrow columns, wide spreads, compact clusters |
| Line clusters | `wndrfl_lines_1` through `_9` | Organic parallel strokes — horizontal bands, vertical pairs, diagonal clusters |
| Wave pattern | `wndrfl_pattern_1` | Layered undulating horizontal forms. 3,346 paths. Full-bleed texture use |
| Geometric pattern | `wndrfl_pattern_2` | Repeating hatched geometric shapes. 1,372 paths. Full-bleed texture use |

### Usage Rules
- On photography: White fill only
- On warm gray backgrounds: Black fill only
- Maximum 2 dot trail clusters per composition
- Dot trails follow a natural edge in photography — cliff line, water's edge, ridgeline, path of motion
- Never centered, never symmetrical, never placed as decorative filler
- Dot opacity on photography: 30–45%

### Color Rendering
SVG path fills contain rasterization near-blacks (`#191817`, `#181717`). Normalize at render time:
```css
.wndrfl-element-on-light path { fill: #000000; }
.wndrfl-element-on-dark  path { fill: #ffffff; }
```

---

## Composition Templates

### Instagram Post (1080×1350 px)

**Template A — Vertical spine event (Posts 01, 02)**
Logotype top-center at ~8% canvas height. Full-height 1px spine below. Two circular dot markers on spine at ~27% and ~55% canvas height. Event name at ~65% in Garamond italic. Date at ~78%, Location at ~81%, URL at ~88%.

**Template B — Brand phrase (Post 05)**
No logotype at top. Brand phrase centered at ~47% canvas height. Garamond, upright subject + italic wndrfl. Dot trail accents at corners. URL at ~89%.

**Template C — Editorial still-life (Post 06)**
Warm gray background, no photography. Single vertical black line full canvas height. Object centered at ~40%. Dot scatter flanking object. Brand phrase at ~72%. URL at ~83%.

**Template D — Sub-brand event (Post 04)**
Headline LEFT-aligned (8% from left edge) at ~6% canvas height, Garamond, key word italic. Body copy centered at ~20%, GT Pressura Mono 14px, 3 lines, 65% opacity. Logotype centered at ~55%. Short vertical rule + dot below. Sub-brand label at ~65%. Date at ~74%, Location at ~77%, URL at ~86%.

**Template E — Partnership / ODYSSEY (Post 03)**
All elements LEFT-aligned. Horizontal lockup at ~6%. Body copy left at ~57%, 13–14px. URL left at ~88%.

### Instagram Story (1080×1920 px)

**Story Template A — Event vertical**
Logotype centered at 16–20% canvas height. Vertical spine with 2 dots. Event name or sub-brand label at 55–60%. Date + Location at 75–79%. URL at 89–92%. Dot trails at corners or following natural diagonal.

**Story Template B — Brand phrase**
Brand phrase centered at ~48–50% canvas height. Dot trail at one edge. URL bottom.

---

## Photography Direction

**Approved:** Large-scale landscapes, aerial coastlines, humans small in vast environments, natural motion (surfing, sailing, hiking), close-up textures (sand, shell, rock), low-light naturals, abstract macro textures. Golden hour preferred. High contrast, cinematic. Warm to neutral color temperature. Moody, atmospheric.

**Prohibited:** Saturated or color-treated photography. Studio white-background. Urban hero shots. Close-up faces as primary subject. Conventional tourism marketing.

---

## Incorrect Usage

Never:
- a) Distort proportions of any asset
- b) Use gradients or off-palette colors — no gold, green, magenta, neon, saturated primaries
- c) Rotate the logo or symbol
- d) Apply drop shadows, glows, bevels, or any effects
- e) Capitalize the logotype: never `WNDRFL` or `Wndrfl` in logo applications
- f) Use a non-approved typeface
- g) Place graphic elements inside the logo clear space zone
- h) Use the symbol in Instagram posts or stories
- i) Use `<img src="raw.githubusercontent.com/...">` in HTML — CORS-blocked
- j) Use `viewBox="0 0 4500 4500"` on any wndrfl SVG
- k) Place a separate logotype above a lockup SVG — the lockup already contains it
- l) Use cultural, geographic, heritage, or ethnic descriptors for graphic elements
