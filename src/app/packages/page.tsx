import type { Metadata } from "next";
import { Button, DottedFrame, FolderTab, Sparkle } from "@/components";
import { Page, SectionHeading } from "@/components/site/Page";
import { packages, pages, RUSH_MULTIPLIER, site, ui } from "@/content";
import type { FolderTone } from "@/components";

const c = pages.packages;

export const metadata: Metadata = {
  title: c.meta.title,
  description: c.meta.description,
};

const tones: FolderTone[] = ["coral", "periwinkle", "gold", "periwinkle"];

export default function PackagesPage() {
  return (
    <Page heading={c.heading} intro={c.intro} wide>
      <div className="grid gap-10 md:grid-cols-2">
        {packages.map((p, i) => (
          <div key={p.id} id={p.id} className="scroll-mt-24">
            <FolderTab label={p.name.toLowerCase()} tone={tones[i % tones.length]} featured={p.featured}>
              <article className="flex h-full flex-col gap-4">
                <header className="flex flex-col gap-1">
                  {p.featured ? (
                    <span className="w-fit r-tight bg-gold px-2 py-0.5 font-pixel text-[10px]">
                      {c.featured}
                    </span>
                  ) : null}
                  <h2 className="text-2xl font-bold">{p.name}</h2>
                  <p>{p.summary}</p>
                </header>

                <dl className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm">
                  <dt className="font-pixel text-[10px] pt-1">{c.essays}</dt>
                  <dd className="tabular-nums">{p.essayCount}</dd>
                  <dt className="font-pixel text-[10px] pt-1">{c.perEssay}</dt>
                  <dd className="tabular-nums">{p.wordCountCap}</dd>
                  <dt className="font-pixel text-[10px] pt-1">{c.days}</dt>
                  <dd className="tabular-nums">{p.turnaroundDays}</dd>
                  <dt className="font-pixel text-[10px] pt-1">{c.rounds}</dt>
                  <dd className="tabular-nums">{p.revisionRounds}</dd>
                </dl>

                <div className="flex flex-col gap-2">
                  <h3 className="font-pixel text-[11px]">{c.includes}</h3>
                  <ul className="flex flex-col gap-1.5 text-sm">
                    {p.includes.map((item) => (
                      <li key={item} className="flex gap-2">
                        <Sparkle tone="gold" size={12} className="mt-1 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="font-pixel text-[11px]">{c.excludes}</h3>
                  <ul className="flex flex-col gap-1.5 text-sm">
                    {p.excludes.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span aria-hidden="true" className="font-pixel text-[11px]">
                          {ui.glyph.close}
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="mt-auto text-3xl font-bold">{p.price}</p>
                <div className="flex flex-wrap gap-3">
                  <Button as="link" href={site.cta.href} variant="primary">
                    {c.start}
                  </Button>
                  <Button as="link" href={p.stripeLink} external variant="secondary">
                    {c.buy}
                  </Button>
                </div>
              </article>
            </FolderTab>
          </div>
        ))}
      </div>

      <DottedFrame padding="sm">
        <div className="flex flex-col gap-2 p-2">
          <SectionHeading>{c.rush.heading}</SectionHeading>
          <p className="max-w-prose">
            {c.rush.body} {RUSH_MULTIPLIER}.
          </p>
          <p className="max-w-prose text-sm">{c.rush.confirm}</p>
        </div>
      </DottedFrame>
    </Page>
  );
}
