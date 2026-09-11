"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { pages, site, ui } from "@/content";
import { SiteTabs } from "./SiteTabs";

const MAIN_ID = "main";

function Glyph({ children }: { children: ReactNode }) {
  return <span className="inline-flex size-6 items-center justify-center text-ink">{children}</span>;
}

/**
 * The full-screen browser window. Title bar on top, scrolling page in the middle,
 * navigation tabs fixed along the bottom.
 */
export function Shell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const current =
    pathname === "/"
      ? site.shortName
      : [...site.nav, site.cta, site.book].find((n) => n.href === pathname)?.label ??
        pathname.replace(/^\//, "");
  const url = `${pages.desktop.urlPrefix}${pathname === "/" ? "" : pathname.replace(/^\//, "")}`;

  return (
    <div className="flex h-dvh flex-col p-2 md:p-3">
      <div className="flex min-h-0 flex-1 flex-col overflow-hidden outline-ink r-soft bg-cream text-ink">
        {/* Top chrome: decorative title and address bar */}
        <div aria-hidden="true" className="flex items-end gap-2 border-b-[2.5px] border-ink bg-cream px-3 pt-2 font-pixel text-xs">
          <span className="-mb-[2.5px] inline-flex items-center gap-2 border-b-0 outline-ink r-tight rounded-b-none bg-peach-bg px-3 py-1.5">
            <span>{current}</span>
            <span className="text-[10px]">{ui.glyph.close}</span>
          </span>
          <span className="mb-2 ml-auto inline-flex size-5 items-center justify-center outline-ink r-tight bg-cream text-[10px] leading-none">
            {ui.glyph.close}
          </span>
        </div>
        <div aria-hidden="true" className="hidden items-center gap-2 border-b-[2.5px] border-ink bg-cream px-3 py-2 md:flex">
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
          <span className="flex-1 truncate outline-ink rounded-full bg-cream px-3 py-1 font-pixel text-[11px]">{url}</span>
          <Glyph>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="m7 1.5 1.7 3.6 3.9.5-2.9 2.7.8 3.9L7 10.3l-3.5 1.9.8-3.9L1.4 5.6l3.9-.5L7 1.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
            </svg>
          </Glyph>
        </div>

        {/* Scrolling page */}
        <main
          id={MAIN_ID}
          className="min-h-0 flex-1 overflow-y-auto bg-peach-bg [background-image:linear-gradient(to_right,rgb(90_58_52/0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgb(90_58_52/0.07)_1px,transparent_1px)] [background-size:28px_28px]"
        >
          {children}
        </main>

        {/* Bottom tab bar */}
        <div className="flex items-start gap-2 border-t-[2.5px] border-ink bg-cream px-3 pb-2">
          <SiteTabs />
        </div>
      </div>
    </div>
  );
}

export const SHELL_MAIN_ID = MAIN_ID;
