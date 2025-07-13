import { useCallback } from 'react';

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
      home: "[NL_TRANSLATION_NEEDED]",
      about: "[NL_TRANSLATION_NEEDED]",
      programs: "[NL_TRANSLATION_NEEDED]",
      locations: "[NL_TRANSLATION_NEEDED]",
      team: "[NL_TRANSLATION_NEEDED]",
      learning: "[NL_TRANSLATION_NEEDED]",
      contact: "[NL_TRANSLATION_NEEDED]"
    },
    hero: {
      title: "[NL_TRANSLATION_NEEDED]",
      subtitle: "[NL_TRANSLATION_NEEDED]",
      cta1: "[NL_TRANSLATION_NEEDED]",
      cta2: "[NL_TRANSLATION_NEEDED]"
    },
    pillars: {
      title: "[NL_TRANSLATION_NEEDED]",
      pillar1: {
        title: "[NL_TRANSLATION_NEEDED]",
        description: "[NL_TRANSLATION_NEEDED]"
      },
      pillar2: {
        title: "[NL_TRANSLATION_NEEDED]",
        description: "[NL_TRANSLATION_NEEDED]"
      },
      pillar3: {
        title: "[NL_TRANSLATION_NEEDED]",
        description: "[NL_TRANSLATION_NEEDED]"
      },
      pillar4: {
        title: "[NL_TRANSLATION_NEEDED]",
        description: "[NL_TRANSLATION_NEEDED]"
      }
    },
    socialProof: {
      title: "[NL_TRANSLATION_NEEDED]",
      subtitle: "[NL_TRANSLATION_NEEDED]",
      review1: {
        quote: "[NL_TRANSLATION_NEEDED]",
        author: "[NL_TRANSLATION_NEEDED]"
      },
      review2: {
        quote: "[NL_TRANSLATION_NEEDED]",
        author: "[NL_TRANSLATION_NEEDED]"
      },
      review3: {
        quote: "[NL_TRANSLATION_NEEDED]",
        author: "[NL_TRANSLATION_NEEDED]"
      },
      trustedBy: "[NL_TRANSLATION_NEEDED]"
    },
    programs: {
      title: "[NL_TRANSLATION_NEEDED]",
      subtitle: "[NL_TRANSLATION_NEEDED]",
      nursery: {
        title: "[NL_TRANSLATION_NEEDED]",
        tagline: "[NL_TRANSLATION_NEEDED]",
        description: "[NL_TRANSLATION_NEEDED]"
      },
      preschool: {
        title: "[NL_TRANSLATION_NEEDED]",
        tagline: "[NL_TRANSLATION_NEEDED]",
        description: "[NL_TRANSLATION_NEEDED]"
      },
      afterSchool: {
        title: "[NL_TRANSLATION_NEEDED]",
        tagline: "[NL_TRANSLATION_NEEDED]",
        description: "[NL_TRANSLATION_NEEDED]"
      },
      tisa: {
        title: "[NL_TRANSLATION_NEEDED]",
        tagline: "[NL_TRANSLATION_NEEDED]",
        description: "[NL_TRANSLATION_NEEDED]"
      }
    },
    locations: {
      title: "[NL_TRANSLATION_NEEDED]",
      subtitle: "[NL_TRANSLATION_NEEDED]",
      viewDetails: "[NL_TRANSLATION_NEEDED]",
      bookTour: "[NL_TRANSLATION_NEEDED]",
      applyNow: "[NL_TRANSLATION_NEEDED]",
      openingHours: "[NL_TRANSLATION_NEEDED]",
      contactPerson: "[NL_TRANSLATION_NEEDED]",
      googleReviews: "[NL_TRANSLATION_NEEDED]"
    },
    team: {
      title: "[NL_TRANSLATION_NEEDED]",
      subtitle: "[NL_TRANSLATION_NEEDED]",
      didYouKnow: "[NL_TRANSLATION_NEEDED]",
      viewBio: "[NL_TRANSLATION_NEEDED]",
      members: {
        artem: {
          name: "Artem",
          role: "[NL_TRANSLATION_NEEDED]",
          funFact: "[NL_TRANSLATION_NEEDED]"
        },
        tess: {
          name: "Tess",
          role: "[NL_TRANSLATION_NEEDED]",
          funFact: "[NL_TRANSLATION_NEEDED]"
        },
        jess: {
          name: "Jess",
          role: "[NL_TRANSLATION_NEEDED]",
          funFact: "[NL_TRANSLATION_NEEDED]"
        },
        meral: {
          name: "Meral",
          role: "[NL_TRANSLATION_NEEDED]",
          funFact: "[NL_TRANSLATION_NEEDED]"
        },
        antonela: {
          name: "Antonela",
          role: "[NL_TRANSLATION_NEEDED]",
          funFact: "[NL_TRANSLATION_NEEDED]"
        },
        pamela: {
          name: "Pamela",
          role: "[NL_TRANSLATION_NEEDED]",
          funFact: "[NL_TRANSLATION_NEEDED]"
        },
        svetlana: {
          name: "Svetlana",
          role: "[NL_TRANSLATION_NEEDED]",
          funFact: "[NL_TRANSLATION_NEEDED]"
        },
        sofia: {
          name: "Sofia",
          role: "[NL_TRANSLATION_NEEDED]",
          funFact: "[NL_TRANSLATION_NEEDED]"
        }
      }
    },
    learningMoments: {
      title: "[NL_TRANSLATION_NEEDED]",
      subtitle: "[NL_TRANSLATION_NEEDED]",
      readMore: "[NL_TRANSLATION_NEEDED]",
      watchVideo: "[NL_TRANSLATION_NEEDED]",
      filterBy: "[NL_TRANSLATION_NEEDED]",
      categories: {
        bilingual: "[NL_TRANSLATION_NEEDED]",
        empathy: "[NL_TRANSLATION_NEEDED]",
        stem: "[NL_TRANSLATION_NEEDED]",
        creativity: "[NL_TRANSLATION_NEEDED]",
        all: "[NL_TRANSLATION_NEEDED]"
      }
    },
    contact: {
      title: "[NL_TRANSLATION_NEEDED]",
      subtitle: "[NL_TRANSLATION_NEEDED]",
      whatsappButton: "[NL_TRANSLATION_NEEDED]",
      whatsappMessage: "[NL_TRANSLATION_NEEDED]",
      formName: "[NL_TRANSLATION_NEEDED]",
      formEmail: "[NL_TRANSLATION_NEEDED]",
      formChildAge: "[NL_TRANSLATION_NEEDED]",
      formMessage: "[NL_TRANSLATION_NEEDED]",
      formSubmit: "[NL_TRANSLATION_NEEDED]",
      thankYou: "[NL_TRANSLATION_NEEDED]"
    },
    apiePlayground: {
      title: "[NL_TRANSLATION_NEEDED]",
      subtitle: "[NL_TRANSLATION_NEEDED]",
      maelynQuote: "[NL_TRANSLATION_NEEDED]",
      coloringTitle: "[NL_TRANSLATION_NEEDED]",
      downloadColoring: "[NL_TRANSLATION_NEEDED]",
      listenToApie: "[NL_TRANSLATION_NEEDED]",
      secretMessage: "[NL_TRANSLATION_NEEDED]"
    },
    footer: {
      copyright: "[NL_TRANSLATION_NEEDED]",
      privacy: "[NL_TRANSLATION_NEEDED]",
      terms: "[NL_TRANSLATION_NEEDED]",
      careers: "[NL_TRANSLATION_NEEDED]",
      followUs: "[NL_TRANSLATION_NEEDED]"
    }
  }
};

export const useTranslation = (language: Language = 'en') => {
  const t = useCallback(
    (key: string) => {
      // Split the key by dots to access nested properties
      const keys = key.split('.');
      let value: any = translations[language];
      
      // Navigate through the nested properties
      for (const k of keys) {
        if (value && value[k]) {
          value = value[k];
        } else {
          // If key doesn't exist, return the key itself
          return key;
        }
      }
      
      return value;
    },
    [language]
  );

  return { t, language };
};
