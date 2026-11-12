"use client";

import { m } from "motion/react";
import { wordBlurContainer, wordBlurChild } from "@/animations/variants";

const subtitleText = "Create your identity digitally accessible";

export function HeroSubheading() {
  const words = subtitleText.split(" ");

  return (
    <m.div
      variants={wordBlurContainer}
      initial="hidden"
      animate="visible"
      className="mt-4 sm:mt-2 flex flex-wrap items-center justify-center gap-x-1.5 sm:gap-x-1 text-center"
    >
      {words.map((word, index) => (
        <m.span
          key={`${word}-${index}`}
          variants={wordBlurChild}
          className="font-body text-(length:--font-size-body-sm) font-normal text-foreground-muted tracking-tight"
        >
          {word}
        </m.span>
      ))}
    </m.div>
  );
}

