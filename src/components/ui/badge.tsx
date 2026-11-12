import { type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export type BadgeVariant = "wine" | "lime" | "violet" | "subtle";

export interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
  variant?: BadgeVariant;
  className?: string;
  children: React.ReactNode;
}

const variantClasses: Record<BadgeVariant, string> = {
  wine: "text-accent-wine bg-accent-wine-muted/60 border-accent-wine/20",
  lime: "text-foreground bg-accent-lime/20 border-accent-lime/40",
  violet: "text-accent-violet bg-accent-violet/10 border-accent-violet/30",
  subtle: "text-foreground-muted bg-surface-muted border-border",
};

export function Badge({
  variant = "subtle",
  className,
  children,
  ...props
}: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[length:var(--font-size-small)] font-medium border font-body",
        variantClasses[variant],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

