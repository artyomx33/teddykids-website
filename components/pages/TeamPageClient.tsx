'use client';

import Image from 'next/image';
import Team from '@/components/sections/Team';
import Button from '@/components/Button';
import { useLanguage } from '@/lib/LanguageContext';
import { useTranslation } from '@/lib/translations';

// Props interfaces for static data
interface HeroContent {
  imageSrc: string;
  imageAlt: string;
  title: string;
  subtitle: string;
}

interface PhilosophyContent {
  title: string;
  imageSrc: string;
  imageAlt: string;
  paragraph1: string;
  paragraph2: string;
  highlightText: string;
}

interface LocationTeam {
  title: string;
  teamImageSrc: string;
  teamImageAlt: string;
  locationImageSrc: string;
  locationImageAlt: string;
  bgColorClass: string;
  translationKey: string;
}

interface TISAPartnership {
  teddyLogoSrc: string;
  tisaLogoSrc: string;
  title: string;
  paragraph1: string;
  paragraph2: string;
  ctaText: string;
  ctaLink: string;
  imageSrc: string;
  imageAlt: string;
}

interface TeamValue {
  emoji: string;
  titleKey: string;
  descriptionKey: string;
}

interface JoinTeamCTA {
  titleKey: string;
  descriptionKey: string;
  buttonTextKey: string;
  buttonHref: string;
}

interface TeamPageClientProps {
  heroContent: HeroContent;
  philosophyContent: PhilosophyContent;
  locationTeams: LocationTeam[];
  tisaPartnership: TISAPartnership;
  teamValues: TeamValue[];
  joinTeamCTA: JoinTeamCTA;
  characterImagePaths: {
    character7: string;
    character8: string;
  };
}

export default function TeamPageClient({
  heroContent,
  philosophyContent,
  locationTeams,
  tisaPartnership,
  teamValues,
  joinTeamCTA,
  characterImagePaths,
}: TeamPageClientProps) {
  const { language } = useLanguage();
  const { t } = useTranslation(language);
  
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] hero-parallax overflow-hidden">
        {/* Background image */}
        <Image
          src={heroContent.imageSrc}
          alt={heroContent.imageAlt}
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
              {heroContent.title}
            </h1>
            <p className="text-xl md:text-2xl text-white">
              {heroContent.subtitle}
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
                {philosophyContent.title}
              </h2>
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3">
                  <div className="relative h-64 w-full rounded-xl overflow-hidden">
                    <Image
                      src={philosophyContent.imageSrc}
                      alt={philosophyContent.imageAlt}
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <p className="text-lg mb-4">
                    {philosophyContent.paragraph1}
                  </p>
                  <p className="text-lg mb-4">
                    {philosophyContent.paragraph2}
                  </p>
                  <p className="text-lg font-medium text-brand-pink">
                    {philosophyContent.highlightText}
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
          src={characterImagePaths.character7}
          alt=""
          aria-hidden="true"
          width={200}
          height={200}
          className="character character-corner-bottom"
        />
        {/* TeddyCharacter8 – red bandana girl (near Els) */}
        <Image
          src={characterImagePaths.character8}
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
            
            {locationTeams.map((location, index) => (
              <div key={index} className="mb-16">
                <h3 className="text-2xl font-display font-semibold mb-6">{location.title}</h3>
                <div className={`${location.bgColorClass} rounded-xl overflow-hidden p-4`}>
                  {/* Image Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Team photo */}
                    <div className="relative h-64 w-full">
                      <Image
                        src={location.teamImageSrc}
                        alt={location.teamImageAlt}
                        fill
                        className="object-cover object-top"
                      />
                    </div>
                    {/* Location photo */}
                    <div className="relative h-64 w-full">
                      <Image
                        src={location.locationImageSrc}
                        alt={location.locationImageAlt}
                        fill
                        className="object-cover object-top"
                      />
                    </div>
                  </div>
                  {/* Description */}
                  <div className="p-6">
                    <p className="text-lg text-gray-700">
                      {t(location.translationKey)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
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
                src={tisaPartnership.teddyLogoSrc}
                alt="Teddy Kids Logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-2xl font-display font-bold text-yellow-600">+</span>
            <div className="relative h-12 w-32">
              <Image
                src={tisaPartnership.tisaLogoSrc}
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
                {tisaPartnership.title}
              </h2>
              <p className="text-lg text-gray-800 mb-4">
                {tisaPartnership.paragraph1}
              </p>
              <p className="text-lg text-gray-800 mb-6">
                {tisaPartnership.paragraph2}
              </p>

              {/* CTA */}
              <div className="mt-6">
                <Button
                  variant="primary"
                  href={tisaPartnership.ctaLink}
                  isExternal
                  size="lg"
                  className="bg-yellow-600 hover:bg-yellow-700 text-white"
                >
                  {tisaPartnership.ctaText}
                </Button>
              </div>
            </div>

            <div className="relative h-80 w-full rounded-xl overflow-hidden shadow-lg">
              <Image
                src={tisaPartnership.imageSrc}
                alt={tisaPartnership.imageAlt}
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
              {teamValues.map((value, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="text-3xl mb-3">{value.emoji}</div>
                  <h3 className="text-xl font-medium mb-2">{t(value.titleKey)}</h3>
                  <p className="text-gray-600">
                    {t(value.descriptionKey)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Join Our Team CTA */}
      <section className="py-16 bg-brand-pink bg-opacity-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-display font-bold mb-6">{t(joinTeamCTA.titleKey)}</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            {t(joinTeamCTA.descriptionKey)}
          </p>
          <Button 
            variant="primary"
            href={joinTeamCTA.buttonHref}
            size="lg"
          >
            {t(joinTeamCTA.buttonTextKey)}
          </Button>
        </div>
      </section>
    </main>
  );
}
