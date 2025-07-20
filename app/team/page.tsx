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

  // 1. Hero
  const heroContent = {
    imageSrc: '/images/heroes/team-hero.png',
    imageAlt: 'Teddy Kids staff smiling together in the garden',
    title: 'Meet Our Team',
    subtitle: 'Passionate caregivers, bilingual hearts, one big Teddy family.',
  };

  // 2. Philosophy
  const philosophyContent = {
    title: 'The People Who Make Magic Happen',
    imageSrc: '/images/heroes/programs-hero.jpg',
    imageAlt: 'Teddy Kids Team Philosophy',
    paragraph1:
      "At Teddy Kids, our team is more than qualified — they're full-hearted, silly-serious, and endlessly curious. From comforting wobbly first steps to decoding deep toddler questions like “Why is the sky shy?”, our educators bring bilingual love and care to every moment.",
    paragraph2:
      "They come from all over the world — but share one thing: a belief that early childhood isn't just preparation for life… it is life. That's why we support our team with ongoing training, hugs, and maybe a surprise pizza now and then.",
    highlightText: "We don't just hire teachers. We grow a family.",
  };

  // 3. Location-specific team photo sets
  const locationTeams = [
    {
      title: 'RBW – Rijnsburgerweg 35 (KDV)',
      teamImageSrc: '/images/team/team-rbw.jpg',
      teamImageAlt: 'RBW Team',
      locationImageSrc: '/images/locations/rbw_1.jpg',
      locationImageAlt: 'RBW Location',
      bgColorClass: 'bg-brand-pink bg-opacity-5',
      translationKey: 'teamPage.locations.rbw',
    },
    {
      title: 'RB3/RB5 – Rijnsburgerweg 3 & 5 (KDV + BSO)',
      teamImageSrc: '/images/team/team-rb3rb5.jpg',
      teamImageAlt: 'RB3/RB5 Team',
      locationImageSrc: '/images/locations/rb3rb5_1.jpg',
      locationImageAlt: 'RB3/RB5 Location',
      bgColorClass: 'bg-brand-yellow bg-opacity-5',
      translationKey: 'teamPage.locations.rb35',
    },
    {
      title: 'LRZ – Lorentzkade 15a (BSO + TISA)',
      teamImageSrc: '/images/team/team-lrz.jpg',
      teamImageAlt: 'LRZ Team',
      locationImageSrc: '/images/locations/lrz_1.jpg',
      locationImageAlt: 'LRZ Location',
      bgColorClass: 'bg-brand-mint bg-opacity-5',
      translationKey: 'teamPage.locations.lrz',
    },
    {
      title: 'ZML – Zeemanlaan 22a (KDV)',
      teamImageSrc: '/images/team/team-zml.jpg',
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
      
  // 5. TISA Partnership block
  const tisaPartnership = {
    teddyLogoSrc: '/images/logos/teddy-kids-logo.png',
    tisaLogoSrc: '/images/logos/tisa-logo.png',
    title: "TISA isn't just international education — it's international imagination.",
    paragraph1:
      'Together with Teddy Kids, we grow the next generation of confident thinkers and young entrepreneurs.',
    paragraph2:
      "At TISA, kids explore SWOT analysis at five, speed math with joy, and star in theater shows that spark big ideas. It's a bold continuation of the Teddy spirit — powered by curiosity, creativity, and courage.",
    ctaText: 'Explore TISA →',
    ctaLink: 'https://www.tisaschool.com',
    imageSrc: '/images/team/tisa-theater.jpg',
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
