import type { ReactNode } from "react";

export type FolderTone = "accent" | "periwinkle" | "gold";

/** How the top of the card body is filled, under the tab. */
export type FolderPattern = "scallop" | "band" | "dots" | "none";

export interface FolderTabProps {
  /** Text on the protruding tab. */
  label: string;
  tone?: FolderTone;
  pattern?: FolderPattern;
  /** Marks the folder as the highlighted option. Adds a flat shadow. */
  featured?: boolean;
  className?: string;
  children?: ReactNode;
}

const tones: Record<FolderTone, { tab: string; fill: string }> = {
  accent: { tab: "bg-accent", fill: "var(--accent)" },
  periwinkle: { tab: "bg-periwinkle", fill: "var(--periwinkle)" },
  gold: { tab: "bg-gold", fill: "var(--gold)" },
};

/** Use for package cards and grouped navigation. The body stays cream so text is ink on cream. */
export function FolderTab({
  label,
  tone = "gold",
  pattern = "scallop",
  featured = false,
  className = "",
  children,
}: FolderTabProps) {
  const t = tones[tone];
  const insetTop = pattern === "scallop" || pattern === "band";

  return (
    <div className={`flex flex-col text-ink ${className}`}>
      <div
        className={`-mb-[3px] ml-3 inline-flex w-fit max-w-[80%] outline-ink r-tight rounded-b-none border-b-0 px-3 py-1 font-pixel text-xs ${t.tab}`}
      >
        <span className="truncate">{label}</span>
      </div>

      <div
        className={`relative flex-1 overflow-hidden outline-ink r-soft rounded-tl-none bg-cream ${featured ? "shadow-flat" : ""}`}
      >
        {/* Decorative fill across the top of the card, under the tab. */}
        {pattern === "scallop" ? (
          <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0">
            <div className="h-7" style={{ background: t.fill }} />
            <div
              className="h-3"
              style={{
                backgroundImage: `radial-gradient(circle at 50% 0%, ${t.fill} 58%, transparent 60%)`,
                backgroundSize: "22px 22px",
                backgroundRepeat: "repeat-x",
              }}
            />
          </div>
        ) : null}

        {pattern === "band" ? (
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-9 border-b-[3px] border-ink"
            style={{ background: t.fill }}
          />
        ) : null}

        {pattern === "dots" ? (
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-16"
            style={{
              backgroundImage: `radial-gradient(${t.fill} 2.4px, transparent 2.5px)`,
              backgroundSize: "10px 10px",
              maskImage: "linear-gradient(to bottom, black 0, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to bottom, black 0, transparent 100%)",
            }}
          />
        ) : null}

        {/* Padding is per-side. A shorthand p-* in a breakpoint would override pt-* below it. */}
        <div
          className={`relative px-4 pb-4 md:px-5 md:pb-5 ${
            insetTop ? "pt-14 md:pt-16" : "pt-4 md:pt-5"
          }`}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
