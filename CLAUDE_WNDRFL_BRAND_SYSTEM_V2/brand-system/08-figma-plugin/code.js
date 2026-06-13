// wndrfl Brand System V2 — One-shot style generator
// Run once from Plugins > Development to create all color + text styles.
// Publish the file as a team library after running.
//
// Source: WNDRFL_final_files brandbook, Yucatan MX 2025
// Tokens: matches 01-tokens/tokens.json (W3C DTCG format)

function hexToRGB(hex) {
  const clean = hex.replace('#', '');
  return {
    r: parseInt(clean.slice(0, 2), 16) / 255,
    g: parseInt(clean.slice(2, 4), 16) / 255,
    b: parseInt(clean.slice(4, 6), 16) / 255
  };
}

async function main() {

  // ─────────────────────────────────────────────────────────
  // COLOR STYLES
  // Matches tokens: color.palette.*
  // ─────────────────────────────────────────────────────────

  const colors = [
    {
      name: 'Palette/Warm Gray 2',
      hex: 'D3CCC2',
      desc: 'PANTONE Warm Gray 2 C | C17 M16 Y21 K0 | RGB 211 204 194 | Primary background.'
    },
    {
      name: 'Palette/Warm Gray 1',
      hex: 'DDD7CE',
      desc: 'PANTONE Warm Gray 1 C | C13 M12 Y16 K0 | RGB 221 215 206 | Secondary background.'
    },
    {
      name: 'Palette/Cool Gray 1',
      hex: 'E5E1DF',
      desc: 'PANTONE Cool Gray 1 C | C9 M9 Y9 K0 | RGB 229 225 223 | Tertiary neutral.'
    },
    {
      name: 'Palette/Black',
      hex: '000000',
      desc: 'PANTONE Black 6 C | C0 M0 Y0 K100 | Primary text and logo on light.'
    },
    {
      name: 'Palette/White',
      hex: 'FFFFFF',
      desc: 'White — reversal only. Logo and text on dark or photographic backgrounds.'
    },
    // Semantic aliases
    {
      name: 'Surface/Primary',
      hex: 'D3CCC2',
      desc: 'Semantic alias → Palette/Warm Gray 2. Main canvas background.'
    },
    {
      name: 'Surface/Secondary',
      hex: 'DDD7CE',
      desc: 'Semantic alias → Palette/Warm Gray 1. Cards, panels.'
    },
    {
      name: 'Surface/Tertiary',
      hex: 'E5E1DF',
      desc: 'Semantic alias → Palette/Cool Gray 1. Subtle divisions.'
    },
    {
      name: 'Surface/Dark',
      hex: '000000',
      desc: 'Semantic alias → Palette/Black. Full-bleed dark sections.'
    },
    {
      name: 'Ink/On Light',
      hex: '000000',
      desc: 'Text and logo color on any light surface.'
    },
    {
      name: 'Ink/On Dark',
      hex: 'FFFFFF',
      desc: 'Text and logo color on dark surface or photography.'
    }
  ];

  for (const c of colors) {
    const style = figma.createPaintStyle();
    style.name = c.name;
    style.description = c.desc;
    style.paints = [{ type: 'SOLID', color: hexToRGB(c.hex) }];
  }

  // ─────────────────────────────────────────────────────────
  // FONT LOADING
  // ─────────────────────────────────────────────────────────

  const fontsToLoad = [
    { family: 'ITC Garamond Std', style: 'Light Narrow' },
    { family: 'ITC Garamond Std', style: 'Light Narrow Italic' },
    { family: 'GT Pressura Mono', style: 'Light' }
  ];

  const loadedFonts = {};
  for (const f of fontsToLoad) {
    const key = `${f.family}::${f.style}`;
    try {
      await figma.loadFontAsync(f);
      loadedFonts[key] = true;
    } catch (e) {
      console.warn(`Font not available: ${f.family} ${f.style}`);
      loadedFonts[key] = false;
    }
  }

  // Fallback if brand fonts not installed
  const FALLBACK = { family: 'Inter', style: 'Regular' };
  await figma.loadFontAsync(FALLBACK);

  // ─────────────────────────────────────────────────────────
  // TEXT STYLES
  // Matches tokens: typography.*
  // tracking unit: PERCENT in Figma API = em × 100
  // ─────────────────────────────────────────────────────────

  const textStyles = [
    {
      name: 'Heading/Display',
      family: 'ITC Garamond Std',
      style: 'Light Narrow Italic',
      size: 54,
      tracking: 0,
      lineHeight: 110,
      desc: 'Event/display headline. ITC Garamond Std Light Narrow Italic. 54px. 1.1 line height.'
    },
    {
      name: 'Heading/Brand Phrase',
      family: 'ITC Garamond Std',
      style: 'Light Narrow',
      size: 42,
      tracking: 0,
      lineHeight: 110,
      desc: '[Subject] is wndrfl pattern. ITC Garamond Std Light Narrow (upright). 42px.'
    },
    {
      name: 'Body/Body',
      family: 'GT Pressura Mono',
      style: 'Light',
      size: 16,
      tracking: 4,        // 0.04em = 4%
      lineHeight: 150,
      desc: 'Body copy. GT Pressura Mono Light. 16px. Tracking 0.04em. Line height 1.5.'
    },
    {
      name: 'Label/Sub-brand',
      family: 'GT Pressura Mono',
      style: 'Light',
      size: 20,
      tracking: 32,       // 0.32em = 32%
      lineHeight: 130,
      desc: 'MOMENTUM / ODYSSEY / JOURNEY / SHELTER. GT Pressura Mono Light. 20px. Tracking 0.32em. Uppercase.'
    },
    {
      name: 'Label/Date Location',
      family: 'GT Pressura Mono',
      style: 'Light',
      size: 18,
      tracking: 18,       // 0.18em = 18%
      lineHeight: 130,
      desc: 'Date and location fields. GT Pressura Mono Light. 18px. Tracking 0.18em.'
    },
    {
      name: 'Label/URL',
      family: 'GT Pressura Mono',
      style: 'Light',
      size: 14,
      tracking: 12,       // 0.12em = 12%
      lineHeight: 130,
      desc: 'wndrfl.com URL. GT Pressura Mono Light. 14px. Tracking 0.12em. Apply 40% opacity.'
    }
  ];

  for (const t of textStyles) {
    const textStyle = figma.createTextStyle();
    textStyle.name = t.name;
    textStyle.description = t.desc;

    const fontKey = `${t.family}::${t.style}`;
    if (loadedFonts[fontKey]) {
      textStyle.fontName = { family: t.family, style: t.style };
    } else {
      textStyle.fontName = FALLBACK;
      textStyle.description += ' [⚠ Brand font not installed — using Inter fallback]';
    }

    textStyle.fontSize = t.size;
    textStyle.letterSpacing = { value: t.tracking, unit: 'PERCENT' };
    textStyle.lineHeight = { value: t.lineHeight, unit: 'PERCENT' };
  }

  // ─────────────────────────────────────────────────────────
  // REPORT
  // ─────────────────────────────────────────────────────────

  const missing = fontsToLoad
    .filter(f => !loadedFonts[`${f.family}::${f.style}`])
    .map(f => `${f.family} ${f.style}`);

  if (missing.length > 0) {
    figma.notify(
      `wndrfl V2: styles created. Install missing fonts from 03_Types/: ${missing.join(', ')}`,
      { timeout: 8000, error: true }
    );
  } else {
    figma.notify(
      'wndrfl Brand System V2 — 11 color styles + 6 text styles created. Publish as team library.',
      { timeout: 4000 }
    );
  }

  figma.closePlugin();
}

main();
