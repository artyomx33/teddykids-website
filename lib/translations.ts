// Minimal translations structure (only blocks needed for current task)
export type Language = 'en' | 'nl';

export const translations = {
  /* English left intentionally minimal for this patch */
  en: {},

  /* -------------------------------------------------- */
  /*               DUTCH (nl) SECTION                   */
  /* -------------------------------------------------- */
  nl: {
    /* basic hero placeholder */
    hero: {
      title: '',
      subtitle: ''
    },

    /* 1️⃣  Begin Your Journey block (requested) */
    beginYourJourney: {
      title: 'Begin je reis',
      subtitle: 'Klaar voor de eerste stap?'
    },

    /* about => policy subtree with missing keys filled */
    about: {
      policy: {
        /* minimal privacy stub (already existed in spec) */
        privacy: {
          title: 'Privacy & AVG',
          description:
            'Ons privacybeleid legt uit hoe wij zorgvuldig omgaan met gegevens — volledig in lijn met de AVG.',
          comingSoon:
            'Privacybeleid binnenkort — de definitieve versie zal hier te downloaden zijn.',
          downloadLink: 'Download Privacybeleid (NL/EN)'
        },

        /* 2️⃣  Additional + assistance footer (requested) */
        additional: {
          title: 'Overige Documenten',
          incidentForm: 'Incidenten Meldingsformulier (NL)',
          vogSample: 'Voorbeeld VOG (NL)'
        },

        /* assistance footer */
        helpTitle: 'Hulp nodig bij het vinden van iets?',
        helpCta:
          'Hulp nodig bij het vinden van een document? Stuur ons gerust een bericht.',
        downloadReport: 'Download GGD Rapport'
      }
    }
  }
} as const;

/* ------------------------------------------------------------------ */
/*                        Translation helper                          */
/* ------------------------------------------------------------------ */

import { useCallback } from 'react';

export function useTranslation(language: Language = 'en') {
  const t = useCallback(
    (key: string) => {
      const parts = key.split('.');
      let current: any = translations[language as keyof typeof translations];

      for (const part of parts) {
        current = current?.[part];
        if (current === undefined) return key; // fallback
      }
      return current ?? key;
    },
    [language]
  );

  // Return object wrapper so callers can use `const { t } = useTranslation()`
  return { t };
}
