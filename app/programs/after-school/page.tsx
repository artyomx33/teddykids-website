import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/Button';
import { getLocationsByProgram } from '@/lib/locations';
import React from 'react';

export const metadata: Metadata = {
  title: 'After School Program | Teddy Kids',
  description: 'Our After School program provides a stimulating, bilingual environment for children aged 4-12 years with homework support, enrichment activities, and plenty of time for play and exploration.',
  keywords: 'teddy kids after school, after school care leiden, homework support, enrichment activities, holiday care, bilingual after school',
  openGraph: {
    title: 'After School Program | Teddy Kids',
    description: 'Our After School program provides a stimulating, bilingual environment for children aged 4-12 years with homework support, enrichment activities, and plenty of time for play and exploration.',
    url: 'https://www.teddykids.nl/programs/after-school',
    siteName: 'Teddy Kids',
    images: [
      {
        url: '/images/programs/afterschool-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Teddy Kids After School Program - Exploration after hours',
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

// Testimonial component
interface TestimonialProps {
  quote: string;
  author: string;
  location: string;
  imageSrc: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, author, location, imageSrc }) => {
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
      <blockquote className="italic text-gray-700">&quot;{quote}&quot;</blockquote>
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

// Activity tab component
interface ActivityTabProps {
  title: string;
  description: string;
  imageSrc: string;
}

const ActivityTab: React.FC<ActivityTabProps> = ({ title, description, imageSrc }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="relative h-48 w-full">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-5">
        <h3 className="font-medium text-lg mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
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
                  <span className="text-4xl mr-3">🧩</span>
                  <h1 className="text-4xl md:text-5xl font-display font-bold">After School</h1>
                </div>
                <p className="text-xl italic text-gray-700 mb-6">&quot;Exploration after hours&quot;</p>
                <p className="text-lg text-gray-700 mb-6">
                  Our After School program creates a vibrant, bilingual environment where school-age children can relax, complete homework, explore new interests, and build friendships. We balance structure with freedom, ensuring children continue learning while having fun after school hours.
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
                    href="/apply?program=after-school"
                    size="lg"
                  >
                    Apply Now
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

      {/* Program Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-display font-bold mb-8 text-center">Program Overview</h2>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <p className="text-lg mb-6">
                Our After School program is designed to bridge the gap between school and home, providing a safe, enriching environment where children can:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-brand-pink mr-2">●</span>
                  <span>Complete homework with qualified support in both English and Dutch</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-pink mr-2">●</span>
                  <span>Participate in enrichment activities that expand on school learning</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-pink mr-2">●</span>
                  <span>Develop new skills through specialized workshops and clubs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-pink mr-2">●</span>
                  <span>Enjoy unstructured play time essential for creativity and social development</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-pink mr-2">●</span>
                  <span>Build friendships across age groups in a bilingual environment</span>
                </li>
              </ul>
              <p className="text-lg mb-6">
                During school holidays and study days, we offer full-day care with themed activities, field trips, and special projects that make vacation time both fun and educational.
              </p>
              <p className="text-lg">
                Our program adapts to different age groups, ensuring activities are appropriately challenging and engaging for each child&apos;s developmental stage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Daily Schedule */}
      <section className="py-16 bg-brand-yellow bg-opacity-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-display font-bold mb-8 text-center">After School Schedule</h2>
            <p className="text-center text-gray-700 mb-8">
              Our after school schedule provides a balanced mix of structure and choice:
            </p>
            
            <div className="bg-white rounded-xl shadow-sm p-6">
              <ScheduleItem 
                time="School Dismissal"
                activity="Pick-Up & Transition"
                description="Safe transportation from partner schools to our locations with friendly check-in rituals."
              />
              <ScheduleItem 
                time="Arrival - 15:30"
                activity="Snack & Relaxation"
                description="Healthy snacks and informal conversation time to decompress after the school day."
              />
              <ScheduleItem 
                time="15:30 - 16:15"
                activity="Homework Support"
                description="Dedicated quiet time with qualified staff available to assist with homework in both languages."
              />
              <ScheduleItem 
                time="16:15 - 17:15"
                activity="Enrichment Activities"
                description="Rotating schedule of activities including arts, sports, coding, cooking, science experiments, and more."
              />
              <ScheduleItem 
                time="17:15 - 18:00"
                activity="Free Choice & Outdoor Play"
                description="Unstructured time for children to pursue their interests, play games, and enjoy outdoor activities."
              />
              <ScheduleItem 
                time="18:00 - 18:30"
                activity="Wind Down & Departure"
                description="Quiet activities and preparation for home as parents arrive for pickup."
              />
            </div>
            
            <div className="mt-12">
              <h3 className="text-2xl font-display font-bold mb-6 text-center">Holiday & Study Day Schedule</h3>
              <div className="bg-white rounded-xl shadow-sm p-6">
                <ScheduleItem 
                  time="7:30 - 9:00"
                  activity="Arrival & Morning Activities"
                  description="Flexible drop-off with calm morning activities to start the day."
                />
                <ScheduleItem 
                  time="9:00 - 9:30"
                  activity="Morning Circle"
                  description="Overview of the day&apos;s special activities and group planning."
                />
                <ScheduleItem 
                  time="9:30 - 12:00"
                  activity="Morning Program"
                  description="Themed activities, projects, workshops, or local excursions."
                />
                <ScheduleItem 
                  time="12:00 - 13:00"
                  activity="Lunch & Relaxation"
                  description="Nutritious meal and downtime with quiet activities."
                />
                <ScheduleItem 
                  time="13:00 - 15:30"
                  activity="Afternoon Program"
                  description="Continuation of themed activities or different experiences from the morning."
                />
                <ScheduleItem 
                  time="15:30 - 16:00"
                  activity="Snack Time"
                  description="Healthy refreshments and group discussion about the day."
                />
                <ScheduleItem 
                  time="16:00 - 18:30"
                  activity="Free Choice & Departure"
                  description="Self-directed activities and flexible pickup time."
                />
              </div>
            </div>
            
            <p className="text-center text-gray-600 mt-6 text-sm">
              *Schedules may vary slightly by location and can be adapted to accommodate special events or children&apos;s interests.
            </p>
          </div>
        </div>
      </section>

      {/* Enrichment Activities */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-display font-bold mb-8 text-center">Enrichment Activities</h2>
            <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto">
              Our after school program offers a rotating selection of enrichment activities that expand children&apos;s horizons and develop new skills:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <ActivityTab 
                title="STEM Explorers"
                description="Hands-on science experiments, engineering challenges, coding basics, and math games that make learning fun."
                imageSrc="/images/programs/afterschool-stem.jpg"
              />
              <ActivityTab 
                title="Creative Arts Studio"
                description="Visual arts, drama, music, and dance activities that encourage self-expression and artistic development."
                imageSrc="/images/programs/afterschool-arts.jpg"
              />
              <ActivityTab 
                title="Global Citizens Club"
                description="Cultural exploration through language, cooking, stories, and celebrations from around the world."
                imageSrc="/images/programs/afterschool-global.jpg"
              />
              <ActivityTab 
                title="Sports & Movement"
                description="Team games, yoga, dance, and outdoor adventures that promote physical fitness and coordination."
                imageSrc="/images/programs/afterschool-sports.jpg"
              />
              <ActivityTab 
                title="Eco Warriors"
                description="Environmental education through gardening, recycling projects, nature exploration, and sustainability initiatives."
                imageSrc="/images/programs/afterschool-eco.jpg"
              />
              <ActivityTab 
                title="Junior Entrepreneurs"
                description="Projects that develop creativity, problem-solving, teamwork, and early business concepts."
                imageSrc="/images/programs/afterschool-entrepreneurs.jpg"
              />
            </div>
            
            <div className="bg-brand-mint bg-opacity-20 p-6 rounded-xl">
              <h3 className="text-xl font-medium mb-4 text-center">Holiday Themes & Special Programs</h3>
              <p className="text-gray-700 mb-4">
                During school holidays and study days, we offer exciting themed weeks such as:
              </p>
              <ul className="space-y-2 mb-4 grid grid-cols-1 md:grid-cols-2 gap-2">
                <li className="flex items-start">
                  <span className="text-brand-pink mr-2">●</span>
                  <span>Space Explorers Week</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-pink mr-2">●</span>
                  <span>Time Travelers (History)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-pink mr-2">●</span>
                  <span>Junior Chef Cooking Camp</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-pink mr-2">●</span>
                  <span>Outdoor Adventure Week</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-pink mr-2">●</span>
                  <span>Art & Design Studio</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-pink mr-2">●</span>
                  <span>Sports Olympics</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-pink mr-2">●</span>
                  <span>Science & Innovation Lab</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-pink mr-2">●</span>
                  <span>World Cultures Festival</span>
                </li>
              </ul>
              <p className="text-gray-700">
                These themed weeks include special projects, guest workshops, field trips, and culminating events that make school holidays memorable learning experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Our After School Program Special */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-display font-bold mb-8 text-center">What Makes Our After School Program Special</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <FeatureItem 
                icon="📚"
                title="Homework Success"
                description="Qualified staff provide support in both English and Dutch, creating a positive approach to homework completion."
              />
              <FeatureItem 
                icon="🔄"
                title="Bilingual Advantage"
                description="Continued language development in both English and Dutch through natural immersion and activities."
              />
              <FeatureItem 
                icon="🧠"
                title="Skill Development"
                description="Opportunities to discover and develop new interests beyond the standard school curriculum."
              />
              <FeatureItem 
                icon="🤝"
                title="Cross-Age Connections"
                description="Mixed-age activities that allow children to learn from each other and develop leadership skills."
              />
              <FeatureItem 
                icon="🏫"
                title="School Partnerships"
                description="Strong relationships with local schools ensure continuity and communication about children&apos;s needs."
              />
              <FeatureItem 
                icon="📱"
                title="Parent Connection"
                description="Regular updates and easy communication through our parent app to keep you connected to your child&apos;s experiences."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-16 bg-brand-purple bg-opacity-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-display font-bold mb-8 text-center">Locations Offering After School Program</h2>
          
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

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-display font-bold mb-8 text-center">What Parents Say</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Testimonial 
                quote="The after school program has been a lifesaver for our family. Our children get to continue their bilingual journey while having fun with friends. They come home with their homework done and full of stories about their activities."
                author="Thomas & Julie"
                location="Parents of twins, 6 years"
                imageSrc="/images/testimonials/parent9.jpg"
              />
              <Testimonial 
                quote="My son used to dread homework time, but now he actually enjoys it with the support he gets at Teddy Kids. The staff know how to make learning fun, and the variety of activities keeps him engaged and excited every day."
                author="David P."
                location="Father of Lucas, 8 years"
                imageSrc="/images/testimonials/parent10.jpg"
              />
              <Testimonial 
                quote="The holiday programs are exceptional. My daughter has experienced everything from cooking workshops to science experiments. It&apos;s such a relief to know she&apos;s having fun and learning during school breaks while I&apos;m at work."
                author="Anna M."
                location="Mother of Sofia, 7 years"
                imageSrc="/images/testimonials/parent11.jpg"
              />
              <Testimonial 
                quote="As international parents, we appreciate how the after school program reinforces both languages. Our son has made friends from different schools and age groups, which has really boosted his social confidence."
                author="Miguel & Ling"
                location="Parents of Leo, 9 years"
                imageSrc="/images/testimonials/parent12.jpg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-brand-purple bg-opacity-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-display font-bold mb-6">Looking for Quality After School Care?</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Schedule a tour to see our after school program in action and discover how we can support your child&apos;s development beyond school hours.
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
              href="/apply?program=after-school"
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
