# Component Registry

This document catalogues all UI and Section components in the codebase.
Update this registry whenever a component is added, updated, or promoted.

---

## 1. Common Components (`src/components/ui/` & `src/components/layout/`)

### `Navbar`
- **Path**: `src/components/layout/navbar.tsx`
- **Purpose**: Full-width top navigation bar that enters from the top (`y: -48 -> 0`), containing the animated brand logo with staggered red blur entrance and blue hover roll, the boxy dual-icon card view switcher with smooth sliding indicator pill, and the boxy menu toggle. Features smart scroll hide/reveal behavior (slides up offscreen `-88px` when scrolling down, smoothly glides back into view when scrolling up, and remains persistent near the top of the page or while the mobile menu is open).
- **Props**: None.
- **Used In**: `src/app/page.tsx` (alternate version).

### `Navbar1`
- **Path**: `src/components/layout/navbar1.tsx`
- **Purpose**: Minimal centered agency navigation bar. Features `BrandLogo1` placed in the center, and a tactile orange shimmer settings/menu toggle button on the right with a rounded-full pill design matching `ShimmerButton` (`border-white/80 ring-2 ring-white/30 shadow-md`) and 3-streak reversible CSS shimmer. Clicking opens a full-screen backdrop-blurred overlay (`backdrop-blur-2xl`) with centered clean navigation links ("Home", "About", "Services", "Collections", "Reviews", "Contact") without subheadings, featuring a sliding orange indicator pill powered by Motion `layoutId` and right navigation arrows. Locks both `document.body` and `document.documentElement` scroll while open.
- **Props**: None.
- **Used In**: `src/app/page.tsx`.

### `BrandLogo1`
- **Path**: `src/components/layout/brand-logo1.tsx`
- **Purpose**: Interactive brand title ("The Design Vault"). On mount, text starts in accent blue (`var(--accent-blue)`) and staggers letter-by-letter from left to right into dark text (`var(--foreground)`). Dot indicator starts blue and animates in with spring physics. On hover, the dot turns black (`var(--foreground)`) while the text turns to blue with an upward letter-roll effect.
- **Props**: None.
- **Used In**: `src/components/layout/navbar1.tsx`.

### `MobileMenu`
- **Path**: `src/components/layout/mobile-menu.tsx`
- **Purpose**: Compact 200px top-right floating box menu matching the hero card aesthetic (`from-stone-50 to-white`, `border-black/8`, `shadow-card-elevated`) with blurred backdrop. Contains navigation links with interactive hover tracking where text and arrow slide towards each other, and springy exit towards top-right.
- **Props**:
  - `isOpen: boolean`
  - `onClose: () => void`
- **Used In**: `src/components/layout/navbar.tsx`.

### `Container`
- **Path**: `src/components/ui/container.tsx`
- **Purpose**: Restricts maximum content width and applies consistent horizontal screen gutters.
- **Props**:
  - `as?: ElementType` (default: `"div"`)
  - `size?: "sm" | "md" | "lg" | "xl" | "2xl" | "full"` (default: `"xl"`)
  - `className?: string`
  - `children: React.ReactNode`
- **Used In**: Layouts, sections, error pages.

### `Section`
- **Path**: `src/components/ui/section.tsx`
- **Purpose**: Structural wrapper for landing page sections with standard vertical padding tokens and overflow safeguards.
- **Props**:
  - `as?: ElementType` (default: `"section"`)
  - `padding?: "none" | "sm" | "md" | "lg"` (default: `"md"`)
  - `className?: string`
  - `children: React.ReactNode`
- **Used In**: Section containers across all landing page areas.

### `Heading`
- **Path**: `src/components/ui/heading.tsx`
- **Purpose**: Semantic and fluid typography heading primitive using the Archivo font token.
- **Props**:
  - `as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"` (default: derived from size or `"h2"`)
  - `size?: "display" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6"`
  - `className?: string`
  - `children: React.ReactNode`
