import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/Button';
import { getLocationsByProgram } from '@/lib/locations';

export const metadata: Metadata = {
  title: 'TISA Program | Teddy Kids',
  description: 'Where world-class international education meets the warmth of Teddy care. Seamless support for international families in Leiden.',
  keywords: 'teddy kids tisa, international school leiden, bilingual education, expat childcare, international families, leiden international school',
  openGraph: {
    title: 'TISA Program | Teddy Kids',
    description: 'Where world-class international education meets the warmth of Teddy care. Seamless support for international families in Leiden.',
    url: 'https://www.teddykids.nl/programs/tisa',
    siteName: 'Teddy Kids',
    images: [
      {
        url: '/images/programs/tisa-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Teddy Kids TISA Program - International education with Teddy warmth',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

// Feature item component
const FeatureItem = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
      <div className="text-3xl mb-3">{icon}</div>
      <h3 className="text-xl font-medium mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

// Location card component
const LocationCard = ({ name, address, imageSrc }) => {
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
const OverviewItem = ({ icon, label, value }) => {
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

// Testimonial component
const Testimonial = ({ quote, author, location, imageSrc }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <div className="flex items-start mb-4">
        <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4 flex-shrink-0">
          <Image
            src={imageSrc || '/images/testimonials/placeholder.jpg'}
            alt={author}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h4 className="font-medium">{author}</h4>
          <p className="text-sm text-gray-600">{location}</p>
        </div>
      </div>
      <blockquote className="italic text-gray-700">"{quote}"</blockquote>
    </div>
  );
};

// Gallery item component
const GalleryItem = ({ src, caption }) => {
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

// Program integration component
const ProgramIntegration = ({ icon, title, description, linkText, linkHref }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-brand-mint">
      <div className="flex items-start mb-3">
        <div className="text-3xl mr-3">{icon}</div>
        <h3 className="text-xl font-medium">{title}</h3>
      </div>
      <p className="text-gray-700 mb-3">{description}</p>
      <Link 
        href={linkHref}
        className="text-brand-mint font-medium hover:underline inline-flex items-center"
      >
        {linkText}
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  );
};

export default function TISAPage() {
  // Get locations that offer the TISA program
  const tisaLocations = getLocationsByProgram('tisa');

  return (
    <main>
      {/* Hero Section */}
      <section className="py-20 bg-brand-mint bg-opacity-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <div className="flex items-center mb-4">
                  <span className="text-4xl mr-3">🌍</span>
                  <h1 className="text-4xl md:text-5xl font-display font-bold">TISA</h1>
                </div>
                <p className="text-xl italic text-gray-700 mb-6">
                  "Where world-class international education meets the warmth of Teddy care."
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Teddy International School Adventures (TISA) creates a seamless experience for international families, connecting our bilingual childcare with Leiden's premier international schools.
                </p>
                <div className="bg-white p-4 rounded-lg inline-block mb-6">
                  <span className="font-medium">Ages:</span> 3 months - 12 years
                </div>
                <div className="flex flex-wrap gap-4">
                  <Button 
                    variant="primary"
                    href="/contact"
                    size="lg"
                  >
                    Book a Consultation
                  </Button>
                  <Button 
                    variant="outline"
                    href="/apply?program=tisa"
                    size="lg"
                  >
                    Join TISA Family
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
                    Hear from TISA Families
                  </Button>
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="relative h-80 w-full rounded-xl overflow-hidden">
                  <Image
                    src="/images/programs/tisa-hero.jpg"
                    alt="Teddy Kids TISA Program"
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

      {/* Program Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-display font-bold mb-8 text-center">Program Overview</h2>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <p className="text-lg mb-6">
                TISA is our comprehensive approach to supporting international families throughout their educational journey in Leiden. We understand the unique challenges of raising children abroad and have created a program that:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-brand-mint mr-2">●</span>
                  <span>Integrates seamlessly with Leiden's international schools</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-mint mr-2">●</span>
                  <span>Provides bilingual childcare from infancy through primary years</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-mint mr-2">●</span>
                  <span>Offers dedicated support for expatriate families</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-mint mr-2">●</span>
                  <span>Creates community connections for both parents and children</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-mint mr-2">●</span>
                  <span>Simplifies logistics with school transport and extended hours</span>
                </li>
              </ul>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                <OverviewItem 
                  icon="🏫" 
                  label="School Partners" 
                  value="TISA, Leiden International School, HSL"
                />
                <OverviewItem 
                  icon="🌐" 
                  label="Languages" 
                  value="English and Dutch immersion"
                />
                <OverviewItem 
                  icon="🚌" 
                  label="Transport" 
                  value="School pickup/dropoff available"
                />
                <OverviewItem 
                  icon="🗓️" 
                  label="Holiday Coverage" 
                  value="Full care during international school breaks"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Integration */}
      <section className="py-16 bg-brand-mint bg-opacity-10">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-display font-bold mb-8 text-center">Complete Educational Journey</h2>
            <p className="text-center text-lg text-gray-700 mb-10 max-w-3xl mx-auto">
              TISA connects all our programs to create a seamless educational experience from infancy through primary years.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <ProgramIntegration 
                icon="🍼"
                title="Nursery (3 months - 2.5 years)"
                description="Bilingual care from the beginning, preparing your child for international education with early language exposure."
                linkText="Explore Nursery Program"
                linkHref="/programs/nursery"
              />
              <ProgramIntegration 
                icon="🎨"
                title="Teddy Learners (2 - 4 years)"
                description="Pre-school preparation aligned with international curriculum standards and bilingual development."
                linkText="Explore Teddy Learners"
                linkHref="/programs/preschool"
              />
              <ProgramIntegration 
                icon="🚀"
                title="BSO Explorers (4 - 12 years)"
                description="After-school care with international school pickup, homework support, and enrichment activities."
                linkText="Explore BSO Program"
                linkHref="/programs/afterschool"
              />
              <ProgramIntegration 
                icon="🏫"
                title="School Partnerships"
                description="Direct relationships with Leiden's international schools for coordinated educational approaches."
                linkText="View Partner Schools"
                linkHref="/locations#tisa-schools"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Special Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-display font-bold mb-8 text-center">Special Features for TISA Families</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <FeatureItem 
                icon="🤝"
                title="Expatriate Support Network"
                description="Connect with other international families, access relocation resources, and join parent community events."
              />
              <FeatureItem 
                icon="📱"
                title="TeddyConnect App"
                description="Stay connected to your child's day with updates, photos, and messages in your preferred language."
              />
              <FeatureItem 
                icon="🗣️"
                title="Language Transition Support"
                description="Specialized programs to help children adapt to new language environments with confidence."
              />
              <FeatureItem 
                icon="🚗"
                title="Transportation Solutions"
                description="School pickup/dropoff service and assistance with transportation logistics for busy international families."
              />
              <FeatureItem 
                icon="🗓️"
                title="Flexible Scheduling"
                description="Extended hours and holiday coverage designed around international school calendars."
              />
              <FeatureItem 
                icon="🌍"
                title="Cultural Integration"
                description="Activities that celebrate global cultures while supporting adaptation to Dutch life."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-brand-purple bg-opacity-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-display font-bold mb-8 text-center">International Family Stories</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Testimonial 
                quote="Moving to the Netherlands with a 3-year-old was daunting, but TISA made the transition so smooth. The bilingual environment helped our daughter adapt quickly, and the connection with her international school is seamless."
                author="Elena & Marco"
                location="Italian family, 2 years with Teddy Kids"
                imageSrc="/images/testimonials/international-family-1.jpg"
              />
              <Testimonial 
                quote="As a diplomatic family that moves frequently, finding consistent, quality care is crucial. Teddy Kids' TISA program understood our unique needs and provided our son with stability and cultural awareness that has been invaluable."
                author="James T."
                location="British-Japanese family, 3 years with Teddy Kids"
                imageSrc="/images/testimonials/international-family-2.jpg"
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
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-display font-bold mb-8 text-center">TISA in Action</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <GalleryItem 
                src="/images/programs/tisa-gallery-1.jpg"
                caption="International cultural celebration day"
              />
              <GalleryItem 
                src="/images/programs/tisa-gallery-2.jpg"
                caption="School transport service with our Teddy Bus"
              />
              <GalleryItem 
                src="/images/programs/tisa-gallery-3.jpg"
                caption="Parent networking event for international families"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-16 bg-brand-yellow bg-opacity-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-display font-bold mb-8 text-center">TISA Dedicated Locations</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {tisaLocations.map((location, index) => (
              <LocationCard 
                key={index}
                name={location.name}
                address={`${location.address.street}, ${location.address.city}`}
                imageSrc={location.images[0]}
              />
            ))}
          </div>
          
          <div className="max-w-3xl mx-auto mt-12 bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-medium mb-4 text-center">Our International School Partners</h3>
            <div className="flex flex-wrap justify-center gap-8">
              <div className="text-center">
                <div className="relative h-16 w-36 mx-auto mb-2">
                  <Image
                    src="/images/partners/tisa-logo.png"
                    alt="TISA School"
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="text-sm text-gray-700">The International School of Amsterdam</p>
              </div>
              <div className="text-center">
                <div className="relative h-16 w-36 mx-auto mb-2">
                  <Image
                    src="/images/partners/lis-logo.png"
                    alt="Leiden International School"
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="text-sm text-gray-700">Leiden International School</p>
              </div>
              <div className="text-center">
                <div className="relative h-16 w-36 mx-auto mb-2">
                  <Image
                    src="/images/partners/hsl-logo.png"
                    alt="HSL"
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="text-sm text-gray-700">Haagsche Schoolvereeniging</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-brand-mint bg-opacity-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-display font-bold mb-6">
            Your international family deserves a soft landing
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Let us help you navigate childcare and education in the Netherlands with personalized support every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="primary"
              href="/contact"
              size="lg"
            >
              Schedule a Consultation
            </Button>
            <Button 
              variant="outline"
              href="/apply?program=tisa"
              size="lg"
            >
              Request Welcome Package
            </Button>
          </div>
          <p className="text-sm text-gray-600 mt-4">
            New to the Netherlands? <a href="https://wa.me/31612345678" className="text-brand-mint hover:underline">Message our International Family Coordinator</a>
          </p>
        </div>
      </section>
    </main>
  );
}
