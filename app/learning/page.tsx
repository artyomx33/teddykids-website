import type { Metadata } from 'next';
import LearningPageClient from './LearningPageClient';

// ──────────────────────────────────────────────────────────
//  Page <head> metadata (used for SEO & social previews)
// ──────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: 'Learning Moments | Teddy Kids',
  description: "Peek inside to see how your child learns when they think they're just playing.",
  keywords: 'learning moments, teddy kids, play-based learning, early childhood development',
};

export default function LearningPage() {
  return <LearningPageClient />;
}
