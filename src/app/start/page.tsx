import type { Metadata } from "next";
import { Page } from "@/components/site/Page";
import { pages } from "@/content";
import { IntakeForm } from "./IntakeForm";

const c = pages.start;

export const metadata: Metadata = {
  title: c.meta.title,
  description: c.meta.description,
};

export default function StartPage() {
  return (
    <Page heading={c.heading} intro={c.intro}>
      <IntakeForm />
    </Page>
  );
}
