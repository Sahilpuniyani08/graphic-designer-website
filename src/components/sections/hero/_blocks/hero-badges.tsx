"use client";

import { m } from "motion/react";
import { ArrowCurveDownRight, ArrowCurveDownLeft } from "@/components/icons";

export function HeroBadges() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 top-0 h-full w-full max-w-8xl mx-auto hidden lg:block"
    >
      {/* Top Left: 100+ Static Creatives (beside Work button) */}
      <m.div
        initial={{ opacity: 0, x: -16, y: -6 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 0.6, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        className="absolute left-8 lg:left-44  top-10 lg:top-60 flex items-start gap-1.5"
      >
        {/* <ArrowCurveDownRight className=" relative -top-10 text-foreground-muted w-2 h-5 mt-0.5 opacity-80 " /> */}
        <div className="flex flex-col text-left">
          <span className="font-heading text-md  md:text-lg  font-bold text-accent-red">
            100+
          </span>
          <span className="text-xs font-medium text-foreground-muted">
            Static Creatives
          </span>
        </div>
      </m.div>

      {/* Top Right: 30+ Regular Clients (beside View Collections button) */}
      <m.div
        initial={{ opacity: 0, x: 16, y: -6 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 0.65, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        className="absolute right-8 lg:right-44  top-10 lg:top-60 flex items-start gap-1.5"
      >
        <div className="flex flex-col text-right">
          <span className="font-heading text-md md:text-lg font-bold text-accent-red">
            30+
          </span>
          <span className="text-xs font-medium text-foreground-muted">
            Regular Clients
          </span>
        </div>
        {/* <ArrowCurveDownLeft className="text-foreground-muted w-6 h-5 mt-0.5 opacity-80 hidden md:block" /> */}
      </m.div>

      {/* Mid Left: Visiting Cards Designs (floating lower left above card) */}
      <m.div
        initial={{ opacity: 0, x: -20, y: 8 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 0.7, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        className="absolute left-2 lg:left-10 top-110 lg:top-83.75 flex items-start gap-1.5"
      >
        {/* <ArrowCurveDownRight className="text-foreground-muted w-6 h-5 mt-0.5 opacity-80" /> */}
        <div className="flex flex-col text-left">
          <span className="font-heading text-md md:text-lg font-bold text-accent-red">
            Visiting Cards
          </span>
          <span className="text-xs font-medium text-foreground-muted">
            Designs
          </span>
        </div>
      </m.div>

      {/* Mid Right: Bill Books Designs (floating lower right above card) */}
      <m.div
        initial={{ opacity: 0, x: 20, y: 8 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 0.75, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        className="absolute right-2 lg:right-10 top-110 lg:top-83.75 flex items-start gap-1.5"
      >
        <div className="flex flex-col text-right">
          <span className="font-heading text-md md:text-lg font-bold text-accent-red">
            Bill Books
          </span>
          <span className="text-xs font-medium text-foreground-muted">
            Designs
          </span>
        </div>
        {/* <ArrowCurveDownLeft className="text-foreground-muted w-6 h-5 mt-0.5 opacity-80" /> */}
      </m.div>
    </div>
  );
}
