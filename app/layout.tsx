/* eslint-disable @next/next/no-page-custom-font */

import { Geist, Geist_Mono, Baloo_2 } from "next/font/google";
import Navigation from "@/components/Navigation"; // actual navigation component
import ErrorBoundary from "@/components/ErrorBoundary";
import { LanguageProvider } from "@/lib/LanguageContext";
import { getPageMetadata } from "@/lib/seo";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Image from "next/image";
import Button from "@/components/Button";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const balooDisplay = Baloo_2({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const GTM_ID = "GTM-NQN5S9KF";

// ---------------------------------------------------------------------------
// Global <head> metadata (SEO & social)
// Uses centralised SEO utility to inject:
// • hreflang alternates
// • dynamic Open Graph images
// • JSON-LD structured data
// ---------------------------------------------------------------------------
export const metadata = getPageMetadata("home");

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Preconnect for critical third-party origins (performance) */}
      <head>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        {/* Preload critical above-the-fold font CSS to minimise FCP/LCP */}
        {/* Geist Sans & Mono are self-hosted by next/font; we preload Baloo_2 CSS because it is fetched from Google */}
        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;500;600;700&display=swap"
          crossOrigin=""
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;500;600;700&display=swap"
          crossOrigin=""
        />
        <link
          rel="preconnect"
          href="https://www.googletagmanager.com"
          crossOrigin=""
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${balooDisplay.variable} antialiased`}
      >
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
          `,
          }}
        />
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {/* Structured Data: Organization & ChildCare */}
        <Script
          id="ld-json-org"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ChildCare",
              name: "Teddy Kids",
              url: "https://www.teddykids.nl",
              logo: "https://www.teddykids.nl/images/logo.png",
              description:
                "Bilingual childcare & international school nurturing global citizens from their very first steps.",
              telephone: "+31 71 870 05 05",
              email: "info@teddykids.nl",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Rijnsburgerweg 35",
                addressLocality: "Leiden",
                postalCode: "2334 BN",
                addressCountry: "NL",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+31 71 870 05 05",
                contactType: "customer support",
                areaServed: "NL",
                availableLanguage: ["English", "Dutch"],
              },
              sameAs: [
                "https://www.facebook.com/teddykids",
                "https://www.instagram.com/teddykids",
                "https://www.linkedin.com/company/teddy-kids",
              ],
            }),
          }}
        />

        <LanguageProvider>
          {/* Invisible element to safelist brand utility classes for Tailwind build */}
          <div
            hidden
            className="bg-brand-pink bg-brand-yellow bg-brand-mint bg-brand-purple text-brand-pink text-brand-yellow text-brand-mint text-brand-purple"
          />

          {/* Site Navigation */}
          <ErrorBoundary>
            <Navigation />

          {/* Main content with padding to offset fixed nav height */}
            <div className="pt-20">{children}</div>
          </ErrorBoundary>

          {/* ------------------------------------------------------------ */}
          {/* Sticky CTA Bar (Apply Now / Book Tour)                      */}
          {/* ------------------------------------------------------------ */}
          {/* Visible on every page – fixed bottom-right for quick action */}
          <div className="fixed bottom-4 right-4 flex flex-col space-y-2 z-50">
            <Button variant="primary" href="/apply" size="sm">
              Apply Now
            </Button>
            {/* External link wrapper because Button does not accept target/rel */}
            <a
              href="https://wa.me/31620966405?text=Hi%20Teddy%20Kids!%20I'd%20love%20to%20book%20a%20tour%20for%20my%20child."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="secondary" size="sm">
                Book Tour
              </Button>
            </a>
          </div>

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
            <Image
              src="/images/characters/teddy-character-9.png"
              alt="" /* decorative */
              aria-hidden="true"
              width={200}
              height={200}
              /* Footer image is below-the-fold → lazy & low priority */
              loading="lazy"
              fetchPriority="low"
              sizes="200px"
              className="character character-footer-waver"
            />
          </footer>
        </LanguageProvider>
      </body>
    </html>
  );
}
