import { pages } from "@/content/pages";
import { ogImage, OG_CONTENT_TYPE, OG_SIZE } from "@/lib/og";

export const runtime = "nodejs";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = pages.faq.meta.title;

export default function Image() {
  return ogImage(pages.faq.meta.title, pages.faq.meta.description);
}
