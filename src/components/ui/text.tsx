import { type ElementType, type ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

type TextVariant = "body" | "body-lg" | "muted" | "small" | "caption";

export interface TextProps<T extends ElementType = "p"> {
  as?: T;
  variant?: TextVariant;
  className?: string;
  children: React.ReactNode;
}

const variantClasses: Record<TextVariant, string> = {
  body: "text-[length:var(--font-size-body)] leading-[var(--line-height-relaxed)] text-foreground",
  "body-lg":
    "text-[length:var(--font-size-body-lg)] leading-[var(--line-height-relaxed)] text-foreground-muted",
  muted:
    "text-[length:var(--font-size-body)] leading-[var(--line-height-normal)] text-foreground-muted",
  small:
    "text-[length:var(--font-size-small)] leading-[var(--line-height-normal)] text-foreground-muted",
  caption:
    "text-[length:var(--font-size-caption)] leading-[var(--line-height-normal)] text-foreground-subtle",
};

export function Text<T extends ElementType = "p">({
  as,
  variant = "body",
  className,
  children,
  ...props
}: TextProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof TextProps<T>>) {
  const Component = as || "p";

  return (
    <Component
      className={cn("font-body", variantClasses[variant], className)}
      {...props}
    >
      {children}
    </Component>
  );
}

