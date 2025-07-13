import { Metadata } from 'next';
import Image from 'next/image';
import Locations from '@/components/sections/Locations';
import Button from '@/components/Button';
import { getAllLocations } from '@/lib/locations';

export const metadata: Metadata = {
  title: 'Our Locations | Teddy Kids',
  description: 'Find your nearest Teddy Kids location. Multiple locations throughout Leiden, Oegstgeest, and international campuses offering bilingual childcare and education.',
  keywords: 'teddy kids locations, childcare leiden, preschool oegstgeest, TISA portugal, international school locations, bilingual daycare netherlands',
  openGraph: {
    title: 'Our Locations | Teddy Kids',
    description: 'Find your nearest Teddy Kids location. Multiple locations throughout Leiden, Oegstgeest, and international campuses offering bilingual childcare and education.',
    url: 'https://www.teddykids.nl/locations',
    siteName: 'Teddy Kids',
    images: [
      {
        url: '/images/og-image-locations.jpg',
        width: 1200,
        height: 630,
        alt: 'Teddy Kids Locations - Find your nearest center',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function LocationsPage() {
  const locations = getAllLocations();
  
  return (
    <main>
      {/* Hero Section */}
      <section className="py-20 bg-brand-yellow bg-opacity-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Find Your Nearest Teddy Kids</h1>
            <p className="text-xl text-gray-700 mb-8">
              Across Leiden, our locations offer the same loving care, bilingual approach, and joyful environments—with each team bringing its own energy.
            </p>
            <div className="relative h-64 md:h-80 w-full rounded-xl overflow-hidden">
              <Image
                src="/images/locations/map-hero.jpg"
                alt="Map of Teddy Kids Locations"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                <span className="text-white text-2xl font-display font-bold">
                  {locations.length} Locations Worldwide
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Location Filter */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap items-center justify-center gap-4">
              <span className="text-gray-700 font-medium">Filter by:</span>
              <Button 
                variant="text"
                href="/locations?filter=all"
                className="bg-brand-pink bg-opacity-10 hover:bg-opacity-20"
              >
                All Locations
              </Button>
              <Button 
                variant="text"
                href="/locations?filter=leiden"
                className="hover:bg-brand-pink hover:bg-opacity-10"
              >
                Leiden
              </Button>
              <Button 
                variant="text"
                href="/locations?filter=oegstgeest"
                className="hover:bg-brand-pink hover:bg-opacity-10"
              >
                Oegstgeest
              </Button>
              <Button 
                variant="text"
                href="/locations?filter=international"
                className="hover:bg-brand-pink hover:bg-opacity-10"
              >
                International
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Full Locations Component */}
      <Locations />
      
      {/* TISA Schools Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-display font-bold mb-4">TISA – Our International Schools</h2>
            <p className="text-lg text-gray-700 mb-10">
              Teddy Kids also proudly operates two bilingual international schools under the TISA brand—designed for curious minds ready to take on the world.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* TISA Netherlands */}
              <div className="bg-brand-mint bg-opacity-10 p-8 rounded-xl shadow-sm flex flex-col items-center">
                <div className="h-20 w-40 mb-4 relative">
                  <Image
                    src="/images/logos/tisa-logo-placeholder.png"
                    alt="TISA Netherlands Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="text-gray-700 mb-6">Bilingual international primary school in Leiden.</p>
                <Button
                  variant="primary"
                  href="https://www.tisaschool.com"
                  isExternal={true}
                >
                  Visit TISA Netherlands
                </Button>
              </div>

              {/* TISA Portugal */}
              <div className="bg-brand-yellow bg-opacity-10 p-8 rounded-xl shadow-sm flex flex-col items-center">
                <div className="h-20 w-40 mb-4 relative">
                  <Image
                    src="/images/logos/tisa-pt-logo-placeholder.png"
                    alt="TISA Portugal Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="text-gray-700 mb-6">Our sunny international campus in Lisbon.</p>
                <Button
                  variant="primary"
                  href="https://www.tisaschool.com/portugal"
                  isExternal={true}
                >
                  Visit TISA Portugal
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transportation Information */}
      <section className="py-16 bg-brand-mint bg-opacity-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-display font-bold mb-8 text-center">Getting to Teddy Kids</h2>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-medium mb-4">Public Transportation</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-brand-pink mr-2">●</span>
                      <span>All our Leiden locations are within 10-15 minutes from Leiden Centraal Station by bus</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-pink mr-2">●</span>
                      <span>Bus lines 1, 3, and 4 serve our various locations</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-medium mb-4">Parking & Bicycles</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-brand-pink mr-2">●</span>
                      <span>All locations have dedicated drop-off/pick-up parking spaces</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-pink mr-2">●</span>
                      <span>Covered bicycle parking available at every location</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-pink mr-2">●</span>
                      <span>Stroller storage available inside each building</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-100">
                <h3 className="text-xl font-medium mb-4">Special Transportation Services</h3>
                <p className="text-gray-700 mb-4">
                  For our TISA and After School programs, we offer transportation services between participating schools and our locations. Please inquire for specific routes and availability.
                </p>
                <Button 
                  variant="text"
                  href="/contact?subject=Transportation"
                  className="text-brand-pink hover:underline"
                >
                  Ask about transportation options
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-brand-yellow bg-opacity-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-display font-bold mb-6">Ready to Visit a Location?</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Schedule a tour at your preferred location to see our facilities, meet our team, and experience the Teddy Kids difference firsthand.
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
