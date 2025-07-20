/**
 * Enhanced Image & Media Asset Management System
 * 
 * This module provides a centralized registry for all media assets with full metadata
 * to optimize performance, accessibility, and SEO across the Teddy Kids website:
 * 
 * Benefits:
 * - Prevents path typos and inconsistencies
 * - Makes refactoring easier (change paths in one place)
 * - Improves developer experience with autocompletion
 * - Enforces complete metadata (alt text, dimensions) for a11y and performance
 * - Prevents CLS by ensuring all images have dimensions
 * - Optimizes LCP through proper priority settings
 * - Boosts SEO with descriptive alt text
 * 
 * Usage:
 * import { getImageProps } from '@/lib/images-enhanced';
 * 
 * <Image {...getImageProps('heroes', 'journey')} />
 * <Image {...getImageProps('learning', 'pleaseLanguages', { priority: true })} />
 */

import type { ImageProps } from 'next/image';

// Core type for image metadata - ensures all required properties for a11y/perf
type ImageMetadata = Partial<ImageProps> & {
  src: string;
  alt: string; // Required for a11y/SEO
  width: number; // Required to prevent CLS (Performance win)
  height: number;
  priority?: boolean; // Default false; true for above-fold
  loading?: 'lazy' | 'eager'; // Default 'lazy' for below-fold
  sizes?: string; // Responsive images
  quality?: number; // Image quality (default: 75)
  // Future extensions
  variants?: {
    mobile?: string;
    dark?: string;
  };
  i18n?: {
    nl?: { alt: string }; // Dutch alt text
  };
};

// Type for the entire image registry with categories
type Images = {
  heroes: {
    [key: string]: ImageMetadata;
  };
  logos: {
    [key: string]: ImageMetadata;
  };
  /**
   * Background textures and nested pattern collection.
   *
   *  • Regular background items map to `ImageMetadata`
   *  • A special `patterns` key contains its **own** Record of ImageMetadata
   *    which would otherwise violate the simple `[key: string]: ImageMetadata`
   *    index signature.
   */
  backgrounds: {
    patterns: {
      [key: string]: ImageMetadata;
    };
    // Any other dynamic background keys resolve to ImageMetadata
    [key: string]: ImageMetadata | { [key: string]: ImageMetadata };
  };
  characters: {
    [key: string]: ImageMetadata;
  };
  learning: {
    [key: string]: ImageMetadata;
  };
  locations: {
    [key: string]: ImageMetadata;
  };
  team: {
    [key: string]: ImageMetadata;
  };
  // Video and audio have different metadata requirements
  videos: {
    [key: string]: {
      src: string;
      posterImage?: string;
      width?: number;
      height?: number;
      autoPlay?: boolean;
      loop?: boolean;
      muted?: boolean;
    };
  };
  audio: {
    [key: string]: {
      src: string;
      duration?: number;
    };
  };
};

/**
 * Central Image Registry with complete metadata
 * All images should include:
 * - src: path to image
 * - alt: descriptive alt text for a11y/SEO
 * - width/height: prevent CLS
 * - priority: true for LCP candidates (above fold)
 * - loading: 'lazy' for below-fold, 'eager' for critical
 */
