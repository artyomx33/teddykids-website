'use client';

import React from 'react';
import Link from 'next/link';
import { useTranslation } from '@/lib/translations';

interface ProgramCardProps {
  icon: React.ReactNode;
  title: string;
  tagline: string;
  href: string;
  className?: string;
}

const ProgramCard: React.FC<ProgramCardProps> = ({ 
  icon, 
  title, 
  tagline, 
  href,
  className = ''
}) => {
  return (
    <Link 
      href={href} 
      className={`block h-full ${className}`}
    >
      <div className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 h-full transform hover:-translate-y-1 border border-transparent hover:border-brand-pink">
        <div className="text-4xl mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-display font-semibold mb-2 text-center">
          {title}
        </h3>
        <p className="text-gray-600 text-center italic">
          "{tagline}"
        </p>
      </div>
    </Link>
  );
};

interface ProgramsProps {
  className?: string;
}

const Programs: React.FC<ProgramsProps> = ({ className = '' }) => {
  const { t } = useTranslation('en');
  
  const programs = [
    {
      icon: '🍼',
      title: t('programs.nursery.title'),
      tagline: t('programs.nursery.tagline'),
      href: '/programs/nursery',
    },
    {
      icon: '🎨',
      title: t('programs.preschool.title'),
      tagline: t('programs.preschool.tagline'),
      href: '/programs/preschool',
    },
    {
      icon: '🧩',
      title: t('programs.afterSchool.title'),
      tagline: t('programs.afterSchool.tagline'),
      href: '/programs/after-school',
    },
    {
      icon: '🌱',
      title: t('programs.tisa.title'),
      tagline: t('programs.tisa.tagline'),
      href: '/programs/tisa',
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
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
