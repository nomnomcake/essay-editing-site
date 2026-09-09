import { pages } from "@/content/pages";
import { ogImage, OG_CONTENT_TYPE, OG_SIZE } from "@/lib/og";

export const runtime = "nodejs";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = pages.packages.meta.title;

export default function Image() {
  return ogImage(pages.packages.meta.title, pages.packages.meta.description);
}
