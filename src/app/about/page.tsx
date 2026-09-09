import type { Metadata } from "next";
import { RetroWindow, Sparkle } from "@/components";
import { Page } from "@/components/site/Page";
import { credentials, pages } from "@/content";

const c = pages.about;

export const metadata: Metadata = {
  title: c.meta.title,
  description: c.meta.description,
};

export default function AboutPage() {
  return (
    <Page heading={c.heading}>
      <div className="grid gap-8 md:grid-cols-[2fr_1fr] md:items-start">
        <RetroWindow title={c.windowTitle} variant="plain">
          <div className="flex flex-col gap-4">
            {c.paragraphs.map((p, i) => (
              <p key={i} className="max-w-prose">
                {p}
              </p>
            ))}
          </div>
        </RetroWindow>
        <RetroWindow title={c.credentialsHeading} variant="plain" fill="peach">
          <ul className="flex flex-col gap-3 text-sm">
            {credentials.map((cr) => (
              <li key={cr.id} className="flex gap-2">
                <Sparkle tone="gold" size={12} className="mt-1 shrink-0" />
                <span>{cr.text}</span>
              </li>
            ))}
          </ul>
        </RetroWindow>
      </div>
    </Page>
  );
}
