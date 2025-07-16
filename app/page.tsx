'use client';

import Head from 'next/head';
import { useLanguage } from '@/lib/LanguageContext';
import { useTranslation } from '@/lib/translations';
import Hero from '@/components/sections/Hero';
import Pillars from '@/components/sections/Pillars';
import SocialProof from '@/components/sections/SocialProof';
import Programs from '@/components/sections/Programs';
import LocationsPreview from '@/components/sections/LocationsPreview';
import AppiesGPT from '@/components/sections/AppiesGPT';

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

      {/* Hero Section with Luna characters */}
      <div className="relative">
        <Hero 
          videoSrc="/videos/tk-hero-loop.mp4" 
          fallbackImageSrc="/images/hero-fallback.jpg"
        />
        {/* TeddyCharacter1 – purple dino bottom-left */}
        <img
          src="/images/characters/teddy-character-1.png"
          alt=""
          aria-hidden="true"
          className="character character-bottom-left"
        />
        {/* TeddyCharacter2 – girl in TK sweater floating near CTA */}
        <img
          src="/images/characters/teddy-character-2.png"
          alt=""
          aria-hidden="true"
          className="character character-floating character-delay-1"
        />
      </div>
      
      {/* AppiesGPT Section (AI assistant) */}
      <AppiesGPT />
      
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
