import type { Metadata } from 'next';
import ProgramsPageClient from './ProgramsPageClient';

// ──────────────────────────────────────────────────────────
//  Static page metadata (SEO & social sharing)
// ──────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: 'Programs | Teddy Kids Childcare & International School',
  description:
    "Explore Teddy Kids' bilingual Nursery, Preschool, After-School care, and TISA primary programs. Flexible schedules, healthy meals, and a play-based curriculum that nurtures global citizens.",
  keywords:
    'teddy kids programs, bilingual childcare, nursery leiden, preschool leiden, after-school care, international school netherlands',
};

export default function ProgramsPage() {
  return <ProgramsPageClient />;
}
