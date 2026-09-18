export interface CloudProps {
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  /**
   * Seconds for one pass across the sky, left to right. This is the only
   * animation a cloud has. Without it the cloud is simply static, which is
   * also what people with prefers-reduced-motion see.
   */
  drift?: number;
  /** Seconds of negative delay, so a cloud starts part-way through its pass. */
  delay?: number;
  className?: string;
}

const cloudWidths: Record<NonNullable<CloudProps["size"]>, number> = {
  xs: 72,
  sm: 108,
  md: 168,
  lg: 240,
  xl: 340,
};

/**
 * One silhouette, used everywhere. Five bumps on a softly rounded base, with
 * two inner arcs that read as overlapping puffs.
 */
const CLOUD =
  "M16 72a20 20 0 0 1 6-28 26 26 0 0 1 34-20 30 30 0 0 1 48 6 22 22 0 0 1 26 20 18 18 0 0 1 8 22A120 120 0 0 1 16 72Z";
const CLOUD_DETAIL = "M30 68a16 16 0 0 1 18-12M62 70a20 20 0 0 1 24-16";

const line = {
  stroke: "var(--sky-line)",
  strokeLinejoin: "round" as const,
  strokeLinecap: "round" as const,
  vectorEffect: "non-scaling-stroke" as const,
};

/** Cloud for the night sky. Decorative. */
export function Cloud({ size = "md", drift, delay = 0, className = "" }: CloudProps) {
  const w = cloudWidths[size];
  const h = Math.round((w * 90) / 160);

  const svg = (
    <svg width={w} height={h} viewBox="0 0 160 90" aria-hidden="true" focusable="false">
      <path d={CLOUD} fill="var(--cloud)" strokeWidth="4" {...line} />
      <path d={CLOUD_DETAIL} fill="none" strokeWidth="3" {...line} />
    </svg>
  );

  if (drift !== undefined) {
    return (
      <span
        aria-hidden="true"
        className={`animate-drift motion-reduce:hidden ${className}`}
        style={{ animationDuration: `${drift}s`, animationDelay: `${-delay}s` }}
      >
        {svg}
      </span>
    );
  }

  return (
    <span aria-hidden="true" className={className}>
      {svg}
    </span>
  );
}

export interface SparkleProps {
  size?: number;
  tone?: "cream" | "gold";
  /** Twinkle in place. Stops under prefers-reduced-motion. */
  animated?: boolean;
  className?: string;
}

/** Four-point star with concave sides, drawn to the badge reference. */
const STAR =
  "M32 3c2.5 16 10.5 24 26.5 26.5C42.5 32 34.5 40 32 56 29.5 40 21.5 32 5.5 29.5 21.5 27 29.5 19 32 3Z";

/** Star for the night sky and for small accents beside headings. Decorative. */
export function Sparkle({
  size = 16,
  tone = "cream",
  animated = false,
  className = "",
}: SparkleProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      aria-hidden="true"
      focusable="false"
      className={`${animated ? "animate-twinkle motion-reduce:animate-none" : ""} ${className}`}
    >
      <path
        d={STAR}
        fill={tone === "gold" ? "var(--gold)" : "var(--cloud)"}
        strokeWidth="3.5"
        {...line}
      />
    </svg>
  );
}

export interface MoonProps {
  size?: number;
  /** Adds a small star beside the crescent. */
  withStar?: boolean;
  /** Slow glow. Stops under prefers-reduced-motion. */
  animated?: boolean;
  className?: string;
}

/** Crescent: the outer disc with an offset disc carved out of it. */
const CRESCENT = "M30.04 6.07A26 26 0 1 0 53.34 46.85 24 24 0 1 1 30.04 6.07Z";

/** The moon. Replaces the sun now the sky is night. Decorative. */
export function Moon({
  size = 56,
  withStar = false,
  animated = false,
  className = "",
}: MoonProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      aria-hidden="true"
      focusable="false"
      className={`${animated ? "animate-glow motion-reduce:animate-none" : ""} ${className}`}
    >
      <path d={CRESCENT} fill="var(--gold)" strokeWidth="3.5" {...line} />
      <circle cx="23" cy="25" r="4.2" fill="var(--crater)" />
      <circle cx="20" cy="39" r="3" fill="var(--crater)" />
      <circle cx="30" cy="45" r="3.6" fill="var(--crater)" />
      {withStar ? (
        <path
          d="M50 34c1 7 4.5 10.5 11.5 11.5C54.5 46.5 51 50 50 57c-1-7-4.5-10.5-11.5-11.5C45.5 44.5 49 41 50 34Z"
          fill="var(--cloud)"
          strokeWidth="3"
          {...line}
        />
      ) : null}
    </svg>
  );
}
