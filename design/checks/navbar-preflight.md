# Navbar Preflight Checklist

## Spec + Layout
- `design/nav-spec.json` captures nav container (1440×105) with padding left/right 52px, top 28px, bottom 29px, and per-child Tailwind helpers including `letterSpacingEm`.
- Key elements: catalog chip, search field, region selector, sign-in CTA, cart glyph; each entry records fills, strokes, blur radii, and text metrics with `letterSpacingEm`.
- Responsiveness: constraints show fixed height with children using `layoutSizing` hug/fill values; paddings to be respected when building the flex layout.

## Tokens & Tailwind Wiring
- `design/tokens.json` defines shared colors (`ink`, `surface`, `accentLime`), fonts (Rajdhani 400/700, Manrope 300), radii (8/31/50/100px), and tracking presets.
- `src/styles/tokens.css` now exposes CSS variables (`--color-ink`, `--radius-50`, `--tracking-sign-in`, etc.) plus legacy aliases for existing styles.
- `tailwind.config.js` extends the theme with new color aliases (`ink`, `surface`, `accent-lime`), font families (`nav-rajdhani`, `nav-manrope`), radii (`nav-8`…`nav-100`), letter spacing (`nav-catalog`, `nav-sign-in`), and backdrop blur utilities.

## Assets
- Exported SVGs via Figma API → `public/assets/nav-menu.svg`, `nav-search.svg`, `nav-currency.svg`, `nav-chevron.svg`, `nav-cart.svg`.

## States & Accessibility
- `design/nav-states.json` documents default/hover/focus/active for each control, mapped to the new tokens (background alpha steps, ring colors, blur reuse).
- WCAG contrast (default states): catalog 16.70:1, search placeholder 4.53:1, region selector 15.50:1, sign-in 13.82:1, cart icon 13.82:1 — all pass AA.

## Checks & Notes
- `scripts/check_components_no_hex.sh` now targets `src/components/Navbar`; the new component ships without raw hex values and the check passes. Legacy components still rely on fixed hex colors and remain untouched.
- No other blockers; navbar implementation (`src/components/Navbar/Navbar.tsx`) consumes the spec, tokens, and assets generated above.
