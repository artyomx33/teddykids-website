'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Script from 'next/script';
import { useLanguage } from '@/lib/LanguageContext';
import { useTranslation } from '@/lib/translations';
import { getAllLocations, Location } from '@/lib/locations';
import Button from '@/components/Button';

interface LocationCardProps {
  location: Location;
}

const LocationCard: React.FC<LocationCardProps> = ({ location }) => {
  const { language } = useLanguage();
  const { t } = useTranslation(language);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Format address for display
  const formattedAddress = `${location.address.street}, ${location.address.postalCode} ${location.address.city}, ${location.address.country}`;

  // Get location-specific translations based on location ID
  const getLocationTranslation = (locationId: string, field: string) => {
    // Map location IDs to translation keys
    const locationKeyMap: Record<string, string> = {
      'rbw': 'rbw',
      'rb35': 'rb35',
      'lrz': 'lrz',
      'zml': 'zml',
      'tisa-pt': 'tisaPortugal'
    };
    
    const key = locationKeyMap[locationId];
    if (key && t(`locationsPage.locations.${key}.${field}`)) {
      return t(`locationsPage.locations.${key}.${field}`);
    }
    
    // Fallback to location object data if no translation
    return null;
  };

  // Get location description or quote from translations if available
  const locationDescription = getLocationTranslation(location.id, 'description') || location.tagline;
  const locationQuote = getLocationTranslation(location.id, 'quote');

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-shadow duration-300 hover:shadow-lg">
      {/* Structured Data for Location */}
      <Script
        id={`location-schema-${location.id}`}
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ChildCare",
            "@id": `https://www.teddykids.nl/locations#${location.id}`,
            name: `Teddy Kids - ${location.name}`,
            description: locationDescription,
            url: `https://www.teddykids.nl/locations?id=${location.id}`,
            telephone: location.contact.phone,
            email: location.contact.email,
            image: location.images[0],
            address: {
              "@type": "PostalAddress",
              streetAddress: location.address.street,
              addressLocality: location.address.city,
              postalCode: location.address.postalCode,
              addressCountry: location.address.country === "Netherlands" ? "NL" : location.address.country === "Portugal" ? "PT" : location.address.country,
            },
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: "Monday",
                opens: location.hours.monday.split(" - ")[0],
                closes: location.hours.monday.split(" - ")[1],
              },
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: "Tuesday",
                opens: location.hours.tuesday.split(" - ")[0],
                closes: location.hours.tuesday.split(" - ")[1],
              },
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: "Wednesday",
                opens: location.hours.wednesday.split(" - ")[0],
                closes: location.hours.wednesday.split(" - ")[1],
              },
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: "Thursday",
                opens: location.hours.thursday.split(" - ")[0],
                closes: location.hours.thursday.split(" - ")[1],
              },
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: "Friday",
                opens: location.hours.friday.split(" - ")[0],
                closes: location.hours.friday.split(" - ")[1],
              },
            ],
            contactPoint: {
              "@type": "ContactPoint",
              telephone: location.contact.phone,
              contactType: "customer service",
              availableLanguage: ["English", "Dutch"],
            },
            ...(location.reviews.length > 0 && {
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: location.reviews[0].rating,
                reviewCount: 1,
              },
              review: {
                "@type": "Review",
                reviewRating: {
                  "@type": "Rating",
                  ratingValue: location.reviews[0].rating,
                },
                author: {
                  "@type": "Person",
                  name: location.reviews[0].author,
                },
                reviewBody: locationQuote || location.reviews[0].text,
              },
            }),
          }),
        }}
      />

      {/* Location Images Carousel */}
      <div className="relative h-64 w-full">
        {location.images.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === activeImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={src}
              alt={`${location.name} - Image ${index + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}

        {/* Image Navigation Dots */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
          {location.images.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveImageIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === activeImageIndex
                  ? 'bg-white'
                  : 'bg-white/50 hover:bg-white/70'
              }`}
              aria-label={`View image ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Location Details */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-display font-semibold">{location.name}</h3>
            <p className="text-gray-600 italic">{locationDescription}</p>
          </div>
          {location.featured && (
            <span className="bg-brand-yellow px-3 py-1 rounded-full text-xs font-medium">
              Featured
            </span>
          )}
        </div>

        {/* Address */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-700 mb-1">
            {t('locationsPage.locations.rbw.address')}
          </h4>
          <p className="text-gray-600 text-sm">{formattedAddress}</p>
          <a
            href={location.address.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-600 hover:underline mt-1 inline-block"
          >
            View on Map
          </a>
        </div>

        {/* Opening Hours */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-700 mb-1">
            {t('locationsPage.locations.rbw.openingHours')}
          </h4>
          <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm text-gray-600">
            <span>{t('locationsPage.locations.rbw.days.monday')}</span>
            <span>{location.hours.monday}</span>
            <span>{t('locationsPage.locations.rbw.days.tuesday')}</span>
            <span>{location.hours.tuesday}</span>
            <span>{t('locationsPage.locations.rbw.days.wednesday')}</span>
            <span>{location.hours.wednesday}</span>
            <span>{t('locationsPage.locations.rbw.days.thursday')}</span>
            <span>{location.hours.thursday}</span>
            <span>{t('locationsPage.locations.rbw.days.friday')}</span>
            <span>{location.hours.friday}</span>
            <span>{t('locationsPage.locations.rbw.days.weekend')}</span>
            <span>{location.hours.weekend || t('locationsPage.locations.rbw.closed')}</span>
          </div>
        </div>

        {/* Contact Person */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-700 mb-1">
            {t('locationsPage.locations.rbw.contactPerson')}
          </h4>
          <p className="text-gray-600 text-sm">
            {location.contact.name} - {t('locationsPage.locations.rbw.siteLeader')}
          </p>
          <p className="text-gray-600 text-sm">{location.contact.email}</p>
          <p className="text-gray-600 text-sm">{location.contact.phone}</p>
        </div>

        {/* Google Reviews */}
        {location.reviews.length > 0 && (
          <div className="mb-6 p-4 bg-gray-50 rounded-lg">
            <h4 className="text-sm font-semibold text-gray-700 mb-2">
              {t('locationsPage.locations.rbw.googleReviews')}
            </h4>
            <div className="text-sm italic text-gray-600">
              &quot;{locationQuote || location.reviews[0].text}&quot;
            </div>
            <div className="flex items-center mt-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-4 h-4 ${
                      i < location.reviews[0].rating ? 'text-yellow-400' : 'text-gray-300'
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="ml-2 text-xs text-gray-600">
                {location.reviews[0].author} • {location.reviews[0].date}
              </span>
            </div>
          </div>
        )}

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <Button
            variant="primary"
            href={`https://wa.me/${location.contact.whatsapp}?text=${encodeURIComponent(
              location.contact.whatsappMessage
            )}`}
            isExternal
            fullWidth
            size="md"
          >
            {t('locationsPage.locations.rbw.bookTour')}
          </Button>
          <Button
            variant="outline"
            href={`/apply?location=${location.id}`}
            fullWidth
            size="md"
          >
            {t('locationsPage.locations.rbw.applyNow')}
          </Button>
        </div>
      </div>
    </div>
  );
};

interface LocationsProps {
  className?: string;
  limit?: number;
}

const Locations: React.FC<LocationsProps> = ({ 
  className = '',
  limit
}) => {
  const { language } = useLanguage();
  const { t } = useTranslation(language);
  const locations = getAllLocations();
  const displayedLocations = limit ? locations.slice(0, limit) : locations;

  return (
    <section className={`py-16 ${className}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-4">
          {t('locationsPage.hero.title')}
        </h2>
        
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          {t('locationsPage.hero.subtitle')}
        </p>
        
        {/* Map Placeholder */}
        <div className="relative w-full h-64 md:h-96 mb-12 rounded-xl overflow-hidden shadow-md">
          <Image
            src="/images/tk-map.png"
            alt={t('locationsPage.map.title')}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/30">
            <span className="text-white text-lg font-medium">
              {t('locationsPage.map.interactiveMapComing')}
            </span>
          </div>
        </div>
        
        {/* Locations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedLocations.map((location) => (
            <LocationCard key={location.id} location={location} />
          ))}
        </div>
        
        {/* View All Button (if limited) */}
        {limit && locations.length > limit && (
          <div className="text-center mt-12">
            <Button
              variant="secondary"
              href="/locations"
              size="lg"
            >
              {t('locations.viewDetails')}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Locations;
