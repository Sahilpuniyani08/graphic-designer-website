import type { Variants } from "motion/react";
import { durations, easings, transitions } from "./transitions";

/**
 * Basic fade in (opacity only)
 */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: transitions.smooth,
  },
};

/**
 * Fade up animation (opacity + Y translate)
 */
export const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: durations.slow,
      ease: easings.out,
    },
  },
};

/**
 * Fade down animation (opacity + Y translate downwards)
 */
export const fadeDown: Variants = {
  hidden: {
    opacity: 0,
    y: -20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: durations.slow,
      ease: easings.out,
    },
  },
};

/**
 * Subtle scale-in animation (opacity + scale 0.95 -> 1)
 */
export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.94,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: durations.normal,
      ease: easings.out,
    },
  },
};

/**
 * Slide from left (opacity + X translate)
 */
export const slideLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: durations.slow,
      ease: easings.out,
    },
  },
};

/**
 * Slide from right (opacity + X translate)
 */
export const slideRight: Variants = {
  hidden: {
    opacity: 0,
    x: 30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: durations.slow,
      ease: easings.out,
    },
  },
};

/**
 * Stagger container for orchestrating children sequences
 */
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

/**
 * Slow stagger container for larger hero elements
 */
export const staggerSlow: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.16,
      delayChildren: 0.1,
    },
  },
};

/**
 * Hero heading line-by-line entrance variant (y: -30 -> 0)
 */
export const headingLineVariant: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

/**
 * Hero gradient word entrance with rotation from bottom-left origin (45deg -> 0deg)
 */
export const gradientWordVariant: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    rotate: 0,
    transformOrigin: "bottom right",
  },
  visible: {
    opacity: 1,
    y: 0,
    rotate: [0, 5, 0],
    transformOrigin: "bottom right",
    transition: {
      duration: 2,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

/**
 * Subheading container for staggered word/letter reveals with blur
 */
export const wordBlurContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.25,
    },
  },
};

/**
 * Subheading word child revealing with blur removal
 */
export const wordBlurChild: Variants = {
  hidden: {
    opacity: 0,
    y: 12,
    filter: "blur(6px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

/**
 * Hero CTA buttons entrance (y: 35 -> 0, delayed after subheading)
 */
export const heroButtonContainer: Variants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.16, 1, 0.3, 1],
      delay: 0.55,
    },
  },
};

/**
 * Card stagger container for hero portfolio showcase
 */
export const cardDeckStagger: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.4,
    },
  },
};

/**
 * Hero showcase card entrance with power-out easing
 */
export const cardEntranceChild: Variants = {
  hidden: {
    opacity: 0,
    y: 90,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};


