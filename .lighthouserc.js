module.exports = {
  ci: {
    collect: {
      /* Use production build for accurate metrics */
      startServerCommand: 'npm run start',
      url: [
        'http://localhost:3000/',
        'http://localhost:3000/programs',
        'http://localhost:3000/locations',
        'http://localhost:3000/apply'
      ],
      numberOfRuns: 3,
      /* Mobile-optimized settings with 4G throttling */
      settings: {
        throttling: {
          cpuSlowdownMultiplier: 4,
          downloadThroughputKbps: 1600,  // Simulated 4G
          uploadThroughputKbps: 750,     // Simulated 4G
          rttMs: 150                     // Realistic mobile latency
        },
        formFactor: 'mobile',
        screenEmulation: {
          mobile: true,
          width: 375,
          height: 667,
          deviceScaleFactor: 2,
        }
      }
    },
    upload: {
      /* Upload to temporary public storage for CI reports */
      target: 'temporary-public-storage',
    },
    assert: {
      /* Minimum 90% score requirements */
      assertions: {
        'categories:performance': ['error', { minScore: 0.9 }],
        'categories:accessibility': ['error', { minScore: 0.9 }],
        'first-contentful-paint': ['error', { maxNumericValue: 2500 }],
        'largest-contentful-paint': ['error', { maxNumericValue: 3000 }],
        'interactive': ['error', { maxNumericValue: 3500 }],
        'cumulative-layout-shift': ['error', { maxNumericValue: 0.1 }],
        'total-blocking-time': ['error', { maxNumericValue: 300 }],
        'max-potential-fid': ['error', { maxNumericValue: 100 }],
      }
    },
    server: {
      /* Server control settings */
      port: 9000,
      chromeFlags: '--no-sandbox',
      extraHeaders: {
        'Cache-Control': 'no-cache',
      }
    },
  },
};
