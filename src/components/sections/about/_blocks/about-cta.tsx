"use client";

import { m } from "motion/react";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { useLenis } from "lenis/react";

export function AboutCta() {
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
    <m.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="relative z-20 flex flex-col items-center justify-center text-center gap-4 mt-8 sm:mt-12 select-none"
    >
      <div>
        <ShimmerButton
          href="#work"
          onClick={(e) => handleScrollTo(e, "#work")}
          variant="orange"
          size="md"
          className="px-8 sm:px-14 py-3 sm:py-3.5 text-xs sm:text-base font-semibold"
        >
          View Collections
        </ShimmerButton>
      </div>
    </m.div>
  );
}
