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
import { SiteTabs } from "@/components/site/SiteTabs";
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
    <div className="mx-auto flex max-w-7xl gap-8 px-4 py-6 md:py-10">
      <JsonLd data={serviceSchema()} />
      <div className="flex min-w-0 flex-1 flex-col gap-14">
      {/* Hero */}
      <RetroWindow title={c.window.title} url={c.window.url} variant="browser" fill="coral" flush tabs={<SiteTabs />}>
        <div className="relative h-44 overflow-hidden border-b-[2.5px] border-ink md:h-64">
          <Sun size={40} className="absolute top-6 left-8 md:left-16" />
          <Cloud size="lg" className="absolute top-4 right-6 md:right-24" animated />
          <Cloud size="md" className="absolute bottom-4 left-1/3 md:left-1/4" />
          <Cloud size="sm" className="hidden md:block absolute bottom-8 right-1/3" />
          <Cloud size="md" className="hidden md:block absolute -bottom-3 -right-4" />
          <Sparkle tone="cream" size={18} className="absolute top-10 left-1/2" animated />
          <Sparkle tone="cream" size={12} className="absolute top-20 right-1/4" />
          <Sparkle tone="cream" size={14} className="hidden md:block absolute bottom-10 left-16" animated />
        </div>
        <div className="grid gap-6 bg-cream p-5 md:grid-cols-[1fr_auto] md:items-center md:p-8">
          <div className="flex flex-col gap-3">
            <h1 className="text-3xl font-bold leading-tight md:text-4xl">{c.headline}</h1>
            <p className="max-w-prose text-lg">{c.subcopy}</p>
          </div>
          <DialogBox prompt={c.dialog.prompt} yesHref={site.cta.href} noHref={faqAnchor} />
        </div>
      </RetroWindow>

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
  );
}
