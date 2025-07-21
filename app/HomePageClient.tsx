'use client';

import { Hero as StandardHero } from '@/components/ui/StandardHero';
import Pillars from '@/components/sections/Pillars';
import SocialProof from '@/components/sections/SocialProof';
import Programs from '@/components/sections/Programs';
import dynamic from 'next/dynamic';
import { useLanguage } from '@/lib/LanguageContext';
import { useTranslation } from '@/lib/translations';
// Dynamically load below-the-fold sections to shrink initial JS bundle
const AppiesGPT = dynamic(() => import('@/components/sections/AppiesGPT'), {
  loading: () => (
    <section className="py-16 text-center">
      <p className="text-gray-500">Loading chat assistant…</p>
    </section>
  ),
  ssr: false, // purely client-side interactive widget
});

const LocationsPreview = dynamic(
  () => import('@/components/sections/LocationsPreview'),
  {
    loading: () => (
      <section className="py-16 text-center">
        <p className="text-gray-500">Loading locations…</p>
      </section>
    ),
  }
);
import Image from 'next/image';

export default function HomePageClient() {
  const { language } = useLanguage();
  const { t } = useTranslation(language);
  return (
    <main>
      {/* Hero Section with Luna characters */}
      <div className="relative">
        <StandardHero
          title={t('home.hero.title')}
          subtitle={t('home.hero.subtitle')}
          imageSrc="/images/hero-fallback.jpg"
          videoSrc="/videos/tk-hero-loop.mp4"
        />
        {/* TeddyCharacter1 – purple dino bottom-left */}
        <Image
          src="/images/characters/teddy-character-1.jpg"
          alt=""
          aria-hidden="true"
          width={200}
          height={200}
          loading="lazy"
          fetchPriority="low"
          sizes="200px"
          className="character character-bottom-left"
        />
      </div>
      
      {/* AppiesGPT Section (AI assistant) */}
      <AppiesGPT />
      
      {/* Core Values Pillars */}
      <Pillars />
      
      {/* Social Proof and Reviews */}
      {/* Wrapper allows absolute-positioned character above the "20 Years of Care" copy */}
      <div className="relative">
        {/* TeddyCharacter2 – girl in TK sweater now decorates Social Proof section */}
        <Image
          src="/images/characters/teddy-character-2.png"
          alt=""
          aria-hidden="true"
          width={200}
          height={200}
          loading="lazy"
          fetchPriority="low"
          sizes="200px"
          className="character character-floating character-delay-1"
        />
        <SocialProof />
      </div>
      
      {/* Program Overview */}
      <Programs />

      {/* Locations Preview - to be implemented */}
      <LocationsPreview />
      
      {/* WhatsApp floating button - will be added in layout.tsx */}
    </main>
  );
}
