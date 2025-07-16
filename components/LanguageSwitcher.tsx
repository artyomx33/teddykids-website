'use client';

import React from 'react';
import { useLanguage } from '@/lib/LanguageContext';

interface LanguageSwitcherProps {
  className?: string;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ className = '' }) => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className={`flex items-center justify-center rounded-md px-3 py-1.5 text-sm font-medium transition-colors 
        ${language === 'en' 
          ? 'bg-blue-100 text-blue-700 hover:bg-blue-200' 
          : 'bg-orange-100 text-orange-700 hover:bg-orange-200'
        } ${className}`}
      aria-label={`Switch to ${language === 'en' ? 'Dutch' : 'English'} language`}
    >
      <span className="mr-1 font-bold">{language === 'en' ? 'EN' : 'NL'}</span>
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="16" 
        height="16" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      >
        <path d="m2 12 8 8 8-8M12 2v16" />
      </svg>
    </button>
  );
};

export default LanguageSwitcher;
