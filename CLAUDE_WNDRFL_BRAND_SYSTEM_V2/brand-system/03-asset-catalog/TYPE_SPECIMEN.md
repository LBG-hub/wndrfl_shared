# wndrfl Type Specimen
**Version 2.0**

Two typefaces only. Hierarchy never inverts. No third typeface in any context.

---

## Primary: ITC Garamond Std — Light Narrow

**Role:** All headings, display text, logotype compositions, brand phrase.

**Files present:**
- `ITCGaramondStd-LtNarrow.otf` — upright
- `ITCGaramondStd-LtNarrowIta.otf` — italic

**Web fallback:** EB Garamond (Google Fonts)
```css
font-family: 'ITC Garamond Std', 'EB Garamond', Georgia, serif;
font-weight: 300;
```

### Specimens at 1080px canvas

```
Display — 54px, upright

The ocean is wider than any decision you've ever made.
```

```
Display — 54px, italic

Oceanus
```

```
Brand Phrase — 42px

[Subject upright] is wndrfl [wndrfl italic]
```

### Usage Rules
- Font weight: 300 (Light) only
- Never bold, never medium, never condensed variants
- Headlines: sentence case or lowercase. Never all-caps
- Garamond italic is the default headline style for event names and display moments
- Garamond upright is used for the subject in the brand phrase pattern
- Never use Garamond for body copy, labels, or metadata

---

## Secondary: GT Pressura Mono — Light

**Role:** All body copy, labels, UI, metadata, sub-brand labels, dates, locations, URLs.

**File present:**
- `gt-pressura-mono-light.ttf`

**Web fallback:** Space Mono (Google Fonts)
```css
font-family: 'GT Pressura Mono', 'Space Mono', 'Courier New', monospace;
font-weight: 300;
```

### Specimens at 1080px canvas

```
Sub-brand Label — 20px, tracking 0.32em, uppercase

MOMENTUM     ODYSSEY     JOURNEY     SHELTER
```

```
Date / Location — 18px, tracking 0.18em

14 MARCH 2026  ·  BAJA CALIFORNIA SUR
```

```
Body copy — 16px, tracking 0.04em, 1.5 line height

Three days on the ridge. No signal. No agenda.
Just the sound of wind moving through dry grass
and the feeling that time has no particular claim on you.
```

```
URL — 14px, tracking 0.12em, 40% opacity

wndrfl.com
```

### Usage Rules
- Font weight: 300 (Light) only
- Never use Pressura Mono for headlines or display text
- Sub-brand labels: always tracked uppercase (`letter-spacing: 0.32em; text-transform: uppercase`)
- Body copy on photography: 65% opacity
- URL: 40% opacity, bottom edge of composition, no "visit" prefix

---

## Tracking Reference

| Role | Value | CSS |
|---|---|---|
| Headings (Garamond) | None | `letter-spacing: 0` |
| Body copy | 0.04em | `letter-spacing: 0.04em` |
| Date / Location | 0.18em | `letter-spacing: 0.18em` |
| URL | 0.12em | `letter-spacing: 0.12em` |
| Sub-brand label | 0.32em | `letter-spacing: 0.32em` |

---

## Line Height Reference

| Role | Value |
|---|---|
| All Garamond headings | 1.1 |
| All GT Pressura body | 1.5 |
| Labels / metadata | 1.3 |

---

## Scale at Other Canvas Sizes

All sizes above are specified for a 1080px wide canvas. Scale proportionally:

| Canvas Width | Scale Factor | Display | Body | URL |
|---|---|---|---|---|
| 1080px | 1× | 54px | 16px | 14px |
| 540px | 0.5× | 27px | 8px | 7px |
| 2160px | 2× | 108px | 32px | 28px |

---

## Figma Text Styles (created by plugin)

| Style Name | Font | Size | Tracking |
|---|---|---|---|
| `Heading/Display` | ITC Garamond Std Light Narrow Italic | 54px | 0% |
| `Heading/Brand Phrase` | ITC Garamond Std Light Narrow | 42px | 0% |
| `Body/Body` | GT Pressura Mono Light | 16px | 4% |
| `Label/Sub-brand` | GT Pressura Mono Light | 20px | 32% |
| `Label/Date Location` | GT Pressura Mono Light | 18px | 18% |
| `Label/URL` | GT Pressura Mono Light | 14px | 12% |

---

## Office Tool Fallbacks

When brand fonts are unavailable (Google Slides, PowerPoint, Keynote, Word):

| Tool | Heading Substitute | Body Substitute |
|---|---|---|
| Google Slides | EB Garamond | Roboto Mono |
| PowerPoint | Georgia | Courier New |
| Keynote | Georgia | Courier New |
| Word / Docs | Georgia | Courier New |

Adjust tracking manually in office tools — default tracking should be 0 for headings; apply visual tracking equivalent for labels where the tool supports it.
