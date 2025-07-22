'use client';

import Image from 'next/image';
import { Hero as StandardHero } from '@/components/ui/StandardHero';
import Button from '@/components/Button';
import { useLanguage } from '@/lib/LanguageContext';
import { useTranslation } from '@/lib/translations';

// ──────────────────────────────────────────────────────────
// 2024-07-19: Audio + Timeline working perfectly – Force fresh deployment
//  Luna-style alternating timeline data (images will be added
//  later under /public/timeline/)
// ──────────────────────────────────────────────────────────
const timeline = [
  {
    year: '2004–2008',
    img: '/timeline/2004.jpg',
    alt: 'Three groups, one mission',
    text:
      'Three groups. One mission. To build a place where children are seen, heard, and held. No tech, no shortcuts—just presence.',
  },
  {
    year: '2010',
    img: '/timeline/2010.jpg',
    alt: 'Opening of ZML',
    text:
      'We opened our second location with a focus on ZML. Not because it was easy. Because it mattered.',
  },
  {
    year: '2014',
    img: '/timeline/2014.jpg',
    alt: 'RBW elephant moment',
    text:
      "RBW opened with an elephant. Literally. Because magic is real when you're four. (And yes, the city said never again.)",
    link: 'https://sleutelstad.nl/2014/05/19/olifant-bij-opening-teddy-kids-niet-voor-herhaling-vatbaar/',
  },
  {
    year: '2015',
    img: '/timeline/2015.jpg',
    alt: '10-year milestone & Teddy Perfume launch',
    text:
      '10 years of Teddy Kids! We marked the milestone with our first fragrance, TEDDY PERFUME — Maelyn. "Blush With Every Breath" became a joyful tribute to our journey, inspired by the laughter and love of every child in our care.',
  },
  {
    year: '2016',
    img: '/timeline/2016.jpg',
    alt: 'Maelyn perfume line becomes signature',
    text:
      'The Maelyn perfume line blossomed into a signature offering — a gentle reminder that childhood memories linger in every sense.',
  },
  {
    year: '2018',
    img: '/timeline/2018.jpg',
    alt: 'Teddy Café dream',
    text:
      'We dreamed of a café for kids. Permits granted, vision alive… Then came COVID. Even paused dreams leave footprints.',
    link: 'https://indebuurt.nl/leiden/nieuws/nieuw-in/nieuwe-spot-voor-ouders-teddy-kids-heeft-nu-ook-een-cafe~92330/',
  },
  {
    year: '2020',
    img: '/timeline/2020.jpg',
    alt: 'RB3 in a pandemic',
    text:
      "RB3 opened in the middle of a pandemic. Because childhood doesn't pause for the world — and neither do we.",
  },
  {
    year: '2022',
    img: '/timeline/2022.jpg',
    alt: 'TISA school launched',
    text:
      'TISA was born. Teddy grew up—and we gave him a school worthy of his values. Not just education. Elevation.',
  },
  {
    year: '2023',
    img: '/timeline/2023.jpg',
    alt: 'TISA Portugal opens',
    text:
      'TISA Portugal opened. One passport stamp closer to raising truly global humans.',
  },
  {
    year: '2024',
    img: '/timeline/2024.jpg',
    alt: 'RB5 opens, 20 year anniversary',
    text:
      "20 years. RB5 launched. And one truth echoes louder than ever: You can't outsource childhood. You have to build it.",
  },
  {
    year: '2025',
    img: '/timeline/2025.jpg',
    alt: '10,000 families served',
    text:
      '10,000 children. 10,000 families. 10,000 moments where the world paused — and chose connection instead.',
  },
];

// ──────────────────────────────────────────────────────────
//  Mapping brand colours → Tailwind utility classes
// ──────────────────────────────────────────────────────────
const colorClassMap: Record<string, { border: string; text: string }> = {
  'brand-pink': {
    border: 'border-brand-pink',
    text: 'text-brand-pink',
  },
  'brand-yellow': {
    border: 'border-brand-yellow',
    text: 'text-brand-yellow',
  },
  'brand-mint': {
    border: 'border-brand-mint',
    text: 'text-brand-mint',
  },
  'brand-purple': {
    border: 'border-brand-purple',
    text: 'text-brand-purple',
  },
};

