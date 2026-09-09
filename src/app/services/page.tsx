import type { Metadata } from "next";
import { Button, RetroWindow, Sparkle } from "@/components";
import { Page, SectionHeading } from "@/components/site/Page";
import { packages, pages, ui } from "@/content";

const c = pages.services;

export const metadata: Metadata = {
  title: c.meta.title,
  description: c.meta.description,
};

export default function ServicesPage() {
  const cols = c.table.columns;
  return (
    <Page heading={c.heading} intro={c.intro} wide>
      <div className="grid gap-8 md:grid-cols-2">
        <RetroWindow title={c.includes.heading} variant="plain">
          <ul className="flex flex-col gap-3">
            {c.includes.items.map((item) => (
              <li key={item} className="flex gap-2">
                <Sparkle tone="gold" size={14} className="mt-1.5 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </RetroWindow>
        <RetroWindow title={c.excludes.heading} variant="plain">
          <ul className="flex flex-col gap-3">
            {c.excludes.items.map((item) => (
              <li key={item} className="flex gap-2">
                <span aria-hidden="true" className="mt-0.5 font-pixel text-xs">
                  {ui.glyph.close}
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </RetroWindow>
      </div>

      <section className="flex flex-col gap-3">
        <SectionHeading>{c.turnaround.heading}</SectionHeading>
        <p className="max-w-prose">{c.turnaround.body}</p>
      </section>

      <section className="flex flex-col gap-4">
        <SectionHeading>{c.table.heading}</SectionHeading>
        <RetroWindow title={c.table.windowTitle} variant="browser" flush>
          {/* Desktop table */}
          <table className="hidden w-full md:table">
            <thead>
              <tr className="border-b-[2.5px] border-ink bg-peach-bg font-pixel text-[11px]">
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
              <div key={p.id} className="border-b-[2.5px] border-ink p-4 last:border-b-0 odd:bg-cream even:bg-peach-bg/60">
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
        <div>
          <Button as="link" href="/packages">
            {c.cta}
          </Button>
        </div>
      </section>
    </Page>
  );
}
