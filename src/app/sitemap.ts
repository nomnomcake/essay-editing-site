import type { MetadataRoute } from "next";
import { site } from "@/content/site";

const routes = [
  "",
  "/services",
  "/packages",
  "/samples",
  "/about",
  "/faq",
  "/start",
  "/book",
  "/terms",
  "/privacy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return routes.map((path) => ({
    url: `${site.url}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path === "/packages" || path === "/start" ? 0.9 : 0.6,
  }));
}
