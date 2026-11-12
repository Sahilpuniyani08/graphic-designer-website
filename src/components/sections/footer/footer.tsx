"use client";

import { m, useReducedMotion, type Variants } from "motion/react";
import { FooterEyes } from "./_blocks/footer-eyes";
import { CONTACT_CONFIG } from "@/config/services-data";
import { IconArrowUpRight } from "@tabler/icons-react";

export function Footer() {
  const shouldReduceMotion = useReducedMotion();

  const whatsappUrl = `https://wa.me/${CONTACT_CONFIG.whatsappNumber}?text=${encodeURIComponent(
    `Hello ${CONTACT_CONFIG.designerName}! 👋\n\nI was exploring your portfolio and would like to discuss an upcoming graphic design and print project.`
  )}`;

  // Headline words for staggered reveal
  const line1Words = ["You’ve", "seen", "the", "work."];
  const line2Words = ["Now", "the"];

  const headlineContainerVariants: Variants = {
    hidden: { opacity: shouldReduceMotion ? 1 : 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const wordVariants: Variants = {
    hidden: shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.45,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <footer
      id="contact"
      aria-label="Contact & Footer"
      className="relative w-full bg-background overflow-hidden pt-20 sm:pt-28 pb-10 sm:pb-16 select-none"
    >
      {/* 
        Bottom Glow:
        Smooth fade in from opacity 0 to 1 when entering viewport
      */}
      <m.div
        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-full  h-60 md:h-80 bg-linear-to-t from-accent-orange/80 via-accent-lime/25 to-transparent blur-md pointer-events-none"
      />

      <div className="w-[90%] max-w-6xl mx-auto relative z-10">
        {/* 
          Top Section: Inspired directly by Soundar's Footer Layout
          - Bulletproof word-by-word reveal
          - Accent orange highlight on "awkward part."
        */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-12 sm:pb-16 border-b border-black/8">
          {/* Main Headline */}
          <div className="max-w-2xl">
            <m.h2
              variants={headlineContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="font-manrope font-black text-4xl sm:text-6xl md:text-7xl lg:text-[76px] tracking-tight text-foreground leading-[1.08] uppercase"
            >
              {/* Line 1: You've seen the work. */}
              <span className="block">
                {line1Words.map((word, index) => (
                  <m.span
                    key={index}
                    variants={wordVariants}
                    className="inline-block mr-[0.25em]"
                  >
                    {word}
                  </m.span>
                ))}
              </span>

              {/* Line 2: Now the awkward part. */}
              <span className="block mt-1 sm:mt-2">
                {line2Words.map((word, index) => (
                  <m.span
                    key={index}
                    variants={wordVariants}
                    className="inline-block mr-[0.25em]"
                  >
                    {word}
                  </m.span>
                ))}

                {/* Accent Highlighted Phrase: awkward part. */}
                <m.span
                  variants={wordVariants}
                  className="relative inline-block bg-accent-orange text-background px-3 sm:px-4 py-0.5 sm:py-1 rounded-sm rotate-[-1deg] shadow-sm align-baseline"
                >
                  <span className="relative z-10 inline-block font-black">
                    awkward part.
                  </span>
                  {/* Subtle sweep overlay */}
                  <m.span
                    initial={shouldReduceMotion ? { scaleX: 1 } : { scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: 0.3,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    style={{ transformOrigin: "left center" }}
                    className="absolute inset-0 bg-[#ea680c] -z-0"
                    aria-hidden="true"
                  />
                </m.span>
              </span>
            </m.h2>
          </div>

          {/* Subtitle / Closing line */}
          <m.div
            initial={shouldReduceMotion ? {} : { y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-md lg:text-right"
          >
            <p className="font-body text-sm sm:text-base text-foreground-subtle leading-relaxed">
              Bad at closing lines. Better at design problems. If you have an identity, print, or branding challenge worth solving, I would love to hear it.
            </p>
          </m.div>
        </div>

        {/* 
          Three Action Columns: WHATSAPP, CALL, EMAIL
        */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 py-10 sm:pt-10 pb-24 sm:pb-20">
          {/* Action 1: WhatsApp */}
          <m.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={shouldReduceMotion ? {} : { y: 24, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="group flex flex-col justify-between p-2 cursor-pointer transition-colors"
          >
            <div className="flex items-center justify-between pb-2 border-b border-black/10 group-hover:border-accent-orange transition-colors">
              <span className="font-manrope font-black text-2xl sm:text-3xl text-foreground group-hover:text-accent-orange transition-colors uppercase tracking-tight">
                WhatsApp
              </span>
              <div className="w-8 h-8 rounded-full bg-surface group-hover:bg-accent-orange group-hover:text-background flex items-center justify-center transition-all">
                <IconArrowUpRight size={18} stroke={2.5} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
            <p className="text-xs text-foreground-subtle mt-2 group-hover:text-foreground transition-colors">
              Fastest response • Message directly
            </p>
          </m.a>

          {/* Action 2: Call */}
          <m.a
            href={`tel:${CONTACT_CONFIG.phone.replace(/\s+/g, "")}`}
            initial={shouldReduceMotion ? {} : { y: 24, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="group flex flex-col justify-between p-2 cursor-pointer transition-colors"
          >
            <div className="flex items-center justify-between pb-2 border-b border-black/10 group-hover:border-accent-orange transition-colors">
              <span className="font-manrope font-black text-2xl sm:text-3xl text-foreground group-hover:text-accent-orange transition-colors uppercase tracking-tight">
                Phone
              </span>
              <div className="w-8 h-8 rounded-full bg-surface group-hover:bg-accent-orange group-hover:text-background flex items-center justify-center transition-all">
                <IconArrowUpRight size={18} stroke={2.5} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
            <p className="text-xs text-foreground-subtle mt-2 group-hover:text-foreground transition-colors">
              {CONTACT_CONFIG.phone} • Mon - Sat
            </p>
          </m.a>

          {/* Action 3: Email */}
          <m.a
            href="mailto:hello@example.com"
            initial={shouldReduceMotion ? {} : { y: 24, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="group flex flex-col justify-between p-2 cursor-pointer transition-colors"
          >
            <div className="flex items-center justify-between pb-2 border-b border-black/10 group-hover:border-accent-orange transition-colors">
              <span className="font-manrope font-black text-2xl sm:text-3xl text-foreground group-hover:text-accent-orange transition-colors uppercase tracking-tight">
                Mail
              </span>
              <div className="w-8 h-8 rounded-full bg-surface group-hover:bg-accent-orange group-hover:text-background flex items-center justify-center transition-all">
                <IconArrowUpRight size={18} stroke={2.5} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
            <p className="text-xs text-foreground-subtle mt-2 group-hover:text-foreground transition-colors">
              {CONTACT_CONFIG.email} • Send briefs &amp; files
            </p>
          </m.a>
        </div>

        {/* 
          Interactive Eyes Section with Sunset Radial Glow
        */}
        <div className="relative py-4">
          <FooterEyes />
        </div>

        {/* 
          Bottom Typography Banner & Aligned Sub-Bar:
          Takes calculated 80% width on desktop, full width on mobile,
          with the copyright on the left and socials on the right aligned directly to the 80% width bounds
        */}
        <div className="w-full sm:w-[80%] mx-auto select-none pt-4 sm:pt-8">
          {/* Giant Heading: Enlarged to fill 80% width on desktop */}
          <m.div
            initial={shouldReduceMotion ? {} : { y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full text-center overflow-visible py-4 sm:py-2 flex items-center justify-center"
          >
            <h1 className="w-full font-manrope font-black text-[10vw] sm:text-[6.8vw] md:text-[6.4vw] lg:text-[6vw] xl:text-[100px] 2xl:text-[110px] uppercase tracking-tighter text-accent-orange/20 hover:text-accent-orange/50 transition-colors duration-500 leading-none scale-y-125 sm:scale-y-135 origin-bottom whitespace-nowrap mix-blend-soft-light mask-b-from-20%">
              THE DESIGN VAULT
            </h1>
          </m.div>

          {/* Footer Sub-Bar: Copyright & Socials aligned to the 80% bounds */}
          <m.div
            initial={shouldReduceMotion ? {} : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-full pt-4 sm:pt-6 border-t border-black/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-foreground-subtle"
          >
            <div className="text-left">
              <span>© {new Date().getFullYear()} Anmol Soni. All rights reserved.</span>
            </div>

            <div className="flex items-center gap-6 text-right">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent-orange transition-colors"
              >
                Instagram
              </a>
              <a
                href="https://behance.net"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent-orange transition-colors"
              >
                Behance
              </a>
            </div>
          </m.div>
        </div>
      </div>
    </footer>
  );
}
