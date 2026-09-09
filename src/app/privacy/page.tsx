import type { Metadata } from "next";
import { LegalDocument } from "@/components/site/LegalDocument";
import { privacy } from "@/content";

export const metadata: Metadata = {
  title: privacy.title,
  description: privacy.description,
};

export default function PrivacyPage() {
  return <LegalDocument doc={privacy} />;
}
