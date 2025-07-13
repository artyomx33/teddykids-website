import { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import Pillars from '@/components/sections/Pillars';
import SocialProof from '@/components/sections/SocialProof';

export const metadata: Metadata = {
  title: 'Teddy Kids | From Baby Steps to Global Citizens',
  description: 'Where your child\'s first words lead to a world of possibilities. Bilingual childcare and international school in Leiden, Netherlands.',
  keywords: 'teddy kids, childcare, bilingual, international school, leiden, preschool, nursery, after school, TISA',
  openGraph: {
    title: 'Teddy Kids | From Baby Steps to Global Citizens',
    description: 'Where your child\'s first words lead to a world of possibilities. Bilingual childcare and international school in Leiden, Netherlands.',
    url: 'https://www.teddykids.nl',
    siteName: 'Teddy Kids',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Teddy Kids - Bilingual Childcare and International School',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Teddy Kids | From Baby Steps to Global Citizens',
    description: 'Where your child\'s first words lead to a world of possibilities. Bilingual childcare and international school in Leiden, Netherlands.',
    images: ['/images/og-image.jpg'],
  },
};

export default function Home() {
  return (
    <main>
      {/* Hero Section with video background */}
      <Hero 
        videoSrc="/videos/tk-hero-loop.mp4" 
        fallbackImageSrc="/images/hero-fallback.jpg"
      />
      
      {/* Core Values Pillars */}
      <Pillars />
      
      {/* Social Proof and Reviews */}
      <SocialProof />
      
      {/* WhatsApp floating button - will be added in layout.tsx */}
    </main>
  );
}
