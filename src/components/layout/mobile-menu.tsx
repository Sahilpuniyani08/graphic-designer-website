"use client";

import { useEffect } from "react";
import Link from "next/link";
import { m, AnimatePresence } from "motion/react";
import { IconArrowRight } from "@tabler/icons-react";
import { siteConfig } from "@/config/site";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Blurred Backdrop – clicking anywhere outside closes the menu */}
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
            aria-hidden="true"
          />

          {/* 200px Top-Right Box Menu – follows hero section card design */}
          <m.div
            role="dialog"
            aria-modal="true"
            aria-label="Navigation Menu"
            initial={{ opacity: 0, scale: 0.85, y: -8, x: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: -8, x: 8 }}
            transition={{
              type: "spring",
              stiffness: 420,
              damping: 28,
              mass: 0.7,
            }}
            style={{ transformOrigin: "top right" }}
            className="fixed top-16 right-4 sm:right-8 z-50 w-[200px] overflow-hidden rounded-2xl border border-black/8 bg-linear-to-b from-stone-50 to-white p-2 text-foreground shadow-card-elevated backdrop-blur-xl"
          >
            <nav className="flex flex-col gap-0.5">
              {siteConfig.mainNav.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  onClick={onClose}
                  className="group flex items-center justify-between rounded-xl px-3 py-2 text-sm font-medium text-foreground transition-colors duration-200 hover:bg-black/5 hover:text-accent-violet focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  {/* On hover, text moves slightly right towards the arrow */}
                  <span className="transition-transform duration-200 ease-out group-hover:translate-x-1">
                    {link.title}
                  </span>
                  {/* On hover, arrow moves slightly left towards the text */}
                  <IconArrowRight
                    size={15}
                    stroke={2}
                    className="text-foreground-subtle transition-all duration-200 ease-out group-hover:text-accent-violet group-hover:-translate-x-1"
                  />
                </Link>
              ))}
            </nav>
          </m.div>
        </>
      )}
    </AnimatePresence>
  );
}
