"use client";

import { Section } from "@/components/ui/section";
import { Hero1Heading } from "./_blocks1/hero1-heading";
import { Hero1Cards } from "./_blocks1/hero1-cards";
import { Hero1Cta } from "./_blocks1/hero1-cta";
import { Hero1Badges } from "./_blocks1/hero1-badges";
import { cn } from "@/lib/utils";

import { m } from "motion/react";

export function Hero1() {
  return (
    <Section
      id="hero"
      as="section"
      padding="none"
      aria-label="Creative Showcase Hero"
      className="relative flex h-svh min-h-[580px] sm:min-h-[640px] w-full flex-col items-center justify-center overflow-hidden bg-transparent select-none "
    >

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

      <m.div
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: 1
        }}
        transition={{
          duration: 1,
          delay: 2,
          ease: "easeInOut"
        }}

        className="z-10 absolute inset-0  bg-linear-to-r from-accent-orange/30  to-accent-lime/30 mask-radial-[50%_50%] mask-radial-from-55% mask-radial-at-top "
      // className="absolute -top-2  left-1/2 -translate-x-1/2  w-full h-[300px]  bg-gradient-to-b from-accent-orange/40 via-accent-lime/25 to-transparent blur-md pointer-events-none "
      />

      <div className="absolute top-16 sm:top-20 md:top-24 left-0 right-0 z-20 flex flex-col items-center justify-center w-full px-4">
        <Hero1Heading />
      </div>


      <Hero1Badges />

      {/* 
        Center Cards Stage:
        Vertically and horizontally centered within the 100dvh viewport, completely unscrolled
      */}
      <div className="relative z-10 w-full flex items-center justify-center">
        <Hero1Cards />
      </div>

      {/* 
        Subheading & Dual CTA Buttons:
        Positioned relative to the hero content directly below the cards stage (not at screen bottom)
      */}
      <div className="absolute top-[63%] sm:top-[65%] md:top-[66%] left-0 right-0 z-20 flex flex-col items-center justify-center w-full px-4">
        <Hero1Cta />
      </div>
    </Section>
  );
}
