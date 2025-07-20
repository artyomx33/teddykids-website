'use client';

import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Button from '@/components/Button';
import { useTranslation } from '@/lib/translations';
import { useLanguage } from '@/lib/LanguageContext';

interface HeroProps {
  videoSrc?: string;
  fallbackImageSrc?: string;
  whatsappNumber?: string;
}

const Hero: React.FC<HeroProps> = ({
  videoSrc = '/videos/tk-hero-loop.mp4',
  fallbackImageSrc = '/images/hero-fallback.jpg',
  whatsappNumber,
}) => {
  const { language } = useLanguage();
  const { t } = useTranslation(language);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile for responsive handling
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkMobile();
    
    // Add resize listener
    window.addEventListener('resize', checkMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // WhatsApp message setup
  const whatsappMessage = encodeURIComponent(
    "Hi Teddy Kids! I'd love to book a tour for my child."
  );
  
  const whatsappLink = whatsappNumber 
    ? `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`
    : `https://wa.me/?text=${whatsappMessage}`;

  return (
    <section className="relative w-full h-screen overflow-hidden bg-brand-pink">
      {/* Preload critical assets for LCP */}
      <Head>
        {/* Preload hero video for desktop only */}
        {!isMobile && (
          <link
            rel="preload"
            as="video"
            href={videoSrc}
            crossOrigin="anonymous"
          />
        )}
        {/* Preload hero poster / fallback image */}
        <link
          rel="preload"
          as="image"
          href={fallbackImageSrc}
          fetchPriority="high"
        />
      </Head>
      
      {/* Fallback Image - Always visible on mobile, or before video loads on desktop */}
      <div className={`absolute inset-0 z-0 ${!isMobile && videoLoaded ? 'opacity-0' : 'opacity-100'} transition-opacity duration-1000`}>
        <Image
          src={fallbackImageSrc}
          alt="Teddy Kids children playing"
          priority
          fetchPriority="high"
          sizes="100vw"
          className="object-cover object-center"
          /* keep `fill` for responsive while still providing intrinsic size */
          fill
        />
        <div className="absolute inset-0 bg-black bg-opacity-30" />
      </div>
      
      {/* Render video only on non-mobile to save bandwidth & improve LCP */}
      {!isMobile && (
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-1000 opacity-0"
          onLoadedData={() => setVideoLoaded(true)}
          poster={fallbackImageSrc}
          style={{ opacity: videoLoaded ? 1 : 0 }}
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
      
      {/* Overlay gradient for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/20 z-10" />
      
      {/* Content Container */}
      <div className="relative z-20 container mx-auto h-full flex flex-col justify-center items-center text-center px-4 md:px-0">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4 md:mb-6 max-w-4xl animate-fade-in">
          {t('hero.title')}
        </h1>
        
        <p className="text-xl md:text-2xl text-white mb-8 md:mb-10 max-w-2xl animate-slide-up">
          {t('hero.subtitle')}
        </p>
        
        {/* CTA Buttons */}
        <div className={`flex ${isMobile ? 'flex-col w-full' : 'flex-row'} gap-4 mt-4`}>
          <Button 
            variant="primary"
            size="lg"
            href={whatsappLink}
            isExternal
            fullWidth={isMobile}
            className="bg-white text-gray-800 hover:bg-gray-100"
          >
            {t('hero.cta1')}
          </Button>
          
          <Button 
            variant="outline"
            size="lg"
            href="/apply#application-form"
            fullWidth={isMobile}
            className="border-white text-white hover:bg-white hover:bg-opacity-20"
          >
            {t('hero.cta2')}
          </Button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce-slow">
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="text-white"
        >
          <path 
            d="M12 5V19M12 19L5 12M12 19L19 12" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
