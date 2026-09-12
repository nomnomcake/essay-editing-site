import type { ReactNode } from "react";

export type FolderTone = "accent" | "periwinkle" | "gold";

export interface FolderTabProps {
  /** Text on the protruding tab. */
  label: string;
  tone?: FolderTone;
  /** Marks the folder as the highlighted option. Adds a flat shadow. */
  featured?: boolean;
  className?: string;
  children?: ReactNode;
}

const tones: Record<FolderTone, { tab: string; stripe: string }> = {
  accent: { tab: "bg-accent", stripe: "var(--accent)" },
  periwinkle: { tab: "bg-periwinkle", stripe: "var(--periwinkle)" },
  gold: { tab: "bg-gold", stripe: "var(--gold)" },
};

/** Use for package cards and grouped navigation. The body is cream so text stays ink-on-cream. */
export function FolderTab({
  label,
  tone = "gold",
  featured = false,
  className = "",
  children,
}: FolderTabProps) {
  const t = tones[tone];
  return (
    <div className={`flex flex-col text-ink ${className}`}>
      <div
        className={`-mb-[3px] ml-3 inline-flex w-fit max-w-[80%] outline-ink r-tight rounded-b-none border-b-0 px-3 py-1 font-pixel text-xs ${t.tab}`}
      >
        <span className="truncate">{label}</span>
      </div>
      <div
        className={`relative flex-1 outline-ink r-soft rounded-tl-none bg-cream ${featured ? "shadow-flat" : ""}`}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 r-soft rounded-tl-none opacity-60"
          style={{
            background: `repeating-linear-gradient(135deg, ${t.stripe} 0 10px, transparent 10px 22px)`,
            maskImage: "linear-gradient(to bottom, black 0, transparent 34px)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 0, transparent 34px)",
          }}
        />
        <div className="relative p-4 md:p-5">{children}</div>
      </div>
    </div>
  );
}
