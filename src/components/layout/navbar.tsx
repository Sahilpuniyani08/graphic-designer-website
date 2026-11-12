"use client";

import { useState, useEffect, useRef } from "react";
import { m, LayoutGroup } from "motion/react";
import {
  IconMenu2,
  IconLayoutCards,
  IconLayoutRows,
} from "@tabler/icons-react";
import { useHeroView } from "@/components/providers/hero-view-provider";
import { MobileMenu } from "./mobile-menu";
import { BrandLogo } from "./brand-logo";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const { cardLayout, setCardLayout } = useHeroView();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Always visible near top of page
      if (currentScrollY < 40) {
        setIsVisible(true);
        lastScrollY.current = currentScrollY;
        return;
      }

      // Scrolling down -> hide navbar upwards
      if (currentScrollY > lastScrollY.current + 8) {
        setIsVisible(false);
      }
      // Scrolling up -> show navbar downwards
      else if (currentScrollY < lastScrollY.current - 8) {
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <m.header
        initial={{ y: -48, opacity: 0 }}
        animate={{
          y: isVisible || isMenuOpen ? 0 : -88,
          opacity: isVisible || isMenuOpen ? 1 : 0,
        }}
        transition={{
          duration: 0.35,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="fixed top-0 left-0 right-0 z-30 w-full"
      >
        <nav
          aria-label="Main Navigation"
          className="relative flex w-full items-center justify-between px-4 py-3 sm:px-8 "
        >
          {/* Subtle Top Gradient Accent Mask */}
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="pointer-events-none absolute inset-0 -z-30 bg-linear-to-r from-accent-red/20 to-accent-lime/20 mask-auto mask-b-from-30% backdrop-blur-sm"
          />

          {/* Left: Boxy Toggle with both icons inside; active background glides smoothly */}
          <LayoutGroup id="navbar-view-toggle">
            <div className="relative z-20 flex items-center rounded-md bg-surface/10 ring ring-accent-red/10 p-1">
              {/* Active Sliding Indicator Pill */}
              <m.div
                layoutId="nav-active-pill"
                className="pointer-events-none absolute top-1 bottom-1 left-1 w-8 rounded-sm bg-accent-red/30 shadow-md"
                animate={{
                  x: cardLayout === "scattered" ? 0 : 32,
                }}
                transition={{
                  type: "spring",
                  stiffness: 420,
                  damping: 30,
                  mass: 0.75,
                }}
              />

              {/* Scattered Layout Icon */}
              <button
                type="button"
                onClick={() => setCardLayout("scattered")}
                aria-label="Scatter cards view"
                className={`relative z-10 flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${cardLayout === "scattered"
                  ? "text-foreground"
                  : "text-foreground/50"
                  }`}
              >
                <IconLayoutCards size={18} stroke={2} />
              </button>

              {/* Aligned Layout Icon */}
              <button
                type="button"
                onClick={() => setCardLayout("aligned")}
                aria-label="Align cards view"
                className={`relative z-10 flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${cardLayout === "scattered"
                  ? "text-foreground/50"
                  : "text-foreground"
                  }`}
              >
                <IconLayoutRows size={18} stroke={2} />
              </button>
            </div>
          </LayoutGroup>

          <BrandLogo />

          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-expanded={isMenuOpen}
            aria-label="Open navigation menu"
            className="z-20 flex h-10 w-10 cursor-pointer items-center justify-center rounded-md bg-surface/10 ring ring-accent-red/10 text-foreground transition-all duration-normal hover:text-accent-red focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <IconMenu2 size={20} stroke={2} />
          </button>
        </nav>
      </m.header>

      {/* 200px Top-Right Boxy Menu with Blurred Backdrop */}
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
