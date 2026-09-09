export interface CloudProps {
  size?: "sm" | "md" | "lg";
  /** Gentle vertical drift. Hidden entirely under prefers-reduced-motion. */
  animated?: boolean;
  className?: string;
}

const cloudWidths: Record<NonNullable<CloudProps["size"]>, number> = {
  sm: 56,
  md: 88,
  lg: 128,
};

/** Use as background decoration in sky panels and page corners. Never carries meaning. */
export function Cloud({ size = "md", animated = false, className = "" }: CloudProps) {
  const w = cloudWidths[size];
  const h = Math.round(w * 0.55);
  return (
    <svg
      width={w}
      height={h}
      viewBox="0 0 88 48"
      aria-hidden="true"
      focusable="false"
      className={`${animated ? "animate-float motion-reduce:hidden" : ""} ${className}`}
    >
      <path
        d="M22 44C11 44 4 38 4 30c0-7 5-12 12-13 2-8 9-13 18-13 8 0 14 4 17 11 2-1 4-1 6-1 8 0 14 6 14 14 0 9-7 16-16 16H22Z"
        fill="#ffffff"
        stroke="var(--ink)"
        strokeWidth="3"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export interface SparkleProps {
  size?: number;
  tone?: "ink" | "gold" | "cream";
  /** Twinkle. Hidden entirely under prefers-reduced-motion. */
  animated?: boolean;
  className?: string;
}

const sparkleFills: Record<NonNullable<SparkleProps["tone"]>, string> = {
  ink: "var(--ink)",
  gold: "var(--gold)",
  cream: "var(--cream)",
};

/** Use as a small accent near headings or in sky panels. Never carries meaning. */
export function Sparkle({
  size = 16,
  tone = "ink",
  animated = false,
  className = "",
}: SparkleProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      aria-hidden="true"
      focusable="false"
      className={`${animated ? "animate-twinkle motion-reduce:hidden" : ""} ${className}`}
    >
      <path
        d="M8 0c.6 4.6 3.4 7.4 8 8-4.6.6-7.4 3.4-8 8-.6-4.6-3.4-7.4-8-8 4.6-.6 7.4-3.4 8-8Z"
        fill={sparkleFills[tone]}
        stroke={tone === "ink" ? "none" : "var(--ink)"}
        strokeWidth={tone === "ink" ? 0 : 1.5}
        strokeLinejoin="round"
      />
    </svg>
  );
}

export interface SunProps {
  size?: number;
  className?: string;
}

/** Small gold disc for sky panels. Decorative. */
export function Sun({ size = 32, className = "" }: SunProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <circle cx="16" cy="16" r="13" fill="var(--gold)" stroke="var(--ink)" strokeWidth="2.5" />
    </svg>
  );
}
