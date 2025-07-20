import type { Metadata } from 'next';
import TeamPageClient from '@/components/pages/TeamPageClient';

// ---------------------------------------------------------------------------
// Team Page – Static Server Component
// This shell delivers all copy & image paths as props to a dedicated
// TeamPageClient component that owns interactivity.  It is statically
// generated for maximum performance.  (Phase-3 migration)
// ---------------------------------------------------------------------------

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Meet Our Team | Teddy Kids Childcare',
  description:
    'Passionate caregivers, bilingual hearts, and one big Teddy family. Get to know the people who make the Teddy Kids magic happen every day.',
  keywords:
    'teddy kids team, childcare educators leiden, bilingual daycare staff, early childhood professionals',
};

export default function TeamPage() {
  // ──────────────────────────────────────────────────────────
  //  Static content (would normally come from CMS)
  // ──────────────────────────────────────────────────────────

  // 1. Hero - Using translation keys instead of hardcoded text
  const heroContent = {
    // Updated per request – use new universal hero
    imageSrc: '/images/heroes/team-hero-new.png',
    imageAlt: 'Teddy Kids staff smiling together in the garden',
    titleKey: 'teamPage.hero.title',
    subtitleKey: 'teamPage.hero.subtitle',
  };

  // 2. Philosophy - Using translation keys instead of hardcoded text
  const philosophyContent = {
    titleKey: 'teamPage.philosophy.title',
    imageSrc: '/images/heroes/programs-hero.jpg',
    imageAlt: 'Teddy Kids Team Philosophy',
    paragraph1Key: 'teamPage.philosophy.paragraph1',
    paragraph2Key: 'teamPage.philosophy.paragraph2',
    highlightTextKey: 'teamPage.philosophy.highlightText',
  };

  // 3. Location-specific team photo sets
  const locationTeams = [
    {
      title: 'RBW – Rijnsburgerweg 35 (KDV)',
      teamImageSrc: '/images/team/team-rbw.jpeg',
      teamImageAlt: 'RBW Team',
      locationImageSrc: '/images/locations/rbw_1.jpg',
      locationImageAlt: 'RBW Location',
      bgColorClass: 'bg-brand-pink bg-opacity-5',
      translationKey: 'teamPage.locations.rbw',
    },
    {
      title: 'RB3/RB5 – Rijnsburgerweg 3 & 5 (KDV + BSO)',
      teamImageSrc: '/images/team/team-rb3rb5.jpeg',
      teamImageAlt: 'RB3/RB5 Team',
      locationImageSrc: '/images/locations/rb3rb5_1.jpg',
      locationImageAlt: 'RB3/RB5 Location',
      bgColorClass: 'bg-brand-yellow bg-opacity-5',
      translationKey: 'teamPage.locations.rb35',
    },
    {
      title: 'LRZ – Lorentzkade 15a (BSO + TISA)',
      teamImageSrc: '/images/team/team-lrz.jpeg',
      teamImageAlt: 'LRZ Team',
      locationImageSrc: '/images/locations/lrz_1.jpg',
      locationImageAlt: 'LRZ Location',
      bgColorClass: 'bg-brand-mint bg-opacity-5',
      translationKey: 'teamPage.locations.lrz',
    },
    {
      title: 'ZML – Zeemanlaan 22a (KDV)',
      teamImageSrc: '/images/team/team-zml.jpeg',
      teamImageAlt: 'ZML Team',
      locationImageSrc: '/images/locations/zml_1.jpg',
      locationImageAlt: 'ZML Location',
      bgColorClass: 'bg-brand-purple bg-opacity-5',
      translationKey: 'teamPage.locations.zml',
    },
  ];
      
  // 4. Team values (emoji + translation keys)
  const teamValues = [
    { emoji: '❤️', titleKey: 'teamPage.values.value1.title', descriptionKey: 'teamPage.values.value1.description' },
    { emoji: '🌍', titleKey: 'teamPage.values.value2.title', descriptionKey: 'teamPage.values.value2.description' },
    { emoji: '🔍', titleKey: 'teamPage.values.value3.title', descriptionKey: 'teamPage.values.value3.description' },
    { emoji: '🤝', titleKey: 'teamPage.values.value4.title', descriptionKey: 'teamPage.values.value4.description' },
    { emoji: '🌱', titleKey: 'teamPage.values.value5.title', descriptionKey: 'teamPage.values.value5.description' },
    { emoji: '🏆', titleKey: 'teamPage.values.value6.title', descriptionKey: 'teamPage.values.value6.description' },
  ];
      
  // 5. TISA Partnership block - Using translation keys instead of hardcoded text
  const tisaPartnership = {
    // Swap in actual production logos + new theatre banner
    teddyLogoSrc: '/images/logos/teddykids-logo-placeholder.png',
    tisaLogoSrc: '/images/logos/tisa-logo-placeholder.png',
    titleKey: 'teamPage.tisa.title',
    paragraph1Key: 'teamPage.tisa.paragraph1',
    paragraph2Key: 'teamPage.tisa.paragraph2',
    ctaTextKey: 'teamPage.tisa.button',
    ctaLink: 'https://www.tisaschool.com',
    imageSrc: '/images/tisa-teachers-theater.png',
    imageAlt: 'TISA students performing on stage',
  };
      
  // 6. CTA – Join our team
  const joinTeamCTA = {
    titleKey: 'teamPage.joinTeam.title',
    descriptionKey: 'teamPage.joinTeam.description',
    buttonTextKey: 'teamPage.joinTeam.button',
    buttonHref: '/careers',
  };
      
  const characterImagePaths = {
    character7: '/images/characters/teddy-character-7.png',
    character8: '/images/characters/teddy-character-8.png',
  };
      
  // ──────────────────────────────────────────────────────────
  // Render client component with static props
  // ──────────────────────────────────────────────────────────

  return (
    <TeamPageClient
      heroContent={heroContent}
      philosophyContent={philosophyContent}
      locationTeams={locationTeams}
      tisaPartnership={tisaPartnership}
      teamValues={teamValues}
      joinTeamCTA={joinTeamCTA}
      characterImagePaths={characterImagePaths}
    />
  );
}
