'use client';

import React from 'react';
import Link from 'next/link';
import { useTranslation } from '@/lib/translations';
import { useLanguage } from '@/lib/LanguageContext';
import Image from 'next/image';

interface ProgramCardProps {
  icon: React.ReactNode;
  title: string;
  tagline: string;
  href: string;
  imageSrc: string;
  className?: string;
}

const ProgramCard: React.FC<ProgramCardProps> = ({ 
  icon, 
  title, 
  tagline, 
  href,
  imageSrc,
  className = ''
}) => {
  return (
    <Link 
      href={href} 
      className={`block h-full ${className}`}
    >
      <div className="relative h-64 sm:h-72 rounded-2xl shadow-md hover:shadow-lg transition-transform duration-300 transform hover:-translate-y-1 overflow-hidden">
        {/* Background image */}
        <Image
          src={imageSrc}
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw, 50vw"
          className="object-cover"
          priority
        />
        {/* White/cream overlay for readability */}
        <div className="absolute inset-0 bg-white/60" />

        {/* Content overlay */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full p-6 text-center">
          <div className="text-4xl mb-4 drop-shadow-sm">{icon}</div>
          <h3 className="text-xl font-display font-semibold mb-2 text-gray-800 drop-shadow-sm">
            {title}
          </h3>
          <p className="text-gray-700 italic drop-shadow-sm px-2">
            &quot;{tagline}&quot;
          </p>
        </div>
      </div>
    </Link>
  );
};

interface ProgramsProps {
  className?: string;
}

const Programs: React.FC<ProgramsProps> = ({ className = '' }) => {
  const { language } = useLanguage();
  const { t } = useTranslation(language);
  
  const programs = [
    {
      icon: '🍼',
      title: t('programs.nursery.title'),
      tagline: t('programs.nursery.tagline'),
      href: '/programs/nursery',
      imageSrc: '/images/programs/nursery.jpg',
    },
    {
      icon: '🎨',
      title: t('programs.preschool.title'),
      tagline: t('programs.preschool.tagline'),
      href: '/programs/preschool',
      imageSrc: '/images/programs/preschool.jpg',
    },
    {
      icon: '🧩',
      title: t('programs.afterSchool.title'),
      tagline: t('programs.afterSchool.tagline'),
      href: '/programs/after-school',
      imageSrc: '/images/programs/afterschool.jpg',
    },
    {
      icon: '🌱',
      title: t('programs.tisa.title'),
      tagline: t('programs.tisa.tagline'),
      href: '/programs/tisa',
      imageSrc: '/images/programs/tisa.jpg',
    },
  ];

  return (
    <section className={`py-16 ${className}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-4">
          {t('programs.title')}
        </h2>
        
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          {t('programs.subtitle')}
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {programs.map((program, index) => (
            <ProgramCard
              key={index}
              icon={program.icon}
              title={program.title}
              tagline={program.tagline}
              href={program.href}
              imageSrc={program.imageSrc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
