import type { Transition } from "motion/react";

/**
 * Standard durations in seconds
 */
export const durations = {
  fast: 0.15,
  normal: 0.3,
  slow: 0.5,
  slower: 0.8,
  cardFan: 0.9,
} as const;

/**
 * Standard cubic-bezier and spring easings
 */
export const easings = {
  standard: [0.2, 0, 0, 1] as const,
  out: [0.16, 1, 0.3, 1] as const,
  inOut: [0.65, 0, 0.35, 1] as const,
  springGentle: {
    type: "spring",
    stiffness: 100,
    damping: 20,
    mass: 1,
  } as const,
  springBouncy: {
    type: "spring",
    stiffness: 260,
    damping: 18,
    mass: 0.8,
  } as const,
};

/**
 * Reusable transitions
 */
export const transitions = {
  default: {
    duration: durations.normal,
    ease: easings.out,
  } satisfies Transition,

  smooth: {
    duration: durations.slow,
    ease: easings.out,
  } satisfies Transition,

  gentle: {
    duration: durations.slower,
    ease: easings.standard,
  } satisfies Transition,

  spring: easings.springGentle satisfies Transition,

  bouncy: easings.springBouncy satisfies Transition,
};

