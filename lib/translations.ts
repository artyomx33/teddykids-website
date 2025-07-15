'use client';

/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback } from 'react';

// Supported language codes
export type Language = 'en' | 'nl';

export const translations = {
  en: {
    navigation: {
      home: "Home",
      about: "About Us",
      programs: "Programs",
      locations: "Locations",
      team: "Team",
      learning: "Learning Moments",
      contact: "Contact"
    },
    hero: {
      title: "From Baby Steps to Global Citizens",
      subtitle: "Where your child's first words lead to a world of possibilities.",
      cta1: "Book a Tour",
      cta2: "Apply Now"
    },
    pillars: {
      title: "Our Promise to Every Child",
      pillar1: {
        title: "Bilingual Brilliance",
        description: "Language opens doors to new worlds."
      },
      pillar2: {
        title: "Learn Through Play",
        description: "Joy is the foundation of lasting knowledge."
      },
      pillar3: {
        title: "Global Hearts & Minds",
        description: "Nurturing tomorrow's world citizens."
      },
      pillar4: {
        title: "20 Years of Care",
        description: "Two decades of childhood expertise."
      }
    },
    socialProof: {
      title: "Trusted by 10,000+ families since 2004",
      subtitle: "Here's what some of our parents say:",
      review1: {
        quote: "Teddy Kids didn't just care for our daughter—they shaped her.",
        author: "Emma & James, Parents since 2018"
      },
      review2: {
        quote: "The bilingual environment gave our son confidence we never expected.",
        author: "Sophia, Mother of two"
      },
      review3: {
        quote: "As international parents, we found a second home at Teddy Kids.",
        author: "Miguel & Ling, TISA Parents"
      },
      trustedBy: "Trusted by organizations like:"
    },
    programs: {
      title: "What We Offer",
      subtitle: "Programs designed for every stage of childhood",
      nursery: {
        title: "Nursery",
        tagline: "Safe, soft beginnings",
        description: "Nurturing care for our youngest explorers."
      },
      preschool: {
        title: "Preschool",
        tagline: "Where play meets purpose",
        description: "Building foundations through guided discovery."
      },
      afterSchool: {
        title: "After School",
        tagline: "Exploration after hours",
        description: "Extending learning beyond the classroom."
      },
      tisa: {
        title: "TISA",
        tagline: "Bilingual International School",
        description: "A world-class education with global perspective."
      }
    },
    locations: {
      title: "Find Your Nearest Teddy Kids",
      subtitle: "Multiple locations throughout the region",
      viewDetails: "View Details",
      bookTour: "Book a Tour",
      applyNow: "Apply Now",
      openingHours: "Opening Hours",
      contactPerson: "Contact Person",
      googleReviews: "Google Reviews"
    },
    team: {
      title: "Meet the Magic Makers",
      subtitle: "The passionate educators behind Teddy Kids",
      didYouKnow: "Did You Know?",
      viewBio: "Read Full Bio",
      members: {
        artem: {
          name: "Artem",
          role: "Director",
          funFact: "Always one idea ahead"
        },
        tess: {
          name: "Tess",
          role: "Head of Operations",
          funFact: "Has a spreadsheet for everything"
        },
        jess: {
          name: "Jess",
          role: "Education Quality Lead",
          funFact: "Invented our TK rain song"
        },
        meral: {
          name: "Meral",
          role: "People & Culture",
          funFact: "Bakes award-worthy cookies"
        },
        antonela: {
          name: "Antonela",
          role: "Site Leader",
          funFact: "Taught a kid 4 languages before 5"
        },
        pamela: {
          name: "Pamela",
          role: "HR",
          funFact: "Makes 7 kinds of lasagna"
        },
        svetlana: {
          name: "Svetlana",
          role: "Finance",
          funFact: "Secretly a puzzle master"
        },
        sofia: {
          name: "Sofia",
          role: "Creative & Events",
          funFact: "Thinks glitter is a primary color"
        }
      }
    },
    learningMoments: {
      title: "Learning Moments",
      subtitle: "Short bursts of insight from inside TK",
      readMore: "Read More",
      watchVideo: "Watch Video",
      filterBy: "Filter By:",
      categories: {
        bilingual: "Bilingual",
        empathy: "Empathy",
        stem: "STEM",
        creativity: "Creativity",
        all: "All Topics"
      }
    },
    contact: {
      title: "Your Journey Starts Here",
      subtitle: "We're excited to meet your family",
      whatsappButton: "Chat on WhatsApp",
      whatsappMessage: "Hi Teddy Kids! I'd love to book a tour for my child.",
      formName: "Your Name",
      formEmail: "Email Address",
      formChildAge: "Child's Age",
      formMessage: "Your Message",
      formSubmit: "Send Message",
      thankYou: "Thank you! We'll be in touch soon."
    },
    apiePlayground: {
      title: "Apie's Playground",
      subtitle: "A special place just for kids",
      maelynQuote: "This is the monkey that started it all.",
      coloringTitle: "Color with Apie",
      downloadColoring: "Download Coloring Page",
      listenToApie: "Listen to Apie",
      secretMessage: "You found the secret page! Well done!"
    },
    footer: {
      copyright: "© 2024 Teddy Kids. All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      careers: "Careers",
      followUs: "Follow Us"
    }
  },
  nl: {
    navigation: {
      home: "Home",
      about: "Over Ons",
      programs: "Programma's",
      locations: "Locaties",
      team: "Team",
      learning: "Leermomenten",
      contact: "Contact"
    },
    hero: {
      title: "Van Eerste Stapjes naar Wereldburgers",
      subtitle: "Waar de eerste woorden van jouw kind leiden tot een wereld vol mogelijkheden.",
      cta1: "Plan een Rondleiding",
      cta2: "Schrijf je Nu In"
    },
    pillars: {
      title: "Onze Belofte aan Elk Kind",
      pillar1: {
        title: "Tweetalige Briljantheid",
        description: "Taal opent deuren naar nieuwe werelden."
      },
      pillar2: {
        title: "Leren door Spel",
        description: "Vreugde is de basis van blijvende kennis."
      },
      pillar3: {
        title: "Wereldse Harten & Geesten",
        description: "Wij voeden de wereldburgers van morgen."
      },
      pillar4: {
        title: "20 Jaar Zorg",
        description: "Twee decennia expertise in kindontwikkeling."
      }
    },
    socialProof: {
      title: "Vertrouwd door 10.000+ families sinds 2004",
      subtitle: "Dit zeggen sommige van onze ouders:",
      review1: {
        quote: "Teddy Kids verzorgde onze dochter niet alleen—ze vormden haar.",
        author: "Emma & James, Ouders sinds 2018"
      },
      review2: {
        quote: "De tweetalige omgeving gaf onze zoon vertrouwen dat we nooit hadden verwacht.",
        author: "Sophia, Moeder van twee"
      },
      review3: {
        quote: "Als internationale ouders vonden wij een tweede thuis bij Teddy Kids.",
        author: "Miguel & Ling, TISA Ouders"
      },
      trustedBy: "Vertrouwd door organisaties zoals:"
    },
    programs: {
      title: "Wat Wij Aanbieden",
      subtitle: "Programma's ontworpen voor elke fase van de kindertijd",
      nursery: {
        title: "Kinderopvang",
        tagline: "Veilige, zachte start",
        description: "Zorgzame opvang voor onze jongste ontdekkers."
      },
      preschool: {
        title: "Peuterschool",
        tagline: "Waar spel betekenis krijgt",
        description: "Fundamenten bouwen door begeleide ontdekking."
      },
      afterSchool: {
        title: "Naschoolse Opvang",
        tagline: "Ontdekken na schooltijd",
        description: "Leren verlengen buiten het klaslokaal."
      },
      tisa: {
        title: "TISA",
        tagline: "Tweetalige Internationale School",
        description: "Onderwijs van wereldklasse met een globale visie."
      }
    },
    locations: {
      title: "Vind jouw Dichtstbijzijnde Teddy Kids",
      subtitle: "Meerdere locaties in de regio",
      viewDetails: "Bekijk Details",
      bookTour: "Plan een Rondleiding",
      applyNow: "Meld je Nu Aan",
      openingHours: "Openingstijden",
      contactPerson: "Contactpersoon",
      googleReviews: "Google Reviews"
    },
    team: {
      title: "Ontmoet de Magische Makers",
      subtitle: "De gepassioneerde opvoeders achter Teddy Kids",
      didYouKnow: "Wist je dat?",
      viewBio: "Lees Volledig Profiel",
      members: {
        artem: {
          name: "Artem",
          role: "Directeur",
          funFact: "Altijd één idee vooruit"
        },
        tess: {
          name: "Tess",
          role: "Hoofd Operaties",
          funFact: "Heeft voor alles een spreadsheet"
        },
        jess: {
          name: "Jess",
          role: "Kwaliteitsmanager Onderwijs",
          funFact: "Bedenker van ons TK-regenlied"
        },
        meral: {
          name: "Meral",
          role: "People & Culture",
          funFact: "Bakt prijswinnende koekjes"
        },
        antonela: {
          name: "Antonela",
          role: "Locatiemanager",
          funFact: "Leerde een kind 4 talen vóór zijn 5e"
        },
        pamela: {
          name: "Pamela",
          role: "HR",
          funFact: "Maakt 7 soorten lasagne"
        },
        svetlana: {
          name: "Svetlana",
          role: "Financiën",
          funFact: "Stiekem een puzzelmeester"
        },
        sofia: {
          name: "Sofia",
          role: "Creatief & Evenementen",
          funFact: "Denkt dat glitter een primaire kleur is"
        }
      }
    },
    learningMoments: {
      title: "Leermomenten",
      subtitle: "Korte inzichten van binnen TK",
      readMore: "Lees Meer",
      watchVideo: "Bekijk Video",
      filterBy: "Filter op:",
      categories: {
        bilingual: "Tweetalig",
        empathy: "Empathie",
        stem: "STEM",
        creativity: "Creativiteit",
        all: "Alle Onderwerpen"
      }
    },
    contact: {
      title: "Jouw Reis Begint Hier",
      subtitle: "We kijken ernaar uit om jouw gezin te ontmoeten",
      whatsappButton: "Chat op WhatsApp",
      whatsappMessage: "Hoi Teddy Kids! Ik wil graag een rondleiding boeken voor mijn kind.",
      formName: "Je Naam",
      formEmail: "E-mailadres",
      formChildAge: "Leeftijd van het Kind",
      formMessage: "Je Bericht",
      formSubmit: "Verstuur Bericht",
      thankYou: "Dank je wel! We nemen snel contact op."
    },
    apiePlayground: {
      title: "Apie's Speelplaats",
      subtitle: "Een speciale plek alleen voor kids",
      maelynQuote: "Dit is de aap waarmee het allemaal begon.",
      coloringTitle: "Kleuren met Apie",
      downloadColoring: "Download Kleurplaat",
      listenToApie: "Luister naar Apie",
      secretMessage: "Je hebt de geheime pagina gevonden! Goed gedaan!"
    },
    footer: {
      copyright: "© 2024 Teddy Kids. Alle rechten voorbehouden.",
      privacy: "Privacybeleid",
      terms: "Servicevoorwaarden",
      careers: "Vacatures",
      followUs: "Volg Ons"
    }
  }
};

/**
 * Hook that returns a translation helper `t`.
 *
 * Usage:
 * const { t } = useTranslation('en');
 * t('hero.title') -> "From Baby Steps to Global Citizens"
 */
export const useTranslation = (language: Language = 'en') => {
  const t = useCallback(
    (key: string): string => {
      const keys = key.split('.');
      let value: any = translations[language];

      for (const k of keys) {
        if (value && typeof value === 'object' && k in value) {
          value = value[k];
        } else {
          // Return the key itself if translation is missing
          return key;
        }
      }

      return typeof value === 'string' ? value : key;
    },
    [language]
  );

  return { t, language };
};
