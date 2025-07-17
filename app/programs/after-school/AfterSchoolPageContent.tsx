'use client';

import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/Button';
import { getLocationsByProgram } from '@/lib/locations';
import React from 'react';
import { useTranslation } from '@/lib/translations';
import { useLanguage } from '@/lib/LanguageContext';

// Schedule item component
interface ScheduleItemProps {
  time: string;
  activity: string;
  description?: string;
}

const ScheduleItem: React.FC<ScheduleItemProps> = ({ time, activity, description }) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 py-4 border-b border-gray-100">
      <div className="md:w-1/4">
        <span className="font-medium text-gray-900">{time}</span>
      </div>
      <div className="md:w-3/4">
        <h4 className="font-medium text-gray-900 mb-1">{activity}</h4>
        {description && <p className="text-gray-600 text-sm">{description}</p>}
      </div>
    </div>
  );
};

// Feature item component
interface FeatureItemProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
      <div className="text-3xl mb-3">{icon}</div>
      <h3 className="text-xl font-medium mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

// Location card component
interface LocationCardProps {
  name: string;
  address: string;
  imageSrc: string;
  viewDetailsText: string;
}

const LocationCard: React.FC<LocationCardProps> = ({ name, address, imageSrc, viewDetailsText }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-all duration-300">
      <div className="relative h-40 w-full">
        <Image
          src={imageSrc}
          alt={name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h4 className="font-medium text-lg mb-1">{name}</h4>
        <p className="text-sm text-gray-600">{address}</p>
        <Link 
          href={`/locations#${name.toLowerCase().replace(/\s+/g, '-')}`}
          className="text-sm text-brand-pink hover:underline mt-2 inline-block"
        >
          {viewDetailsText}
        </Link>
      </div>
    </div>
  );
};

// Testimonial component
interface TestimonialProps {
  quote: string;
  author: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, author }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <p className="text-gray-700 italic mb-4">&quot;{quote}&quot;</p>
      <p className="text-right text-sm font-medium text-gray-600">— {author}</p>
    </div>
  );
};

