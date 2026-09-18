import type { Metadata } from "next";
import Link from "next/link";
import { Button, Cloud, DottedFrame, FolderTab, Moon, RetroWindow, Sparkle } from "@/components";
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

const tones: FolderTone[] = ["accent", "periwinkle", "gold", "periwinkle"];

export default function HomePage() {
  const faqAnchor = `#${c.faqPreview.anchor}`;

  return (
    <>
      <JsonLd data={serviceSchema()} />
      {/* Night sky. Every cloud does the same thing: drift left to right.
          Clouds without a drift are static, which is also the reduced-motion view. */}
      <section className="relative border-b-[3px] border-ink bg-night">
        <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
          <Moon size={64} withStar animated className="absolute top-8 right-10 md:top-14 md:right-28" />

          {/* Static clouds, anchored at the edges. */}
          <Cloud size="lg" className="absolute -top-12 -left-10" />
          <Cloud size="xl" className="absolute -bottom-16 -left-16 hidden md:inline-flex" />
          <Cloud size="md" className="absolute -bottom-10 -left-8 md:hidden" />
          <Cloud size="xl" className="absolute -bottom-20 right-0 hidden lg:inline-flex" />
          <Cloud size="lg" className="absolute -bottom-14 -right-10 md:hidden" />

          {/* Drifting clouds. Far ones small and slow, near ones large and quicker. */}
          <Cloud size="xs" drift={280} delay={85} className="absolute left-0 top-10" />
          <Cloud size="sm" drift={240} delay={39} className="absolute left-0 top-28 hidden md:inline-flex" />
          <Cloud size="md" drift={190} delay={131} className="absolute left-0 bottom-24 hidden lg:inline-flex" />

          <Sparkle tone="cream" size={36} className="absolute top-20 left-1/3" animated />
          <Sparkle tone="gold" size={26} className="absolute top-40 right-1/3" animated />
          <Sparkle tone="cream" size={24} className="absolute bottom-28 left-20" animated />
          <Sparkle tone="cream" size={28} className="hidden md:block absolute top-1/2 right-16" animated />
          <Sparkle tone="gold" size={20} className="hidden md:block absolute top-24 left-2/3" animated />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 pt-24 pb-14 md:py-24">
          <div className="grid max-w-3xl gap-6 outline-ink r-soft bg-cream p-6 shadow-[4px_4px_0_var(--ink)] md:p-9">
            <h1 className="text-3xl font-bold leading-tight md:text-5xl">{c.headline}</h1>
            <p className="max-w-prose text-lg">{c.subcopy}</p>
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <Button as="link" href={site.cta.href} size="lg">
                {site.cta.label}
              </Button>
              <Button as="link" href={faqAnchor} variant="ghost" size="lg">
                {c.faqPreview.seeAll}
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto flex max-w-7xl gap-8 px-4 py-10 md:py-14">
        <div className="flex min-w-0 flex-1 flex-col gap-14">
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
