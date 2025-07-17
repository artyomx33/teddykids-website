'use client';

import Head from 'next/head';
import Contact from '@/components/sections/Contact';
import { useLanguage } from '@/lib/LanguageContext';
import { useTranslation } from '@/lib/translations';
import Image from 'next/image';

export default function ContactPage() {
  /* Grab current language & translation helper */
  const { language } = useLanguage();
  const { t } = useTranslation(language);

  /* Dynamic metadata */
  const metaTitle = `${t('contact.title')} | Teddy Kids`;
  const metaDescription = t('contact.subtitle');

  return (
    <main>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
      </Head>

      {/* ──────────────────────────────────────────────────────────
       *  Hero Section – Lighthouse + Purple Dino
       * ────────────────────────────────────────────────────────── */}
      <section className="relative h-[60vh] md:h-[70vh] hero-parallax overflow-hidden">
        {/* Background image */}
        <Image
          src="/images/teddylighthousebackground.jpg"
          alt="Lighthouse guiding families to Teddy Kids"
          fill
          priority
          className="object-cover"
        />

        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-white/30" />

        {/* Purple dino character */}
        <div className="character character-bottom-right character-floating hidden md:block">
          <Image
            src="/images/1karakter-dino-lief.jpg"
            alt=""
            width={180}
            height={180}
            priority={false}
          />
        </div>

        {/* Hero copy */}
        <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-display font-bold text-gray-900 mb-4">
              {t('contact.title')}
            </h1>
            <p className="text-xl md:text-2xl text-gray-700">
              {t('contact.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Value Promise – transparent pricing & value */}
      <section className="py-16 bg-brand-pink bg-opacity-10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
            <div className="relative w-24 h-24 mb-6">
              <Image
                src="/images/website-icon-price.png"
                alt="Transparent pricing icon"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-3xl font-display font-bold mb-4">
              {language === 'nl'
                ? 'Transparante Prijzen, Eerlijke Waarde'
                : 'Transparent Pricing, Real Value'}
            </h2>
            <p className="text-lg text-gray-700">
              {language === 'nl'
                ? 'Geen verborgen kosten of verrassingen – alleen duidelijke tarieven en alles-inclusief verzorging voor jouw gezin.'
                : 'No hidden fees or surprises—just clear rates and all-inclusive care for your family.'}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section with extra spacing for smooth transition */}
      <section className="pt-8 md:pt-16 bg-white">
        <Contact />
      </section>
    </main>
  );
}
