import type { Metadata } from "next";
import Link from "next/link";
import { Button, Cloud, DottedFrame, FolderTab, Moon, RetroWindow, Sparkle } from "@/components";
import { SectionHeading } from "@/components/site/Page";
import { JsonLd, serviceSchema } from "@/components/site/JsonLd";
import { DesktopRail } from "@/components/site/DesktopRail";
import { HomeSearch } from "./HomeSearch";
import { credentials, faq, packages, pages, process, samples, site, ui } from "@/content";
import type { FolderTone } from "@/components";

const c = pages.home;

export const metadata: Metadata = {
  title: { absolute: `${c.meta.title} | ${site.name}` },
  description: c.meta.description,
};

const sample = samples[0];

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

      <div className="mx-auto flex max-w-7xl gap-10 px-4 py-12 md:py-16">
        <div className="flex min-w-0 flex-1 flex-col gap-16">
          {/* 1. What an edit is. The first thing after the hero answers
              "is this for me", before any credentials or pricing. */}
          <section className="flex flex-col gap-5">
            <div className="flex items-baseline justify-between gap-4">
              <SectionHeading>{c.offer.heading}</SectionHeading>
              <Link href="/services" className="focus-retro r-tight font-pixel text-xs underline underline-offset-4">
                {c.offer.seeAll}
              </Link>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              <div className="flex flex-col gap-3 outline-ink r-soft bg-cream p-5">
                <h3 className="font-pixel text-xs">{c.offer.includes}</h3>
                <ul className="flex flex-col gap-2">
                  {pages.services.includes.items.slice(0, 3).map((item) => (
                    <li key={item} className="flex gap-2">
                      <Sparkle tone="gold" size={14} className="mt-1 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col gap-3 outline-ink r-soft bg-cream p-5">
                <h3 className="font-pixel text-xs">{c.offer.excludes}</h3>
                <ul className="flex flex-col gap-2">
                  {pages.services.excludes.items.slice(0, 3).map((item) => (
                    <li key={item} className="flex gap-2">
                      <span aria-hidden="true" className="mt-0.5 font-pixel text-xs">
                        {ui.glyph.close}
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* 2. How it works */}
          <section className="flex flex-col gap-5">
            <SectionHeading>{c.process.heading}</SectionHeading>
            <DottedFrame>
              <ol className="grid gap-6 md:grid-cols-4">
                {process.map((step) => (
                  <li key={step.id} className="flex flex-col gap-2">
                    <h3 className="font-pixel text-xs">{step.title}</h3>
                    <p>{step.description}</p>
                    <dl className="mt-1 flex flex-col gap-1 text-sm">
                      <div className="flex gap-2">
                        <dt className="w-8 shrink-0 pt-0.5 font-pixel text-[10px] uppercase">{c.process.you}</dt>
                        <dd>{step.you}</dd>
                      </div>
                      <div className="flex gap-2">
                        <dt className="w-8 shrink-0 pt-0.5 font-pixel text-[10px] uppercase">{c.process.me}</dt>
                        <dd>{step.me}</dd>
                      </div>
                    </dl>
                  </li>
                ))}
              </ol>
            </DottedFrame>
          </section>

          {/* 3. Who is editing. Trust, once they know what the service is. */}
          <section className="flex flex-col gap-5">
            <div className="flex items-baseline justify-between gap-4">
              <SectionHeading>{c.credentials.heading}</SectionHeading>
              <Link href="/about" className="focus-retro r-tight font-pixel text-xs underline underline-offset-4">
                {c.credentials.seeAll}
              </Link>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {credentials.map((cr) => (
                <li key={cr.id} className="flex items-start gap-2 outline-ink r-soft bg-cream px-4 py-3 text-sm">
                  <Sparkle tone="gold" size={13} className="mt-1 shrink-0" />
                  <span>{cr.text}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* 4. Packages */}
          <section className="flex flex-col gap-5">
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
                  </div>
                </FolderTab>
              ))}
            </div>
          </section>

          {/* 5. Proof. One excerpt, so the editing is visible without leaving home. */}
          <section className="flex flex-col gap-5">
            <div className="flex items-baseline justify-between gap-4">
              <SectionHeading>{c.proof.heading}</SectionHeading>
              <Link href="/samples" className="focus-retro r-tight font-pixel text-xs underline underline-offset-4">
                {c.proof.seeAll}
              </Link>
            </div>
            <RetroWindow title={sample.school.toLowerCase()} variant="plain">
              <div className="flex flex-col gap-4">
                <p className="font-pixel text-[11px]">
                  {sample.prompt} {ui.glyph.dot} {sample.wordLimit} {pages.samples.wordLimit}
                </p>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <h3 className="font-pixel text-[11px] uppercase">{c.proof.before}</h3>
                    <p className="outline-ink r-tight bg-peach-bg p-4 text-sm">{sample.before}</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="font-pixel text-[11px] uppercase">{c.proof.after}</h3>
                    <p className="outline-ink r-tight bg-cream p-4 text-sm">{sample.after}</p>
                  </div>
                </div>
              </div>
            </RetroWindow>
          </section>

          {/* 6. Questions. The search belongs here, where the visitor has them. */}
          <section id={c.faqPreview.anchor} className="flex scroll-mt-24 flex-col gap-5">
            <div className="flex items-baseline justify-between gap-4">
              <SectionHeading>{c.faqPreview.heading}</SectionHeading>
              <Link href="/faq" className="focus-retro r-tight font-pixel text-xs underline underline-offset-4">
                {c.faqPreview.seeAll}
              </Link>
            </div>
            <HomeSearch />
            <ul className="flex flex-col divide-y-2 divide-ink/20 outline-ink r-soft bg-cream px-5">
              {faq.slice(0, 5).map((q) => (
                <li key={q.id} className="py-3">
                  <Link
                    href={`/faq#${q.id}`}
                    className="focus-retro r-tight font-semibold underline decoration-2 underline-offset-2"
                  >
                    {q.question}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          {/* 7. One closing call to action, and only one. */}
          <section className="flex flex-col items-start gap-4 outline-ink r-soft bg-cream p-6 md:flex-row md:items-center md:justify-between md:p-8">
            <div className="flex flex-col gap-2">
              <SectionHeading>{c.closing.heading}</SectionHeading>
              <p className="max-w-prose">{c.closing.body}</p>
            </div>
            <div className="flex shrink-0 flex-wrap gap-3">
              <Button as="link" href={site.cta.href} size="lg">
                {c.closing.primary}
              </Button>
              <Button as="link" href={site.book.href} variant="ghost" size="lg">
                {c.closing.secondary}
              </Button>
            </div>
          </section>
        </div>
        <DesktopRail />
      </div>
    </>
  );
}
