"use client";

import { m } from "motion/react";
import Image from "next/image";
import { Service } from "@/types/services";

interface ServiceCardProps {
  service: Service;
  index: number;
  onClick: () => void;
}

export function ServiceCard({ service, index, onClick }: ServiceCardProps) {
  const [imgLeft, imgCenter, imgRight] = service.cardImages;

  return (
    <m.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.55,
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group relative w-full "
    >
      <button
        type="button"
        onClick={onClick}
        aria-label={`View details and pricing for ${service.title}`}
        className="
          relative w-full text-left
          flex flex-col justify-between
          pt-5 px-5 sm:pt-6 sm:px-6 pb-0
          bg-linear-to-r from-accent-orange/10 to-accent-lime/15 mask-radial-[45%_35%] mask-radial-at-center hover:shadow-md hover:bg-surgace/30
          rounded-[30px] sm:rounded-[34px]
          border-0 outline-none
          cursor-pointer
          overflow-hidden
          transition-colors duration-300
          min-h-[220px] sm:min-h-[280px]
         backdrop-blur-3xl 
        "
      >
        {/* Top Header Row: Heading on left, Pill on right */}
        <div className="relative z-10 flex items-center justify-between w-full select-none">
          <h3 className="font-display font-medium text-base sm:text-lg text-foreground tracking-tight">
            {service.title}
          </h3>

          {service.tag && (
            <span className="px-2.5 py-0.5 rounded-full bg-background ring ring-accent-orange/20  text-[11px] font-medium tracking-wide text-accent-orange">
              {service.tag}
            </span>
          )}
        </div>

        {/* Bookshelf Mockups: Placed at the bottom in negative space */}
        <div className="relative w-full h-44 sm:h-52 -bottom-8 mt-4 flex items-end justify-center select-none overflow-hidden">
          {/* Left Layered Mockup */}
          {imgLeft && (
            <div
              className="
                absolute bottom-0 left-1/2 -translate-x-[72%]
                w-34  aspect-[4/3]
                rounded-xl bg-white p-1
                shadow-md
                -rotate-7 origin-bottom-left
                transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
                group-hover:-translate-x-[82%] group-hover:-rotate-11 group-hover:-translate-y-1.5
                z-10 overflow-hidden
              "
            >
              <div className="relative w-full h-full rounded-lg overflow-hidden bg-surface">
                <Image
                  src={imgLeft}
                  alt={`${service.title} preview left`}
                  fill
                  sizes="(max-width: 640px) 120px, 160px"
                  className="object-cover"
                />
              </div>
            </div>
          )}

          {/* Right Layered Mockup */}
          {imgRight && (
            <div
              className="
                absolute bottom-0 left-1/2 -translate-x-[28%]
                w-34 aspect-[4/3]
                rounded-xl bg-white p-1
                shadow-md
                rotate-7 origin-bottom-right
                transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
                group-hover:-translate-x-[18%] group-hover:rotate-11 group-hover:-translate-y-1.5
                z-10 overflow-hidden
              "
            >
              <div className="relative w-full h-full rounded-lg overflow-hidden bg-surface">
                <Image
                  src={imgRight}
                  alt={`${service.title} preview right`}
                  fill
                  sizes="(max-width: 640px) 120px, 160px"
                  className="object-cover"
                />
              </div>
            </div>
          )}

          {/* Center Layered Mockup (Front & Upright) */}
          {imgCenter && (
            <div
              className="
                relative bottom-0
                w-44  aspect-[4/3]
                rounded-2xl bg-white p-1.5
                shadow-[0_10px_24px_rgba(0,0,0,0.12)]
                transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
                group-hover:-translate-y-2.5 group-hover:scale-[1.03]
                group-hover:shadow-[0_16px_36px_rgba(0,0,0,0.16)]
                z-20 overflow-hidden
              "
            >
              <div className="relative w-full h-full rounded-xl overflow-hidden bg-surface">
                <Image
                  src={imgCenter}
                  alt={`${service.title} main preview`}
                  fill
                  sizes="(max-width: 640px) 160px, 200px"
                  className="object-cover"
                />
              </div>
            </div>
          )}
        </div>

        <div className="absolute h-30 w-30 rounded-full bg-accent-orange/40 -bottom-15 -right-15 blur-sm -z-20 group-hover:-bottom-10 group-hover:-right-10 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />

      </button>
    </m.div>
  );
}