// (TimelineItem component removed – not used)
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
          /* Center image vertically a bit lower so faces stay visible */
          className="object-cover object-center object-[center_20%]"
          style={{ objectPosition: 'center 25%' }}
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


  return (
    <main>
      {/* Hero Section – standardized component */}
      <StandardHero
        title={t('about.hero.title')}
        subtitle={t('about.hero.subtitle')}
        imageSrc="/images/heroes/about-hero.png"
      />

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
      {/* (Removed duplicate "Our Journey" timeline to prevent redundancy) */}

      {/* ---------------------------------------------------------------- */}
      {/*  Legacy & Vision (Luna Brutal Upgrade™)                          */}
      {/* ---------------------------------------------------------------- */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          {/* Audio Fragment - Two Languages */}
          <div className="max-w-2xl mx-auto text-center mb-12">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-medium mb-3 text-gray-700">
                Listen: Our Philosophy in Two Languages
              </h3>
              {/* Button-triggered audio playback for broader compatibility */}
              <div className="text-center">
                <button
                  onClick={() => {
                    const audio = new Audio('/audio/two-languages.mp3');
                    audio.play().catch((error) => {
                      console.error('Audio play failed:', error);
                      alert(
                        'Sorry, audio playback failed. Please check if the file exists or your browser settings.',
                      );
                    });
                  }}
                  className="bg-brand-pink hover:bg-pink-600 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 flex items-center mx-auto"
                >
                  <span className="mr-2">🎵</span>
                  Play Audio Message
                </button>
                <p className="text-sm text-gray-500 mt-2">
                  Click to hear our philosophy in two languages
                </p>
              </div>
            </div>
          </div>

          {/* Legacy Header */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-4">
              {t('about.legacy.title')}
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              {t('about.legacy.subtitle')}
            </p>
          </div>

          {/* Legacy Timeline */}
          <div className="max-w-4xl mx-auto mb-20 space-y-8">
            {Array.isArray(t('about.legacy.timeline')) ? t('about.legacy.timeline').map((item: { year: string; text: string; color: string }) => (
              <div
                key={item.year}
                className={`border-l-4 pl-6 ${
                  colorClassMap[item.color]?.border ?? 'border-brand-pink'
                }`}
              >
                <h3
                  className={`text-lg font-bold ${
                    colorClassMap[item.color]?.text ?? 'text-brand-pink'
                  }`}
                >
                  {item.year}
                </h3>
                <p className="text-gray-700">{item.text}</p>
              </div>
            )) : []}
          </div>


          {/* Future Vision */}
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-display font-bold mb-6">
              {t('about.vision.title')}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
              {t('about.vision.subtitle')}
            </p>

            <ul className="space-y-4 max-w-3xl mx-auto text-gray-700 text-lg text-left">
              {Array.isArray(t('about.vision.promises')) ? t('about.vision.promises').map((promise: { icon: string; text: string }, index: number) => (
                <li key={index} className="flex items-start">
                  <span className="text-2xl mr-3">{promise.icon}</span>
                  <span>{promise.text}</span>
                </li>
              )) : []}
            </ul>

            <p className="text-xl font-semibold mt-10 text-brand-pink">
              {t('about.vision.closing')}
            </p>
          </div>
        </div>
      </section>

      {/* Luna-style Alternating Timeline */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-4xl font-display font-bold text-center mb-12 fade-in">
            Our Story, One Magical Step at a Time
          </h2>

          {timeline.map((item, idx) => (
            <div
              key={item.year}
              className={`flex flex-col ${
                idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } items-center gap-8 mb-16 fade-in`}
            >
              {/* Use next/image for automatic optimization & ESLint compliance */}
              <div className="relative w-full md:w-1/2 h-72 rounded-xl shadow-md overflow-hidden">
                <Image
                  src={item.img}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="md:w-1/2">
                <h3 className="text-xl font-semibold text-brand-pink mb-2">
                  {item.year}
                </h3>
                {item.link ? (
                  <p className="text-gray-700 text-lg">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline decoration-brand-pink/60 hover:text-brand-pink transition-colors"
                    >
                      {item.text}
                    </a>
                  </p>
                ) : (
                  <p className="text-gray-700 text-lg">{item.text}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/*  TISA Call-out                                                   */}
      {/* ---------------------------------------------------------------- */}
      <section className="py-12 bg-brand-pink bg-opacity-5">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto bg-white border border-brand-pink rounded-xl p-8 shadow-sm">
            <h3 className="text-2xl md:text-3xl font-display font-bold mb-4 text-brand-pink">
              Looking for international primary school?
            </h3>
            <a
              href="https://www.tisaschool.nl"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-brand-pink hover:bg-pink-600 text-white font-semibold py-3 px-8 rounded-full transition-colors"
            >
              Visit TISA&nbsp;➝
            </a>
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
