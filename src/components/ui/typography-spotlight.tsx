"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import smallTypographyImg from "@/assets/images/small-typography.png";

interface TypographySpotlightProps {
  size?: number;
  cornerRadius?: number;
  radius?: number; // alias for cornerRadius
  opacity?: number;
}

export function TypographySpotlight({
  size = 200,
  cornerRadius,
  radius = 28,
  opacity = 0.35,
}: TypographySpotlightProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const effectiveCornerRadius = cornerRadius ?? radius;
  const half = Math.round(size / 2);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let rafId: number | null = null;
    let targetX = -9999;
    let targetY = -9999;

    const onPointerMove = (e: PointerEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;

      if (!rafId) {
        rafId = requestAnimationFrame(() => {
          container.style.setProperty("--mouse-x", `${targetX}px`);
          container.style.setProperty("--mouse-y", `${targetY}px`);
          rafId = null;
        });
      }

      setIsVisible(true);
    };

    const onPointerLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    document.addEventListener("mouseleave", onPointerLeave);

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("mouseleave", onPointerLeave);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  const clipPathString = `inset(calc(var(--mouse-y, -9999px) - ${half}px) calc(100vw - var(--mouse-x, -9999px) - ${half}px) calc(100vh - var(--mouse-y, -9999px) - ${half}px) calc(var(--mouse-x, -9999px) - ${half}px) round ${effectiveCornerRadius}px)  `;

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      style={{
        clipPath: clipPathString,
        WebkitClipPath: clipPathString,
      }}
      className={`pointer-events-none  fixed inset-0 z-0 overflow-hidden transition-opacity duration-300 select-none  ${isVisible ? "opacity-100 " : "opacity-0"
        }`}
    >
      <Image
        src={smallTypographyImg}
        alt=""
        fill
        sizes="100vw"
        priority={false}
        style={{ opacity }}
        className="w-full h-full object-cover select-none pointer-events-none  "
      />
    </div>
  );
}
