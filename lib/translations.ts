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
    },
    about: {
      metadata: {
        title: "About Us | Teddy Kids",
        description: "Learn about Teddy Kids' mission, history, and vision for bilingual childcare and international education since 2004.",
        keywords: "teddy kids history, teddy kids mission, childcare leiden, international school history, tisa story, bilingual education netherlands",
        alt: "About Teddy Kids - Our Mission and Vision"
      },
      hero: {
        title: "Why Teddy Kids Exists",
        subtitle: "We didn't build another daycare. We built what we wish we had as kids.",
        imageAlt: "Children at Teddy Kids"
      },
      mission: {
        title: "Our Mission",
        paragraph1: "At Teddy Kids, we believe every child deserves an environment where their natural curiosity and joy of learning can flourish. Our mission is to nurture global citizens through bilingual education, play-based learning, and cultural awareness.",
        paragraph2: "We create spaces where children develop confidence in multiple languages, build meaningful relationships, and gain the skills needed to thrive in our interconnected world.",
        paragraph3: "Through our unique approach, we empower children to become compassionate, creative, and critical thinkers who will shape a better future."
      },
      journey: {
        title: "Our Journey",
        timeline: {
          item2004: {
            year: "2004",
            title: "Teddy Kids Opens in Leiden",
            description: "Our first location opens with just 15 children and a vision for bilingual care that would change early education in the Netherlands."
          },
          item2010: {
            year: "2010",
            title: "Expansion to 3rd Location",
            description: "Growing demand leads to our third location, with our unique approach to bilingual education gaining recognition throughout the region."
          },
          item2022: {
            year: "2022",
            title: "Launch of TISA",
            description: "The Teddy International School of Arts (TISA) opens its doors, extending our bilingual approach to primary education."
          },
          item2023: {
            year: "2023",
            title: "TISA Portugal",
            description: "Our international vision grows with the opening of our first location outside the Netherlands, bringing our approach to Lisbon."
          },
          item2024: {
            year: "2024",
            title: "20 Years of Teddy Kids",
            description: "Celebrating two decades of nurturing global citizens, with over 10,000 children having started their educational journey with us."
          }
        }
      },
      future: {
        title: "Our Future",
        paragraph1: "We envision a world where childhood is protected, curiosity is guided, and every child grows up believing they can lead.",
        paragraph2: "In the coming years, we will continue expanding our approach to more communities, bringing bilingual education and our values-based curriculum to children across Europe and beyond.",
        paragraph3: "We're committed to:",
        bulletPoints: [
          "Preserving the magic of childhood in an increasingly digital world",
          "Developing innovative approaches to language acquisition",
          "Building bridges between cultures through education",
          "Creating sustainable learning environments that inspire wonder",
          "Empowering educators who share our passion for childhood"
        ],
        paragraph4: "Together with families, educators, and communities, we're shaping a future where every child has the opportunity to become their best self."
      },
      team: {
        title: "The People Behind Teddy Kids",
        subtitle: "Our passionate team brings diverse expertise and a shared commitment to childhood education.",
        buttonText: "Meet Our Full Team"
      }
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
      title: "Van eerste stapjes tot wereldburgers",
      subtitle:
        "Waar de eerste woordjes van je kind leiden naar een wereld vol mogelijkheden. Tweetalige opvang en internationale school in Leiden.",
      cta1: "Kom langs voor een rondleiding",
      cta2: "Start vandaag met aanmelden"
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
      title: "Wat wij bieden",
      subtitle: "Programma's ontworpen voor elke fase van de kindertijd",
      nursery: {
        title: "Baby-opvang",
        tagline: "Veilige, zachte start",
        description: "Zorgzame opvang voor onze jongste ontdekkers."
      },
      preschool: {
        title: "Peuterklas",
        tagline: "Waar spel betekenis krijgt",
        description: "Fundamenten bouwen door begeleide ontdekking."
      },
      afterSchool: {
        title: "BSO",
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
      bookTour: "Kom langs voor een rondleiding",
      applyNow: "Start vandaag met aanmelden",
      openingHours: "Openingstijden",
      contactPerson: "Contactpersoon",
      googleReviews: "Google Reviews"
    },
    team: {
      title: "Ontmoet de Magische Makers",
      subtitle: "De betrokken opvoeders achter Teddy Kids",
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
          role: "Operationeel Hoofd",
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
    },
    about: {
      metadata: {
        title: "Over Ons | Teddy Kids",
        description: "Ontdek de missie, geschiedenis en visie van Teddy Kids voor tweetalige kinderopvang en internationaal onderwijs sinds 2004.",
        keywords: "teddy kids geschiedenis, teddy kids missie, kinderopvang leiden, internationale school geschiedenis, tisa verhaal, tweetalig onderwijs nederland",
        alt: "Over Teddy Kids - Onze Missie en Visie"
      },
      hero: {
        title: "Waarom Teddy Kids Bestaat",
        subtitle: "We bouwden niet zomaar een kinderdagverblijf. We bouwden wat we zelf als kind hadden willen hebben.",
        imageAlt: "Kinderen bij Teddy Kids"
      },
      mission: {
        title: "Onze Missie",
        paragraph1: "Bij Teddy Kids geloven we dat ieder kind een omgeving verdient waar natuurlijke nieuwsgierigheid en leerplezier kunnen bloeien. Onze missie is het vormen van wereldburgers door tweetalig onderwijs, spelend leren en cultureel bewustzijn.",
        paragraph2: "We creëren ruimtes waar kinderen zelfvertrouwen ontwikkelen in meerdere talen, betekenisvolle relaties opbouwen en vaardigheden verwerven om te gedijen in onze onderling verbonden wereld.",
        paragraph3: "Met onze unieke aanpak helpen we kinderen om meelevende, creatieve en kritische denkers te worden die een betere toekomst zullen vormgeven."
      },
      journey: {
        title: "Onze Reis",
        timeline: {
          item2004: {
            year: "2004",
            title: "Teddy Kids opent in Leiden",
            description: "Onze eerste locatie opent met slechts 15 kinderen en een visie voor tweetalige zorg die het vroege onderwijs in Nederland zou veranderen."
          },
          item2010: {
            year: "2010",
            title: "Uitbreiding naar 3e locatie",
            description: "Groeiende vraag leidt tot onze derde locatie, waarbij onze unieke benadering van tweetalig onderwijs erkenning krijgt in de hele regio."
          },
          item2022: {
            year: "2022",
            title: "Lancering van TISA",
            description: "The Teddy International School of Arts (TISA) opent haar deuren en breidt onze tweetalige aanpak uit naar primair onderwijs."
          },
          item2023: {
            year: "2023",
            title: "TISA Portugal",
            description: "Onze internationale visie groeit met de opening van onze eerste locatie buiten Nederland, waarmee we onze aanpak naar Lissabon brengen."
          },
          item2024: {
            year: "2024",
            title: "20 Jaar Teddy Kids",
            description: "We vieren twee decennia van het vormen van wereldburgers, waarbij meer dan 10.000 kinderen hun educatieve reis bij ons zijn begonnen."
          }
        }
      },
      future: {
        title: "Onze Toekomst",
        paragraph1: "We zien een wereld voor ons waarin de kindertijd wordt beschermd, nieuwsgierigheid wordt begeleid, en elk kind opgroeit in de overtuiging dat het kan leiden.",
        paragraph2: "In de komende jaren blijven we onze aanpak uitbreiden naar meer gemeenschappen, waarbij we tweetalig onderwijs en ons waardengerichte curriculum naar kinderen in heel Europa en daarbuiten brengen.",
        paragraph3: "We zetten ons in voor:",
        bulletPoints: [
          "Het behouden van de magie van de kindertijd in een steeds digitalere wereld",
          "Het ontwikkelen van innovatieve benaderingen voor taalverwerving",
          "Het bouwen van bruggen tussen culturen door onderwijs",
          "Het creëren van duurzame leeromgevingen die verwondering opwekken",
          "Het versterken van opvoeders die onze passie voor de kindertijd delen"
        ],
        paragraph4: "Samen met families, opvoeders en gemeenschappen vormen we een toekomst waarin elk kind de kans heeft om zijn beste zelf te worden."
      },
      team: {
        title: "De Mensen Achter Teddy Kids",
        subtitle: "Ons betrokken team brengt diverse expertise en een gedeelde toewijding aan kinderopvoeding samen.",
        buttonText: "Ontmoet Ons Volledige Team"
      }
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
