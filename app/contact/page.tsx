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

      <Contact />
    </main>
  );
}
