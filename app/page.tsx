import type { Metadata } from 'next';
import HomePageClient from './HomePageClient';

// ──────────────────────────────────────────────────────────
//  Static page metadata (SEO & social)
// ──────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: 'Teddy Kids | From Baby Steps to Global Citizens',
  description:
    "Where your child's first words lead to a world of possibilities. ",
  keywords:
    'bilingual daycare leiden, teddy kids, early childhood education, international school',
};

export default function HomePage() {
  return <HomePageClient />;
}
