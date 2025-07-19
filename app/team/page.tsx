'use client';

import Image from 'next/image';
import Team from '@/components/sections/Team';
import Button from '@/components/Button';
import { useLanguage } from '@/lib/LanguageContext';
import { useTranslation } from '@/lib/translations';

export default function TeamPage() {
  const { language } = useLanguage();
  const { t } = useTranslation(language);
  
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] hero-parallax overflow-hidden">
        {/* Background image */}
        <Image
          src="/images/heroes/team-hero.png"
          alt="Teddy Kids staff smiling together in the garden"
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 80vw, 1280px"
          className="object-cover object-top"
        />

        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20" />

        {/* Hero content */}
        <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-4">
              Meet Our Team
            </h1>
            <p className="text-xl md:text-2xl text-white">
              Passionate caregivers, bilingual hearts, one big Teddy family.
            </p>
          </div>
        </div>
      </section>
      
      {/* Team Philosophy */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h2 className="text-3xl font-display font-bold mb-6 text-center">
                The People Who Make Magic Happen
              </h2>
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3">
                  <div className="relative h-64 w-full rounded-xl overflow-hidden">
                    <Image
                      src="/images/heroes/programs-hero.jpg"
                      alt="Teddy Kids Team Philosophy"
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <p className="text-lg mb-4">
                    At Teddy Kids, our team is more than qualified — they&apos;re full-hearted,
                    silly-serious, and endlessly curious. From comforting wobbly first steps to
                    decoding deep toddler questions like “Why is the sky shy?”, our educators bring
                    bilingual love and care to every moment.
                  </p>
                  <p className="text-lg mb-4">
                    They come from all over the world — but share one thing: a belief that early
                    childhood isn&apos;t just preparation for life… it <em>is</em> life. That&apos;s why we
                    support our team with ongoing training, hugs, and maybe a surprise pizza now and
                    then.
                  </p>
                  <p className="text-lg font-medium text-brand-pink">
                    We don&apos;t just hire teachers. We grow a family.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Grid Component */}
      {/* Wrap team grid in a relative container so characters can be positioned absolutely */}
      <div className="relative">
        <Team className="bg-brand-yellow bg-opacity-10" />
        {/* TeddyCharacter7 – girl with red scarf (near Antonela/Meral) */}
        <Image
          src="/images/characters/teddy-character-7.png"
          alt=""
          aria-hidden="true"
          width={200}
          height={200}
          className="character character-corner-bottom"
        />
        {/* TeddyCharacter8 – red bandana girl (near Els) */}
        <Image
          src="/images/characters/teddy-character-8.png"
          alt=""
          aria-hidden="true"
          width={200}
          height={200}
          className="character character-side-float"
        />
      </div>
      
      {/* Location-Based Team Photos */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-display font-bold mb-10 text-center">
              {t('teamPage.locations.title')}
            </h2>
            
            {/* RBW Location */}
            <div className="mb-16">
              <h3 className="text-2xl font-display font-semibold mb-6">RBW – Rijnsburgerweg 35 (KDV)</h3>
              <div className="bg-brand-pink bg-opacity-5 rounded-xl overflow-hidden p-4">
                {/* Image Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Team photo */}
                  <div className="relative h-64 w-full">
                    <Image
                      src="/images/team/team-rbw.jpg"
                      alt="RBW Team"
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  {/* Location photo */}
                  <div className="relative h-64 w-full">
                    <Image
                      src="/images/locations/rbw_1.jpg"
                      alt="RBW Location"
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                </div>
                {/* Description */}
                <div className="p-6">
                  <p className="text-lg text-gray-700">
                    {t('teamPage.locations.rbw')}
                  </p>
                </div>
              </div>
            </div>
            
            {/* RB3/RB5 Location */}
            <div className="mb-16">
              <h3 className="text-2xl font-display font-semibold mb-6">RB3/RB5 – Rijnsburgerweg 3 & 5 (KDV + BSO)</h3>
              <div className="bg-brand-yellow bg-opacity-5 rounded-xl overflow-hidden p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Team photo */}
                  <div className="relative h-64 w-full">
                    <Image
                      src="/images/team/team-rb3rb5.jpg"
                      alt="RB3/RB5 Team"
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  {/* Location photo */}
                  <div className="relative h-64 w-full">
                    <Image
                      src="/images/locations/rb3rb5_1.jpg"
                      alt="RB3/RB5 Location"
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-lg text-gray-700">
                    {t('teamPage.locations.rb35')}
                  </p>
                </div>
              </div>
            </div>
            
            {/* LRZ Location */}
            <div className="mb-16">
              <h3 className="text-2xl font-display font-semibold mb-6">LRZ – Lorentzkade 15a (BSO + TISA)</h3>
              <div className="bg-brand-mint bg-opacity-5 rounded-xl overflow-hidden p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Team photo */}
                  <div className="relative h-64 w-full">
                    <Image
                      src="/images/team/team-lrz.jpg"
                      alt="LRZ Team"
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  {/* Location photo */}
                  <div className="relative h-64 w-full">
                    <Image
                      src="/images/locations/lrz_1.jpg"
                      alt="LRZ Location"
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-lg text-gray-700">
                    {t('teamPage.locations.lrz')}
                  </p>
                </div>
              </div>
            </div>
            
            {/* ZML Location */}
            <div className="mb-8">
              <h3 className="text-2xl font-display font-semibold mb-6">ZML – Zeemanlaan 22a (KDV)</h3>
              <div className="bg-brand-purple bg-opacity-5 rounded-xl overflow-hidden p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Team photo */}
                  <div className="relative h-64 w-full">
                    <Image
                      src="/images/team/team-zml.jpg"
                      alt="ZML Team"
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  {/* Location photo */}
                  <div className="relative h-64 w-full">
                    <Image
                      src="/images/locations/zml_1.jpg"
                      alt="ZML Location"
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-lg text-gray-700">
                    {t('teamPage.locations.zml')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* TISA Partnership Section - Full Teddy Glory */}
      <section className="py-20 bg-yellow-50 border-t border-yellow-200">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Logo Row */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-8">
            <div className="relative h-12 w-32">
              <Image
                src="/images/logos/teddy-kids-logo.png"
                alt="Teddy Kids Logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-2xl font-display font-bold text-yellow-600">+</span>
            <div className="relative h-12 w-32">
              <Image
                src="/images/logos/tisa-logo.png"
                alt="TISA Logo"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Text & Image Row */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-yellow-900 mb-4">
                TISA isn&apos;t just international education — it&apos;s international imagination.
              </h2>
              <p className="text-lg text-gray-800 mb-4">
                Together with Teddy Kids, we grow the next generation of confident thinkers and young entrepreneurs.
              </p>
              <p className="text-lg text-gray-800 mb-6">
                At TISA, kids explore SWOT analysis at five, speed math with joy, and star in theater shows that spark big ideas. It&apos;s a bold continuation of the Teddy spirit — powered by curiosity, creativity, and courage.
              </p>

              {/* CTA */}
              <div className="mt-6">
                <Button
                  variant="primary"
                  href="https://www.tisaschool.com"
                  isExternal
                  size="lg"
                  className="bg-yellow-600 hover:bg-yellow-700 text-white"
                >
                  Explore TISA →
                </Button>
              </div>
            </div>

            <div className="relative h-80 w-full rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/images/team/tisa-theater.jpg"
                alt="TISA students performing on stage"
                fill
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-display font-bold mb-8 text-center">
              {t('teamPage.values.title')}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-3xl mb-3">❤️</div>
                <h3 className="text-xl font-medium mb-2">{t('teamPage.values.value1.title')}</h3>
                <p className="text-gray-600">
                  {t('teamPage.values.value1.description')}
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-3xl mb-3">🌍</div>
                <h3 className="text-xl font-medium mb-2">{t('teamPage.values.value2.title')}</h3>
                <p className="text-gray-600">
                  {t('teamPage.values.value2.description')}
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-3xl mb-3">🔍</div>
                <h3 className="text-xl font-medium mb-2">{t('teamPage.values.value3.title')}</h3>
                <p className="text-gray-600">
                  {t('teamPage.values.value3.description')}
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-3xl mb-3">🤝</div>
                <h3 className="text-xl font-medium mb-2">{t('teamPage.values.value4.title')}</h3>
                <p className="text-gray-600">
                  {t('teamPage.values.value4.description')}
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-3xl mb-3">🌱</div>
                <h3 className="text-xl font-medium mb-2">{t('teamPage.values.value5.title')}</h3>
                <p className="text-gray-600">
                  {t('teamPage.values.value5.description')}
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-3xl mb-3">🏆</div>
                <h3 className="text-xl font-medium mb-2">{t('teamPage.values.value6.title')}</h3>
                <p className="text-gray-600">
                  {t('teamPage.values.value6.description')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Join Our Team CTA */}
      <section className="py-16 bg-brand-pink bg-opacity-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-display font-bold mb-6">{t('teamPage.joinTeam.title')}</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            {t('teamPage.joinTeam.description')}
          </p>
          <Button 
            variant="primary"
            href="/careers"
            size="lg"
          >
            {t('teamPage.joinTeam.button')}
          </Button>
        </div>
      </section>
    </main>
  );
}
