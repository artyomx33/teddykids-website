'use client';

import Image from 'next/image';
import Team from '@/components/sections/Team';
import Button from '@/components/Button';
import { useLanguage } from '@/lib/LanguageContext';
import { useTranslation } from '@/lib/translations';

// Metadata is handled in a separate layout file since this is now a client component

export default function TeamPage() {
  const { language } = useLanguage();
  const { t } = useTranslation(language);
  
  return (
    <main>
      {/* Hero Section */}
      <section className="py-20 bg-brand-purple bg-opacity-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              {t('teamPage.hero.title')}
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              {t('teamPage.hero.subtitle')}
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
                {t('teamPage.philosophy.title')}
              </h2>
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
                    {t('teamPage.philosophy.paragraph1')}
                  </p>
                  <p className="text-lg mb-4">
                    {t('teamPage.philosophy.paragraph2')}
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
            <h2 className="text-3xl font-display font-bold mb-10 text-center">
              {t('teamPage.locations.title')}
            </h2>
            
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
                    {t('teamPage.locations.rbw')}
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
                    {t('teamPage.locations.rb35')}
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
                    {t('teamPage.locations.lrz')}
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
                    {t('teamPage.locations.zml')}
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
            
            <h3 className="text-xl font-medium mb-6">{t('teamPage.tisa.title')}</h3>
            
            <Button
              variant="primary"
              href="https://www.tisaschool.com"
              isExternal={true}
              size="lg"
            >
              {t('teamPage.tisa.button')}
            </Button>
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
