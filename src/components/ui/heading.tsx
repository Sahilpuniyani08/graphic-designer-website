import { type ElementType, type ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
type HeadingSize = "display" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export interface HeadingProps<T extends ElementType = "h2"> {
  as?: T;
  size?: HeadingSize;
  className?: string;
  children: React.ReactNode;
}

const sizeClasses: Record<HeadingSize, string> = {
  display:
    "text-[length:var(--font-size-display)] leading-[var(--line-height-tight)] tracking-[var(--letter-spacing-tighter)] font-bold",
  h1: "text-[length:var(--font-size-h1)] leading-[var(--line-height-tight)] tracking-[var(--letter-spacing-tight)] font-bold",
  h2: "text-[length:var(--font-size-h2)] leading-[var(--line-height-tight)] tracking-[var(--letter-spacing-tight)] font-semibold",
  h3: "text-[length:var(--font-size-h3)] leading-[var(--line-height-snug)] tracking-[var(--letter-spacing-tight)] font-semibold",
  h4: "text-[length:var(--font-size-h4)] leading-[var(--line-height-snug)] font-semibold",
  h5: "text-[length:var(--font-size-h5)] leading-[var(--line-height-normal)] font-medium",
  h6: "text-[length:var(--font-size-h6)] leading-[var(--line-height-normal)] font-medium",
};

export function Heading<T extends ElementType = "h2">({
  as,
  size,
  className,
  children,
  ...props
}: HeadingProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof HeadingProps<T>>) {
  const Component = (as || (size === "display" ? "h1" : size) || "h2") as ElementType;
  const resolvedSize = size || (typeof as === "string" && as in sizeClasses ? (as as HeadingSize) : "h2");

  return (
    <Component
      className={cn(
        "font-heading text-foreground",
        sizeClasses[resolvedSize],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

