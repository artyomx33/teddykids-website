import { Metadata } from 'next';
import React from 'react';
import NurseryPageContent from './NurseryPageContent';

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
  return <NurseryPageContent />;
}
