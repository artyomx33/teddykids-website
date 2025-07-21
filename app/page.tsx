// ---------------------------------------------------------------------------
// Phase-2 Home Page Conversion – Static Server Component
// This page was previously rendered via <HomePageClient />.
// We now render it directly as a Server Component with
// `dynamic = 'force-static'` to enable SSG while delegating
// any interactive sub-widgets (AppiesGPT) to dynamic
// client-side components.
// ---------------------------------------------------------------------------

import type { Metadata } from 'next';

// Static sections – safe to render on the server
import Hero from '@/components/sections/Hero';
import Pillars from '@/components/sections/Pillars';
import SocialProof from '@/components/sections/SocialProof';
import Programs from '@/components/sections/Programs';

// Dynamic / interactive widgets – keep on client
import dynamicImport from 'next/dynamic';
const AppiesGPT = dynamicImport(() => import('@/components/sections/AppiesGPT'), {
  loading: () => (
    <section className="py-16 text-center">
      <p className="text-gray-500">Loading chat assistant…</p>
    </section>
  ),
});


const LocationsPreview = dynamicImport(
  () => import('@/components/sections/LocationsPreview'),
  {
    loading: () => (
      <section className="py-16 text-center">
        <p className="text-gray-500">Loading locations…</p>
      </section>
    ),
  }
);

import Image from 'next/image';

// ──────────────────────────────────────────────────────────
//  Static page metadata (SEO & social)
// ──────────────────────────────────────────────────────────
export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Teddy Kids | From Baby Steps to Global Citizens',
  description:
    "Where your child's first words lead to a world of possibilities. ",
  keywords:
    'bilingual daycare leiden, teddy kids, early childhood education, international school',
};

export default function HomePage() {
  return (
    <main>
      {/* Hero Section with Luna characters */}
      <div className="relative">
        <Hero
          videoSrc="/videos/tk-hero-loop.mp4"
          fallbackImageSrc="/images/hero-fallback.jpg"
        />
      </div>

      {/* AppiesGPT Section (AI assistant) */}
    <AppiesGPT />

      {/* Core Values Pillars */}
      <Pillars />

      {/* Social Proof and Reviews */}
      {/* Wrapper allows absolute-positioned character above the "20 Years of Care" copy */}
      <div className="relative">
        {/* TeddyCharacter2 – girl in TK sweater decorates Social Proof section */}
        <Image
          src="/images/characters/teddy-character-2.png"
          alt=""
          aria-hidden="true"
          width={200}
          height={200}
          loading="lazy"
          fetchPriority="low"
          sizes="200px"
          className="character character-floating character-delay-1"
        />
        <SocialProof />
      </div>

      {/* Program Overview */}
      <Programs />

      {/* Locations Preview */}
      <LocationsPreview />
    </main>
  );
}
