'use client';

import React from 'react';
import { useTranslation } from '@/lib/translations';

interface PillarCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const PillarCard: React.FC<PillarCardProps> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 h-full">
      <div className="text-4xl mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-display font-semibold mb-2 text-center">
        {title}
      </h3>
      <p className="text-gray-600 text-center">
        {description}
      </p>
    </div>
  );
};

interface PillarsProps {
  className?: string;
}

const Pillars: React.FC<PillarsProps> = ({ className = '' }) => {
  const { t } = useTranslation('en');
  
  const pillars = [
    {
      icon: '🧠',
      title: t('pillars.pillar1.title'),
      description: t('pillars.pillar1.description'),
    },
    {
      icon: '🧸',
      title: t('pillars.pillar2.title'),
      description: t('pillars.pillar2.description'),
    },
    {
      icon: '🌍',
      title: t('pillars.pillar3.title'),
      description: t('pillars.pillar3.description'),
    },
    {
      icon: '⏳',
      title: t('pillars.pillar4.title'),
      description: t('pillars.pillar4.description'),
    },
  ];

  return (
    <section className={`py-16 bg-brand-pink bg-opacity-30 ${className}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12">
          {t('pillars.title')}
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {pillars.map((pillar, index) => (
            <PillarCard
              key={index}
              icon={pillar.icon}
              title={pillar.title}
              description={pillar.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pillars;
