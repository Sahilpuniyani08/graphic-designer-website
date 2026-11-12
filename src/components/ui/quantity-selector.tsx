"use client";

import { useCallback } from "react";
import { IconMinus, IconPlus } from "@tabler/icons-react";

interface QuantitySelectorProps {
  value: number;
  min?: number;
  max?: number;
  step?: number;
  unitLabel?: string;
  onChange: (newValue: number) => void;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function QuantitySelector({
  value,
  min = 1,
  max = 10000,
  step = 1,
  unitLabel,
  onChange,
  className = "",
  size = "md",
}: QuantitySelectorProps) {
  const canDecrement = value - step >= min;
  const canIncrement = value + step <= max;

  const handleDecrement = useCallback(() => {
    if (canDecrement) {
      onChange(Math.max(min, value - step));
    }
  }, [canDecrement, min, value, step, onChange]);

  const handleIncrement = useCallback(() => {
    if (canIncrement) {
      onChange(Math.min(max, value + step));
    }
  }, [canIncrement, max, value, step, onChange]);

  const buttonSizeStyles = {
    sm: "w-8 h-8",
    md: "w-10 h-10 min-h-[44px] min-w-[44px]",
    lg: "w-11 h-11 min-h-[44px] min-w-[44px]",
  }[size];

  const iconSizes = {
    sm: 14,
    md: 16,
    lg: 18,
  }[size];

  return (
    <div
      className={`inline-flex items-center gap-1.5 p-1 bg-surface/60 rounded-full border border-border ${className}`}
      role="group"
      aria-label="Quantity selector"
    >
      <button
        type="button"
        onClick={handleDecrement}
        disabled={!canDecrement}
        aria-label="Decrease quantity"
        className={`
          ${buttonSizeStyles}
          inline-flex items-center justify-center rounded-full
          bg-light-background text-foreground shadow-sm
          border border-border/80
          transition-all duration-200
          hover:bg-surface hover:text-accent-orange
          active:scale-95
          disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-light-background disabled:hover:text-foreground
        `}
      >
        <IconMinus size={iconSizes} stroke={2} />
      </button>

      <div className="flex items-baseline justify-center px-3 min-w-[4rem] text-center select-none">
        <span className="font-display font-bold text-foreground text-base sm:text-lg">
          {value.toLocaleString()}
        </span>
        {unitLabel && (
          <span className="ml-1 text-xs text-foreground-subtle font-medium">
            {unitLabel}
          </span>
        )}
      </div>

      <button
        type="button"
        onClick={handleIncrement}
        disabled={!canIncrement}
        aria-label="Increase quantity"
        className={`
          ${buttonSizeStyles}
          inline-flex items-center justify-center rounded-full
          bg-light-background text-foreground shadow-sm
          border border-border/80
          transition-all duration-200
          hover:bg-surface hover:text-accent-orange
          active:scale-95
          disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-light-background disabled:hover:text-foreground
        `}
      >
        <IconPlus size={iconSizes} stroke={2} />
      </button>
    </div>
  );
}

