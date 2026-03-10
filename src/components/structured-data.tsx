export function StructuredData() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Algarve SimRacing",
    description: "Professional simulator rentals, coaching, streaming-ready rigs, events, and driver-focused training in Portimão, Portugal.",
    url: "https://algarvesimracing.com",
    telephone: "+351-965-479-298",
    email: "info@algarvesimracing.com",
    image: "https://algarvesimracing.com/assets/008-900x900-1.jpg",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Zona Industrial Coca Maravilhas Lote 15",
      addressLocality: "Portimão",
      addressRegion: "Algarve",
      postalCode: "8500-483",
      addressCountry: "PT",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 37.138,
      longitude: -8.537,
    },
    hasMap: "https://maps.app.goo.gl/pLkunNYBOQVXgSao9",
    priceRange: "€€",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "10:00",
        closes: "22:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday", "Sunday"],
        opens: "10:00",
        closes: "20:00",
      },
    ],
    sameAs: [
      "https://www.instagram.com/algarvesimracing/",
      "https://wa.me/351965479298",
    ],
    areaServed: {
      "@type": "Place",
      name: "Portimão, Algarve, Portugal",
    },
    serviceType: [
      "Simulator Rentals",
      "Sim Racing Coaching",
      "Private Events",
      "Streaming & Content Creation",
    ],
  };

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Algarve SimRacing",
    url: "https://algarvesimracing.com",
    logo: "https://algarvesimracing.com/assets/asr-logo-color.svg",
    image: "https://algarvesimracing.com/assets/008-900x900-1.jpg",
    description: "Portugal's Premier Sim Racing Experience — Where Virtual Meets Reality.",
    sameAs: [
      "https://www.instagram.com/algarvesimracing/",
      "https://wa.me/351965479298",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+351-965-479-298",
      contactType: "Customer Service",
      email: "info@algarvesimracing.com",
      availableLanguage: ["English", "Portuguese"],
    },
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Algarve SimRacing",
    url: "https://algarvesimracing.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://algarvesimracing.com/?s={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
}
