"use client";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { ServicesHeading } from "./_blocks/services-heading";
import { ServicesGrid } from "./_blocks/services-grid";
import { cn } from "@/lib/utils";
import { m } from "motion/react";



export function Services() {
  return (
    <Section id="services" className="relative z-20 py-30 sm:py-28 lg:py-32 bg-background  mask-t-from-92% ">

      <m.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.5 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        aria-hidden="true"

        className={cn(
          "pointer-events-none absolute inset-0 z-10 [background-size:24px_24px] ",
          "[background-image:radial-gradient(circle_at_center,var(--accent-orange)_1px,transparent_1px)] opacity-[0.12]",
          "[background-size:32px_32px] mask-radial-[50%_50%] mask-radial-from-90% mask-radial-at-center"
        )}
      />

      <Container className="relative z-10">
        <ServicesHeading />
        <ServicesGrid />
      </Container>

    </Section>
  );
}

