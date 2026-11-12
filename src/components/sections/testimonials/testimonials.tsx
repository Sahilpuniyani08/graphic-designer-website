"use client";

import { useRef } from "react";
import { m, useScroll, useTransform, useSpring } from "motion/react";
import { TestimonialsFlipper } from "./_blocks/testimonials-flipper";

export function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll progress for subtle parallax on background letters
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 120, damping: 20 });

  // Parallax Y transforms for background letters
  const letterR_Y = useTransform(smoothProgress, [0, 1], [-40, 40]);
  const letterE_Y = useTransform(smoothProgress, [0, 1], [30, -50]);
  const letterV_Y = useTransform(smoothProgress, [0, 1], [-30, 45]);
  const letterI_Y = useTransform(smoothProgress, [0, 1], [40, -30]);
  const letterW_Y = useTransform(smoothProgress, [0, 1], [-50, 30]);

  return (
    <section
      id="testimonials"
      ref={containerRef}
      aria-label="Client Testimonials & Reviews"
      className="relative w-full overflow-hidden bg-accent-orange-dark z-10 py-20 sm:py-28 md:py-36 text-white select-none"
    >
      {/* Film Grain Texture Overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 opacity-90 mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.09'/%3E%3C/svg%3E")`,
        }}
      />

      {/* 
        Background Typography Alphabets ("r", "e", "v", "i", "e", "w")
        Inspired directly by Reference Image 3:
        Bold white letters with clean opacity fill that parallax subtly on scroll.
      */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden font-display font-black leading-none text-background ">
        {/* Letter 'r' */}
        <m.span
          style={{ y: letterR_Y }}
          className="absolute  -top-20 md:-top-12 -left-6 sm:-left-12 text-[300px] sm:text-[340px] md:text-[540px] scale-y-85 -rotate-12 text-shadow-2xs"
        >
          r
        </m.span>

        <m.span
          style={{ y: letterE_Y }}
          className="absolute -top-20 md:-top-40 left-1/3 text-[250px] scale-y-85 sm:text-[320px] md:text-[400px]  rotate-10 md:rotate-[-16deg]"
        >
          e
        </m.span>

        {/* Letter 'e' */}
        <m.span
          style={{ y: letterE_Y }}
          className="absolute -bottom-20 left-24 md:left-[40%] text-[250px] scale-y-85 sm:text-[320px] md:text-[400px] -rotate-16 md:rotate-16"
        >
          e
        </m.span>


        {/* Letter 'v' */}
        <m.span
          style={{ y: letterV_Y }}
          className="absolute -top-24 -right-10 md:right-40 scale-y-85 text-[250px] sm:text-[280px] md:text-[460px] rotate-3 md:rotate-[-8deg]"
        >
          v
          <div className="absolute -bottom-20 sm:bottom-40 -left-10 sm:left-10   text-accent-orange font-display font-extrabold text-xs sm:text-lg  tracking-wider uppercase  rotate-70 hidden md:block">
            #review
          </div>
        </m.span>

        {/* Letter 'i' */}
        <m.span
          style={{ y: letterI_Y }}
          className="absolute  -bottom-30 md:-bottom-40 right-8 left-2   sm:left-1/5 text-[280px]   scale-y-85 sm:text-[200px] md:text-[450px] rotate-10 "
        >
          i
          <div className="absolute -bottom-20 sm:bottom-40 -left-10 sm:-left-3    text-accent-orange font-display font-extrabold text-xs sm:text-lg  tracking-wider uppercase  -rotate-90 hidden md:block">
            #testimonial
          </div>
        </m.span>

        {/* Letter 'w' */}
        <m.span
          style={{ y: letterW_Y }}
          className="absolute -bottom-16 -right-6 sm:right-4 text-[200px] sm:text-[340px] md:text-[380px] scale-y-85 rotate-[-10deg] md:rotate-12"
        >
          w
        </m.span>


      </div>

      {/* Foreground Header */}
      <div className="relative z-10 text-center max-w-2xl mx-auto px-4 mb-2">
        <span className="inline-block px-3.5 py-1 rounded-full bg-white/20 text-white text-xs font-semibold uppercase tracking-wider mb-3 backdrop-blur-xs">
          Client Stories &amp; Reviews
        </span>
      </div>

      {/* Flipper Card Container */}
      <div className="relative z-10 w-full px-4 sm:px-6">
        <TestimonialsFlipper />
      </div>
    </section>
  );
}
