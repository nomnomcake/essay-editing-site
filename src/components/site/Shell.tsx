"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { pages } from "@/content";
import { WindowDots } from "@/components/Icons";
import { SiteTabs } from "./SiteTabs";

const MAIN_ID = "main";

function Glyph({ children }: { children: ReactNode }) {
  return <span className="inline-flex size-6 items-center justify-center text-ink">{children}</span>;
}

/**
 * The site is one full-screen browser window. Tabs in the title bar switch
 * pages, the address bar reflects the page, and the page scrolls below.
 */
export function Shell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const url = `${pages.desktop.urlPrefix}${pathname.replace(/^\//, "")}`;

  return (
    <div className="flex h-dvh flex-col p-2 md:p-3">
      <div className="flex min-h-0 flex-1 flex-col overflow-hidden outline-ink r-soft bg-cream text-ink">
        {/* Title bar with the real navigation tabs */}
        <div className="flex items-end gap-2 border-b-[3px] border-ink bg-cream px-3 pt-2">
          <SiteTabs />
          <span aria-hidden="true" className="mb-1.5 flex shrink-0 items-center gap-3 self-center">
            <span className="stripes-ink hidden h-2.5 w-16 opacity-45 md:block" />
            <WindowDots />
          </span>
        </div>

        {/* Address bar, decorative */}
        <div aria-hidden="true" className="hidden items-center gap-2 border-b-[3px] border-ink bg-cream px-3 py-2 md:flex">
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

        {/* The page */}
        <main
          id={MAIN_ID}
          className="min-h-0 flex-1 overflow-y-auto bg-peach-bg [background-image:linear-gradient(to_right,rgb(90_58_52/0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgb(90_58_52/0.07)_1px,transparent_1px)] [background-size:28px_28px]"
        >
          {children}
        </main>
      </div>
    </div>
  );
}
