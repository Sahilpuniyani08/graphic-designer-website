"use client";

import NextImage from "next/image";
import { m, useTransform, useSpring, useReducedMotion, type MotionValue } from "motion/react";
import lyingImg from "@/assets/images/character-lying.webp";
import { IconSparkles, IconLayersIntersect } from "@tabler/icons-react";

interface AboutStatementProps {
  scrollProgress: MotionValue<number>;
}

export function AboutStatement({ scrollProgress }: AboutStatementProps) {
  const shouldReduceMotion = useReducedMotion();

  // Character lying on top of text
  const rawLyingY = useTransform(scrollProgress, [0.02, 0.18], [25, 0]);
  const lyingY = useSpring(rawLyingY, { stiffness: 200, damping: 15, mass: 0.8 });
  const lyingOpacity = useTransform(scrollProgress, [0.02, 0.14], [0, 1]);

  // Floating pills entrance from top Y, then settle with subtle rotation
  const rawPillY = useTransform(scrollProgress, [0.06, 0.22], [-20, 0]);
  const pillY = useSpring(rawPillY, { stiffness: 200, damping: 20 });
  const pillOpacity = useTransform(scrollProgress, [0.06, 0.18], [0, 1]);

  // Scroll opacity for precise phrases [0.08 -> 0.7]
  const op1 = useTransform(scrollProgress, [0.08, 0.26], [0.25, 1]);
  const op2 = useTransform(scrollProgress, [0.24, 0.46], [0.25, 1]);
  const op3 = useTransform(scrollProgress, [0.44, 0.68], [0.25, 1]);

  // Smooth highlight scale
  const rawHighlight = useTransform(scrollProgress, [0.28, 0.52], [0, 1]);
  const highlightScale = useSpring(rawHighlight, { stiffness: 220, damping: 24 });

  return (
    <div className="relative z-20 flex flex-col items-center justify-center text-center max-w-4xl lg:max-w-5xl mx-auto px-4 sm:px-8 select-none">
      {/* Top Floating Shimmer Pills - Positioned cleanly above with zero text overlap */}
      <div className="relative w-full hidden md:flex items-center justify-between mb-8 sm:mb-10 px-4 sm:px-12 pointer-events-none">
        {/* Pill 1 - Left floating */}
        <m.div
          style={
            shouldReduceMotion
              ? {}
              : { opacity: pillOpacity, y: pillY, rotate: -4 }
          }
          whileHover={{ rotate: 2, scale: 1.05 }}
          className="group pointer-events-auto inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-accent-orange to-[#ea680c] text-background font-display font-bold text-xs sm:text-sm shadow-lg border border-white/80 ring-2 ring-white/30 cursor-pointer overflow-hidden transition-transform"
        >
          <IconSparkles size={16} stroke={2.5} className="flex-shrink-0" />
          <span>Zero Templates</span>
          <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none" />
        </m.div>

        {/* Pill 2 - Right floating */}
        <m.div
          style={
            shouldReduceMotion
              ? {}
              : { opacity: pillOpacity, y: pillY, rotate: 4 }
          }
          whileHover={{ rotate: -2, scale: 1.05 }}
          className="group pointer-events-auto inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-accent-orange to-[#ea680c] text-background font-display font-bold text-xs sm:text-sm shadow-lg border border-white/80 ring-2 ring-white/30 cursor-pointer overflow-hidden transition-transform"
        >
          <IconLayersIntersect size={16} stroke={2.5} className="flex-shrink-0" />
          <span>Tactile Prints</span>
          <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none" />
        </m.div>
      </div>

      {/* Main Statement Container with Lying Character */}
      <div className="relative w-full pt-10 sm:pt-14 md:pt-16">
        {/* Character Lying on top of the statement */}
        <m.div
          aria-hidden="true"
          style={
            shouldReduceMotion
              ? { opacity: 1, y: 0 }
              : { opacity: lyingOpacity, y: lyingY }
          }
          className="pointer-events-none absolute -top-4 sm:-top-2 md:-top-4 left-1/2 -translate-x-1/2 z-30 w-[110px] sm:w-[150px] md:w-[180px]"
        >
          <NextImage
            src={lyingImg}
            alt="Character lying relaxed on top of statement"
            width={600}
            height={400}
            priority={false}
            sizes="(max-width: 640px) 110px, (max-width: 768px) 150px, 180px"
            className="w-full h-auto object-contain drop-shadow-md"
          />
        </m.div>

        {/* 
          Precise & High-Impact Statement:
          Crisp, human-written, zero fluff.
        */}
        <div className="font-manrope text-2xl sm:text-3xl md:text-4xl lg:text-[40px] leading-[1.38] sm:leading-[1.32] text-foreground tracking-tight">
          {/* Part 1: Identity */}
          <m.span style={shouldReduceMotion ? {} : { opacity: op1 }} className="font-extrabold text-foreground">
            I’m Anmol Soni —{" "}
          </m.span>
          <m.span style={shouldReduceMotion ? {} : { opacity: op1 }}>
            an independent graphic designer crafting luxury visiting cards, flex banners, and{" "}
          </m.span>

          {/* Part 2: Deliverable with Highlight */}
          <m.span style={shouldReduceMotion ? {} : { opacity: op2 }} className="relative inline-block mx-1">
            <span className="relative z-10 px-2.5 py-0.5 font-bold italic text-background">
              bespoke brand identities.
            </span>
            <m.span
              style={
                shouldReduceMotion
                  ? { scaleX: 1 }
                  : { scaleX: highlightScale, transformOrigin: "left center" }
              }
              className="absolute inset-1 bg-accent-orange rounded-xs -z-0"
              aria-hidden="true"
            />
          </m.span>

          {/* Part 3: Problem Solved with Highlight */}
          <m.span style={shouldReduceMotion ? {} : { opacity: op3 }}>
            {" "}Turning everyday business collateral into{" "}
          </m.span>
          <m.span style={shouldReduceMotion ? {} : { opacity: op3 }} className="relative inline-block mx-1">
            <span className="relative z-10 px-2.5 py-0.5 font-bold italic text-background">
              real customer trust.
            </span>
            <m.span
              style={
                shouldReduceMotion
                  ? { scaleX: 1 }
                  : { scaleX: highlightScale, transformOrigin: "left center" }
              }
              className="absolute inset-1 bg-accent-orange rounded-xs -z-0"
              aria-hidden="true"
            />
          </m.span>
        </div>
      </div>
    </div>
  );
}
