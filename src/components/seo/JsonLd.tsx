import { siteConfig } from "@/config/siteConfig";

export function HotelJsonLd() {
  const hotelSchema = {
    "@context": "https://schema.org",
    "@type": "Hotel",
    "@id": `${siteConfig.seo.siteUrl}#hotel`,
    name: siteConfig.hotel.name,
    description: siteConfig.hotel.description,
    url: siteConfig.seo.siteUrl,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    image: siteConfig.seo.ogImage,
    starRating: {
      "@type": "Rating",
      ratingValue: siteConfig.hotel.stars.toString(),
    },
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.contact.address.street,
      addressLocality: siteConfig.contact.address.city,
      addressRegion: siteConfig.contact.address.state,
      postalCode: siteConfig.contact.address.zipCode,
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.contact.address.coordinates.latitude,
      longitude: siteConfig.contact.address.coordinates.longitude,
    },
    checkinTime: siteConfig.hotel.checkInTime,
    checkoutTime: siteConfig.hotel.checkOutTime,
    amenityFeature: siteConfig.amenities.map((item) => ({
      "@type": "LocationFeatureSpecification",
      name: item.title,
      value: true,
    })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "2480",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: siteConfig.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(hotelSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
