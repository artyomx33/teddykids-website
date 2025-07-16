'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/lib/LanguageContext';
import { useTranslation } from '@/lib/translations';

const AppiesGPT = () => {
  const [showIframe, setShowIframe] = useState(false);
  const { language } = useLanguage();
  const { t } = useTranslation(language);

  const toggleIframe = () => {
    setShowIframe(true);
  };

  return (
    <section className="py-16 bg-brand-mint bg-opacity-10 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="ask-appies-intro text-center mb-8">
            <div className="relative w-24 h-24 mx-auto mb-4">
              <Image 
                src="/images/characters/teddy-character-1.png" 
                alt="Appies the monkey" 
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              {t('appiesGPT.title')}
            </h2>
            <p 
              className="text-lg text-gray-700 mb-6"
              dangerouslySetInnerHTML={{ __html: t('appiesGPT.description') }}
            />
            
            {!showIframe && (
              <button 
                onClick={toggleIframe}
                className="bg-brand-pink hover:bg-brand-pink-dark text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 shadow-sm hover:shadow-md"
              >
                {t('appiesGPT.buttonText')}
              </button>
            )}
          </div>

          {showIframe && (
            <div 
              className="appies-iframe-container bg-white rounded-xl shadow-md overflow-hidden transition-all duration-500 ease-in-out"
              style={{ 
                height: '700px',
                maxHeight: '80vh'
              }}
            >
              <iframe 
                src="https://chat.openai.com/g/g-6877eec631908191a6e9329337a45f39-appiesgpt-teddy-kids-leiden" 
                width="100%" 
                height="100%" 
                style={{ border: 'none' }}
                title="AppiesGPT Chat"
                loading="lazy"
              />
            </div>
          )}
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-brand-yellow bg-opacity-20 rounded-full"></div>
      <div className="absolute top-12 -right-8 w-16 h-16 bg-brand-pink bg-opacity-10 rounded-full"></div>
    </section>
  );
};

export default AppiesGPT;
