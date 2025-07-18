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

export default function ContactPage() {
  return <ContactPageClient />;
}
