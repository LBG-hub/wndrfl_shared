# wndrfl Figma Setup Guide
**Version 2.0**

---

## Overview

The recommended setup uses a single master library file published to the team. All other wndrfl Figma files consume styles and variables from this library.

---

## Step 1: Run the Brand Plugin

The plugin creates all color styles and text styles in one execution.

1. Open your master library Figma file (create a new file named "wndrfl Brand Library")
2. Open the plugin: **Plugins > Development > Import plugin from manifest...**
3. Select the file: `08-figma-plugin/manifest.json`
4. Run: **Plugins > wndrfl Brand System Setup**

The plugin creates:

**Color styles (5):**
- `Palette/Warm Gray 2` — `#D3CCC2`
- `Palette/Warm Gray 1` — `#DDD7CE`
- `Palette/Cool Gray 1` — `#E5E1DF`
- `Palette/Black` — `#000000`
- `Palette/White` — `#FFFFFF`

**Text styles (6):**
- `Heading/Display` — ITC Garamond Std Light Narrow Italic, 54px
- `Heading/Brand Phrase` — ITC Garamond Std Light Narrow, 42px
- `Body/Body` — GT Pressura Mono Light, 16px, 4% tracking
- `Label/Sub-brand` — GT Pressura Mono Light, 20px, 32% tracking
- `Label/Date Location` — GT Pressura Mono Light, 18px, 18% tracking
- `Label/URL` — GT Pressura Mono Light, 14px, 12% tracking

If brand fonts are not installed, the plugin falls back to Inter and flags each style with a warning in the description. Install fonts from `03_Types/` before running.

---

## Step 2: Import Tokens via Tokens Studio (optional)

For design token management with Figma Variables:

1. Install the **Tokens Studio for Figma** plugin
2. In Tokens Studio: **Load from file**
3. Select: `01-tokens/figma-variables.json`
4. In Tokens Studio: **Sync > Push to Figma Variables**

This creates a Variables collection matching the token structure in `figma-variables.json`.

---

## Step 3: Add Logo Components

1. Open `Web Ready Optimized Assets/Assets/wndrfl_logotype.svg` in a text editor
2. Copy the SVG source
3. In Figma: **File > Import** or paste the SVG
4. Set viewBox to `1228.85 1949.68 2041.15 601.64` — verify the import preserved this
5. Convert to component, name it `Logo/Logotype`
6. Create a variant `on-dark` with white fill

Repeat for each identity asset. Reference the viewBox values in `03-asset-catalog/IDENTITY_CATALOG.md`.

**Never import as an image.** Use vector import to preserve scalability and fill control.

---

## Step 4: Publish as Team Library

1. In the master library file: **Main menu > Libraries**
2. Click **Publish**
3. Add release note: "wndrfl Brand System V2 — initial publish"
4. All team members access via **Assets panel > Libraries > [file name]**

---

## Font Installation

Install before opening any wndrfl Figma file:

| Font | File | Location |
|---|---|---|
| ITC Garamond Std Light Narrow | `ITCGaramondStd-LtNarrow.otf` | `WNDRFL_final_files/03_Types/ITC Garamond/` |
| ITC Garamond Std Light Narrow Italic | `ITCGaramondStd-LtNarrowIta.otf` | Same folder |
| GT Pressura Mono Light | `gt-pressura-mono-light.ttf` | `WNDRFL_final_files/03_Types/GT Pressura Mono/` |

macOS: double-click each file > Install Font
Windows: right-click > Install

---

## Graphic Element Import

1. Import each SVG from `Web Ready Optimized Assets/Assets/graphic_elements/`
2. For each: verify import preserves vector paths (not rasterized)
3. Create a component with two variants: `on-light` (black fill) and `on-dark` (white fill)
4. Name components: `Graphic/Dots/01` through `Graphic/Dots/15`, `Graphic/Lines/01` through `Graphic/Lines/09`, `Graphic/Pattern/Wave`, `Graphic/Pattern/Geometric`

---

## Presentation Templates

Pre-built presentation templates are available in:
`WNDRFL_final_files/05_Stationary/05_5_Presentation_Template/`

Formats included: Figma template, Google Slides, Keynote, PowerPoint, PDF reference.
