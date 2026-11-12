"use client";

import { useRef, useState } from "react";
import { m } from "motion/react";
import type { WorkCategory } from "@/types/work";

interface WorkTabsProps {
  categories: WorkCategory[];
  activeCategoryId: string;
  onSelectCategory: (id: string) => void;
}

const tabsContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.12,
    },
  },
};

const tabItemVariants = {
  hidden: {
    opacity: 0,
    y: 22,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export function WorkTabs({
  categories,
  activeCategoryId,
  onSelectCategory,
}: WorkTabsProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const hasDragged = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const [isGrabbed, setIsGrabbed] = useState(false);

  // Mouse Drag-to-Scroll handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    isDragging.current = true;
    hasDragged.current = false;
    setIsGrabbed(true);
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft.current = scrollRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDragging.current = false;
    setIsGrabbed(false);
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    setIsGrabbed(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !scrollRef.current) return;
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    if (Math.abs(walk) > 4) {
      hasDragged.current = true;
    }
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  // Horizontal wheel scroll support
  const handleWheel = (e: React.WheelEvent) => {
    if (!scrollRef.current) return;
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX) && Math.abs(e.deltaY) > 5) {
      scrollRef.current.scrollLeft += e.deltaY * 0.8;
    }
  };

  const handleTabClick = (id: string) => {
    if (hasDragged.current) {
      hasDragged.current = false;
      return;
    }
    onSelectCategory(id);
  };

  return (
    <div className="w-full flex justify-center mb-6 sm:mb-8 select-none">
      {/* Scrollable Container with mouse drag and grab cursor */}
      <div className="w-full sm:max-w-[85%] lg:max-w-[70%] overflow-hidden relative">
        <m.div
          ref={scrollRef}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-30px" }}
          variants={tabsContainerVariants}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onWheel={handleWheel}
          className={`flex items-center justify-start sm:justify-center gap-2 sm:gap-2.5 overflow-x-auto no-scrollbar py-2 px-4 scroll-smooth scrollbar-none cursor-grab ${
            isGrabbed ? "cursor-grabbing active:cursor-grabbing select-none" : ""
          }`}
        >
          {categories.map((cat) => {
            const isActive = cat.id === activeCategoryId;

            return (
              <m.button
                key={cat.id}
                type="button"
                variants={tabItemVariants}
                onClick={() => handleTabClick(cat.id)}
                aria-pressed={isActive}
                whileTap={{
                  scaleY: 0.94,
                  scaleX: 1.04,
                }}
                className={`group relative shrink-0 inline-flex items-center justify-center overflow-hidden rounded-full px-4 sm:px-5 py-2 text-xs sm:text-[13px] font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                  isActive
                    ? "bg-linear-to-b from-[#2d2c31] via-[#201f23] to-[#161518] text-white ring-1 ring-white/15 ring-offset-1 ring-offset-background shadow-md shadow-black/30 shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),inset_0_-1px_1.5px_rgba(0,0,0,0.5)] font-semibold scale-[1.02]"
                    : "bg-[#F4F3F1] text-foreground/60 border border-black/5 hover:bg-neutral-200/80 hover:text-foreground hover:scale-[1.01]"
                }`}
              >
                <span className="relative z-10 pointer-events-none">{cat.shortLabel}</span>

                {/* 3 shimmer streaks in a row */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 overflow-hidden opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                >
                  <span
                    className={`absolute inset-y-0 w-8 -skew-x-20 ${
                      isActive
                        ? "bg-linear-to-r from-transparent via-white/40 to-transparent"
                        : "bg-linear-to-r from-transparent via-black/10 to-transparent"
                    } translate-x-[-150%] transition-transform duration-700 ease-out group-hover:translate-x-[350%]`}
                  />
                  <span
                    className={`absolute inset-y-0 w-4 -skew-x-20 ${
                      isActive
                        ? "bg-linear-to-r from-transparent via-white/60 to-transparent"
                        : "bg-linear-to-r from-transparent via-black/15 to-transparent"
                    } translate-x-[-150%] transition-transform duration-700 delay-75 ease-out group-hover:translate-x-[350%]`}
                  />
                  <span
                    className={`absolute inset-y-0 w-6 -skew-x-20 ${
                      isActive
                        ? "bg-linear-to-r from-transparent via-white/30 to-transparent"
                        : "bg-linear-to-r from-transparent via-black/10 to-transparent"
                    } translate-x-[-150%] transition-transform duration-700 delay-150 ease-out group-hover:translate-x-[350%]`}
                  />
                </div>
              </m.button>
            );
          })}
        </m.div>
      </div>
    </div>
  );
}
