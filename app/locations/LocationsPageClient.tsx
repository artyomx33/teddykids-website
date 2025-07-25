'use client';

import Image from 'next/image';
import Locations from '@/components/sections/Locations';
import Button from '@/components/Button';
import { useLanguage } from '@/lib/LanguageContext';
import { useTranslation } from '@/lib/translations';

export default function LocationsPageClient() {
  const { language } = useLanguage();
  const { t } = useTranslation(language);
  
  return (
    <main>
      {/* Hero Section */}
      <section className="py-20 bg-brand-yellow bg-opacity-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              {t('locationsPage.hero.title')}
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              {t('locationsPage.hero.subtitle')}
            </p>
            {/* Map Image */}
            <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden shadow-md">
              <Image
                src="/images/tk-map.png"
                alt={t('locationsPage.map.title')}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                <span className="text-white text-lg font-medium">
                  {t('locationsPage.map.locationsCount')}
                </span>
              </div>
            </div>
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
      
      {/* Full Locations Component */}
      {/* Wrap in relative container so characters can be absolutely positioned */}
      <div className="relative">
        <Locations />
        {/* TeddyCharacter3 – explorer girl with binoculars (card corner) */}
        <Image
          src="/images/characters/teddy-character-3.png"
          alt=""
          aria-hidden="true"
          width={220}
          height={220}
          className="character character-card-corner"
        />
        {/* TeddyCharacter4 – raincoat girl in puddle (bottom-right) */}
        <Image
          src="/images/characters/teddy-character-4.png"
          alt=""
          aria-hidden="true"
          width={220}
          height={220}
          className="character character-bottom-right"
        />
      </div>
      
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
              {/* TISA Leiden */}
              <div className="bg-brand-mint bg-opacity-10 p-6 rounded-xl shadow-sm flex flex-col">
                <div className="relative h-48 w-full mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="/images/tisa/leiden.png"
                    alt="TISA Leiden Campus"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">TISA Leiden</h3>
                <p className="text-gray-700 mb-auto">
                  Our flagship international school in the heart of Leiden.
                </p>
                <div className="mt-4">
                  <p className="text-sm font-medium text-gray-900 mb-1">Address:</p>
                  <p className="text-sm text-gray-600 mb-4">
                    Lorentzkade 15a, 2313 GB Leiden
                  </p>
                  <Button
                    variant="primary"
                    href="https://www.tisaschool.com"
                    isExternal
                  >
                    {t('locationsPage.tisa.netherlands.button')}
                  </Button>
                </div>
              </div>

              {/* TISA Portugal */}
              <div className="bg-brand-yellow bg-opacity-10 p-6 rounded-xl shadow-sm flex flex-col">
                <div className="relative h-48 w-full mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="/images/tisa/portugal.png"
                    alt="TISA Portugal Campus"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">TISA Portugal</h3>
                <p className="text-gray-700 mb-auto">
                  Our international campus in sunny Portugal.
                </p>
                <div className="mt-4">
                  <p className="text-sm font-medium text-gray-900 mb-1">Address:</p>
                  <p className="text-sm text-gray-600 mb-4">
                    Rua Principal 42, 2710-001 Lisbon
                  </p>
                  <Button
                    variant="primary"
                    href="https://www.tisaschool.com/portugal"
                    isExternal
                  >
                    {t('locationsPage.tisa.portugal.button')}
                  </Button>
                </div>
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
      
      {/* CTA Section */}
      <section className="py-16 bg-brand-yellow bg-opacity-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-display font-bold mb-6">
            {t('locationsPage.cta.title')}
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            {t('locationsPage.cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="primary"
              href="/contact"
              size="lg"
            >
              {t('locationsPage.cta.bookTour')}
            </Button>
            <Button 
              variant="outline"
              href="/apply"
              size="lg"
            >
              {t('locationsPage.cta.applyNow')}
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
