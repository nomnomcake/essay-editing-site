import Link from "next/link";
import { Cloud, Sparkle } from "@/components/Decorations";
import { RetroWindow } from "@/components/RetroWindow";
import { pages, site, ui } from "@/content";

/** Site footer, drawn as a small readme window at the bottom of the desktop. */
export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mx-auto w-full max-w-7xl px-4 pt-6 pb-10">
      <div className="relative">
        <Sparkle tone="gold" size={20} className="absolute -top-5 left-8" animated />
        <Cloud size="sm" className="absolute -top-6 right-10" />
        <RetroWindow title={pages.desktop.footerTitle} variant="plain">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div className="flex flex-col gap-2">
              <p className="font-pixel text-xs">{site.shortName}</p>
              <p className="text-sm">{site.footer.note}</p>
              <a
                href={`mailto:${site.contactEmail}`}
                className="focus-retro w-fit r-tight text-sm underline decoration-2 underline-offset-2"
              >
                {site.contactEmail}
              </a>
            </div>
            <nav aria-label={site.footer.copyright} className="flex flex-wrap gap-x-4 gap-y-2">
              {site.footer.links.map((l) => (
                <Link key={l.href} href={l.href} className="focus-retro r-tight font-pixel text-xs hover:underline">
                  {l.label}
                </Link>
              ))}
            </nav>
            <ul className="flex gap-4">
              {site.social.map((s) => (
                <li key={s.id}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus-retro r-tight font-pixel text-xs hover:underline"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <p className="mt-6 font-pixel text-[10px]">
            {ui.glyph.copyright} {year} {site.footer.copyright}
          </p>
        </RetroWindow>
      </div>
    </footer>
  );
}
