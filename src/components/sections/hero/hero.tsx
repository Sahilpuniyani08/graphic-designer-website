import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { HeroHeading } from "./_blocks/hero-heading";
import { HeroSubheading } from "./_blocks/hero-subheading";
import { HeroCta } from "./_blocks/hero-cta";
import { HeroBadges } from "./_blocks/hero-badges";
import { HeroShowcaseCards } from "./_blocks/hero-showcase-cards";
import { m } from "motion/react";

export function Hero() {
  return (
    <Section
      as="section"
      padding="none"
      aria-label="Hero Introduction"
      className="relative flex flex-col h-dvh items-center justify-start overflow-hidden bg-background mask-b-from-90%"
    >
      {/* Top Ambient Glows
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 h-[450px] w-[700px] -translate-x-1/2 rounded-full bg-accent-violet/6 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-12 left-1/3 h-[300px] w-[400px] -translate-x-1/2 rounded-full bg-accent-lime/6 blur-[100px]"
      /> */}

      {/* <div className="z-10 absolute inset-0  bg-linear-to-r from-accent-red/20  to-accent-lime/20 mask-radial-[80%_10%] mask-radial-from-25% mask-radial-at-top  " /> */}
      {/* 
      <div className=" absolute instet-0 h-full w-full bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-size-[24px_24px] mask-radial-[50%_50%] mask-radial-from-25% mask-radial-at-center " /> */}


      <m.div
        initial={{
          opacity: 0,

        }}
        animate={{
          opacity: 1,

        }}
        transition={{
          duration: 1,
          ease: "easeInOut"
        }}
        className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,color-mix(in_srgb,var(--accent-red)_12%,transparent)_1px,transparent_1px),linear-gradient(to_bottom,color-mix(in_srgb,var(--accent-lime)_12%,transparent)_1px,transparent_1px)] bg-size-[24px_24px] mask-radial-[50%_50%] mask-radial-from-25% mask-radial-at-center" />

      <Container size="2xl" className=" relative z-20 flex flex-col items-center  h-full mt-40  ">


        {/* Floating Side Badges with Hand-drawn Arrows */}
        <HeroBadges />

        {/* Hero Title & Subheading */}
        <HeroHeading />
        <HeroSubheading />

        {/* Interactive CTA Buttons */}
        <HeroCta />

        {/* 5 Showcase Portfolio Cards (bottom is clipped by Section overflow-hidden) */}
        <HeroShowcaseCards />
      </Container>
    </Section>
  );
}
