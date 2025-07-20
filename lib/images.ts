/**
 * Central Image & Media Asset Management
 * 
 * This module provides a single source of truth for all media assets used
 * throughout the Teddy Kids website. Benefits:
 * 
 * - Prevents path typos and inconsistencies
 * - Makes refactoring easier (change paths in one place)
 * - Improves developer experience with autocompletion
 * - Enables easier auditing of used/unused assets
 */

// Type definitions for better organization and type safety
interface HeroAssets {
  journey: {
    image: string;
    video: string;
  };
  about: {
    image: string;
    video?: string;
  };
  programs: {
    image: string;
    video?: string;
  };
  contact: {
    image: string;
    video?: string;
  };
}

interface LogoAssets {
  primary: string;
  mafia: string;
  favicon: string;
  appleIcon: string;
}

interface BackgroundAssets {
  lighthouse: string;
  patterns: {
    dots: string;
    waves: string;
  };
}

interface CharacterAssets {
  waving: string;  // Character 9
  reading: string; // For about page
  playing: string; // For programs page
}

interface VideoAssets {
  appiesSeal: string;
  welcome: string;
}

interface AudioAssets {
  appiesWelcome: string;
}

// Main Images object with all asset paths
export const Images = {
  // Hero section assets (background images & videos)
  heroes: {
    journey: {
      image: '/images/heroes/journey-starts-here.png',
      video: '/images/heroes/journey-starts-here-video.mp4',
    },
    about: {
      image: '/images/heroes/about-hero.jpg',
    },
    programs: {
      image: '/images/heroes/programs-hero.jpg',
    },
    contact: {
      image: '/images/heroes/contact-hero.jpg',
    },
  } as HeroAssets,

  // Logo variations
  logos: {
    primary: '/images/logos/teddy-kids-logo.png',
    mafia: '/images/logos/teddy-mafia-logo.png',
    favicon: '/favicon.ico',
    appleIcon: '/apple-touch-icon.png',
  } as LogoAssets,

  // Background textures and patterns
  backgrounds: {
    lighthouse: '/images/teddylighthousebackground.jpg',
    patterns: {
      dots: '/images/patterns/dots.svg',
      waves: '/images/patterns/waves.svg',
    },
  } as BackgroundAssets,

  // Character illustrations
  characters: {
    waving: '/images/characters/teddy-character-9.png',
    reading: '/images/characters/teddy-character-reading.png',
    playing: '/images/characters/teddy-character-playing.png',
  } as CharacterAssets,

  // Video assets
  videos: {
    appiesSeal: '/videos/appies_seal_placeholder.mp4',
    welcome: '/videos/welcome.mp4',
  } as VideoAssets,

  // Audio assets
  audio: {
    appiesWelcome: '/audio/appies-welcome.mp3',
  } as AudioAssets,
};

// Type for the entire Images object for type safety when importing
export type ImagesType = typeof Images;

/**
 * Usage example:
 * 
 * import { Images } from '@/lib/images';
 * 
 * // In your component:
 * <Image 
 *   src={Images.heroes.journey.image}
 *   alt="Journey begins"
 * />
 */