const AfterSchoolPageContent = () => {
  // Get the current language and translation function
  const { language } = useLanguage();
  const { t } = useTranslation(language);
  
  // Get locations that offer the after-school program
  const afterSchoolLocations = getLocationsByProgram('after-school');

  return (
    <main>
      {/* Hero Section */}
      <section className="py-20 bg-brand-mint bg-opacity-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <div className="flex items-center mb-4">
                  <span className="text-4xl mr-3">🎒</span>
                  <h1 className="text-4xl md:text-5xl font-display font-bold">{t('afterSchoolPage.hero.title')}</h1>
                </div>
                <p className="text-xl italic text-gray-700 mb-6">
                  &quot;{t('afterSchoolPage.hero.tagline')}&quot;
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  {t('afterSchoolPage.hero.description')}
                </p>
                <div className="bg-white p-4 rounded-lg inline-block mb-6">
                  <span className="font-medium">{t('afterSchoolPage.hero.ages')}</span>
                </div>
                <div className="flex flex-wrap gap-4">
                  <Button 
                    variant="primary"
                    href="/contact"
                    size="lg"
                  >
                    {t('afterSchoolPage.hero.buttons.bookTour')}
                  </Button>
                  <Button 
                    variant="outline"
                    href="/apply?program=after-school"
                    size="lg"
                  >
                    {t('afterSchoolPage.hero.buttons.applyNow')}
                  </Button>
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="relative h-80 w-full rounded-xl overflow-hidden">
                  <Image
                    src="/images/programs/after-school-hero.jpg"
                    alt={t('afterSchoolPage.metadata.alt')}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-display font-bold mb-6">{t('afterSchoolPage.overview.title')}</h2>
                <p className="text-lg text-gray-700 mb-6">
                  {t('afterSchoolPage.overview.description')}
                </p>
                <ul className="space-y-3 mb-6">
                  {t('afterSchoolPage.overview.items').map(
                    (item: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <span className="text-brand-pink mr-2">●</span>
                      <span>{item}</span>
                    </li>
                  ),
                  )}
                </ul>
                <Button 
                  variant="outline"
                  href="/apply?program=after-school"
                  className="mt-4"
                >
                  {t('afterSchoolPage.overview.button')}
                </Button>
              </div>
              <div className="relative h-80 w-full rounded-xl overflow-hidden">
                <Image
                  src="/images/programs/after-school-overview.jpg"
                  alt={t('afterSchoolPage.overview.imageAlt')}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────
       *  Adventure Section (Luna upgrade)
       * ────────────────────────────────────────────────────────── */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        {/* Background image (girl / dino / monkey tree) */}
        <Image
          src="/images/1karakter-meisje-dino-tree.jpg"
          alt="Girl, purple dino and monkey exploring a tree"
          fill
          priority
          className="object-cover"
        />

        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-white/30" />

        {/* Floating character decorations */}
        <div className="character character-bottom-left character-floating character-delay-1 hidden md:block">
          <Image
            src="/images/characters/teddy-character-1.png"
            alt=""
            width={120}
            height={120}
          />
        </div>
        <div className="character character-bottom-right character-floating character-delay-2 hidden md:block">
          <Image
            src="/images/characters/purple-dino.png"
            alt=""
            width={140}
            height={140}
          />
        </div>

        {/* Adventure copy */}
        <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 gradient-text">
              {t('afterSchoolPage.adventure.title')}
            </h2>
            <p className="text-xl md:text-2xl text-gray-700">
              {t('afterSchoolPage.adventure.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Daily Schedule */}
      <section className="py-16 bg-brand-yellow bg-opacity-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-display font-bold mb-8 text-center">{t('afterSchoolPage.schedule.schoolDays.title')}</h2>
            
            <div className="bg-white rounded-xl shadow-sm p-6">
              {t('afterSchoolPage.schedule.schoolDays.items').map(
                (item: ScheduleItemProps, index: number) => (
                <ScheduleItem 
                  key={index}
                  time={item.time}
                  activity={item.activity}
                  description={item.description}
                />
                ),
              )}
            </div>
            
            <div className="mt-12">
              <h3 className="text-2xl font-display font-bold mb-6 text-center">{t('afterSchoolPage.schedule.holidays.title')}</h3>
              <div className="bg-white rounded-xl shadow-sm p-6">
                {t('afterSchoolPage.schedule.holidays.items').map(
                  (item: ScheduleItemProps, index: number) => (
                  <ScheduleItem 
                    key={index}
                    time={item.time}
                    activity={item.activity}
                    description={item.description}
                  />
                  ),
                )}
              </div>
            </div>
            
            <p className="text-center text-gray-600 mt-6 text-sm">
              {t('afterSchoolPage.schedule.note')}
            </p>
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-display font-bold mb-8 text-center">{t('afterSchoolPage.activities.title')}</h2>
            
            <p className="text-lg text-gray-700 mb-8 text-center max-w-3xl mx-auto">
              {t('afterSchoolPage.activities.description')}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {t('afterSchoolPage.activities.items').map(
                (item: FeatureItemProps, index: number) => (
                <FeatureItem 
                  key={index}
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                />
                ),
              )}
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm mb-12">
              <h3 className="text-2xl font-display font-bold mb-4 text-center">
                {t('afterSchoolPage.themeWeeks.title')}
              </h3>
              <p className="text-gray-700 mb-6">
                {t('afterSchoolPage.themeWeeks.description')}
              </p>
              <ul className="space-y-2 mb-4 grid grid-cols-1 md:grid-cols-2 gap-2">
                {t('afterSchoolPage.themeWeeks.items').map(
                  (item: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <span className="text-brand-pink mr-2">●</span>
                    <span>{item}</span>
                  </li>
                  ),
                )}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-brand-purple bg-opacity-10">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-display font-bold mb-8 text-center">{t('afterSchoolPage.features.title')}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {t('afterSchoolPage.features.items').map(
                (feature: FeatureItemProps, index: number) => (
                <FeatureItem 
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-display font-bold mb-8 text-center">{t('afterSchoolPage.locations.title')}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {afterSchoolLocations.map((location, index) => (
              <LocationCard 
                key={index}
                name={location.name}
                address={`${location.address.street}, ${location.address.city}`}
                imageSrc={location.images[0]}
                viewDetailsText={t('afterSchoolPage.locations.viewDetails')}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-brand-mint bg-opacity-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-display font-bold mb-8 text-center">{t('afterSchoolPage.quotes.title')}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {t('afterSchoolPage.quotes.items').map(
                (quote: { text: string; author: string }, index: number) => (
                <Testimonial 
                  key={index}
                  quote={quote.text}
                  author={quote.author}
                />
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-brand-pink bg-opacity-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-display font-bold mb-6">
            {t('afterSchoolPage.cta.title')}
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            {t('afterSchoolPage.cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="primary"
              href="/contact"
              size="lg"
            >
              {t('afterSchoolPage.cta.buttons.meetTeam')}
            </Button>
            <Button 
              variant="outline"
              href="/apply?program=after-school"
              size="lg"
            >
              {t('afterSchoolPage.cta.buttons.bookTour')}
            </Button>
          </div>
          <p className="text-sm text-gray-600 mt-4">
            {t('afterSchoolPage.cta.chatPrompt')} <a href="https://wa.me/31612345678" className="text-brand-pink hover:underline">{t('afterSchoolPage.cta.chatLink')}</a>.
          </p>
        </div>
      </section>
    </main>
  );
};

export default AfterSchoolPageContent;
