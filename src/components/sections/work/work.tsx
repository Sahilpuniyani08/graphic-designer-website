"use client";

import { useState } from "react";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { WORK_CATEGORIES } from "@/config/work-data";
import { WorkHeading } from "./_blocks/work-heading";
import { WorkTabs } from "./_blocks/work-tabs";
import { WorkGrid } from "./_blocks/work-grid";
import { WorkAmbientGlow } from "./_blocks/work-ambient-glow";
import { cn } from "@/lib/utils";
import { m } from "motion/react";

export function Work() {
  const [activeCategoryId, setActiveCategoryId] = useState<string>(
    WORK_CATEGORIES[0].id
  );
  const [rotationAngle, setRotationAngle] = useState<number>(0);

  const activeCategory =
    WORK_CATEGORIES.find((cat) => cat.id === activeCategoryId) ||
    WORK_CATEGORIES[0];

  const handleSelectCategory = (id: string) => {
    setActiveCategoryId(id);
    // Rotates the top planet conic gradient on every click on tab
    setRotationAngle((prev) => prev + 90);
  };

  return (
    <Section
      id="work"
      as="section"
      padding="lg"
      aria-label="Selected Creative Works"
      className="relative flex flex-col items-center justify-start overflow-hidden bg-transparent pt-16 sm:pt-58 pb-28 mask-auto mask-t-from-95% z-10  "
    >
      {/* Background Rotating Conic Planet Gradient + Film Grain Overlay */}
      <WorkAmbientGlow rotationAngle={rotationAngle} />


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


      {/* Main Content: Full-width container with px-5 */}
      <Container
        size="full"
        className="relative z-20 flex flex-col items-center w-full max-w-full px-0 mt-5 sm:mt-10"
      >
        {/* Heading Title with Subheading Below It */}
        <WorkHeading />

        {/* Horizontal Category Tabs Row */}
        <WorkTabs
          categories={WORK_CATEGORIES}
          activeCategoryId={activeCategoryId}
          onSelectCategory={handleSelectCategory}
        />

        {/* Responsive Cards Grid with LayoutId Motion Modal */}
        <WorkGrid category={activeCategory} />

      </Container>
    </Section>
  );
}
