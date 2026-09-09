import { ui } from "@/content/ui";

export interface DocIconProps {
  /** Caption under the icon. Also the accessible name. */
  label: string;
  size?: "sm" | "md" | "lg";
  /** Page fill. */
  tone?: "cream" | "periwinkle";
  className?: string;
}

const sizes: Record<NonNullable<DocIconProps["size"]>, number> = {
  sm: 40,
  md: 64,
  lg: 96,
};

/** Use to represent a document: sample essays, downloadable terms, anything "file shaped". */
export function DocIcon({
  label,
  size = "md",
  tone = "cream",
  className = "",
}: DocIconProps) {
  const w = sizes[size];
  const h = Math.round(w * 1.25);
  const fill = tone === "cream" ? "var(--cream)" : "var(--periwinkle)";
  const fold = w * 0.3;

  return (
    <figure className={`inline-flex flex-col items-center gap-2 text-ink ${className}`}>
      <svg
        width={w}
        height={h}
        viewBox={`0 0 ${w} ${h}`}
        aria-hidden="true"
        focusable="false"
      >
        <path
          d={`M4 8 Q4 4 8 4 H${w - fold - 4} L${w - 4} ${fold + 4} V${h - 8} Q${w - 4} ${h - 4} ${w - 8} ${h - 4} H8 Q4 ${h - 4} 4 ${h - 8} Z`}
          fill={fill}
          stroke="var(--ink)"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        <path
          d={`M${w - fold - 4} 4 V${fold + 4} H${w - 4}`}
          fill="var(--peach-bg)"
          stroke="var(--ink)"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        <text
          x={w / 2}
          y={h / 2 + w * 0.16}
          textAnchor="middle"
          fontSize={w * 0.34}
          fontWeight="700"
          fill="var(--ink)"
          style={{ fontFamily: "var(--font-body)" }}
        >
          {ui.doc.glyph}
        </text>
      </svg>
      <figcaption className="max-w-[10rem] text-center font-pixel text-[11px] leading-snug">
        {label}
      </figcaption>
    </figure>
  );
}
