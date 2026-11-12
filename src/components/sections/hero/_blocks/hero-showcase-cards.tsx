"use client";

import { useState } from "react";
import Image from "next/image";
import { m } from "motion/react";
import { StaticImageData } from "next/image";
import { useHeroView } from "@/components/providers/hero-view-provider";
import card3 from "@/assets/images/card-3.webp";
import card1 from "@/assets/images/card-1.webp";
import billBook1 from "@/assets/images/billbook-1.webp";
import logo2 from "@/assets/images/logo-2.webp";
import flex1 from "@/assets/images/flex-1.webp";

export interface ShowcaseCardData {
  id: string;
  title: string;
  category: string;
  color: string;
  image?: StaticImageData;
  scattered: {
    x: number;
    y: number;
    rotate: number;
    zIndex: number;
  };
  aligned: {
    x: number;
    y: number;
    rotate: number;
    zIndex: number;
  };
}

const CARDS: ShowcaseCardData[] = [
  {
    id: "putty",
    title: "Visiting card",
    category: "Publications",
    color: "var(--accent-pink)", // #B7B6AC
    image: card3, // Placeholder for user image
    scattered: { x: -300, y: 120, rotate: -14, zIndex: 5 },
    aligned: { x: -330, y: 85, rotate: 0, zIndex: 2 },
  },
  {
    id: "wine",
    title: "Bill book",
    category: "Visual Identity",
    color: "var(--accent-red)", // #982845
    image: billBook1,
    scattered: { x: -150, y: 35, rotate: 8, zIndex: 4 },
    aligned: { x: -165, y: 42, rotate: 0, zIndex: 4 },
  },
  {
    id: "purple",
    title: "Visiting Card",
    category: "Studio Systems",
    color: "var(--accent-blue)", // #792686
    image: card1,
    scattered: { x: 30, y: -10, rotate: -7, zIndex: 3 },
    aligned: { x: 0, y: 0, rotate: 0, zIndex: 6 },
  },
  {
    id: "ocean",
    title: "Logo design",
    category: "Interactive",
    color: "var(--accent-lime)", // #2B6B9C
    image: logo2,
    scattered: { x: 200, y: 12, rotate: 3, zIndex: 2 },
    aligned: { x: 165, y: 42, rotate: 0, zIndex: 4 },
  },
  // {
  //   id: "emerald",
  //   title: "flex design",
  //   category: "Collateral",
  //   color: "var(--accent-violet)", // #22916F
  //   image: flex1,
  //   scattered: { x: 260, y: 100, rotate: 20, zIndex: 4 },
  //   aligned: { x: 330, y: 85, rotate: 0, zIndex: 2 },
  // },
];

const CARD_WIDTH = 280;
const CARD_HEIGHT = 400;

export function HeroShowcaseCards() {
  const { cardLayout } = useHeroView();
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const isAligned = cardLayout === "aligned";

  const handleImageError = (id: string) => {
    setFailedImages((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <div className="absolute -bottom-5 md:-bottom-30  w-full flex items-end justify-center select-none overflow-visible">
      {/* Stage Container: fixed height so bottom of cards overflows below hero fold */}
      <div className="relative  w-full max-w-5xl h-85 sm:h-95 md:h-105 flex items-end justify-center">
        {/* Mobile scaling wrapper: strictly 100% on desktop (md:scale-100), smoothly scaled on mobile so desktop manual positions are NEVER altered */}
        <div className="relative w-full h-full flex items-end justify-center origin-bottom scale-[0.62] sm:scale-[0.82] md:scale-100 transition-transform duration-300">
          {CARDS.map((card, idx) => {
            const config = isAligned ? card.aligned : card.scattered;
            const isHovered = hoveredCardId === card.id;
            const hasImage = Boolean(card.image && !failedImages[card.id]);

            return (
              <m.div
                key={card.id}
                initial={{
                  opacity: 0,
                  y: 280 + idx * 25,
                  x: config.x,
                  rotate: config.rotate,
                }}
                animate={{
                  opacity: 1,
                  x: config.x,
                  y: config.y,
                  rotate: isHovered ? (isAligned ? 0 : config.rotate) : config.rotate,
                  zIndex: isHovered ? 20 : config.zIndex,
                }}
                transition={{
                  type: "spring",
                  stiffness: 95,
                  damping: 18,
                  mass: 0.9,
                }}
                onMouseEnter={() => setHoveredCardId(card.id)}
                onMouseLeave={() => setHoveredCardId(null)}
                className="absolute bottom-0 cursor-pointer touch-manipulation group"
                style={{
                  width: `${CARD_WIDTH}px`,
                  height: `${CARD_HEIGHT}px`,
                  left: "50%",
                  marginLeft: `-${CARD_WIDTH / 2}px`,
                }}
              >
                {/* Outer Card Wrapper: Clean background container with subtle shadow & border */}
                <div className="relative w-full h-full rounded-lg bg-linear-to-b from-stone-50 to-white shadow-sm transition-shadow duration-normal group-hover:shadow-card-elevated overflow-hidden border border-black/5 ">
                  {/* Inside Top Space: Title revealed when inner image moves down on hover */}
                  <div
                    className={`absolute top-3.5 inset-x-0 z-0 flex flex-col items-center px-4 text-center transition-all duration-300 ${isHovered
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 -translate-y-2 pointer-events-none"
                      }`}
                  >
                    <span className="font-body text-sm font-bold text-foreground tracking-tight leading-tight">
                      {card.title}
                    </span>
                  </div>

                  <m.div
                    initial={false}
                    animate={{
                      scale: isHovered ? 0.92 : 1,
                      y: isHovered ? 44 : 0,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 140,
                      damping: 20,
                    }}
                    className="relative z-10 w-full h-full rounded-lg overflow-hidden origin-top"
                    style={{
                      backgroundColor: card.color,
                    }}
                  >
                    {/* User image support with fallback to solid swatch on error or empty */}
                    {hasImage ? (
                      <Image
                        src={card.image!}
                        alt={card.title}
                        fill
                        sizes="280px"
                        className="object-cover"
                        onError={() => handleImageError(card.id)}
                      />
                    ) : (
                      /* Default Solid Swatch matching Reference with Subtle Specular Highlight */
                      <div
                        aria-hidden="true"
                        className="absolute inset-0 bg-linear-to-b from-white/15 to-transparent pointer-events-none"
                      />
                    )}
                  </m.div>
                </div>
              </m.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
