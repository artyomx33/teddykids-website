'use client';

import dynamic from 'next/dynamic';
import { Hero as StandardHero } from '@/components/ui/StandardHero';

// Dynamically import the Contact form component
const Contact = dynamic(() => import('@/components/sections/Contact'), {
  loading: () => (
    <div className="container mx-auto px-4 py-12 text-center">
      <p className="text-gray-500">Loading contact form...</p>
    </div>
  ),
  // Form processing is client-side only
  ssr: false
});

// Dynamically load AppiesGPT component
const AppiesGPT = dynamic(() => import('@/components/sections/AppiesGPT'), {
  loading: () => (
    <section className="py-16 text-center">
      <p className="text-gray-500">Loading chat assistant…</p>
    </section>
  ),
  ssr: false, // purely client-side interactive widget
});

export default function ContactPageClient() {
  return (
    <main>
      {/* ──────────────────────────────────────────────────────────
       *  Hero Section - Using StandardHero for video playback
       * ────────────────────────────────────────────────────────── */}
      <StandardHero
        title="Contact Us"
        subtitle="We're here to answer your questions and welcome you to our Teddy family"
        imageSrc="/images/heroes/journey-starts-here.png"
        videoSrc="/videos/journey-starts-here-video.mp4"
        alt="Reach out to Teddy Kids"
      />

      {/* Contact Form Section */}
      <section className="py-16 bg-white">
        {/* Wrapped for friendly Luna styling */}
        <div className="contact-form-container">
          <Contact />
        </div>
      </section>

      {/* AppiesGPT Section (AI assistant) */}
      <AppiesGPT />
    </main>
  );
}