- **Used In**: Hero headings, section titles, card headers.

### `Text`
- **Path**: `src/components/ui/text.tsx`
- **Purpose**: Body, subtitle, and caption typography primitive using the Inter font token.
- **Props**:
  - `as?: "p" | "span" | "div"` (default: `"p"`)
  - `variant?: "body" | "body-lg" | "muted" | "small" | "caption"` (default: `"body"`)
  - `className?: string`
  - `children: React.ReactNode`
- **Used In**: Subheadings, paragraphs, footnotes, metadata.

### `Button`
- **Path**: `src/components/ui/button.tsx`
- **Purpose**: Interactive pill button supporting both button and anchor (Next.js Link) behavior with WCAG 44px min touch targets.
- **Props**:
  - `variant?: "primary" | "outline" | "ghost" | "lime"` (default: `"primary"`)
  - `size?: "sm" | "md" | "lg"` (default: `"md"`)
  - `href?: string` (renders Next `<Link>` if provided)
  - `className?: string`
  - Standard HTML button / anchor attributes
- **Used In**: Call-to-actions, navigation menus, form submissions.

### `QuantitySelector`
- **Path**: `src/components/ui/quantity-selector.tsx`
- **Purpose**: Tactile increment/decrement counter primitive complying with WCAG 44px min touch target. Supports min/max limits, step intervals, custom unit labels, and disabled boundary states.
- **Props**:
  - `value: number`
  - `min?: number` (default: 1)
  - `max?: number` (default: 10000)
  - `step?: number` (default: 1)
  - `unitLabel?: string`
  - `onChange: (newValue: number) => void`
  - `className?: string`
  - `size?: "sm" | "md" | "lg"` (default: `"md"`)
- **Used In**: `src/components/sections/services/_blocks/service-detail-modal.tsx`.

### `InteractiveEyes`
- **Path**: `src/components/ui/interactive-eyes.tsx`
- **Purpose**: Standalone interactive eyes primitive. Tracks global mouse movement: dark pupils track towards the cursor while outer white pill capsules counter-move in the opposite direction angle for enhanced parallax depth. Includes periodic lifelike eye blink keyframes (`scaleY: [1, 1, 0.08, 1, 1]`) and `useReducedMotion` compliance.
- **Props**:
  - `size?: "sm" | "md" | "lg"` (default: `"md"`)
  - `className?: string`
  - `maxPupilDistance?: number` (default: 7)
  - `counterMotionFactor?: number` (default: 0.65)
- **Used In**: `src/components/sections/footer/_blocks/footer-eyes.tsx`, and reusable across any other sections or pages.


### `PortfolioCard`
- **Path**: `src/components/ui/portfolio-card.tsx`
- **Purpose**: Tactile masonry portfolio card primitive inspired by physical stacked photo references. Features an outer `p-1 sm:p-1.5` white frame (`bg-white rounded-2xl ring-1 ring-black/10 shadow-[0_8px_26px_rgba(0,0,0,0.08)]`) with natural aspect ratio driven directly by image dimensions (`StaticImageData` / `width` & `height`). Inside, the media container (`rounded-xl overflow-hidden bg-[#F4F3F1]`) keeps the wrapper static while only the inner image scales up on hover (`scale: 1.08`). A gradual bottom gradient in `--accent-orange` fades in on hover, accompanied by the project title sliding in from the left (`x: -10 -> 0`) and an orange button-themed circle arrow button sliding in from the right (`x: 10 -> 0`) that directs to `#services`.
- **Props**:
  - `project: WorkProject`
  - `className?: string`
  - `onClick?: () => void`
  - `onBoxClick?: (e: React.MouseEvent) => void`
- **Used In**: `src/components/sections/work/_blocks/work-grid.tsx`.

