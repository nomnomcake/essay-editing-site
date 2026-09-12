import Link from "next/link";
import { Cloud } from "@/components/Decorations";
import { DocIcon } from "@/components/DocIcon";
import { DottedFrame } from "@/components/DottedFrame";
import { HeartRow } from "@/components/HeartRow";
import { CloseBadge, EnvelopeIcon, FolderIcon, GlobeIcon, StarIcon } from "@/components/Icons";
import { pages, site } from "@/content";

const c = pages.desktop;

const iconLink =
  "focus-retro group flex w-20 flex-col items-center gap-1 r-tight p-1 text-center font-pixel text-[10px] leading-tight hover:bg-cream/70";

/** The column of desktop icons from the reference. Every icon is a real link; the glyphs are decorative. */
export function DesktopRail() {
  return (
    <aside aria-label={c.rail} className="hidden lg:flex lg:w-52 lg:shrink-0 lg:flex-col lg:items-center lg:gap-6">
      <HeartRow filled={5} />

      <div className="mt-2 grid grid-cols-2 gap-x-2 gap-y-4">
        <Link href={site.book.href} className={iconLink}>
          <GlobeIcon size={52} />
          <span>{c.globe}</span>
        </Link>
        {site.nav.map((item) => (
          <Link key={item.href} href={item.href} className={iconLink}>
            <FolderIcon size={52} />
            <span>{item.label}</span>
          </Link>
        ))}
        <a href={`mailto:${site.contactEmail}`} className={iconLink}>
          <EnvelopeIcon size={52} />
          <span>{c.mail}</span>
        </a>
      </div>

      <DottedFrame padding="sm" className="relative bg-cream/40">
        <CloseBadge className="absolute -top-3 -right-3" />
        <div className="flex gap-3">
          <Link href="/samples" className={`${iconLink} w-auto`}>
            <DocIcon label={c.docs.samples} size="sm" tone="periwinkle" />
          </Link>
          <Link href="/terms" className={`${iconLink} w-auto`}>
            <DocIcon label={c.docs.terms} size="sm" />
          </Link>
        </div>
      </DottedFrame>

      <Link href={site.cta.href} className={iconLink}>
        <StarIcon size={56} />
        <span>{c.star}</span>
      </Link>

      <Cloud size="md" animated className="block" />
    </aside>
  );
}
