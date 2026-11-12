# Design System Specification

## 1. Visual Philosophy & Vibe
Derived directly from the reference creative studio hero designs:
- **Tone & Identity**: Creative, modern, bold, tactile, and mathematically disciplined. The aesthetic bridges high-end editorial graphic design with interactive digital craftsmanship.
- **Color Philosophy**: Clean, luminous canvas (`#FFFFFF`) layered with vivid, punchy accent swatches—energetic chartreuse lime (`#CCD828`), deep royal violet (`#6355DE`), rich crimson wine (`#8F2342`), putty gray (`#B7B7AB`), deep teal emerald (`#23946E`), and slate navy (`#2E6997`).
- **Tactile Depth**: Rounded cards (`radius-2xl` / 24px) fan out physically, resembling swatch decks and tactile print collateral (visiting cards, bill books, brand identities).
- **Subtle Atmosphere**: Soft radial ambient glows (`glow-violet` and `glow-lime`) sit behind hero focal points to add luminosity without clutter.

---

## 2. Complete Design Tokens (`src/app/globals.css`)

All tokens are defined as CSS variables in `:root` and mapped to Tailwind v4 via `@theme inline`.

### 2.1 Colors
| Token Name | Hex / Value | Semantic Role & Usage |
| :--- | :--- | :--- |
| `--background` | `#ffffff` | Primary canvas background |
| `--surface` | `#fbfbfc` | Secondary canvas / elevated sections |
| `--surface-muted` | `#f4f4f6` | Subtle pill/card backgrounds, borders |
| `--surface-dark` | `#2f2e33` | Primary solid pill button ("View Collections") |
| `--surface-dark-hover` | `#1e1d21` | Dark button hover state |
| `--foreground` | `#1a1b1e` | Headings, primary text ("Turning", "Into") |
| `--foreground-muted` | `#667085` | Subtitles ("Create your identity..."), metadata |
| `--foreground-subtle` | `#98a2b3` | Captions, timestamps, disabled indicators |
| `--foreground-inverse` | `#ffffff` | Text on dark buttons/surfaces |
| `--accent-lime` | `#ccd828` | Headline accent ("Ideas"), vibrant badges |
| `--accent-lime-hover` | `#b8c422` | Lime interactive hover state |
| `--accent-violet` | `#6355de` | Headline accent ("Visuals"), outline button border |
| `--accent-violet-hover` | `#5244cc` | Violet hover state |
| `--accent-wine` | `#8f2342` | Hero badges ("100+ Static Creatives", "30+ Regular Clients") |
| `--accent-wine-muted` | `#fbf0f3` | Wine badge background tint |
| `--swatch-putty` | `#b7b7ab` | Card 1 (warm neutral / print stock) |
| `--swatch-wine` | `#982845` | Card 2 (rich crimson) |
| `--swatch-purple` | `#792686` | Card 3 (regal purple) |
| `--swatch-emerald` | `#23946e` | Card 4 (deep forest / teal green) |
| `--swatch-ocean` | `#2e6997` | Card 5 (classic ocean blue) |
| `--swatch-ochre` | `#7e722c` | Card 6 (golden olive ochre) |
| `--swatch-coral` | `#d05d50` | Card 7 (warm terracotta coral) |
| `--swatch-electric` | `#5c25c8` | Card 8 (electric violet center column) |
| `--border` | `#e4e7ec` | Card borders, dividers |
| `--border-subtle` | `#f0f2f5` | Ghost container borders |
| `--border-accent` | `#6355de` | "Work" pill button border |
| `--ring` | `#6355de` | WCAG-compliant focus ring |
| `--glow-violet` | `rgba(99, 85, 222, 0.08)` | Ambient hero back-glow |
| `--glow-lime` | `rgba(204, 216, 40, 0.06)` | Ambient secondary glow |

### 2.2 Fluid Typography Scale
Derived using responsive `clamp()` formulas for fluid viewport transitions:

