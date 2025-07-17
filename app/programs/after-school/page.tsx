import { Metadata } from 'next';
import AfterSchoolPageContent from './AfterSchoolPageContent';

// Metadata for the After School Program page
export const metadata: Metadata = {
  title: 'After School Program | Teddy Kids',
  description: 'Our After School program provides a stimulating, bilingual environment for children aged 4-12 years with homework support, enrichment activities, and plenty of time for play and exploration.',
  keywords: 'teddy kids after school, after school care leiden, homework support, enrichment activities, holiday care, bilingual after school',
  openGraph: {
    title: 'After School Program | Teddy Kids',
    description: 'Our After School program provides a stimulating, bilingual environment for children aged 4-12 years with homework support, enrichment activities, and plenty of time for play and exploration.',
    url: 'https://www.teddykids.nl/programs/after-school',
    siteName: 'Teddy Kids',
    images: [
      {
        url: '/images/programs/afterschool-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Teddy Kids After School Program - Exploration after hours',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

// Server component that renders the client component
export default function AfterSchoolPage() {
  return <AfterSchoolPageContent />;
}
