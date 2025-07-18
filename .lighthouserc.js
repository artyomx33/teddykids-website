/**
 * Lighthouse CI Configuration
 * 
 * This configuration file defines:
 * - All TeddyKids website routes to audit
 * - Output settings for reports
 * - Chrome settings for headless execution
 */

module.exports = {
  ci: {
    collect: {
      // All main TeddyKids routes
      url: [
        'http://localhost:3003/',
        'http://localhost:3003/about',
        'http://localhost:3003/about/policy',
        'http://localhost:3003/programs',
        'http://localhost:3003/programs/after-school',
        'http://localhost:3003/programs/nursery',
        'http://localhost:3003/team',
        'http://localhost:3003/locations',
        'http://localhost:3003/learning',
        'http://localhost:3003/contact',
        'http://localhost:3003/apply',
        'http://localhost:3003/accepted',
      ],
      // Performance settings
      numberOfRuns: 1,
      headless: true,
      // Chrome settings
      settings: {
        // Run as a desktop-class device
        preset: 'desktop',
        onlyCategories: [
          'performance',
          'accessibility',
          'best-practices',
          'seo'
        ],
      },
      // Extra Chrome flags to bypass localhost security interstitials
      chromeFlags: [
        '--allow-insecure-localhost',                     // treat localhost as secure
        '--disable-web-security',                         // disable same-origin policy for testing
        '--ignore-certificate-errors',                    // ignore TLS/SSL cert errors
        '--unsafely-treat-insecure-origin-as-secure=http://localhost:3003', // whitelist our dev origin
        // Additional aggressive flags to further relax security & resource constraints
        '--disable-features=VizDisplayCompositor',
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-extensions',
        '--disable-gpu',
        '--no-first-run',
        '--disable-default-apps',
        '--disable-background-timer-throttling',
        '--disable-backgrounding-occluded-windows',
        '--disable-renderer-backgrounding',
      ],
    },
    upload: {
      // Output settings
      target: 'filesystem',
      outputDir: 'lighthouse-reports',
      reportFilenamePattern: '%%PATHNAME%%-%%DATETIME%%-report.%%EXTENSION%%',
    },
    assert: {
      // Minimum score thresholds
      preset: 'lighthouse:recommended',
      assertions: {
        'categories:performance': ['warn', { minScore: 0.7 }],
        'categories:accessibility': ['warn', { minScore: 0.9 }],
        'categories:best-practices': ['warn', { minScore: 0.9 }],
        'categories:seo': ['warn', { minScore: 0.9 }],
      },
    },
  },
};
