'use client';

import { useLanguage } from '@/lib/LanguageContext';
import { useTranslation } from '@/lib/translations';
import Button from '@/components/Button';
import Image from 'next/image';

export default function ProgramsPageClient() {
  const { language } = useLanguage();
  const { t } = useTranslation(language);
  
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] hero-parallax overflow-hidden">
        {/* Background image */}
        <Image
          src="/images/heroes/programs-hero.jpg"
          alt="Children engaged in various programs at Teddy Kids"
          fill
          priority
          className="object-cover"
        />

        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20" />

        {/* Hero content */}
        <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-4">
              {t('programsPage.hero.title')}
            </h1>
            <p className="text-xl md:text-2xl text-white">
              {t('programsPage.hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-display font-bold mb-8 text-center">
              {t('programsPage.overview.title')}
            </h2>

            {/* Program Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Nursery Program */}
              <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-300">
                <div className="relative h-48 w-full">
                  <Image
                    src="/images/programs/nursery-program.jpg"
                    alt="Nursery Program at Teddy Kids"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-brand-pink text-white px-3 py-1 rounded-full text-sm font-medium">
                      {t('programsPage.overview.ageRange')}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display font-bold text-2xl mb-2">
                    {t('programsPage.nursery.title')}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {t('programsPage.nursery.shortDescription')}
                  </p>
                  <Button variant="primary" href="/programs/nursery">
                    {t('programsPage.overview.learnMore')}
                  </Button>
                </div>
              </div>

              {/* Preschool Program */}
              <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-300">
                <div className="relative h-48 w-full">
                  <Image
                    src="/images/programs/preschool-program.jpg"
                    alt="Preschool Program at Teddy Kids"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-brand-yellow text-white px-3 py-1 rounded-full text-sm font-medium">
                      {t('programsPage.overview.ageRange')}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display font-bold text-2xl mb-2">
                    {t('programsPage.preschool.title')}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {t('programsPage.preschool.shortDescription')}
                  </p>
                  <Button variant="primary" href="/programs/preschool">
                    {t('programsPage.overview.learnMore')}
                  </Button>
                </div>
              </div>

              {/* After-School Care */}
              <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-300">
                <div className="relative h-48 w-full">
                  <Image
                    src="/images/programs/after-school-program.jpg"
                    alt="After-School Care at Teddy Kids"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-brand-mint text-white px-3 py-1 rounded-full text-sm font-medium">
                      {t('programsPage.overview.ageRange')}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display font-bold text-2xl mb-2">
                    {t('programsPage.afterSchool.title')}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {t('programsPage.afterSchool.shortDescription')}
                  </p>
                  <Button variant="primary" href="/programs/after-school">
                    {t('programsPage.overview.learnMore')}
                  </Button>
                </div>
              </div>

              {/* TISA Primary */}
              <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-300">
                <div className="relative h-48 w-full">
                  <Image
                    src="/images/programs/tisa-program.jpg"
                    alt="TISA Primary School"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-brand-purple text-white px-3 py-1 rounded-full text-sm font-medium">
                      {t('programsPage.overview.ageRange')}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display font-bold text-2xl mb-2">
                    {t('programsPage.tisa.title')}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {t('programsPage.tisa.shortDescription')}
                  </p>
                  <Button
                    variant="primary"
                    href="https://www.tisaschool.com"
                    isExternal={true}
                  >
                    {t('programsPage.overview.visitWebsite')}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Approach */}
      <section className="py-16 bg-brand-mint bg-opacity-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-display font-bold mb-8 text-center">
              {t('programsPage.curriculum.title')}
            </h2>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-display font-bold mb-4">
                    {t('programsPage.curriculum.approach.title')}
                  </h3>
                  <p className="text-gray-700 mb-4">
                    {t('programsPage.curriculum.approach.description')}
                  </p>
                  <ul className="space-y-2">
                    {[
                      'Play-based learning methodology',
                      'Bilingual language development',
                      'Social-emotional skill building',
                      'STEM exploration through hands-on activities',
                    ].map((point: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <span className="text-brand-pink mr-2">●</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative h-64 rounded-xl overflow-hidden">
                  <Image
                    src="/images/programs/curriculum-approach.jpg"
                    alt="Teddy Kids curriculum in action"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-100">
                <h3 className="text-2xl font-display font-bold mb-4">
                  {t('programsPage.curriculum.bilingual.title')}
                </h3>
                <p className="text-gray-700 mb-4">
                  {t('programsPage.curriculum.bilingual.description')}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="bg-brand-yellow bg-opacity-10 p-4 rounded-lg">
                    <h4 className="font-bold mb-2">
                      {t('programsPage.curriculum.bilingual.immersion.title')}
                    </h4>
                    <p className="text-sm">
                      {t('programsPage.curriculum.bilingual.immersion.description')}
                    </p>
                  </div>
                  <div className="bg-brand-pink bg-opacity-10 p-4 rounded-lg">
                    <h4 className="font-bold mb-2">
                      {t('programsPage.curriculum.bilingual.consistency.title')}
                    </h4>
                    <p className="text-sm">
                      {t('programsPage.curriculum.bilingual.consistency.description')}
                    </p>
                  </div>
                  <div className="bg-brand-mint bg-opacity-10 p-4 rounded-lg">
                    <h4 className="font-bold mb-2">
                      {t('programsPage.curriculum.bilingual.cultural.title')}
                    </h4>
                    <p className="text-sm">
                      {t('programsPage.curriculum.bilingual.cultural.description')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule & Fees */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-display font-bold mb-8 text-center">
              {t('programsPage.schedule.title')}
            </h2>

            <div className="bg-white p-8 rounded-xl shadow-sm mb-8">
              <h3 className="text-2xl font-display font-bold mb-4">
                {t('programsPage.schedule.hours.title')}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold mb-2">
                    {t('programsPage.schedule.hours.nursery.title')}
                  </h4>
                  <ul className="space-y-2">
                    {t('programsPage.sections.nursery.scheduleItems').map(
                      (item: { day: string; hours: string }, index: number) => (
                        <li key={index} className="flex items-start">
                          <span className="text-brand-pink mr-2">●</span>
                          <span>
                            {item.day}: {item.hours}
                          </span>
                        </li>
                      )
                    )}
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-2">
                    {t('programsPage.schedule.hours.afterSchool.title')}
                  </h4>
                  <ul className="space-y-2">
                    {t('programsPage.sections.afterSchool.scheduleItems').map(
                      (item: { day: string; hours: string }, index: number) => (
                        <li key={index} className="flex items-start">
                          <span className="text-brand-pink mr-2">●</span>
                          <span>
                            {item.day}: {item.hours}
                          </span>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-display font-bold mb-4">
                {t('programsPage.schedule.fees.title')}
              </h3>
              <p className="text-gray-700 mb-4">
                {t('programsPage.schedule.fees.description')}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="border border-gray-200 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">
                    {t('programsPage.schedule.fees.nursery.title')}
                  </h4>
                  <p className="text-brand-pink font-bold text-xl mb-2">
                    {t('programsPage.schedule.fees.nursery.price')}
                  </p>
                  <p className="text-sm text-gray-600">
                    {t('programsPage.schedule.fees.nursery.details')}
                  </p>
                </div>
                <div className="border border-gray-200 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">
                    {t('programsPage.schedule.fees.preschool.title')}
                  </h4>
                  <p className="text-brand-pink font-bold text-xl mb-2">
                    {t('programsPage.schedule.fees.preschool.price')}
                  </p>
                  <p className="text-sm text-gray-600">
                    {t('programsPage.schedule.fees.preschool.details')}
                  </p>
                </div>
                <div className="border border-gray-200 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">
                    {t('programsPage.schedule.fees.afterSchool.title')}
                  </h4>
                  <p className="text-brand-pink font-bold text-xl mb-2">
                    {t('programsPage.schedule.fees.afterSchool.price')}
                  </p>
                  <p className="text-sm text-gray-600">
                    {t('programsPage.schedule.fees.afterSchool.details')}
                  </p>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-100 text-center">
                <p className="text-gray-700 mb-4">
                  {t('programsPage.schedule.fees.subsidies.description')}
                </p>
                <Button
                  variant="text"
                  href="/contact?subject=Fee%20Information"
                  className="text-brand-pink hover:underline"
                >
                  {t('programsPage.schedule.fees.subsidies.button')}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-brand-yellow bg-opacity-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-display font-bold mb-6">
            {t('programsPage.cta.title')}
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            {t('programsPage.cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" href="/contact" size="lg">
              {t('programsPage.cta.bookTour')}
            </Button>
            <Button variant="outline" href="/apply" size="lg">
              {t('programsPage.cta.applyNow')}
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
