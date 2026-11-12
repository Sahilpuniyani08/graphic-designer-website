"use client";

import { m } from "motion/react";
import { headingLineVariant, gradientWordVariant } from "@/animations/variants";

export function HeroHeading() {
  return (
    <h1 className="relative flex flex-col items-center justify-center  font-manrope  text-(length:--font-size-display) md:text-(length:--font-size-h1) tracking-(--letter-spacing-normal) text-foreground text-center leading-[1.4] select-none">
      {/* Line 1: Turning Ideas */}
      <span className="flex flex-wrap items-center justify-center gap-x-3 sm:gap-x-5 overflow-visible">
        <m.span
          variants={headingLineVariant}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.05 }}
          className="inline-block text-foreground drop-shadow-[0_2px_4px_rgba(0,0,0,0.06)]"
        >
          Turning
        </m.span>

        <m.span
          variants={gradientWordVariant}

          initial="hidden"
          animate="visible"
          className="inline-block bg-linear-to-br from-accent-lime-hover to-accent-lime bg-clip-text text-transparent drop-shadow-[0_3px_8px_rgba(204,216,40,0.25)] font-extrabold"
        >
          Ideas
        </m.span>
      </span>

      {/* Line 2: Into Visuals */}
      <span className="flex flex-wrap items-center justify-center gap-x-3 sm:gap-x-5 overflow-visible">
        <m.span
          variants={headingLineVariant}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.12 }}
          className="inline-block text-foreground drop-shadow-[0_2px_4px_rgba(0,0,0,0.06)]"
        >
          Into
        </m.span>

        <m.span
          variants={gradientWordVariant}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.18 }}
          className="inline-block bg-linear-to-br   from-accent-blue via-accent-blue to-accent-blue bg-clip-text text-transparent drop-shadow-[0_3px_12px_rgba(99,85,222,0.3)] font-extrabold"
        >
          Visuals
        </m.span>


      </span>
    </h1>
  );
}

