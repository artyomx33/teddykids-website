// ---------------------------------------------------------------------------
// NOTE: Phase-1 SSR migration - MOST COMPLEX CONVERSION
// This page was previously a pure client component with complex interactive features:
// - URL search params (child name, program, location, etc.)
// - Confetti animation with window dimension tracking
// - Dynamic share links and clipboard API
// - Audio controls and suspense boundaries
//
// Now it's a server component that statically renders the shell, while delegating
// all the complex interactive features to AcceptedPageClient.
// No behavioral changes - just SEO/performance benefits.
// ---------------------------------------------------------------------------

import type { Metadata } from 'next';
import AcceptedPageClient from './AcceptedPageClient';

// ──────────────────────────────────────────────────────────
//  Page <head> metadata (used for SEO & social previews)
// ──────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: 'Congratulations! You\'re Accepted | Teddy Kids',
  description: 'Welcome to Teddy Kids! Your child has been accepted to our program. Find all the information you need about your start date, location, and next steps.',
  keywords: 'teddy kids acceptance, childcare enrollment, daycare welcome, preschool accepted, teddy kids onboarding',
};

// Incremental Static Regeneration — rebuild page at most once per hour
export const revalidate = 3600;

export default function AcceptedPage() {
  return <AcceptedPageClient />;
}
