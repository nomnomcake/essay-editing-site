import type { Metadata } from "next";
import { LegalDocument } from "@/components/site/LegalDocument";
import { terms } from "@/content";

export const metadata: Metadata = {
  title: terms.title,
  description: terms.description,
};

export default function TermsPage() {
  return <LegalDocument doc={terms} />;
}
