import type { ReactNode } from "react";
import { RetroWindow } from "@/components/RetroWindow";
import { pages } from "@/content";
import { DesktopRail } from "./DesktopRail";
import { SiteTabs } from "./SiteTabs";

/**
 * Every page is a browser window on the desktop, with the icon rail beside it.
 * The heading becomes the window title and the page intro sits at the top of the window body.
 */
export function Page({
  heading,
  intro,
  children,
  wide = false,
}: {
  heading?: string;
  intro?: string;
  wide?: boolean;
  children: ReactNode;
}) {
  const slug = (heading ?? "").replace(/\s+/g, "-");
  return (
    <div className={`mx-auto flex gap-8 px-4 py-6 md:py-10 ${wide ? "max-w-7xl" : "max-w-6xl"}`}>
      <div className="min-w-0 flex-1">
        <RetroWindow
          title={heading ?? pages.desktop.rail}
          variant="browser"
          url={`${pages.desktop.urlPrefix}${slug}`}
          tabs={<SiteTabs />}
        >
          <div className="flex flex-col gap-10">
            {heading ? (
              <div className="flex flex-col gap-3">
                <h1 className="font-pixel text-xl md:text-2xl">{heading}</h1>
                {intro ? <p className="max-w-prose text-lg">{intro}</p> : null}
              </div>
            ) : null}
            {children}
          </div>
        </RetroWindow>
      </div>
      <DesktopRail />
    </div>
  );
}

/** Section heading used inside pages. */
export function SectionHeading({ children, id }: { children: ReactNode; id?: string }) {
  return (
    <h2 id={id} className="font-pixel text-base md:text-lg">
      {children}
    </h2>
  );
}
