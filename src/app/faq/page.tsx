import type { Metadata } from "next";
import { Page } from "@/components/site/Page";
import { faq, pages } from "@/content";
import { FaqList } from "./FaqList";

const c = pages.faq;

export const metadata: Metadata = {
  title: c.meta.title,
  description: c.meta.description,
};

export default function FaqPage() {
  return (
    <Page heading={c.heading} intro={c.intro}>
      <FaqList questions={faq} />
    </Page>
  );
}
