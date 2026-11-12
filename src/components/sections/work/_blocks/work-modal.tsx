"use client";

import { useEffect, useState, useCallback } from "react";
import { createPortal } from "react-dom";
import Image, { type StaticImageData } from "next/image";
import { m, AnimatePresence } from "motion/react";
import { IconX, IconZoomIn, IconZoomOut, IconSparkles } from "@tabler/icons-react";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { useLockBodyScroll } from "@/hooks/use-lock-body-scroll";
import type { WorkProject } from "@/types/work";

interface WorkModalProps {
  project: WorkProject | null;
  onClose: () => void;
}

export function WorkModal({ project, onClose }: WorkModalProps) {
  const [mounted, setMounted] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Universal background scroll lock (including Lenis)
  useLockBodyScroll(!!project);

  // Reset zoom when project changes
  useEffect(() => {
    setIsZoomed(false);
  }, [project?.id]);

  // ESC key to close modal
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (project) {
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [project, handleKeyDown]);

  const isStaticImage = typeof project?.image === "object" && project?.image !== null;
  const imageWidth = isStaticImage ? (project.image as StaticImageData).width : 1200;
  const imageHeight = isStaticImage ? (project.image as StaticImageData).height : 1200;

  const handleServicesInquiry = () => {
    onClose();
    setTimeout(() => {
      const el = document.getElementById("services");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      } else {
        window.location.hash = "#services";
      }
    }, 150);
  };

  if (!mounted) return null;

  const modalContent = (
    <AnimatePresence>
      {project && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-project-title"
          className="fixed inset-0 z-[99999] isolate flex items-center justify-center p-3 sm:p-5 md:p-8 select-none"
        >
          {/* Backdrop */}
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-0"
            aria-hidden="true"
          />

          {/* Modal Container */}
          <m.div
            data-lenis-prevent
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 12 }}
            transition={{
              duration: 0.28,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-[28px] sm:rounded-[32px] bg-background border border-black/10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.3)] flex flex-col p-2.5 sm:p-3.5 select-none"
          >
            {/* Top Bar: Category Tag & Controls */}
            <div className="flex items-center justify-between gap-3 px-3 py-2 sm:px-4 sm:py-2.5">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-accent-orange/10 text-accent-orange border border-accent-orange/25">
                  {project.subCategory || project.category}
                </span>
                {project.year && (
                  <span className="text-xs text-foreground-subtle hidden sm:inline-block">
                    {project.year}
                  </span>
                )}
              </div>

              {/* Top Controls: Zoom toggle & Close button */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setIsZoomed((prev) => !prev)}
                  aria-label={isZoomed ? "Zoom out preview" : "Zoom in preview"}
                  className="flex size-8 sm:size-9 items-center justify-center rounded-full bg-white text-foreground ring-1 ring-black/10 shadow-sm transition-transform duration-150 hover:scale-105 active:scale-95 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  {isZoomed ? <IconZoomOut size={17} stroke={2} /> : <IconZoomIn size={17} stroke={2} />}
                </button>

                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close project preview"
                  className="flex size-8 sm:size-9 items-center justify-center rounded-full bg-white text-foreground ring-1 ring-black/10 shadow-sm transition-transform duration-150 hover:scale-105 active:scale-95 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <IconX size={17} stroke={2} />
                </button>
              </div>
            </div>

            {/* Showcase Stage: Warm tactile canvas with subtle grid and ambient glow */}
            <div className="relative w-full flex-1 overflow-auto rounded-2xl bg-[#F4F3F1] border border-black/5 flex items-center justify-center p-3 sm:p-6 min-h-[300px] max-h-[64vh] select-none">
              {/* Subtle grid pattern overlay */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-size-[24px_24px] opacity-40 mask-radial-[70%_70%] mask-radial-at-center"
              />

              {/* Ambient Radial Aura */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[460px] h-[240px] sm:h-[340px] rounded-full bg-linear-to-r from-accent-orange/15 via-accent-lime/10 to-accent-blue/15 blur-[100px]"
              />

              {/* Media image preview */}
              {project.image ? (
                <div
                  onClick={() => setIsZoomed((prev) => !prev)}
                  className={`relative z-10 transition-transform duration-300 ease-out flex items-center justify-center ${
                    isZoomed ? "scale-150 sm:scale-175 cursor-zoom-out" : "scale-100 cursor-zoom-in"
                  }`}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={imageWidth}
                    height={imageHeight}
                    sizes="(max-width: 768px) 95vw, 1000px"
                    className="max-h-[58vh] w-auto max-w-full object-contain rounded-xl drop-shadow-xl"
                    priority
                  />
                </div>
              ) : null}
            </div>

            {/* Bottom Bar: Title, Tags & Theme-matched Shimmer Button in row */}
            <div className="relative z-20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 px-4 py-3 sm:px-5 sm:py-3.5 bg-background">
              <div className="flex-1 min-w-0">
                <h2
                  id="modal-project-title"
                  className="font-manrope text-base sm:text-lg md:text-xl font-bold text-foreground tracking-tight truncate"
                >
                  {project.title}
                </h2>
                {project.tag && (
                  <p className="font-body text-xs sm:text-sm text-foreground-subtle truncate mt-0.5">
                    {project.tag}
                  </p>
                )}
              </div>

              {/* Action Button: Styled with ShimmerButton in a clean row */}
              <div className="w-full sm:w-auto shrink-0">
                <ShimmerButton
                  type="button"
                  onClick={handleServicesInquiry}
                  variant="orange"
                  size="sm"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-6 py-2.5 font-semibold text-xs sm:text-sm rounded-full"
                >
                  <IconSparkles size={16} stroke={2.2} className="flex-shrink-0" />
                  <span>Order Similar Design</span>
                </ShimmerButton>
              </div>
            </div>
          </m.div>
        </div>
      )}
    </AnimatePresence>
  );

  return createPortal(modalContent, document.body);
}
