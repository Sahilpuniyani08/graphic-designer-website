"use client";

import { type ReactNode } from "react";
import { ReactLenis } from "lenis/react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

interface SmoothScrollProviderProps {
  children: ReactNode;
}

export function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <>{children}</>;
  }

  return (
    <ReactLenis
      root
      options={{

        lerp: 0.085,
        wheelMultiplier: 0.9,
        touchMultiplier: 1.2,
        smoothWheel: true,
        autoResize: true,
      }}
    >
      {children}
    </ReactLenis>
  );
}
