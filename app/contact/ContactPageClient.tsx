'use client';

import Image from 'next/image';
import dynamic from 'next/dynamic';

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
       *  Hero Section - Warmer, more welcoming
       * ────────────────────────────────────────────────────────── */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        {/* Background video with image fallback */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          poster="/images/heroes/journey-starts-here.png"
        >
          <source
            src="/images/heroes/journey-starts-here-video.mp4"
            type="video/mp4"
          />
          {/* Fallback image for very old browsers */}
          <Image
            src="/images/heroes/journey-starts-here.png"
            alt="Reach out to Teddy Kids"
            fill
            sizes="100vw"
            priority
            className="object-cover object-center"
          />
        </video>

        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20" />

        {/* Teddy character - friendly mascot */}
        <div className="absolute bottom-0 right-0 md:right-[10%] z-10 hidden md:block">
          <Image
            src="/images/characters/1karakter-dino-lief.png"
            alt=""
            width={220}
            height={220}
            loading="eager"
          />
        </div>

        {/* Hero content */}
        <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
          <div className="container mx-auto">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-4">
                Contact Us
              </h1>
              <p className="text-xl md:text-2xl text-white">
                We&apos;re here to answer your questions and welcome you to our Teddy family
              </p>
            </div>
          </div>
        </div>
      </section>

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
