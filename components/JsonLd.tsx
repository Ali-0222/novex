import { seoKeywords, services, site, suburbs } from "@/lib/site";

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
    knowsAbout: seoKeywords,
    makesOffer: services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.title,
        description: service.summary
      }
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
