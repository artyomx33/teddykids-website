'use client';

import Image from 'next/image';
import Button from '@/components/Button';
import { useLanguage } from '@/lib/LanguageContext';
import { useTranslation, translations } from '@/lib/translations';

// Timeline item component
const TimelineItem = (
  {
    year,
    title,
    description,
    isLeft = true,
  }: {
    year: string;
    title: string;
    description: string;
    isLeft?: boolean;
  },
) => {
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
const TeamPreviewItem = (
  {
    name,
    role,
    imageSrc,
  }: {
    name: string;
    role: string;
    imageSrc: string;
  },
) => {
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

export default function AboutPageClient() {
  const { language } = useLanguage();
  const { t } = useTranslation(language);
  // bulletPoints is an array, access directly from the translations object
  const bulletPoints = translations[language].about.future.bulletPoints as string[];
  
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] hero-parallax overflow-hidden">
        {/* Background image */}
        <Image
          src="/images/heroes/about-hero.png"
          alt="Teddy Kids families and children - our story from baby steps to global citizens"
          fill
          priority
          className="object-cover"
        />

        {/* Gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20" />

        {/* Hero content */}
        <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-4">
              {t('about.hero.title')}
            </h1>
            <p className="text-xl md:text-2xl text-white">
              {t('about.hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-display font-bold mb-8 text-center">{t('about.mission.title')}</h2>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <p className="text-lg mb-6">
                {t('about.mission.paragraph1')}
              </p>
              <p className="text-lg mb-6">
                {t('about.mission.paragraph2')}
              </p>
              <p className="text-lg">
                {t('about.mission.paragraph3')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline / History */}
      <section className="py-16 bg-brand-yellow bg-opacity-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-display font-bold mb-12 text-center">{t('about.journey.title')}</h2>
          
          <div className="relative flex flex-col space-y-8">
            <TimelineItem 
              year={t('about.journey.timeline.item2004.year')}
              title={t('about.journey.timeline.item2004.title')}
              description={t('about.journey.timeline.item2004.description')}
              isLeft={true}
            />
            
            <TimelineItem 
              year={t('about.journey.timeline.item2010.year')}
              title={t('about.journey.timeline.item2010.title')}
              description={t('about.journey.timeline.item2010.description')}
              isLeft={false}
            />
            
            <TimelineItem 
              year={t('about.journey.timeline.item2022.year')}
              title={t('about.journey.timeline.item2022.title')}
              description={t('about.journey.timeline.item2022.description')}
              isLeft={true}
            />
            
            <TimelineItem 
              year={t('about.journey.timeline.item2023.year')}
              title={t('about.journey.timeline.item2023.title')}
              description={t('about.journey.timeline.item2023.description')}
              isLeft={false}
            />
            
            <TimelineItem 
              year={t('about.journey.timeline.item2024.year')}
              title={t('about.journey.timeline.item2024.title')}
              description={t('about.journey.timeline.item2024.description')}
              isLeft={true}
            />
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/*  Legacy & Vision (Luna Brutal Upgrade™)                          */}
      {/* ---------------------------------------------------------------- */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          {/* Legacy Header */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-4">
              Two decades of honoring childhood as a sacred chapter
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              In a world rushing to speed kids up, we chose to slow time down. Teddy Kids was never
              just a daycare. It was a declaration: that childhood is sacred, care can be intelligent,
              and wonder belongs in every day.
            </p>
          </div>

          {/* Legacy Timeline */}
          <div className="max-w-4xl mx-auto mb-20 space-y-8">
            {[
              {
                year: '2004–2008',
                text: 'Three groups. One mission. To build a place where children are seen, heard, and held. No tech, no shortcuts—just presence.',
                color: 'brand-pink',
              },
              {
                year: '2010',
                text: 'ZML opens—our cozy sanctuary where the youngest explorers discover their voices in two languages.',
                color: 'brand-yellow',
              },
              {
                year: '2014',
                text: 'RBW blooms into our international hub. The elephant in the garden becomes our symbol—gentle giants nurturing little ones.',
                color: 'brand-mint',
              },
              {
                year: '2018',
                text: 'Teddy Café opens—where parents connect over coffee while children create magic next door.',
                color: 'brand-purple',
              },
              {
                year: '2020',
                text: 'RB3 launches during a pandemic—proving that community and care can&apos;t be quarantined.',
                color: 'brand-pink',
              },
              {
                year: '2022',
                text: 'TISA is born—our bilingual international school where primary education meets Teddy heart.',
                color: 'brand-yellow',
              },
              {
                year: '2023',
                text: 'TISA Portugal opens—bringing our sunny approach to international families in Lisbon.',
                color: 'brand-mint',
              },
              {
                year: '2024',
                text: 'RB5 expands our family—20 years strong, still growing with purpose.',
                color: 'brand-purple',
              },
              {
                year: '2025',
                text: '10,000 families served—each child a story, each family a testament to what&apos;s possible.',
                color: 'brand-pink',
              },
            ].map(({ year, text, color }) => (
              <div key={year} className={`border-l-4 border-${color} pl-6`}>
                <h3 className={`text-lg font-bold text-${color}`}>{year}</h3>
                <p className="text-gray-700">{text}</p>
              </div>
            ))}
          </div>

          {/* Future Vision */}
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-display font-bold mb-6">
              Our Promise for the Future
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
              We&apos;re not here to scale mediocrity. We&apos;re here to protect what&apos;s
              irreplaceable—because childhood only happens once.
            </p>

            <ul className="space-y-4 max-w-3xl mx-auto text-gray-700 text-lg text-left">
              <li className="flex items-start">
                <span className="text-2xl mr-3">🕯️</span>
                <span>We will protect curiosity like a flame.</span>
              </li>
              <li className="flex items-start">
                <span className="text-2xl mr-3">🪄</span>
                <span>We will preserve magic where screens try to steal it.</span>
              </li>
              <li className="flex items-start">
                <span className="text-2xl mr-3">🌍</span>
                <span>
                  We will teach language not as a subject—but as a passport to the soul.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-2xl mr-3">🏡</span>
                <span>We will build spaces that feel like home but think like schools.</span>
              </li>
              <li className="flex items-start">
                <span className="text-2xl mr-3">🎯</span>
                <span>
                  We will keep our standards impossibly high—because your child is worth it.
                </span>
              </li>
            </ul>

            <p className="text-xl font-semibold mt-10 text-brand-pink">
              You brought a child into this world. We&apos;re here to help them thrive in it.
            </p>
          </div>
        </div>
      </section>

      {/* Vision / Manifesto */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-brand-mint bg-opacity-20 p-8 md:p-12 rounded-xl">
            <h2 className="text-3xl font-display font-bold mb-8 text-center">{t('about.future.title')}</h2>
            <div className="prose prose-lg max-w-none">
              <p>
                {t('about.future.paragraph1')}
              </p>
              <p>
                {t('about.future.paragraph2')}
              </p>
              <p>
                {t('about.future.paragraph3')}
              </p>
              <ul>
                {bulletPoints.map((bullet: string, index: number) => (
                  <li key={index}>{bullet}</li>
                ))}
              </ul>
              <p>
                {t('about.future.paragraph4')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Preview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-display font-bold mb-6 text-center">{t('about.team.title')}</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            {t('about.team.subtitle')}
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto mb-12">
            <TeamPreviewItem 
              name={t('team.members.artem.name')}
              role={t('team.members.artem.role')}
              imageSrc="/images/team/artem.jpg"
            />
            <TeamPreviewItem 
              name={t('team.members.tess.name')}
              role={t('team.members.tess.role')}
              imageSrc="/images/team/tess.jpg"
            />
            <TeamPreviewItem 
              name={t('team.members.jess.name')}
              role={t('team.members.jess.role')}
              imageSrc="/images/team/jess.jpg"
            />
            <TeamPreviewItem 
              name={t('team.members.meral.name')}
              role={t('team.members.meral.role')}
              imageSrc="/images/team/meral.jpg"
            />
          </div>
          
          <div className="text-center">
            <Button 
              variant="secondary"
              href="/team"
              size="lg"
            >
              {t('about.team.buttonText')}
            </Button>
          </div>
        </div>
      </section>

      {/* Policy & Reports Section */}
      <section className="py-16 bg-brand-mint bg-opacity-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-display font-bold mb-6">
              {t('about.policyReports.title')}
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              {t('about.policyReports.description')}
            </p>
            <Button
              variant="primary"
              href="/about/policy"
              size="lg"
            >
              {t('about.policyReports.buttonText')}
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
