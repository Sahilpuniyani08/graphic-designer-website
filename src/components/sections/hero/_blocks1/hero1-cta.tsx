"use client";

import { m } from "motion/react";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { useLenis } from "lenis/react";

interface Hero1CtaProps {
  description?: string;
}

export function Hero1Cta({
  description = "Boring Designs? Not Anymore.Welcome to the World of Premium Designs.",
}: Hero1CtaProps) {
  const letters = Array.from(description);
  const lenis = useLenis();

  const handleScrollTo = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    if (lenis) {
      lenis.scrollTo(href, {
        offset: -20,
        duration: 1.2,
        immediate: false,
      });
    } else {
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
    window.history.pushState(null, "", href);
  };

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
        {/* Services Button: Smooth scroll to #services via Lenis */}
        <ShimmerButton
          href="#services"
          onClick={(e) => handleScrollTo(e, "#services")}
          variant="neutral"
          size="sm"
          className="px-5 sm:px-10 py-2 sm:py-2.5 bg-background ring-accent-orange/20 hover:bg-background/20"
        >
          Services
        </ShimmerButton>

        {/* Explore Button: Smooth scroll to #work via Lenis */}
        <ShimmerButton
          href="#work"
          onClick={(e) => handleScrollTo(e, "#work")}
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
