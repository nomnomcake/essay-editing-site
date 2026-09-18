import Link from "next/link";
import { DottedFrame } from "@/components/DottedFrame";
import { CloseBadge, EnvelopeIcon, GlobeIcon, StarIcon } from "@/components/Icons";
import { DocIcon } from "@/components/DocIcon";
import { pages, site } from "@/content";

const c = pages.desktop;

const iconLink =
  "focus-retro flex w-24 flex-col items-center gap-1.5 r-tight p-2 text-center font-pixel text-[10px] leading-tight hover:bg-cream/70";

/**
 * Desktop objects beside the page, on the home page only.
 *
 * Deliberately does NOT repeat the title-bar tabs. Everything here is either an
 * action (start, book, email) or a document, so the rail never competes with
 * the navigation as a second, parallel menu.
 */
export function DesktopRail() {
  return (
    <aside aria-label={c.rail} className="hidden w-28 shrink-0 flex-col items-center gap-7 lg:flex">
      <Link href={site.cta.href} className={iconLink}>
        <StarIcon size={52} />
        <span>{c.star}</span>
      </Link>

      <Link href={site.book.href} className={iconLink}>
        <GlobeIcon size={48} />
        <span>{c.globe}</span>
      </Link>

      <a href={`mailto:${site.contactEmail}`} className={iconLink}>
        <EnvelopeIcon size={48} />
        <span>{c.mail}</span>
      </a>

      <DottedFrame padding="sm" className="relative bg-cream/40">
        <CloseBadge className="absolute -top-3 -left-3" />
        <div className="flex flex-col gap-3">
          <Link href="/samples" className={`${iconLink} w-auto`}>
            <DocIcon label={c.docs.samples} size="sm" tone="periwinkle" />
          </Link>
          <Link href="/terms" className={`${iconLink} w-auto`}>
            <DocIcon label={c.docs.terms} size="sm" />
          </Link>
        </div>
      </DottedFrame>
    </aside>
  );
}
