import { Metadata } from 'next';
import React from 'react';
import NurseryPageContent from './NurseryPageContent';
import Script from 'next/script'; // for JSON-LD injection

// Metadata for the Nursery Program page
export const metadata: Metadata = {
  title: 'Nursery Program | Teddy Kids',
  description: 'Your child\'s first world outside your arms should feel just as safe. Our nursery is soft, bilingual, and built for baby-level wonder.',
  keywords: 'teddy kids nursery, infant care leiden, baby daycare, bilingual nursery, toddler program, early childhood',
  openGraph: {
    title: 'Nursery Program | Teddy Kids',
    description: 'Your child\'s first world outside your arms should feel just as safe. Our nursery is soft, bilingual, and built for baby-level wonder.',
    url: 'https://www.teddykids.nl/programs/nursery',
    siteName: 'Teddy Kids',
    images: [
      {
        url: '/images/programs/nursery-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Teddy Kids Nursery Program - Safe, soft beginnings',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

// Server component that renders the client component
export default function NurseryPage() {
  return (
    <>
      {/* Structured Data: Course schema for SEO */}
      <Script
        id="schema-course-nursery"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Course',
            name: 'Nursery Program – Teddy Kids',
            description:
              "Full-day bilingual care for babies and toddlers (0-2 years) focused on sensory exploration, early language immersion, and secure emotional attachment.",
            provider: {
              '@type': 'ChildCare',
              name: 'Teddy Kids',
              url: 'https://www.teddykids.nl',
              logo: 'https://www.teddykids.nl/images/logos/teddy-kids-logo.png',
            },
            audience: {
              '@type': 'EducationalAudience',
              educationalRole: 'Infant/Toddler',
              ageRange: '0-2',
            },
            url: 'https://www.teddykids.nl/programs/nursery',
            image: 'https://www.teddykids.nl/images/programs/nursery-og.jpg',
          }),
        }}
      />

      <NurseryPageContent />
    </>
  );
}
