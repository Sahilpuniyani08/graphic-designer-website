import {
  type ButtonHTMLAttributes,
  type AnchorHTMLAttributes,
  forwardRef,
} from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export type ButtonVariant = "primary" | "outline" | "ghost" | "lime";
export type ButtonSize = "sm" | "md" | "lg";

interface BaseButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
}

type AsButtonProps = BaseButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type AsAnchorProps = BaseButtonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

export type ButtonProps = AsButtonProps | AsAnchorProps;

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-surface-dark text-foreground-inverse hover:bg-surface-dark-hover shadow-pill border border-transparent",
  outline:
    "bg-background border-2 border-border-accent text-foreground hover:bg-surface-muted shadow-pill",
  ghost:
    "bg-transparent text-foreground hover:bg-surface-muted border border-transparent",
  lime:
    "bg-accent-lime text-foreground hover:bg-accent-lime-hover shadow-pill border border-transparent",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "min-h-[44px] px-6 py-2 text-[length:var(--font-size-small)] font-medium",
  md: "min-h-[44px] px-8 py-2.5 text-[length:var(--font-size-body)] font-medium",
  lg: "min-h-[50px] px-10 py-3 text-[length:var(--font-size-body-lg)] font-semibold",
};

export const Button = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(function Button({ variant = "primary", size = "md", className, children, ...props }, ref) {
  const commonClasses = cn(
    "inline-flex items-center justify-center rounded-full font-body transition-colors duration-normal ease-out select-none",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
    "disabled:opacity-50 disabled:pointer-events-none cursor-pointer",
    variantClasses[variant],
    sizeClasses[size],
    className
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
        {children}
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
      {children}
    </button>
  );
});

Button.displayName = "Button";

