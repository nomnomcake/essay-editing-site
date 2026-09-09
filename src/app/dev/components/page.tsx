import type { Metadata } from "next";
import { Gallery } from "./Gallery";
import { gallery } from "./copy";

export const metadata: Metadata = {
  title: gallery.title,
  robots: { index: false, follow: false },
};

/** Visual review surface for the component library. Not linked from the site. */
export default function ComponentsScratchPage() {
  return <Gallery />;
}
