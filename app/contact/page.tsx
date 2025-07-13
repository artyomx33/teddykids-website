import { Metadata } from 'next';
import Contact from '@/components/sections/Contact';

export const metadata: Metadata = {
  title: 'Contact Us | Teddy Kids',
  description: 'Get in touch with Teddy Kids. Book a tour, apply for enrollment, or ask us any questions about our bilingual childcare and international school programs.',
  keywords: 'contact teddy kids, book a tour, apply teddy kids, childcare contact, international school contact, leiden',
  openGraph: {
    title: 'Contact Us | Teddy Kids',
    description: 'Get in touch with Teddy Kids. Book a tour, apply for enrollment, or ask us any questions about our bilingual childcare and international school programs.',
    url: 'https://www.teddykids.nl/contact',
    siteName: 'Teddy Kids',
    images: [
      {
        url: '/images/og-image-contact.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact Teddy Kids - Bilingual Childcare and International School',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us | Teddy Kids',
    description: 'Get in touch with Teddy Kids. Book a tour, apply for enrollment, or ask us any questions about our bilingual childcare and international school programs.',
    images: ['/images/og-image-contact.jpg'],
  },
};

export default function ContactPage() {
  return (
    <main>
      <Contact />
    </main>
  );
}
