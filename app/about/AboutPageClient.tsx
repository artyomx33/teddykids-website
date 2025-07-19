'use client';

import Image from 'next/image';
import Head from 'next/head';
import { useState, useEffect } from 'react';
import Button from '@/components/Button';
import { useLanguage } from '@/lib/LanguageContext';
import { useTranslation } from '@/lib/translations';

// ──────────────────────────────────────────────────────────
// (Timeline array removed – no longer used)
// Team preview item component
const TeamPreviewItem = (
  {
    name,
    role,
    imageSrc,
  }: {
    name: string;
    role: string;
    imageSrc: string;
  },
) => {
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-24 h-24 rounded-full overflow-hidden mb-3">
        <Image
          src={imageSrc}
          alt={name}
          fill
          className="object-cover"
        />
      </div>
      <h4 className="font-medium text-center">{name}</h4>
      <p className="text-sm text-gray-600 text-center">{role}</p>
    </div>
  );
};

export default function AboutPageClient() {
  const { language } = useLanguage();
  const { t } = useTranslation(language);


  /* ──────────────────────────────────────────────────────────
   *  Hero video handling (desktop only)
   * ────────────────────────────────────────────────────────── */
  const fallbackImageSrc = '/images/heroes/about-hero.png';
  const videoSrc = '/images/heroes/about-hero-video.mp4';
  const [isMobile, setIsMobile] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // initial
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden bg-brand-pink">
        {/* Preload assets for better LCP */}
        <Head>
          {!isMobile && (
            <link rel="preload" as="video" href={videoSrc} crossOrigin="anonymous" />
          )}
          <link
            rel="preload"
            as="image"
            href={fallbackImageSrc}
            fetchPriority="high"
          />
        </Head>

        {/* Fallback image (mobile or before video load) */}
        {!videoLoaded && (
          <div className="absolute inset-0">
            <Image
              src={fallbackImageSrc}
              alt="Teddy Kids families and children - our story from baby steps to global citizens"
              fill
              priority
              fetchPriority="high"
              sizes="100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>
        )}

        {/* Desktop video background */}
        {!isMobile && (
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={fallbackImageSrc}
            onLoadedData={() => setVideoLoaded(true)}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              videoLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}

        {/* Dark gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20 z-10" />

        {/* Hero content */}
        <div className="relative z-20 h-full flex items-center justify-center text-center px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-4">
              {t('about.hero.title')}
            </h1>
            <p className="text-xl md:text-2xl text-white mb-6">
              {t('about.hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-display font-bold mb-8 text-center">{t('about.mission.title')}</h2>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <p className="text-lg mb-6">
                {t('about.mission.paragraph1')}
              </p>
              <p className="text-lg mb-6">
                {t('about.mission.paragraph2')}
              </p>
              <p className="text-lg">
                {t('about.mission.paragraph3')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline / History */}
      {/* (Removed duplicate “Our Journey” timeline to prevent redundancy) */}

      {/* ---------------------------------------------------------------- */}
      {/*  Legacy & Vision (Luna Brutal Upgrade™)                          */}
      {/* ---------------------------------------------------------------- */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          {/* Audio Fragment - Two Languages */}
          <div className="max-w-2xl mx-auto text-center mb-12">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-medium mb-3 text-gray-700">
                Listen: Our Philosophy in Two Languages
              </h3>
              <audio
                controls
                preload="metadata"
                className="mx-auto w-full max-w-sm"
                style={{
                  accentColor: '#EC4899',
                }}
              >
                {/* 2024-07-19  ─ Fixed filename (space ➜ hyphen) */}
                <source src="/audio/two-languages.mp3" type="audio/mpeg" />
                <p className="text-red-500 text-sm">
                  Your browser does not support the audio element.
                </p>
              </audio>
              <p className="text-sm text-gray-500 mt-2">
                Hear about our bilingual approach directly from our team
              </p>
            </div>
          </div>

          {/* Legacy Header */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-4">
              {t('about.legacy.title')}
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              {t('about.legacy.subtitle')}
            </p>
          </div>

          {/* Legacy Timeline */}
          {/* (Legacy timeline removed per specification) */}

          {/* Future Vision */}
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-display font-bold mb-6">
              {t('about.vision.title')}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
              {t('about.vision.subtitle')}
            </p>

            <ul className="space-y-4 max-w-3xl mx-auto text-gray-700 text-lg text-left">
              {t('about.vision.promises').map((promise: { icon: string; text: string }, index: number) => (
                <li key={index} className="flex items-start">
                  <span className="text-2xl mr-3">{promise.icon}</span>
                  <span>{promise.text}</span>
                </li>
              ))}
            </ul>

            <p className="text-xl font-semibold mt-10 text-brand-pink">
              {t('about.vision.closing')}
            </p>
          </div>
        </div>
      </section>

      {/* Vision / Manifesto */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-brand-mint bg-opacity-20 p-8 md:p-12 rounded-xl">
            <h2 className="text-3xl font-display font-bold mb-8 text-center">{t('about.future.title')}</h2>
            <div className="prose prose-lg max-w-none">
              <p>
                {t('about.future.paragraph1')}
              </p>
              <p>
                {t('about.future.paragraph2')}
              </p>
              <p>
                {t('about.future.paragraph3')}
              </p>
              <ul>
                {t('about.future.bulletPoints').map((bullet: string, index: number) => (
                  <li key={index}>{bullet}</li>
                ))}
              </ul>
              <p>
                {t('about.future.paragraph4')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Preview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-display font-bold mb-6 text-center">{t('about.team.title')}</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            {t('about.team.subtitle')}
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto mb-12">
            <TeamPreviewItem 
              name={t('team.members.artem.name')}
              role={t('team.members.artem.role')}
              imageSrc="/images/team/artem.jpg"
            />
            <TeamPreviewItem 
              name={t('team.members.tess.name')}
              role={t('team.members.tess.role')}
              imageSrc="/images/team/tess.jpg"
            />
            <TeamPreviewItem 
              name={t('team.members.jess.name')}
              role={t('team.members.jess.role')}
              imageSrc="/images/team/jess.jpg"
            />
            <TeamPreviewItem 
              name={t('team.members.meral.name')}
              role={t('team.members.meral.role')}
              imageSrc="/images/team/meral.jpg"
            />
          </div>
          
          <div className="text-center">
            <Button 
              variant="secondary"
              href="/team"
              size="lg"
            >
              {t('about.team.buttonText')}
            </Button>
          </div>
        </div>
      </section>

      {/* Policy & Reports Section */}
      <section className="py-16 bg-brand-mint bg-opacity-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-display font-bold mb-6">
              {t('about.policyReports.title')}
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              {t('about.policyReports.description')}
            </p>
            <Button
              variant="primary"
              href="/about/policy"
              size="lg"
            >
              {t('about.policyReports.buttonText')}
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
