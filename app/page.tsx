'use client';
import { useLanguage } from '@/lib/LanguageContext';
import { useTranslation } from '@/lib/translations';
import Hero from '@/components/sections/Hero';
import Pillars from '@/components/sections/Pillars';
import SocialProof from '@/components/sections/SocialProof';
import Programs from '@/components/sections/Programs';
import LocationsPreview from '@/components/sections/LocationsPreview';
import AppiesGPT from '@/components/sections/AppiesGPT';
import Image from 'next/image';

export default function Home() {
  /* Language & translations */
  const { language } = useLanguage();
  const { t } = useTranslation(language);

  return (
    <main>
      {/* Hero Section with Luna characters */}
      <div className="relative">
        <Hero 
          videoSrc="/videos/tk-hero-loop.mp4" 
          fallbackImageSrc="/images/hero-fallback.jpg"
        />
        {/* TeddyCharacter1 – purple dino bottom-left */}
        <Image
          src="/images/characters/teddy-character-1.png"
          alt=""
          aria-hidden="true"
          width={200}
          height={200}
          className="character character-bottom-left"
        />
      </div>
      
      {/* AppiesGPT Section (AI assistant) */}
      <AppiesGPT />
      
      {/* Core Values Pillars */}
      <Pillars />
      
      {/* Social Proof and Reviews */}
      {/* Wrapper allows absolute-positioned character above the “20 Years of Care” copy */}
      <div className="relative">
        {/* TeddyCharacter2 – girl in TK sweater now decorates Social Proof section */}
        <Image
          src="/images/characters/teddy-character-2.png"
          alt=""
          aria-hidden="true"
          width={200}
          height={200}
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
