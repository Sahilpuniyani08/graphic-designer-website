"use client";

import { m } from "motion/react";
import { ShimmerButton } from "@/components/ui/shimmer-button";

interface Hero1CtaProps {
  description?: string;
}

export function Hero1Cta({
  description = "Boring Designs? Not Anymore.Welcome to the World of Premium Designs.",
}: Hero1CtaProps) {
  const letters = Array.from(description);

  return (
    <div className="flex flex-col items-center justify-center text-center max-w-lg mx-auto px-4 mt-30 z-10">
      {/* Subheading: Letter by letter entrance from bottom with opacity */}
      <p
        aria-label={description}
        className="font-body text-xs sm:text-[13px] md:text-sm text-foreground/90 leading-relaxed tracking-normal select-none"
      >
        {letters.map((char, index) => {
          const isSpace = char === " ";

          return (
            <m.span
              key={`${char}-${index}`}
              initial={{
                y: 8,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                duration: 0.25,
                delay: 1.5 + index * 0.009, // Starts right as cards complete their fanned spread
                ease: [0.16, 1, 0.3, 1],
              }}
              className="inline-block"
            >
              {isSpace ? "\u00A0 " : char}
            </m.span>
          );
        })}
      </p>


      {/* Buttons with Black Gradient Inset-Shadow + Neutral-100 Work Button */}
      <m.div
        initial={{
          y: 12,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.45,
          delay: 1.5,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="flex items-center gap-3.5 sm:gap-4 mt-3 sm:mt-5"
      >
        {/* Services Button: Neutral with 3-Streak Reversible CSS Shimmer */}
        <ShimmerButton
          href="#work"
          variant="neutral"
          size="sm"
          className="px-5 sm:px-10 py-2 sm:py-2.5 bg-background ring-accent-orange/20 hover:bg-backgrround/20"
        >
          Services
        </ShimmerButton>

        {/* Explore Button: Orange Gradient with 3-Streak Reversible CSS Shimmer */}
        <ShimmerButton
          href="#work"
          variant="orange"
          size="sm"
          className="px-5 sm:px-10 py-2 sm:py-2.5"
        >
          Explore
        </ShimmerButton>
      </m.div>
    </div>
  );
}
