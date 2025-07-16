import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.teddykids.nl';

  // Main static routes
  const staticRoutes = [
    '', // Homepage
    '/about',
    '/programs',
    '/locations',
    '/team',
    '/learning',
    '/contact',
    '/apply',
  ];

  // Program-specific routes
  const programRoutes = [
    '/programs/nursery',
    '/programs/preschool',
    '/programs/after-school',
    '/programs/tisa',
  ];

  // Combine all routes
  const allRoutes = [...staticRoutes, ...programRoutes];

  // Generate sitemap entries
  return allRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1.0 : 0.8, // Homepage gets highest priority
  }));
}
