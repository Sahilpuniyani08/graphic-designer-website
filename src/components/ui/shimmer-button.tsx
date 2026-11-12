import {
  type ButtonHTMLAttributes,
  type AnchorHTMLAttributes,
  forwardRef,
} from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export type ShimmerButtonVariant = "orange" | "neutral" | "dark";
export type ShimmerButtonSize = "sm" | "md" | "lg";

interface BaseShimmerButtonProps {
  variant?: ShimmerButtonVariant;
  size?: ShimmerButtonSize;
  className?: string;
  children: React.ReactNode;
}

type AsButtonProps = BaseShimmerButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type AsAnchorProps = BaseShimmerButtonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

export type ShimmerButtonProps = AsButtonProps | AsAnchorProps;

const variantClasses: Record<ShimmerButtonVariant, string> = {
  orange:
    "bg-linear-to-b from-accent-orange/85 via-accent-orange to-accent-orange text-white border border-white/80 ring-2 ring-white/30 shadow-md shadow-black/20",
  neutral:
    "bg-[#EFEFEF] hover:bg-[#DEDEDE] text-foreground border border-black/10 ring-1 ring-black/20 shadow-xs",
  dark:
    "bg-surface-dark text-foreground-inverse hover:bg-surface-dark-hover shadow-md border border-white/20",
};

const streakColorClasses: Record<ShimmerButtonVariant, { s1: string; s2: string; s3: string }> = {
  orange: {
    s1: "via-white/40",
    s2: "via-white/60",
    s3: "via-white/30",
  },
  neutral: {
    s1: "via-black/15",
    s2: "via-black/25",
    s3: "via-black/15",
  },
  dark: {
    s1: "via-white/30",
    s2: "via-white/50",
    s3: "via-white/25",
  },
};

const sizeClasses: Record<ShimmerButtonSize, string> = {
  sm: "px-5 sm:px-8 py-2 text-xs sm:text-sm",
  md: "px-6 sm:px-10 py-2.5 sm:py-3 text-xs sm:text-sm",
  lg: "px-8 sm:px-14 py-3 sm:py-3.5 text-sm sm:text-base",
};

export const ShimmerButton = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ShimmerButtonProps
>(function ShimmerButton(
  { variant = "orange", size = "md", className, children, ...props },
  ref
) {
  const commonClasses = cn(
    "group relative inline-flex items-center justify-center overflow-hidden rounded-full font-medium transition-all duration-200",
    "hover:scale-[1.02] active:scale-[0.98] select-none cursor-pointer",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
    "disabled:opacity-50 disabled:pointer-events-none",
    variantClasses[variant],
    sizeClasses[size],
    className
  );

  const streaks = streakColorClasses[variant];

  const shimmerOverlay = (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden opacity-0 transition-opacity duration-300 group-hover:opacity-100"
    >
      <span
        className={cn(
          "absolute inset-y-0 w-8 -skew-x-20 bg-linear-to-r from-transparent to-transparent translate-x-[-150%] transition-transform duration-700 ease-out group-hover:translate-x-[350%]",
          streaks.s1
        )}
      />
      <span
        className={cn(
          "absolute inset-y-0 w-4 -skew-x-20 bg-linear-to-r from-transparent to-transparent translate-x-[-150%] transition-transform duration-700 delay-75 ease-out group-hover:translate-x-[350%]",
          streaks.s2
        )}
      />
      <span
        className={cn(
          "absolute inset-y-0 w-6 -skew-x-20 bg-linear-to-r from-transparent to-transparent translate-x-[-150%] transition-transform duration-700 delay-150 ease-out group-hover:translate-x-[350%]",
          streaks.s3
        )}
      />
    </div>
  );

  if ("href" in props && typeof props.href === "string") {
    const { href, ...anchorProps } = props as AsAnchorProps;
    return (
      <Link
        href={href}
        ref={ref as React.Ref<HTMLAnchorElement>}
        className={commonClasses}
        {...anchorProps}
      >
        <span className="relative z-10 inline-flex items-center justify-center gap-2">{children}</span>
        {shimmerOverlay}
      </Link>
    );
  }

  const buttonProps = props as AsButtonProps;
  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      type={buttonProps.type || "button"}
      className={commonClasses}
      {...buttonProps}
    >
      <span className="relative z-10 inline-flex items-center justify-center gap-2">{children}</span>
      {shimmerOverlay}
    </button>
  );
});

ShimmerButton.displayName = "ShimmerButton";

