import { site } from "@/lib/site";

// Bara bekräftade uppgifter: ingen adress, inga öppettider och inga priser.
export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: site.name,
    description: site.shortDescription,
    url: site.url,
    telephone: site.phone.e164,
    email: site.email,
    areaServed: {
      "@type": "City",
      name: site.city,
      containedInPlace: { "@type": "AdministrativeArea", name: site.region },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
