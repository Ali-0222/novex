import { site, suburbs } from "@/lib/site";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: site.name,
    url: site.domain,
    telephone: site.phone,
    email: site.email,
    areaServed: suburbs.map((suburb) => ({
      "@type": "Place",
      name: `${suburb}, NSW, Australia`
    })),
    priceRange: "$$",
    image: `${site.domain}/opengraph-image`
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