| Token | Clamp Value | Approximate Rem Range |
| :--- | :--- | :--- |
| `--font-size-display` | `clamp(2.75rem, 5.5vw + 1rem, 5.25rem)` | ~44px to 84px |
| `--font-size-h1` | `clamp(2.25rem, 4.2vw + 0.8rem, 3.75rem)` | ~36px to 60px |
| `--font-size-h2` | `clamp(1.75rem, 2.8vw + 0.6rem, 2.75rem)` | ~28px to 44px |
| `--font-size-h3` | `clamp(1.375rem, 1.8vw + 0.5rem, 2rem)` | ~22px to 32px |
| `--font-size-h4` | `clamp(1.125rem, 1.2vw + 0.4rem, 1.5rem)` | ~18px to 24px |
| `--font-size-h5` | `clamp(1rem, 0.8vw + 0.4rem, 1.25rem)` | ~16px to 20px |
| `--font-size-h6` | `clamp(0.875rem, 0.5vw + 0.35rem, 1rem)` | ~14px to 16px |
| `--font-size-body-lg` | `clamp(1.125rem, 0.8vw + 0.4rem, 1.25rem)` | ~18px to 20px |
| `--font-size-body` | `1rem` | 16px |
| `--font-size-small` | `0.875rem` | 14px |
| `--font-size-caption` | `0.75rem` | 12px |

### 2.3 Spacing Rhythm & Container Max-Widths
- Base grid: 4px / 8px scale.
- Containers:
  - `--container-sm`: 640px
  - `--container-md`: 768px
  - `--container-lg`: 1024px
  - `--container-xl`: 1200px (standard content max-width)
  - `--container-2xl`: 1360px (wide hero / showcase container)
- Section Vertical Padding:
  - `--section-py-sm`: `3rem` (48px)
  - `--section-py-md`: `5rem` (80px)
  - `--section-py-lg`: `7.5rem` (120px)

### 2.4 Border Radius
- `--radius-xs`: 4px
- `--radius-sm`: 8px
- `--radius-md`: 12px
- `--radius-lg`: 16px
- `--radius-xl`: 20px
- `--radius-2xl`: 24px (used for showcase portfolio cards)
- `--radius-full`: 9999px (used for interactive pill buttons & badges)

### 2.5 Shadows
- `--shadow-subtle`: `0 1px 3px rgba(16, 24, 40, 0.05), 0 1px 2px rgba(16, 24, 40, 0.03)`
- `--shadow-card`: `0 12px 32px -4px rgba(16, 24, 40, 0.08), 0 4px 12px -2px rgba(16, 24, 40, 0.04)`
- `--shadow-card-elevated`: `0 20px 48px -6px rgba(16, 24, 40, 0.12), 0 8px 20px -4px rgba(16, 24, 40, 0.06)`
- `--shadow-pill`: `0 2px 6px rgba(16, 24, 40, 0.06)`

### 2.6 Z-Index Hierarchy
- `--z-negative`: -1 (background glows and blurs)
- `--z-base`: 0 (canvas)
- `--z-elevate`: 1 (cards, badges, annotations)
- `--z-dropdown`: 10
- `--z-sticky`: 20
- `--z-header`: 30 (fixed header / navigation)
- `--z-modal`: 40 (dialogs, drawers)
- `--z-toast`: 50 (notifications, skip-to-content link)

---

## 3. Typography Rules
1. **Archivo (`font-heading`)**:
   - Used for editorial headlines (`h1` through `h4`), display numbers, hero slogans.
   - Weights: Bold (700), ExtraBold (800).
   - Letter spacing: `-0.03em` for display, `-0.015em` for h1/h2.
2. **Manrope (`font-manrope`)**:
   - Modern, geometric, premium font used for Hero1 showcase headline.
   - Weights: Medium (500), SemiBold (600).
   - Letter spacing: `-0.025em` tight tracking, balanced line height.
3. **Inter (`font-body`)**:
   - Used for all subheadings, body text, UI labels, button labels, navigation links, and badges.
   - Weights: Regular (400), Medium (500), SemiBold (600).
   - Letter spacing: `0` (normal) for body, `0.01em` for small caps/caps.

---

## 4. Component Patterns

### Buttons
- **Primary Pill** (`variant="primary"`): Solid dark charcoal background (`bg-surface-dark`), white text (`text-foreground-inverse`), pill radius (`rounded-full`), hover shifts to deeper black (`hover:bg-surface-dark-hover`).
- **Outline Pill** (`variant="outline"`): White background (`bg-background`), 2px violet border (`border-2 border-border-accent`), text dark charcoal, hover shifts to subtle gray (`hover:bg-surface-muted`).
- **Lime Pill** (`variant="lime"`): High-contrast chartreuse lime (`bg-accent-lime`), dark charcoal text.
- **Minimum Touch Target**: 44px on all interactive variants.

