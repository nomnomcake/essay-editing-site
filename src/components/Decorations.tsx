export interface CloudProps {
  size?: "sm" | "md" | "lg" | "xl";
  /** Two silhouettes so a sky is never one cloud repeated. */
  shape?: "tall" | "wide";
  /** Gentle bob and squash, as if the cloud is breathing. Stops under prefers-reduced-motion. */
  animated?: boolean;
  /** Seconds for one pass across the sky, left to right. Hidden under prefers-reduced-motion. */
  drift?: number;
  /** Seconds of negative delay, so a cloud starts part-way through its pass. */
  delay?: number;
  className?: string;
}

const cloudWidths: Record<NonNullable<CloudProps["size"]>, number> = {
  sm: 96,
  md: 156,
  lg: 224,
  xl: 320,
};

/**
 * Every lobe is a true circular arc, so the silhouette stays round at any size.
 * Flat base, pure white, one thick outline, as in the reference.
 */
const shapes = {
  tall: "M12 80a22 22 0 0 1 10-32 26 26 0 0 1 30-30 34 34 0 0 1 56 6 24 24 0 0 1 26 22 20 20 0 0 1 14 34Z",
  wide: "M20 80a24 24 0 0 1-2-28 26 26 0 0 1 38-24 30 30 0 0 1 50 6 24 24 0 0 1 30 18 22 22 0 0 1 2 28Z",
} as const;

/** Cumulus cloud for sky panels and page corners. Decorative only. */
export function Cloud({
  size = "md",
  shape = "tall",
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
      <path d={shapes[shape]} fill="#ffffff" stroke="var(--ink)" strokeWidth="3" strokeLinejoin="round" />
    </svg>
  );

  if (drift !== undefined) {
    return (
      <span
        aria-hidden="true"
        className={`animate-drift inline-flex motion-reduce:hidden ${className}`}
        style={{ animationDuration: `${drift}s`, animationDelay: `${-delay}s` }}
      >
        {svg}
      </span>
    );
  }

  return (
    <span
      aria-hidden="true"
      className={`inline-flex ${animated ? "motion-reduce:[&_svg]:animate-none" : ""} ${className}`}
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
