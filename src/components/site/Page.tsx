import type { ReactNode } from "react";
import { Sparkle } from "@/components/Decorations";
import { DesktopRail } from "./DesktopRail";

/** Page content area inside the full-screen window, with the desktop icon rail beside it. */
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
  return (
    <div className={`mx-auto flex gap-8 px-4 py-6 md:py-10 ${wide ? "max-w-7xl" : "max-w-6xl"}`}>
      <div className="flex min-w-0 flex-1 flex-col gap-10">
        {heading ? (
          <div className="flex flex-col gap-3">
            <h1 className="flex items-center gap-3 font-pixel text-xl md:text-2xl">
              <Sparkle tone="gold" size={20} />
              <span>{heading}</span>
            </h1>
            {intro ? <p className="max-w-prose text-lg">{intro}</p> : null}
          </div>
        ) : null}
        {children}
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
