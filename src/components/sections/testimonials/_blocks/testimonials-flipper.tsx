"use client";

import { useState, useEffect, useCallback } from "react";
import { m, AnimatePresence } from "motion/react";
import { TESTIMONIALS_DATA } from "@/config/testimonials-data";
import { IconStarFilled, IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

export function TestimonialsFlipper() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const total = TESTIMONIALS_DATA.length;

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Auto-flip every 2.5 seconds (unless hovered)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      handleNext();
    }, 2800);
    return () => clearInterval(interval);
  }, [isPaused, handleNext]);

  const currentItem = TESTIMONIALS_DATA[currentIndex];

  return (
    <div
      className="relative w-full max-w-xl mx-auto flex flex-col items-center select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >

      <div className="relative w-full sm:max-w-sm min-h-[260px] sm:min-h-[240px]  flex items-center justify-center">
        <AnimatePresence mode="wait">
          <m.div
            key={currentItem.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="w-full bg-background/90 backdrop-blur-sm text-foreground rounded-[30px] sm:rounded-[36px]  p-7 sm:p-9 shadow-2xl border border-white/60"
          >



            {/* Testimonial Quote */}
            <p className="font-body text-sm sm:text-base text-foreground/90 leading-relaxed mb-6">
              &ldquo;{currentItem.content}&rdquo;
            </p>

            {/* Author Footer */}
            <div className="flex items-center justify-between pt-4 border-t border-black/[0.06]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent-orange/15 text-accent-orange font-display font-bold text-sm flex items-center justify-center flex-shrink-0">
                  {currentItem.initials}
                </div>

                <div>
                  <h4 className="font-display font-bold text-sm sm:text-base text-foreground leading-snug">
                    {currentItem.name}
                  </h4>

                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(currentItem.rating)].map((_, i) => (
                      <IconStarFilled key={i} size={16} />
                    ))}
                  </div>
                </div>

              </div>

              {/* Navigation Arrows */}
              {/* <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous review"
                  className="w-8 h-8 rounded-full bg-surface/80 hover:bg-surface text-foreground flex items-center justify-center transition-colors"
                >
                  <IconChevronLeft size={16} stroke={2.5} />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next review"
                  className="w-8 h-8 rounded-full bg-surface/80 hover:bg-surface text-foreground flex items-center justify-center transition-colors"
                >
                  <IconChevronRight size={16} stroke={2.5} />
                </button>
              </div> */}
            </div>
          </m.div>
        </AnimatePresence>
      </div>

      {/* Progress Dots */}
      {/* <div className="flex items-center gap-2 mt-6">
        {TESTIMONIALS_DATA.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setCurrentIndex(i)}
            aria-label={`Jump to review ${i + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              currentIndex === i ? "w-6 bg-white" : "w-2 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div> */}
    </div>
  );
}

