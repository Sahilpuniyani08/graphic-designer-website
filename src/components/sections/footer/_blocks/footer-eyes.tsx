"use client";

import { m, useReducedMotion } from "motion/react";
import { InteractiveEyes } from "@/components/ui";

export function FooterEyes() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      className="relative flex flex-col items-center justify-center select-none py-8 sm:py-10 w-fit mx-auto"
      aria-hidden="true"
    >
      {/* 
        Soft Sunset Radial Glow:
        Smooth fade in from opacity 0 to 1 when entering view
      */}
      <m.div
        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.85 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] sm:w-[360px] h-[240px] sm:h-[360px] rounded-full bg-gradient-to-b from-accent-orange/90 via-accent-lime/25 to-transparent blur-md pointer-events-none"
      />

      {/* Reusable Interactive Eyes Primitive */}
      <div className="relative z-10">
        <InteractiveEyes size="md" />
      </div>
    </div>
  );
}
