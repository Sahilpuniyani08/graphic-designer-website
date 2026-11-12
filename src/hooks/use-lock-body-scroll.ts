"use client";

import { useEffect } from "react";
import { useLenis } from "lenis/react";

/**
 * Universal hook to completely freeze background scrolling across all browsers,
 * devices, and smooth-scroll engines (including Lenis).
 */
export function useLockBodyScroll(isLocked: boolean) {
  const lenis = useLenis();

  useEffect(() => {
    if (!isLocked) return;

    // 1. Freeze Lenis smooth scroll engine
    lenis?.stop();

    // 2. Freeze native DOM scroll on body and document element
    const originalBodyOverflow = document.body.style.overflow;
    const originalHtmlOverflow = document.documentElement.style.overflow;
    const originalBodyTouchAction = document.body.style.touchAction;

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    document.body.style.touchAction = "none";

    return () => {
      // Restore native scroll
      document.body.style.overflow = originalBodyOverflow;
      document.documentElement.style.overflow = originalHtmlOverflow;
      document.body.style.touchAction = originalBodyTouchAction;

      // Resume Lenis smooth scroll
      lenis?.start();
    };
  }, [isLocked, lenis]);
}

