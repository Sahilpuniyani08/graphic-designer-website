import { type ElementType, type ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

type SectionPadding = "none" | "sm" | "md" | "lg";

export interface SectionProps<T extends ElementType = "section"> {
  as?: T;
  padding?: SectionPadding;
  className?: string;
  children: React.ReactNode;
}

const paddingClasses: Record<SectionPadding, string> = {
  none: "py-0",
  sm: "py-12 sm:py-16",
  md: "py-16 sm:py-20 lg:py-24",
  lg: "py-20 sm:py-28 lg:py-32",
};

export function Section<T extends ElementType = "section">({
  as,
  padding = "md",
  className,
  children,
  ...props
}: SectionProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof SectionProps<T>>) {
  const Component = as || "section";

  return (
    <Component
      className={cn("relative w-full overflow-hidden", paddingClasses[padding], className)}
      {...props}
    >
      {children}
    </Component>
  );
}

