'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Button from '@/components/Button';
import { useLanguage } from '@/lib/LanguageContext';
import { useTranslation } from '@/lib/translations';

// Mock learning moments data - in a real app, this would come from a CMS or API
const learningMoments = [
  {
    id: 1,
    title: 'First Words in Two Languages',
    excerpt: 'How Emma started speaking both Dutch and English at just 18 months',
    category: 'bilingual',
    image: '/images/learning/bilingual-moment-1.jpg',
    type: 'article',
  },
  {
    id: 2,
    title: 'Sharing is Caring',
    excerpt: 'When Lucas learned to share his favorite toys with his new friends',
    category: 'empathy',
    image: '/images/learning/empathy-moment-1.jpg',
    type: 'article',
  },
  {
    id: 3,
    title: 'Building Bridges',
    excerpt: 'How our preschoolers discovered principles of engineering through play',
    category: 'stem',
    image: '/images/learning/stem-moment-1.jpg',
    type: 'video',
  },
  {
    id: 4,
    title: 'The Rainbow Project',
    excerpt: 'Exploring colors, textures, and emotions through art',
    category: 'creativity',
    image: '/images/learning/creativity-moment-1.jpg',
    type: 'article',
  },
  {
    id: 5,
    title: 'Playground Diplomacy',
    excerpt: 'How children naturally resolve conflicts when given the space',
    category: 'empathy',
    image: '/images/learning/empathy-moment-2.jpg',
    type: 'video',
  },
  {
    id: 6,
    title: 'Nature's Classroom',
    excerpt: 'Learning about ecosystems during our forest exploration days',
    category: 'stem',
    image: '/images/learning/stem-moment-2.jpg',
    type: 'article',
  },
  {
    id: 7,
    title: 'Storytelling in Two Languages',
    excerpt: 'Children creating and telling stories in both Dutch and English',
    category: 'bilingual',
    image: '/images/learning/bilingual-moment-2.jpg',
    type: 'article',
  },
  {
    id: 8,
    title: 'Music Without Borders',
    excerpt: 'How rhythm and melody transcend language barriers',
    category: 'creativity',
    image: '/images/learning/creativity-moment-2.jpg',
    type: 'video',
  },
];