### `WorkModal`
- **Path**: `src/components/sections/work/_blocks/work-modal.tsx`
- **Purpose**: Full-screen modal dialog matching the overall design language of the website. Uses fluid, jitter-free scale & fade transitions (`opacity: 0 -> 1, scale: 0.94 -> 1, y: 16 -> 0`). Features a warm off-white container (`bg-background rounded-3xl p-2.5 sm:p-3.5 border border-black/10 shadow-2xl`), subtle blurred backdrop (`backdrop-blur-md`), ambient multi-color radial aura with subtle 24px grid texture, top-right zoom and close controls, interactive zoom toggle, project category badge, title, and a theme-matched `ShimmerButton` linking to `#services`.
- **Props**:
  - `project: WorkProject | null`
  - `onClose: () => void`
- **Used In**: `src/components/sections/work/_blocks/work-grid.tsx`.

### `HoneyEmberBackground`
- **Path**: `src/components/ui/honey-ember-background.tsx`
- **Purpose**: Ambient atmospheric background mesh component with multi-stop radial glows and subtle dot matrix texture. Supports `variant="theme"` (using design tokens `--background`, `--accent-lime`, `--accent-lime-hover`, `--swatch-coral`, `--accent-red`) and `variant="honey"` (warm golden ember tones).
- **Props**:
  - `variant?: "theme" | "honey"`
  - Standard HTML div container props & ref
- **Used In**: UI background surfaces.

### `Badge`
- **Path**: `src/components/ui/badge.tsx`
- **Purpose**: Stat indicator, tag, or annotation pill.
- **Props**:
  - `variant?: "wine" | "lime" | "violet" | "subtle"` (default: `"subtle"`)
  - `className?: string`
  - `children: React.ReactNode`
- **Used In**: Stat notes, service tags ("Visiting Cards", "Bill Books").

### `GradualBlur`
- **Path**: `src/components/ui/gradual-blur.tsx`
- **Purpose**: Multi-layer progressive backdrop blur gradient positioned at the bottom of the viewport for seamless scroll fade-out.
- **Props**:
  - `className?: string`
  - `height?: string` (default: `"h-24"`)
- **Used In**: `src/app/layout.tsx`.

---

## 2. Icon Components (`src/components/icons/`)

### `ArrowCurveDownRight` & `ArrowCurveDownLeft`
- **Path**: `src/components/icons/curved-arrows.tsx`
- **Purpose**: Hand-drawn style decorative SVG curved arrows that point from badges and stats to hero items.
- **Props**: Standard `SVGProps<SVGSVGElement>` (`className`, `width`, `height`, etc.).
- **Used In**: Hero stat annotations.

---

## 3. SEO & Provider Components

### `JsonLd`
- **Path**: `src/components/seo/json-ld.tsx`
- **Purpose**: Emits JSON-LD schema (LocalBusiness / Organization and WebSite).
- **Props**: `type?: "Organization" | "LocalBusiness"`.
- **Used In**: `src/app/layout.tsx`.

### `SmoothScrollProvider`
- **Path**: `src/components/providers/smooth-scroll-provider.tsx`
- **Purpose**: Mounts Lenis smooth scrolling with reduced-motion safety.
- **Props**: `children: React.ReactNode`.
- **Used In**: `src/app/layout.tsx`.

### `MotionProvider`
- **Path**: `src/components/providers/motion-provider.tsx`
- **Purpose**: Mounts LazyMotion features (`domAnimation`) with `MotionConfig reducedMotion="user"`.
- **Props**: `children: React.ReactNode`.
- **Used In**: `src/app/layout.tsx`.

---

## 4. Sections (`src/components/sections/`)

### `Hero`
- **Path**: `src/components/sections/hero/hero.tsx`
- **Purpose**: Main landing hero entry point composing headlines, annotations, CTA buttons, and interactive card showcase.
- **Props**: None.
- **Used In**: `src/app/page.tsx` (alternate version).

