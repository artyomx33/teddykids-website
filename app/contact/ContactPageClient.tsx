'use client';

import Image from 'next/image';
import dynamic from 'next/dynamic';
import { useLanguage } from '@/lib/LanguageContext';
import { useTranslation } from '@/lib/translations';
import { Hero as StandardHero } from '@/components/ui/StandardHero';

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

// Dynamically load AppiesGPT component
const AppiesGPT = dynamic(() => import('@/components/sections/AppiesGPT'), {
  loading: () => (
    <section className="py-16 text-center">
      <p className="text-gray-500">Loading chat assistant…</p>
    </section>
  ),
  ssr: false, // purely client-side interactive widget
});

export default function ContactPageClient() {
  // ──────────────────────────────────────────────────────────
  //  i18n – determine active language & translation helper
  // ──────────────────────────────────────────────────────────
  const { language } = useLanguage();
  const { t } = useTranslation(language);

  return (
    <main>
      {/* ──────────────────────────────────────────────────────────
       *  Hero Section (standardised component)
       * ────────────────────────────────────────────────────────── */}
      <div className="relative">
        <StandardHero
          title={t('contact.hero.title')}
          subtitle={t('contact.hero.subtitle')}
          imageSrc="/images/heroes/journey-starts-here.png"
          videoSrc="/images/heroes/journey-starts-here-video.mp4"
        />

        {/* Teddy dinosaur character – positioned outside Hero so it isn't clipped */}
        <div className="absolute bottom-0 right-0 md:right-[10%] z-10 hidden md:block">
          <Image
            src="/images/characters/1karakter-dino-lief.png"
            alt="Friendly Teddy Kids dinosaur character"
            width={220}
            height={220}
            loading="eager"
            priority
          />
        </div>
      </div>

      {/* AppiesGPT Section (AI assistant) – moved right after hero for higher visibility */}
      <AppiesGPT />

      {/* Contact Form Section */}
      <section className="py-16 bg-white">
        {/* Wrapped for friendly Luna styling */}
        <div className="contact-form-container">
          <Contact />
        </div>
      </section>

    </main>
  );
}
