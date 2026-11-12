"use client";

import { TESTIMONIALS_DATA, Testimonial } from "@/config/testimonials-data";
import { IconStarFilled } from "@tabler/icons-react";

interface TestimonialsMarqueeProps {
  className?: string;
}

export function TestimonialsMarquee({ className = "" }: TestimonialsMarqueeProps) {
  // Duplicate array for seamless infinite marquee loop
  const marqueeItems = [...TESTIMONIALS_DATA, ...TESTIMONIALS_DATA];

  return (
    <div className={`relative w-full overflow-hidden select-none py-6 ${className}`}>


      {/* Marquee Track: Scrolls left to right; on hover, speed slows down */}
      <div className="marquee-wrapper flex w-max gap-6 sm:gap-8 group">
        <div className="marquee-track flex gap-6 sm:gap-8 group-hover:[animation-play-state:paused]">
          {marqueeItems.map((item, idx) => (
            <TestimonialCard key={`${item.id}-${idx}`} item={item} index={idx} />
          ))}
        </div>
        <div className="marquee-track flex gap-6 sm:gap-8 group-hover:[animation-play-state:paused]" aria-hidden="true">
          {marqueeItems.map((item, idx) => (
            <TestimonialCard key={`${item.id}-dup-${idx}`} item={item} index={idx} />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marqueeLeftToRight {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }
        .marquee-track {
          animation: marqueeLeftToRight 38s linear infinite;
        }
        .marquee-wrapper:hover .marquee-track {
          animation-duration: 75s;
          animation-play-state: running;
        }
      `}</style>
    </div>
  );
}

function TestimonialCard({ item, index }: { item: Testimonial; index: number }) {
  // Alternating subtle rotation on hover
  const rotateClass = index % 2 === 0 ? "hover:rotate-1.5" : "hover:-rotate-1.5";

  return (
    <div
      className={`
        relative w-[300px] sm:w-[380px] md:w-[420px] flex-shrink-0
        bg-[#FDFBF7] text-foreground
        rounded-[30px] sm:rounded-[34px]
        p-6 sm:p-8
     
        border border-white/60
        transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]
       
        ${rotateClass}
      `}
    >
      {/* Top row: Star rating + Tag */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-1 text-amber-500">
          {[...Array(item.rating)].map((_, i) => (
            <IconStarFilled key={i} size={15} />
          ))}
        </div>

        {item.tag && (
          <span className="font-display text-xs font-bold text-accent-orange uppercase tracking-wider">
            {item.tag}
          </span>
        )}
      </div>

      {/* Review Text */}
      <p className="font-body text-xs sm:text-sm text-foreground/85 leading-relaxed mb-6 line-clamp-4">
        &ldquo;{item.content}&rdquo;
      </p>

      {/* Author Row */}
      <div className="flex items-center gap-3 pt-4 border-t border-black/[0.06]">
        <div className="w-10 h-10 rounded-full bg-accent-orange/15 text-accent-orange font-display font-bold text-xs sm:text-sm flex items-center justify-center flex-shrink-0 shadow-xs">
          {item.initials}
        </div>

        <div className="overflow-hidden">
          <h4 className="font-display font-bold text-xs sm:text-sm text-foreground truncate">
            {item.name}
          </h4>
          <p className="text-[11px] text-foreground-subtle truncate">
            {item.role} • {item.company}
          </p>
        </div>
      </div>
    </div>
  );
}

