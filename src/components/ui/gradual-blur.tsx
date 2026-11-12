import { cn } from "@/lib/utils";

interface GradualBlurProps {
  className?: string;
  height?: string;
}

const BLUR_LAYERS = [
  {
    mask: "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 11.11111111111111%, rgba(255, 255, 255, 1) 22.22222222222222%, rgba(255, 255, 255, 0) 33.33333333333333%)",
    blur: "0px",
  },
  {
    mask: "linear-gradient(180deg, rgba(255, 255, 255, 0) 11.11111111111111%, rgba(255, 255, 255, 1) 22.22222222222222%, rgba(255, 255, 255, 1) 33.33333333333333%, rgba(255, 255, 255, 0) 44.44444444444444%)",
    blur: "1px",
  },
  {
    mask: "linear-gradient(180deg, rgba(255, 255, 255, 0) 22.22222222222222%, rgba(255, 255, 255, 1) 33.33333333333333%, rgba(255, 255, 255, 1) 44.44444444444444%, rgba(255, 255, 255, 0) 55.55555555555556%)",
    blur: "2px",
  },
  {
    mask: "linear-gradient(180deg, rgba(255, 255, 255, 0) 33.33333333333333%, rgba(255, 255, 255, 1) 44.44444444444444%, rgba(255, 255, 255, 1) 55.55555555555556%, rgba(255, 255, 255, 0) 66.66666666666666%)",
    blur: "3px",
  },
  {
    mask: "linear-gradient(180deg, rgba(255, 255, 255, 0) 44.44444444444444%, rgba(255, 255, 255, 1) 55.55555555555556%, rgba(255, 255, 255, 1) 66.66666666666666%, rgba(255, 255, 255, 0) 77.77777777777777%)",
    blur: "4px",
  },
  {
    mask: "linear-gradient(180deg, rgba(255, 255, 255, 0) 55.55555555555556%, rgba(255, 255, 255, 1) 66.66666666666666%, rgba(255, 255, 255, 1) 77.77777777777777%, rgba(255, 255, 255, 0) 88.88888888888889%)",
    blur: "5px",
  },
  {
    mask: "linear-gradient(180deg, rgba(255, 255, 255, 0) 66.66666666666666%, rgba(255, 255, 255, 1) 77.77777777777777%, rgba(255, 255, 255, 1) 88.88888888888889%, rgba(255, 255, 255, 0) 100%)",
    blur: "6px",
  },
  {
    mask: "linear-gradient(180deg, rgba(255, 255, 255, 0) 77.77777777777777%, rgba(255, 255, 255, 1) 88.88888888888889%, rgba(255, 255, 255, 1) 100%, rgba(255, 255, 255, 0) 111.11111111111111%)",
    blur: "7px",
  },
];

export function GradualBlur({ className, height = "h-18" }: GradualBlurProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none fixed inset-x-0 bottom-0 z-20 transition-opacity duration-200",
        height,
        className
      )}
    >
      {BLUR_LAYERS.map((layer, index) => (
        <div
          key={index}
          className="pointer-events-none absolute inset-0 rounded-[inherit]"
          style={{
            maskImage: layer.mask,
            WebkitMaskImage: layer.mask,
            backdropFilter: `blur(${layer.blur})`,
            WebkitBackdropFilter: `blur(${layer.blur})`,
          }}
        />
      ))}
    </div>
  );
}

