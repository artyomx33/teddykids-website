'use client';

import Image from 'next/image';
import dynamic from 'next/dynamic';
import { useLanguage } from '@/lib/LanguageContext';
import { useTranslation } from '@/lib/translations';

// Dynamically import the Contact form component
const Contact = dynamic(() => import('@/components/sections/Contact'), {
  loading: () => (
    <div className="container mx-auto px-4 py-12 text-center">
      <p className="text-gray-500">Loading contact form...</p>
    </div>
  ),
  // Form processing is client-side only
  ssr: false
});

export default function ContactPageClient() {
  /* Grab current language & translation helper */
  const { language } = useLanguage();
  const { t } = useTranslation(language);

  return (
    <main>
      {/* ──────────────────────────────────────────────────────────
       *  Hero Section - Warmer, more welcoming
       * ────────────────────────────────────────────────────────── */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden bg-brand-pink bg-opacity-10">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/heroes/journey-starts-here.png"
            alt="Reach out to Teddy Kids - we're here to help"
            fill
            sizes="100vw"
            priority
            className="object-cover object-center opacity-60"
          />
        </div>

        {/* Teddy character - friendly mascot */}
        <div className="absolute bottom-0 right-0 md:right-[10%] z-10 hidden md:block">
          <Image
            src="/images/characters/teddy-character-1.png"
            alt=""
            width={220}
            height={220}
            loading="eager"
          />
        </div>

        {/* Content overlay */}
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
          <div className="max-w-2xl bg-white bg-opacity-90 p-8 rounded-lg shadow-lg">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-brand-pink mb-4">
              Let's Chat!
            </h1>
            <p className="text-xl text-gray-700">
              Have a question about our programs? Wondering about availability? 
              Or just want to say hello? We'd love to hear from you. Our team is 
              here to help with whatever you need.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <Contact />
    </main>
  );
}
