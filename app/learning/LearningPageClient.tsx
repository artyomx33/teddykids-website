'use client';

import { useLanguage } from '@/lib/LanguageContext';
import { useTranslation } from '@/lib/translations';
import Image from 'next/image';
import { useState } from 'react';
import Button from '@/components/Button';

// Learning moment card component
interface LearningMomentProps {
  title: string;
  description: string;
  category: string;
  image: string;
  type: 'video' | 'article';
  link: string;
}

const LearningMoment: React.FC<LearningMomentProps> = ({
  title,
  description,
  category,
  image,
  type,
  link,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-300">
      <div className="relative h-48 w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-white px-3 py-1 rounded-full text-sm font-medium text-gray-700">
            {category}
          </span>
        </div>
        {type === 'video' && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-white bg-opacity-75 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-pink" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="font-display font-bold text-xl mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
        <Button
          variant={type === 'video' ? 'primary' : 'outline'}
          href={link}
          size="sm"
        >
          {type === 'video' ? 'Watch Video' : 'Read More'}
        </Button>
      </div>
    </div>
  );
};

export default function LearningPageClient() {
  const { language } = useLanguage();
  const { t } = useTranslation(language);
  
  // Filter state
  const [activeFilter, setActiveFilter] = useState<string>('all');
  
  // Mock learning moments data
  const learningMoments = [
    {
      id: 1,
      title: "When Two Languages Become One",
      description: "Watch how our nursery children naturally switch between Dutch and English during playtime, building neural pathways that will benefit them for life.",
      category: "bilingual",
      image: "/images/learning/please-languages.png",
      type: "video" as const,
      link: "/learning/bilingual-development"
    },
    {
      id: 2,
      title: "The Science of Sharing",
      description: "Our preschoolers demonstrate how guided conflict resolution helps develop empathy and emotional intelligence.",
      category: "empathy",
      image: "/images/learning/conflict-resolution.png",
      type: "article" as const,
      link: "/learning/empathy-development"
    },
    {
      id: 3,
      title: "Building Bridges, Building Minds",
      description: "See how simple blocks and questions lead to complex STEM thinking in our 3-year-olds.",
      category: "stem",
      image: "/images/learning/blocks-thinking.png",
      type: "video" as const,
      link: "/learning/stem-exploration"
    },
    {
      id: 4,
      title: "From Mess to Masterpiece",
      description: "The developmental importance of sensory play and artistic expression in language acquisition.",
      category: "creativity",
      image: "/images/learning/finger-paint.png",
      type: "article" as const,
      link: "/learning/creative-expression"
    },
    {
      id: 5,
      title: "Cultural Celebrations: Sinterklaas",
      description: "How we incorporate Dutch traditions while making them accessible to our international families.",
      category: "bilingual",
      image: "/images/learning/music-brain.png",
      type: "video" as const,
      link: "/learning/cultural-celebrations"
    },
    {
      id: 6,
      title: "The Teddy Garden Project",
      description: "Our preschoolers learn about sustainability, patience, and nutrition by growing their own vegetables.",
      category: "stem",
      image: "/images/learning/puddle-science.png",
      type: "article" as const,
      link: "/learning/garden-project"
    }
  ];
  
  // Filter learning moments based on active filter
  const filteredMoments = activeFilter === 'all' 
    ? learningMoments 
    : learningMoments.filter(moment => moment.category === activeFilter);
  
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] hero-parallax overflow-hidden">
        {/* Background image */}
        <Image
          src="/images/heroes/learning-hero.png"
          alt="Teddy Kids children discovering through play in a bilingual setting"
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
              Where brilliance hides in everyday moments
            </h1>
            <p className="text-xl md:text-2xl text-white">
              Peek inside to see how your child learns when they think they&apos;re just playing.
            </p>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------
          “Learning in Action” section temporarily removed

          This block currently contains only a heading + subtitle
          with no actual content behind it, which creates empty
          visual space on the page.  The client requested that we
          hide it for now, but keep the markup easily restorable.
          Simply remove the surrounding comment tags to re-enable.
      ---------------------------------------------------------------- */}
      {/*
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-display font-bold mb-4">
              Learning in Action
            </h2>
            <p className="text-lg text-gray-700">
              Witness the magic of discovery in our bilingual environment
            </p>
          </div>
        </div>
      </section>
      */}
      
      {/* Learning Moments Gallery */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-display font-bold mb-2 text-center">
              {"Learning Moments"}
            </h2>
            <p className="text-center text-gray-600 mb-8">
              {"Short bursts of insight from inside TK"}
            </p>
            
            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              <span className="text-gray-700 font-medium mr-2 flex items-center">
                {t('learningMoments.filterBy')}
              </span>
              <Button 
                variant={activeFilter === 'all' ? 'primary' : 'text'}
                onClick={() => setActiveFilter('all')}
                className={activeFilter === 'all' ? '' : 'hover:bg-brand-pink hover:bg-opacity-10'}
              >
                {t('learningMoments.categories.all')}
              </Button>
              <Button 
                variant={activeFilter === 'bilingual' ? 'primary' : 'text'}
                onClick={() => setActiveFilter('bilingual')}
                className={activeFilter === 'bilingual' ? '' : 'hover:bg-brand-pink hover:bg-opacity-10'}
              >
                {t('learningMoments.categories.bilingual')}
              </Button>
              <Button 
                variant={activeFilter === 'empathy' ? 'primary' : 'text'}
                onClick={() => setActiveFilter('empathy')}
                className={activeFilter === 'empathy' ? '' : 'hover:bg-brand-pink hover:bg-opacity-10'}
              >
                {t('learningMoments.categories.empathy')}
              </Button>
              <Button 
                variant={activeFilter === 'stem' ? 'primary' : 'text'}
                onClick={() => setActiveFilter('stem')}
                className={activeFilter === 'stem' ? '' : 'hover:bg-brand-pink hover:bg-opacity-10'}
              >
                {t('learningMoments.categories.stem')}
              </Button>
              <Button 
                variant={activeFilter === 'creativity' ? 'primary' : 'text'}
                onClick={() => setActiveFilter('creativity')}
                className={activeFilter === 'creativity' ? '' : 'hover:bg-brand-pink hover:bg-opacity-10'}
              >
                {t('learningMoments.categories.creativity')}
              </Button>
            </div>
            
            {/* Learning Moments Grid */}
            {filteredMoments.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredMoments.map((moment) => (
                  <LearningMoment
                    key={moment.id}
                    title={moment.title}
                    description={moment.description}
                    category={moment.category}
                    image={moment.image}
                    type={moment.type}
                    link={moment.link}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-600">
                  {t('learningMoments.noResults')}
                </p>
                <Button
                  variant="text"
                  onClick={() => setActiveFilter('all')}
                  className="mt-4 text-brand-pink hover:underline"
                >
                  {t('learningMoments.showAll')}
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-brand-yellow bg-opacity-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-display font-bold mb-4">
              What if your child&apos;s most powerful learning moment… was happening today—and you didn&apos;t see it?
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Let us show you how brilliance hides in snack time, sandboxes, and squishy socks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="primary"
                href="/contact"
                size="lg"
              >
                See It Firsthand
              </Button>
              <Button 
                variant="outline"
                href="/contact?tour=true"
                size="lg"
              >
                Book a 20-Minute Tour That Might Change Everything
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Newsletter Signup */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-sm">
            <h2 className="text-2xl font-display font-bold mb-4 text-center">
              Get Learning Moments in Your Inbox
            </h2>
            <p className="text-center text-gray-600 mb-6">
              Subscribe to receive monthly insights into child development and bilingual learning.
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-pink focus:border-transparent"
                required
              />
              <Button 
                variant="primary"
                type="submit"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
