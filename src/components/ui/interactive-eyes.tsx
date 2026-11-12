"use client";

import { useRef, useState, useEffect } from "react";
import { m, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

export interface InteractiveEyesProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  /** Sensitivity factor for how far pupils travel (default: 7) */
  maxPupilDistance?: number;
  /** Counter-motion factor for the white eye capsule (default: 0.65) */
  counterMotionFactor?: number;
}

export function InteractiveEyes({
  className,
  size = "md",
  maxPupilDistance = 7,
  counterMotionFactor = 0.65,
}: InteractiveEyesProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [pupilOffset, setPupilOffset] = useState({ x: 0, y: 0 });
  const [whiteEyeOffset, setWhiteEyeOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (shouldReduceMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;
      const angle = Math.atan2(deltaY, deltaX);

      // Distance normalized with max limit
      const distance = Math.min(maxPupilDistance, Math.hypot(deltaX, deltaY) / 28);
      const px = Math.cos(angle) * distance;
      const py = Math.sin(angle) * distance;

      setPupilOffset({ x: px, y: py });

      // Outer white eye capsule moves in the OPPOSITE direction (parallax counter-motion)
      setWhiteEyeOffset({
        x: -px * counterMotionFactor,
        y: -py * counterMotionFactor,
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [shouldReduceMotion, maxPupilDistance, counterMotionFactor]);

  // Dimensions based on size prop
  const sizeClasses = {
    sm: {
      gap: "gap-2 sm:gap-2.5",
      eye: "w-6 sm:w-7 h-9 sm:h-11",
      pupil: "w-3 sm:w-3.5 h-3 sm:h-3.5",
    },
    md: {
      gap: "gap-3 sm:gap-4",
      eye: "w-7 sm:w-9 h-11 sm:h-14",
      pupil: "w-3.5 sm:w-4.5 h-3.5 sm:h-4.5",
    },
    lg: {
      gap: "gap-4 sm:gap-5",
      eye: "w-9 sm:w-12 h-14 sm:h-18",
      pupil: "w-4.5 sm:w-6 h-4.5 sm:h-6",
    },
  }[size];

  return (
    <div
      ref={containerRef}
      className={cn("relative flex items-center justify-center select-none", sizeClasses.gap, className)}
      aria-hidden="true"
    >
      {/* Left Eye */}
      <m.div
        animate={
          shouldReduceMotion
            ? {}
            : {
              scaleY: [1, 1, 0.08, 1, 1],
            }
        }
        transition={{
          repeat: Infinity,
          duration: 2.6,
          times: [0, 0.88, 0.92, 0.96, 1],
          ease: "easeInOut",
        }}
        style={{
          transform: shouldReduceMotion
            ? undefined
            : `translate(${whiteEyeOffset.x}px, ${whiteEyeOffset.y}px)`,
          transition: "transform 0.14s ease-out",
        }}
        className={cn(
          "bg-background rounded-full shadow-lg relative overflow-hidden flex items-center justify-center border border-black/5",
          sizeClasses.eye
        )}
      >
        {/* Pupil */}
        <div
          style={{
            transform: shouldReduceMotion
              ? undefined
              : `translate(${pupilOffset.x}px, ${pupilOffset.y}px)`,
            transition: "transform 0.12s ease-out",
          }}
          className={cn("rounded-full bg-[#1A1B1E] shadow-xs", sizeClasses.pupil)}
        />
      </m.div>

      {/* Right Eye */}
      <m.div
        animate={
          shouldReduceMotion
            ? {}
            : {
              scaleY: [1, 1, 0.08, 1, 1],
            }
        }
        transition={{
          repeat: Infinity,
          duration: 2.6,
          times: [0, 0.88, 0.92, 0.96, 1],
          ease: "easeInOut",
        }}
        style={{
          transform: shouldReduceMotion
            ? undefined
            : `translate(${whiteEyeOffset.x}px, ${whiteEyeOffset.y}px)`,
          transition: "transform 0.14s ease-out",
        }}
        className={cn(
          "bg-background rounded-full shadow-lg relative overflow-hidden flex items-center justify-center border border-black/5",
          sizeClasses.eye
        )}
      >
        {/* Pupil */}
        <div
          style={{
            transform: shouldReduceMotion
              ? undefined
              : `translate(${pupilOffset.x}px, ${pupilOffset.y}px)`,
            transition: "transform 0.12s ease-out",
          }}
          className={cn("rounded-full bg-[#1A1B1E] shadow-xs", sizeClasses.pupil)}
        />
      </m.div>
    </div>
  );
}

