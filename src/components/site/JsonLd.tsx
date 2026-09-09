import { packages } from "@/content/packages";
import { site } from "@/content/site";

/** schema.org Service description of the editing service, with one Offer per package. */
export function serviceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: site.name,
    description: site.tagline,
    url: site.url,
    serviceType: "College application essay editing",
    provider: { "@type": "Person", name: site.shortName, url: site.url },
    areaServed: "Worldwide",
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: `${site.url}/start`,
    },
    offers: packages.map((p) => {
      const numeric = Number(p.price.replace(/[^0-9.]/g, ""));
      return {
        "@type": "Offer",
        name: p.name,
        description: p.summary,
        url: `${site.url}/packages#${p.id}`,
        ...(Number.isFinite(numeric) && numeric > 0
          ? { price: numeric, priceCurrency: "USD" }
          : {}),
      };
    }),
  };
}

/** Renders a JSON-LD script tag. Pass a plain object. */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // JSON-LD is data, not markup. Escape closing tags so it cannot break out of the script.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
