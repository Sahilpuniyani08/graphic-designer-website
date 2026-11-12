"use client";

import { useState } from "react";
import Image, { type StaticImageData } from "next/image";
import { m } from "motion/react";
import { IconArrowUpRight } from "@tabler/icons-react";
import type { WorkProject } from "@/types/work";

export interface PortfolioCardProps {
  project: WorkProject;
  className?: string;
  onClick?: () => void;
  onBoxClick?: (e: React.MouseEvent) => void;
}

export function PortfolioCard({
  project,
  className = "",
  onClick,
  onBoxClick,
}: PortfolioCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [imageError, setImageError] = useState(false);

  const hasImage = Boolean(project.image && !imageError);
  const isStaticImage = typeof project.image === "object" && project.image !== null;
  const imageWidth = isStaticImage ? (project.image as StaticImageData).width : 1064;
  const imageHeight = isStaticImage ? (project.image as StaticImageData).height : 1295;

  const handleServicesClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onBoxClick) {
      onBoxClick(e);
      return;
    }
    const el = document.getElementById("services");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.hash = "#services";
    }
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      className={`group relative w-full cursor-pointer select-none touch-manipulation ${className}`}
    >
      {/* 
        Outer Card Wrapper:
        - Natural masonry width/height driven by image aspect ratio
        - p-1 / p-1.5 white frame with rich soft shadow matching uploaded reference image
        - Rounded-2xl outer frame with rounded-xl inner media container
        - Wrapper does NOT scale on hover 
      */}
      <div className="relative w-full p-1 sm:p-1.5 bg-white rounded-2xl shadow-[0_8px_26px_rgba(0,0,0,0.08)] ring-1 ring-black/10 transition-all duration-300 group-hover:shadow-[0_16px_36px_rgba(0,0,0,0.13)]">
        {/* Media Container: Rounded-xl inner frame, clips the scaling image */}
        <div className="relative w-full overflow-hidden rounded-xl bg-[#F4F3F1]">
          {hasImage ? (
            <m.div
              animate={{
                scale: isHovered ? 1.08 : 1,
              }}
              transition={{
                duration: 0.45,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative w-full origin-center"
            >
              <Image
                src={project.image!}
                alt={project.title}
                width={imageWidth}
                height={imageHeight}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="w-full h-auto object-cover block"
                onError={() => setImageError(true)}
              />
            </m.div>
          ) : (
            <div className="relative w-full h-[260px] sm:h-[320px] bg-neutral-200/50 flex items-center justify-center">
              <span className="font-heading text-xs text-foreground-subtle tracking-wider uppercase">
                {project.category}
              </span>
            </div>
          )}

          {/* Gradual gradient overlay using vibrant accent-orange, fading in on hover */}
          <div
            aria-hidden="true"
            className={`pointer-events-none absolute inset-x-0 bottom-0 z-20 h-28 bg-linear-to-t from-20% from-accent-orange/80 via-40% via-accent-lime/40  to-50% to-transparent  transition-opacity duration-300 ease-out ${isHovered ? "opacity-100" : "opacity-0"
              }`}
          />

          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-30 flex items-end justify-between gap-2 p-3 sm:p-4">

            <m.div
              initial={false}
              animate={{
                x: isHovered ? 0 : -10,
                opacity: isHovered ? 1 : 0,
              }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex-1 min-w-0"
            >
              <h3 className="font-manrope text-xs sm:text-sm font-semibold text-background drop-shadow-sm truncate">
                {project.title}
              </h3>

            </m.div>

            {/* Box from right: Styled in button-like orange theme */}
            <m.div
              initial={false}
              animate={{
                x: isHovered ? 0 : 10,
                opacity: isHovered ? 1 : 0,
              }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="pointer-events-auto shrink-0"
            >
              <button
                type="button"
                onClick={handleServicesClick}
                aria-label={`View services for ${project.title}`}
                className="flex size-8  sm:size-9 items-center justify-center rounded-full bg-linear-to-b from-accent-orange/90 via-accent-orange to-accent-orange text-white  ring-2 ring-white shadow-md transition-transform duration-150 hover:scale-110 active:scale-95  rotate-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring cursor-pointer "
              >
                <IconArrowUpRight size={17} stroke={2.5} />
              </button>
            </m.div>
          </div>
        </div>
      </div>
    </div>
  );
}
