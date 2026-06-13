# wndrfl Brand System V2
**Source: WNDRFL_final_files — Brandbook, Yucatan MX 2025**
**Built: 2026-04-19**

---

## What This Is

A complete, multi-tool brand infrastructure built from the official wndrfl source files. V2 supersedes the V1 system with corrected SVG viewBox values (from actual files), semantic token naming, expanded graphic element catalog, and updated exports for Figma, Canva, CSS, Tailwind, and AI tools.

Source files are in `WNDRFL_final_files/` — that folder is read-only reference. Everything in this V2 folder is generated output.

---

## Folder Structure

```
CLAUDE_WNDRFL_BRAND_SYSTEM_V2/
└── brand-system/
    ├── 00-inventory.md              Phase 1: Full source audit
    ├── 01-tokens/
    │   ├── tokens.json              W3C DTCG design tokens (Tokens Studio compatible)
    │   ├── css-variables.css        CSS custom properties + utility classes
    │   ├── tailwind.config.js       Tailwind CSS extension
    │   └── figma-variables.json     Figma Variables (import via Tokens Studio plugin)
    ├── 02-guidelines/
    │   ├── BRAND_GUIDELINES.md      Complete visual identity reference
    │   └── VOICE_AND_TONE.md        Copy rules, tone, prohibited language
    ├── 03-asset-catalog/
    │   ├── IDENTITY_CATALOG.md      All logo SVGs with viewBox values + usage rules
    │   ├── GRAPHIC_ELEMENTS_CATALOG.md  All 26 element SVGs + rendering rules
    │   └── TYPE_SPECIMEN.md         Type scale, tracking, fallbacks, Figma style names
    ├── 04-for-ai/
    │   ├── SYSTEM_PROMPT.md         Drop-in AI system prompt for brand compliance
    │   └── IMAGE_AI_PROMPTS.md      Midjourney / DALL-E / Firefly prompt library
    ├── 05-for-figma/
    │   └── FIGMA_SETUP.md           Library setup, font install, component import
    ├── 06-for-web/
    │   └── CANVA_GUIDE.md           Canva Brand Kit setup + template specs
    ├── 07-for-print/
    │   └── PRINT_GUIDE.md           CMYK values, source files, substrate guidance
    └── 08-figma-plugin/
        ├── manifest.json            Figma plugin manifest
        └── code.js                  One-shot style generator (11 colors + 6 text styles)
```

---

## Quick Start by Tool

| Tool | Start here |
|---|---|
| Figma | `05-for-figma/FIGMA_SETUP.md` → run plugin from `08-figma-plugin/` |
| CSS / HTML | `01-tokens/css-variables.css` |
| Tailwind | `01-tokens/tailwind.config.js` |
| Tokens Studio | `01-tokens/figma-variables.json` |
| Canva | `06-for-web/CANVA_GUIDE.md` |
| AI tools | `04-for-ai/SYSTEM_PROMPT.md` |
| Image generation | `04-for-ai/IMAGE_AI_PROMPTS.md` |
| Print production | `07-for-print/PRINT_GUIDE.md` |
| Full brand reference | `02-guidelines/BRAND_GUIDELINES.md` |

---

## Brand Essentials

**Colors — four only:**
`#D3CCC2` (Warm Gray 2) / `#DDD7CE` (Warm Gray 1) / `#E5E1DF` (Cool Gray 1) / `#000000` (Black)
White `#FFFFFF` is reversal-only. No gradients. No off-palette colors.

**Fonts — two only:**
ITC Garamond Std Light Narrow (+ Italic) — headings
GT Pressura Mono Light — body, labels, metadata

**Logo SVG rule:**
Never `viewBox="0 0 4500 4500"`. Always use viewBox values from `03-asset-catalog/IDENTITY_CATALOG.md`. Inline SVG only in HTML contexts.

**Graphic elements:**
Describe in formal terms only — dot, line, stroke, cluster, organic, asymmetric. No cultural, geographic, or heritage language.

---

## SVG Quick Reference

| Asset | viewBox |
|---|---|
| `wndrfl_logotype.svg` | `1228.85 1949.68 2041.15 601.64` |
| `wndrfl_symbol.svg` | `798.51 814.61 2903.17 2870.39` |
| `wndrfl_horizontal_brand_lockup.svg` | `761.65 338.85 2976.35 1080.15` |
| `wndrfl_vertical_brand_lockup.svg` | `593.81 943.19 1938.19 2613.08` |
| `wndrfl_lockup_momentum.svg` | `1512.80 770.02 1474.20 2958.98` |
| `wndrfl_lockup_odyssey.svg` | `1522.97 792.15 1454.03 2915.33` |
| `wndrfl_lockup_journey.svg` | `1521.80 770.50 1456.20 2958.79` |
| `wndrfl_lockup_shelter.svg` | `1513.76 773.56 1472.24 2952.76` |

---

## Phase Status

| Phase | Status |
|---|---|
| Phase 1: Inventory and Diagnostic | Complete |
| Phase 2: Structure and Tokenize | Complete |
| Phase 3: Human Review Gate | Pending confirmation |
| Phase 4: Exports and Rendering | Pending Phase 3 |
