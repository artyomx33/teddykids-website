import { Metadata } from 'next';
import Image from 'next/image';
import Team from '@/components/sections/Team';
import Button from '@/components/Button';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Our Team | Teddy Kids',
  description: 'Meet the passionate educators and staff behind Teddy Kids. Our diverse team brings expertise, creativity, and dedication to nurturing global citizens.',
  keywords: 'teddy kids team, childcare staff, bilingual educators, international school teachers, early childhood experts',
  openGraph: {
    title: 'Our Team | Teddy Kids',
    description: 'Meet the passionate educators and staff behind Teddy Kids. Our diverse team brings expertise, creativity, and dedication to nurturing global citizens.',
    url: 'https://www.teddykids.nl/team',
    siteName: 'Teddy Kids',
    images: [
      {
        url: '/images/og-image-team.jpg',
        width: 1200,
        height: 630,
        alt: 'Teddy Kids Team - The Magic Makers',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function TeamPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="py-20 bg-brand-purple bg-opacity-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Meet the Magic Makers</h1>
            <p className="text-xl text-gray-700 mb-8">
              The passionate educators and staff who bring the Teddy Kids vision to life every day.
            </p>
          </div>
        </div>
      </section>
      
      {/* Team Philosophy */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h2 className="text-3xl font-display font-bold mb-6 text-center">Our Team Philosophy</h2>
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3">
                  <div className="relative h-64 w-full rounded-xl overflow-hidden">
                    <Image
                      src="/images/team/team-group.jpg"
                      alt="Teddy Kids Team"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <p className="text-lg mb-4">
                    At Teddy Kids, we believe that our team is our greatest asset. We bring together passionate educators from diverse backgrounds who share a common commitment to childhood development and bilingual education.
                  </p>
                  <p className="text-lg mb-4">
                    Our educators are more than teachers—they're mentors, researchers, and advocates for children. Each team member brings unique expertise and cultural perspectives that enrich our community and broaden children's horizons.
                  </p>
                  <p className="text-lg">
                    We invest in continuous professional development, ensuring our team stays at the forefront of early childhood education. This commitment to excellence translates into innovative, responsive care for every child at Teddy Kids.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Grid Component */}
      <Team className="bg-brand-yellow bg-opacity-10" />
      
      {/* Location-Based Team Photos */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-display font-bold mb-10 text-center">The Heart of Every Location</h2>
            
            {/* RBW Location */}
            <div className="mb-16">
              <h3 className="text-2xl font-display font-semibold mb-6">RBW – Rijnsburgerweg 35 (KDV)</h3>
              <div className="bg-brand-pink bg-opacity-5 rounded-xl overflow-hidden">
                <div className="relative h-64 w-full">
                  <Image
                    src="/images/team/team-rbw.jpg"
                    alt="RBW Team"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <p className="text-lg text-gray-700">
                    From baby giggles to bilingual play, the RBW crew is where Teddy Kids began—and the love still flows strong.
                  </p>
                </div>
              </div>
            </div>
            
            {/* RB3/RB5 Location */}
            <div className="mb-16">
              <h3 className="text-2xl font-display font-semibold mb-6">RB3/RB5 – Rijnsburgerweg 3 & 5 (KDV + BSO)</h3>
              <div className="bg-brand-yellow bg-opacity-5 rounded-xl overflow-hidden">
                <div className="relative h-64 w-full">
                  <Image
                    src="/images/team/team-rb3rb5.jpg"
                    alt="RB3/RB5 Team"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <p className="text-lg text-gray-700">
                    This powerhouse team blends care with curiosity—where toddlers become thinkers, and after-schoolers become adventurers.
                  </p>
                </div>
              </div>
            </div>
            
            {/* LRZ Location */}
            <div className="mb-16">
              <h3 className="text-2xl font-display font-semibold mb-6">LRZ – Lorentzkade 15a (BSO + TISA)</h3>
              <div className="bg-brand-mint bg-opacity-5 rounded-xl overflow-hidden">
                <div className="relative h-64 w-full">
                  <Image
                    src="/images/team/team-lrz.jpg"
                    alt="LRZ Team"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <p className="text-lg text-gray-700">
                    From art corners to bilingual science talks, the Lorentzkade crew nurtures thinkers from afternoon play to global dreams.
                  </p>
                </div>
              </div>
            </div>
            
            {/* ZML Location */}
            <div className="mb-8">
              <h3 className="text-2xl font-display font-semibold mb-6">ZML – Zeemanlaan 22a (KDV)</h3>
              <div className="bg-brand-purple bg-opacity-5 rounded-xl overflow-hidden">
                <div className="relative h-64 w-full">
                  <Image
                    src="/images/team/team-zml.jpg"
                    alt="ZML Team"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <p className="text-lg text-gray-700">
                    Joyful, gentle, and full of laughter—Zeemanlaan's youngest stars get the best start in the most caring hands.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* TISA Section */}
      <section className="py-16 bg-brand-mint bg-opacity-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex flex-col md:flex-row justify-center gap-8 mb-8">
              <div className="relative h-24 w-48">
                <Image
                  src="/images/logos/tisa-logo-placeholder.png"
                  alt="TISA Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative h-24 w-48">
                <Image
                  src="/images/logos/tisa-pt-logo-placeholder.png"
                  alt="TISA Portugal Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            
            <h3 className="text-xl font-medium mb-6">Looking for international schooling?</h3>
            
            <Button
              variant="primary"
              href="https://www.tisaschool.com"
              target="_blank"
              size="lg"
            >
              Visit TISA
            </Button>
          </div>
        </div>
      </section>
      
      {/* Team Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-display font-bold mb-8 text-center">Our Shared Values</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-3xl mb-3">❤️</div>
                <h3 className="text-xl font-medium mb-2">Child-Centered Approach</h3>
                <p className="text-gray-600">
                  We place children at the heart of everything we do, respecting their unique personalities, interests, and developmental journeys.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-3xl mb-3">🌍</div>
                <h3 className="text-xl font-medium mb-2">Global Mindset</h3>
                <p className="text-gray-600">
                  We embrace cultural diversity and foster understanding across languages and traditions to prepare children for our interconnected world.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-3xl mb-3">🔍</div>
                <h3 className="text-xl font-medium mb-2">Continuous Learning</h3>
                <p className="text-gray-600">
                  We're committed to ongoing professional development and innovation in early childhood education practices.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-3xl mb-3">🤝</div>
                <h3 className="text-xl font-medium mb-2">Collaborative Spirit</h3>
                <p className="text-gray-600">
                  We work as a unified team across all locations, sharing knowledge and supporting each other to provide the best care.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-3xl mb-3">🌱</div>
                <h3 className="text-xl font-medium mb-2">Growth Mindset</h3>
                <p className="text-gray-600">
                  We believe in the potential of every child and colleague, nurturing development through encouragement and positive feedback.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-3xl mb-3">🏆</div>
                <h3 className="text-xl font-medium mb-2">Excellence in Care</h3>
                <p className="text-gray-600">
                  We maintain the highest standards in everything from educational practices to safety protocols and facility management.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Join Our Team CTA */}
      <section className="py-16 bg-brand-pink bg-opacity-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-display font-bold mb-6">Join Our Team</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Passionate about early childhood education? Interested in working in a bilingual, international environment? We're always looking for talented educators to join our growing family.
          </p>
          <Button 
            variant="primary"
            href="/careers"
            size="lg"
          >
            View Career Opportunities
          </Button>
        </div>
      </section>
    </main>
  );
}
