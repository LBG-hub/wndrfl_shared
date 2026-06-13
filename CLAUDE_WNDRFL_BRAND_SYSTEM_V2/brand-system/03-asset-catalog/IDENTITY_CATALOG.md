# wndrfl Identity Asset Catalog
**Version 2.0 | Source: Web Ready Optimized Assets/**

All SVG files reside at: `WNDRFL_final_files/Web Ready Optimized Assets/Assets/`
All SVGs use a 4500×4500pt master canvas. viewBox values below crop to artwork bounds.
Fill normalization required — apply CSS class at render time.

---

## Logo Assets

### wndrfl_logotype.svg
| Property | Value |
|---|---|
| viewBox | `1228.85 1949.68 2041.15 601.64` |
| Aspect ratio | ~3.4:1 (wide) |
| Path fills | `#000000` |
| Use on light | CSS class `wndrfl-logo-on-light` → `fill: #000000` |
| Use on dark | CSS class `wndrfl-logo-on-dark` → `fill: #ffffff` |
| Context | Full-bleed photography, large format print, social posts |
| Minimum width | 110px |
| Never | Type it in text. Never rotate. Never distort. |

### wndrfl_symbol.svg
| Property | Value |
|---|---|
| viewBox | `798.51 814.61 2903.17 2870.39` |
| Aspect ratio | ~1:1 (square) |
| Path fills | `#000000` |
| Context | App icon, social profile picture, embossed / embroidered merch, print |
| Minimum diameter | 60px |
| Never | Instagram posts or stories. Never rotate. |

### wndrfl_horizontal_brand_lockup.svg
| Property | Value |
|---|---|
| viewBox | `761.65 338.85 2976.35 1080.15` |
| Aspect ratio | ~2.75:1 (wide) |
| Context | Stationery, email headers, postcards, horizontal-format layouts |

### wndrfl_vertical_brand_lockup.svg
| Property | Value |
|---|---|
| viewBox | `593.81 943.19 1938.19 2613.08` |
| Aspect ratio | ~0.74:1 (portrait) |
| Context | Portrait/square posters, cards, print collateral |

### wndrfl_logotype_alternative_composition_1.svg (star compass)
| Property | Value |
|---|---|
| viewBox | `1287.74 1306.88 1924.79 1886.43` |
| Aspect ratio | ~1.02:1 (square) |
| Context | Compositional accent element. Not a primary logo. |

### wndrfl_logotype_alternative_composition_2.svg (letter grid)
| Property | Value |
|---|---|
| viewBox | `1126.50 875.09 2246.68 2749.90` |
| Aspect ratio | ~0.82:1 (portrait) |
| Context | Compositional accent element. Not a primary logo. |

---

## Sub-brand Lockups

Each lockup contains the logotype, connector elements, and sub-brand label as a single unit. Do not place a separate logotype above these — the logotype is already embedded.

### wndrfl_lockup_momentum.svg
| Property | Value |
|---|---|
| viewBox | `1512.80 770.02 1474.20 2958.98` |
| Aspect ratio | ~0.5:1 (portrait) |
| Sub-brand | MOMENTUM |
| Use for | Events, concerts, art residences, activations, single-day experiences |

### wndrfl_lockup_odyssey.svg
| Property | Value |
|---|---|
| viewBox | `1522.97 792.15 1454.03 2915.33` |
| Aspect ratio | ~0.5:1 (portrait) |
| Sub-brand | ODYSSEY |
| Use for | Joint ventures, partnerships, collaborations, impact work |

### wndrfl_lockup_journey.svg
| Property | Value |
|---|---|
| viewBox | `1521.80 770.50 1456.20 2958.79` |
| Aspect ratio | ~0.49:1 (portrait) |
| Sub-brand | JOURNEY |
| Use for | Travel, expeditions, roadtrips, adventures, multi-day events |

### wndrfl_lockup_shelter.svg
| Property | Value |
|---|---|
| viewBox | `1513.76 773.56 1472.24 2952.76` |
| Aspect ratio | ~0.5:1 (portrait) |
| Sub-brand | SHELTER |
| Use for | Hotels, residences, homes, places |

---

## Inline SVG Usage Pattern

All wndrfl SVGs must be inlined in HTML contexts. GitHub raw URLs are CORS-blocked.

```html
<!-- Logotype on light background -->
<svg class="wndrfl-logo-on-light"
     viewBox="1228.85 1949.68 2041.15 601.64"
     xmlns="http://www.w3.org/2000/svg"
     role="img"
     aria-label="wndrfl">
  <!-- paste path data from wndrfl_logotype.svg -->
</svg>

<!-- Logotype on dark background -->
<svg class="wndrfl-logo-on-dark"
     viewBox="1228.85 1949.68 2041.15 601.64"
     xmlns="http://www.w3.org/2000/svg"
     role="img"
     aria-label="wndrfl">
  <!-- same path data — fill controlled by CSS -->
</svg>
```

```css
.wndrfl-logo-on-light path { fill: #000000; }
.wndrfl-logo-on-dark  path { fill: #ffffff; }
```

---

## Production Print Assets (require Adobe Illustrator)

Located in `WNDRFL_final_files/01_Identity/` — each identity variant has:
- `CMYK/Ai/` — Illustrator source for print production
- `CMYK/PDF/` — Print-ready PDF
- `CMYK/EPS/` — Print interchange format
- `RGB/Ai/` — Illustrator source for digital/screen use
- `RGB/PNG/` — Transparent PNG (positive and negative)
- `RGB/JPG/` — JPEG reference

All print files exist for: Logotype, Symbol, Alternative Composition 1, Alternative Composition 2, Horizontal Lockup, Vertical Lockup, and all 4 sub-brand lockups (MOMENTUM, ODYSSEY, JOURNEY, SHELTER).
