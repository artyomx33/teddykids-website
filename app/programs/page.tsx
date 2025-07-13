import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/Button';

export const metadata: Metadata = {
  title: 'Our Programs | Teddy Kids',
  description: 'From diapers to diplomas, our programs are designed for joy, growth, and global thinking. Discover our nursery, preschool, after school, and TISA programs.',
  keywords: 'teddy kids programs, nursery, preschool, after school, TISA, international school, bilingual education, leiden',
  openGraph: {
    title: 'Our Programs | Teddy Kids',
    description: 'From diapers to diplomas, our programs are designed for joy, growth, and global thinking. Discover our nursery, preschool, after school, and TISA programs.',
    url: 'https://www.teddykids.nl/programs',
    siteName: 'Teddy Kids',
    images: [
      {
        url: '/images/og-image-programs.jpg',
        width: 1200,
        height: 630,
        alt: 'Teddy Kids Programs - Nursery, Preschool, After School, and TISA',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

// Program gallery image component
const ProgramGalleryImage = ({ src, alt }) => {
  return (
    <div className="relative aspect-video rounded-lg overflow-hidden">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition-transform duration-300 hover:scale-105"
      />
    </div>
  );
};

// Program quote component
const ProgramQuote = ({ quote, author }) => {
  return (
    <blockquote className="bg-brand-yellow bg-opacity-20 p-4 rounded-lg italic text-gray-700 my-4">
      "{quote}"
      <footer className="text-right text-sm text-gray-600 mt-2">— {author}</footer>
    </blockquote>
  );
};

// Program schedule component
const ProgramSchedule = ({ title, items }) => {
  return (
    <div className="mb-6">
      <h4 className="font-medium text-lg mb-2">{title}</h4>
      <ul className="bg-white rounded-lg shadow-sm p-4 space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex justify-between">
            <span className="text-gray-700">{item.day}</span>
            <span className="text-gray-900 font-medium">{item.hours}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default function ProgramsPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="py-20 bg-brand-purple bg-opacity-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Our Programs</h1>
            <p className="text-xl text-gray-700 mb-8">
              From diapers to diplomas, our programs are designed for joy, growth, and global thinking.
            </p>
          </div>
        </div>
      </section>

      {/* Nursery Program */}
      <section id="nursery" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Left column - Program info */}
              <div className="md:w-1/2">
                <div className="bg-white p-6 rounded-xl shadow-sm h-full">
                  <div className="flex items-center mb-4">
                    <span className="text-4xl mr-3">🍼</span>
                    <h2 className="text-3xl font-display font-bold">Nursery</h2>
                  </div>
                  <p className="text-lg italic text-gray-700 mb-6">"Safe, soft beginnings"</p>
                  
                  <div className="mb-6">
                    <h3 className="text-xl font-medium mb-3">Ages</h3>
                    <p className="bg-brand-pink bg-opacity-20 p-3 rounded-lg">
                      3 months - 2.5 years
                    </p>
                  </div>
                  
                  <ProgramSchedule 
                    title="Weekly Schedule"
                    items={[
                      { day: "Monday - Friday", hours: "7:30 - 18:30" },
                      { day: "Half days available", hours: "7:30 - 13:00 or 13:00 - 18:30" },
                      { day: "Minimum days", hours: "2 days per week" }
                    ]}
                  />
                  
                  <ProgramQuote 
                    quote="Our daughter has been thriving at the nursery. The bilingual approach is amazing - she's already using words in both languages!"
                    author="Emma & James, Parents"
                  />
                  
                  <Button 
                    variant="primary"
                    href="/programs/nursery"
                    fullWidth
                    className="mt-6"
                  >
                    Learn More About Nursery
                  </Button>
                </div>
              </div>
              
              {/* Right column - Gallery */}
              <div className="md:w-1/2">
                <div className="grid grid-cols-2 gap-4">
                  <ProgramGalleryImage 
                    src="/images/programs/nursery-1.jpg" 
                    alt="Nursery playtime"
                  />
                  <ProgramGalleryImage 
                    src="/images/programs/nursery-2.jpg" 
                    alt="Nursery reading time"
                  />
                  <ProgramGalleryImage 
                    src="/images/programs/nursery-3.jpg" 
                    alt="Nursery nap time"
                  />
                  <ProgramGalleryImage 
                    src="/images/programs/nursery-4.jpg" 
                    alt="Nursery outdoor play"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Preschool Program */}
      <section id="preschool" className="py-16 bg-brand-pink bg-opacity-10">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Left column - Gallery (reversed order) */}
              <div className="md:w-1/2 order-2 md:order-1">
                <div className="grid grid-cols-2 gap-4">
                  <ProgramGalleryImage 
                    src="/images/programs/preschool-1.jpg" 
                    alt="Preschool art activities"
                  />
                  <ProgramGalleryImage 
                    src="/images/programs/preschool-2.jpg" 
                    alt="Preschool circle time"
                  />
                  <ProgramGalleryImage 
                    src="/images/programs/preschool-3.jpg" 
                    alt="Preschool outdoor exploration"
                  />
                  <ProgramGalleryImage 
                    src="/images/programs/preschool-4.jpg" 
                    alt="Preschool music class"
                  />
                </div>
              </div>
              
              {/* Right column - Program info */}
              <div className="md:w-1/2 order-1 md:order-2">
                <div className="bg-white p-6 rounded-xl shadow-sm h-full">
                  <div className="flex items-center mb-4">
                    <span className="text-4xl mr-3">🎨</span>
                    <h2 className="text-3xl font-display font-bold">Preschool</h2>
                  </div>
                  <p className="text-lg italic text-gray-700 mb-6">"Where play meets purpose"</p>
                  
                  <div className="mb-6">
                    <h3 className="text-xl font-medium mb-3">Ages</h3>
                    <p className="bg-brand-pink bg-opacity-20 p-3 rounded-lg">
                      2.5 - 4 years
                    </p>
                  </div>
                  
                  <ProgramSchedule 
                    title="Weekly Schedule"
                    items={[
                      { day: "Monday - Friday", hours: "7:30 - 18:30" },
                      { day: "Half days available", hours: "7:30 - 13:00 or 13:00 - 18:30" },
                      { day: "Minimum days", hours: "2 days per week" }
                    ]}
                  />
                  
                  <ProgramQuote 
                    quote="The preschool program has given our son such confidence. He's speaking both Dutch and English, and his social skills have blossomed."
                    author="Sophia K., Mother"
                  />
                  
                  <Button 
                    variant="primary"
                    href="/programs/preschool"
                    fullWidth
                    className="mt-6"
                  >
                    Learn More About Preschool
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* After School Program */}
      <section id="after-school" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Left column - Program info */}
              <div className="md:w-1/2">
                <div className="bg-white p-6 rounded-xl shadow-sm h-full">
                  <div className="flex items-center mb-4">
                    <span className="text-4xl mr-3">🧩</span>
                    <h2 className="text-3xl font-display font-bold">After School</h2>
                  </div>
                  <p className="text-lg italic text-gray-700 mb-6">"Exploration after hours"</p>
                  
                  <div className="mb-6">
                    <h3 className="text-xl font-medium mb-3">Ages</h3>
                    <p className="bg-brand-pink bg-opacity-20 p-3 rounded-lg">
                      4 - 12 years
                    </p>
                  </div>
                  
                  <ProgramSchedule 
                    title="Weekly Schedule"
                    items={[
                      { day: "Monday - Friday", hours: "After school - 18:30" },
                      { day: "School holidays", hours: "7:30 - 18:30 (full day)" },
                      { day: "Study days", hours: "7:30 - 18:30 (full day)" }
                    ]}
                  />
                  
                  <ProgramQuote 
                    quote="The after school program has been a lifesaver for our family. Our children get to continue their bilingual journey while having fun with friends."
                    author="Thomas & Julie, Parents of twins"
                  />
                  
                  <Button 
                    variant="primary"
                    href="/programs/after-school"
                    fullWidth
                    className="mt-6"
                  >
                    Learn More About After School
                  </Button>
                </div>
              </div>
              
              {/* Right column - Gallery */}
              <div className="md:w-1/2">
                <div className="grid grid-cols-2 gap-4">
                  <ProgramGalleryImage 
                    src="/images/programs/afterschool-1.jpg" 
                    alt="After school activities"
                  />
                  <ProgramGalleryImage 
                    src="/images/programs/afterschool-2.jpg" 
                    alt="After school homework help"
                  />
                  <ProgramGalleryImage 
                    src="/images/programs/afterschool-3.jpg" 
                    alt="After school sports"
                  />
                  <ProgramGalleryImage 
                    src="/images/programs/afterschool-4.jpg" 
                    alt="After school creative projects"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* TISA Program */}
      <section id="tisa" className="py-16 bg-brand-mint bg-opacity-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Left column - Gallery (reversed order) */}
              <div className="md:w-1/2 order-2 md:order-1">
                <div className="grid grid-cols-2 gap-4">
                  <ProgramGalleryImage 
                    src="/images/programs/tisa-1.jpg" 
                    alt="TISA classroom"
                  />
                  <ProgramGalleryImage 
                    src="/images/programs/tisa-2.jpg" 
                    alt="TISA project-based learning"
                  />
                  <ProgramGalleryImage 
                    src="/images/programs/tisa-3.jpg" 
                    alt="TISA international activities"
                  />
                  <ProgramGalleryImage 
                    src="/images/programs/tisa-4.jpg" 
                    alt="TISA outdoor learning"
                  />
                </div>
              </div>
              
              {/* Right column - Program info */}
              <div className="md:w-1/2 order-1 md:order-2">
                <div className="bg-white p-6 rounded-xl shadow-sm h-full">
                  <div className="flex items-center mb-4">
                    <span className="text-4xl mr-3">🌱</span>
                    <h2 className="text-3xl font-display font-bold">TISA</h2>
                  </div>
                  <p className="text-lg italic text-gray-700 mb-6">"Bilingual International School"</p>
                  
                  <div className="mb-6">
                    <h3 className="text-xl font-medium mb-3">Ages</h3>
                    <p className="bg-brand-pink bg-opacity-20 p-3 rounded-lg">
                      4 - 12 years (Primary education)
                    </p>
                  </div>
                  
                  <ProgramSchedule 
                    title="Weekly Schedule"
                    items={[
                      { day: "Monday - Friday", hours: "8:30 - 15:00" },
                      { day: "After school care", hours: "15:00 - 18:30 (optional)" },
                      { day: "Early drop-off", hours: "From 7:30 (optional)" }
                    ]}
                  />
                  
                  <ProgramQuote 
                    quote="TISA has been transformational for our children. The international curriculum and caring teachers make this place special."
                    author="Miguel & Ling, TISA Parents"
                  />
                  
                  <Button 
                    variant="primary"
                    href="/programs/tisa"
                    fullWidth
                    className="mt-6"
                  >
                    Learn More About TISA
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-brand-purple bg-opacity-10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-display font-bold mb-6">Ready to Join the Teddy Kids Family?</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Schedule a tour to see our programs in action and discover the perfect fit for your child.
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
              href="/apply"
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
