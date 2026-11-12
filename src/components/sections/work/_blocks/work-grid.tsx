"use client";

import { useState } from "react";
import { m, AnimatePresence } from "motion/react";
import { PortfolioCard } from "@/components/ui/portfolio-card";
import { WorkModal } from "./work-modal";
import type { WorkCategory, WorkProject } from "@/types/work";

interface WorkGridProps {
  category: WorkCategory;
}

export function WorkGrid({ category }: WorkGridProps) {
  const [selectedProject, setSelectedProject] = useState<WorkProject | null>(null);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 sm:mt-10">
      {/* 
        Responsive Masonry Grid:
        - 3-column desktop layout ensures all columns are filled evenly across the full width without leaving blank space on the right
        - Natural aspect ratio heights with break-inside-avoid
      */}
      <AnimatePresence mode="wait">
        <m.div
          key={category.id}
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.05,
              },
            },
            exit: {
              opacity: 0,
              transition: {
                duration: 0.15,
              },
            },
          }}
          className="columns-1 sm:columns-2 lg:columns-3 gap-4 sm:gap-5 lg:gap-6 w-full"
        >
          {category.projects.map((project) => (
            <m.div
              key={project.id}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 18,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.35,
                    ease: [0.16, 1, 0.3, 1],
                  },
                },
                exit: {
                  opacity: 0,
                  y: -10,
                  transition: {
                    duration: 0.12,
                    ease: "easeOut",
                  },
                },
              }}
              className="inline-block w-full break-inside-avoid mb-4 sm:mb-5 lg:mb-6"
            >
              <PortfolioCard
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            </m.div>
          ))}
        </m.div>
      </AnimatePresence>

      {/* Smooth, jitter-free Modal matching the website's theme */}
      <WorkModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