// Learning moment card component
const LearningMomentCard = ({ moment, t }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden soft-shadow document-hover">
      <div className="relative h-48 w-full">
        <Image
          src={moment.image}
          alt={moment.title}
          fill
          className="object-cover"
        />
        
        {/* Category badge */}
        <div className="absolute top-3 left-3 bg-white bg-opacity-90 px-3 py-1 rounded-full text-sm font-medium">
          {moment.category}
        </div>
        
        {/* Content type indicator */}
        {moment.type === 'video' && (
          <div className="absolute bottom-3 right-3 bg-white rounded-full p-2 shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brand-pink" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
            </svg>
          </div>
        )}
        
        {/* Character decoration for some cards */}
        {(moment.id % 4 === 0) && (
          <div className="character character-card-corner">
            <Image
              src="/images/characters/green-dino.png"
              alt=""
              width={60}
              height={60}
            />
          </div>
        )}
      </div>
      
      <div className="p-5">
        <h3 className="text-xl font-display font-semibold mb-2">{moment.title}</h3>
        <p className="text-gray-600 mb-4">{moment.excerpt}</p>
        
        <div className="flex justify-between items-center">
          {moment.type === 'article' ? (
            <Button variant="link" href={`/learning/${moment.id}`}>
              {t('learningMoments.readMore')}
            </Button>
          ) : (
            <Button variant="link" href={`/learning/${moment.id}`}>
              {t('learningMoments.watchVideo')}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

// Filter button component
const FilterButton = ({ active, onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
        active 
          ? 'bg-brand-pink text-white' 
          : 'bg-white text-gray-700 hover:bg-gray-100'
      }`}
    >
      {children}
    </button>
  );
};

export default function LearningPage() {
  const { language } = useLanguage();
  const { t } = useTranslation(language);
  const [activeFilter, setActiveFilter] = useState('all');
  
  // Filter learning moments based on active filter
  const filteredMoments = activeFilter === 'all' 
    ? learningMoments 
    : learningMoments.filter(moment => moment.category === activeFilter);

  return (
    <main>
      {/* Hero Section with Green Dino */}
      <section className="relative h-[60vh] hero-parallax overflow-hidden">
        {/* Background image */}
        <Image
          src="/images/learning/learning-hero-bg.jpg"
          alt="Children learning through play at Teddy Kids"
          fill
          priority
          className="object-cover"
        />
        
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-white/30" />
        
        {/* Green dino character - strategically positioned */}
        <div className="character character-bottom-right character-floating hidden md:block">
          <Image
            src="/images/green dino.png"
            alt=""
            width={180}
            height={180}
            priority
          />
        </div>
        
        {/* Small floating character on the left */}
        <div className="character character-bottom-left character-floating character-delay-1 hidden md:block">
          <Image
            src="/images/1karakter-dino-lief.jpg"
            alt=""
            width={100}
            height={100}
          />
        </div>
        
        {/* Hero content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-6xl font-display font-bold text-gray-900 mb-4">
                {t('learningPage.hero.title')}
              </h1>
              <p className="text-xl md:text-2xl text-gray-700">
                {t('learningPage.hero.subtitle')}
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Learning Moments Grid with Filtering */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Filter buttons */}
          <div className="mb-10">
            <h2 className="text-xl font-medium text-gray-700 mb-4">
              {t('learningMoments.filterBy')}
            </h2>
            
            <div className="flex flex-wrap gap-2">
              <FilterButton 
                active={activeFilter === 'all'} 
                onClick={() => setActiveFilter('all')}
              >
                {t('learningMoments.categories.all')}
              </FilterButton>
              
              <FilterButton 
                active={activeFilter === 'bilingual'} 
                onClick={() => setActiveFilter('bilingual')}
              >
                {t('learningMoments.categories.bilingual')}
              </FilterButton>
              
              <FilterButton 
                active={activeFilter === 'empathy'} 
                onClick={() => setActiveFilter('empathy')}
              >
                {t('learningMoments.categories.empathy')}
              </FilterButton>
              
              <FilterButton 
                active={activeFilter === 'stem'} 
                onClick={() => setActiveFilter('stem')}
              >
                {t('learningMoments.categories.stem')}
              </FilterButton>
              
              <FilterButton 
                active={activeFilter === 'creativity'} 
                onClick={() => setActiveFilter('creativity')}
              >
                {t('learningMoments.categories.creativity')}
              </FilterButton>
            </div>
          </div>
          
          {/* Learning moments grid */}
          {filteredMoments.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredMoments.map(moment => (
                <LearningMomentCard key={moment.id} moment={moment} t={t} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600">{t('learningMoments.noResults')}</p>
              <Button 
                variant="secondary" 
                onClick={() => setActiveFilter('all')}
                className="mt-4"
              >
                {t('learningMoments.showAll')}
              </Button>
            </div>
          )}
          
          {/* Green dino character in the grid */}
          <div className="relative h-40 my-12 hidden md:block">
            <div className="character character-side-float character-floating">
              <Image
                src="/images/green dino.png"
                alt=""
                width={120}
                height={120}
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-brand-mint bg-opacity-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-display font-bold mb-4">
              {t('learningMoments.ctaTitle')}
            </h2>
            
            <p className="text-xl text-gray-700 mb-8">
              {t('learningMoments.ctaSubtitle')}
            </p>
            
            <Button 
              variant="primary" 
              href="/contact" 
              size="lg"
            >
              {t('learningMoments.ctaPrimary')}
            </Button>
            
            <p className="mt-4 text-sm text-gray-600">
              {t('learningMoments.ctaSecondary')}
            </p>
            
            {/* Character decoration */}
            <div className="relative h-24 mt-8">
              <div className="character character-floating character-delay-2" style={{ left: '50%', transform: 'translateX(-50%)' }}>
                <Image
                  src="/images/green dino.png"
                  alt=""
                  width={80}
                  height={80}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
