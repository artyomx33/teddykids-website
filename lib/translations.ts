// lib/translations.ts
export type Language = 'en' | 'nl';

export function useTranslation(language: Language = 'en') {
  return {
    t: (key: string) => key,
  };
}
