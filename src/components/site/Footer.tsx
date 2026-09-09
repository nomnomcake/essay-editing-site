import Link from "next/link";
import { Cloud } from "@/components/Decorations";
import { site, ui } from "@/content";

/** Site footer: legal links, contact, socials. */
export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-16 border-t-[2.5px] border-ink bg-cream">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-8 md:flex-row md:items-start md:justify-between">
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
            <Link
              key={l.href}
              href={l.href}
              className="focus-retro r-tight font-pixel text-xs hover:underline"
            >
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
      <div className="mx-auto flex max-w-6xl items-end justify-between px-4 pb-4">
        <p className="font-pixel text-[10px]">
          {ui.glyph.copyright} {year} {site.footer.copyright}
        </p>
        <Cloud size="sm" />
      </div>
    </footer>
  );
}
