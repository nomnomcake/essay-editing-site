"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { Sparkle } from "@/components/Decorations";
import { pages, site, ui } from "@/content";

/** Site header with primary nav. Collapses to a toggle below md. */
export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const menuId = useId();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-40 px-4 pt-4">
      <div className="relative mx-auto flex max-w-7xl items-end gap-3 outline-ink r-soft bg-cream px-3 pt-3 pb-2 shadow-[3px_3px_0_var(--ink)]">
        <Link
          href="/"
          className="focus-retro inline-flex items-center gap-2 outline-ink r-tight rounded-b-none border-b-0 bg-peach-bg px-3 py-1 font-pixel text-sm -mb-2 py-2"
        >
          <Sparkle tone="gold" size={18} />
          <span>{site.shortName}</span>
        </Link>

        <nav
          id={menuId}
          aria-label={pages.layout.menu}
          className={`${open ? "flex" : "hidden"} absolute inset-x-0 top-full mt-2 flex-col gap-1 outline-ink r-soft bg-cream p-3 md:static md:mt-0 md:border-0 md:shadow-none md:ml-auto md:flex md:flex-row md:items-end md:gap-1 md:self-stretch md:border-0 md:p-0`}
        >
          {site.nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`focus-retro outline-ink r-tight px-3 py-1.5 font-pixel text-xs hover:bg-peach-bg md:-mb-2 md:rounded-b-none md:border-b-0 md:py-2 ${active ? "bg-peach-bg" : "bg-cream"}`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href={site.cta.href}
            className="focus-retro mt-2 outline-ink r-tight bg-coral px-3 py-1.5 font-pixel text-xs hover:bg-coral-deep md:mt-0 md:ml-2 md:-mb-2 md:rounded-b-none md:border-b-0 md:py-2"
          >
            {site.cta.label}
          </Link>
        </nav>

        <button
          type="button"
          className="focus-retro ml-auto inline-flex size-10 items-center justify-center outline-ink r-tight bg-cream md:hidden"
          aria-expanded={open}
          aria-controls={menuId}
          aria-label={open ? pages.layout.close : pages.layout.menu}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true" focusable="false">
            {open ? (
              <path d="m3 3 12 12M15 3 3 15" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            ) : (
              <path d="M2 4h14M2 9h14M2 14h14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            )}
          </svg>
        </button>
        <span aria-hidden="true" className="mb-1 ml-2 hidden size-5 items-center justify-center outline-ink r-tight bg-cream text-[10px] leading-none md:inline-flex">{ui.glyph.close}</span>
      </div>
    </header>
  );
}
