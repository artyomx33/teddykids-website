import type { Metadata } from 'next';
import ApplyPageClient from './ApplyPageClient';

export const metadata: Metadata = {
  title: 'Apply | Teddy Kids',
  description: "Start your child's bilingual journey with our streamlined application process.",
  keywords: 'teddy kids apply, bilingual daycare application, teddy kids form',
};

// Ensure this page is prerendered at build-time (same pattern as other pages)
export const dynamic = 'force-static';

export default function ApplyPage() {
  // Render the interactive client component; translations handled there
  return <ApplyPageClient />;
}

