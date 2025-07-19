// ---------------------------------------------------------------------------
// NOTE: Phase-1 SSR migration
// This page was previously a pure client wrapper.  We now mark it as
// `force-static` so Next.js prerenders it on the server while still keeping
// the heavy/interactive logic inside the existing `AboutPageClient`
// component.  No behavioural changes — just SEO/perf benefits.
// ---------------------------------------------------------------------------

export const dynamic = 'force-static';

import type { Metadata } from 'next';
import AboutPageClient from './AboutPageClient';

// ──────────────────────────────────────────────────────────
//  Page <head> metadata (used for SEO & social previews)
// ──────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: 'About Us | Teddy Kids',
  description:
    "Learn about Teddy Kids' mission, history, and vision for bilingual childcare and international education since 2004.",
  keywords:
    'teddy kids history, teddy kids mission, childcare leiden, international school history, tisa story, bilingual education netherlands',
};

export default function AboutPage() {
  return <AboutPageClient />;
}
