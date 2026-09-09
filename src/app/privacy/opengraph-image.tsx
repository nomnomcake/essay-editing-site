import { privacy } from "@/content/site";
import { ogImage, OG_CONTENT_TYPE, OG_SIZE } from "@/lib/og";

export const runtime = "nodejs";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = privacy.title;

export default function Image() {
  return ogImage(privacy.title, privacy.description);
}
