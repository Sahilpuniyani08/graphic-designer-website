"use client";

import { m } from "motion/react";

interface ServicesHeadingProps {
  subtitle?: string;
}

export function ServicesHeading({
  subtitle = "Select a service to explore tactile print finishes, technical specifications, and calculate instant pricing.",
}: ServicesHeadingProps) {
  const lineWords = ["Design", "&", "Print", "Services."];

  return (
    <div className="flex flex-col items-center text-center max-w-2xl mx-auto px-4 mb-8 sm:mb-12 select-none">
      {/* Heading matching other sections UI (Manrope, refined font-medium, editorial spacing) */}
      <h2 className="font-manrope text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-foreground leading-[1.15] flex flex-wrap items-center justify-center gap-x-2 sm:gap-x-3">
        {lineWords.map((word, idx) => (
          <m.span
            key={`${word}-${idx}`}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              duration: 0.5,
              delay: idx * 0.06,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="inline-block"
          >
            {word}
          </m.span>
        ))}
      </h2>

      {/* Subheading matching other sections subtitle styling */}
      <m.p
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{
          duration: 0.45,
          delay: 0.28,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="font-body text-xs sm:text-[13px] md:text-sm text-foreground/75 leading-relaxed tracking-normal max-w-lg mt-2 sm:mt-3"
      >
        {subtitle}
      </m.p>
    </div>
  );
}
