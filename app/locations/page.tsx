'use client';

import Image from 'next/image';
import Locations from '@/components/sections/Locations';
import Button from '@/components/Button';
import { useLanguage } from '@/lib/LanguageContext';
import { useTranslation } from '@/lib/translations';

// ──────────────────────────────────────────────────────────
//  Static page metadata (SEO & social sharing)
// ──────────────────────────────────────────────────────────

export default function LocationsPage() {
  const { language } = useLanguage();
  const { t } = useTranslation(language);
  
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] hero-parallax overflow-hidden">
        {/* Background image */}
        <Image
          src="/images/heroes/locations-hero.png"
          alt={t('locationsPage.hero.alt') || 'Happy children and educators at Teddy Kids locations'}
          fill
          priority
          className="object-cover"
        />

        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20" />

        {/* Hero content */}
        <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-4">
              {t('locationsPage.hero.title')}
            </h1>
            <p className="text-xl md:text-2xl text-white">
              {t('locationsPage.hero.subtitle')}
            </p>
          </div>
        </div>
      </section>
      
      {/* Location Filter */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap items-center justify-center gap-4">
              <span className="text-gray-700 font-medium">{t('locationsPage.filters.title')}</span>
              <Button 
                variant="text"
                href="/locations?filter=all"
                className="bg-brand-pink bg-opacity-10 hover:bg-opacity-20"
              >
                {t('locationsPage.filters.all')}
              </Button>
              <Button 
                variant="text"
                href="/locations?filter=leiden"
                className="hover:bg-brand-pink hover:bg-opacity-10"
              >
                {t('locationsPage.filters.leiden')}
              </Button>
              <Button 
                variant="text"
                href="/locations?filter=oegstgeest"
                className="hover:bg-brand-pink hover:bg-opacity-10"
              >
                {t('locationsPage.filters.oegstgeest')}
              </Button>
              <Button 
                variant="text"
                href="/locations?filter=international"
                className="hover:bg-brand-pink hover:bg-opacity-10"
              >
                {t('locationsPage.filters.international')}
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Locations Overview Photo Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-display font-bold mb-4">
              Our Teddy Kids Locations
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Discover our warm, welcoming spaces across Leiden and beyond
            </p>
            
            <div className="rounded-xl overflow-hidden shadow-md">
              <div className="relative h-[400px] w-full">
                <Image
                  src="/images/heroes/locations-overview.png"
                  alt="Overview of Teddy Kids locations"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Full Locations Component */}
      {/* Wrap in relative container so characters can be absolutely positioned */}
      <div className="relative">
        <Locations />
        {/* TeddyCharacter3 – explorer girl with binoculars (card corner) */}
        <img
          src="/images/characters/teddy-character-3.png"
          alt=""
          aria-hidden="true"
          className="character character-card-corner"
        />
        {/* TeddyCharacter4 – raincoat girl in puddle (bottom-right) */}
        <img
          src="/images/characters/teddy-character-4.png"
          alt=""
          aria-hidden="true"
          className="character character-bottom-right"
        />
      </div>
      
      {/* Interactive Map Section - MOVED HERE */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-display font-bold mb-4">
              {t('locationsPage.map.title') || 'Interactive Map'}
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              {t('locationsPage.map.description') || 'Explore our cozy corners of the world where little hearts learn, play, and grow together.'}
            </p>
            
            <div className="rounded-xl overflow-hidden shadow-md bg-white">
              {/* Explicit height to ensure map renders on all devices */}
              <iframe
                src="https://www.google.com/maps/d/embed?mid=1WIFH-wxKSygh11OOt9bEIGO_WXwL3SY"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Teddy Kids Locations Map"
                className="w-full h-[500px]"
              ></iframe>
              <div className="p-4 text-sm text-gray-500 italic">
                {t('locationsPage.map.interactive') || 'Click on markers to see details about each location.'}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* TISA Schools Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-display font-bold mb-4">
              {t('locationsPage.tisa.title')}
            </h2>
            <p className="text-lg text-gray-700 mb-10">
              {t('locationsPage.tisa.description')}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* TISA Netherlands */}
              <div className="bg-brand-mint bg-opacity-10 p-8 rounded-xl shadow-sm flex flex-col items-center">
                <div className="h-20 w-40 mb-4 relative">
                  <Image
                    src="/images/logos/tisa-logo-placeholder.png"
                    alt="TISA Netherlands Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="text-gray-700 mb-6">{t('locationsPage.tisa.netherlands.description')}</p>
                <Button
                  variant="primary"
                  href="https://www.tisaschool.com"
                  isExternal={true}
                >
                  {t('locationsPage.tisa.netherlands.button')}
                </Button>
              </div>

              {/* TISA Portugal */}
              <div className="bg-brand-yellow bg-opacity-10 p-8 rounded-xl shadow-sm flex flex-col items-center">
                <div className="h-20 w-40 mb-4 relative">
                  <Image
                    src="/images/logos/tisa-logo-placeholder.png"
                    alt="TISA Portugal Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="text-gray-700 mb-6">{t('locationsPage.tisa.portugal.description')}</p>
                <Button
                  variant="primary"
                  href="https://www.tisaschool.com/portugal"
                  isExternal={true}
                >
                  {t('locationsPage.tisa.portugal.button')}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transportation Information */}
      <section className="py-16 bg-brand-mint bg-opacity-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-display font-bold mb-8 text-center">
              {t('locationsPage.transportation.title')}
            </h2>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-medium mb-4">
                    {t('locationsPage.transportation.publicTransport.title')}
                  </h3>
                  <ul className="space-y-2">
                    {t('locationsPage.transportation.publicTransport.items').map((item: string, index: number) => <li key={index} className="flex items-start"><span className="text-brand-pink mr-2">●</span><span>{item}</span></li>)}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-medium mb-4">
                    {t('locationsPage.transportation.parking.title')}
                  </h3>
                  <ul className="space-y-2">
                    {t('locationsPage.transportation.parking.items').map((item: string, index: number) => <li key={index} className="flex items-start"><span className="text-brand-pink mr-2">●</span><span>{item}</span></li>)}
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-100">
                <h3 className="text-xl font-medium mb-4">
                  {t('locationsPage.transportation.specialServices.title')}
                </h3>
                <p className="text-gray-700 mb-4">
                  {t('locationsPage.transportation.specialServices.description')}
                </p>
                <Button 
                  variant="text"
                  href="/contact?subject=Transportation"
                  className="text-brand-pink hover:underline"
                >
                  {t('locationsPage.transportation.specialServices.button')}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section - Luna's Enhanced Version */}
      <section className="bg-yellow-50 py-12 mt-16 border-t border-yellow-200">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-yellow-900 mb-4">
            {language === 'nl' 
              ? t('locationsPage.cta.title') 
              : "Ready to Step Inside the Teddy World?"}
          </h2>
          <p className="text-lg text-gray-800 mb-8">
            {language === 'nl' 
              ? t('locationsPage.cta.subtitle') 
              : "Come walk the halls, meet our team, and feel the warmth for yourself. It's not just a tour — it's your child's future in motion."}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/contact"
              className="bg-yellow-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-yellow-700 transition"
            >
              {language === 'nl' 
                ? "Plan een Bezoek" 
                : "Book a Visit"}
            </a>
            <a
              href="/apply"
              className="border border-yellow-600 text-yellow-700 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-100 transition"
            >
              {language === 'nl' 
                ? "Schrijf je In" 
                : "Apply Now"}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
