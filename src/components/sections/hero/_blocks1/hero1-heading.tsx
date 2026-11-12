"use client";

import { m } from "motion/react";
import { FooterEyes } from "../../footer/_blocks/footer-eyes";
import { InteractiveEyes } from "@/components/ui";

interface Hero1HeadingProps {
  title?: string;
}

export function Hero1Heading({ }: Hero1HeadingProps) {

  const line1Text = "Turning Ideas";
  const line2Text = "Into Creative Visuals";

  const line1Chars = Array.from(line1Text);
  const line2Chars = Array.from(line2Text);

  return (
    <m.div
      initial={{ opacity: 0, scale: 0.95, y: 12 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto px-4 mt-10"
    >
      <h1 className="font-manrope text-4xl sm:text-5xl md:text-6xl lg:text-[54px] font-medium tracking-tight leading-[1.08] select-none">
        {/* Line 1: Letter by letter unblur & progressive fill from muted to text-foreground */}
        <span className="flex flex-wrap justify-center items-center">
          {line1Chars.map((char, i) => {
            const isSpace = char === " ";
            return (
              <m.span
                key={`line1-char-${char}-${i}`}
                initial={{
                  opacity: 0.2,
                  filter: "blur(6px)",
                  color: "rgba(26, 27, 30, 0.22)",
                }}
                animate={{
                  opacity: 1,
                  filter: "blur(0px)",
                  color: "var(--foreground)",
                }}
                transition={{
                  duration: 0.45,
                  delay: 0.15 + i * 0.045,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="inline-block transition-colors"
              >
                {isSpace ? "\u00A0" : char}
              </m.span>
            );
          })}
        </span>

        {/* Line 2: Continues progressive fill wave */}
        <span className="flex flex-wrap justify-center items-center mt-1 sm:mt-2">
          {line2Chars.map((char, i) => {
            const isSpace = char === " ";
            return (
              <m.span
                key={`line2-char-${char}-${i}`}
                initial={{
                  opacity: 0.2,
                  filter: "blur(6px)",
                  color: "rgba(26, 27, 30, 0.22)",
                }}
                animate={{
                  opacity: 1,
                  filter: "blur(0px)",
                  color: "var(--foreground)",
                }}
                transition={{
                  duration: 0.45,
                  delay: 0.15 + (line1Chars.length + i) * 0.045,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="inline-block transition-colors"
              >

                {isSpace ? "\u00A0" : char}
              </m.span>

            );
          })}

        </span>

      </h1>
    </m.div>
  );
}
