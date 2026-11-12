"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { m } from "motion/react";
import { siteConfig } from "@/config/site";

export function BrandLogo() {
  const [isHovered, setIsHovered] = useState(false);
  const [hasEntered, setHasEntered] = useState(false);

  const text = siteConfig.shortName; // "The Design Vault"
  const letters = Array.from(text);

  useEffect(() => {
    // Total entrance duration: 0.35s base + (letters.length * 0.035s) + 0.4s buffer
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
      className="group z-20 flex items-center gap-2 rounded-lg px-1 py-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring select-none cursor-pointer"
    >
      <span className="flex items-center font-body text-lg sm:text-lg font-normal tracking-tighter">
        {letters.map((char, i) => {
          const isSpace = char === " ";

          return (
            <span
              key={`${char}-${i}`}
              className="relative inline-flex flex-col overflow-hidden h-[1.3em] leading-none"
            >
              {/* Primary Letter: starts black -> staggers to red with blur -> clear blur.
                  On hover: rolls up to top (-100%) letter by letter */}
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
                      color: "var(--accent-red)",
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
                        color: "var(--accent-red)",
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
                        color: "var(--accent-red)",
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

              {/* Secondary Blue Letter: starts below (100%), rolls up into view at the exact same time */}
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
                className="absolute inset-0 inline-block text-accent-blue"
              >
                {isSpace ? "\u00A0" : char}
              </m.span>
            </span>
          );
        })}
      </span>

      {/* Trailing Dot: blur stagger entrance after letters, scales on hover */}
      <m.span
        initial={{
          scale: 0.6,
          filter: "blur(4px)",
          opacity: 0,
        }}
        animate={{
          scale: isHovered ? 1.3 : 1,
          filter: "blur(0px)",
          opacity: 1,
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
        }}
        className="h-1.5 w-1.5 rounded-full bg-accent-lime-hover"
      />
    </Link>
  );
}
