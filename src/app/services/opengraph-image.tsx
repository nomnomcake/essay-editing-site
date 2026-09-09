import { pages } from "@/content/pages";
import { ogImage, OG_CONTENT_TYPE, OG_SIZE } from "@/lib/og";

export const runtime = "nodejs";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = pages.services.meta.title;

export default function Image() {
  return ogImage(pages.services.meta.title, pages.services.meta.description);
}
