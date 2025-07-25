import type { Metadata } from 'next';
import LocationsPageClient from '@/components/pages/LocationsPageClient';
import Script from 'next/script'; // JSON-LD injection

// ──────────────────────────────────────────────────────────
//  Static page configuration for SSG
// ──────────────────────────────────────────────────────────
export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Our Locations | Teddy Kids Childcare & Education',
  description: 'Discover our warm, welcoming spaces across Leiden and beyond. Each Teddy Kids location offers a unique environment designed for children to learn, play, and grow.',
  keywords: 'teddy kids locations, childcare leiden, daycare oegstgeest, international school, TISA school',
};

export default function LocationsPage() {
  // ──────────────────────────────────────────────────────────
  // Static content for the LocationsPageClient component
  // ──────────────────────────────────────────────────────────

  /* ------------------------------------------------------------------
   *  JSON-LD LocalBusiness schemas (SEO-rich results)
   * ------------------------------------------------------------------ */
  const localBusinessSchemas = [
    {
      '@context': 'https://schema.org',
      '@type': 'ChildCare',
      name: 'Teddy Kids – Rijnsburgerweg 35',
      url: 'https://www.teddykids.nl/locations#rbw35',
      telephone: '+31 71 870 05 05',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Rijnsburgerweg 35',
        addressLocality: 'Leiden',
        postalCode: '2334 BL',
        addressCountry: 'NL',
      },
      openingHours: 'Mo-Fr 07:30-18:30',
      image: 'https://www.teddykids.nl/images/locations/rbw_1.jpg',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'ChildCare',
      name: 'Teddy Kids – Rijnsburgerweg 3 & 5',
      url: 'https://www.teddykids.nl/locations#rb3rb5',
      telephone: '+31 71 870 05 05',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Rijnsburgerweg 3-5',
        addressLocality: 'Leiden',
        postalCode: '2311 JW',
        addressCountry: 'NL',
      },
      openingHours: 'Mo-Fr 07:30-18:30',
      image: 'https://www.teddykids.nl/images/locations/rb3rb5_1.jpg',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'ChildCare',
      name: 'Teddy Kids – Lorentzkade 15a',
      url: 'https://www.teddykids.nl/locations#lrz15a',
      telephone: '+31 71 870 05 05',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Lorentzkade 15a',
        addressLocality: 'Leiden',
        postalCode: '2313 BC',
        addressCountry: 'NL',
      },
      openingHours: 'Mo-Fr 07:30-18:30',
      image: 'https://www.teddykids.nl/images/locations/lrz_1.jpg',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'ChildCare',
      name: 'Teddy Kids – Zeemanlaan 22a',
      url: 'https://www.teddykids.nl/locations#zml22a',
      telephone: '+31 71 870 05 05',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Zeemanlaan 22a',
        addressLocality: 'Leiden',
        postalCode: '2313 SV',
        addressCountry: 'NL',
      },
      openingHours: 'Mo-Fr 07:30-18:30',
      image: 'https://www.teddykids.nl/images/locations/zml_1.jpg',
    },
  ];

  const heroContent = {
    imageSrc: '/images/heroes/locations-hero.png',
    imageAlt: 'Happy children and educators at Teddy Kids locations',
    title: 'Find Your Nearest Teddy Home',
    subtitle: 'Each of our locations has its own energy — all built on love, care, and curiosity.',
  };

  const filterOptions = [
    { key: 'all', label: 'All', href: '/locations?filter=all' },
    { key: 'leiden', label: 'Leiden', href: '/locations?filter=leiden' },
    { key: 'oegstgeest', label: 'Oegstgeest', href: '/locations?filter=oegstgeest' },
    { key: 'international', label: 'International', href: '/locations?filter=international' },
  ];

  const overviewTitle = 'Our Teddy Kids Locations';
  const overviewDescription = 'Discover our warm, welcoming spaces across Leiden and beyond';
  const overviewImageSrc = '/images/heroes/locations-hero.png';

  const tisaContent = {
    title: 'TISA – Our International Schools',
    description: 'Teddy Kids also proudly operates two bilingual international schools.',
    netherlands: {
      logoSrc: '/images/logos/tisa-logo-placeholder.png',
      logoAlt: 'TISA Netherlands Logo',
      imageSrc: '/images/tisa-leiden.png',
      imageAlt: 'Students at TISA Netherlands campus',
      description: 'Bilingual international primary school in Leiden.',
      buttonText: 'Visit TISA Netherlands',
      buttonHref: 'https://www.tisaschool.com',
    },
    portugal: {
      logoSrc: '/images/logos/tisa-logo-placeholder.png',
      logoAlt: 'TISA Portugal Logo',
      imageSrc: '/images/tisa-portugal.png',
      imageAlt: 'Students at TISA Portugal campus',
      description: 'Our sunny international campus in Lisbon.',
      buttonText: 'Visit TISA Portugal',
      buttonHref: 'https://www.tisaschool.com/portugal',
    },
  };

  const transportationContent = {
    title: 'Getting to Teddy Kids',
    publicTransport: {
      title: 'Public Transportation',
      items: [
        'All our Leiden locations are within 10–15 minutes from Leiden Centraal Station by bus',
        'Bus lines 1, 3, and 4 serve our various locations',
      ],
    },
    parking: {
      title: 'Parking & Bicycles',
      items: [
        'Dedicated drop-off / pick-up parking spaces',
        'Covered bicycle parking at every location',
        'Stroller storage available inside each building',
      ],
    },
    specialServices: {
      title: 'Special Transportation Services',
      description: 'For our TISA and After School programs, we offer transportation between schools and our locations.',
      buttonText: 'Ask about transportation options',
    },
  };

  const mapContent = {
    title: 'Interactive Map',
    description: 'Explore our cozy corners of the world where little hearts learn, play, and grow together.',
    interactive: 'Click on markers to see details about each location.',
    embedUrl: 'https://www.google.com/maps/d/embed?mid=1WIFH-wxKSygh11OOt9bEIGO_WXwL3SY',
  };

  const ctaContent = {
    title: 'Ready to Step Inside the Teddy World?',
    subtitle:
      "Come walk the halls, meet our team, and feel the warmth for yourself. It's not just a tour — it's your child's future in motion.",
    visitButton: 'Book a Visit',
    applyButton: 'Apply Now',
  };

  const filterTitle = 'Filter by:';

  // Pass all static content to the client component
  return (
    <>
      {/* Inject JSON-LD LocalBusiness schemas */}
      {localBusinessSchemas.map((schema, idx) => (
        <Script
          key={`schema-location-${idx}`}
          id={`schema-location-${idx}`}
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <LocationsPageClient
        heroContent={heroContent}
        filterOptions={filterOptions}
        filterTitle={filterTitle}
        overviewTitle={overviewTitle}
        overviewDescription={overviewDescription}
        overviewImageSrc={overviewImageSrc}
        tisaContent={tisaContent}
        transportationContent={transportationContent}
        mapContent={mapContent}
        ctaContent={ctaContent}
      />
    </>
  );
}
