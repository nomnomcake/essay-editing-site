import type { Metadata } from "next";
import { Button, RetroWindow, Sparkle } from "@/components";
import { Page, SectionHeading } from "@/components/site/Page";
import { pages, ui } from "@/content";

const c = pages.services;

export const metadata: Metadata = {
  title: c.meta.title,
  description: c.meta.description,
};

export default function ServicesPage() {
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
        <SectionHeading>{c.next.heading}</SectionHeading>
        <p className="max-w-prose">{c.next.body}</p>
        <div>
          <Button as="link" href="/packages">
            {c.cta}
          </Button>
        </div>
      </section>
    </Page>
  );
}
