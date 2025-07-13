'use client';

import { Metadata } from 'next';
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/Button';
import { useTranslation } from '@/lib/translations';

export const metadata: Metadata = {
  title: 'Apie\'s Playground | Teddy Kids',
  description: 'A special place just for kids! Color with Apie, listen to stories, and have fun in this secret playground.',
  robots: 'noindex, nofollow', // Keep this page hidden from search engines
};

const ApiePlayground: React.FC = () => {
  const { t } = useTranslation('en');
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [confettiActive, setConfettiActive] = useState(false);
  
  // Handle audio playback
  const toggleAudio = () => {
    if (audioRef.current) {
      if (isAudioPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsAudioPlaying(!isAudioPlaying);
    }
  };

  // Handle audio ended event
  const handleAudioEnded = () => {
    setIsAudioPlaying(false);
  };
  
  // Trigger confetti animation when page loads
  useEffect(() => {
    setConfettiActive(true);
    const timer = setTimeout(() => {
      setConfettiActive(false);
    }, 3000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-brand-yellow to-brand-mint overflow-hidden relative">
      {/* Jungle-themed decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-64 opacity-20">
        <Image
          src="/images/apie/jungle-leaves-left.svg"
          alt=""
          fill
          className="object-contain"
          aria-hidden="true"
        />
      </div>
      <div className="absolute top-0 right-0 w-32 h-64 opacity-20">
        <Image
          src="/images/apie/jungle-leaves-right.svg"
          alt=""
          fill
          className="object-contain"
          aria-hidden="true"
        />
      </div>
      
      {/* Confetti animation */}
      {confettiActive && (
        <div className="absolute inset-0 pointer-events-none z-10">
          {/* This would be replaced with actual confetti animation */}
          <div className="confetti-container">
            {[...Array(50)].map((_, i) => (
              <div 
                key={i}
                className="confetti"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  backgroundColor: ['#FFB6C1', '#FFD700', '#98FB98', '#87CEFA'][Math.floor(Math.random() * 4)]
                }}
              />
            ))}
          </div>
        </div>
      )}
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-lg overflow-hidden">
          {/* Header */}
          <div className="bg-brand-purple bg-opacity-30 p-8 text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-2 text-gray-800">
              {t('apiePlayground.title')}
            </h1>
            <p className="text-xl text-gray-600">
              {t('apiePlayground.subtitle')}
            </p>
            <div className="mt-4 inline-block bg-white px-6 py-3 rounded-full text-lg font-medium text-gray-700 shadow-sm">
              {t('apiePlayground.secretMessage')}
            </div>
          </div>
          
          {/* Main content */}
          <div className="p-8">
            {/* Apie Image and Quote */}
            <div className="flex flex-col md:flex-row items-center mb-12">
              <div className="md:w-1/2 mb-6 md:mb-0 relative">
                <div className="relative w-64 h-64 mx-auto">
                  <Image
                    src="/images/apie/apie-character.png"
                    alt="Apie the Monkey"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="bg-brand-yellow bg-opacity-30 p-6 rounded-2xl">
                  <h2 className="text-2xl font-display font-semibold mb-4">
                    Meet Apie!
                  </h2>
                  <blockquote className="text-lg italic text-gray-700 mb-4">
                    "{t('apiePlayground.maelynQuote')}"
                  </blockquote>
                  <p className="text-right text-sm text-gray-600">- Maelyn</p>
                </div>
                
                {/* Audio Player */}
                <div className="mt-6">
                  <h3 className="text-xl font-display font-medium mb-3">
                    {t('apiePlayground.listenToApie')}
                  </h3>
                  <div className="flex items-center bg-gray-100 p-4 rounded-xl">
                    <button
                      onClick={toggleAudio}
                      className="w-12 h-12 bg-brand-pink rounded-full flex items-center justify-center shadow-md hover:bg-opacity-80 transition-colors"
                      aria-label={isAudioPlaying ? "Pause" : "Play"}
                    >
                      {isAudioPlaying ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="6" y="4" width="4" height="16"></rect>
                          <rect x="14" y="4" width="4" height="16"></rect>
                        </svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polygon points="5 3 19 12 5 21 5 3"></polygon>
                        </svg>
                      )}
                    </button>
                    <div className="ml-4 flex-1">
                      <div className="text-sm font-medium">Apie's Hello</div>
                      <div className="h-2 bg-gray-200 rounded-full mt-2">
                        <div 
                          className={`h-full bg-brand-pink rounded-full ${
                            isAudioPlaying ? 'animate-progress' : ''
                          }`} 
                          style={{ width: isAudioPlaying ? '100%' : '0%' }}
                        ></div>
                      </div>
                    </div>
                    <audio 
                      ref={audioRef} 
                      src="/audio/apie-hello.mp3" 
                      onEnded={handleAudioEnded}
                      className="hidden"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Coloring Section */}
            <div className="mb-12">
              <h2 className="text-2xl font-display font-semibold mb-6 text-center">
                {t('apiePlayground.coloringTitle')}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Coloring Preview */}
                <div className="bg-gray-50 p-4 rounded-xl">
                  <div className="relative aspect-square">
                    <Image
                      src="/images/apie/coloring-page.png"
                      alt="Apie Coloring Page"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                
                {/* Download Options */}
                <div className="flex flex-col justify-center">
                  <p className="text-gray-700 mb-6">
                    Download Apie's coloring pages and have fun coloring them at home!
                  </p>
                  
                  <Button
                    variant="primary"
                    href="/downloads/apie-coloring-page.pdf"
                    icon={
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                        <polyline points="7 10 12 15 17 10"></polyline>
                        <line x1="12" y1="15" x2="12" y2="3"></line>
                      </svg>
                    }
                    className="mb-4"
                  >
                    {t('apiePlayground.downloadColoring')}
                  </Button>
                  
                  <Button
                    variant="outline"
                    href="/downloads/apie-activity-book.pdf"
                    icon={
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                      </svg>
                    }
                  >
                    Download Activity Book
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Back to Home */}
            <div className="text-center">
              <Link 
                href="/"
                className="inline-flex items-center text-gray-600 hover:text-gray-900"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
                Back to Main Page
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* CSS for confetti animation */}
      <style jsx>{`
        .confetti-container {
          position: absolute;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }
        
        .confetti {
          position: absolute;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          animation: fall 3s linear forwards;
        }
        
        @keyframes fall {
          0% {
            transform: translateY(-100px) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
          }
        }
        
        @keyframes progress {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        
        .animate-progress {
          animation: progress 30s linear;
        }
      `}</style>
      
      {/* Note about the banana click activation */}
      {/* 
        Note: The 3-banana-click activation mechanism should be implemented in the 
        main layout or navigation component. When a user clicks on a hidden banana icon 
        3 times, it should navigate to this page or reveal a link to this page.
      */}
    </main>
  );
};

export default ApiePlayground;
