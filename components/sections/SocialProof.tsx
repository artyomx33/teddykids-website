'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useTranslation } from '@/lib/translations';
import { useLanguage } from '@/lib/LanguageContext';

interface ReviewCardProps {
  quote: string;
  author: string;
  audioSrc?: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ quote, author, audioSrc }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = React.useRef<HTMLAudioElement>(null);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Handle audio ended event
  const handleAudioEnded = () => {
    setIsPlaying(false);
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 flex flex-col h-full transition-all duration-300 hover:shadow-lg">
      <div className="flex-grow">
        <blockquote className="text-lg text-gray-700 mb-4 italic">
          &quot;{quote}&quot;
        </blockquote>
      </div>
      
      <div className="flex items-center justify-between mt-4">
        <p className="font-medium text-gray-800">{author}</p>
        
        {audioSrc && (
          <button 
            onClick={toggleAudio}
            className="p-2 rounded-full bg-brand-pink bg-opacity-20 hover:bg-opacity-30 transition-colors"
            aria-label={isPlaying ? "Pause audio" : "Play audio"}
          >
            {isPlaying ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="6" y="4" width="4" height="16"></rect>
                <rect x="14" y="4" width="4" height="16"></rect>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
            )}
          </button>
        )}
        
        {audioSrc && (
          <audio 
            ref={audioRef} 
            src={audioSrc} 
            onEnded={handleAudioEnded}
            className="hidden"
          />
        )}
      </div>
    </div>
  );
};

interface LogoProps {
  src: string;
  alt: string;
}

const Logo: React.FC<LogoProps> = ({ src, alt }) => {
  return (
    <div className="flex items-center justify-center p-4">
      <Image
        src={src}
        alt={alt}
        width={120}
        height={40}
        className="object-contain h-12 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
      />
    </div>
  );
};

interface SocialProofProps {
  className?: string;
}

const SocialProof: React.FC<SocialProofProps> = ({ className = '' }) => {
  const { language } = useLanguage();
  const { t } = useTranslation(language);
  
  // Placeholder logos - replace with actual partner logos
  const logos = [
    { src: '/images/logos/leiden-university.png', alt: 'Leiden University' },
    { src: '/images/logos/moekes-maaltijd.png', alt: 'Moekes Maaltijd' },
    { src: '/images/logos/tesla.png', alt: 'Tesla' },
    { src: '/images/logos/partner-4.png', alt: 'Partner 4' },
  ];

  return (
    <section className={`py-16 ${className}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-4">
          {t('socialProof.title')}
        </h2>
        
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          {t('socialProof.subtitle')}
        </p>
        
        {/* Trusted headline */}
        <h3 className="text-xl font-semibold text-center mb-8">
          Trusted by&nbsp;<span className="text-brand-pink font-display font-bold">10,000+ families</span>&nbsp;since&nbsp;2004
        </h3>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16">
          <ReviewCard
            quote="Teddy Kids didn't just care for our daughter—they shaped her."
            author="Emma & James, Parents since 2018"
            audioSrc="/audio/Emma%20%26%20James%2C%20Parents%20since%202018.mp3"
          />
          
          <ReviewCard
            quote="The bilingual environment gave our son confidence we never expected."
            author="Sophia, Mother of two"
            audioSrc="/audio/Sophia%20Mother%20of%20two.mp3"
          />
          
          <ReviewCard
            quote="As international parents, we found a second home at Teddy Kids."
            author="Miguel & Ling, TISA Parents"
            audioSrc="/audio/Miguel%20%26%20Ling%2C%20TISA%20Parents.mp3"
          />
        </div>
        
        {/* Logos Strip */}
        <div className="mt-12">
          <p className="text-center text-gray-600 mb-6">
            {t('socialProof.trustedBy')}
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
            {logos.map((logo, index) => (
              <Logo key={index} src={logo.src} alt={logo.alt} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
