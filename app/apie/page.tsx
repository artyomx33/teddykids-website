// ---------------------------------------------------------------------------
// NOTE: Phase-1 SSR migration
// This page was previously a pure client component with all interactive logic.
// Now it's a server component that statically renders the shell and delegates
// all interactive features (audio, coloring, confetti) to the client component.
// No behavioral changes - just SEO/performance benefits.
// ---------------------------------------------------------------------------

export const dynamic = 'force-static';

import type { Metadata } from 'next';
import ApiePlaygroundClient from './ApiePlaygroundClient';

// ──────────────────────────────────────────────────────────
//  Page <head> metadata (used for SEO & social previews)
// ──────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: 'Apie Playground | Teddy Kids',
  description: 'Play with Apie in our interactive playground! Color, listen to jungle sounds, and enjoy banana jokes in this fun activity page for kids.',
  keywords: 'teddy kids apie, interactive playground, children activities, banana coloring, kids games',
};

export default function ApiePage() {
  return <ApiePlaygroundClient />;
}
