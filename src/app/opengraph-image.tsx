import { pages } from "@/content/pages";
import { site } from "@/content/site";
import { ogImage, OG_CONTENT_TYPE, OG_SIZE } from "@/lib/og";

export const runtime = "nodejs";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = site.name;

export default function Image() {
  return ogImage(pages.home.headline, pages.home.subcopy);
}