export const IMAGES: Images = {
  // Hero section assets (background images & videos)
  heroes: {
    journey: {
      src: '/images/heroes/journey-starts-here.png',
      alt: 'Teddy Kids children playing and learning in a bright, colorful environment - From Baby Steps to Global Citizens',
      width: 1920,
      height: 1080,
      priority: true, // Homepage hero - critical for LCP
      loading: 'eager',
      sizes: '100vw', // Full-width hero
    },
    about: {
      src: '/images/heroes/about-hero.jpg',
      alt: 'Teddy Kids team members engaging with children in a nurturing environment',
      width: 1920,
      height: 1080,
      priority: true, // About page hero
      loading: 'eager',
      sizes: '100vw',
    },
    programs: {
      src: '/images/heroes/programs-hero.jpg',
      alt: 'Children engaged in diverse learning activities at Teddy Kids programs',
      width: 1920,
      height: 1080,
      priority: true, // Programs page hero
      loading: 'eager',
      sizes: '100vw',
    },
    contact: {
      src: '/images/heroes/contact-hero.jpg',
      alt: 'Teddy Kids welcoming environment - Contact us to learn more',
      width: 1920,
      height: 1080,
      priority: true, // Contact page hero
      loading: 'eager',
      sizes: '100vw',
    },
    team: {
      src: '/images/heroes/team-hero-new.png',
      alt: 'Teddy Kids staff smiling together in the garden',
      width: 1920,
      height: 1080,
      priority: true, // Team page hero
      loading: 'eager',
      sizes: '100vw',
    },
    locations: {
      src: '/images/heroes/locations-hero-new.png',
      alt: 'Teddy Kids locations in Leiden - welcoming buildings where children thrive',
      width: 1920,
      height: 1080,
      priority: true, // Locations page hero
      loading: 'eager',
      sizes: '100vw',
    },
  },

  // Logo variations with appropriate dimensions
  logos: {
    primary: {
      src: '/images/logos/teddy-kids-logo.png',
      alt: 'Teddy Kids Logo',
      width: 180,
      height: 60,
      priority: true, // Navigation logo - visible immediately
    },
    mafia: {
      src: '/images/logos/teddy-mafia-logo.png',
      alt: 'Teddy Mafia Logo - Teddy Kids parent organization',
      width: 180,
      height: 60,
      loading: 'lazy',
    },
    favicon: {
      src: '/favicon.ico',
      alt: 'Teddy Kids favicon',
      width: 32,
      height: 32,
    },
    appleIcon: {
      src: '/apple-touch-icon.png',
      alt: 'Teddy Kids Apple touch icon',
      width: 180,
      height: 180,
    },
    tisa: {
      src: '/images/logos/tisa-logo-placeholder.png',
      alt: 'TISA - The International School of Amsterdam logo',
      width: 180, 
      height: 60,
      loading: 'lazy',
    },
  },

  // Background textures and patterns
  backgrounds: {
    lighthouse: {
      src: '/images/teddylighthousebackground.jpg',
      alt: 'Decorative lighthouse background image',
      width: 1920,
      height: 1080,
      loading: 'lazy',
    },
    patterns: {
      dots: {
        src: '/images/patterns/dots.svg',
        alt: '',  // Decorative pattern - empty alt for a11y
        width: 200,
        height: 200,
        loading: 'lazy',
      },
      waves: {
        src: '/images/patterns/waves.svg',
        alt: '',  // Decorative pattern - empty alt for a11y
        width: 200,
        height: 100,
        loading: 'lazy',
      },
    },
  },

  // Character illustrations
  characters: {
    waving: {
      src: '/images/characters/teddy-character-9.png',
      alt: 'Teddy Kids character waving hello',
      width: 200,
      height: 200,
      loading: 'lazy',
    },
    reading: {
      src: '/images/characters/teddy-character-reading.png',
      alt: 'Teddy Kids character reading a book',
      width: 200,
      height: 200,
      loading: 'lazy',
    },
    playing: {
      src: '/images/characters/teddy-character-playing.png',
      alt: 'Teddy Kids character playing with blocks',
      width: 200,
      height: 200,
      loading: 'lazy',
    },
    character1: {
      src: '/images/characters/teddy-character-1.png',
      alt: 'Teddy Kids purple dinosaur character',
      width: 200,
      height: 200,
      loading: 'lazy',
    },
    character2: {
      src: '/images/characters/teddy-character-2.png',
      alt: 'Teddy Kids girl in TK sweater character',
      width: 200,
      height: 200,
      loading: 'lazy',
    },
    character7: {
      src: '/images/characters/teddy-character-7.png',
      alt: 'Teddy Kids character with backpack',
      width: 200,
      height: 200,
      loading: 'lazy',
    },
    character8: {
      src: '/images/characters/teddy-character-8.png',
      alt: 'Teddy Kids character with paintbrush',
      width: 200,
      height: 200,
      loading: 'lazy',
    },
  },

  // Learning moments images
  learning: {
    pleaseLanguages: {
      src: '/images/learning/please-languages.png',
      alt: 'Children naturally switching between Dutch and English during playtime',
      width: 800,
      height: 600,
      loading: 'lazy',
    },
    conflictResolution: {
      src: '/images/learning/conflict-resolution.png',
      alt: 'Preschoolers developing empathy through guided sharing activities',
      width: 800,
      height: 600,
      loading: 'lazy',
    },
    blocksThinking: {
      src: '/images/learning/blocks-thinking.png',
      alt: '3-year-olds building with blocks to explore STEM concepts',
      width: 800,
      height: 600,
      loading: 'lazy',
    },
    fingerPaint: {
      src: '/images/learning/finger-paint.png',
      alt: 'Children engaging in sensory play for artistic expression and language development',
      width: 800,
      height: 600,
      loading: 'lazy',
    },
    musicBrain: {
      src: '/images/learning/music-brain.png',
      alt: 'Incorporating Dutch traditions like Sinterklaas for international families',
      width: 800,
      height: 600,
      loading: 'lazy',
    },
    puddleScience: {
      src: '/images/learning/puddle-science.png',
      alt: 'Preschoolers learning sustainability through the Teddy Garden Project',
      width: 800,
      height: 600,
      loading: 'lazy',
    },
  },

  // Location images
  locations: {
    rbw_1: {
      src: '/images/locations/rbw_1.jpg',
      alt: 'Teddy Kids Rijnsburgerweg 35 (KDV) location exterior',
      width: 800,
      height: 600,
      loading: 'lazy',
    },
    rb3rb5_1: {
      src: '/images/locations/rb3rb5_1.jpg',
      alt: 'Teddy Kids Rijnsburgerweg 3 & 5 (KDV + BSO) location exterior',
      width: 800,
      height: 600,
      loading: 'lazy',
    },
    lrz_1: {
      src: '/images/locations/lrz_1.jpg',
      alt: 'Teddy Kids Lorentzkade 15a (BSO + TISA) location exterior',
      width: 800,
      height: 600,
      loading: 'lazy',
    },
    zml_1: {
      src: '/images/locations/zml_1.jpg',
      alt: 'Teddy Kids Zeemanlaan 22a (KDV) location exterior',
      width: 800,
      height: 600,
      loading: 'lazy',
    },
    tisaLeiden: {
      src: '/images/tisa-leiden.png',
      alt: 'TISA Netherlands Leiden campus building',
      width: 800,
      height: 600,
      loading: 'lazy',
    },
    tisaPortugal: {
      src: '/images/tisa-portugal.png',
      alt: 'TISA Portugal campus building',
      width: 800,
      height: 600,
      loading: 'lazy',
    },
  },

  // Team images
  team: {
    rbw: {
      src: '/images/team/team-rbw.jpeg',
      alt: 'Teddy Kids team at Rijnsburgerweg 35 location',
      width: 800,
      height: 600,
      loading: 'lazy',
    },
    rb3rb5: {
      src: '/images/team/team-rb3rb5.jpeg',
      alt: 'Teddy Kids team at Rijnsburgerweg 3 & 5 location',
      width: 800,
      height: 600,
      loading: 'lazy',
    },
    lrz: {
      src: '/images/team/team-lrz.jpeg',
      alt: 'Teddy Kids team at Lorentzkade location',
      width: 800,
      height: 600,
      loading: 'lazy',
    },
    zml: {
      src: '/images/team/team-zml.jpeg',
      alt: 'Teddy Kids team at Zeemanlaan location',
      width: 800,
      height: 600,
      loading: 'lazy',
    },
    tisaTeachersTheater: {
      src: '/images/tisa-teachers-theater.png',
      alt: 'TISA teachers and students performing in a theater production',
      width: 800,
      height: 600,
      loading: 'lazy',
    },
  },

  // Video assets
  videos: {
    appiesSeal: {
      src: '/videos/appies_seal_placeholder.mp4',
      posterImage: '/images/appies-seal-poster.jpg',
      width: 1280,
      height: 720,
      autoPlay: true,
      loop: true,
      muted: true,
    },
    welcome: {
      src: '/videos/welcome.mp4',
      posterImage: '/images/welcome-poster.jpg',
      width: 1280,
      height: 720,
      autoPlay: false,
      loop: false,
      muted: false,
    },
    heroLoop: {
      src: '/videos/tk-hero-loop.mp4',
      posterImage: '/images/hero-fallback.jpg',
      width: 1920,
      height: 1080,
      autoPlay: true,
      loop: true,
      muted: true,
    },
  },

  // Audio assets
  audio: {
    appiesWelcome: {
      src: '/audio/appies-welcome.mp3',
      duration: 5, // seconds
    },
  },
} as const; // const assertion for better type inference

