import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/Button';
import { getLocationsByProgram } from '@/lib/locations';

export const metadata: Metadata = {
  title: 'Nursery Program | Teddy Kids',
  description: 'Our Nursery program provides a safe, nurturing bilingual environment for children from 3 months to 2.5 years, focusing on early development through play.',
  keywords: 'teddy kids nursery, infant care leiden, baby daycare, bilingual nursery, toddler program, early childhood',
  openGraph: {
    title: 'Nursery Program | Teddy Kids',
    description: 'Our Nursery program provides a safe, nurturing bilingual environment for children from 3 months to 2.5 years, focusing on early development through play.',
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
const ScheduleItem = ({ time, activity, description }) => {
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
const FeatureItem = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
      <div className="text-3xl mb-3">{icon}</div>
      <h3 className="text-xl font-medium mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
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
                <p className="text-xl italic text-gray-700 mb-6">"Safe, soft beginnings"</p>
                <p className="text-lg text-gray-700 mb-6">
                  Our Nursery program provides a warm, nurturing environment where our youngest explorers begin their journey of discovery. With a focus on sensory experiences, language development, and social connections, we create a foundation for lifelong learning.
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

      {/* Program Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-display font-bold mb-8 text-center">Program Overview</h2>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <p className="text-lg mb-6">
                Our Nursery program is designed to provide a secure, loving environment where infants and toddlers can explore, grow, and develop at their own pace. We understand that the first years of life are crucial for brain development, which is why our program focuses on:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-brand-pink mr-2">●</span>
                  <span>Nurturing relationships with consistent caregivers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-pink mr-2">●</span>
                  <span>Bilingual environment with natural language exposure</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-pink mr-2">●</span>
                  <span>Sensory-rich activities that stimulate development</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-pink mr-2">●</span>
                  <span>Age-appropriate play spaces for exploration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-pink mr-2">●</span>
                  <span>Personalized care routines that respect each child's needs</span>
                </li>
              </ul>
              <p className="text-lg">
                Our approach balances structured activities with plenty of free play time, allowing children to develop their curiosity, creativity, and confidence in a safe, supportive setting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Daily Schedule */}
      <section className="py-16 bg-brand-yellow bg-opacity-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-display font-bold mb-8 text-center">A Day in Our Nursery</h2>
            <p className="text-center text-gray-700 mb-8">
              While we adapt to each child's individual rhythm, here's a glimpse of our daily flow:
            </p>
            
            <div className="bg-white rounded-xl shadow-sm p-6">
              <ScheduleItem 
                time="7:30 - 9:00"
                activity="Arrival & Welcome"
                description="Warm greetings, gentle transitions, and free play as children arrive."
              />
              <ScheduleItem 
                time="9:00 - 9:30"
                activity="Morning Circle"
                description="Songs, stories, and simple greetings in both English and Dutch."
              />
              <ScheduleItem 
                time="9:30 - 10:15"
                activity="Sensory Exploration"
                description="Age-appropriate activities focusing on touch, sound, sight, and movement."
              />
              <ScheduleItem 
                time="10:15 - 10:45"
                activity="Snack Time"
                description="Healthy snacks with social interaction and language development."
              />
              <ScheduleItem 
                time="10:45 - 11:30"
                activity="Outdoor Discovery"
                description="Fresh air, nature exploration, and gross motor development in our secure outdoor spaces."
              />
              <ScheduleItem 
                time="11:30 - 12:30"
                activity="Lunch & Social Time"
                description="Nutritious meals with conversation and developing independence."
              />
              <ScheduleItem 
                time="12:30 - 14:30"
                activity="Rest Time"
                description="Naps and quiet time tailored to each child's needs."
              />
              <ScheduleItem 
                time="14:30 - 15:15"
                activity="Gentle Awakening & Snack"
                description="Gradual transition from rest with quiet activities and healthy snacks."
              />
              <ScheduleItem 
                time="15:15 - 16:30"
                activity="Creative Play"
                description="Art, music, movement, and imaginative activities."
              />
              <ScheduleItem 
                time="16:30 - 18:30"
                activity="Evening Wind-Down"
                description="Flexible play options, individual attention, and peaceful departures."
              />
            </div>
            
            <p className="text-center text-gray-600 mt-6 text-sm">
              *Schedule is flexible and adapted to children's needs, especially for infants who follow their own feeding and sleeping patterns.
            </p>
          </div>
        </div>
      </section>

      {/* What Makes Our Nursery Special */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-display font-bold mb-8 text-center">What Makes Our Nursery Special</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <FeatureItem 
                icon="🌍"
                title="Bilingual Environment"
                description="Natural exposure to both English and Dutch through songs, stories, and daily interactions."
              />
              <FeatureItem 
                icon="👋"
                title="Primary Caregiver System"
                description="Each child has a dedicated caregiver who builds a deep understanding of their needs and preferences."
              />
              <FeatureItem 
                icon="🧠"
                title="Brain-Building Focus"
                description="Activities designed to support cognitive development during this crucial period of rapid brain growth."
              />
              <FeatureItem 
                icon="🧸"
                title="Cozy, Home-Like Spaces"
                description="Thoughtfully designed environments that feel safe, warm, and inviting for our youngest learners."
              />
              <FeatureItem 
                icon="🌱"
                title="Nature Connection"
                description="Regular outdoor experiences and natural materials to develop sensory awareness and environmental appreciation."
              />
              <FeatureItem 
                icon="👨‍👩‍👧‍👦"
                title="Family Partnership"
                description="Close communication with parents through daily updates, regular meetings, and shared milestone celebrations."
              />
            </div>
            
            <div className="bg-brand-mint bg-opacity-20 p-6 rounded-xl">
              <h3 className="text-xl font-medium mb-4 text-center">Our Approach to Transitions</h3>
              <p className="text-gray-700 mb-4">
                We understand that starting nursery is a significant step for both children and parents. Our gentle settling-in process includes:
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <span className="text-brand-pink mr-2">●</span>
                  <span>Pre-start visits where you and your child can explore together</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-pink mr-2">●</span>
                  <span>Gradual build-up of time spent at nursery</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-pink mr-2">●</span>
                  <span>Welcome package with photos of caregivers and spaces</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-pink mr-2">●</span>
                  <span>Detailed intake discussions about your child's routines and preferences</span>
                </li>
              </ul>
              <p className="text-gray-700">
                This thoughtful approach helps ensure a smooth, positive start to your child's Teddy Kids journey.
              </p>
            </div>
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

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-display font-bold mb-8 text-center">What Parents Say</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Testimonial 
                quote="The nursery team has been incredible with our daughter. They've created such a nurturing environment that she's excited to go every day. The bilingual approach is already showing results - she's using words in both languages!"
                author="Emma & James"
                location="Parents of Lily, 18 months"
                imageSrc="/images/testimonials/parent1.jpg"
              />
              <Testimonial 
                quote="As first-time parents, we were nervous about childcare, but the Teddy Kids nursery team made the transition so smooth. The primary caregiver system meant our son bonded quickly, and the daily updates help us feel connected to his experiences."
                author="David P."
                location="Father of Noah, 14 months"
                imageSrc="/images/testimonials/parent2.jpg"
              />
              <Testimonial 
                quote="The attention to detail in the nursery program is impressive. From the thoughtfully designed spaces to the personalized care routines, everything is created with the children's wellbeing in mind. Our twins have thrived here."
                author="Sophia K."
                location="Mother of twins, 2 years"
                imageSrc="/images/testimonials/parent3.jpg"
              />
              <Testimonial 
                quote="As international parents, finding a bilingual nursery was important to us. The way Teddy Kids integrates both languages naturally throughout the day has been perfect for our daughter, and the cultural diversity is wonderful."
                author="Miguel & Ling"
                location="Parents of Mia, 20 months"
                imageSrc="/images/testimonials/parent4.jpg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-brand-pink bg-opacity-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-display font-bold mb-6">Ready to Give Your Child the Best Start?</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Schedule a tour to see our nursery in action and learn how we can support your child's earliest development journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
      </section>
    </main>
  );
}
