"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { m } from "motion/react";
import { siteConfig } from "@/config/site";

export function BrandLogo1() {
  const [isHovered, setIsHovered] = useState(false);
  const [hasEntered, setHasEntered] = useState(false);

  const text = siteConfig.shortName; // "The Design Vault"
  const letters = Array.from(text);

  useEffect(() => {
    // Total entrance duration matching brand-logo.tsx
    const totalDuration = (0.35 + letters.length * 0.035 + 0.4) * 1000;
    const timer = setTimeout(() => {
      setHasEntered(true);
    }, totalDuration);
    return () => clearTimeout(timer);
  }, [letters.length]);

  return (
    <Link
      href="/"
      aria-label={`Go to homepage - ${text}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group z-20 flex items-center gap-2 rounded-lg px-2 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring select-none cursor-pointer"
    >
      <span className="flex items-center font-body text-base sm:text-lg font-medium tracking-tight">
        {letters.map((char, i) => {
          const isSpace = char === " ";

          return (
            <span
              key={`${char}-${i}`}
              className="relative inline-flex flex-col overflow-hidden h-[1.3em] leading-none "
            >
              {/* Primary Letter: Starts Blue -> staggers to Black with blur effect.
                  On hover: rolls up to top (-110%) */}
              <m.span
                initial={{
                  color: "var(--foreground)",
                  filter: "blur(0px)",
                  y: "0%",
                }}
                animate={
                  isHovered
                    ? {
                      y: "-110%",
                      color: "var(--accent-orange)",
                      filter: "blur(0px)",
                      transition: {
                        y: {
                          duration: 0.32,
                          delay: i * 0.016,
                          ease: [0.16, 1, 0.3, 1],
                        },
                      },
                    }
                    : hasEntered
                      ? {
                        y: "0%",
                        color: "var(--accent-orange)",
                        filter: "blur(0px)",
                        transition: {
                          y: {
                            duration: 0.32,
                            delay: i * 0.016,
                            ease: [0.16, 1, 0.3, 1],
                          },
                        },
                      }
                      : {
                        color: "var(--accent-orange)",
                        filter: ["blur(0px)", "blur(4px)", "blur(0px)"],
                        y: "0%",
                        transition: {
                          color: {
                            delay: 0.35 + i * 0.035,
                            duration: 0.4,
                            ease: "easeOut",
                          },
                          filter: {
                            delay: 0.35 + i * 0.035,
                            duration: 0.4,
                            times: [0, 0.4, 1],
                          },
                        },
                      }
                }
                className="inline-block"
              >
                {isSpace ? "\u00A0" : char}
              </m.span>

              {/* Secondary Letter: rolls up from bottom (100% -> 0%) in Blue on hover */}
              <m.span
                aria-hidden="true"
                initial={{ y: "100%" }}
                animate={{
                  y: isHovered ? "0%" : "100%",
                }}
                transition={{
                  duration: 0.32,
                  delay: i * 0.016,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="absolute inset-0 inline-block bg-linear-to-br from-foreground to-foreground bg-clip-text text-transparent drop-shadow-[0_3px_8px_rgba(204,216,40,0.25)] "
              >
                {isSpace ? "\u00A0" : char}
              </m.span>
            </span>
          );
        })}
      </span>

      {/* Trailing Dot: Enters with blur and scale, Blue by default, turns Black on hover */}
      {/* <m.span
        initial={{
          scale: 0.6,
          filter: "blur(4px)",
          opacity: 0,
        }}
        animate={{
          scale: isHovered ? 1.3 : 1,
          filter: "blur(0px)",
          opacity: 1,
          backgroundColor: isHovered ? "" : "",
        }}
        transition={{
          scale: isHovered
            ? { duration: 0.22, ease: "easeOut" }
            : { delay: 0.35 + letters.length * 0.035, duration: 0.3 },
          filter: {
            delay: 0.35 + letters.length * 0.035,
            duration: 0.4,
          },
          opacity: {
            delay: 0.3 + letters.length * 0.035,
            duration: 0.3,
          },
          backgroundColor: { duration: 0.2 },
        }}
        className="h-1.5 w-1.5 rounded-full"
      /> */}
    </Link>
  );
}
