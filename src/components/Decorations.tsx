export interface CloudProps {
  size?: "sm" | "md" | "lg" | "xl";
  /** Gentle vertical bob. Hidden entirely under prefers-reduced-motion. */
  animated?: boolean;
  /** Seconds for one slow pass across the sky, left to right. Hidden under prefers-reduced-motion. */
  drift?: number;
  /** Negative delay in seconds to start part-way across. */
  delay?: number;
  className?: string;
}

const cloudWidths: Record<NonNullable<CloudProps["size"]>, number> = {
  sm: 72,
  md: 120,
  lg: 180,
  xl: 260,
};

/** Big cumulus cloud for sky panels and page corners. Never carries meaning. */
export function Cloud({ size = "md", animated = false, drift, delay = 0, className = "" }: CloudProps) {
  const w = cloudWidths[size];
  const h = Math.round(w * 0.56);
  const moving = animated || drift !== undefined;
  const svg = (
    <svg
      width={w}
      height={h}
      viewBox="0 0 120 67"
      aria-hidden="true"
      focusable="false"
      className={animated ? "animate-float" : undefined}
      style={animated ? { animationDelay: `${-delay}s` } : undefined}
    >
      <path
        d="M14 62Q1 62 2 49Q3 38 15 37Q13 22 28 20Q31 5 48 9Q57-2 71 7Q86 1 93 16Q110 14 111 31Q123 35 119 50Q118 62 104 62Z"
        fill="#ffffff"
        stroke="var(--ink)"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path d="M22 46Q26 38 36 40M78 30Q86 24 96 30" fill="none" stroke="var(--ink)" strokeWidth="2" strokeLinecap="round" opacity="0.35" />
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
    <span aria-hidden="true" className={`inline-flex ${moving ? "motion-reduce:hidden" : ""} ${className}`}>
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
