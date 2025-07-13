'use client';

import React from 'react';
import Image from 'next/image';
import { useTranslation } from '@/lib/translations';
import { getFeaturedLocations, Location } from '@/lib/locations';
import Button from '@/components/Button';

interface LocationPreviewCardProps {
  location: Location;
}

const LocationPreviewCard: React.FC<LocationPreviewCardProps> = ({ location }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
      {/* Location Image */}
      <div className="relative h-48 w-full">
        <Image
          src={location.images[0]}
          alt={`${location.name}`}
          fill
          className="object-cover"
        />
        {/* Location badge */}
        <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-full text-sm font-medium">
          {location.city}
        </div>
      </div>
      
      {/* Location Details */}
      <div className="p-5">
        <h3 className="text-xl font-display font-semibold mb-1">{location.name}</h3>
        <p className="text-gray-600 text-sm italic mb-3">{location.tagline}</p>
        
        {/* Programs offered */}
        <div className="flex flex-wrap gap-2 mb-4">
          {location.programs.map((program) => (
            <span 
              key={program} 
              className="bg-brand-pink bg-opacity-20 px-2 py-1 rounded-full text-xs"
            >
              {program}
            </span>
          ))}
        </div>
        
        {/* CTA Buttons */}
        <div className="flex gap-3">
          <Button
            variant="primary"
            href={`https://wa.me/${location.contact.whatsapp}?text=${encodeURIComponent(
              location.contact.whatsappMessage
            )}`}
            isExternal
            size="sm"
            className="flex-1"
          >
            Book a Tour
          </Button>
          
          <Button
            variant="outline"
            href={`/locations#${location.id}`}
            size="sm"
            className="flex-1"
          >
            Details
          </Button>
        </div>
      </div>
    </div>
  );
};

interface LocationsPreviewProps {
  className?: string;
}

const LocationsPreview: React.FC<LocationsPreviewProps> = ({ className = '' }) => {
  const { t } = useTranslation('en');
  const featuredLocations = getFeaturedLocations().slice(0, 3);

  return (
    <section className={`py-16 bg-brand-yellow bg-opacity-10 ${className}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-4">
          {t('locations.title')}
        </h2>
        
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Find your nearest Teddy Kids location
        </p>
        
        {/* Locations Grid - Preview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
          {featuredLocations.map((location) => (
            <LocationPreviewCard key={location.id} location={location} />
          ))}
        </div>
        
        {/* View All Button */}
        <div className="text-center">
          <Button
            variant="secondary"
            href="/locations"
            size="lg"
          >
            View All Locations
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LocationsPreview;
