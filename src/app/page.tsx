import type { Metadata } from "next";
import Link from "next/link";
import {
  Button,
  Cloud,
  DialogBox,
  DottedFrame,
  FolderTab,
  RetroWindow,
  Sparkle,
  Sun,
} from "@/components";
import { SectionHeading } from "@/components/site/Page";
import { JsonLd, serviceSchema } from "@/components/site/JsonLd";
import { DesktopRail } from "@/components/site/DesktopRail";
import { HomeSearch } from "./HomeSearch";
import {
  credentials,
  faq,
  packages,
  pages,
  process,
  site,
} from "@/content";
import type { FolderTone } from "@/components";

const c = pages.home;

export const metadata: Metadata = {
  title: { absolute: `${c.meta.title} | ${site.name}` },
  description: c.meta.description,
};

const tones: FolderTone[] = ["coral", "periwinkle", "gold", "periwinkle"];

export default function HomePage() {
  const faqAnchor = `#${c.faqPreview.anchor}`;

  return (
    <>
      <JsonLd data={serviceSchema()} />
      {/* Sky. Clouds mass into banks at the top and bottom edges, with a few
          crossing the open middle in three parallax layers. Banks are sized per
          breakpoint rather than CSS-scaled, so outline weight stays constant. */}
      <section className="border-b-[2.5px] border-ink bg-coral">
        <div className="relative h-72 overflow-hidden md:h-[26rem]">
          <Sun size={56} animated className="absolute top-14 left-6 md:top-20 md:left-24" />

          {/* Top bank, flipped so the lobes hang downward. Anchored, so reduced motion keeps a full sky. */}
          <Cloud size="sm" shape="lumpy" flip animated className="absolute -top-8 -left-8 md:hidden" />
          <Cloud size="md" shape="peaked" flip animated delay={3} className="absolute -top-10 -right-10 md:hidden" />
          <Cloud size="lg" shape="lumpy" flip animated className="absolute -top-16 -left-12 hidden md:inline-flex" />
          <Cloud size="md" shape="puff" flip animated delay={2} className="absolute -top-10 left-44 hidden md:inline-flex" />
          <Cloud size="xl" shape="tall" flip animated delay={1} className="absolute -top-24 right-40 hidden lg:inline-flex" />
          <Cloud size="lg" shape="peaked" flip animated delay={3} className="absolute -top-14 -right-16 hidden md:inline-flex" />

          {/* Bottom bank, lobes up, cut off by the bottom edge. */}
          <Cloud size="md" shape="wide" animated delay={1.5} className="absolute -bottom-12 -left-10 md:hidden" />
          <Cloud size="sm" shape="tall" animated delay={3.5} className="absolute -bottom-8 right-4 md:hidden" />
          <Cloud size="xl" shape="wide" animated delay={1.5} className="absolute -bottom-20 -left-20 hidden md:inline-flex" />
          <Cloud size="lg" shape="tall" animated delay={3.5} className="absolute -bottom-16 left-1/4 hidden lg:inline-flex" />
          <Cloud size="xl" shape="lumpy" animated delay={0.5} className="absolute -bottom-24 left-1/2 hidden md:inline-flex" />
          <Cloud size="lg" shape="puff" animated delay={2.5} className="absolute -bottom-14 -right-10 hidden md:inline-flex" />

          {/* Crossing the open middle. Far layer small and slow, near layer big and quick. */}
          <Cloud size="xs" shape="puff" drift={86} delay={26} className="absolute left-0 top-16 md:top-12" />
          <Cloud size="xs" shape="wide" drift={80} delay={54} className="absolute left-0 top-36 hidden md:inline-flex" />
          <Cloud size="sm" shape="lumpy" drift={74} delay={12} className="absolute left-0 top-28 md:top-24" />
          <Cloud size="md" shape="peaked" drift={58} delay={40} className="absolute left-0 top-48 hidden md:inline-flex" animated />
          <Cloud size="lg" shape="tall" drift={46} delay={22} className="absolute left-0 top-28 hidden lg:inline-flex" animated />

          <Sparkle tone="cream" size={20} className="absolute top-20 left-1/2" animated />
          <Sparkle tone="cream" size={14} className="absolute top-36 right-1/4" animated />
          <Sparkle tone="cream" size={16} className="absolute bottom-28 left-14" animated />
          <Sparkle tone="cream" size={12} className="hidden md:block absolute top-1/2 left-1/3" animated />
          <Sparkle tone="gold" size={18} className="hidden md:block absolute bottom-32 right-28" animated />
          <Sparkle tone="cream" size={15} className="hidden md:block absolute top-28 right-1/3" animated />
        </div>
      </section>

      <div className="mx-auto flex max-w-7xl gap-8 px-4 py-8 md:py-12">
        <div className="flex min-w-0 flex-1 flex-col gap-14">
      <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
        <div className="flex flex-col gap-3">
          <h1 className="text-3xl font-bold leading-tight md:text-5xl">{c.headline}</h1>
          <p className="max-w-prose text-lg">{c.subcopy}</p>
        </div>
        <DialogBox prompt={c.dialog.prompt} yesHref={site.cta.href} noHref={faqAnchor} />
      </div>

      <HomeSearch />

      {/* Credentials strip */}
      <section className="flex flex-col gap-4">
        <SectionHeading>{c.credentials.heading}</SectionHeading>
        <ul className="flex flex-wrap gap-3">
          {credentials.map((cr) => (
            <li
              key={cr.id}
              className="flex items-center gap-2 outline-ink r-soft bg-cream px-3 py-2 text-sm"
            >
              <Sparkle tone="gold" size={12} />
              <span>{cr.text}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Process row */}
      <section className="flex flex-col gap-4">
        <SectionHeading>{c.process.heading}</SectionHeading>
        <DottedFrame>
          <ol className="grid gap-6 md:grid-cols-4">
            {process.map((step) => (
              <li key={step.id} className="flex flex-col gap-2">
                <h3 className="font-pixel text-xs">{step.title}</h3>
                <p>{step.description}</p>
                <dl className="mt-1 flex flex-col gap-1 text-sm">
                  <div className="flex gap-2">
                    <dt className="font-pixel text-[10px] uppercase pt-0.5 w-8 shrink-0">{c.process.you}</dt>
                    <dd>{step.you}</dd>
                  </div>
                  <div className="flex gap-2">
                    <dt className="font-pixel text-[10px] uppercase pt-0.5 w-8 shrink-0">{c.process.me}</dt>
                    <dd>{step.me}</dd>
                  </div>
                </dl>
              </li>
            ))}
          </ol>
        </DottedFrame>
      </section>

      {/* Packages */}
      <section className="flex flex-col gap-4">
        <div className="flex items-baseline justify-between gap-4">
          <SectionHeading>{c.packages.heading}</SectionHeading>
          <Link href="/packages" className="focus-retro r-tight font-pixel text-xs underline underline-offset-4">
            {c.packages.seeAll}
          </Link>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {packages.map((p, i) => (
            <FolderTab key={p.id} label={p.name.toLowerCase()} tone={tones[i % tones.length]} featured={p.featured}>
              <div className="flex h-full flex-col gap-3">
                <p className="text-sm">{p.summary}</p>
                <ul className="flex flex-col gap-1 font-pixel text-[11px]">
                  <li>
                    {p.essayCount} {c.packages.essays}
                  </li>
                  <li>
                    {p.turnaroundDays} {c.packages.turnaround}
                  </li>
                  <li>
                    {p.revisionRounds} {c.packages.rounds}
                  </li>
                </ul>
                <p className="mt-auto text-2xl font-bold">{p.price}</p>
                <Button as="link" href={`/packages#${p.id}`} variant="ghost" size="sm">
                  {c.packages.seeAll}
                </Button>
              </div>
            </FolderTab>
          ))}
        </div>
      </section>

      {/* FAQ preview */}
      <section id={c.faqPreview.anchor} className="flex flex-col gap-4 scroll-mt-24">
        <div className="flex items-baseline justify-between gap-4">
          <SectionHeading>{c.faqPreview.heading}</SectionHeading>
          <Link href="/faq" className="focus-retro r-tight font-pixel text-xs underline underline-offset-4">
            {c.faqPreview.seeAll}
          </Link>
        </div>
        <RetroWindow title={c.faqPreview.anchor} variant="plain">
          <ul className="flex flex-col divide-y-2 divide-ink/20">
            {faq.slice(0, 4).map((q) => (
              <li key={q.id} className="py-3 first:pt-0 last:pb-0">
                <Link href={`/faq#${q.id}`} className="focus-retro r-tight font-semibold underline decoration-2 underline-offset-2">
                  {q.question}
                </Link>
              </li>
            ))}
          </ul>
        </RetroWindow>
      </section>
        </div>
        <DesktopRail />
      </div>
    </>
  );
}
