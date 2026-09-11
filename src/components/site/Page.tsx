import type { ReactNode } from "react";
import { Sparkle } from "@/components/Decorations";

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
    <div className={`mx-auto px-4 py-8 md:py-12 ${wide ? "max-w-6xl" : "max-w-4xl"}`}>
      <div className="flex min-w-0 flex-col gap-10">
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
