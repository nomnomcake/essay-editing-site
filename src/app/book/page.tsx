import type { Metadata } from "next";
import { Button, RetroWindow } from "@/components";
import { Page } from "@/components/site/Page";
import { pages, site } from "@/content";
import { CalEmbed } from "./CalEmbed";

const c = pages.book;

export const metadata: Metadata = {
  title: c.meta.title,
  description: c.meta.description,
};

export default function BookPage() {
  const calLink = process.env.NEXT_PUBLIC_CAL_LINK;

  return (
    <Page heading={c.heading} intro={c.intro} wide>
      <RetroWindow title={c.windowTitle} variant="browser" url={calLink ? `https://cal.com/${calLink}` : undefined} flush={Boolean(calLink)}>
        {calLink ? (
          <CalEmbed calLink={calLink} />
        ) : (
          <div className="flex flex-col items-start gap-4">
            <p className="max-w-prose">{c.fallback.body}</p>
            <Button as="link" href={`mailto:${site.contactEmail}`} external>
              {c.fallback.cta}
            </Button>
          </div>
        )}
      </RetroWindow>
    </Page>
  );
}
