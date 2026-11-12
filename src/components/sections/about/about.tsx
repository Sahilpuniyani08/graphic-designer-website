"use client";

import { useRef } from "react";
import { m, useScroll } from "motion/react";
import { AboutStatement } from "./_blocks/about-statement";
import { AboutCharacters } from "./_blocks/about-character";
import { AboutCta } from "./_blocks/about-cta";
import { cn } from "@/lib/utils";

export function About() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Pin-scroll progress: starts at 0 when top of section hits top of viewport ("start start")
  // and reaches 1 when the user finishes scrolling through the section ("end end")
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      id="about"
      ref={containerRef}
      aria-label="About the Graphic Designer"
      className="relative h-[220vh] w-full bg-backgroud mask-y-from-95%"
    >


      <div className="sticky top-0 h-[100dvh] w-full overflow-hidden flex flex-col items-center justify-center select-none">

        {/* Subtle Orange Ambient Aura at top right */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-20 -right-20 md:-top-30 md:-right-30 w-40 h-40 md:w-85 md:h-85 bg-linear-to-r from-accent-orange/80 to-accent-lime/40 rounded-full blur-lg -z-10 "
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-20 -left-20 md:-bottom-30 md:-left-30 w-40 h-40 md:w-85 md:h-85 bg-linear-to-r from-accent-orange/80 to-accent-lime/40 rounded-full blur-lg -z-10 "
        />

        {/* Subtle Center Ambient Glow */}
        <div className="z-0 absolute inset-0 bg-linear-to-r from-accent-orange/10 to-accent-lime/15 mask-radial-[45%_35%] mask-radial-at-center pointer-events-none  " />

        <m.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          aria-hidden="true"
          className={cn(
            "pointer-events-none absolute inset-0 -z-10",
            "[background-image:linear-gradient(to_right,color-mix(in_srgb,var(--accent-orange)_12%,transparent)_1px,transparent_1px),linear-gradient(to_bottom,color-mix(in_srgb,var(--accent-orange)_12%,transparent)_1px,transparent_1px)]",
            "[background-size:32px_32px] mask-radial-[50%_80%] mask-radial-from-25% mask-radial-at-center"
          )}
        />

        {/* Film Grain Texture Overlay */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 opacity-30 mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.08'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Centered Content Container */}
        <div className="relative z-20 flex flex-col items-center justify-center w-full max-w-5xl px-4 sm:px-6">
          <AboutStatement scrollProgress={scrollYProgress} />
          <AboutCta />
        </div>

        {/* Thoughtful and Peeking Characters */}
        <AboutCharacters scrollProgress={scrollYProgress} />
      </div>
    </section>
  );
}