#### Hero Private Blocks (`src/components/sections/hero/_blocks/`)
- **`HeroHeading`** (`hero-heading.tsx`): Displays the animated multi-line display title with gradient rotating text for "Ideas" and "Visuals".
- **`HeroSubheading`** (`hero-subheading.tsx`): Renders the subtitle with text-by-text staggered blur-in effect.
- **`HeroBadges`** (`hero-badges.tsx`): Hand-drawn curved arrow annotation badges ("100+ Static Creatives", "30+ Regular Clients", "Visiting Cards Designs", "Bill Books Designs").
- **`HeroCta`** (`hero-cta.tsx`): Neumorphic action buttons ("Work" outline and "View Collections" dark gradient) with left-to-right wipe animations and tap squash physics.
- **`HeroShowcaseCards`** (`hero-showcase-cards.tsx`): 5 showcase cards (fixed 280px × 400px) with custom manual positions (scattered fan-deck & aligned arch), smooth mobile scale wrapper preserving desktop coordinates, image support, fallback gradients, and hover animation that lowers the inner visual to reveal the project title in the top inside space.

### `Hero1`
- **Path**: `src/components/sections/hero/hero1.tsx`
- **Purpose**: Redesigned modern agency showcase hero built to fit 100% within a single screen (`100dvh` / zero scroll on any device including mobile). Features absolute-positioned top heading, floating badges decoupled from cards, cards stage centered in the viewport, and subheading/CTA positioned directly below the cards stage (`top-[63%] sm:top-[65%] md:top-[66%]`), rather than stuck against the screen bottom.
- **Props**: None.
- **Used In**: `src/app/page.tsx`.

#### Hero1 Private Blocks (`src/components/sections/hero/_blocks1/`)
- **`Hero1Heading`** (`hero1-heading.tsx`): 2-line centered headline ("Turning Ideas / Into Visuals") using Manrope with larger editorial scale (`text-4xl sm:text-5xl md:text-6xl lg:text-[70px]`), featuring an entrance with scale/opacity and a progressive letter-by-letter unblur wave (`blur(6px) -> blur(0px)`) transitioning each character from muted tone to solid `text-foreground`.
- **`Hero1Badges`** (`hero1-badges.tsx`): 4 scattered stat and service badges ("100+ Static Creatives", "30+ Regular Clients", "Visiting Cards Designs", "Bill Books Designs") decoupled from the cards stage and positioned directly on the hero canvas (`top-[28%]`, `bottom-[28%]`). Features responsive scaling and 3 pure CSS reversible shimmer streaks.
- **`Hero1Cards`** (`hero1-cards.tsx`): 5 landscape visiting cards (1.67:1 aspect ratio) fanned out symmetrically (`multipliers: [-2, -1, 0, 1, 2]`) with broad spacing (`155px` desktop, `50px` mobile) so cards remain prominently visible without heavy overlap. Features responsive dimensions (`w-[155px] h-[93px]` mobile up to `w-[310px] h-[186px]` desktop), white bezel borders, and interactive tag pills emerging on hover.
- **`Hero1Cta`** (`hero1-cta.tsx`): Subheading ("Create your identity digitally accessible") and dual tactile buttons positioned absolute relative to hero content directly below cards (`top-[63%] sm:top-[65%] md:top-[66%]`). Features pure CSS reversible shimmer streaks with zero initial bleed.

### `ShimmerButton`
- **Path**: `src/components/ui/shimmer-button.tsx`
- **Purpose**: Generic, accessible interactive button and link component with pure CSS 3-streak reversible shimmer animation. Features 3 distinct variants (`orange` gradient, `neutral` grey, `dark` charcoal) and 3 responsive sizing options (`sm`, `md`, `lg`), supporting tactile scale transitions (`hover:scale-[1.02] active:scale-[0.98]`) and WCAG-compliant focus rings.
- **Props**: `variant` ("orange" | "neutral" | "dark"), `size` ("sm" | "md" | "lg"), `href` (optional Next.js Link target), `className`, `children`, `ref`.
- **Used In**: `hero1-cta.tsx`, `about-cta.tsx`.

