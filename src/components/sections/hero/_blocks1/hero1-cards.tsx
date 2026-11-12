"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { m, useAnimate } from "motion/react";

import card1 from "@/assets/images/card-1.webp";
import card7 from "@/assets/images/card-7.webp";
import card6 from "@/assets/images/card-6.webp";
import card8 from "@/assets/images/card-8.webp";
import card12 from "@/assets/images/card-12.webp";

// 5 Landscape Visiting Cards (1.67:1 aspect ratio), fanned out symmetrically so they don't hide much
const SHOWCASE_CARDS = [
  {
    id: "card-1",
    title: "Minimal Identity",
    image: card1,
    rotate: -7,
    y: 15,
    multiplier: -2, // Far left
    zIndex: 10,
    tag: {
      label: "@minimal",
      bgClass: "bg-accent-blue text-white",
    },
  },
  {
    id: "card-3",
    title: "Architect Clean Card",
    image: card12,
    rotate: -2.5,
    y: 3,
    multiplier: -1, // Mid left
    zIndex: 20,
    tag: {
      label: "@architect",
      bgClass: "bg-[#2563eb] text-white",
    },
  },
  {
    id: "card-6",
    title: "Urban Roast Cafe",
    image: card6,
    rotate: 0,
    y: -2,
    multiplier: 0, // Center focal card
    zIndex: 30,
    tag: {
      label: "@craft",
      bgClass: "bg-swatch-coral text-white",
    },
  },
  {
    id: "card-8",
    title: "Craftsman Woodworks",
    image: card7,
    rotate: 3.5,
    y: 3,
    multiplier: 1, // Mid right
    zIndex: 40,
    tag: {
      label: "@masterpiece",
      bgClass: "bg-[#ea580c] text-white",
    },
  },
  {
    id: "card-11",
    title: "Nova Horizon Studio",
    image: card8,
    rotate: 9,
    y: 25,
    multiplier: 2, // Far right
    zIndex: 50,
    tag: {
      label: "@studio",
      bgClass: "bg-[#23946E] text-white",
    },
  },
];

export function Hero1Cards() {
  const [scope, animate] = useAnimate();
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    // Generous landscape spacing so each card remains clearly visible without excessive overlap
    const getSpacing = () => {
      if (typeof window === "undefined") return 145;
      const w = window.innerWidth;
      if (w >= 1024) return 155; // Desktop: cards spread broadly
      if (w >= 768) return 120; // Tablet landscape
      if (w >= 640) return 92; // Tablet portrait
      return 50; // Mobile: clean fit within 360px-390px screens
    };

    const runSequence = async () => {
      // 0. Ensure initial hidden state
      animate(
        ".showcase-card",
        {
          x: 0,
          y: 200,
          rotate: 0,
          scale: 0.9,
          opacity: 0,
        },
        { duration: 0 }
      );

      // DOM ready pause
      await new Promise((r) => setTimeout(r, 60));
      if (!isMounted) return;

      // Phase 1: All 5 landscape cards rise together from the bottom to center
      await animate(
        ".showcase-card",
        {
          y: 0,
          rotate: 0,
          scale: 0.96,
          opacity: 1,
        },
        {
          duration: 0.95,
          ease: [0.22, 1, 0.36, 1],
        }
      );

      if (!isMounted) return;

      const spacing = getSpacing();

      // Phase 2: Smooth outward fan dispersion from center
      const cardAnimations = SHOWCASE_CARDS.map((card) => {
        let staggerDelay = 0;
        if (card.multiplier > 0) {
          // Right cards go first
          staggerDelay = (card.multiplier - 1) * 0.06;
        } else if (card.multiplier === 0) {
          staggerDelay = 0.12;
        } else {
          // Left cards fan outward
          staggerDelay = 0.16 + (Math.abs(card.multiplier) - 1) * 0.06;
        }

        return animate(
          `#card-${card.id}`,
          {
            x: card.multiplier * spacing,
            y: card.y,
            rotate: card.rotate,
            scale: 1,
          },
          {
            duration: 1.25,
            delay: staggerDelay,
            ease: [0.16, 1, 0.3, 1],
          }
        );
      });

      await Promise.all(cardAnimations);
    };

    runSequence();

    return () => {
      isMounted = false;
    };
  }, [animate]);

  return (
    <div
      ref={scope}
      className="relative w-full max-w-5xl mx-auto flex items-center justify-center mt-0 sm:mt-20 select-none px-2 overflow-visible"
    >
      {/* 
        Landscape Stage Container:
        Height sized appropriately for 1.67:1 ratio cards 
      */}
      <div className="relative w-full h-[130px] sm:h-[175px] md:h-[205px] lg:h-[225px] flex items-center justify-center">
        {SHOWCASE_CARDS.map((card) => {
          const isHovered = hoveredCardId === card.id;

          return (
            <div
              key={card.id}
              id={`card-${card.id}`}
              onMouseEnter={() => setHoveredCardId(card.id)}
              onMouseLeave={() => setHoveredCardId(null)}
              style={{
                zIndex: isHovered ? 80 : card.zIndex,
                position: "absolute",
                opacity: 0,
              }}
              className="showcase-card cursor-pointer transform-gpu origin-center touch-manipulation"
            >
              <div className="relative">
                {/* Emerging tag pill on hover */}
                <m.div
                  initial={false}
                  animate={
                    isHovered
                      ? {
                        y: -36,
                        opacity: 1,
                        filter: "blur(0px)",
                        scale: 1,
                      }
                      : {
                        y: 28,
                        opacity: 0,
                        filter: "blur(8px)",
                        scale: 0.75,
                      }
                  }
                  transition={{
                    duration: 0.45,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="pointer-events-none absolute -top-2 left-1/2 -translate-x-1/2 z-0 whitespace-nowrap"
                >
                  <div
                    className="relative rounded-full px-3.5 py-1 text-xs sm:text-sm font-bold tracking-tight shadow-md flex items-center justify-center gap-1 ring-1 ring-white/20 bg-accent-orange backdrop-blur-2xl text-background"
                  >
                    <span>{card.tag.label}</span>
                  </div>
                </m.div>

                {/* 
                  Landscape Card Frame: 1.67:1 aspect ratio matching real visiting card dimensions
                  White bezel border with soft shadow
                */}
                <div className="relative z-10 w-[155px] sm:w-[220px] md:w-[260px] lg:w-[310px] h-[93px] sm:h-[132px] md:h-[156px] lg:h-[186px] rounded-xl sm:rounded-2xl overflow-hidden border border-black/10 bg-white shadow-md shadow-black/8 ring-1 ring-black/5">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    sizes="(max-width: 640px) 160px, (max-width: 1024px) 260px, 310px"
                    className="object-cover pointer-events-none"
                    priority
                  />

                  {/* Subtle surface gloss overlay */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-linear-to-b from-white/10 via-transparent to-black/5"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
