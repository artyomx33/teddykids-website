#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Path to the translations file
const translationsFilePath = path.join(__dirname, 'lib', 'translations.ts');

// Read the current translations file
let translationsContent = fs.readFileSync(translationsFilePath, 'utf8');

// Find the getTranslations function and replace it with our improved version
const getTranslationsRegex = /export const getTranslations = \(language: Language = 'en'\) => {[\s\S]*?return value;\s*};\s*};/;

const newGetTranslationsFunction = `export const getTranslations = (language: Language = 'en') => {
  return (key: string): any => {
    const keys = key.split('.');
    let value: any = translations[language];

    // Try to find the translation in the requested language
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        // If translation is missing and language is Dutch, fall back to English with asterisk
        if (language === 'nl') {
          // Try to get the English translation
          let englishValue: any = translations['en'];
          let foundEnglish = true;
          
          for (const englishKey of keys) {
            if (englishValue && typeof englishValue === 'object' && englishKey in englishValue) {
              englishValue = englishValue[englishKey];
            } else {
              foundEnglish = false;
              break;
            }
          }
          
          // If English translation exists, return it with an asterisk
          if (foundEnglish) {
            return \`\${englishValue}*\`;
          }
        }
        
        // If no fallback is available or language is English, return empty string
        return '';
      }
    }

    return value;
  };
};`;

// Replace the old getTranslations function with the new one
translationsContent = translationsContent.replace(getTranslationsRegex, newGetTranslationsFunction);

// Write the updated file
fs.writeFileSync(translationsFilePath, translationsContent);

console.log('✅ Successfully updated translations.ts with fallback system.');
console.log('Now missing Dutch translations will show English text with an asterisk (*).');
