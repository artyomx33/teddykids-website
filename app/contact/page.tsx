import type { Metadata } from 'next';
import ContactPageClient from './ContactPageClient';

// ──────────────────────────────────────────────────────────
//  Static page metadata (SEO & social sharing)
// ──────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: 'Contact | Teddy Kids Childcare & International School',
  description:
    'Get in touch with Teddy Kids to book a tour, ask questions, or enrol your child in our bilingual childcare and international school programs.',
  keywords:
    'teddy kids contact, book a tour, childcare enquiry, bilingual daycare leiden, international school netherlands',
};

// Fully static generation (SSG)
export const dynamic = 'force-static';

// ---------------------------------------------------------------------------
//  JSON-LD structured data (ContactPoint)
// ---------------------------------------------------------------------------
// We embed the script here so it is rendered on every locale and picked up
// by search engines. Because `next/script` is a Client Component we import it
// lazily only for this file.
import Script from 'next/script';

export default function ContactPage() {
  return (
    <>
      {/* Structured data for Google → enhances SEO / rich results */}
      <Script
        id="schema-contact-point"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ChildCare',
            name: 'Teddy Kids',
            url: 'https://www.teddykids.nl/contact',
            contactPoint: [
              {
                '@type': 'ContactPoint',
                telephone: '+31 71 870 05 05',
                email: 'info@teddykids.nl',
                contactType: 'customer service',
                areaServed: ['NL', 'EU'],
                availableLanguage: ['English', 'Dutch'],
              },
            ],
          }),
        }}
      />

      <ContactPageClient />
    </>
  );
}
