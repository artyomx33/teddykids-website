#!/usr/bin/env node

/**
 * Lighthouse Audit Script for TeddyKids Website
 * 
 * This script runs Lighthouse audits for all main routes of the TeddyKids website,
 * saves JSON reports for each route, and generates a summary markdown file.
 * 
 * Usage: node scripts/lighthouse-all.js [baseUrl]
 * Example: node scripts/lighthouse-all.js http://localhost:3001
 */

const fs = require('fs');
const path = require('path');
/**
 * Lighthouse publishes both CommonJS and ESM builds.  Depending on how Node
 * resolves the package, `require('lighthouse')` may return either:
 *   • the Lighthouse function itself  (CommonJS)
 *   • an object `{ lighthouse: [Function] }` (ESM transpiled to CJS)
 *
 * To be safe, grab the default export if present, otherwise use the module
 * directly.
 */
const lhModule = require('lighthouse');
const lighthouse = lhModule.lighthouse || lhModule;
const chromeLauncher = require('chrome-launcher');
const { URL } = require('url');

// Default settings
const DEFAULT_BASE_URL = 'http://localhost:3001';
const REPORTS_DIR = path.join(process.cwd(), 'lighthouse-reports');
const SUMMARY_PATH = path.join(REPORTS_DIR, 'lighthouse-summary.md');
const LIGHTHOUSE_OPTIONS = {
  logLevel: 'error',
  output: 'json',
  onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
  chromeFlags: ['--headless', '--disable-gpu', '--no-sandbox']
};

// Routes to test
const ROUTES = [
  { path: '/', name: 'Homepage' },
  { path: '/about', name: 'About Page' },
  { path: '/about/policy', name: 'Policy Page' },
  { path: '/programs', name: 'Programs Overview' },
  { path: '/programs/after-school', name: 'After School Program' },
  { path: '/programs/nursery', name: 'Nursery Program' },
  { path: '/team', name: 'Team Page' },
  { path: '/locations', name: 'Locations Page' },
  { path: '/learning', name: 'Learning Moments' },
  { path: '/contact', name: 'Contact Page' },
  { path: '/apply', name: 'Apply Page' },
  { path: '/accepted', name: 'Accepted Page' }
];

// Results storage
const results = [];

/**
 * Ensure the reports directory exists
 */
function ensureReportsDir() {
  if (!fs.existsSync(REPORTS_DIR)) {
    fs.mkdirSync(REPORTS_DIR, { recursive: true });
  }
}

/**
 * Run Lighthouse audit for a specific URL
 * @param {string} url - The URL to audit
 * @param {object} options - Lighthouse options
 * @param {object} chrome - Chrome instance
 * @returns {Promise<object>} - Lighthouse results
 */
async function runLighthouseAudit(url, options, chrome) {
  try {
    const result = await lighthouse(url, options, null);
    return result;
  } catch (error) {
    console.error(`Error running Lighthouse audit for ${url}:`, error);
    return null;
  }
}

/**
 * Save Lighthouse report to file
 * @param {string} routePath - The route path
 * @param {object} report - Lighthouse report
 */
