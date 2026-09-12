import { ui } from "@/content/ui";

export interface HeartRowProps {
  /** Number of filled hearts, 0 to 5. */
  filled: number;
  className?: string;
}

const HEARTS = [0, 1, 2, 3, 4] as const;

/** Use to show a rating next to a testimonial. Not interactive. */
export function HeartRow({ filled, className = "" }: HeartRowProps) {
  const n = Math.max(0, Math.min(5, Math.round(filled)));
  const label = ui.hearts.rating.replace("{n}", String(n));

  return (
    <div
      role="img"
      aria-label={label}
      className={`relative inline-flex items-center gap-1.5 outline-ink r-soft bg-cream px-3 py-2 text-ink ${className}`}
    >
      {HEARTS.map((i) => (
        <svg
          key={i}
          width="18"
          height="16"
          viewBox="0 0 18 16"
          aria-hidden="true"
          focusable="false"
        >
          <path
            d="M9 15 2.2 8.6C.4 6.9.6 4 2.7 2.7A4 4 0 0 1 9 4.1a4 4 0 0 1 6.3-1.4c2.1 1.3 2.3 4.2.5 5.9L9 15Z"
            fill={i < n ? "var(--accent)" : "var(--cream)"}
            stroke="var(--ink)"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      ))}
      {/* speech bubble tail */}
      <svg
        aria-hidden="true"
        focusable="false"
        width="14"
        height="10"
        viewBox="0 0 14 10"
        className="absolute -bottom-[9px] left-4"
      >
        <path d="M1 0h12L4 9Z" fill="var(--cream)" />
        <path d="M0.5 0 4 9l9-9" fill="none" stroke="var(--ink)" strokeWidth="2.5" strokeLinejoin="round" />
      </svg>
    </div>
  );
}
