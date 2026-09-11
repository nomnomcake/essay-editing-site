import type { Metadata, Viewport } from "next";
import { Nunito, Silkscreen } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Footer } from "@/components/site/Footer";
import { Shell } from "@/components/site/Shell";
import { pages, site } from "@/content";
import "./globals.css";

const pixel = Silkscreen({
  variable: "--font-pixel",
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

const body = Nunito({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const MAIN_ID = "main";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.name,
    template: `%s | ${site.name}`,
  },
  description: site.tagline,
  openGraph: {
    type: "website",
    siteName: site.name,
  },
};

export const viewport: Viewport = {
  themeColor: "#fbe3d8",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${pixel.variable} ${body.variable}`}>
      <body className="overflow-hidden bg-peach-bg font-body text-ink">
        <a
          href={`#${MAIN_ID}`}
          className="focus-retro sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-cream focus:px-3 focus:py-2 outline-ink r-tight"
        >
          {pages.layout.skipLink}
        </a>
        <Shell>
          {children}
          <Footer />
        </Shell>
        <Analytics />
      </body>
    </html>
  );
}