function saveReport(routePath, report) {
  const sanitizedPath = routePath.replace(/\//g, '-').replace(/^-/, '') || 'home';
  const reportPath = path.join(REPORTS_DIR, `${sanitizedPath}.report.json`);
  
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
  console.log(`  📝 Report saved to ${reportPath}`);
}

/**
 * Extract scores from Lighthouse report
 * @param {object} report - Lighthouse report
 * @returns {object} - Extracted scores
 */
function extractScores(report) {
  if (!report || !report.lhr || !report.lhr.categories) {
    return {
      performance: 0,
      accessibility: 0,
      bestPractices: 0,
      seo: 0
    };
  }
  
  const { categories } = report.lhr;
  
  return {
    performance: Math.round(categories.performance?.score * 100) || 0,
    accessibility: Math.round(categories.accessibility?.score * 100) || 0,
    bestPractices: Math.round(categories['best-practices']?.score * 100) || 0,
    seo: Math.round(categories.seo?.score * 100) || 0
  };
}

/**
 * Generate a markdown summary report
 * @param {Array<object>} results - Audit results
 */
function generateSummaryReport(results) {
  let report = `# TeddyKids Website - Lighthouse Audit Summary\n\n`;
  report += `*Generated on: ${new Date().toLocaleString()}*\n\n`;
  
  // Add summary section
  report += `## Summary\n\n`;
  
  // Calculate average scores
  const avgScores = results.reduce((acc, result) => {
    acc.performance += result.scores.performance;
    acc.accessibility += result.scores.accessibility;
    acc.bestPractices += result.scores.bestPractices;
    acc.seo += result.scores.seo;
    return acc;
  }, { performance: 0, accessibility: 0, bestPractices: 0, seo: 0 });
  
  const routeCount = results.length;
  avgScores.performance = Math.round(avgScores.performance / routeCount);
  avgScores.accessibility = Math.round(avgScores.accessibility / routeCount);
  avgScores.bestPractices = Math.round(avgScores.bestPractices / routeCount);
  avgScores.seo = Math.round(avgScores.seo / routeCount);
  
  report += `### Average Scores\n\n`;
  report += `- **Performance:** ${avgScores.performance}/100\n`;
  report += `- **Accessibility:** ${avgScores.accessibility}/100\n`;
  report += `- **Best Practices:** ${avgScores.bestPractices}/100\n`;
  report += `- **SEO:** ${avgScores.seo}/100\n\n`;
  
  // Add recommendations based on scores
  report += `### Recommendations\n\n`;
  
  if (avgScores.performance < 90) {
    report += `- 🚀 **Performance (${avgScores.performance}/100)**: Consider optimizing images, reducing JavaScript, and implementing code splitting.\n`;
  }
  
  if (avgScores.accessibility < 90) {
    report += `- ♿ **Accessibility (${avgScores.accessibility}/100)**: Improve color contrast, add ARIA labels, and ensure keyboard navigation works properly.\n`;
  }
  
  if (avgScores.bestPractices < 90) {
    report += `- 🔧 **Best Practices (${avgScores.bestPractices}/100)**: Update libraries with security vulnerabilities and ensure proper HTTPS implementation.\n`;
  }
  
  if (avgScores.seo < 90) {
    report += `- 🔍 **SEO (${avgScores.seo}/100)**: Add meta descriptions, fix crawlable links, and ensure proper heading hierarchy.\n`;
  }
  
  if (avgScores.performance >= 90 && avgScores.accessibility >= 90 && avgScores.bestPractices >= 90 && avgScores.seo >= 90) {
    report += `- ✅ **All scores are excellent!** Continue maintaining these high standards.\n`;
  }
  
  // Add detailed results table
  report += `\n## Detailed Results\n\n`;
  report += `| Route | Performance | Accessibility | Best Practices | SEO |\n`;
  report += `|-------|-------------|--------------|----------------|-----|\n`;
  
  results.forEach(result => {
    const { name, path, scores } = result;
    report += `| [${name}](${path}) | ${scores.performance} | ${scores.accessibility} | ${scores.bestPractices} | ${scores.seo} |\n`;
  });
  
  // Add notes
  report += `\n## Notes\n\n`;
  report += `- Tests run in headless Chrome\n`;
  report += `- Scores may vary slightly between runs\n`;
  report += `- Mobile performance may differ from desktop\n`;
  
  // Write report to file
  fs.writeFileSync(SUMMARY_PATH, report);
  console.log(`\n📊 Summary report generated: ${SUMMARY_PATH}`);
}

/**
 * Main function to run all audits
 */
async function runAllAudits() {
  const baseUrl = process.argv[2] || DEFAULT_BASE_URL;
  console.log(`🚀 Starting Lighthouse audits for TeddyKids website: ${baseUrl}`);
  
  // Ensure reports directory exists
  ensureReportsDir();
  
  // Launch Chrome
  console.log('🌐 Launching Chrome...');
  const chrome = await chromeLauncher.launch({ chromeFlags: LIGHTHOUSE_OPTIONS.chromeFlags });
  const options = { ...LIGHTHOUSE_OPTIONS, port: chrome.port };
  
  try {
    // Run audits for each route
    for (const route of ROUTES) {
      const url = new URL(route.path, baseUrl).toString();
      console.log(`\n🔍 Auditing ${route.name} (${url})...`);
      
      const result = await runLighthouseAudit(url, options, chrome);
      
      if (result) {
        // Save the report
        saveReport(route.path, result);
        
        // Extract scores
        const scores = extractScores(result);
        console.log(`  ✅ Scores: Performance: ${scores.performance}, Accessibility: ${scores.accessibility}, Best Practices: ${scores.bestPractices}, SEO: ${scores.seo}`);
        
        // Add to results
        results.push({
          name: route.name,
          path: route.path,
          url,
          scores
        });
      } else {
        console.log(`  ❌ Audit failed`);
      }
    }
    
    // Generate summary report
    generateSummaryReport(results);
    
  } catch (error) {
    console.error('Error running audits:', error);
  } finally {
    // Close Chrome
    await chrome.kill();
    console.log('\n🏁 Lighthouse audits completed!');
  }
}

// Run the audits
runAllAudits().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});
