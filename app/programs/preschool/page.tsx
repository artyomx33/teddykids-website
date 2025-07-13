import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/Button';
import { getLocationsByProgram } from '@/lib/locations';
import React from 'react';

export const metadata: Metadata = {
  title: 'Teddy Learners Program | Teddy Kids',
  description: 'Teddy Learners is where growing minds, wild imaginations, and little hearts get gently guided into their next big step with bilingual education.',
  keywords: 'teddy learners, teddy kids preschool, play-based learning, bilingual preschool, school readiness, early childhood education, leiden preschool',
  openGraph: {
    title: 'Teddy Learners Program | Teddy Kids',
    description: 'Teddy Learners is where growing minds, wild imaginations, and little hearts get gently guided into their next big step with bilingual education.',
    url: 'https://www.teddykids.nl/programs/preschool',
    siteName: 'Teddy Kids',
    images: [
      {
        url: '/images/programs/preschool-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Teddy Kids Teddy Learners Program - Bilingual education for ages 2-4',
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

// Kid quote component
interface KidQuoteProps {
  quote: string;
}

const KidQuote: React.FC<KidQuoteProps> = ({ quote }) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm">
      <p className="text-lg italic text-gray-700 font-handwriting">{quote}</p>
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

export default function PreschoolPage() {
  // Get locations that offer the preschool program
  const preschoolLocations = getLocationsByProgram('preschool');

  return (
    <main>
      {/* Hero Section */}
      <section className="py-20 bg-brand-yellow bg-opacity-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <div className="flex items-center mb-4">
                  <span className="text-4xl mr-3">🎨</span>
                  <h1 className="text-4xl md:text-5xl font-display font-bold">Teddy Learners</h1>
                </div>
                <p className="text-xl italic text-gray-700 mb-6">
                  &quot;They&apos;re not babies anymore. But they still need magic, hugs, and someone to explain the word &apos;why&apos; in two languages.&quot;
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Teddy Learners is where growing minds, wild imaginations, and little hearts get gently guided into their next big step.
                </p>
                <div className="bg-white p-4 rounded-lg inline-block mb-6">
                  <span className="font-medium">Ages:</span> 2 - 4 years
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
                    href="/apply?program=preschool"
                    size="lg"
                  >
                    Apply Now
                  </Button>
                </div>
                <div className="mt-4">
                  <Button
                    variant="secondary"
                    size="sm"
                    className="flex items-center gap-2"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                    Play Audio
                  </Button>
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="relative h-80 w-full rounded-xl overflow-hidden">
                  <Image
                    src="/images/programs/preschool-hero.jpg"
                    alt="Teddy Kids Teddy Learners Program"
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
                  icon="🎂" 
                  label="Age Range" 
                  value="2–4 years"
                />
                <OverviewItem 
                  icon="🕒" 
                  label="Hours" 
                  value="Mon–Fri, 07:30–18:30"
                />
                <OverviewItem 
                  icon="🥗" 
                  label="Meals" 
                  value="All meals included"
                />
                <OverviewItem 
                  icon="📍" 
                  label="Available At" 
                  value="RB3/5, LRZ, ZML"
                />
                <OverviewItem 
                  icon="👥" 
                  label="Mentor Model" 
                  value="Primary caregiver tracking emotional/social growth"
                />
                <OverviewItem 
                  icon="📲" 
                  label="Extras" 
                  value="Weekly bilingual journals, TeddyConnect updates"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Teddy Powers */}
      <section className="py-16 bg-brand-yellow bg-opacity-10">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-display font-bold mb-8 text-center">Teddy Powers (That Stick for Life)</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <FeatureItem 
                icon="🗣️"
                title="Bilingual Play Everyday"
                description="We don&apos;t &apos;teach&apos; two languages—we live them. Songs, stories, play… all come in Dutch and English."
              />
              <FeatureItem 
                icon="🧠"
                title="Teducation™ at Work"
                description="Your child&apos;s mind is wired for pattern-making, problem-solving, and play. We call it Teddyfication when their spark lights up!"
              />
              <FeatureItem 
                icon="💛"
                title="Feelings Made Friendly"
                description="Meltdowns. Hugs. Solving arguments with blocks. We help children name emotions, hold space, and still make it to circle time."
              />
              <FeatureItem 
                icon="🔧"
                title="Skills That Stick"
                description="Counting, sorting, dressing themselves… life-ready milestones emerge through everyday magic."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Inside a Teddy Day */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-display font-bold mb-8 text-center">Inside a Teddy Day (According to the Kids)</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <KidQuote quote="We made soup. It was purple. Nobody ate it, but we learned about colors." />
              <KidQuote quote="Apie got stuck in the fort. We used teamwork (and a broom) to rescue him." />
              <KidQuote quote="We learned how to pop balloons without crying. It was loud and brave." />
            </div>
          </div>
        </div>
      </section>

      {/* Parent Quote */}
      <section className="py-16 bg-brand-mint bg-opacity-10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <blockquote className="bg-white p-8 rounded-xl shadow-sm text-xl italic text-gray-700 text-center">
              &quot;I walked in and my son was explaining what &apos;boos&apos; means in English. He&apos;s three. I actually teared up.&quot;
              <footer className="text-right text-base font-medium text-gray-600 mt-4">– Samira, TK Parent, ZML</footer>
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
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-display font-bold mb-8 text-center">Gallery</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <GalleryItem 
                src="/images/programs/teddy-learners-1.jpg"
                caption="Outdoor treasure hunts in two languages"
              />
              <GalleryItem 
                src="/images/programs/teddy-learners-2.jpg"
                caption="This book is upside down but the story&apos;s still magical"
              />
              <GalleryItem 
                src="/images/programs/teddy-learners-3.jpg"
                caption="Teddy Learners = 12 squealing scientists and a bucket of paint"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Daily Rhythm */}
      <section className="py-16 bg-brand-purple bg-opacity-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-display font-bold mb-8 text-center">Daily Rhythm</h2>
            
            <div className="bg-white rounded-xl shadow-sm p-6">
              <ScheduleItem 
                time="07:30–09:00"
                activity="Arrival, dress-up, open-ended play"
                description="Warm welcomes and child-led exploration to start the day."
              />
              <ScheduleItem 
                time="09:00–10:00"
                activity="Circle time (Dutch & English stories)"
                description="Community building with songs, stories, and sharing in both languages."
              />
              <ScheduleItem 
                time="10:00–11:00"
                activity="Outdoor science or project play"
                description="Hands-on discovery and exploration in our natural spaces."
              />
              <ScheduleItem 
                time="11:30–12:00"
                activity="Lunch + toddler debates"
                description="Nutritious meals with lively conversations and emerging opinions."
              />
              <ScheduleItem 
                time="12:00–13:30"
                activity="Nap time / quiet sensory play"
                description="Rest for those who need it, gentle activities for others."
              />
              <ScheduleItem 
                time="13:30–15:00"
                activity="Group work or big questions"
                description="Exploring important topics like &apos;Why is the moon round?&apos; and other philosophical wonders."
              />
              <ScheduleItem 
                time="15:00–16:30"
                activity="Music, dance, movement games"
                description="Creative expression and joyful movement to engage body and mind."
              />
              <ScheduleItem 
                time="16:30–18:30"
                activity="Pick-up hugs and emotional debriefs"
                description="Reflections on the day and warm goodbyes."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-display font-bold mb-8 text-center">Locations Offering Teddy Learners</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {preschoolLocations.map((location, index) => (
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
      <section className="py-16 bg-brand-yellow bg-opacity-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-display font-bold mb-6">
            Still figuring out if your child is ready?
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            So is every parent. That&apos;s why we&apos;re here—no pressure. Just answers, smiles, and
            options.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="primary"
              href="/contact"
              size="lg"
            >
              Talk to a Teddicated Human
            </Button>
            <Button 
              variant="outline"
              href="/apply?program=preschool"
              size="lg"
            >
              Book a No-Stress Visit
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
