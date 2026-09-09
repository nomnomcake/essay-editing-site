import type { Metadata } from "next";
import { Page } from "@/components/site/Page";
import { pages, samples } from "@/content";
import { SampleCards } from "./SampleCards";

const c = pages.samples;

export const metadata: Metadata = {
  title: c.meta.title,
  description: c.meta.description,
};

export default function SamplesPage() {
  return (
    <Page heading={c.heading} intro={c.intro} wide>
      <SampleCards samples={samples} />
    </Page>
  );
}
