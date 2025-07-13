import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/Button';

export const metadata: Metadata = {
  title: 'About Us | Teddy Kids',
  description: 'Learn about Teddy Kids\' mission, history, and vision for bilingual childcare and international education since 2004.',
  keywords: 'teddy kids history, teddy kids mission, childcare leiden, international school history, tisa story, bilingual education netherlands',
  openGraph: {
    title: 'About Us | Teddy Kids',
    description: 'Learn about Teddy Kids\' mission, history, and vision for bilingual childcare and international education since 2004.',
    url: 'https://www.teddykids.nl/about',
    siteName: 'Teddy Kids',
    images: [
      {
        url: '/images/og-image-about.jpg',
        width: 1200,
        height: 630,
        alt: 'About Teddy Kids - Our Mission and Vision',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

// Timeline item component
const TimelineItem = ({ year, title, description, isLeft = true }) => {
  return (
    <div className={`flex items-center w-full ${isLeft ? 'justify-start' : 'justify-end'}`}>
      <div className={`w-full md:w-5/12 ${!isLeft && 'order-1'}`}>
        <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
          <div className="flex justify-between items-center">
            <h3 className="font-display font-bold text-lg">{title}</h3>
            <span className="text-brand-pink font-bold text-lg">{year}</span>
          </div>
          <p className="text-gray-600 mt-3">{description}</p>
        </div>
      </div>
      <div className="hidden md:block w-2/12 flex justify-center">
        <div className="w-4 h-4 bg-brand-pink rounded-full"></div>
        <div className="w-0.5 h-full bg-brand-pink"></div>
      </div>
    </div>
  );
};

// Team preview item component
const TeamPreviewItem = ({ name, role, imageSrc }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-24 h-24 rounded-full overflow-hidden mb-3">
        <Image
          src={imageSrc}
          alt={name}
          fill
          className="object-cover"
        />
      </div>
      <h4 className="font-medium text-center">{name}</h4>
      <p className="text-sm text-gray-600 text-center">{role}</p>
    </div>
  );
};

export default function AboutPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="py-20 bg-brand-pink bg-opacity-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Why Teddy Kids Exists</h1>
            <p className="text-xl text-gray-700 mb-8">
              We didn't build another daycare. We built what we wish we had as kids.
            </p>
            <div className="relative h-64 md:h-80 w-full rounded-xl overflow-hidden">
              <Image
                src="/images/about/mission-placeholder.jpg"
                alt="Children at Teddy Kids"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-display font-bold mb-8 text-center">Our Mission</h2>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <p className="text-lg mb-6">
                At Teddy Kids, we believe every child deserves an environment where their natural curiosity and joy of learning can flourish. Our mission is to nurture global citizens through bilingual education, play-based learning, and cultural awareness.
              </p>
              <p className="text-lg mb-6">
                We create spaces where children develop confidence in multiple languages, build meaningful relationships, and gain the skills needed to thrive in our interconnected world.
              </p>
              <p className="text-lg">
                Through our unique approach, we empower children to become compassionate, creative, and critical thinkers who will shape a better future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline / History */}
      <section className="py-16 bg-brand-yellow bg-opacity-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-display font-bold mb-12 text-center">Our Journey</h2>
          
          <div className="relative flex flex-col space-y-8">
            <TimelineItem 
              year="2004"
              title="Teddy Kids Opens in Leiden"
              description="Our first location opens with just 15 children and a vision for bilingual care that would change early education in the Netherlands."
              isLeft={true}
            />
            
            <TimelineItem 
              year="2010"
              title="Expansion to 3rd Location"
              description="Growing demand leads to our third location, with our unique approach to bilingual education gaining recognition throughout the region."
              isLeft={false}
            />
            
            <TimelineItem 
              year="2022"
              title="Launch of TISA"
              description="The Teddy International School of Arts (TISA) opens its doors, extending our bilingual approach to primary education."
              isLeft={true}
            />
            
            <TimelineItem 
              year="2023"
              title="TISA Portugal"
              description="Our international vision grows with the opening of our first location outside the Netherlands, bringing our approach to Lisbon."
              isLeft={false}
            />
            
            <TimelineItem 
              year="2024"
              title="20 Years of Teddy Kids"
              description="Celebrating two decades of nurturing global citizens, with over 10,000 children having started their educational journey with us."
              isLeft={true}
            />
          </div>
        </div>
      </section>

      {/* Vision / Manifesto */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-brand-mint bg-opacity-20 p-8 md:p-12 rounded-xl">
            <h2 className="text-3xl font-display font-bold mb-8 text-center">Our Future</h2>
            <div className="prose prose-lg max-w-none">
              <p>
                We envision a world where childhood is protected, curiosity is guided, and every child grows up believing they can lead.
              </p>
              <p>
                In the coming years, we will continue expanding our approach to more communities, bringing bilingual education and our values-based curriculum to children across Europe and beyond.
              </p>
              <p>
                We're committed to:
              </p>
              <ul>
                <li>Preserving the magic of childhood in an increasingly digital world</li>
                <li>Developing innovative approaches to language acquisition</li>
                <li>Building bridges between cultures through education</li>
                <li>Creating sustainable learning environments that inspire wonder</li>
                <li>Empowering educators who share our passion for childhood</li>
              </ul>
              <p>
                Together with families, educators, and communities, we're shaping a future where every child has the opportunity to become their best self.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Preview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-display font-bold mb-6 text-center">The People Behind Teddy Kids</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Our passionate team brings diverse expertise and a shared commitment to childhood education.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto mb-12">
            <TeamPreviewItem 
              name="Artem"
              role="Director"
              imageSrc="/images/team/artem.jpg"
            />
            <TeamPreviewItem 
              name="Tess"
              role="Head of Operations"
              imageSrc="/images/team/tess.jpg"
            />
            <TeamPreviewItem 
              name="Jess"
              role="Education Quality Lead"
              imageSrc="/images/team/jess.jpg"
            />
            <TeamPreviewItem 
              name="Meral"
              role="People & Culture"
              imageSrc="/images/team/meral.jpg"
            />
          </div>
          
          <div className="text-center">
            <Button 
              variant="secondary"
              href="/team"
              size="lg"
            >
              Meet Our Full Team
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
