import { pages } from "@/content/pages";
import { ogImage, OG_CONTENT_TYPE, OG_SIZE } from "@/lib/og";

export const runtime = "nodejs";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = pages.about.meta.title;

export default function Image() {
  return ogImage(pages.about.meta.title, pages.about.meta.description);
}
