import type { Metadata } from 'next';
import AboutPageClient from './AboutPageClient';

// ──────────────────────────────────────────────────────────
//  Page <head> metadata (used for SEO & social previews)
// ──────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: 'About Us | Teddy Kids',
  description:
    "Learn about Teddy Kids' mission, history, and vision for bilingual childcare and international education since 2004.",
  keywords:
    'teddy kids history, teddy kids mission, childcare leiden, international school history, tisa story, bilingual education netherlands',
};

export default function AboutPage() {
  return <AboutPageClient />;
}
