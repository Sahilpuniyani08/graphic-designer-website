"use client";

import NextImage from "next/image";
import { m, useTransform, useSpring, useReducedMotion, type MotionValue } from "motion/react";
import characterImg from "@/assets/images/character.png";
import peakingImg from "@/assets/images/character-peaking.webp";

interface AboutCharactersProps {
  scrollProgress: MotionValue<number>;
}

export function AboutCharacters({ scrollProgress }: AboutCharactersProps) {
  const shouldReduceMotion = useReducedMotion();

  // Bottom-Left Thinking Character:
  // Short height wise, rises gently from y: 120 to 0, transitions opacity from 0 to 1, and clears blur
  const rawBottomY = useTransform(scrollProgress, [0.02, 0.44], [120, 0]);
  const bottomY = useSpring(rawBottomY, { stiffness: 200, damping: 30 });
  const bottomOpacity = useTransform(scrollProgress, [0.02, 0.3], [0, 1]);
  const bottomBlur = useTransform(scrollProgress, [0.02, 0.16], [12, 0]);
  const bottomFilter = useTransform(bottomBlur, (v) => `blur(${v}px)`);

  // Right-Center Peeking Character:
  // Peeks inward from the right center edge, pointing towards the center text
  const rawPeakingX = useTransform(scrollProgress, [0.08, 0.4], [100, 0]);
  const peakingX = useSpring(rawPeakingX, { stiffness: 180, damping: 25 });
  const peakingOpacity = useTransform(scrollProgress, [0.08, 0.28], [0, 1]);
  const peakingScale = useTransform(scrollProgress, [0.08, 0.2], [0.9, 1]);

  return (
    <>

      <m.div
        aria-hidden="true"
        style={
          shouldReduceMotion
            ? { opacity: 1, y: 0, filter: "none" }
            : { opacity: bottomOpacity, y: bottomY, filter: bottomFilter }
        }
        className="pointer-events-none absolute bottom-0 left-0 sm:left-2 lg:left-6 xl:left-8 z-10 w-[100px] sm:w-[170px] md:w-[210px] lg:w-[260px] xl:w-[300px] select-none opacity-40 sm:opacity-100 transition-opacity"
      >
        <NextImage
          src={characterImg}
          alt="Thoughtful character illustration in bottom left"
          width={1243}
          height={1266}
          priority={false}
          sizes="(max-width: 640px) 100px, (max-width: 768px) 170px, (max-width: 1024px) 260px, 300px"
          className="w-full h-auto object-contain drop-shadow-2xl"
        />
      </m.div>

      {/* 
        Right-Center Peeking Character:
        Peeking inward from the right center edge, pointing towards the center statement
      */}
      <m.div
        aria-hidden="true"
        style={
          shouldReduceMotion
            ? { opacity: 1, x: 0, scale: 1 }
            : { opacity: peakingOpacity, x: peakingX, scale: peakingScale }
        }
        className="pointer-events-none absolute hidden sm:block sm:top-1/2 sm:-translate-y-1/2 right-0 md:right-2 lg:right-6 xl:-right-12 z-20 sm:w-[170px] md:w-[210px] lg:w-[270px] xl:w-[320px] select-none"
      >
        <NextImage
          src={peakingImg}
          alt="Character peeking from right and pointing towards text"
          width={2048}
          height={1529}
          priority={false}
          sizes="(max-width: 768px) 170px, (max-width: 1024px) 270px, 320px"
          className="w-full h-auto object-contain drop-shadow-2xl mask-b-from-90%"
        />
      </m.div>
    </>
  );
}
