'use client';

import { useLanguage } from '@/lib/LanguageContext';
import { useTranslation } from '@/lib/translations';
import Button from '@/components/Button';
import Image from 'next/image';
import Head from 'next/head';
import { useEffect, useState } from 'react';

export default function ProgramsPageClient() {
  const { language } = useLanguage();
  const { t } = useTranslation(language);
  /* ---------- Hero video handling ---------- */
  // Use JPEG version for improved compatibility & consistent asset naming
  const fallbackImageSrc = '/images/heroes/programs-hero.jpg';
  const videoSrc = '/images/heroes/programs-hero-video.mp4';

  const [isMobile, setIsMobile] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);

  // Simple client-side check for mobile width
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // initial
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] hero-parallax overflow-hidden bg-brand-pink">
        {/* Preload assets for LCP */}
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

        {/* Fallback image shown until video loads or on mobile */}
        {!videoLoaded && (
          <div className="absolute inset-0 z-0">
            <Image
              src={fallbackImageSrc}
              alt="Children engaged in various programs at Teddy Kids"
              priority
              fetchPriority="high"
              sizes="100vw"
              className="object-cover object-center"
              fill
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
            className={`absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-1000 ${
              videoLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoadedData={() => setVideoLoaded(true)}
            poster={fallbackImageSrc}
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}

        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20 z-10" />

        {/* Hero content */}
        <div className="relative z-20 h-full flex items-center justify-center text-center px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-4">
              {t('programsPage.hero.title')}
            </h1>
            <p className="text-xl md:text-2xl text-white">
              {t('programsPage.hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-display font-bold mb-8 text-center">
              {t('programsPage.overview.title')}
            </h2>

            {/* Program Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Nursery Program */}
              <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-300">
                <div className="relative h-48 w-full">
                  <Image
                    src="/images/programs/nursery.jpg"
                    alt="Nursery Program at Teddy Kids"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-brand-pink text-white px-3 py-1 rounded-full text-sm font-medium">
                      {t('programsPage.overview.ageRange')}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display font-bold text-2xl mb-2">
                    {t('programsPage.nursery.title')}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {t('programsPage.nursery.shortDescription')}
                  </p>
                  <Button variant="primary" href="/programs/nursery">
                    {t('programsPage.overview.learnMore')}
                  </Button>
                </div>
              </div>

              {/* Preschool Program */}
              <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-300">
                <div className="relative h-48 w-full">
                  <Image
                    src="/images/programs/preschool.jpg"
                    alt="Preschool Program at Teddy Kids"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-brand-yellow text-white px-3 py-1 rounded-full text-sm font-medium">
                      {t('programsPage.overview.ageRange')}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display font-bold text-2xl mb-2">
                    {t('programsPage.preschool.title')}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {t('programsPage.preschool.shortDescription')}
                  </p>
                  <Button variant="primary" href="/programs/preschool">
                    {t('programsPage.overview.learnMore')}
                  </Button>
                </div>
              </div>

              {/* After-School Care */}
              <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-300">
                <div className="relative h-48 w-full">
                  <Image
                    src="/images/programs/afterschool.jpg"
                    alt="After-School Care at Teddy Kids"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-brand-mint text-white px-3 py-1 rounded-full text-sm font-medium">
                      {t('programsPage.overview.ageRange')}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display font-bold text-2xl mb-2">
                    {t('programsPage.afterSchool.title')}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {t('programsPage.afterSchool.shortDescription')}
                  </p>
                  <Button variant="primary" href="/programs/after-school">
                    {t('programsPage.overview.learnMore')}
                  </Button>
                </div>
              </div>

              {/* TISA Primary */}
              <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-300">
                <div className="relative h-48 w-full">
                  <Image
                    src="/images/programs/tisa.jpg"
                    alt="TISA Primary School"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-brand-purple text-white px-3 py-1 rounded-full text-sm font-medium">
                      {t('programsPage.overview.ageRange')}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display font-bold text-2xl mb-2">
                    {t('programsPage.tisa.title')}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {t('programsPage.tisa.shortDescription')}
                  </p>
                  <Button
                    variant="primary"
                    href="https://www.tisaschool.com"
                    isExternal={true}
                  >
                    {t('programsPage.overview.visitWebsite')}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Approach */}
      <section className="py-16 bg-brand-mint bg-opacity-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-display font-bold mb-8 text-center">
              {t('programsPage.curriculum.title')}
            </h2>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-display font-bold mb-4">
                    {t('programsPage.curriculum.approach.title')}
                  </h3>
                  <p className="text-gray-700 mb-4">
                    {t('programsPage.curriculum.approach.description')}
                  </p>
                  <ul className="space-y-2">
                    {[
                      'Play-based learning methodology',
                      'Bilingual language development',
                      'Social-emotional skill building',
                      'STEM exploration through hands-on activities',
                    ].map((point: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <span className="text-brand-pink mr-2">●</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative h-64 rounded-xl overflow-hidden">
                  <Image
                    src="/images/programs/nursery.jpg"
                    alt="Teddy Kids curriculum in action"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-100">
                <h3 className="text-2xl font-display font-bold mb-4">
                  {t('programsPage.curriculum.bilingual.title')}
                </h3>
                <p className="text-gray-700 mb-4">
                  {t('programsPage.curriculum.bilingual.description')}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="bg-brand-yellow bg-opacity-10 p-4 rounded-lg">
                    <h4 className="font-bold mb-2">
                      {t('programsPage.curriculum.bilingual.immersion.title')}
                    </h4>
                    <p className="text-sm">
                      {t('programsPage.curriculum.bilingual.immersion.description')}
                    </p>
                  </div>
                  <div className="bg-brand-pink bg-opacity-10 p-4 rounded-lg">
                    <h4 className="font-bold mb-2">
                      {t('programsPage.curriculum.bilingual.consistency.title')}
                    </h4>
                    <p className="text-sm">
                      {t('programsPage.curriculum.bilingual.consistency.description')}
                    </p>
                  </div>
                  <div className="bg-brand-mint bg-opacity-10 p-4 rounded-lg">
                    <h4 className="font-bold mb-2">
                      {t('programsPage.curriculum.bilingual.cultural.title')}
                    </h4>
                    <p className="text-sm">
                      {t('programsPage.curriculum.bilingual.cultural.description')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule & Fees */}
      <section className="py-16 bg-white px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-10">
            Schedules & Fees
          </h2>

          {/* Opening Hours */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-semibold mb-2">Opening Hours – Nursery</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Monday – Friday: 07:30 – 18:30</li>
                <li>Half days: 07:30 – 13:00 or 13:00 – 18:30</li>
                <li>Minimum: 2 days per week</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Opening Hours – After School</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Monday – Friday: After school – 18:30</li>
                <li>School holidays: 07:30 – 18:30</li>
                <li>Study days: 07:30 – 18:30</li>
              </ul>
            </div>
          </div>

          {/* Fees */}
          <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 shadow-sm">
            <h3 className="text-2xl font-semibold text-center mb-6">
              Fees
            </h3>
            <p className="text-center text-gray-600 mb-10">
              Transparent pricing. No hidden fees. Meals, nappies, updates, and extras like dance & music — all included.
            </p>

            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="bg-white p-6 rounded-lg shadow border">
                <h4 className="text-lg font-semibold text-pink-600 mb-1">Nursery</h4>
                <p className="text-2xl font-bold text-pink-700 mb-2">€11.72 / hour</p>
                <p className="text-gray-600 text-sm">Includes full care, meals, nappies & activities</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow border">
                <h4 className="text-lg font-semibold text-pink-600 mb-1">Preschool</h4>
                <p className="text-2xl font-bold text-pink-700 mb-2">€11.72 / hour</p>
                <p className="text-gray-600 text-sm">Half-day options available</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow border">
                <h4 className="text-lg font-semibold text-pink-600 mb-1">After School</h4>
                <p className="text-2xl font-bold text-pink-700 mb-2">€11.16 / hour</p>
                <p className="text-gray-600 text-sm">Holiday camps and extras billed separately</p>
              </div>
            </div>

            <p className="mt-10 text-center text-sm text-gray-500">
              Childcare benefit (kinderopvangtoeslag) may cover up to 90% of fees.
              <br />
              <span className="text-pink-600 font-semibold">Ask us how</span>
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-brand-yellow bg-opacity-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-display font-bold mb-6">
            {t('programsPage.cta.title')}
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            {t('programsPage.cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" href="/contact" size="lg">
              {t('programsPage.cta.bookTour')}
            </Button>
            <Button variant="outline" href="/apply" size="lg">
              {t('programsPage.cta.applyNow')}
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
