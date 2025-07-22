'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language } from './translations';

// Define the shape of our language context
interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
}

// Create the context with a default value
const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  toggleLanguage: () => {},
});

// Custom hook to use the language context
export const useLanguage = () => useContext(LanguageContext);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  // Start with English (SSR safe) and mark whether we've mounted on the client
  const [language, setLanguageState] = useState<Language>('en');

  // On first render, check if there's a saved language preference
  useEffect(() => {
    const savedLanguage = localStorage.getItem('teddykids-language');
    if (savedLanguage === 'en' || savedLanguage === 'nl') {
      setLanguageState(savedLanguage);
    }
  }, []);

  // Update language and save to localStorage
  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('teddykids-language', lang);
  };

  // Toggle between English and Dutch
  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'nl' : 'en';
    setLanguage(newLanguage);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;
