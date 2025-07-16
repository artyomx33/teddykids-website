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
    /* New: Why Teddy Kids teaser (Home page) */
    whyTeddyKids: {
      title: "Why Teddy Kids Exists",
      subtitle: "We didn't build another daycare. We built what we wish we had as kids."
    },
    /* New: Begin Your Journey (CTA footer segment) */
    beginYourJourney: {
      title: "Begin Your Journey",
      subtitle: "Ready to take the first step?"
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
    /* ──────────────────────────────────────────────────────────
     *  FULL PROGRAMS PAGE ( /programs )
     * ────────────────────────────────────────────────────────── */
    programsPage: {
      hero: {
        /* Luna upgrade */
        title: "From First Steps to Big Leaps",
        subtitle:
          "Discover how each Teddy Kids program grows with your child — through love, language, and purposeful play."
      },
      sections: {
        nursery: {
          title: "Nursery",
          tagline: "Safe, soft beginnings",
          blurb:
            "From tiny snoozes to big first steps—our littlest ones are held, heard, and loved in two languages.",
          agesLabel: "Ages",
          ages: "3 months – 2.5 years",
          scheduleTitle: "Weekly Schedule",
          scheduleItems: [
            { day: "Monday - Friday", hours: "7:30 - 18:30" },
            { day: "Half days available", hours: "7:30 - 13:00 or 13:00 - 18:30" },
            { day: "Minimum days", hours: "2 days per week" }
          ],
          quote:
            "Our daughter has been thriving at the nursery. The bilingual approach is amazing – she's already using words in both languages!",
          quoteAuthor: "Emma & James, Parents",
          /* Luna upgrade */
          button: "See how we welcome our littlest ones"
        },
        preschool: {
          title: "Teddy Learners",
          tagline: "Play + Learn",
          blurb:
            "Where stories, songs, and science spark wonder every day.",
          agesLabel: "Ages",
          ages: "2.5 – 4 years",
          scheduleTitle: "Weekly Schedule",
          scheduleItems: [
            { day: "Monday - Friday", hours: "7:30 - 18:30" },
            { day: "Half days available", hours: "7:30 - 13:00 or 13:00 - 18:30" },
            { day: "Minimum days", hours: "2 days per week" }
          ],
          quote:
            "The preschool program has given our son such confidence. He's speaking both Dutch and English, and his social skills have blossomed.",
          quoteAuthor: "Sophia K., Mother",
          /* Luna upgrade */
          button: "Explore how play becomes purpose"
        },
        afterSchool: {
          title: "Teddy BSO Explorers",
          tagline: "Adventures after the bell",
          blurb:
            "Adventures continue long after the bell. Our clubs inspire confidence, creativity, and community.",
          agesLabel: "Ages",
          ages: "4 – 12 years",
          scheduleTitle: "Weekly Schedule",
          scheduleItems: [
            { day: "Monday - Friday", hours: "After school - 18:30" },
            { day: "School holidays", hours: "7:30 - 18:30 (full day)" },
            { day: "Study days", hours: "7:30 - 18:30 (full day)" }
          ],
          quote:
            "The after-school program has been a lifesaver for our family. Our children get to continue their bilingual journey while having fun with friends.",
          quoteAuthor: "Thomas & Julie, Parents of twins",
          /* Luna upgrade */
          button: "Discover our afternoon adventures"
        },
        tisa: {
          title: "TISA",
          tagline: "International education close to home",
          blurb:
            "An international education—right around the corner. Small classes, big hearts, bilingual minds.",
          agesLabel: "Ages",
          ages: "4 – 12 years (Primary education)",
          scheduleTitle: "Weekly Schedule",
          scheduleItems: [
            { day: "Monday - Friday", hours: "8:30 - 15:00" },
            { day: "After school care", hours: "15:00 - 18:30 (optional)" },
            { day: "Early drop-off", hours: "From 7:30 (optional)" }
          ],
          quote:
            "TISA has been transformational for our children. The international curriculum and caring teachers make this place special.",
          quoteAuthor: "Miguel & Ling, TISA Parents",
          /* Luna upgrade */
          button: "Step into our bilingual international school"
        }
      },
      comparison: {
        title: "Compare Our Programs",
        feature: "Feature",
        columns: {
          nursery: "Nursery",
          preschool: "Preschool",
          afterSchool: "After School",
          tisa: "TISA"
        },
        rows: {
          bilingual: "Bilingual",
          meals: "Meals Included",
          openYear: "Open Year-Round",
          groupSize: "Group Size",
          curriculum: "Curriculum",
          sensoryPlay: "Sensory Play",
          thematicInquiry: "Thematic Inquiry",
          creativeClubs: "Creative Clubs",
          international: "International IPC/IB"
        }
      },
      cta: {
        title: "Let's find the perfect fit—together.",
        subtitle:
          "Every family has different needs. Our team is here to help you choose the right path.",
        bookTour: "Book a Tour",
        applyNow: "Apply Now"
      },
      metadata: {
        title: "Our Programs | Teddy Kids",
        description:
          "From diapers to diplomas, our programs are designed for joy, growth, and global thinking. Discover our nursery, preschool, after school, and TISA programs.",
        keywords:
          "teddy kids programs, nursery, preschool, after school, TISA, international school, bilingual education, leiden"
      }
    },
    /* ──────────────────────────────────────────────────────────
     *  FULL LOCATIONS PAGE ( /locations )
     * ────────────────────────────────────────────────────────── */
    locationsPage: {
      hero: {
        title: "Find Your Nearest Teddy Kids",
        subtitle: "Across Leiden, our locations offer the same loving care, bilingual approach, and joyful environments—with each team bringing its own energy."
      },
      map: {
        title: "Map of Teddy Kids Locations",
        locationsCount: "5 Locations Worldwide",
        interactiveMapComing: "Interactive Map Coming Soon"
      },
      filters: {
        title: "Filter by:",
        all: "All Locations",
        leiden: "Leiden",
        oegstgeest: "Oegstgeest",
        international: "International"
      },
      locations: {
        rbw: {
          title: "RBW – Rijnsburgerweg 35",
          description: "Our original TK location—where it all began. A warm, nurturing space for our youngest learners.",
          address: "Address:",
          openingHours: "Opening Hours:",
          days: {
            monday: "Monday:",
            tuesday: "Tuesday:",
            wednesday: "Wednesday:",
            thursday: "Thursday:",
            friday: "Friday:",
            weekend: "Weekend:"
          },
          closed: "Closed",
          contactPerson: "Contact Person:",
          siteLeader: "Site Leader",
          googleReviews: "Google Reviews:",
          quote: "RBW is like family. They made our daughter feel at home from day one.",
          bookTour: "Book a Tour",
          applyNow: "Apply Now"
        },
        rb35: {
          title: "RB3/RB5 – Rijnsburgerweg 3 & 5",
          description: "A dynamic, dual-building hub with spaces for both young children and school-aged adventurers.",
          quote: "The after-school activities here are so creative—our son never wants to leave!"
        },
        lrz: {
          title: "LRZ – Lorentzkade 15a",
          description: "Home to both our bilingual after-school care and the international TISA program, all in one inspiring space.",
          quote: "The staff at Lorentzkade are amazing—our daughter loves both TK and her new TISA class."
        },
        zml: {
          title: "ZML – Zeemanlaan 22a",
          description: "A cozy, creative setting where little ones explore, play, and thrive in a close-knit environment.",
          quote: "ZML is magical. The environment is peaceful, clean, and full of laughter."
        },
        tisaPortugal: {
          title: "TISA Portugal",
          description: "Our international campus in sunny Portugal",
          quote: "Moving to Portugal was made so much easier knowing our children had a familiar educational environment at TISA."
        }
      },
      tisa: {
        title: "TISA – Our International Schools",
        description: "Teddy Kids also proudly operates two bilingual international schools under the TISA brand—designed for curious minds ready to take on the world.",
        netherlands: {
          description: "Bilingual international primary school in Leiden.",
          button: "Visit TISA Netherlands"
        },
        portugal: {
          description: "Our sunny international campus in Lisbon.",
          button: "Visit TISA Portugal"
        }
      },
      transportation: {
        title: "Getting to Teddy Kids",
        publicTransport: {
          title: "Public Transportation",
          items: [
            "All our Leiden locations are within 10–15 minutes from Leiden Centraal Station by bus",
            "Bus lines 1, 3, and 4 serve our various locations"
          ]
        },
        parking: {
          title: "Parking & Bicycles",
          items: [
            "All locations have dedicated drop-off/pick-up parking spaces",
            "Covered bicycle parking available at every location",
            "Stroller storage available inside each building"
          ]
        },
        specialServices: {
          title: "Special Transportation Services",
          description: "For our TISA and After School programs, we offer transportation services between participating schools and our locations. Please inquire for specific routes and availability.",
          button: "Ask about transportation options"
        }
      },
      cta: {
        title: "Ready to Visit a Location?",
        subtitle: "Schedule a tour at your preferred location to see our facilities, meet our team, and experience the Teddy Kids difference firsthand.",
        bookTour: "Book a Tour",
        applyNow: "Apply Now"
      },
      /* ──────────────────────────────────────────────────────────
       *  APPLY PAGE ( /apply )
       * ────────────────────────────────────────────────────────── */
      applyPage: {
        hero: {
          title: "Your journey with Teddy Kids begins here.",
          subtitle: "We've made the first step simple, warm, and stress-free—just like everything else we do."
        },
        audio: {
          label: "Hear from a parent who just applied",
          quote: "It was honestly easier than I thought. They called me the next day. It felt human."
        },
        steps: {
          programSelection: "Program Selection",
          location: "Location",
          startDate: "Start Date",
          yourDetails: "Your Details",
          confirm: "Confirm"
        },
        form: {
          programSection: {
            heading: "Where would your child feel most at home?",
            options: {
              nursery: { title: "Nursery", ages: "Ages: 3 months - 2.5 years" },
              preschool: { title: "Teddy Learners", ages: "Ages: 2 - 4 years" },
              afterschool: { title: "Teddy BSO Explorers", ages: "Ages: 4 - 12 years" }
            },
            tisaNote: "Looking for international primary school? Visit TISA ➝"
          },
          location: "Location",
          startDate: "Start Date",
          yourDetails: "Your Details",
          confirm: "Confirm"
        },
        ctaFooter: {
          line1: "You don't need to have it all figured out. Just let us know you're interested.",
          line2: "We'll take care of the rest—with care, clarity, and a little Teddy magic.",
          begin: "Begin My Teddy Journey",
          talk: "Talk to a Teddicated Human"
        },
        metadata: {
          title: "Teddy Kids | From Baby Steps to Global Citizens"
        }
      },
      metadata: {
        title: "Our Locations | Teddy Kids",
        description: "Find your nearest Teddy Kids location. Multiple locations throughout Leiden, Oegstgeest, and international campuses offering bilingual childcare and education.",
        keywords: "teddy kids locations, childcare leiden, preschool oegstgeest, TISA portugal, international school locations, bilingual daycare netherlands",
        alt: "Teddy Kids Locations - Find your nearest center"
      }
    },
    /* ──────────────────────────────────────────────────────────
     *  TEAM PAGE ( /team )
     * ────────────────────────────────────────────────────────── */
    teamPage: {
      hero: {
        title: "Meet the Magic Makers",
        subtitle: "The passionate educators and staff who bring the Teddy Kids vision to life every day."
      },
      philosophy: {
        title: "Our Team Philosophy",
        paragraph1: "At Teddy Kids, we believe that our team is our greatest asset. We bring together passionate educators from diverse backgrounds who share a common commitment to childhood development and bilingual education.",
        paragraph2: "We invest in continuous professional development, ensuring our team stays at the forefront of early childhood education. This commitment to excellence translates into innovative, responsive care for every child at Teddy Kids."
      },
      members: {
        didYouKnow: "Did You Know?",
        artem: {
          role: "Founder & Vision Architect",
          funFact: "Good morning team — remember, chaos is just creativity in disguise."
        },
        tess: {
          role: "Executive Daycare Whisperer",
          funFact: "I don't just solve problems… I predict them."
        },
        jess: {
          role: "Chaos Containment Officer – RBW",
          funFact: "I did inventory, budgeting, and found a lost sock. All before 9 am."
        },
        meral: {
          role: "SMO – Smile Management Officer – ZML",
          funFact: "We are out of glitter again. That's either good or very bad."
        },
        antonela: {
          role: "Office & LRZ BSO Commander-in-Flow",
          funFact: "If something's missing… it's already on my list."
        },
        pamela: {
          role: "BSO & After School Ops",
          funFact: "Children listen. Adults try. I smile… and carry on."
        },
        svetlana: {
          role: "ZML Pediatric Heart & Hug Coordinator",
          funFact: "I carry plasters and glitter. Both make magic."
        },
        sofia: {
          role: "RBW Location Energy Manager",
          funFact: "I planned a wedding and a weekly roster in the same weekend."
        },
        els: {
          role: "Teddy Grandmother & Poffertjes Queen",
          funFact: "I bring the smiles, the giggles… and the poffertjes."
        }
      },
      locations: {
        title: "The Heart of Every Location",
        rbw: "From baby giggles to bilingual play, the RBW crew is where Teddy Kids began—and the love still flows strong.",
        rb35: "This powerhouse team blends care with curiosity—where toddlers become thinkers, and after-schoolers become adventurers.",
        lrz: "From art corners to bilingual science talks, the Lorentzkade crew nurtures thinkers from afternoon play to global dreams.",
        zml: "Joyful, gentle, and full of laughter—Zeemanlaan's youngest stars get the best start in the most caring hands."
      },
      tisa: {
        title: "Looking for international schooling?",
        button: "Visit TISA"
      },
      values: {
        title: "Our Shared Values",
        value1: {
          title: "Child-Centered Approach",
          description: "We place children at the heart of everything we do, respecting their unique personalities, interests, and developmental journeys."
        },
        value2: {
          title: "Global Mindset",
          description: "We embrace cultural diversity and foster understanding across languages and traditions to prepare children for our interconnected world."
        },
        value3: {
          title: "Continuous Learning",
          description: "We're committed to ongoing professional development and innovation in early childhood education practices."
        },
        value4: {
          title: "Collaborative Spirit",
          description: "We work as a unified team across all locations, sharing knowledge and supporting each other to provide the best care."
        },
        value5: {
          title: "Growth Mindset",
          description: "We believe in the potential of every child and colleague, nurturing development through encouragement and positive feedback."
        },
        value6: {
          title: "Excellence in Care",
          description: "We maintain the highest standards in everything from educational practices to safety protocols and facility management."
        }
      },
      joinTeam: {
        title: "Join Our Team",
        description: "Passionate about early childhood education? Interested in working in a bilingual, international environment? We're always looking for talented educators to join our growing family.",
        button: "View Career Opportunities"
      }
    },
    locations: {
      title: "Find Your Nearest Teddy Kids",
      subtitle: "Multiple locations throughout the region",
      viewAll: "View All Locations",
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
      },
      /* ─── Runtime Messages & CTA ─── */
      noResults: "No learning moments found with this filter. Try another category!",
      showAll: "Show All Moments",
      ctaTitle:
        "What if your child's most powerful learning moment… was happening today—and you didn't see it?",
      ctaSubtitle:
        "Let us show you how brilliance hides in snack time, sandboxes, and squishy socks.",
      ctaPrimary: "See It Firsthand",
      ctaSecondary: "Book a 20-Minute Tour That Might Change Everything"
    },
    contact: {
      title: "Your Journey Starts Here",
      subtitle: "We're excited to meet your family",
      /* ─── Luna Upgrades ─── */
      getInTouch: "Get in Touch",
      loveToHear: "We'd love to hear from you!",
      email: "Email",
      phone: "Phone",
      quickResponse: "Quick Response?",
      responseTime: "We typically respond within 24 hours during business days.",
      thankYouTitle: "Thank You!",
      sendAnother: "Send Another Message",
      namePlaceholder: "John Doe",
      emailPlaceholder: "john@example.com",
      agePlaceholder: "3 years",
      messagePlaceholder: "I'd like to learn more about…",
      processing: "Processing...",
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
      /* ───── Header ───── */
      title: "Apie's Playground",
      subtitle: "Welcome to Apie's secret banana paradise! Color, play, and have fun!",

      /* ───── Sound Button ───── */
      playSound: "Play Jungle Sounds",

      /* ───── Coloring UI ───── */
      coloringTitle: "Coloring Time!",
      clearColors: "Clear All Colors",

      /* ───── Banana Puns ───── */
      punsTitle: "Banana Puns",
      defaultJoke: "Why did the banana go to the doctor? Because it wasn't peeling well!",
      anotherJoke: "Tell Me Another Banana Joke!",

      /* ───── Fun Activities ───── */
      activitiesTitle: "Fun Activities",

      bananaDance: {
        title: "Banana Dance",
        intro: "Follow these steps to do the banana dance:",
        steps: [
          "Stand up straight like a banana",
          "Bend to the left, like a curvy banana",
          "Bend to the right, even more curvy!",
          "Spin around and peel yourself!",
          "Jump up and shout 'BANANA!'"
        ]
      },

      /* ───── Monkey See, Monkey Do ───── */
      monkeySee: {
        title: "Monkey See, Monkey Do",
        subtitle: "Can you act like these animals?",
        animals: [
          "🐒 Monkey: Make monkey sounds and scratch your head",
          "🦁 Lion: Roar loudly and show your claws",
          "🐘 Elephant: Make your arm like a trunk and trumpet",
          "🦒 Giraffe: Stretch your neck up tall",
          "🐸 Frog: Hop around and say 'ribbit ribbit'"
        ]
      },

      /* ───── Footer CTA ───── */
      backCTA: "Back to Teddy Kids"
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
        title: "Teddy Baby",
        tagline: "Veilige, zachte start",
        description: "Zorgzame opvang voor onze jongste ontdekkers."
      },
      preschool: {
        title: "Teddy Learners",
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
    /* ──────────────────────────────────────────────────────────
     *  VOLLEDIGE PROGRAMMA-PAGINA ( /programs )
     * ────────────────────────────────────────────────────────── */
    programsPage: {
      hero: {
        title: "Van Eerste Stapjes tot Grote Sprongen",
        subtitle:
          "Ontdek hoe elk Teddy Kids programma meegroeit met je kind — door liefde, taal en betekenisvol spel."
      },
      sections: {
        nursery: {
          title: "Teddy Baby",
          tagline: "Veilige, zachte start",
          blurb:
            "Van dutjes tot eerste stapjes—onze allerkleinsten worden gehoord, gekoesterd en geliefd in twee talen.",
          agesLabel: "Leeftijd",
          ages: "3 maanden – 2,5 jaar",
          scheduleTitle: "Weekplanning",
          scheduleItems: [
            { day: "Maandag t/m vrijdag", hours: "7:30 - 18:30" },
            { day: "Halve dagen mogelijk", hours: "7:30 - 13:00 of 13:00 - 18:30" },
            { day: "Minimaal aantal dagen", hours: "2 dagen per week" }
          ],
          quote:
            "Onze dochter bloeit helemaal op bij Teddy Baby. De tweetalige aanpak is geweldig – ze gebruikt nu al woorden in beide talen!",
          quoteAuthor: "Emma & James, Ouders",
          button: "Zie hoe we onze allerkleinsten verwelkomen"
        },
        preschool: {
          title: "Teddy Learners",
          tagline: "Speel & Leer",
          blurb:
            "Waar verhalen, liedjes en ontdekkingen elke dag verwondering oproepen.",
          agesLabel: "Leeftijd",
          ages: "2,5 – 4 jaar",
          scheduleTitle: "Weekplanning",
          scheduleItems: [
            { day: "Maandag t/m vrijdag", hours: "7:30 - 18:30" },
            { day: "Halve dagen mogelijk", hours: "7:30 - 13:00 of 13:00 - 18:30" },
            { day: "Minimaal aantal dagen", hours: "2 dagen per week" }
          ],
          quote:
            "Teddy Learners heeft ons zoontje enorm zelfvertrouwen gegeven. Hij spreekt nu Nederlands én Engels en is sociaal enorm gegroeid.",
          quoteAuthor: "Sophia K., Moeder",
          button: "Ontdek hoe spel betekenis krijgt"
        },
        afterSchool: {
          title: "Teddy BSO Explorers",
          tagline: "Avonturen na de bel",
          blurb:
            "Avonturen gaan verder na de schoolbel. Onze clubs stimuleren zelfvertrouwen, creativiteit en verbondenheid.",
          agesLabel: "Leeftijd",
          ages: "4 – 12 jaar",
          scheduleTitle: "Weekplanning",
          scheduleItems: [
            { day: "Maandag t/m vrijdag", hours: "Na school - 18:30" },
            { day: "Schoolvakanties", hours: "7:30 - 18:30 (hele dag)" },
            { day: "Studiedagen", hours: "7:30 - 18:30 (hele dag)" }
          ],
          quote:
            "Teddy BSO is een uitkomst voor ons gezin. Onze kinderen zetten hun tweetalige avontuur voort én hebben plezier met vrienden.",
          quoteAuthor: "Thomas & Julie, Ouders van een tweeling",
          button: "Verken onze middag avonturen"
        },
        tisa: {
          title: "TISA",
          tagline: "Internationaal onderwijs om de hoek",
          blurb:
            "Internationaal onderwijs—gewoon om de hoek. Kleine klassen, grote harten, tweetalige geesten.",
          agesLabel: "Leeftijd",
          ages: "4 – 12 jaar (basisonderwijs)",
          scheduleTitle: "Weekplanning",
          scheduleItems: [
            { day: "Maandag t/m vrijdag", hours: "8:30 - 15:00" },
            { day: "Naschoolse opvang", hours: "15:00 - 18:30 (optioneel)" },
            { day: "Vroege inloop", hours: "Vanaf 7:30 (optioneel)" }
          ],
          quote:
            "TISA heeft een wereld van verschil gemaakt voor onze kinderen. Het internationale programma en de liefdevolle docenten maken het echt bijzonder.",
          quoteAuthor: "Miguel & Ling, Ouders bij TISA",
          button: "Stap binnen in onze tweetalige internationale school"
        }
      },
      comparison: {
        title: "Vergelijk onze programma's",
        feature: "Kenmerk",
        columns: {
          nursery: "Teddy Baby",
          preschool: "Teddy Learners",
          afterSchool: "BSO",
          tisa: "TISA"
        },
        rows: {
          bilingual: "Tweetalig",
          meals: "Maaltijden inbegrepen",
          openYear: "Gehele jaar geopend",
          groupSize: "Groepsgrootte",
          curriculum: "Leerprogramma",
          sensoryPlay: "Spel met al je zintuigen",
          thematicInquiry: "Thematisch onderzoek",
          creativeClubs: "Creatieve clubs",
          international: "Internationaal IPC/IB"
        }
      },
      cta: {
        title: "Laten we samen de perfecte match vinden.",
        subtitle:
          "Elke familie is anders. Ons team helpt je graag bij het vinden van het juiste traject.",
        bookTour: "Plan een rondleiding",
        applyNow: "Aanmelden"
      },
      metadata: {
        title: "Onze Programma's | Teddy Kids",
        description:
          "Van luiers tot diploma's: ontdek Teddy Baby, Teddy Learners, Teddy BSO Explorers en TISA. Programma's vol vreugde, groei en wereldse blik.",
        keywords:
          "teddy kids programma's, teddy baby, teddy learners, bso explorers, TISA, internationale school, tweetalig onderwijs, leiden"
      }
    },
    /* ──────────────────────────────────────────────────────────
     *  VOLLEDIGE LOCATIES-PAGINA ( /locations )
     * ────────────────────────────────────────────────────────── */
    locationsPage: {
      hero: {
        title: "Vind jouw dichtstbijzijnde Teddy Kids",
        subtitle: "In heel Leiden bieden onze locaties dezelfde liefdevolle zorg, tweetalige aanpak en vrolijke sfeer—met elk team dat z'n eigen energie meebrengt."
      },
      map: {
        title: "Kaart van Teddy Kids locaties",
        locationsCount: "5 locaties wereldwijd",
        interactiveMapComing: "Interactieve kaart binnenkort beschikbaar"
      },
      filters: {
        title: "Filter op:",
        all: "Alle locaties",
        leiden: "Leiden",
        oegstgeest: "Oegstgeest",
        international: "Internationaal"
      },
      locations: {
        rbw: {
          title: "RBW – Rijnsburgerweg 35",
          description: "Onze allereerste locatie—waar alles begon. Een warme, zorgzame plek voor onze jongste Teddy's.",
          address: "Adres:",
          openingHours: "Openingstijden:",
          days: {
            monday: "Maandag:",
            tuesday: "Dinsdag:",
            wednesday: "Woensdag:",
            thursday: "Donderdag:",
            friday: "Vrijdag:",
            weekend: "Weekend:"
          },
          closed: "Gesloten",
          contactPerson: "Contactpersoon:",
          siteLeader: "Locatiehoofd",
          googleReviews: "Google Beoordelingen:",
          quote: "RBW voelt als familie. Ze lieten onze dochter zich vanaf dag één thuis voelen.",
          bookTour: "Plan een rondleiding",
          applyNow: "Aanmelden"
        },
        rb35: {
          title: "RB3/RB5 – Rijnsburgerweg 3 & 5",
          description: "Een dynamisch dubbelpand met ruimte voor zowel jonge kinderen als schoolgaande avonturiers.",
          quote: "De naschoolse activiteiten zijn zo creatief—onze zoon wil nooit meer naar huis!"
        },
        lrz: {
          title: "LRZ – Lorentzkade 15a",
          description: "Thuisbasis voor zowel onze tweetalige naschoolse opvang als het internationale TISA-programma—allemaal onder één inspirerend dak.",
          quote: "Het team op Lorentzkade is geweldig—onze dochter is dol op zowel TK als haar TISA-klas."
        },
        zml: {
          title: "ZML – Zeemanlaan 22a",
          description: "Een knusse, creatieve plek waar kleintjes ontdekken, spelen en groeien in een vertrouwde omgeving.",
          quote: "ZML is magisch. De sfeer is rustig, schoon en vol gelach."
        },
        tisaPortugal: {
          title: "TISA Portugal",
          description: "Ons internationale campus in het zonnige Portugal",
          quote: "Verhuizen naar Portugal werd zoveel makkelijker doordat onze kinderen terecht konden in een vertrouwde leeromgeving bij TISA."
        }
      },
      tisa: {
        title: "TISA – Onze Internationale Scholen",
        description: "Teddy Kids runt met trots twee tweetalige internationale scholen onder het TISA-label—voor nieuwsgierige denkers die klaar zijn om de wereld te verkennen.",
        netherlands: {
          description: "Tweetalige internationale basisschool in Leiden.",
          button: "Bezoek TISA Nederland"
        },
        portugal: {
          description: "Onze zonnige internationale campus in Lissabon.",
          button: "Bezoek TISA Portugal"
        }
      },
      transportation: {
        title: "Bereikbaarheid van Teddy Kids",
        publicTransport: {
          title: "Openbaar vervoer",
          items: [
            "Al onze Leidse locaties liggen op 10–15 minuten van station Leiden Centraal met de bus",
            "Buslijnen 1, 3 en 4 stoppen bij onze locaties"
          ]
        },
        parking: {
          title: "Parkeren & fietsen",
          items: [
            "Elke locatie heeft eigen parkeergelegenheid voor halen & brengen",
            "Overdekte fietsenstalling bij elke locatie beschikbaar",
            "Kinderwagenstalling aanwezig in elk gebouw"
          ]
        },
        specialServices: {
          title: "Speciale vervoersdiensten",
          description: "Voor onze TISA- en naschoolse programma's bieden we vervoer tussen deelnemende scholen en onze locaties. Vraag gerust naar de routes en beschikbaarheid.",
          button: "Vraag naar de vervoersmogelijkheden"
        }
      },
      cta: {
        title: "Klaar om een locatie te bezoeken?",
        subtitle: "Plan een rondleiding op jouw gewenste locatie, bekijk onze ruimtes, ontmoet het team en ervaar zelf het Teddy Kids-gevoel.",
        bookTour: "Plan een rondleiding",
        applyNow: "Aanmelden"
      },
      /* ──────────────────────────────────────────────────────────
       *  AANMELDEN-PAGINA ( /apply )
       * ────────────────────────────────────────────────────────── */
      applyPage: {
        hero: {
          title: "Jullie avontuur bij Teddy Kids begint hier.",
          subtitle: "De eerste stap is eenvoudig, warm en zonder stress—net als alles bij Teddy Kids."
        },
        audio: {
          label: "Luister naar een ouder die zich net heeft aangemeld",
          quote: "Het ging veel makkelijker dan ik dacht. De volgende dag werd ik al gebeld. Het voelde persoonlijk en oprecht."
        },
        steps: {
          programSelection: "Kies een programma",
          location: "Voorkeurslocatie",
          startDate: "Gewenste startdatum",
          yourDetails: "Jouw gegevens",
          confirm: "Bevestigen"
        },
        form: {
          programSection: {
            heading: "Waar zou jouw kind zich het meest thuis voelen?",
            options: {
              nursery: { title: "Teddy Baby", ages: "Leeftijd: 3 maanden – 2,5 jaar" },
              preschool: { title: "Teddy Learners", ages: "Leeftijd: 2 – 4 jaar" },
              afterschool: { title: "Teddy BSO Explorers", ages: "Leeftijd: 4 – 12 jaar" }
            },
            tisaNote: "Zoek je internationaal basisonderwijs? Bezoek TISA ➝"
          },
          location: "Voorkeurslocatie",
          startDate: "Wanneer zou je willen beginnen?",
          yourDetails: "Jouw gegevens",
          confirm: "Bevestigen"
        },
        ctaFooter: {
          line1: "Je hoeft het nog niet allemaal zeker te weten. Laat ons gewoon weten dat je interesse hebt.",
          line2: "Wij zorgen voor de rest—met aandacht, duidelijkheid en een vleugje Teddy-magie.",
          begin: "Begin mijn Teddy-reis",
          talk: "Praat met een Teddy-teamlid"
        },
        metadata: {
          title: "Teddy Kids | Van eerste stapjes tot wereldburgers"
        }
      },
      metadata: {
        title: "Onze Locaties | Teddy Kids",
        description: "Vind jouw dichtstbijzijnde Teddy Kids locatie. Meerdere vestigingen in Leiden, Oegstgeest en internationale campussen met tweetalige kinderopvang en onderwijs.",
        keywords: "teddy kids locaties, kinderopvang leiden, peuterspeelzaal oegstgeest, TISA portugal, internationale school locaties, tweetalige kinderopvang nederland",
        alt: "Teddy Kids Locaties - Vind jouw dichtstbijzijnde centrum"
      }
    },
    /* ──────────────────────────────────────────────────────────
     *  TEAM PAGINA ( /team )
     * ────────────────────────────────────────────────────────── */
    teamPage: {
      hero: {
        title: "Maak kennis met de Teddy-helden",
        subtitle: "De bevlogen begeleiders en medewerkers die elke dag de visie van Teddy Kids tot leven brengen."
      },
      philosophy: {
        title: "Onze teamfilosofie",
        paragraph1: "Bij Teddy Kids geloven we dat ons team onze grootste kracht is. We brengen bevlogen opvoeders uit diverse achtergronden samen, met een gedeelde toewijding aan kindontwikkeling en tweetalig onderwijs.",
        paragraph2: "We investeren in voortdurende professionele groei, zodat ons team voorop blijft lopen in het kleuteronderwijs. Deze toewijding aan kwaliteit vertaalt zich in innovatieve, afgestemde zorg voor elk kind bij Teddy Kids."
      },
      members: {
        didYouKnow: "Wist je dat?",
        artem: {
          role: "Oprichter & Visie-Architect",
          funFact: "Goedemorgen team — chaos is gewoon creativiteit in vermomming."
        },
        tess: {
          role: "Directeur van Alles & Kinderfluisteraar",
          funFact: "Ik los problemen niet alleen op… ik voorspel ze."
        },
        jess: {
          role: "Chaosbeheerser – RBW",
          funFact: "Ik deed voorraadbeheer, budgettering én vond een verloren sok. Voor 9 uur."
        },
        meral: {
          role: "SMO – Smile Manager – ZML",
          funFact: "We hebben weer geen glitter. Dat is óf goed, óf heel slecht."
        },
        antonela: {
          role: "Office & LRZ BSO Flowcommandant",
          funFact: "Als er iets mist… staat het al op mijn lijstje."
        },
        pamela: {
          role: "BSO & Buitenschoolse Operaties",
          funFact: "Kinderen luisteren. Volwassenen proberen. Ik glimlach… en ga door."
        },
        svetlana: {
          role: "ZML Kinderhart & Knuffelcoördinator",
          funFact: "Ik draag pleisters en glitter. Allebei maken magie."
        },
        sofia: {
          role: "Locatie-energiebeheerder RBW",
          funFact: "Ik plande een bruiloft én een weekrooster in hetzelfde weekend."
        },
        els: {
          role: "Teddy Grootmoeder & Poffertjes Koningin",
          funFact: "Ik breng de glimlachjes, het gegiechel… en de poffertjes."
        }
      },
      locations: {
        title: "Het hart van elke locatie",
        rbw: "Van babygelach tot tweetalig spel: bij RBW begon het allemaal—en de liefde stroomt nog steeds.",
        rb35: "Dit powerteam combineert zorgzaamheid met nieuwsgierigheid—waar peuters denkers worden, en BSO'ers avonturiers.",
        lrz: "Van knutselhoeken tot tweetalige wetenschapssessies: het team op Lorentzkade voedt denkers—van spel tot wereldvisie.",
        zml: "Vrolijk, zacht en vol gelach—de jongste sterren van Zeemanlaan krijgen de beste start in de meest liefdevolle handen."
      },
      tisa: {
        title: "Op zoek naar internationaal onderwijs?",
        button: "Bezoek TISA"
      },
      values: {
        title: "Onze gedeelde waarden",
        value1: {
          title: "Kindgericht werken",
          description: "We zetten het kind centraal in alles wat we doen, met respect voor hun unieke karakter, interesses en ontwikkelpad."
        },
        value2: {
          title: "Wereldse blik",
          description: "We omarmen culturele diversiteit en bouwen bruggen tussen talen en tradities, zodat kinderen klaar zijn voor een verbonden wereld."
        },
        value3: {
          title: "Blijven leren",
          description: "We investeren continu in professionele groei en innovatie in het kleuteronderwijs."
        },
        value4: {
          title: "Samenwerking",
          description: "We werken als één team over alle locaties heen—delen kennis, ondersteunen elkaar en bieden samen de beste zorg."
        },
        value5: {
          title: "Groeimindset",
          description: "We geloven in het groeipotentieel van elk kind én elke collega—en stimuleren ontwikkeling met aanmoediging en positieve feedback."
        },
        value6: {
          title: "Zorg met kwaliteit",
          description: "We hanteren de hoogste standaarden—van onderwijs tot veiligheid en faciliteiten."
        }
      },
      joinTeam: {
        title: "Sluit je aan bij ons team",
        description: "Heb jij een passie voor de vroege kindertijd? Wil je werken in een tweetalige, internationale omgeving? Wij zijn altijd op zoek naar talentvolle begeleiders die onze Teddy-familie komen versterken.",
        button: "Bekijk onze vacatures... en sluit je aan!"
      }
    },
    locations: {
      title: "Vind jouw Dichtstbijzijnde Teddy Kids",
      subtitle: "Meerdere locaties in de regio",
      viewAll: "Bekijk alle locaties",
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
      },
      /* ─── Runtime Messages & CTA ─── */
      noResults:
        "Geen leermomenten gevonden met dit filter. Probeer een andere categorie!",
      showAll: "Toon Alle Momenten",
      ctaTitle:
        "Wat als jouw kind's krachtigste leermoment… vandaag gebeurde—en je het niet zag?",
      ctaSubtitle:
        "Laat ons je tonen hoe genialiteit zich verstopt in snacktijd, zandbakken en zachte sokjes.",
      ctaPrimary: "Zie het met eigen ogen",
      ctaSecondary:
        "Boek een 20-minuten rondleiding die alles kan veranderen"
    },
    contact: {
      title: "Jullie Avontuur Begint Hier",
      subtitle: "We kunnen niet wachten om jullie te ontmoeten!",
      /* ─── Luna Upgrades ─── */
      getInTouch: "Neem Contact op",
      loveToHear: "We horen graag van je!",
      email: "E-mail",
      phone: "Telefoon",
      quickResponse: "Snel antwoord? Stuur ons een WhatsAppje",
      responseTime: "We reageren meestal binnen 24 uur op werkdagen.",
      formName: "Jouw Naam",
      formEmail: "E-mailadres",
      formChildAge: "Leeftijd van je kind",
      formMessage: "Jouw Bericht",
      formSubmit: "Verstuur Bericht",
      thankYouTitle: "Dank je wel!",
      sendAnother: "Verstuur nog een bericht",
      namePlaceholder: "Jan Jansen",
      emailPlaceholder: "jan@example.com",
      agePlaceholder: "3 jaar",
      messagePlaceholder: "Ik wil graag meer weten over…",
      processing: "Verwerken...",
      whatsappButton: "Chat op WhatsApp",
      whatsappMessage: "Hoi Teddy Kids! Ik wil graag een rondleiding boeken voor mijn kind.",
      thankYou: "Dank je wel! We nemen snel contact op."
    },
    apiePlayground: {
      /* ───── Header ───── */
      title: "Appies Speelhoek",
      subtitle: "Welkom in Appies geheime bananenparadijs! Kleur, speel en geniet!",

      /* ───── Sound Button ───── */
      playSound: "Laat de jungle brullen!",

      /* ───── Coloring UI ───── */
      coloringTitle: "Tijd om te kleuren!",
      clearColors: "Alles wissen",

      /* ───── Banana Puns ───── */
      punsTitle: "Bananengrappen",
      defaultJoke: "Waarom ging de banaan naar de dokter? Omdat hij zich niet goed schilde!",
      anotherJoke: "Vertel me nog een bananengrapje!",

      /* ───── Fun Activities ───── */
      activitiesTitle: "Leuke dingen om te doen",

      bananaDance: {
        title: "Bananendans",
        intro: "Volg deze stappen voor de bananendans:",
        steps: [
          "Sta rechtop als een banaan",
          "Buig naar links, als een kromme banaan",
          "Buig naar rechts, nog krommer!",
          "Draai rond en pel jezelf!",
          "Spring omhoog en roep: 'BANAAN!'"
        ]
      },

      /* ───── Monkey See, Monkey Do ───── */
      monkeySee: {
        title: "Aapjes nadoen!",
        subtitle: "Kun jij deze dieren nadoen?",
        animals: [
          "🐒 Aap: Maak aapgeluiden en krab aan je hoofd",
          "🦁 Leeuw: Brul hard en laat je klauwen zien",
          "🐘 Olifant: Maak van je arm een slurf en toeter!",
          "🦒 Giraf: Strek je nek zo hoog als je kunt",
          "🐸 Kikker: Spring rond en zeg 'kwak kwak'"
        ]
      },

      /* ───── Footer CTA ───── */
      backCTA: "Terug naar Teddy Kids"
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
    (key: string): any => {
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

      return value;
    },
    [language]
  );

  return { t, language };
};
