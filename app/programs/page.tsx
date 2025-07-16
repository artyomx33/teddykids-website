'use client';

import Image from 'next/image';
import Script from 'next/script';
import Button from '@/components/Button';
import { useLanguage } from '@/lib/LanguageContext';
import { useTranslation } from '@/lib/translations';

// Program gallery image component
interface ProgramGalleryImageProps {
  src: string;
  alt: string;
}

const ProgramGalleryImage = ({ src, alt }: ProgramGalleryImageProps) => {
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
interface ProgramQuoteProps {
  quote: string;
  author: string;
}

const ProgramQuote = ({ quote, author }: ProgramQuoteProps) => {
  return (
    <blockquote className="bg-brand-yellow bg-opacity-20 p-4 rounded-lg italic text-gray-700 my-4">
      &quot;{quote}&quot;
      <footer className="text-right text-sm text-gray-600 mt-2">— {author}</footer>
    </blockquote>
  );
};

// Program schedule component
interface ScheduleItem {
  day: string;
  hours: string;
}

interface ProgramScheduleProps {
  title: string;
  items: ScheduleItem[];
}

const ProgramSchedule = ({ title, items }: ProgramScheduleProps) => {
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
  const { language } = useLanguage();
  const { t } = useTranslation(language);

  return (
    <main>
      {/* Structured Data for Programs */}
      <Script
        id="program-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "item": {
                  "@type": "Course",
                  "name": t('programsPage.sections.nursery.title'),
                  "description": t('programsPage.sections.nursery.blurb'),
                  "provider": {
                    "@type": "ChildCare",
                    "name": "Teddy Kids",
                    "sameAs": "https://www.teddykids.nl"
                  },
                  "educationalLevel": "Infant to Toddler",
                  "timeRequired": "P1D",
                  "url": "https://www.teddykids.nl/programs/nursery",
                  "hasCourseInstance": {
                    "@type": "CourseInstance",
                    "courseMode": "onsite",
                    "offers": {
                      "@type": "Offer",
                      "availability": "https://schema.org/InStock",
                      "availabilityStarts": "2024-01-01",
                      "availabilityEnds": "2025-12-31"
                    }
                  }
                }
              },
              {
                "@type": "ListItem",
                "position": 2,
                "item": {
                  "@type": "Course",
                  "name": t('programsPage.sections.preschool.title'),
                  "description": t('programsPage.sections.preschool.blurb'),
                  "provider": {
                    "@type": "ChildCare",
                    "name": "Teddy Kids",
                    "sameAs": "https://www.teddykids.nl"
                  },
                  "educationalLevel": "Preschool",
                  "timeRequired": "P1D",
                  "url": "https://www.teddykids.nl/programs/preschool",
                  "hasCourseInstance": {
                    "@type": "CourseInstance",
                    "courseMode": "onsite",
                    "offers": {
                      "@type": "Offer",
                      "availability": "https://schema.org/InStock",
                      "availabilityStarts": "2024-01-01",
                      "availabilityEnds": "2025-12-31"
                    }
                  }
                }
              },
              {
                "@type": "ListItem",
                "position": 3,
                "item": {
                  "@type": "Course",
                  "name": t('programsPage.sections.afterSchool.title'),
                  "description": t('programsPage.sections.afterSchool.blurb'),
                  "provider": {
                    "@type": "ChildCare",
                    "name": "Teddy Kids",
                    "sameAs": "https://www.teddykids.nl"
                  },
                  "educationalLevel": "School Age",
                  "timeRequired": "PT5H",
                  "url": "https://www.teddykids.nl/programs/after-school",
                  "hasCourseInstance": {
                    "@type": "CourseInstance",
                    "courseMode": "onsite",
                    "offers": {
                      "@type": "Offer",
                      "availability": "https://schema.org/InStock",
                      "availabilityStarts": "2024-01-01",
                      "availabilityEnds": "2025-12-31"
                    }
                  }
                }
              },
              {
                "@type": "ListItem",
                "position": 4,
                "item": {
                  "@type": "Course",
                  "name": t('programsPage.sections.tisa.title'),
                  "description": t('programsPage.sections.tisa.blurb'),
                  "provider": {
                    "@type": "EducationalOrganization",
                    "name": "TISA - Teddy International School of Arts",
                    "sameAs": "https://www.tisaschool.com"
                  },
                  "educationalLevel": "Primary Education",
                  "timeRequired": "P1D",
                  "url": "https://www.tisaschool.com",
                  "hasCourseInstance": {
                    "@type": "CourseInstance",
                    "courseMode": "onsite",
                    "offers": {
                      "@type": "Offer",
                      "availability": "https://schema.org/InStock",
                      "availabilityStarts": "2024-01-01",
                      "availabilityEnds": "2025-12-31"
                    }
                  }
                }
              }
            ]
          })
        }}
      />

      {/* Hero Section */}
      <section className="py-20 bg-brand-purple bg-opacity-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              {t('programsPage.hero.title')}
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              {t('programsPage.hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Nursery Program */}
      <section id="nursery" className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Left column - Program info */}
              <div className="md:w-1/2">
                <div className="bg-white p-6 rounded-xl shadow-sm h-full">
                  <div className="flex items-center mb-4">
                    <span className="text-4xl mr-3">🍼</span>
                    <h2 className="text-3xl font-display font-bold">{t('programsPage.sections.nursery.title')}</h2>
                  </div>
                  <p className="text-lg italic text-gray-700 mb-6">
                    &quot;{t('programsPage.sections.nursery.blurb')}&quot;
                  </p>
                  
                  <div className="mb-6">
                    <h3 className="text-xl font-medium mb-3">{t('programsPage.sections.nursery.agesLabel')}</h3>
                    <p className="bg-brand-pink bg-opacity-20 p-3 rounded-lg">
                      {t('programsPage.sections.nursery.ages')}
                    </p>
                  </div>
                  
                  <ProgramSchedule 
                    title={t('programsPage.sections.nursery.scheduleTitle')}
                    items={t('programsPage.sections.nursery.scheduleItems') as ScheduleItem[]}
                  />
                  
                  <ProgramQuote 
                    quote={t('programsPage.sections.nursery.quote')}
                    author={t('programsPage.sections.nursery.quoteAuthor')}
                  />
                  
                  <Button
                    variant="primary"
                    href="/programs/nursery"
                    fullWidth
                    className="mt-6"
                  >
                    {t('programsPage.sections.nursery.button')}
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
      {/* TeddyCharacter5 – little girl with handbag, floating near Nursery */}
      <Image
        src="/images/characters/teddy-character-5.png"
        alt=""
        aria-hidden="true"
        width={200}
        height={200}
        className="character character-floating character-delay-2"
      />
      
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
                    <h2 className="text-3xl font-display font-bold">{t('programsPage.sections.preschool.title')}</h2>
                  </div>
                  <p className="text-lg italic text-gray-700 mb-6">
                    &quot;{t('programsPage.sections.preschool.blurb')}&quot;
                  </p>
                  
                  <div className="mb-6">
                    <h3 className="text-xl font-medium mb-3">{t('programsPage.sections.preschool.agesLabel')}</h3>
                    <p className="bg-brand-pink bg-opacity-20 p-3 rounded-lg">
                      {t('programsPage.sections.preschool.ages')}
                    </p>
                  </div>
                  
                  <ProgramSchedule 
                    title={t('programsPage.sections.preschool.scheduleTitle')}
                    items={t('programsPage.sections.preschool.scheduleItems') as ScheduleItem[]}
                  />
                  
                  <ProgramQuote 
                    quote={t('programsPage.sections.preschool.quote')}
                    author={t('programsPage.sections.preschool.quoteAuthor')}
                  />
                  
                  <Button
                    variant="primary"
                    href="/programs/preschool"
                    fullWidth
                    className="mt-6"
                  >
                    {t('programsPage.sections.preschool.button')}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* After School Program */}
      <section id="after-school" className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Left column - Program info */}
              <div className="md:w-1/2">
                <div className="bg-white p-6 rounded-xl shadow-sm h-full">
                  <div className="flex items-center mb-4">
                    <span className="text-4xl mr-3">🧩</span>
                    <h2 className="text-3xl font-display font-bold">{t('programsPage.sections.afterSchool.title')}</h2>
                  </div>
                  <p className="text-lg italic text-gray-700 mb-6">
                    &quot;{t('programsPage.sections.afterSchool.blurb')}&quot;
                  </p>
                  
                  <div className="mb-6">
                    <h3 className="text-xl font-medium mb-3">{t('programsPage.sections.afterSchool.agesLabel')}</h3>
                    <p className="bg-brand-pink bg-opacity-20 p-3 rounded-lg">
                      {t('programsPage.sections.afterSchool.ages')}
                    </p>
                  </div>
                  
                  <ProgramSchedule 
                    title={t('programsPage.sections.afterSchool.scheduleTitle')}
                    items={t('programsPage.sections.afterSchool.scheduleItems') as ScheduleItem[]}
                  />
                  
                  <ProgramQuote 
                    quote={t('programsPage.sections.afterSchool.quote')}
                    author={t('programsPage.sections.afterSchool.quoteAuthor')}
                  />
                  
                  <Button
                    variant="primary"
                    href="/programs/after-school"
                    fullWidth
                    className="mt-6"
                  >
                    {t('programsPage.sections.afterSchool.button')}
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
      {/* TeddyCharacter6 – football boy near After School */}
      <Image
        src="/images/characters/teddy-character-6.png"
        alt=""
        aria-hidden="true"
        width={200}
        height={200}
        className="character character-card-left"
      />
      
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
                    <h2 className="text-3xl font-display font-bold">{t('programsPage.sections.tisa.title')}</h2>
                  </div>
                  <p className="text-lg italic text-gray-700 mb-6">
                    &quot;{t('programsPage.sections.tisa.blurb')}&quot;
                  </p>
                  
                  <div className="mb-6">
                    <h3 className="text-xl font-medium mb-3">{t('programsPage.sections.tisa.agesLabel')}</h3>
                    <p className="bg-brand-pink bg-opacity-20 p-3 rounded-lg">
                      {t('programsPage.sections.tisa.ages')}
                    </p>
                  </div>
                  
                  <ProgramSchedule 
                    title={t('programsPage.sections.tisa.scheduleTitle')}
                    items={t('programsPage.sections.tisa.scheduleItems') as ScheduleItem[]}
                  />
                  
                  <ProgramQuote 
                    quote={t('programsPage.sections.tisa.quote')}
                    author={t('programsPage.sections.tisa.quoteAuthor')}
                  />
                  
                  <Button
                    variant="primary"
                    href="https://www.tisaschool.com"
                    isExternal={true}
                    fullWidth
                    className="mt-6"
                  >
                    {t('programsPage.sections.tisa.button')}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Benefits */}
      <section className="py-16 bg-brand-yellow bg-opacity-10">
        <div className="container mx-auto px-4">
          {/* Section Heading */}
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-display font-bold">
              {language === 'nl' ? 'Programma Voordelen' : 'Program Benefits'}
            </h2>
            <p className="text-lg text-gray-700 mt-4">
              {language === 'nl'
                ? 'Alles wat jouw gezin nodig heeft, inbegrepen.'
                : 'Everything your family needs, built-in.'}
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Flexible Scheduling */}
            <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center text-center hover:shadow-md transition-all duration-300">
              <div className="relative w-20 h-20 mb-4">
                <Image
                  src="/images/website-icon-flexible.png"
                  alt="Flexible Scheduling"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-display font-semibold mb-2">
                {language === 'nl' ? 'Flexibele Roosters' : 'Flexible Scheduling'}
              </h3>
              <p className="text-gray-700">
                {language === 'nl'
                  ? 'Volledige & halve dagen, passend bij jouw schema.'
                  : 'Full & half days that flex to your schedule.'}
              </p>
            </div>

            {/* Trial Days Available */}
            <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center text-center hover:shadow-md transition-all duration-300">
              <div className="relative w-20 h-20 mb-4">
                <Image
                  src="/images/website-icon-1-day.png"
                  alt="Trial Days"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-display font-semibold mb-2">
                {language === 'nl' ? 'Proefdagen Beschikbaar' : 'Trial Days Available'}
              </h3>
              <p className="text-gray-700">
                {language === 'nl'
                  ? 'Ervaar een dag Teddy Kids zonder verplichtingen.'
                  : 'Experience a day at Teddy Kids, no strings attached.'}
              </p>
            </div>

            {/* Healthy Meals Included */}
            <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center text-center hover:shadow-md transition-all duration-300">
              <div className="relative w-20 h-20 mb-4">
                <Image
                  src="/images/website-icon-fruit.png"
                  alt="Healthy Meals Included"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-display font-semibold mb-2">
                {language === 'nl' ? 'Gezonde Maaltijden' : 'Healthy Meals Included'}
              </h3>
              <p className="text-gray-700">
                {language === 'nl'
                  ? 'Dagelijks vers fruit & gezonde snacks.'
                  : 'Daily fresh fruit & healthy snacks.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-display font-bold mb-8 text-center">
              {t('programsPage.comparison.title')}
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full text-left border-collapse">
                <thead>
                  <tr className="bg-brand-pink bg-opacity-10">
                    <th className="p-4 font-medium">{t('programsPage.comparison.feature')}</th>
                    <th className="p-4 font-medium text-center">{t('programsPage.comparison.columns.nursery')}</th>
                    <th className="p-4 font-medium text-center">{t('programsPage.comparison.columns.preschool')}</th>
                    <th className="p-4 font-medium text-center">{t('programsPage.comparison.columns.afterSchool')}</th>
                    <th className="p-4 font-medium text-center">{t('programsPage.comparison.columns.tisa')}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    [t('programsPage.comparison.rows.bilingual'), '✅', '✅', '✅', '✅'],
                    [t('programsPage.comparison.rows.meals'), '✅', '✅', '❌', '✅'],
                    [t('programsPage.comparison.rows.openYear'), '✅', '✅', '✅', '✅'],
                    [t('programsPage.comparison.rows.groupSize'), 'Small', 'Medium', 'Variable', 'Small'],
                    [
                      t('programsPage.comparison.rows.curriculum'), 
                      t('programsPage.comparison.rows.sensoryPlay'), 
                      t('programsPage.comparison.rows.thematicInquiry'), 
                      t('programsPage.comparison.rows.creativeClubs'), 
                      t('programsPage.comparison.rows.international')
                    ],
                  ].map((row, idx) => (
                    <tr key={idx} className="bg-white odd:bg-gray-50">
                      {row.map((cell, i) => (
                        <td
                          key={i}
                          className={`p-4 ${i === 0 ? 'font-medium text-gray-700' : 'text-center'}`}
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-brand-purple bg-opacity-10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-display font-bold mb-6">
            {t('programsPage.cta.title')}
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            {t('programsPage.cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="primary"
              href="/contact"
              size="lg"
            >
              {t('programsPage.cta.bookTour')}
            </Button>
            <Button 
              variant="outline"
              href="/apply"
              size="lg"
            >
              {t('programsPage.cta.applyNow')}
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
