import type { Metadata } from 'next';
import { Suspense } from 'react';
import ApplyPageClient from './ApplyPageClient';

export const metadata: Metadata = {
  title: 'Apply | Teddy Kids',
  description: "Start your child's bilingual journey with our streamlined application process.",
  keywords: 'teddy kids apply, bilingual daycare application, teddy kids form',
};

export default function ApplyPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <ApplyPageClient />
    </Suspense>
  );
}
