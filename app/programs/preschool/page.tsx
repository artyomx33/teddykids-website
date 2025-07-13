import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/Button';
import { getLocationsByProgram } from '@/lib/locations';

export const metadata: Metadata = {
  title: 'Preschool Program | Teddy Kids',
  description: 'Our Preschool program nurtures children aged 2.5-4 years through play-based learning, social development, and bilingual education, preparing them for school success.',
  keywords: 'teddy kids preschool, play-based learning, bilingual preschool, school readiness, early childhood education, leiden preschool',
  openGraph: {
    title: 'Preschool Program | Teddy Kids',
    description: 'Our Preschool program nurtures children aged 2.5-4 years through play-based learning, social development, and bilingual education, preparing them for school success.',
    url: 'https://www.teddykids.nl/programs/preschool',
    siteName: 'Teddy Kids',
    images: [
      {
        url: '/images/programs/preschool-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Teddy Kids Preschool Program - Where play meets purpose',
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
                  <h1 className="text-4xl md:text-5xl font-display font-bold">Preschool</h1>
                </div>
                <p className="text-xl italic text-gray-700 mb-6">"Where play meets purpose"</p>
                <p className="text-lg text-gray-700 mb-6">
                  Our Preschool program creates a joyful, engaging environment where children develop social skills, language fluency, and a love of learning through purposeful play. We prepare children for future academic success while honoring the magic of childhood.
                </p>
                <div className="bg-white p-4 rounded-lg inline-block mb-6">
                  <span className="font-medium">Ages:</span> 2.5 - 4 years
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
              </div>
              <div className="md:w-1/2">
                <div className="relative h-80 w-full rounded-xl overflow-hidden">
                  <Image
                    src="/images/programs/preschool-hero.jpg"
                    alt="Teddy Kids Preschool Program"
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
                Our Preschool program builds on children's natural curiosity and energy, creating meaningful learning experiences through play. As children become more independent and socially aware, we provide opportunities to:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-brand-pink mr-2">●</span>
                  <span>Develop fluency in both English and Dutch through daily immersion</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-pink mr-2">●</span>
                  <span>Build social skills through collaborative activities and guided interactions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-pink mr-2">●</span>
                  <span>Explore early literacy, numeracy, and scientific concepts through hands-on experiences</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-pink mr-2">●</span>
                  <span>Express creativity through art, music, movement, and imaginative play</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-pink mr-2">●</span>
                  <span>Develop self-regulation and independence in preparation for school</span>
                </li>
              </ul>
              <p className="text-lg">
                Our approach balances child-led exploration with teacher-guided activities, creating a foundation for lifelong learning while ensuring children experience the joy and wonder of early childhood.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Daily Schedule */}
      <section className="py-16 bg-brand-mint bg-opacity-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-display font-bold mb-8 text-center">A Day in Our Preschool</h2>
            <p className="text-center text-gray-700 mb-8">
              Our preschool day provides a balanced rhythm of active learning, social interaction, and quiet reflection:
            </p>
            
            <div className="bg-white rounded-xl shadow-sm p-6">
              <ScheduleItem 
                time="7:30 - 9:00"
                activity="Welcome & Free Play"
                activity="Welcome & Free Play"
                description="Warm greetings and choice-based activities as children arrive and settle in."
              />
              <ScheduleItem 
                time="9:00 - 9:30"
                activity="Morning Circle"
                description="Songs, stories, calendar time, and daily plan discussions in both English and Dutch."
              />
              <ScheduleItem 
                time="9:30 - 10:30"
                activity="Learning Centers"
                description="Child-directed exploration in themed centers (art, building, literacy, science, dramatic play)."
              />
              <ScheduleItem 
                time="10:30 - 11:00"
                activity="Snack & Social Time"
                description="Healthy snacks with conversation practice and developing table manners."
              />
              <ScheduleItem 
                time="11:00 - 12:00"
                activity="Outdoor Exploration"
                description="Physical activity, nature exploration, and social play in our outdoor learning spaces."
              />
              <ScheduleItem 
                time="12:00 - 12:45"
                activity="Lunch Time"
                description="Family-style meals promoting independence, conversation, and healthy eating habits."
              />
              <ScheduleItem 
                time="12:45 - 14:30"
                activity="Rest & Quiet Activities"
                description="Nap time for those who need it, quiet activities for others (books, puzzles, drawing)."
              />
              <ScheduleItem 
                time="14:30 - 15:15"
                activity="Small Group Learning"
                description="Teacher-guided activities focusing on specific skills (early literacy, math concepts, science)."
              />
              <ScheduleItem 
                time="15:15 - 15:45"
                activity="Afternoon Snack"
                description="Healthy refreshments and social interaction."
              />
              <ScheduleItem 
                time="15:45 - 16:45"
                activity="Creative Expression"
                description="Art, music, movement, and project work based on current themes."
              />
              <ScheduleItem 
                time="16:45 - 18:30"
                activity="Free Play & Departure"
                description="Choice-based activities, outdoor time (weather permitting), and peaceful goodbyes."
              />
            </div>
            
            <p className="text-center text-gray-600 mt-6 text-sm">
              *Schedule includes regular transitions between English and Dutch throughout the day, with flexibility to follow children's interests and needs.
            </p>
          </div>
        </div>
      </section>

      {/* What Makes Our Preschool Special */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-display font-bold mb-8 text-center">What Makes Our Preschool Special</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <FeatureItem 
                icon="🗣️"
                title="True Bilingual Immersion"
                description="Natural exposure to both English and Dutch through our unique language rotation system with native-speaking teachers."
              />
              <FeatureItem 
                icon="🧩"
                title="Project-Based Learning"
                description="Extended investigations of topics that matter to children, building deeper understanding and critical thinking skills."
              />
              <FeatureItem 
                icon="👥"
                title="Social-Emotional Focus"
                description="Intentional teaching of friendship skills, emotional regulation, and conflict resolution through our Heart-Wise curriculum."
              />
              <FeatureItem 
                icon="📚"
                title="Pre-Academic Foundations"
                description="Playful introduction to literacy, numeracy, and scientific thinking that prepares children for school success."
              />
              <FeatureItem 
                icon="🌳"
                title="Nature Connection"
                description="Regular outdoor learning, nature-based materials, and environmental awareness woven throughout our program."
              />
              <FeatureItem 
                icon="🔄"
                title="Seamless Transitions"
                description="Thoughtful preparation for primary school, including partnerships with local schools and transition support."
              />
            </div>
            
            <div className="bg-brand-yellow bg-opacity-20 p-6 rounded-xl">
              <h3 className="text-xl font-medium mb-4 text-center">Our Approach to School Readiness</h3>
              <p className="text-gray-700 mb-4">
                We believe that school readiness involves much more than academic skills. Our comprehensive approach prepares children by developing:
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <span className="text-brand-pink mr-2">●</span>
                  <span>Self-regulation and the ability to focus on tasks</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-pink mr-2">●</span>
                  <span>Confidence in speaking and listening in group settings</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-pink mr-2">●</span>
                  <span>Problem-solving skills and resilience when facing challenges</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-pink mr-2">●</span>
                  <span>Independence in self-care routines</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-pink mr-2">●</span>
                  <span>Curiosity and enthusiasm for learning</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-pink mr-2">●</span>
                  <span>Foundational literacy and numeracy concepts</span>
                </li>
              </ul>
              <p className="text-gray-700">
                Children who graduate from our preschool program enter primary school as confident, capable learners with the social and academic skills needed for success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-16 bg-brand-purple bg-opacity-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-display font-bold mb-8 text-center">Locations Offering Preschool Program</h2>
          
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

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-display font-bold mb-8 text-center">What Parents Say</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Testimonial 
                quote="The preschool program has given our son such confidence. He's speaking both Dutch and English, making friends, and coming home excited about what he's learning. The teachers really understand how to make learning fun and meaningful."
                author="Sophia K."
                location="Mother of Oliver, 3.5 years"
                imageSrc="/images/testimonials/parent5.jpg"
              />
              <Testimonial 
                quote="We've been amazed at how our daughter has developed at Teddy Kids. The project-based approach has sparked her curiosity, and she's constantly telling us about her discoveries. The bilingual environment has been a huge bonus."
                author="Thomas & Julie"
                location="Parents of Emma, 4 years"
                imageSrc="/images/testimonials/parent6.jpg"
              />
              <Testimonial 
                quote="As an international family, we wanted a preschool that would honor our multicultural background. Teddy Kids has exceeded our expectations. Our son is thriving in the bilingual environment and has made friends from all over the world."
                author="Raj & Anna"
                location="Parents of Arjun, 3 years"
                imageSrc="/images/testimonials/parent7.jpg"
              />
              <Testimonial 
                quote="The transition from the nursery to preschool program was seamless. The teachers really focus on the whole child - not just academics but emotional and social skills too. Our daughter is so well prepared for primary school now."
                author="Laura B."
                location="Mother of Zoe, 4 years"
                imageSrc="/images/testimonials/parent8.jpg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-brand-yellow bg-opacity-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-display font-bold mb-6">Ready to Watch Your Child Flourish?</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Schedule a tour to see our preschool program in action and discover how we can nurture your child's development during these formative years.
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
              href="/apply?program=preschool"
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
