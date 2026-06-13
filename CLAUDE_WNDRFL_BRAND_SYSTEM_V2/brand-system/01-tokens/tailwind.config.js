/**
 * wndrfl Brand System — Tailwind CSS Configuration
 * Version 2.0
 *
 * Usage: Replace or extend your tailwind.config.js with this file.
 * Add this to your CSS entry point:
 *   @import url('https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;1,400&family=Space+Mono&display=swap');
 *
 * Production fonts (ITC Garamond Std, GT Pressura Mono) must be loaded separately
 * via @font-face in your global CSS.
 */

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx,vue,svelte}'],

  theme: {
    extend: {

      /* ── COLORS ──────────────────────────────────────── */
      colors: {
        wndrfl: {
          /* Raw palette */
          'warm-gray-2': '#D3CCC2',   /* PANTONE Warm Gray 2 C — primary bg */
          'warm-gray-1': '#DDD7CE',   /* PANTONE Warm Gray 1 C — secondary bg */
          'cool-gray-1': '#E5E1DF',   /* PANTONE Cool Gray 1 C — tertiary bg */
          black:         '#000000',   /* PANTONE Black 6 C */
          white:         '#FFFFFF',   /* Reversal only */

          /* Semantic aliases */
          surface: {
            primary:   '#D3CCC2',
            secondary: '#DDD7CE',
            tertiary:  '#E5E1DF',
            dark:      '#000000',
          },
          ink: {
            'on-light': '#000000',
            'on-dark':  '#FFFFFF',
          },
        },
      },

      /* ── TYPOGRAPHY ──────────────────────────────────── */
      fontFamily: {
        heading: [
          'ITC Garamond Std',
          'EB Garamond',
          'Georgia',
          'serif',
        ],
        body: [
          'GT Pressura Mono',
          'Space Mono',
          'Courier New',
          'monospace',
        ],
      },

      fontWeight: {
        light: '300',
      },

      /* ── TYPE SCALE (1080px canvas base) ─────────────── */
      fontSize: {
        'wndrfl-display':       ['54px', { lineHeight: '1.1', letterSpacing: '0em' }],
        'wndrfl-brand-phrase':  ['42px', { lineHeight: '1.1', letterSpacing: '0em' }],
        'wndrfl-sub-brand':     ['20px', { lineHeight: '1.3', letterSpacing: '0.32em' }],
        'wndrfl-date-location': ['18px', { lineHeight: '1.3', letterSpacing: '0.18em' }],
        'wndrfl-body':          ['16px', { lineHeight: '1.5', letterSpacing: '0.04em' }],
        'wndrfl-url':           ['14px', { lineHeight: '1.3', letterSpacing: '0.12em' }],
      },

      /* ── LETTER SPACING ──────────────────────────────── */
      letterSpacing: {
        'wndrfl-body':        '0.04em',
        'wndrfl-date':        '0.18em',
        'wndrfl-url':         '0.12em',
        'wndrfl-sub-brand':   '0.32em',
      },

      /* ── OPACITY ─────────────────────────────────────── */
      opacity: {
        'body-on-photo': '0.65',
        'url':           '0.40',
        'spine-line':    '0.62',
        'dot-on-photo':  '0.38',
      },

      /* ── BORDER WIDTH ────────────────────────────────── */
      borderWidth: {
        spine: '1px',
      },

      /* ── TRANSITION DURATION ─────────────────────────── */
      transitionDuration: {
        'wndrfl-fast':    '150ms',
        'wndrfl-default': '300ms',
        'wndrfl-slow':    '600ms',
      },

      /* ── TRANSITION TIMING ───────────────────────────── */
      transitionTimingFunction: {
        'wndrfl':     'cubic-bezier(0.4, 0, 0.2, 1)',
        'wndrfl-out': 'cubic-bezier(0.0, 0, 0.2, 1)',
      },
    },
  },

  plugins: [],
}
