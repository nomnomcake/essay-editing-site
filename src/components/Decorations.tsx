export type CloudShape = "tall" | "wide" | "peaked" | "lumpy" | "puff";

export interface CloudProps {
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  /** Five silhouettes, so a sky never repeats one shape. */
  shape?: CloudShape;
  /** Turn the cloud upside down so its lobes face downward. For banks hanging from a top edge, where a flat base would read as a straight bar. */
  flip?: boolean;
  /** Gentle bob and squash. Stops under prefers-reduced-motion. */
  animated?: boolean;
  /** Seconds for one pass across the sky, left to right. Hidden under prefers-reduced-motion. */
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
 * Every lobe is a true circular arc on a flat base. Five silhouettes with
 * different lobe counts and profiles so a cloudscape does not read as one
 * stamp repeated.
 */
const shapes: Record<CloudShape, string> = {
  tall: "M12 80a22 22 0 0 1 10-32 26 26 0 0 1 30-30 34 34 0 0 1 56 6 24 24 0 0 1 26 22 20 20 0 0 1 14 34Z",
  wide: "M20 80a24 24 0 0 1-2-28 26 26 0 0 1 38-24 30 30 0 0 1 50 6 24 24 0 0 1 30 18 22 22 0 0 1 2 28Z",
  peaked: "M10 80a26 26 0 0 1 14-36 30 30 0 0 1 42-22 22 22 0 0 1 34 18 26 26 0 0 1 34 16 18 18 0 0 1 12 24Z",
  lumpy:
    "M8 80a18 18 0 0 1 8-26 20 20 0 0 1 26-16 22 22 0 0 1 30-6 24 24 0 0 1 34 8 20 20 0 0 1 26 14 16 16 0 0 1 12 26Z",
  puff: "M24 80a22 22 0 0 1 4-30 26 26 0 0 1 44-10 24 24 0 0 1 34 18 20 20 0 0 1 14 22Z",
};

/**
 * Cumulus cloud. The outline uses non-scaling-stroke so its weight stays the
 * same on screen at every size, the way a flat illustration is drawn.
 * Decorative only.
 */
export function Cloud({
  size = "md",
  shape = "tall",
  flip = false,
  animated = false,
  drift,
  delay = 0,
  className = "",
}: CloudProps) {
  const w = cloudWidths[size];
  const h = Math.round((w * 90) / 160);

  const svg = (
    <svg
      width={w}
      height={h}
      viewBox="0 0 160 90"
      aria-hidden="true"
      focusable="false"
      className={animated ? "animate-bob" : undefined}
      style={animated ? { animationDelay: `${-delay}s` } : undefined}
    >
      <path
        d={shapes[shape]}
        fill="#ffffff"
        stroke="var(--ink)"
        strokeWidth="3"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
        transform={flip ? "translate(0,90) scale(1,-1)" : undefined}
      />
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
    <span
      aria-hidden="true"
      className={`${animated ? "motion-reduce:[&_svg]:animate-none" : ""} ${className}`}
    >
      {svg}
    </span>
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
      className={`${animated ? "animate-twinkle motion-reduce:animate-none" : ""} ${className}`}
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
  /** Slow bob. Hidden under prefers-reduced-motion. */
  animated?: boolean;
  className?: string;
}

/** Small gold disc for sky panels. Decorative. */
export function Sun({ size = 32, animated = false, className = "" }: SunProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      aria-hidden="true"
      focusable="false"
      className={`${animated ? "animate-float-slow motion-reduce:animate-none" : ""} ${className}`}
    >
      <circle cx="16" cy="16" r="13" fill="var(--gold)" stroke="var(--ink)" strokeWidth="2.5" />
    </svg>
  );
}
