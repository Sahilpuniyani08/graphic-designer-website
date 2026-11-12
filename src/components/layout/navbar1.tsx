"use client";

import { useState, useEffect, useRef } from "react";
import { m, AnimatePresence } from "motion/react";
import { IconSettings, IconX, IconArrowRight } from "@tabler/icons-react";
import { BrandLogo1 } from "./brand-logo1";
import { GradualBlur } from "../ui";
import { useLockBodyScroll } from "@/hooks/use-lock-body-scroll";
import { useLenis } from "lenis/react";

interface NavMenuItem {
  label: string;
  href: string;
  description?: string;
}

const MENU_ITEMS: NavMenuItem[] = [
  { label: "Home", href: "#hero", description: "Beginning & showcase deck" },
  { label: "About", href: "#about", description: "Design philosophy & story" },
  { label: "Services", href: "#services", description: "Interactive pricing & print specs" },
  { label: "Collections", href: "#work", description: "Curated portfolio gallery" },
  { label: "Reviews", href: "#testimonials", description: "Client stories & feedback" },
  { label: "Contact", href: "#contact", description: "WhatsApp & direct enquiry" },
];

export function Navbar1() {
  const [isVisible, setIsVisible] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0);
  const lastScrollY = useRef(0);

  // Close menu on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Universal background scroll lock (including Lenis)
  useLockBodyScroll(isOpen);

  useEffect(() => {
    const handleScroll = () => {
      // Keep navbar visible if menu is open
      if (isOpen) {
        setIsVisible(true);
        return;
      }

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
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const lenis = useLenis();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);

    // Give a brief tick for the menu to start closing and Lenis scroll-lock to lift
    setTimeout(() => {
      if (lenis) {
        lenis.scrollTo(href, {
          offset: -20,
          duration: 1.2,
          immediate: false,
        });
      } else {
        const el = document.querySelector(href);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }
      window.history.pushState(null, "", href);
    }, 100);
  };

  return (
    <>
      <m.header
        initial={{ y: -48, opacity: 0 }}
        animate={{
          y: isVisible || isOpen ? 0 : -88,
          opacity: isVisible || isOpen ? 1 : 0,
        }}
        transition={{
          duration: 0.35,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="fixed top-0 left-0 right-0 z-50 w-full"
      >
        <nav
          aria-label="Main Navigation"
          className="relative mx-auto flex items-center justify-between px-4 py-3 sm:px-10"
        >
          {/* Left balance spacer so center logo is truly centered */}
          <div className="w-10 sm:w-12" aria-hidden="true" />



          <GradualBlur className="-top-1 rotate-180  -z-10" />

          {/* Center: Brand Logo */}
          <div className="flex items-center justify-center">
            <BrandLogo1 />
          </div>

          {/* Right: Orange Shimmer Settings Button (styled like ShimmerButton) */}
          <div className="flex items-center justify-end w-10 sm:w-12">
            <button
              type="button"
              onClick={toggleMenu}
              aria-label={isOpen ? "Close menu" : "Open settings and navigation menu"}
              aria-expanded={isOpen}
              className="group relative flex size-10 sm:size-11 shrink-0 items-center justify-center overflow-hidden rounded-md bg-linear-to-b from-accent-orange/85 via-accent-orange to-accent-orange text-white border border-white/80 ring-2 ring-white/30 shadow-md shadow-black/20 transition-all duration-200 hover:scale-[1.05] active:scale-[0.95] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring select-none cursor-pointer"
            >
              {/* 3-streak reversible shimmer effect */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 overflow-hidden opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              >
                <span className="absolute inset-y-0 w-6 -skew-x-20 bg-linear-to-r from-transparent via-white/40 to-transparent translate-x-[-150%] transition-transform duration-700 ease-out group-hover:translate-x-[350%]" />
                <span className="absolute inset-y-0 w-3 -skew-x-20 bg-linear-to-r from-transparent via-white/60 to-transparent translate-x-[-150%] transition-transform duration-700 delay-75 ease-out group-hover:translate-x-[350%]" />
                <span className="absolute inset-y-0 w-5 -skew-x-20 bg-linear-to-r from-transparent via-white/30 to-transparent translate-x-[-150%] transition-transform duration-700 delay-150 ease-out group-hover:translate-x-[350%]" />
              </div>

              {/* Icon toggle: Settings vs Close */}
              <span className="relative z-10">
                {isOpen ? (
                  <IconX
                    size={22}
                    stroke={2.2}
                    className="transition-transform duration-300 rotate-0 hover:rotate-90"
                  />
                ) : (
                  <IconSettings
                    size={22}
                    stroke={2}
                    className="transition-transform duration-700 ease-out group-hover:rotate-90"
                  />
                )}
              </span>
            </button>
          </div>
        </nav>
      </m.header>

      {/* Fullscreen Backdrop Blur Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <m.div
            data-lenis-prevent
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-background/85 backdrop-blur-2xl px-6 py-20 select-none"
          >
            {/* Ambient Background Glow behind menu */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[540px] h-[340px] sm:h-[540px] rounded-full bg-linear-to-r from-accent-orange/15 via-accent-lime/10 to-accent-blue/15 blur-[120px]"
            />

            {/* Menu Links in the Middle */}
            <div
              role="menu"
              aria-label="Navigation links"
              className="relative z-10 flex w-full max-w-lg flex-col items-stretch gap-2.5 sm:gap-3"
            >
              {MENU_ITEMS.map((item, idx) => {
                const isHovered = hoveredIndex === idx;

                return (
                  <div
                    key={item.label}
                    onMouseEnter={() => setHoveredIndex(idx)}
                    className="relative"
                  >
                    {/* 
                      Accent orange background indicator that glides smoothly between links via motion layoutId,
                      styled with mask-radial-[farthest-corner] to fade softly toward the edges
                    */}
                    {isHovered && (
                      <m.div
                        layoutId="navbar1-menu-active-indicator"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 32,
                        }}
                        className="pointer-events-none absolute inset-0 -z-10 rounded-2xl bg-accent-orange/20 border border-accent-orange/35 shadow-sm shadow-accent-orange/10 mask-[radial-gradient(ellipse_farthest-corner,black_40%,transparent_100%)]"
                      />
                    )}

                    <a
                      href={item.href}
                      onClick={(e) => handleLinkClick(e, item.href)}
                      className="group flex w-full items-center justify-between px-6 sm:px-8 py-3.5 sm:py-4.5 rounded-2xl transition-colors duration-200 cursor-pointer"
                    >
                      <div className="flex flex-col items-start">
                        <span className="font-manrope text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-foreground transition-transform duration-200 group-hover:translate-x-1">
                          {item.label}
                        </span>
                      </div>

                      {/* Right Arrow indicating navigation */}
                      <div className="flex size-9 sm:size-10 items-center justify-center rounded-full bg-white/60 dark:bg-black/20 border border-black/5 ring-1 ring-black/5 shadow-xs transition-all duration-200 group-hover:bg-accent-orange group-hover:text-white group-hover:border-white/50 group-hover:translate-x-1">
                        <IconArrowRight
                          size={20}
                          stroke={2.2}
                          className="transition-transform duration-200"
                        />
                      </div>
                    </a>
                  </div>
                );
              })}
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </>
  );
}
