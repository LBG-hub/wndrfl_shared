# wndrfl Graphic Elements Catalog
**Version 2.0 | Source: Web Ready Optimized Assets/Assets/graphic_elements/**

---

## Critical Language Rule

All graphic elements are original commissioned hand-drawn art. In all contexts — documentation, alt text, AI prompts, Canva labels, verbal references — describe using formal terms only:

**Approved:** dot, circle, path, stroke, cluster, trail, line, band, column, organic form, asymmetric arrangement, layered composition, etching-style, hand-drawn quality, varied density, irregular spacing, flowing parallel strokes, undulating forms, repeating geometric shapes.

**Never use:** tribal, ethnic, indigenous, folk, native, cultural, heritage, geographic origin, artisanal (when implying cultural provenance), or any reference to a specific culture, tradition, or region.

---

## Rendering Rules

All SVGs contain path fills of `#191817` or `#000000` (rasterization variants). Always normalize at render time:

```css
.wndrfl-element-on-light path { fill: #000000; }   /* warm gray or white backgrounds */
.wndrfl-element-on-dark  path { fill: #ffffff; }   /* black backgrounds or photography */
```

Opacity on photography: 30–45%.
Maximum 2 dot trail clusters per composition.

---

## Dot Trails — 15 variants

Organic clusters of circular paths. Vary in density, spread, and orientation. Use to accent natural edges in photography or as isolated compositional elements.

| File | viewBox | Paths | Character | Best for |
|---|---|---|---|---|
| `wndrfl_dots_1.svg` | `390.00 330.64 3720.09 3838.56` | 93 | Large scattered cluster, wide spread across full canvas height | Large-format overlays, full-bleed backgrounds |
| `wndrfl_dots_2.svg` | `2158.77 406.79 182.23 3686.49` | 16 | Narrow vertical column | Spine accent, edge detail |
| `wndrfl_dots_3.svg` | `1195.63 1374.17 2108.72 1751.47` | 35 | Mid-density horizontal cluster, moderate spread | Horizontal band accent |
| `wndrfl_dots_4.svg` | `1695.65 1536.58 1108.78 1426.61` | 8 | Sparse compact cluster, square footprint | Subtle corner accent |
| `wndrfl_dots_5.svg` | `1105.51 1223.97 2064.58 1762.03` | 18 | Medium spread, organic arrangement, portrait orientation | Mid-canvas accent |
| `wndrfl_dots_6.svg` | `1620.95 1343.62 1258.59 1812.80` | 16 | Vertical-leaning cluster | Right or left edge accent |
| `wndrfl_dots_7.svg` | `1514.19 1252.22 1471.05 1995.84` | 15 | Square-format cluster, balanced density | Flexible placement |
| `wndrfl_dots_8.svg` | `1567.86 1129.42 1364.10 2240.76` | 10 | Vertical spread, moderate path count | Tall edge accent |
| `wndrfl_dots_9.svg` | `1500.40 398.46 1498.80 3703.98` | 45 | Tall vertical column, dense | Full-height edge trail |
| `wndrfl_dots_10.svg` | `1267.86 1412.67 1964.14 1674.64` | 17 | Horizontal band, contained height | Lower or upper edge band |
| `wndrfl_dots_11.svg` | `1447.92 1091.79 1604.55 2316.56` | 16 | Portrait cluster, moderate | Versatile medium accent |
| `wndrfl_dots_12.svg` | `745.58 1088.11 3008.45 2324.16` | 12 | Wide horizontal cluster, sparse | Wide canvas spread |
| `wndrfl_dots_13.svg` | `1261.29 834.64 1981.32 2829.61` | 17 | Tall vertical cluster, moderate density | Tall edge accent |
| `wndrfl_dots_14.svg` | `1818.74 1047.64 862.55 2404.61` | 9 | Narrow tall trail, very sparse | Subtle vertical accent |
| `wndrfl_dots_15.svg` | `877.96 1606.51 2744.34 1287.68` | 17 | Wide shallow horizontal, asymmetric | Lower-canvas horizontal accent |

---

## Line Clusters — 9 variants

Organic parallel strokes of varying weight, curvature, and grouping. Use as edge accents, structural dividers, or textural overlays.

| File | viewBox | Paths | Character | Best for |
|---|---|---|---|---|
| `wndrfl_lines_1.svg` | `630.22 1384.88 3239.78 1730.77` | 18 | Wide horizontal flowing cluster, dense | Wide band accent, billboard lower register |
| `wndrfl_lines_2.svg` | `1947.73 502.38 604.64 3495.62` | 2 | Narrow vertical pair, full height | Minimal spine accent |
| `wndrfl_lines_3.svg` | `2011.95 501.44 475.92 3497.13` | 14 | Narrow vertical cluster, full height | Dense spine or edge accent |
| `wndrfl_lines_4.svg` | `660.80 1046.00 3178.15 2407.85` | 8 | Wide diagonal cluster, landscape orientation | Diagonal composition element |
| `wndrfl_lines_5.svg` | `1269.07 898.56 1961.54 2702.58` | 10 | Portrait cluster, organic curvature | Versatile portrait overlay |
| `wndrfl_lines_6.svg` | `667.75 1105.74 3164.85 2286.67` | 10 | Wide landscape cluster, moderate density | Horizontal mid-canvas accent |
| `wndrfl_lines_7.svg` | `363.66 2075.12 3772.66 350.00` | 11 | Single-register horizontal band, full canvas width | Horizon line accent, divider |
| `wndrfl_lines_8.svg` | `825.09 517.00 2849.91 3466.59` | 23 | Dense portrait cluster, high path count | Rich textural overlay |
| `wndrfl_lines_9.svg` | `1275.29 1321.55 1949.73 1856.88` | 1 | Single continuous path, organic form | Minimal accent, single stroke |

---

## Patterns — 2 variants

Full-bleed texture compositions. Designed to tile or crop as backgrounds. High path counts — do not animate or apply heavy CSS filters.

### wndrfl_pattern_1.svg (wave)
| Property | Value |
|---|---|
| viewBox | `145.61 288.57 10374.77 5422.43` |
| Aspect ratio | ~1.9:1 (wide landscape) |
| Path count | 3,346 |
| Character | Layered undulating horizontal forms. Dense, rhythmic. Organic variation in stroke weight. |
| Fill | `#191817` — normalize to `#000000` or `#ffffff` via CSS |
| Use | Full-bleed background texture on light or dark. Crops well. Avoid scaling down below 50%. |

### wndrfl_pattern_2.svg (geometric)
| Property | Value |
|---|---|
| viewBox | `148.00 372.20 10371.25 5254.82` |
| Aspect ratio | ~1.97:1 (wide landscape) |
| Path count | 1,372 |
| Character | Repeating hatched geometric shapes. Regular rhythm with hand-drawn variation. |
| Fill | `#191817` — normalize to `#000000` or `#ffffff` via CSS |
| Use | Full-bleed background texture. Consistent tiling. Works at reduced opacity as a surface pattern. |

---

## Production Source Files

Located in `WNDRFL_final_files/02_Graphic_Elements/`:
- `02_1_Dots/` — 15 positive (black) + 15 negative (white) variants in AI, PDF, PNG
- `02_2_Lines/` — 9 positive + 9 negative variants in AI, PDF, PNG
- `02_3_Pattern/` — Pattern 1 + Pattern 2 in AI, PDF, PNG

Positive = black on transparent. Negative = white on transparent.
