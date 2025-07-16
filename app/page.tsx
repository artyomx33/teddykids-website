'use client';

import Head from 'next/head';
import { useLanguage } from '@/lib/LanguageContext';
import { useTranslation } from '@/lib/translations';
import Hero from '@/components/sections/Hero';
import Pillars from '@/components/sections/Pillars';
import SocialProof from '@/components/sections/SocialProof';
import Programs from '@/components/sections/Programs';
import LocationsPreview from '@/components/sections/LocationsPreview';

export default function Home() {
  /* Language & translations */
  const { language } = useLanguage();
  const { t } = useTranslation(language);

  const metaTitle = `Teddy Kids | ${t('hero.title')}`;
  const metaDescription = t('hero.subtitle');

  return (
    <main>
      {/* Dynamic metadata based on chosen language */}
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
      </Head>

      {/* Hero Section with video background */}
      <Hero 
        videoSrc="/videos/tk-hero-loop.mp4" 
        fallbackImageSrc="/images/hero-fallback.jpg"
      />
      
      {/* Core Values Pillars */}
      <Pillars />
      
      {/* Social Proof and Reviews */}
      <SocialProof />
      
      {/* Program Overview */}
      <Programs />

      {/* Locations Preview - to be implemented */}
      <LocationsPreview />
      
      {/* WhatsApp floating button - will be added in layout.tsx */}
    </main>
  );
}