### Badges / Annotation Notes
- **Stat Note Badge**: Deep wine text (`text-accent-wine`), soft wine background (`bg-accent-wine-muted/60`), subtle border. Accompanied by custom curved arrows pointing to the stat.
- **Morphic Sticker Pills**: Tactile die-cut floating labels (`rounded-full px-3.5 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-[13px] font-semibold text-white`). Styled with dual inset highlight and drop shadows (`shadow-lg shadow-black/20 shadow-[inset_0_1.5px_1px_rgba(255,255,255,0.5),inset_0_-1.5px_1px_rgba(0,0,0,0.25)]`). Animated with spring physics entering from top and bottom.

### Smart Hide-on-Scroll Navigation
- Fixed header transitions `-88px` (upwards out of frame) when scrolling down, and glides back to `0` when scrolling up. Stays fixed at the top of the page (`scrollY < 40`) and whenever the menu modal is open.

### Reversible Shimmer Button Primitives (`src/components/ui/shimmer-button.tsx`)
- Encapsulates the 3-streak reversible CSS shimmer effect in a reusable UI primitive. Streaks animate across the button face on hover (`group-hover:translate-x-[350%]`) and reverse seamlessly on mouse leave without layout shifts or JavaScript intervals. Supports `orange`, `neutral`, and `dark` variants.

### Interactive Fixed Typography Spotlight (`src/components/ui/typography-spotlight.tsx`)
- Fixed full-screen overlay positioned at `z-0` behind all page text and cards, utilizing CSS `clip-path: inset(... round 28px)` driven by window pointer events and `requestAnimationFrame`. Selectively reveals the transparent typography layer (`small-typography.png`) under the cursor at `35%` opacity in a squircle cutout with rounded corners, while preserving full interactivity on all underlying elements (`pointer-events-none`).

### Sliding Menu Active Indicator (`src/components/layout/navbar1.tsx`)
- Full-screen backdrop-blurred navigation overlay with centered links. Features a sliding accent orange indicator (`layoutId="navbar1-menu-active-indicator"`) powered by Motion springs that smoothly tracks link hover/active states, masked with `mask-[radial-gradient(ellipse_farthest-corner,black_40%,transparent_100%)]` for soft edge feathering.

### Responsive Waterfall / Masonry Card Grid
- Work cards with varying aspect ratios (landscape ~1064x638, portrait ~1064x1300, vertical bill books ~2404x3604, square logos ~1:1) are arranged via CSS columns (`columns-1 sm:columns-2 lg:columns-3 gap-4 sm:gap-5 lg:gap-6 w-full`) with `break-inside-avoid`. The 3-column desktop layout ensures all columns are filled evenly across the full width without leaving blank or unbalanced space on the right. On hover, the image scales up (`scale: 1.08`), while a bottom gradient overlay in `--accent-orange` fades in as the title slides from left and a tactile orange arrow button slides from right.

### Layered Bookshelf Service Cards & Drawer-Style Options
- **Card Architecture**: Designed to match the clean bookshelf album display reference. Features soft rounded corners (`rounded-[30px] sm:rounded-[34px]`), warm canvas background (`bg-[#EAE7E1]`), zero borders, heading on top-left, and a subtle pill badge on top-right. The outer card remains static on hover, while three layered design mockups tucked into the bottom negative space fan out smoothly.
- **3-Column Grid**: Arranged in a balanced 3-column grid (`grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`) with staggered initial `y: 32 -> 0` entrance animation.
- **Drawer-Style Options Modal (90vh)**:
  - Full-width bottom drawer sliding in from bottom (`y: 100% -> 0%`), fixed at 90vh height with internal scrolling.
  - Compact orange gradient header with service title and clean cross icon.
  - Second div with `rounded-t-[20px]` hosting a 3-column options grid: each option displays 5-6 bullet points with tick icons (`IconCheck`).
  - Active option features a top theme gradient bar (`from-accent-orange via-amber-400 to-accent-lime`) inspired by `hero1.tsx`.
  - Refined compact quantity stepper, small price, and balanced small action buttons.

### Editorial Highlighter & Scroll Opacity Paragraph (About Section)
- Cohesive centered paragraph detailing what the designer does (visiting cards, flex banners, billbooks, logos) and the problem solved (generic branding into customer trust). Natural line wrapping with zero awkward text splits.
- Word-level scroll opacity reveal from 0.2 to 1.0.
- Highlighted key phrases swept with orange highlighter backgrounds (`scaleX: 0 -> 1`).
- Tactile, larger `ShimmerButton`-style pills placed cleanly above the text with zero collisions or overlap.

