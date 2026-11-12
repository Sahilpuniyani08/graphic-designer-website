"use client";

import { m } from "motion/react";
import Link from "next/link";
import { heroButtonContainer } from "@/animations/variants";

export function HeroCta() {
  return (
    <m.div
      variants={heroButtonContainer}
      initial="hidden"
      animate="visible"
      className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-5"
    >
      {/* Secondary Button: Work (Left in reference) - Tilts to left on hover */}
      <m.div
        whileHover={{ rotate: -3 }}
        whileTap={{ scaleY: 0.9, scaleX: 1.08 }}
        transition={{ duration: 0.15 }}
      >
        <Link
          href="#work"
          className="group relative inline-flex min-h-[46px] sm:min-h-[48px] items-center justify-center overflow-hidden rounded-full border-2 border-accent-red/50 bg-background px-8 sm:px-10 py-2.5 text-sm sm:text-base font-semibold text-foreground shadow-[0_4px_14px_-2px_rgba(99,85,222,0.18),inset_0_1px_2px_rgba(255,255,255,0.9)] transition-colors duration-normal hover:bg-accent-lime/20 hover:text-accent-red focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          {/* Light Shine Wipe Effect */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-accent-red/15 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full"
          />
          <span className="relative z-10">Work</span>
        </Link>
      </m.div>

      {/* Primary Button: View Collections (Right in reference) - Tilts slightly on hover */}
      <m.div
        whileHover={{ rotate: 2.5 }}
        whileTap={{ scaleY: 0.9, scaleX: 1.08 }}
        transition={{ duration: 0.15 }}
      >
        <Link
          href="#collections"
          className="group relative inline-flex min-h-[46px] sm:min-h-[48px] items-center justify-center overflow-hidden rounded-full border border-white/10 bg-linear-to-b from-[#3a393e] to-[#222125] px-8 sm:px-10 py-2.5 text-sm sm:text-base font-semibold text-white shadow-[0_8px_22px_-4px_rgba(0,0,0,0.35),inset_0_1px_1px_rgba(255,255,255,0.22),inset_0_-2px_4px_rgba(0,0,0,0.45)] transition-all duration-normal hover:from-[#01207f] hover:to-[#0035D4] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          {/* Light Shine Wipe Effect */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-accent-blue/50 to-transparent transition-transform duration-800 ease-out group-hover:translate-x-full"
          />
          <span className="relative z-10">View Collections</span>
        </Link>
      </m.div>
    </m.div>
  );
}