// Type for the entire Images object for type safety when importing
export type ImagesType = typeof IMAGES;

/**
 * Utility function to get all props for an Image component
 * 
 * @param category - Image category (heroes, logos, etc.)
 * @param key - Specific image key within the category
 * @param overrides - Optional props to override defaults
 * @returns Ready-to-spread props for next/image
 * 
 * Example:
 * <Image {...getImageProps('heroes', 'journey')} />
 * <Image {...getImageProps('learning', 'pleaseLanguages', { priority: true })} />
 */
export function getImageProps<
  C extends keyof Omit<Images, 'videos' | 'audio'>, 
  K extends keyof Images[C] & string
>(
  category: C,
  key: K,
  overrides: Partial<ImageMetadata> = {}
): Omit<ImageMetadata, 'variants' | 'i18n'> {
  // Handle nested patterns category specially
  if (category === 'backgrounds' && key === 'patterns') {
    throw new Error('For patterns, use getImageProps("backgrounds.patterns", "dots")');
  }
  
  // Type assertion to handle the nested structure
  const base = IMAGES[category][key] as ImageMetadata;
  
  return {
    ...base,
    ...overrides,
  };
}

/**
 * Get image props for nested categories (e.g., backgrounds.patterns)
 */
export function getNestedImageProps<K extends keyof Images['backgrounds']['patterns']>(
  key: K,
  overrides: Partial<ImageMetadata> = {}
): Omit<ImageMetadata, 'variants' | 'i18n'> {
  const base = IMAGES.backgrounds.patterns[key];
  
  return {
    ...base,
    ...overrides,
  };
}

