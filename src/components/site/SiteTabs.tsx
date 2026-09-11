"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sparkle } from "@/components/Decorations";
import { pages, site } from "@/content";

const tab =
  "focus-retro -mt-[2.5px] inline-flex shrink-0 items-center gap-2 border-t-0 outline-ink r-tight rounded-t-none px-3 py-2 font-pixel text-xs whitespace-nowrap";

/** The site navigation, drawn as browser tabs hanging from the bottom bar of the full-screen window. */
export function SiteTabs() {
  const pathname = usePathname();
  const items = [{ href: "/", label: site.shortName }, ...site.nav];

  return (
    <nav
      aria-label={pages.layout.menu}
      className="flex min-w-0 flex-1 items-start gap-1 overflow-x-auto pr-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
    >
      {items.map((item, i) => {
        const active = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={active ? "page" : undefined}
            className={`${tab} ${active ? "bg-peach-bg" : "bg-cream hover:bg-peach-bg/60"}`}
          >
            {i === 0 ? <Sparkle tone="gold" size={14} /> : null}
            <span>{item.label}</span>
          </Link>
        );
      })}
      <Link
        href={site.cta.href}
        aria-current={pathname === site.cta.href ? "page" : undefined}
        className={`${tab} ml-auto bg-coral hover:bg-coral-deep`}
      >
        {site.cta.label}
      </Link>
    </nav>
  );
}
