import type { ReactNode } from "react";
import { ui } from "@/content/ui";
import { WindowDots } from "./Icons";

export interface RetroWindowProps {
  /** Lowercase title shown in the title bar. */
  title: string;
  /** "browser" adds nav glyphs, a URL pill and a star. Collapses to "plain" below 768px. */
  variant?: "browser" | "plain";
  /** Text shown inside the fake URL pill. Decorative. */
  url?: string;
  /** Fill colour of the window body. */
  fill?: "cream" | "accent" | "peach" | "night";
  /** Remove body padding, e.g. for a full-bleed sky panel. */
  flush?: boolean;
  className?: string;
  /** Real navigation tabs rendered in the title bar instead of the static title. Not aria-hidden. */
  tabs?: ReactNode;
  children: ReactNode;
}

const fills: Record<NonNullable<RetroWindowProps["fill"]>, string> = {
  cream: "bg-cream",
  accent: "bg-accent",
  peach: "bg-peach-bg",
  night: "bg-night",
};

function Glyph({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex size-6 items-center justify-center r-tight text-ink">
      {children}
    </span>
  );
}

/** Use for any panel that should read as a desktop window: heroes, tables, embeds, cards with a title. */
export function RetroWindow({
  title,
  variant = "plain",
  url = ui.window.defaultUrl,
  fill = "cream",
  flush = false,
  className = "",
  tabs,
  children,
}: RetroWindowProps) {
  const isBrowser = variant === "browser";

  return (
    <section
      className={`outline-ink r-soft overflow-hidden bg-cream text-ink ${className}`}
    >
      {/* Title bar. Decorative chrome unless real tabs are passed in. */}
      <div
        className="flex items-end gap-2 border-b-[3px] border-ink bg-cream px-3 pt-2 font-pixel text-xs"
      >
        {tabs ? (
          tabs
        ) : (
          <span
            aria-hidden="true"
            className="-mb-[3px] inline-flex items-center gap-2 border-b-0 outline-ink r-tab rounded-b-none bg-peach-bg px-2 py-1.5"
          >
            <span>{title}</span>
            <span className="text-[10px]">{ui.glyph.close}</span>
          </span>
        )}
        <span aria-hidden="true" className="mb-1.5 ml-auto flex flex-1 items-center gap-3 self-center">
          <span className="stripes-ink h-2.5 min-w-6 flex-1 opacity-45" />
          <WindowDots />
        </span>
      </div>

      {isBrowser ? (
        <div
          aria-hidden="true"
          className="hidden items-center gap-2 border-b-[3px] border-ink bg-cream px-3 py-2 md:flex"
        >
          <Glyph>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M9 2 4 7l5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Glyph>
          <Glyph>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="m5 2 5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Glyph>
          <Glyph>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M11.5 7a4.5 4.5 0 1 1-1.3-3.2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M11.5 2.5v3h-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Glyph>
          <Glyph>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7 7 2.5 12 7v5H8.5V9h-3v3H2V7Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
            </svg>
          </Glyph>
          <span className="flex-1 truncate outline-ink rounded-full bg-cream px-3 py-1 font-pixel text-[11px]">
            {url}
          </span>
          <Glyph>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="m7 1.5 1.7 3.6 3.9.5-2.9 2.7.8 3.9L7 10.3l-3.5 1.9.8-3.9L1.4 5.6l3.9-.5L7 1.5Z"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinejoin="round"
              />
            </svg>
          </Glyph>
        </div>
      ) : null}

      <div className={`${fills[fill]} ${flush ? "" : "p-4 md:p-6"}`}>{children}</div>
    </section>
  );
}
