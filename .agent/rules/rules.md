# Agent Coding & Architecture Rules

This rulebook is mandatory for all AI agents working on this codebase.

## 1. Documentation First
- **Before creating or editing ANY component or section**, read `docs/DESIGN_SYSTEM.md` and `docs/COMPONENTS.md`.
- After finishing or modifying any section or component, **update `docs/DESIGN_SYSTEM.md` and `docs/COMPONENTS.md`**.

## 2. Token Discipline (Strict)
- **Never hardcode hex/rgb colors, pixel sizes, or arbitrary values** (e.g. `text-[17px]`, `bg-[#123456]`).
- Every visual value must come from `src/app/globals.css` `:root` tokens exposed via Tailwind v4 `@theme inline`.
- If a genuinely new token is needed, add it to `globals.css` first, then document it in `docs/DESIGN_SYSTEM.md`.

## 3. Component Architecture & Placement
- **`src/components/ui/`**: Common, highly reusable primitives only (`button`, `container`, `section`, `heading`, `text`, `badge`). No section-specific code belongs here.
- **`src/components/sections/<section-name>/`**: Every section has its own directory.
  - `<section-name>.tsx` is the single entry point imported by `src/app/page.tsx`.
  - `_blocks/` holds components used ONLY by this section (e.g. `hero-heading.tsx`, `hero-cta.tsx`).
- **Promotion Rule**: If a block is needed by a second section, promote it to `src/components/ui/`, update imports, and update `docs/COMPONENTS.md`. Never duplicate code between sections.
- Blocks must build upon `ui/` primitives, not re-implement them.

## 4. Animation Integrity
- All reusable animations must live in `src/animations/` (`variants.ts`, `transitions.ts`, `viewport.ts`).
- Never define ad-hoc inline animation objects repeated across files.
- Animate only `transform` and `opacity`. Never animate layout dimensions (`width`, `height`, `padding`, `margin`).
- Global `prefers-reduced-motion` compliance is required.

## 5. Performance & Quality Standard (Lighthouse 100)
- Server Components by default. Add `"use client"` only to the smallest leaf needing interactivity.
- Use `next/image` with explicit dimensions or `fill` + `sizes`.
- Use Tabler Icons via named imports for tree-shaking. Custom SVGs live in `src/components/icons/`.
- Zero CLS. Maintain accessible contrast and 44px minimum touch targets.

## 6. Uncertainty
- If anything in a reference image is ambiguous, unclear, or missing, **ask the user instead of guessing or inventing**.

## 7. Pattern Consistency
- **Reused Elements**: Buttons, links, navigation, and other recurring UI elements should be consistent across the site. Use `src/components/ui/` for base components and ensure variants follow the same design language.
- **Typography**: Maintain consistent heading sizes, weights, and spacing as defined in `docs/DESIGN_SYSTEM.md`.
- **Spacing & Layout**: Use consistent spacing units (e.g., rems or Tailwind spacing tokens) and maintain a clear visual hierarchy.

## 8. Dark Mode Compliance
- **Color Palette**: Ensure all colors used are compatible with dark mode, referencing the `--dark-` tokens in `globals.css` where appropriate.
- **Visual Feedback**: Check that hover states, active states, and focus rings are clearly visible in both light and dark modes.x