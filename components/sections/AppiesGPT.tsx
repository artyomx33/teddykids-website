'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/lib/LanguageContext';
import { useTranslation } from '@/lib/translations';

const AppiesGPT = () => {
  const [hovered, setHovered] = useState(false);
  const { language } = useLanguage();
  const { t } = useTranslation(language);

  return (
    <section className="py-16 bg-brand-mint bg-opacity-10 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="ask-appies-intro text-center mb-8">
            <div className="relative w-24 h-24 mx-auto mb-4">
              <Image
                src={
                  hovered
                    ? '/images/characters/appies-blink.gif'
                    : '/images/characters/appies-icon.png'
                }
                alt="Appies the monkey"
                fill
                className="object-contain transition-transform duration-300"
                onMouseOver={() => setHovered(true)}
                onMouseOut={() => setHovered(false)}
                /* Below-the-fold optimisation */
                loading="lazy"
                fetchPriority="low"
                sizes="96px"
              />
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              {t('appiesGPT.title')}
            </h2>
            <p 
              className="text-lg text-gray-700 mb-6"
              dangerouslySetInnerHTML={{ __html: t('appiesGPT.description') }}
            />
            
            <a
              href="https://chat.openai.com/g/g-6877eec631908191a6e9329337a45f39-appiesgpt-teddy-kids-leiden"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#f4a261] hover:bg-[#e76f51] text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 shadow-sm hover:shadow-md"
              title="AppiesGPT will open in a new tab on ChatGPT"
            >
              {t('appiesGPT.buttonText')}
            </a>

            <small className="block mt-2 text-sm text-gray-600">
              {t('appiesGPT.note')}
            </small>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-brand-yellow bg-opacity-20 rounded-full"></div>
      <div className="absolute top-12 -right-8 w-16 h-16 bg-brand-pink bg-opacity-10 rounded-full"></div>
    </section>
  );
};

export default AppiesGPT;
