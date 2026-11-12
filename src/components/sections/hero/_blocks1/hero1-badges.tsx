"use client";

import { m } from "motion/react";

interface BadgeItem {
  id: string;
  stat: string;
  label: string;
  bgClass: string;
  positionClass: string;
  rotation: number;
}

const BADGES: BadgeItem[] = [
  {
    id: "badge-creatives",
    stat: "100+",
    label: "Static Creatives",
    bgClass: "bg-accent-blue text-white",
    positionClass: "top-[32%] sm:top-[27%] lg:top-[30%] left-[2%] sm:left-[6%] lg:left-[10%] -rotate-6",
    rotation: -6,
  },
  {
    id: "badge-clients",
    stat: "30+",
    label: "Regular Clients",
    bgClass: "bg-[#23946E] text-white",
    positionClass: "top-[32%] sm:top-[27%] lg:top-[30%] right-[2%] sm:right-[6%] lg:right-[10%] rotate-6",
    rotation: 6,
  },
  {
    id: "badge-visiting",
    stat: "Visiting Cards",
    label: "Designs",
    bgClass: "bg-accent-violet text-white",
    positionClass: "bottom-[28%] sm:bottom-[27%] lg:bottom-[12%] left-[3%] sm:left-[7%] lg:left-[12%] rotate-4",
    rotation: 4,
  },
  {
    id: "badge-billbooks",
    stat: "Logo Designs",
    label: "Designs",
    bgClass: "bg-swatch-coral text-white",
    positionClass: "bottom-[28%] sm:bottom-[27%] lg:bottom-[12%] right-[3%] sm:right-[7%] lg:right-[12%] -rotate-5",
    rotation: -5,
  },
];

function ShimmerBadge({ badge }: { badge: BadgeItem }) {
  return (
    <m.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 2.35, ease: [0.16, 1, 0.3, 1] }}
      style={{ transform: `rotate(${badge.rotation}deg)` }}
      className={`absolute ${badge.positionClass}   z-30 select-none cursor-pointer touch-manipulation pointer-events-auto scale-[0.8] sm:scale-95 lg:scale-100 origin-center`}
    >
      <div
        className={`group relative overflow-hidden text-foreground `}
      >
        {/* <div
        className={`group relative overflow-hidden rounded-full bg-accent-lime px-3.5 sm:px-5 py-1 sm:py-2 ring-2 ring-white shadow-md shadow-black/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.65),inset_0_-1px_1.5px_rgba(0,0,0,0.3)] transition-transform duration-200 hover:scale-105`}
      > */}
        {/* Badge Content */}
        <div className="relative z-10 flex flex-col items-center whitespace-nowrap  md:text-base font-bold tracking-tight">
          <span className="  md:text-xl bg-linear-to-br from-accent-orange to-accent-orange bg-clip-text text-transparent drop-shadow-[0_3px_8px_rgba(204,216,40,0.25)] ">{badge.stat}</span>
          <span className="font-normal opacity-90 text-sm ">{badge.label}</span>
        </div>



      </div>
    </m.div>
  );
}

export function Hero1Badges() {
  return (
    <div aria-hidden="false" className="pointer-events-none absolute inset-0 z-30 overflow-hidden">
      {BADGES.map((badge) => (
        <ShimmerBadge key={badge.id} badge={badge} />
      ))}
    </div>
  );
}