### Kinetic Typography & Marquee Testimonials
- Inspired directly by Reference Image 3: saturated orange background with film grain, giant cream letters ("r", "e", "v", "i", "e", "w") springing in from random directions (top, bottom, left, right) with bouncy spring physics, quotation marks, and `#review` stamps.
- Smooth infinite left-to-right marquee with hover speed deceleration and subtle card tilt on hover (`hover:rotate-1.5`).

### Interactive Gaze-Tracking & Counter-Motion Eyes Footer
- Bold editorial closing layout inspired by Soundar's portfolio: headline with orange highlighted block, side closing lines, and 3 action columns (WhatsApp, Phone, Mail).
- Bottom area features a sunset radial glow with two interactive pill-shaped eyes: white eye capsules dynamically move in the opposite direction of the cursor while black pupils track toward the cursor, coupled with a natural 2.4-second blink.
- Giant full-width "ANMOL SONI" display type banner across the bottom.

---

## 5. Animation Catalogue (`src/animations/`)

| Animation | File | Description & Usage |
| :--- | :--- | :--- |
| `fadeIn` | `variants.ts` | Opacity 0 -> 1. Ideal for backgrounds, glow layers. |
| `fadeUp` | `variants.ts` | Y: 24 -> 0 + Opacity 0 -> 1. Default entrance for titles, buttons, cards. |
| `fadeDown` | `variants.ts` | Y: -20 -> 0 + Opacity 0 -> 1. For headers and banners. |
| `scaleIn` | `variants.ts` | Scale 0.94 -> 1 + Opacity 0 -> 1. For badges and modal dialogs. |
| `slideLeft` / `slideRight` | `variants.ts` | Horizontal slide. For side badges and floating callouts. |
| `headingLineVariant` | `variants.ts` | Y: -30 -> 0 + Opacity 0 -> 1 for headline text entrance. |
| `gradientWordVariant` | `variants.ts` | Y: -30 -> 0 + Rotate 45deg -> 0deg from bottom-left origin for "Ideas" and "Visuals". |
| `wordBlurContainer` & `wordBlurChild` | `variants.ts` | Subtitle text-wise stagger entrance with blur(6px) -> blur(0px). |
| `heroButtonContainer` | `variants.ts` | Y: 35 -> 0 entrance delayed after subheading. |
| `cardEntranceChild` | `variants.ts` | Y: 90 -> 0 entrance with power-out easing. |
| `staggerContainer` | `variants.ts` | Orchestrates child reveals with 0.1s stagger delay. |
| `transitions.default` | `transitions.ts` | 300ms ease-out. |
| `transitions.smooth` | `transitions.ts` | 500ms ease-out for larger layout shifts. |
| `transitions.spring` | `transitions.ts` | Gentle spring for tactile hover and click feedback. |

**Animation Rules**:
- Animate only `transform` and `opacity`.
- Never animate layout properties (`width`, `height`, `margin`, `padding`).
- Global `prefers-reduced-motion` compliance via `MotionConfig reducedMotion="user"` and `features={domMax}` for shared layout projection.
- **Reversible Shimmer Pattern**: Use CSS `before:`/`after:` pseudo-elements with `transition-transform duration-700 ease-out` from `-translate-x-full` to `translate-x-full` on hover; on mouse leave, the CSS transition automatically glides back from right to left smoothly.

---

## 6. Icons & Media Conventions
- **Tabler Icons**: Use `@tabler/icons-react` with specific named imports.
- **Custom SVGs**: Reside in `src/components/icons/` as typed React components (e.g. `ArrowCurveDownRight`, `ArrowCurveDownLeft`).
- **Images**: Located in `src/assets/images/<section-name>/`. Always use `next/image` with explicit dimensions or `fill` + `sizes`.

---

## 7. Do's and Don'ts
- ✅ **DO**: Use token variables via Tailwind utility classes (`bg-surface-dark`, `text-accent-violet`).
- ✅ **DO**: Add any newly required token to `globals.css` first and document it before using it.
- ❌ **DON'T**: Hardcode hex colors (`#6355DE`) or arbitrary pixel values (`w-[342px]`) in components.
- ❌ **DON'T**: Create section-specific components inside `src/components/ui/`.
- ❌ **DON'T**: Duplicate animation definitions inline in components.

