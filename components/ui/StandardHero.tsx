import Image from 'next/image';

type HeroProps = {
  /**
   * Main hero title (h1)
   */
  title: string;
  
  /**
   * Subtitle/description text
   */
  subtitle: string;
  
  /**
   * Path to hero image (also used as video poster if videoSrc provided)
   */
  imageSrc: string;
  
  /**
   * Optional path to background video
   */
  videoSrc?: string;
  
  /**
   * Optional call-to-action button text
   */
  ctaText?: string;
  
  /**
   * Optional call-to-action button link
   */
  ctaLink?: string;
  
  /**
   * Optional alt text (already translated in the parent).
   * Falls back to `title` when not provided.
   */
  alt?: string;
};

/**
 * Standardized hero component for all pages
 * Renders a full-width hero section with image/video background and centered text
 */
export function Hero({ 
  title, 
  subtitle, 
  imageSrc, 
  videoSrc, 
  ctaText, 
  ctaLink,
  alt
}: HeroProps) {
  // Alt text: parent-supplied (i18n) or fallback to title
  const imageAlt = alt ?? title;

  return (
    <section className="relative h-[675px] overflow-hidden">
      {/* Background media - either video with fallback or just image */}
      {videoSrc ? (
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster={imageSrc}
          aria-hidden="true" // Video is decorative, text conveys meaning
        >
          <source src={videoSrc} type="video/mp4" />
          {/* Fallback for browsers that don't support video */}
          {/* This fallback image is purely decorative, so we force an empty alt */}
          <Image
            {...getImageProps(imageSrc, imageAlt, true)}
            alt=""                /* explicit alt for ESLint */
            aria-hidden="true"
          />
        </video>
      ) : (
        <Image 
          {...getImageProps(imageSrc, imageAlt, true)}
          alt={imageAlt}          /* explicit alt for ESLint */
        />
      )}

      {/* Hero content - centered text and optional CTA */}
      <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-white mb-6">
            {subtitle}
          </p>
          {ctaText && ctaLink && (
            <a 
              href={ctaLink} 
              className="inline-flex items-center justify-center rounded-full font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 px-6 py-3 text-base bg-brand-yellow text-gray-800 hover:bg-opacity-90 focus:ring-brand-yellow shadow-sm hover:shadow"
              aria-label={ctaText}
            >
              {ctaText}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}

/**
 * Utility function for consistent image props
 * Makes it easier to maintain proper image optimization attributes
 * 
 * @param imageSrc Path to the image
 * @param alt Alt text for accessibility and SEO
 * @param isHero Whether this is a hero image (affects loading priority)
 * @returns Optimized Image component props
 */
export function getImageProps(imageSrc: string, alt: string, isHero = true) {
  return {
    src: imageSrc,
    alt,
    fill: true,
    className: "object-cover object-center",
    priority: isHero, // Auto-priority for heroes
    sizes: "100vw", // Full viewport width
    quality: 80, // Slightly compressed for performance
    // Cast to satisfy ImageProps union type
    loading: (isHero ? 'eager' : 'lazy') as 'eager' | 'lazy',
    // Explicitly cast literal to satisfy `fetchPriority` union type
    fetchPriority: (isHero ? 'high' : 'auto') as 'high' | 'low' | 'auto',
  };
}
