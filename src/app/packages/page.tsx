import type { Metadata } from "next";
import { Button, DottedFrame, FolderTab, RetroWindow, Sparkle } from "@/components";
import { Page, SectionHeading } from "@/components/site/Page";
import { JsonLd, serviceSchema } from "@/components/site/JsonLd";
import { packages, pages, RUSH_MULTIPLIER, site, ui } from "@/content";
import type { FolderTone } from "@/components";

const c = pages.packages;

export const metadata: Metadata = {
  title: c.meta.title,
  description: c.meta.description,
};

const tones: FolderTone[] = ["accent", "periwinkle", "gold", "periwinkle"];

export default function PackagesPage() {
  const cols = c.table.columns;
  return (
    <Page heading={c.heading} intro={c.intro} wide>
      <JsonLd data={serviceSchema()} />
      <section className="flex flex-col gap-4">
        <SectionHeading>{c.compareHeading}</SectionHeading>
        <RetroWindow title={c.table.windowTitle} variant="browser" flush>
          {/* Desktop table */}
          <table className="hidden w-full md:table">
            <thead>
              <tr className="border-b-[3px] border-ink bg-peach-bg font-pixel text-[11px]">
                <th scope="col" className="px-4 py-3 text-left">{cols.package}</th>
                <th scope="col" className="px-4 py-3 text-right">{cols.essays}</th>
                <th scope="col" className="px-4 py-3 text-right">{cols.words}</th>
                <th scope="col" className="px-4 py-3 text-right">{cols.days}</th>
                <th scope="col" className="px-4 py-3 text-right">{cols.rounds}</th>
                <th scope="col" className="px-4 py-3 text-right">{cols.price}</th>
              </tr>
            </thead>
            <tbody>
              {packages.map((p) => (
                <tr key={p.id} className="odd:bg-cream even:bg-peach-bg/60">
                  <th scope="row" className="px-4 py-3 text-left font-semibold">{p.name}</th>
                  <td className="px-4 py-3 text-right tabular-nums">{p.essayCount}</td>
                  <td className="px-4 py-3 text-right tabular-nums">{p.wordCountCap}</td>
                  <td className="px-4 py-3 text-right tabular-nums">
                    {p.turnaroundDays} {c.table.daysUnit}
                  </td>
                  <td className="px-4 py-3 text-right tabular-nums">{p.revisionRounds}</td>
                  <td className="px-4 py-3 text-right font-bold">{p.price}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Mobile: stacked definition lists */}
          <div className="flex flex-col md:hidden">
            {packages.map((p) => (
              <div key={p.id} className="border-b-[3px] border-ink p-4 last:border-b-0 odd:bg-cream even:bg-peach-bg/60">
                <h3 className="mb-2 font-semibold">{p.name}</h3>
                <dl className="grid grid-cols-2 gap-y-1 text-sm">
                  <dt className="font-pixel text-[10px] pt-1">{cols.essays}</dt>
                  <dd className="text-right tabular-nums">{p.essayCount}</dd>
                  <dt className="font-pixel text-[10px] pt-1">{cols.words}</dt>
                  <dd className="text-right tabular-nums">{p.wordCountCap}</dd>
                  <dt className="font-pixel text-[10px] pt-1">{cols.days}</dt>
                  <dd className="text-right tabular-nums">
                    {p.turnaroundDays} {c.table.daysUnit}
                  </dd>
                  <dt className="font-pixel text-[10px] pt-1">{cols.rounds}</dt>
                  <dd className="text-right tabular-nums">{p.revisionRounds}</dd>
                  <dt className="font-pixel text-[10px] pt-1">{cols.price}</dt>
                  <dd className="text-right font-bold">{p.price}</dd>
                </dl>
              </div>
            ))}
          </div>
        </RetroWindow>
      </section>

      <DottedFrame padding="sm">
        <div className="flex flex-col gap-2 p-2">
          <SectionHeading>{c.rush.heading}</SectionHeading>
          <p className="max-w-prose">
            {c.rush.body} {RUSH_MULTIPLIER}.
          </p>
          <p className="max-w-prose text-sm">{c.rush.confirm}</p>
        </div>
      </DottedFrame>

      <SectionHeading>{c.detailHeading}</SectionHeading>
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
                <div className="flex flex-wrap items-center gap-4">
                  <Button as="link" href={site.cta.href} variant="primary">
                    {c.start}
                  </Button>
                  <a
                    href={p.stripeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus-retro r-tight font-pixel text-[11px] underline underline-offset-4"
                  >
                    {c.buy}
                  </a>
                </div>
              </article>
            </FolderTab>
          </div>
        ))}
      </div>

    </Page>
  );
}
