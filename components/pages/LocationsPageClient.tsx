'use client';

import Image from 'next/image';
import Locations from '@/components/sections/Locations';
import Button from '@/components/Button';
import { useLanguage } from '@/lib/LanguageContext';
import { useTranslation } from '@/lib/translations';

// Props interfaces for static data
interface HeroContent {
  imageSrc: string;
  imageAlt: string;
  title: string;
  subtitle: string;
}

interface FilterOption {
  key: string;
  label: string;
  href: string;
}

interface TISASchool {
  logoSrc: string;
  logoAlt: string;
  description: string;
  buttonText: string;
  buttonHref: string;
}

interface TISAContent {
  title: string;
  description: string;
  netherlands: TISASchool;
  portugal: TISASchool;
}

interface TransportationItem {
  title: string;
  items: string[];
}

interface TransportationContent {
  title: string;
  publicTransport: TransportationItem;
  parking: TransportationItem;
  specialServices: {
    title: string;
    description: string;
    buttonText: string;
  };
}

interface MapContent {
  title: string;
  description: string;
  interactive: string;
  embedUrl: string;
}

interface CTAContent {
  title: string;        // English copy
  subtitle: string;     // English copy
  visitButton: string;  // English copy
  applyButton: string;  // English copy
}

interface LocationsPageClientProps {
  heroContent: HeroContent;
  filterOptions: FilterOption[];
  filterTitle: string;
  overviewTitle: string;
  overviewDescription: string;
  overviewImageSrc: string;
  tisaContent: TISAContent;
  transportationContent: TransportationContent;
  mapContent: MapContent;
  ctaContent: CTAContent;
}

