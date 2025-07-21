// Re-export Hero from StandardHero for backward compatibility
// This ensures imports from '@/components/ui/Hero' still work
// while using the new standardized hero with 675px height

import { Hero } from './StandardHero';

export { Hero };
