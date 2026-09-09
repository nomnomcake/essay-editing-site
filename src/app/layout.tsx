import type { Metadata, Viewport } from "next";
import { Nunito, Silkscreen } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const pixel = Silkscreen({
  variable: "--font-pixel",
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
  fallback: ["Courier New", "monospace"],
});

const body = Nunito({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const SITE_NAME = "Essay editing";
const SKIP_LINK_LABEL = "Skip to content";
const MAIN_ID = "main";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "College application essay editing. Supplemental essays and personal statements.",
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
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
      <body className="min-h-dvh bg-peach-bg font-body text-ink">
        <a
          href={`#${MAIN_ID}`}
          className="focus-retro sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-cream focus:px-3 focus:py-2 outline-ink r-tight"
        >
          {SKIP_LINK_LABEL}
        </a>
        <main id={MAIN_ID}>{children}</main>
        <Analytics />
      </body>
    </html>
  );
}
