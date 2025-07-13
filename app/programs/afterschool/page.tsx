import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/Button';
import { getLocationsByProgram } from '@/lib/locations';

export const metadata: Metadata = {
  title: 'Teddy BSO Explorers | Teddy Kids',
  description: 'After school doesn\'t have to feel like after-thought. Our BSO program gives your child the afternoon adventures they deserve, in two languages.',
  keywords: 'teddy kids bso, after school care leiden, bilingual after school, after school activities, teddy explorers, leiden bso',
  openGraph: {
    title: 'Teddy BSO Explorers | Teddy Kids',
    description: 'After school doesn\'t have to feel like after-thought. Our BSO program gives your child the afternoon adventures they deserve, in two languages.',
    url: 'https://www.teddykids.nl/programs/afterschool',
    siteName: 'Teddy Kids',
    images: [
      {
        url: '/images/programs/afterschool-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Teddy Kids After School Program - Afternoon adventures in two languages',
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

// Quote component with perspective
interface PerspectiveQuoteProps {
  quote: string;
  author: string;
  perspective: 'parent' | 'kid';
}

const PerspectiveQuote: React.FC<PerspectiveQuoteProps> = ({ quote, author, perspective }) => {
  return (
    <div className={`bg-white p-6 rounded-xl shadow-sm ${perspective === 'parent' ? 'border-l-4 border-brand-pink' : 'border-l-4 border-brand-yellow'}`}>
      <div className="mb-2">
        <span className={`text-sm font-medium ${perspective === 'parent' ? 'text-brand-pink' : 'text-brand-yellow'}`}>
          {perspective === 'parent' ? 'PARENT PERSPECTIVE' : 'KID PERSPECTIVE'}
        </span>
      </div>
      <blockquote className="text-lg italic text-gray-700 mb-3">&quot;{quote}&quot;</blockquote>
      <p className="text-sm text-gray-600">— {author}</p>
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

export default function AfterSchoolPage() {
  // Get locations that offer the after school program
  const afterSchoolLocations = getLocationsByProgram('afterSchool');

  return (
    <main>
      {/* Hero Section */}
      <section className="py-20 bg-brand-purple bg-opacity-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <div className="flex items-center mb-4">
                  <span className="text-4xl mr-3">🚀</span>
                  <h1 className="text-4xl md:text-5xl font-display font-bold">Teddy BSO Explorers</h1>
                </div>
                <p className="text-xl italic text-gray-700 mb-6">
                  &quot;After school doesn&apos;t have to feel like after-thought.&quot;
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  We turn those precious afternoon hours into adventures worth talking about at dinner. Bilingual activities, outdoor play, and creative exploration—because your child deserves more than just supervision.
                </p>
                <div className="bg-white p-4 rounded-lg inline-block mb-6">
                  <span className="font-medium">Ages:</span> 4 - 12 years
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
                    href="/apply?program=afterschool"
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
                    src="/images/programs/afterschool-hero.jpg"
                    alt="Teddy Kids After School Program"
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
                  icon="🎒" 
                  label="Age Range" 
                  value="4–12 years"
                />
                <OverviewItem 
                  icon="🕒" 
                  label="Hours" 
                  value="After school until 18:30 + school holidays"
                />
                <OverviewItem 
                  icon="🍎" 
                  label="Snacks" 
                  value="Healthy after-school snacks included"
                />
                <OverviewItem 
                  icon="🚌" 
                  label="Transport" 
                  value="School pickup service available"
                />
                <OverviewItem 
                  icon="🏫" 
                  label="School Partnerships" 
                  value="TISA, Leiden International, local schools"
                />
                <OverviewItem 
                  icon="📍" 
                  label="Available At" 
                  value="RBW, RB3/5, LRZ"
                />
                <OverviewItem 
                  icon="🌍" 
                  label="Language" 
                  value="Bilingual environment (Dutch/English)"
                />
                <OverviewItem 
                  icon="🗓️" 
                  label="Holiday Programs" 
                  value="Full-day care during school breaks"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes BSO Special */}
      <section className="py-16 bg-brand-purple bg-opacity-10">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-display font-bold mb-8 text-center">What Makes Our BSO Special</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <FeatureItem 
                icon="🌍"
                title="Bilingual Afternoons"
                description="Dutch and English flow naturally throughout activities, games, and conversations—perfect for international families."
              />
              <FeatureItem 
                icon="🧪"
                title="STEAM Exploration"
                description="Science, technology, engineering, arts, and math through hands-on projects that feel like play but build future skills."
              />
              <FeatureItem 
                icon="🏞️"
                title="Outdoor Adventure"
                description="Daily outdoor time regardless of weather—because fresh air, movement, and nature are essential after a day of classroom learning."
              />
              <FeatureItem 
                icon="🎭"
                title="Child-Led Clubs"
                description="Kids vote on special interest clubs each term—from cooking to coding, sports to storytelling—empowering their choices."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Perspectives Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-display font-bold mb-8 text-center">Two Perspectives</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <PerspectiveQuote 
                quote="I was worried about after-school care feeling institutional. But my son comes home talking about science experiments and forest adventures, not just 'daycare'."
                author="Joost, Parent of Liam (7)"
                perspective="parent"
              />
              <PerspectiveQuote 
                quote="We made a volcano that ACTUALLY EXPLODED! And nobody even got in trouble!"
                author="Liam (7)"
                perspective="kid"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <PerspectiveQuote 
                quote="As a working parent, I needed practical care hours. What I didn't expect was how the BSO would become my daughter's favorite part of the day."
                author="Maria, Parent of Sophie (9)"
                perspective="parent"
              />
              <PerspectiveQuote 
                quote="I learned how to say 'look at my awesome fort' in Dutch. And I made three best friends."
                author="Sophie (9)"
                perspective="kid"
              />
            </div>
            
            <div className="text-center mt-8">
              <Button
                variant="secondary"
                size="sm"
                className="flex items-center gap-2 mx-auto"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
                Play Voice Snippets
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
                src="/images/programs/afterschool-1.jpg"
                caption="Outdoor adventures in the Leiden woods"
              />
              <GalleryItem 
                src="/images/programs/afterschool-2.jpg"
                caption="BSO cooking club making international snacks"
              />
              <GalleryItem 
                src="/images/programs/afterschool-3.jpg"
                caption="STEAM project: Building bridges that actually work!"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Daily Schedule */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-display font-bold mb-8 text-center">Typical BSO Afternoon</h2>
            
            <div className="bg-white rounded-xl shadow-sm p-6">
              <ScheduleItem 
                time="14:15–15:00"
                activity="School pickup & arrival"
                description="Our team collects children from partner schools with warm welcomes and catch-up chats."
              />
              <ScheduleItem 
                time="15:00–15:30"
                activity="Snack & story time"
                description="Healthy refueling with fresh fruits, vegetables, and whole grains while sharing our day's stories."
              />
              <ScheduleItem 
                time="15:30–16:30"
                activity="Outdoor play & adventures"
                description="From playground games to nature exploration, we get moving and breathing fresh air."
              />
              <ScheduleItem 
                time="16:30–17:30"
                activity="Club time & special projects"
                description="Child-selected activities from cooking to coding, sports to science experiments."
              />
              <ScheduleItem 
                time="17:30–18:30"
                activity="Free play & pickup"
                description="Winding down with board games, reading nooks, and creative corners as parents arrive."
              />
            </div>
            
            <div className="mt-8 bg-brand-yellow bg-opacity-10 p-6 rounded-xl">
              <h3 className="text-xl font-medium mb-4">School Holiday Programs</h3>
              <p className="text-gray-700 mb-4">
                During school holidays, our BSO transforms into full-day adventures with:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-brand-purple mr-2">●</span>
                  <span>Themed week-long projects</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-purple mr-2">●</span>
                  <span>Field trips around Leiden and beyond</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-purple mr-2">●</span>
                  <span>Special guests and workshops</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-purple mr-2">●</span>
                  <span>Extended outdoor adventures</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-display font-bold mb-8 text-center">Locations Offering BSO Explorers</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {afterSchoolLocations.map((location, index) => (
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
      <section className="py-16 bg-brand-purple bg-opacity-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-display font-bold mb-6">
            Ready to give your kid the after-school life they deserve?
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            No more &quot;How was your day?&quot; &quot;Fine.&quot; conversations. Get ready for &quot;You won&apos;t BELIEVE what we did at BSO today!&quot;
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="primary"
              href="/contact"
              size="lg"
            >
              Schedule a Visit
            </Button>
            <Button 
              variant="outline"
              href="/apply?program=afterschool"
              size="lg"
            >
              Join the BSO Family
            </Button>
          </div>
          <p className="text-sm text-gray-600 mt-4">
            Questions about school pickup? <a href="https://wa.me/31612345678" className="text-brand-purple hover:underline">WhatsApp us directly</a>.
          </p>
        </div>
      </section>
    </main>
  );
}