### `TypographySpotlight`
- **Path**: `src/components/ui/typography-spotlight.tsx`
- **Purpose**: Fixed ambient application overlay positioned at `z-0` (behind all page text and cards) that tracks pointer movement and reveals a subtle rounded squircle spotlight (`clipPath: inset(... round 28px)`) without sharp 90-degree edges, showcasing the transparent typography artwork (`small-typography.png`) at `opacity: 0.35`. Driven by `requestAnimationFrame` for 120 FPS performance with zero React re-renders.
- **Props**: `size` (default 200px), `cornerRadius` / `radius` (default 28px), `opacity` (default 0.35).
- **Used In**: `src/app/layout.tsx`.

### `About`
- **Path**: `src/components/sections/about/about.tsx`
- **Purpose**: Pinned-scroll narrative section echoing the `Hero1` design language. Features a fixed stage (`sticky top-0 h-[100dvh]`) over a `220vh` canvas with an animated pulsing central gradient (`width` and `opacity` oscillation) and 3 orchestrated characters: a lying character resting on top of the text with elastic drop-in, a right-center peeking character pointing towards the text, and a bottom-left thoughtful character with shorter height.
- **Props**: None.
- **Used In**: `src/app/page.tsx`.

#### About Private Blocks (`src/components/sections/about/_blocks/`)
- **`AboutStatement`** (`about-statement.tsx`): Concise, high-impact editorial statement detailing who the designer is (Anmol Soni), core deliverables (visiting cards, flex banners, brand identities), and the problem solved (everyday collateral into real customer trust). Features natural line wrapping, word-by-word scroll opacity reveal, orange highlighter sweeps on key phrases, and two `ShimmerButton`-style floating pills positioned cleanly above the text with zero collisions.
- **`AboutCharacters`** (`about-character.tsx`): Displays the bottom-left thoughtful character (`character.png`), right-center peeking character (`character-peaking.webp`), and the top lying character with elastic drop-in.
- **`AboutCta`** (`about-cta.tsx`): Centered "View Collections" CTA button powered by `ShimmerButton`, decoupled from scroll with a clean view entrance from bottom `y`.

### `Work`
- **Path**: `src/components/sections/work/work.tsx`
- **Purpose**: Showcase section bounded to `max-w-5xl`, featuring 5 core services categories (Visiting Cards [Simple], Visiting Cards [UV], Flex Designs, Bill Books, Logo Design) positioned below the heading and subheading, with a left-aligned, compact masked pill track (`max-w-[40%]`) and centered 3-card grid.
- **Props**: None.
- **Used In**: `src/app/page.tsx`.

#### Work Private Blocks (`src/components/sections/work/_blocks/`)
- **`WorkHeading`** (`work-heading.tsx`): Compact, thoughtful display title ("Curated Thoughts of Mind") with clean, non-blurred staggered entrance, gradient accent on "Mind", and supporting subheading.
- **`WorkTabs`** (`work-tabs.tsx`): Category tabs track featuring mouse drag-to-scroll support (`cursor-grab` to `cursor-grabbing`), horizontal mousewheel scroll, staggered entrance animation, whileTap squash feedback, active state indicator with inset highlight, and 3-streak reversible CSS shimmer.
- **`WorkGrid`** (`work-grid.tsx`): Responsive 3-column masonry grid (`columns-1 sm:columns-2 lg:columns-3 gap-4 sm:gap-5 lg:gap-6 w-full`) without empty trailing column space on the right, powered by dynamic `PortfolioCard` components and the theme-matched `WorkModal`.
- **`WorkAmbientGlow`** (`work-ambient-glow.tsx`): Revolving planet conic gradient blob (`conic-gradient` using red, orange/coral, lime, and yellow; no blue) positioned at `-top-32 left-1/2 -inset-y-30` with subtle blur (`blur-2xl sm:blur-3xl`), low opacity (`0.32`), and film grain overlay (`grain.png`), fading in on mount and rotating smoothly on every tab click.

