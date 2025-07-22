'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { useLanguage } from '@/lib/LanguageContext';
import { Language } from '@/lib/translations';

// Lazily load the ApplyPageClient component
// This ensures it only loads after the initial page render
const ApplyPageClient = dynamic(() => import('./ApplyPageClient'), {
  loading: () => (
    <div className="py-12 text-center">
      <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-brand-pink border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" />
      <p className="mt-4 text-gray-600">Loading application form...</p>
    </div>
  ),
  ssr: false, // Disable SSR for this component
});

/**
 * Client component that mounts the ApplyPageClient after initial page load
 * This ensures the hero section is rendered server-side while the form
 * is loaded client-side, improving initial page performance and SEO.
 */
export default function ApplyFormLazy() {
  const { language } = useLanguage();
  const [mounted, setMounted] = useState(false);

  // Mount the component after initial render
  useEffect(() => {
    const formRoot = document.getElementById('apply-form-root');
    if (formRoot) {
      setMounted(true);
    }
  }, []);

  if (!mounted) {
    return null;
  }

  return <ApplyPageClient language={language as Language} />;
}
