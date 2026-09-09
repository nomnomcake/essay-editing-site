"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { Button } from "@/components/Button";
import { Sparkle } from "@/components/Decorations";
import { pages, site } from "@/content";

/** Site header with primary nav. Collapses to a toggle below md. */
export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const menuId = useId();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-40 border-b-[2.5px] border-ink bg-cream">
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-3">
        <Link
          href="/"
          className="focus-retro inline-flex items-center gap-2 outline-ink r-tight bg-peach-bg px-3 py-1 font-pixel text-sm"
        >
          <Sparkle tone="gold" size={18} />
          <span>{site.shortName}</span>
        </Link>

        <nav
          id={menuId}
          aria-label={pages.layout.menu}
          className={`${open ? "flex" : "hidden"} absolute inset-x-0 top-full flex-col gap-1 border-b-[2.5px] border-ink bg-cream p-3 md:static md:ml-auto md:flex md:flex-row md:items-center md:gap-1 md:border-0 md:p-0`}
        >
          {site.nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`focus-retro r-tight px-3 py-2 font-pixel text-xs hover:bg-peach-bg ${active ? "bg-peach-bg" : ""}`}
              >
                {item.label}
              </Link>
            );
          })}
          <div className="mt-2 md:mt-0 md:ml-2">
            <Button as="link" href={site.cta.href} size="sm">
              {site.cta.label}
            </Button>
          </div>
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
      </div>
    </header>
  );
}
