'use client';
import Image from 'next/image';
import Button from '@/components/Button';
import { useLanguage } from '@/lib/LanguageContext';
import { useTranslation } from '@/lib/translations';
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

export default function AboutPage() {
  const { language } = useLanguage();
  const { t } = useTranslation(language);
  
  return (
    <main>
      {/* Hero Section */}
      <section className="py-20 bg-brand-pink bg-opacity-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">{t('about.hero.title')}</h1>
            <p className="text-xl text-gray-700 mb-8">
              {t('about.hero.subtitle')}
            </p>
            <div className="relative h-64 md:h-80 w-full rounded-xl overflow-hidden">
              <Image
                src="/images/about/mission-placeholder.jpg"
                alt={t('about.hero.imageAlt')}
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
                {t('about.future.bulletPoints').map((bullet: string, index: number) => (
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
    </main>
  );
}
