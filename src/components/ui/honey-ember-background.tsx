import { forwardRef, type HTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface HoneyEmberBackgroundProps
  extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  variant?: "theme" | "honey";
}

const HoneyEmberBackground = forwardRef<
  HTMLDivElement,
  HoneyEmberBackgroundProps
>(({ children, className, variant = "honey", ...props }, ref) => {
  const isTheme = variant === "theme";

  return (
    <div
      ref={ref}
      data-slot="honey-ember-background"
      className={cn(
        "relative isolate overflow-hidden",
        isTheme ? "bg-background" : "bg-[#FFFDF7]",
        className
      )}
      {...props}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-6 -z-10 blur-xl"
      >
        <div
          className={cn(
            "absolute inset-0",
            isTheme ? "bg-background" : "bg-[#FFFDF7]"
          )}
        />

        {/* Glow 1: Top-Left Honey Gold */}
        <div
          className={cn(
            "absolute -top-[14%] -left-[6%] h-[70%] w-[70%] rounded-full blur-3xl",
            isTheme ? "bg-accent-lime opacity-30" : "bg-[#FBBF24] opacity-78"
          )}
        />

        {/* Glow 2: Top-Right Deep Amber */}
        <div
          className={cn(
            "absolute top-[8%] right-[-8%] h-[62%] w-[62%] rounded-full blur-3xl",
            isTheme ? "bg-accent-lime-hover opacity-25" : "bg-[#F59E0B] opacity-70"
          )}
        />

        {/* Glow 3: Bottom-Left Warm Ember Coral */}
        <div
          className={cn(
            "absolute bottom-[-22%] left-[12%] h-[66%] w-[66%] rounded-full blur-3xl",
            isTheme ? "bg-swatch-coral opacity-25" : "bg-[#FB923C] opacity-58"
          )}
        />

        {/* Glow 4: Bottom-Right Radiant Red */}
        <div
          className={cn(
            "absolute right-[20%] bottom-[-10%] h-[56%] w-[56%] rounded-full blur-3xl",
            isTheme ? "bg-accent-red opacity-20" : "bg-[#FECACA] opacity-68"
          )}
        />
      </div>

      {/* Subtle Dot Matrix Texture */}
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-0 -z-10 [background-size:4px_4px]",
          isTheme
            ? "[background-image:radial-gradient(circle_at_center,var(--foreground)_1px,transparent_1px)] opacity-[0.03]"
            : "[background-image:radial-gradient(circle_at_center,#78350F_1px,transparent_1px)] opacity-[0.034]"
        )}
      />

      {children}
    </div>
  );
});

HoneyEmberBackground.displayName = "HoneyEmberBackground";

export default HoneyEmberBackground;
export { HoneyEmberBackground };

