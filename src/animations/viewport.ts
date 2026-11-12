/**
 * Shared viewport settings for Motion's whileInView triggers.
 * Ensures consistent trigger offsets, once-only triggers to prevent scroll jitter,
 * and high performance.
 */
export const viewportSettings = {
  /**
   * Default setting: triggers once when 20% into view.
   */
  default: {
    once: true,
    amount: 0.2,
  },

  /**
   * Early trigger: starts entering as soon as top edge touches viewport.
   */
  early: {
    once: true,
    amount: 0.05,
  },

  /**
   * Center trigger: triggers when element is nearly centered.
   */
  center: {
    once: true,
    amount: 0.5,
  },
} as const;