/**
 * Get localized alt text based on current language
 */
export function getLocalizedAlt(
  category: keyof Omit<Images, 'videos' | 'audio'>,
  key: string,
  lang: 'en' | 'nl' = 'en'
): string {
  const imageData = IMAGES[category][key] as ImageMetadata;
  
  if (lang === 'nl' && imageData.i18n?.nl?.alt) {
    return imageData.i18n.nl.alt;
  }
  
  return imageData.alt;
}

/**
 * Get video props ready to use in a video element
 */
export function getVideoProps(
  key: keyof Images['videos'],
  overrides: Partial<Images['videos'][keyof Images['videos']]> = {}
) {
  const base = IMAGES.videos[key];
  
  return {
    ...base,
    ...overrides,
  };
}

// Future: Add automation script to scan /public/images and update this file
// Example script stub:
/*
// scripts/generate-images.ts
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const PUBLIC_DIR = path.join(process.cwd(), 'public/images');

// Get all image files recursively
function getAllImages(dir: string, fileList: string[] = []): string[] {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      getAllImages(filePath, fileList);
    } else if (/\.(jpg|jpeg|png|gif|svg|webp)$/i.test(file)) {
      fileList.push(filePath.replace(PUBLIC_DIR, ''));
    }
  });
  
  return fileList;
}

// Get image dimensions using imagemagick or similar
function getImageDimensions(imagePath: string): { width: number, height: number } {
  // Example using imagemagick's identify
  try {
    const result = execSync(`identify -format "%w %h" ${imagePath}`).toString().trim().split(' ');
    return {
      width: parseInt(result[0], 10),
      height: parseInt(result[1], 10)
    };
  } catch (e) {
    return { width: 0, height: 0 };
  }
}

// Generate entries for images.ts
function generateImageEntries() {
  const images = getAllImages(PUBLIC_DIR);
  
  // Group by directory
  const groupedImages = images.reduce((acc, img) => {
    const parts = img.split('/');
    const category = parts[1]; // e.g., 'heroes', 'logos'
    
    if (!acc[category]) {
      acc[category] = [];
    }
    
    acc[category].push(img);
    return acc;
  }, {} as Record<string, string[]>);
  
  // Generate entries
  Object.entries(groupedImages).forEach(([category, imgs]) => {
    console.log(`\n// ${category} images`);
    imgs.forEach(img => {
      const key = path.basename(img).replace(/\.\w+$/, '').replace(/-/g, '_');
      const dimensions = getImageDimensions(path.join(PUBLIC_DIR, img));
      
      console.log(`${key}: {
  src: '/images${img}',
  alt: 'TODO: Add descriptive alt text',
  width: ${dimensions.width},
  height: ${dimensions.height},
  loading: 'lazy',
},`);
    });
  });
}

generateImageEntries();
*/