export default function LocationsPageClient({
  heroContent,
  filterOptions,
  filterTitle,
  overviewTitle,
  overviewDescription,
  overviewImageSrc,
  tisaContent,
  transportationContent,
  mapContent,
  ctaContent,
}: LocationsPageClientProps) {
  const { language } = useLanguage();
  const { t } = useTranslation(language);
  
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        {/* Background image */}
        <Image
          src={heroContent.imageSrc}
          alt={heroContent.imageAlt || t('locationsPage.hero.alt') || 'Happy children and educators at Teddy Kids locations'}
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
              {heroContent.title || t('locationsPage.hero.title')}
            </h1>
            <p className="text-xl md:text-2xl text-white">
              {heroContent.subtitle || t('locationsPage.hero.subtitle')}
            </p>
          </div>
        </div>
      </section>
      
      {/* Location Filter */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap items-center justify-center gap-4">
              <span className="text-gray-700 font-medium">{filterTitle || t('locationsPage.filters.title')}</span>
              {filterOptions.map((option, index) => (
                <Button 
                  key={option.key}
                  variant="text"
                  href={option.href}
                  className={index === 0 
                    ? "bg-brand-pink bg-opacity-10 hover:bg-opacity-20" 
                    : "hover:bg-brand-pink hover:bg-opacity-10"
                  }
                >
                  {option.label || t(`locationsPage.filters.${option.key}`)}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Locations Overview Photo Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-display font-bold mb-4">
              {overviewTitle}
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              {overviewDescription}
            </p>
            
            <div className="rounded-xl overflow-hidden shadow-md">
              <div className="relative h-[400px] w-full">
                <Image
                  src={overviewImageSrc}
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
              {tisaContent.title || t('locationsPage.tisa.title')}
            </h2>
            <p className="text-lg text-gray-700 mb-10">
              {tisaContent.description || t('locationsPage.tisa.description')}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* TISA Netherlands */}
              <div className="bg-brand-mint bg-opacity-10 p-8 rounded-xl shadow-sm flex flex-col items-center">
                <div className="h-20 w-40 mb-4 relative">
                  <Image
                    src={tisaContent.netherlands.logoSrc}
                    alt={tisaContent.netherlands.logoAlt}
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="text-gray-700 mb-6">
                  {tisaContent.netherlands.description || t('locationsPage.tisa.netherlands.description')}
                </p>
                <Button
                  variant="primary"
                  href={tisaContent.netherlands.buttonHref}
                  isExternal={true}
                >
                  {tisaContent.netherlands.buttonText || t('locationsPage.tisa.netherlands.button')}
                </Button>
              </div>

              {/* TISA Portugal */}
              <div className="bg-brand-yellow bg-opacity-10 p-8 rounded-xl shadow-sm flex flex-col items-center">
                <div className="h-20 w-40 mb-4 relative">
                  <Image
                    src={tisaContent.portugal.logoSrc}
                    alt={tisaContent.portugal.logoAlt}
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="text-gray-700 mb-6">
                  {tisaContent.portugal.description || t('locationsPage.tisa.portugal.description')}
                </p>
                <Button
                  variant="primary"
                  href={tisaContent.portugal.buttonHref}
                  isExternal={true}
                >
                  {tisaContent.portugal.buttonText || t('locationsPage.tisa.portugal.button')}
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
              {transportationContent.title || t('locationsPage.transportation.title')}
            </h2>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-medium mb-4">
                    {transportationContent.publicTransport.title || t('locationsPage.transportation.publicTransport.title')}
                  </h3>
                  <ul className="space-y-2">
                    {(transportationContent.publicTransport.items || t('locationsPage.transportation.publicTransport.items')).map((item: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <span className="text-brand-pink mr-2">●</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-medium mb-4">
                    {transportationContent.parking.title || t('locationsPage.transportation.parking.title')}
                  </h3>
                  <ul className="space-y-2">
                    {(transportationContent.parking.items || t('locationsPage.transportation.parking.items')).map((item: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <span className="text-brand-pink mr-2">●</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-100">
                <h3 className="text-xl font-medium mb-4">
                  {transportationContent.specialServices.title || t('locationsPage.transportation.specialServices.title')}
                </h3>
                <p className="text-gray-700 mb-4">
                  {transportationContent.specialServices.description || t('locationsPage.transportation.specialServices.description')}
                </p>
                <Button 
                  variant="text"
                  href="/contact?subject=Transportation"
                  className="text-brand-pink hover:underline"
                >
                  {transportationContent.specialServices.buttonText || t('locationsPage.transportation.specialServices.button')}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-display font-bold mb-4">
              {mapContent.title || t('locationsPage.map.title') || 'Interactive Map'}
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              {mapContent.description || t('locationsPage.map.description') || 'Explore our cozy corners of the world where little hearts learn, play, and grow together.'}
            </p>
            
            <div className="rounded-xl overflow-hidden shadow-md bg-white">
              {/* Explicit height to ensure map renders on all devices */}
              <iframe
                src={mapContent.embedUrl}
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Teddy Kids Locations Map"
                className="w-full h-[500px]"
              ></iframe>
              <div className="p-4 text-sm text-gray-500 italic">
                {mapContent.interactive || t('locationsPage.map.interactive') || 'Click on markers to see details about each location.'}
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
              : ctaContent.title || 'Ready to Step Inside the Teddy World?'}
          </h2>
          <p className="text-lg text-gray-800 mb-8">
            {language === 'nl'
              ? t('locationsPage.cta.subtitle')
              : ctaContent.subtitle ||
                "Come walk the halls, meet our team, and feel the warmth for yourself. It's not just a tour — it's your child's future in motion."}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/contact"
              className="bg-yellow-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-yellow-700 transition"
            >
              {language === 'nl'
                ? t('locationsPage.cta.bookTour') || 'Plan een Bezoek'
                : ctaContent.visitButton || 'Book a Visit'}
            </a>
            <a
              href="/apply"
              className="border border-yellow-600 text-yellow-700 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-100 transition"
            >
              {language === 'nl'
                ? t('locationsPage.cta.applyNow') || 'Schrijf je In'
                : ctaContent.applyButton || 'Apply Now'}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
