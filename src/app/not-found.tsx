import type { Metadata } from "next";
import { DialogBox, RetroWindow } from "@/components";
import { Page } from "@/components/site/Page";
import { pages } from "@/content";

const c = pages.notFound;

export const metadata: Metadata = {
  title: c.meta.title,
  robots: { index: false },
};

export default function NotFound() {
  return (
    <Page>
      <RetroWindow title={c.windowTitle} variant="plain" className="mx-auto w-full max-w-md">
        <div className="flex justify-center">
          <DialogBox prompt={c.prompt} yesLabel={c.yes} noLabel={c.no} yesHref="/" noHref="/faq" />
        </div>
      </RetroWindow>
    </Page>
  );
}
