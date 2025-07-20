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
        'http://localhost:3002/',
        'http://localhost:3002/about',
        'http://localhost:3002/about/policy',
        'http://localhost:3002/programs',
        'http://localhost:3002/programs/after-school',
        'http://localhost:3002/programs/nursery',
        'http://localhost:3002/team',
        'http://localhost:3002/locations',
        'http://localhost:3002/learning',
        'http://localhost:3002/contact',
        'http://localhost:3002/apply',
        'http://localhost:3002/accepted',
      ],
      // Performance settings
      numberOfRuns: 1,
      headless: true,
      // Chrome settings
      // Determine config by env var (desktop | mobile)
      /*  ------------------------------------------------------------------
       *  Use env LIGHTHOUSE_FORM_FACTOR=desktop to switch.
       *  Defaults to mobile to simulate real-world usage more closely.
       *  ------------------------------------------------------------------ */
      settings: (() => {
        const isDesktop = process.env.LIGHTHOUSE_FORM_FACTOR === 'desktop';

        if (isDesktop) {
          // Desktop-oriented run
          return {
            preset: 'desktop',
            onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
          };
        }

        // Mobile-oriented run (default)
        return {
          throttling: {
            cpuSlowdownMultiplier: 4,
            downloadThroughputKbps: 1600, // Simulated 4G
            uploadThroughputKbps: 750,    // Simulated 4G
            rttMs: 150,                   // Realistic mobile latency
          },
          formFactor: 'mobile',
          screenEmulation: {
            mobile: true,
            width: 375,
            height: 667,
            deviceScaleFactor: 2,
          },
        };
      })(),

      // Extra Chrome flags to bypass localhost security interstitials
      chromeFlags: [
        '--allow-insecure-localhost',                     // treat localhost as secure
        '--disable-web-security',                         // disable same-origin policy for testing
        '--ignore-certificate-errors',                    // ignore TLS/SSL cert errors
        '--unsafely-treat-insecure-origin-as-secure=http://localhost:3002', // whitelist our dev origin
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
