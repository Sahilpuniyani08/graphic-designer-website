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

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
