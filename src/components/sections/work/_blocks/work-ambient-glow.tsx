"use client";

import { m } from "motion/react";
import grainImage from "@/assets/images/hero/grain.png";

interface WorkAmbientGlowProps {
  rotationAngle: number;
}

export function WorkAmbientGlow({ rotationAngle }: WorkAmbientGlowProps) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden z-10 select-none">
      {/* Outer Fixed Disc: Stationary in space, does NOT rotate. Clips the inner rotating colors. */}
      <m.div
        initial={{
          opacity: 0,
          scale: 0.9,
        }}
        animate={{
          opacity: 0.35,
          scale: 1,
        }}
        transition={{
          opacity: { duration: 1.2, ease: "easeOut" },
          scale: { duration: 1, ease: "easeOut" },
        }}
        className="absolute -top-32 sm:-top-94 left-0 sm:left-1/2 -translate-x-1/2 w-[360px] h-[360px] sm:w-[590px] sm:h-[520px] rounded-full overflow-hidden blur-2xl sm:blur-lg"
      >
        {/* Inner Conic Gradient: Revolves inside the stationary outer boundary on every tab click */}
        <m.div
          animate={{
            rotate: rotationAngle,
          }}
          transition={{
            rotate: { type: "spring", stiffness: 45, damping: 16, mass: 0.9 },
          }}
          className="absolute -inset-20 rounded-full"
          style={{
            background:
              "conic-gradient(from 0deg, var(--accent-red), var(--accent-lime), var(--swatch-coral), var(--accent-lime-hover), var(--accent-red))",
          }}
        />
      </m.div>

      {/* Film Grain Texture Overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-20 mix-blend-overlay"
        style={{
          backgroundImage: `url(${grainImage.src})`,
          backgroundRepeat: "repeat",
        }}
      />
    </div>
  );
}
