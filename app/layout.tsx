import type { Metadata } from "next";
import { Geist, Geist_Mono, Baloo_2 } from "next/font/google";
import Navigation from "@/components/Navigation"; // actual navigation component
import { LanguageProvider } from "@/lib/LanguageContext";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const balooDisplay = Baloo_2({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Teddy Kids | From Baby Steps to Global Citizens",
  description:
    "Bilingual childcare & international school nurturing global citizens from their very first steps.",
  openGraph: {
    title: "Teddy Kids | From Baby Steps to Global Citizens",
    description:
      "Bilingual childcare & international school nurturing global citizens from their very first steps.",
    url: "https://www.teddykids.nl",
    siteName: "Teddy Kids",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Teddy Kids children smiling",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Teddy Kids | From Baby Steps to Global Citizens",
    description:
      "Bilingual childcare & international school nurturing global citizens from their very first steps.",
    images: ["/images/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${balooDisplay.variable} antialiased`}
      >
        <LanguageProvider>
          {/* Invisible element to safelist brand utility classes for Tailwind build */}
          <div
            hidden
            className="bg-brand-pink bg-brand-yellow bg-brand-mint bg-brand-purple text-brand-pink text-brand-yellow text-brand-mint text-brand-purple"
          />

          {/* Site Navigation */}
          <Navigation />

          {/* Main content with padding to offset fixed nav height */}
          <div className="pt-20">{children}</div>

          {/* Floating WhatsApp Button */}
          <a
            href="https://wa.me/31620966405?text=Hi%20Teddy%20Kids!%20I'd%20love%20to%20book%20a%20tour%20for%20my%20child."
            className="btn-whatsapp"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with Teddy Kids on WhatsApp"
          >
            {/* WhatsApp Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              width="24"
              height="24"
              fill="currentColor"
            >
              <path d="M16.002 3.2c-7.104 0-12.8 5.696-12.8 12.8 0 2.24.576 4.48 1.664 6.4l-1.76 6.464 6.656-1.728c1.888 1.024 4.064 1.568 6.24 1.568 7.104 0 12.8-5.696 12.8-12.8s-5.696-12.704-12.8-12.704zm0 23.104c-2.016 0-4.064-.544-5.824-1.6l-.416-.256-3.968 1.024 1.056-3.904-.288-.448c-1.024-1.76-1.6-3.808-1.6-5.824 0-6.112 4.96-11.072 11.072-11.072 6.016 0 10.976 4.96 10.976 10.976 0 6.112-4.96 11.104-10.976 11.104zm6.464-8.16c-.352-.192-2.048-1.024-2.368-1.152-.32-.128-.544-.192-.768.192-.224.352-.896 1.152-1.088 1.376-.192.224-.416.256-.768.064-.352-.192-1.472-.544-2.816-1.76-1.04-.928-1.744-2.08-1.952-2.432-.192-.352-.021-.544.149-.704.16-.16.352-.416.544-.64.181-.224.245-.384.373-.64.128-.256.064-.48-.032-.672-.096-.192-.768-1.792-1.056-2.464-.277-.672-.56-.576-.768-.576-.192-.011-.416-.011-.64-.011-.224 0-.576.085-.864.384-.288.299-1.12 1.088-1.12 2.656s1.152 3.088 1.312 3.296c.16.224 2.24 3.392 5.44 4.736.768.331 1.365.528 1.829.672.768.245 1.472.213 2.027.128.618-.093 1.92-.787 2.195-1.547.277-.757.277-1.408.192-1.536-.085-.128-.32-.213-.672-.405z" />
            </svg>
          </a>

          {/* Vercel Web Analytics */}
          <Analytics />

          {/* ------------------------------------------------------------------ */}
          {/*  Footer with Lighthouse Background + TeddyCharacter9 (Luna designs) */}
          {/* ------------------------------------------------------------------ */}
          {/* Provide explicit height so the lighthouse background is always visible */}
          <footer className="relative mt-20 h-64 md:h-96">
            {/* Background image layer (opacity 0.3) */}
            <div
              className="absolute inset-0 bg-cover bg-bottom opacity-50 pointer-events-none"
              style={{
                backgroundImage: "url('/images/teddylighthousebackground.jpg')",
              }}
            />

            {/* TeddyCharacter9 – girl waving in winter gear */}
            <img
              src="/images/characters/teddy-character-9.png"
              alt=""                /* decorative */
              aria-hidden="true"
              className="character character-footer-waver"
            />
          </footer>
        </LanguageProvider>
      </body>
    </html>
  );
}
