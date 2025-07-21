'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { useTranslation } from '@/lib/translations';
import Button from '@/components/Button';

export default function HomeHero() {
  const { language } = useLanguage();
  const { t } = useTranslation(language);

  // ──────────────────────────────────────────────────────────
  //  Video lazy-loading optimization
  // ──────────────────────────────────────────────────────────
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  // Determine viewport for mobile/desktop split
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
      {/* Fallback Image – displayed until the video is ready (or always on mobile) */}
      {(isMobile || !videoLoaded) && (
        <div className="absolute inset-0">
          <Image
            src="/images/heroes/home-hero.jpg"
            alt="Teddy Kids bilingual childcare"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
      )}

      {/* Video (desktop only, after delay) */}
      {!isMobile && (
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            videoLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoadedData={() => setVideoLoaded(true)}
          poster="/images/heroes/home-hero.jpg"
        >
          <source
            src="/images/heroes/home-hero-video.mp4"
            type="video/mp4"
          />
        </video>
      )}

      {/* Hero content */}
      <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-4">
            {t('home.hero.title')}
          </h1>
          <p className="text-xl md:text-2xl text-white mb-6">
            {t('home.hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" href="/apply" size="lg">
              {t('home.hero.applyButton')}
            </Button>
            <Button variant="secondary" href="/contact?tour=true" size="lg">
              {t('home.hero.tourButton')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
