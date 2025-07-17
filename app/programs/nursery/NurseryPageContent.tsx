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
  description: string;
}

const ScheduleItem: React.FC<ScheduleItemProps> = ({ time, activity, description }) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 py-4 border-b border-gray-100">
      <div className="md:w-1/4">
        <span className="font-medium text-gray-900">{time}</span>
      </div>
      <div className="md:w-3/4">
        <h4 className="font-medium text-gray-900 mb-1">{activity}</h4>
        <p className="text-gray-600 text-sm">{description}</p>
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

// Overview item component
interface OverviewItemProps {
  icon: string;
  label: string;
  value: string;
}

const OverviewItem: React.FC<OverviewItemProps> = ({ icon, label, value }) => {
  return (
    <div className="flex items-start p-3 border-b border-gray-100 last:border-b-0">
      <div className="text-2xl mr-3 flex-shrink-0">{icon}</div>
      <div>
        <h4 className="font-medium text-gray-900">{label}</h4>
        <p className="text-gray-600">{value}</p>
      </div>
    </div>
  );
};

// Gallery item component
interface GalleryItemProps {
  src: string;
  caption: string;
}

const GalleryItem: React.FC<GalleryItemProps> = ({ src, caption }) => {
  return (
    <div className="rounded-lg overflow-hidden">
      <div className="relative h-48 w-full">
        <Image
          src={src}
          alt={caption}
          fill
          className="object-cover"
        />
      </div>
      <p className="text-sm text-gray-700 mt-2 italic">{caption}</p>
    </div>
  );
};

const NurseryPageContent = () => {
  // Get the current language and translation function
  const { language } = useLanguage();
  const { t } = useTranslation(language);
  
  // Get locations that offer the nursery program
  const nurseryLocations = getLocationsByProgram('nursery');

  return (
    <main>
      {/* Hero Section */}
      <section className="py-20 bg-brand-pink bg-opacity-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <div className="flex items-center mb-4">
                  <span className="text-4xl mr-3">🍼</span>
                  <h1 className="text-4xl md:text-5xl font-display font-bold">{t('nurseryPage.hero.title')}</h1>
                </div>
                <p className="text-xl italic text-gray-700 mb-6">
                  &quot;{t('nurseryPage.hero.tagline')}&quot;
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  {t('nurseryPage.hero.description')}
                </p>
                <div className="bg-white p-4 rounded-lg inline-block mb-6">
                  <span className="font-medium">{t('nurseryPage.hero.ages')}</span>
                </div>
                <div className="flex flex-wrap gap-4">
                  <Button 
                    variant="primary"
                    href="/contact"
                    size="lg"
                  >
                    {t('nurseryPage.hero.buttons.bookTour')}
                  </Button>
                  <Button 
                    variant="outline"
                    href="/apply?program=nursery"
                    size="lg"
                  >
                    {t('nurseryPage.hero.buttons.applyNow')}
                  </Button>
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="relative h-80 w-full rounded-xl overflow-hidden">
                  <Image
                    src="/images/programs/nursery-hero.jpg"
                    alt={t('nurseryPage.metadata.alt')}
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

      {/* Age & Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-display font-bold mb-8 text-center">{t('nurseryPage.overview.title')}</h2>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <OverviewItem 
                  icon={t('nurseryPage.overview.items.ageRange.icon')}
                  label={t('nurseryPage.overview.items.ageRange.label')}
                  value={t('nurseryPage.overview.items.ageRange.value')}
                />
                <OverviewItem 
                  icon={t('nurseryPage.overview.items.hours.icon')}
                  label={t('nurseryPage.overview.items.hours.label')}
                  value={t('nurseryPage.overview.items.hours.value')}
                />
                <OverviewItem 
                  icon={t('nurseryPage.overview.items.meals.icon')}
                  label={t('nurseryPage.overview.items.meals.label')}
                  value={t('nurseryPage.overview.items.meals.value')}
                />
                <OverviewItem 
                  icon={t('nurseryPage.overview.items.staffRatio.icon')}
                  label={t('nurseryPage.overview.items.staffRatio.label')}
                  value={t('nurseryPage.overview.items.staffRatio.value')}
                />
                <OverviewItem 
                  icon={t('nurseryPage.overview.items.careModel.icon')}
                  label={t('nurseryPage.overview.items.careModel.label')}
                  value={t('nurseryPage.overview.items.careModel.value')}
                />
                <OverviewItem 
                  icon={t('nurseryPage.overview.items.availableAt.icon')}
                  label={t('nurseryPage.overview.items.availableAt.label')}
                  value={t('nurseryPage.overview.items.availableAt.value')}
                />
                <OverviewItem 
                  icon={t('nurseryPage.overview.items.dailyUpdates.icon')}
                  label={t('nurseryPage.overview.items.dailyUpdates.label')}
                  value={t('nurseryPage.overview.items.dailyUpdates.value')}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Our Nursery Special */}
      <section className="py-16 bg-brand-yellow bg-opacity-10">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-display font-bold mb-8 text-center">{t('nurseryPage.features.title')}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {t('nurseryPage.features.items').map(
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

      {/* Parent Quote */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <blockquote className="bg-white p-8 rounded-xl shadow-sm text-xl italic text-gray-700 text-center">
              &quot;{t('nurseryPage.quote.text')}&quot;
              <footer className="text-right text-base font-medium text-gray-600 mt-4">{t('nurseryPage.quote.author')}</footer>
            </blockquote>
            <div className="text-center mt-4">
              <Button
                variant="secondary"
                size="sm"
                className="flex items-center gap-2 mx-auto"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
                {t('nurseryPage.quote.button')}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-brand-mint bg-opacity-10">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-display font-bold mb-8 text-center">{t('nurseryPage.gallery.title')}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {t('nurseryPage.gallery.items').map(
                (item: GalleryItemProps, index: number) => (
                <GalleryItem 
                  key={index}
                  src={item.src}
                  caption={item.caption}
                />
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Daily Rhythm */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-display font-bold mb-8 text-center">{t('nurseryPage.schedule.title')}</h2>
            
            <div className="bg-white rounded-xl shadow-sm p-6">
              {t('nurseryPage.schedule.items').map(
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
            
            <p className="text-center text-gray-600 mt-6 text-sm">
              {t('nurseryPage.schedule.note')}
            </p>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-16 bg-brand-purple bg-opacity-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-display font-bold mb-8 text-center">{t('nurseryPage.locations.title')}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {nurseryLocations.map((location, index) => (
              <LocationCard 
                key={index}
                name={location.name}
                address={`${location.address.street}, ${location.address.city}`}
                imageSrc={location.images[0]}
                viewDetailsText={t('nurseryPage.locations.viewDetails')}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-brand-pink bg-opacity-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-display font-bold mb-6">
            {t('nurseryPage.cta.title')}
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            {t('nurseryPage.cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="primary"
              href="/contact"
              size="lg"
            >
              {t('nurseryPage.cta.buttons.meetTeam')}
            </Button>
            <Button 
              variant="outline"
              href="/apply?program=nursery"
              size="lg"
            >
              {t('nurseryPage.cta.buttons.bookTour')}
            </Button>
          </div>
          <p className="text-sm text-gray-600 mt-4">
            {t('nurseryPage.cta.chatPrompt')} <a href="https://wa.me/31612345678" className="text-brand-pink hover:underline">{t('nurseryPage.cta.chatLink')}</a>.
          </p>
        </div>
      </section>
    </main>
  );
};

export default NurseryPageContent;
