import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/Button';
import { getLocationsByProgram } from '@/lib/locations';
import React from 'react';

export const metadata: Metadata = {
  title: 'Nursery Program | Teddy Kids',
  description: 'Your child\'s first world outside your arms should feel just as safe. Our nursery is soft, bilingual, and built for baby-level wonder.',
  keywords: 'teddy kids nursery, infant care leiden, baby daycare, bilingual nursery, toddler program, early childhood',
  openGraph: {
    title: 'Nursery Program | Teddy Kids',
    description: 'Your child\'s first world outside your arms should feel just as safe. Our nursery is soft, bilingual, and built for baby-level wonder.',
    url: 'https://www.teddykids.nl/programs/nursery',
    siteName: 'Teddy Kids',
    images: [
      {
        url: '/images/programs/nursery-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Teddy Kids Nursery Program - Safe, soft beginnings',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

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
}

const LocationCard: React.FC<LocationCardProps> = ({ name, address, imageSrc }) => {
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
          View location details
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

export default function NurseryPage() {
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
                  <h1 className="text-4xl md:text-5xl font-display font-bold">Nursery</h1>
                </div>
                <p className="text-xl italic text-gray-700 mb-6">
                  &quot;Your child&apos;s first world outside your arms should feel just as safe.&quot;
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Our nursery is soft, bilingual, and built for baby-level wonder. We hold, sing, rock, read, and smile in two languages.
                </p>
                <div className="bg-white p-4 rounded-lg inline-block mb-6">
                  <span className="font-medium">Ages:</span> 3 months - 2.5 years
                </div>
                <div className="flex flex-wrap gap-4">
                  <Button 
                    variant="primary"
                    href="/contact"
                    size="lg"
                  >
                    Book a Tour
                  </Button>
                  <Button 
                    variant="outline"
                    href="/apply?program=nursery"
                    size="lg"
                  >
                    Apply Now
                  </Button>
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="relative h-80 w-full rounded-xl overflow-hidden">
                  <Image
                    src="/images/programs/nursery-hero.jpg"
                    alt="Teddy Kids Nursery Program"
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
            <h2 className="text-3xl font-display font-bold mb-8 text-center">Age & Overview</h2>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <OverviewItem 
                  icon="🍼" 
                  label="Age Range" 
                  value="3 months – 2.5 years"
                />
                <OverviewItem 
                  icon="🕒" 
                  label="Hours" 
                  value="Mon–Fri, 07:30–18:30"
                />
                <OverviewItem 
                  icon="🥗" 
                  label="Meals" 
                  value="All meals and snacks included"
                />
                <OverviewItem 
                  icon="👥" 
                  label="Staff Ratio" 
                  value="1:3 (under 1), 1:4 (over 1)"
                />
                <OverviewItem 
                  icon="🧍‍♀️" 
                  label="Care Model" 
                  value="Primary caregiver assignment for attachment bonding"
                />
                <OverviewItem 
                  icon="📍" 
                  label="Available At" 
                  value="RBW, RB3/5, ZML"
                />
                <OverviewItem 
                  icon="📱" 
                  label="Daily Updates" 
                  value="Via TeddyConnect app"
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
            <h2 className="text-3xl font-display font-bold mb-8 text-center">What Makes Our Nursery Special</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <FeatureItem 
                icon="💬"
                title="Bilingual from the Beginning"
                description="Children are spoken to in Dutch and English from day one. They soak it up effortlessly."
              />
              <FeatureItem 
                icon="🎨"
                title="Play-Based Learning"
                description="Even the tiniest learners explore the world through textures, sounds, and gentle stimulation."
              />
              <FeatureItem 
                icon="💛"
                title="Attachment First"
                description="Consistency, warmth, and emotional safety form the foundation of every child's experience."
              />
              <FeatureItem 
                icon="👂"
                title="Soft Spaces"
                description="Every corner is designed with texture, sound, and smell in mind—safe materials, low light, and calming soundscapes."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Parent Quote */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <blockquote className="bg-white p-8 rounded-xl shadow-sm text-xl italic text-gray-700 text-center">
              &quot;We couldn&apos;t believe how fast Ella started speaking both Dutch and English. And she&apos;s only one!&quot;
              <footer className="text-right text-base font-medium text-gray-600 mt-4">– Mila, TK RBW Parent</footer>
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
                Play Voice Snippet
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-brand-mint bg-opacity-10">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-display font-bold mb-8 text-center">Gallery</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <GalleryItem 
                src="/images/programs/nursery-play.jpg"
                caption="Circle time in two languages"
              />
              <GalleryItem 
                src="/images/programs/nursery-sleep.jpg"
                caption="Snuggle + Story corner"
              />
              <GalleryItem 
                src="/images/programs/nursery-circle.jpg"
                caption="Outdoor discovery with our caregivers"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Daily Rhythm */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-display font-bold mb-8 text-center">Daily Rhythm</h2>
            
            <div className="bg-white rounded-xl shadow-sm p-6">
              <ScheduleItem 
                time="07:30–09:00"
                activity="Arrival hugs"
                description="Quiet corners, and familiar songs."
              />
              <ScheduleItem 
                time="09:00–10:00"
                activity="Singing & bilingual circle time"
                description="Gentle songs and simple stories in both languages."
              />
              <ScheduleItem 
                time="10:00–11:00"
                activity="Outdoor strolls or garden play"
                description="Fresh air and natural exploration with attentive caregivers."
              />
              <ScheduleItem 
                time="11:00–11:30"
                activity="Fresh lunch prepared in-house"
                description="Nutritious meals with social connections and language development."
              />
              <ScheduleItem 
                time="12:00–14:00"
                activity="Nap time"
                description="Dim lights, soft white noise, cozy blankets from home."
              />
              <ScheduleItem 
                time="14:00–15:30"
                activity="Sensory play & cuddles"
                description="Textures, sounds, and one-on-one attention."
              />
              <ScheduleItem 
                time="15:30–17:00"
                activity="Free play & story time"
                description="Exploration and stories in two languages."
              />
              <ScheduleItem 
                time="17:00–18:30"
                activity="Pick-up & one-on-one snuggles"
                description="Gentle transitions and warm goodbyes."
              />
            </div>
            
            <p className="text-center text-gray-600 mt-6 text-sm">
              *Schedule is flexible and adapted to children&apos;s needs, especially for infants who follow their own feeding and sleeping patterns.
            </p>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-16 bg-brand-purple bg-opacity-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-display font-bold mb-8 text-center">Locations Offering Nursery Program</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {nurseryLocations.map((location, index) => (
              <LocationCard 
                key={index}
                name={location.name}
                address={`${location.address.street}, ${location.address.city}`}
                imageSrc={location.images[0]}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-brand-pink bg-opacity-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-display font-bold mb-6">
            Let&apos;s make the first goodbye feel beautiful.
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            We know what this moment feels like. Let&apos;s walk through it together—with care, clarity, and calm.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="primary"
              href="/contact"
              size="lg"
            >
              Meet the Nursery Team
            </Button>
            <Button 
              variant="outline"
              href="/apply?program=nursery"
              size="lg"
            >
              Book a Personal Tour
            </Button>
          </div>
          <p className="text-sm text-gray-600 mt-4">
            Prefer to chat first? <a href="https://wa.me/31612345678" className="text-brand-pink hover:underline">WhatsApp us here</a>.
          </p>
        </div>
      </section>
    </main>
  );
}
