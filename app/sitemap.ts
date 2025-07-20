import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  /* ------------------------------------------------------------------
   *  Dynamic sitemap for Teddy Kids (production)
   * -----------------------------------------------------------------*/
  const baseUrl = 'https://new.teddykids.nl';
  const now = new Date();

  /** Helper to build entry objects */
  const entry = (
    path: string,
    priority = 0.8,
    changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'] = 'monthly',
  ): MetadataRoute.Sitemap[number] => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    priority,
    changeFrequency,
  });

  /* ----------------------------- Routes ----------------------------- */
  // High-priority core pages
  const pages: MetadataRoute.Sitemap = [
    entry('/', 1.0, 'weekly'),
    entry('/about', 0.9),
    entry('/about/policy', 0.7),
    entry('/programs', 0.9),
    entry('/locations', 0.9),
    entry('/team', 0.8),
    entry('/learning', 0.8, 'weekly'),
    entry('/contact', 0.8),
    entry('/apply', 0.9),
    entry('/accepted', 0.7),
    entry('/apie', 0.6),

    // Program detail pages
    entry('/programs/nursery', 0.8),
    entry('/programs/preschool', 0.8),
    entry('/programs/after-school', 0.8),
    entry('/programs/tisa', 0.8),
  ];

  return pages;
}