### `Services`
- **Path**: `src/components/sections/services/services.tsx`
- **Purpose**: Minimal, tactile Services section inspired directly by the layered bookshelf album reference design. Features 6 graphic design services (Visiting Cards, Flex & Banners, Posters & Flyers, Menu Cards, Billbooks & Invoices, Brand & Logo Kits) arranged in a 3-column grid.
- **Props**: None.
- **Used In**: `src/app/page.tsx`.

#### Services Private Blocks (`src/components/sections/services/_blocks/`)
- **`ServicesHeading`** (`services-heading.tsx`): Section title ("Design & Print Services.") matching the exact typography, word-by-word staggered entrance, and subtitle styling of `WorkHeading`.
- **`ServicesGrid`** (`services-grid.tsx`): 3-column responsive card grid (`columns-1 sm:columns-2 lg:columns-3`) with staggered card entrance and interactive modal management.
- **`ServiceCard`** (`service-card.tsx`): Minimal bookshelf card directly matching the reference image. Features a borderless soft warm surface (`bg-[#EAE7E1]`, `rounded-[30px] sm:rounded-[34px]`), heading on the top-left, subtle category pill on the top-right, static outer container (no outer card hover lift/scale), and 3 overlapping design mockups tucked into the bottom negative space (left tilted `-7deg`, right tilted `+7deg`, center upright with white bezel frame). Hover smoothly fans out the inner mockups.
- **`ServiceDetailModal`** (`service-detail-modal.tsx`): Compact bottom drawer dialog (reduced height on desktop: `max-h-[72vh] md:max-h-[70vh]`) rendered via `createPortal`. Features a compact orange top header with service title and clean cross icon, followed by a `rounded-t-[20px]` inner container holding options in a Grid of 3. Each option features 5 to 6 specific single-line bullet points without label prefixes and with increased vertical separation (`space-y-3.5 sm:space-y-4`). Active options feature a masked linear gradient glow (`from-accent-orange/25 via-accent-lime/10 to-transparent mask-radial`) matching `hero1.tsx`. Restores pricing, quantity stepper, dynamic total calculation, WhatsApp inquiry with specs, and direct call button with universal Lenis-safe background scroll locking (`useLockBodyScroll` + `data-lenis-prevent`).

### `Testimonials`
- **Path**: `src/components/sections/testimonials/testimonials.tsx`
- **Purpose**: High-energy client reviews and social proof section inspired by Reference Image 3.
- **Props**: None.
- **Used In**: `src/app/page.tsx`.

#### Testimonials Private Blocks (`src/components/sections/testimonials/_blocks/`)
- **`TestimonialsFlipper`** (`testimonials-flipper.tsx`): Stable vertical review flipper cycling every 2.8 seconds. Features smooth directional transition where previous card slides to top while new card enters from bottom, zero hover jitter, interactive arrow and dot controls, and pause-on-hover.

### `Footer`
- **Path**: `src/components/sections/footer/footer.tsx`
- **Purpose**: Minimal, high-impact concluding section inspired by Soundar's portfolio layout. Features a bold headline ("You've seen the work. Now the awkward part.") with word-by-word bottom Y entrance and left-to-right highlighter sweep on "awkward part.", 3 staggered action columns (WhatsApp, Phone, Mail) emerging from bottom Y, interactive dual eyes nestled within a sunset radial glow, smooth opacity fade-in on the bottom glow, and a giant "THE DESIGN VAULT" display type banner across the bottom spanning ~80% width with vertical stretch and overlay blend mode without clipping on top, left, or right.
- **Props**: None.
- **Used In**: `src/app/page.tsx`.

#### Footer Private Blocks (`src/components/sections/footer/_blocks/`)
- **`FooterEyes`** (`footer-eyes.tsx`): Integrates the generic `InteractiveEyes` UI primitive with a sunset radial glow (`from-accent-orange/90 via-accent-lime/25 to-transparent`) featuring smooth viewport opacity fade-in.

