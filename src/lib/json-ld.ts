import { site } from "@/config/site";
import type { Dictionary } from "@/i18n/dictionaries/en";
import type { Locale } from "@/i18n/config";

export function buildJsonLd(locale: Locale, dict: Dictionary) {
  const url = `${site.url}/${locale}`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${site.url}#organization`,
        name: site.name,
        url: site.url,
        areaServed: "Worldwide",
        description: dict.meta.description,
        sameAs: [site.url],
      },
      {
        "@type": "Service",
        name: dict.services.title,
        provider: { "@id": `${site.url}#organization` },
        areaServed: "Worldwide",
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: dict.services.title,
          itemListElement: dict.services.items.map((item) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: item.title, description: item.desc },
          })),
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: dict.faq.items.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      },
    ],
  };
}
