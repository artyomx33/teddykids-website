'use client';

import Head from 'next/head';
import Contact from '@/components/sections/Contact';
import { useLanguage } from '@/lib/LanguageContext';
import { useTranslation } from '@/lib/translations';

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

      <Contact />
    </main>
  );
}
