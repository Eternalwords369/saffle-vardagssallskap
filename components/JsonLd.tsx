import { site } from "@/lib/site";

// Strukturerad data för lokal sökoptimering. Innehåller bara uppgifter som är
// kända – ingen gatuadress, öppettider eller priser förrän de är bestämda.
export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: site.name,
    description: site.shortDescription,
    url: site.url,
    telephone: "+46761552020",
    email: site.email,
    areaServed: {
      "@type": "City",
      name: site.city,
      containedInPlace: { "@type": "AdministrativeArea", name: site.region },
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: site.city,
      addressRegion: site.region,
      addressCountry: "SE",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
