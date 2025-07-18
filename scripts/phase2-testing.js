#!/usr/bin/env node

/**
 * Phase 2 Testing Script for TeddyKids Website
 * 
 * This script performs comprehensive testing on key routes:
 * - HTTP status checks
 * - Performance metrics
 * - Page element validation
 * - Console error detection
 * 
 * Usage: node scripts/phase2-testing.js [baseUrl]
 * Example: node scripts/phase2-testing.js http://localhost:3001
 */

const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const { performance } = require('perf_hooks');

// Default settings
const DEFAULT_BASE_URL = 'http://localhost:3001';
const VIEWPORT_SIZES = [
  { width: 375, height: 667, name: 'mobile' },
  { width: 768, height: 1024, name: 'tablet' },
  { width: 1280, height: 800, name: 'desktop' }
];
const SCREENSHOTS_DIR = path.join(process.cwd(), 'lighthouse-reports', 'screenshots');
const REPORT_PATH = path.join(process.cwd(), 'lighthouse-reports', 'phase2-report.md');

// Routes to test
const ROUTES = [
  { path: '/', name: 'Homepage', expectedElements: ['hero', 'footer'] },
  { path: '/about', name: 'About Page', expectedElements: ['mission', 'journey'] },
  { path: '/about/policy', name: 'Policy Page', expectedElements: ['documents', 'quality'] },
  { path: '/programs', name: 'Programs Overview', expectedElements: ['nursery', 'preschool', 'afterSchool'] },
  { path: '/programs/after-school', name: 'After School Program', expectedElements: ['schedule', 'activities'] },
  { path: '/programs/nursery', name: 'Nursery Program', expectedElements: ['overview', 'features'] },
  { path: '/team', name: 'Team Page', expectedElements: ['members', 'values'] },
  { path: '/locations', name: 'Locations Page', expectedElements: ['map', 'filters'] },
  { path: '/learning', name: 'Learning Moments', expectedElements: ['moments', 'categories'] },
  { path: '/contact', name: 'Contact Page', expectedElements: ['form', 'info'] },
  { path: '/apply', name: 'Apply Page', expectedElements: ['steps', 'form'] }
];

// Results storage
const results = {
  summary: {
    passedRoutes: 0,
    failedRoutes: 0,
    totalRoutes: ROUTES.length,
    averageLoadTime: 0,
    totalErrors: 0,
    recommendations: []
  },
  routes: []
};

// Ensure directories exist
if (!fs.existsSync(SCREENSHOTS_DIR)) {
  fs.mkdirSync(SCREENSHOTS_DIR, { recursive: true });
}

/**
 * Main test function
 */
async function runTests() {
  const baseUrl = process.argv[2] || DEFAULT_BASE_URL;
  console.log(`🚀 Starting Phase 2 Testing on ${baseUrl}`);
  console.log('📊 Testing key routes for status, performance, and content...\n');

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  let totalLoadTime = 0;

  for (const route of ROUTES) {
    const url = `${baseUrl}${route.path}`;
    const routeResult = {
      name: route.name,
      path: route.path,
      url,
      status: null,
      loadTimeMs: null,
      title: null,
      consoleErrors: [],
      missingElements: [],
      screenshots: [],
      passed: false
    };

    console.log(`🔍 Testing ${route.name} (${url})`);
    
    try {
      // Create a new page for each test to avoid interference
      const page = await browser.newPage();
      
      // Collect console errors
      page.on('console', (msg) => {
        if (msg.type() === 'error') {
          routeResult.consoleErrors.push(msg.text());
        }
      });

      // Measure load time
      const startTime = performance.now();
      const response = await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });
      const loadTime = performance.now() - startTime;
      
      routeResult.status = response.status();
      routeResult.loadTimeMs = Math.round(loadTime);
      totalLoadTime += loadTime;
      
      // Get page title
      routeResult.title = await page.title();
      
      // Check for expected elements
      for (const elementId of route.expectedElements) {
        const elementExists = await page.evaluate((id) => {
          // Try different selector strategies
          return !!(
            document.getElementById(id) || 
            document.querySelector(`.${id}`) || 
            document.querySelector(`[data-testid="${id}"]`) ||
            document.querySelector(`*[class*="${id}"]`)
          );
        }, elementId);
        
        if (!elementExists) {
          routeResult.missingElements.push(elementId);
        }
      }
      
      // Take screenshots at different viewport sizes
      for (const viewport of VIEWPORT_SIZES) {
        await page.setViewport(viewport);
        const screenshotPath = path.join(
          SCREENSHOTS_DIR, 
          `${route.path.replace(/\//g, '-').replace(/^-/, '')}-${viewport.name}.png`
        );
        await page.screenshot({ path: screenshotPath, fullPage: false });
        routeResult.screenshots.push({
          viewport: viewport.name,
          path: screenshotPath
        });
      }
      
      // Determine if the test passed
      routeResult.passed = (
        routeResult.status === 200 && 
        routeResult.title && 
        routeResult.missingElements.length === 0 && 
        routeResult.consoleErrors.length === 0
      );
      
      // Update summary
      if (routeResult.passed) {
        results.summary.passedRoutes++;
      } else {
        results.summary.failedRoutes++;
      }
      
      results.summary.totalErrors += routeResult.consoleErrors.length;
      
      // Add performance recommendations
      if (routeResult.loadTimeMs > 3000) {
        results.summary.recommendations.push(
          `⚠️ ${route.name} is loading slowly (${routeResult.loadTimeMs}ms). Consider optimizing images and reducing JavaScript.`
        );
      }
      
      // Close the page
      await page.close();
      
      console.log(`  ${routeResult.passed ? '✅' : '❌'} Status: ${routeResult.status}, Load time: ${routeResult.loadTimeMs}ms`);
      
    } catch (error) {
      console.error(`  ❌ Error testing ${url}: ${error.message}`);
      routeResult.error = error.message;
      results.summary.failedRoutes++;
    }
    
    results.routes.push(routeResult);
  }
  
  // Calculate average load time
  results.summary.averageLoadTime = Math.round(totalLoadTime / ROUTES.length);
  
  // Add general recommendations
  if (results.summary.totalErrors > 0) {
    results.summary.recommendations.push(
      `🔍 Found ${results.summary.totalErrors} console errors. Phase 3 should include detailed error investigation.`
    );
  }
  
  if (results.summary.failedRoutes > 0) {
    results.summary.recommendations.push(
      `🛠️ ${results.summary.failedRoutes} routes have issues. Fix these before proceeding to Phase 3.`
    );
  }
  
  // Always recommend these for Phase 3
  results.summary.recommendations.push(
    '📱 Phase 3 should include comprehensive cross-browser testing.',
    '🔒 Phase 3 should include security scanning and form validation testing.'
  );
  
  // Close the browser
  await browser.close();
  
  // Generate report
  generateReport();
  
  console.log(`\n📝 Testing complete! Report saved to ${REPORT_PATH}`);
  console.log(`📊 Summary: ${results.summary.passedRoutes}/${results.summary.totalRoutes} routes passed`);
}

/**
 * Generate a markdown report from test results
 */
function generateReport() {
  let report = `# TeddyKids Website - Phase 2 Testing Report\n\n`;
  report += `*Generated on: ${new Date().toLocaleString()}*\n\n`;
  
  // Add summary section
  report += `## Summary\n\n`;
  report += `- **Routes Tested:** ${results.summary.totalRoutes}\n`;
  report += `- **Routes Passed:** ${results.summary.passedRoutes} ✅\n`;
  report += `- **Routes Failed:** ${results.summary.failedRoutes} ${results.summary.failedRoutes > 0 ? '❌' : ''}\n`;
  report += `- **Average Load Time:** ${results.summary.averageLoadTime}ms\n`;
  report += `- **Console Errors Found:** ${results.summary.totalErrors}\n\n`;
  
  // Add recommendations
  report += `## Recommendations for Phase 3\n\n`;
  results.summary.recommendations.forEach(rec => {
    report += `- ${rec}\n`;
  });
  
  // Add detailed results
  report += `\n## Detailed Results\n\n`;
  
  results.routes.forEach(route => {
    report += `### ${route.name} (${route.path})\n\n`;
    report += `- **Status:** ${route.status} ${route.status === 200 ? '✅' : '❌'}\n`;
    report += `- **Load Time:** ${route.loadTimeMs}ms\n`;
    report += `- **Page Title:** ${route.title || 'Missing ❌'}\n`;
    
    if (route.missingElements.length > 0) {
      report += `- **Missing Elements:** ${route.missingElements.join(', ')} ❌\n`;
    } else {
      report += `- **Expected Elements:** All present ✅\n`;
    }
    
    if (route.consoleErrors.length > 0) {
      report += `- **Console Errors:** ❌\n`;
      route.consoleErrors.forEach(error => {
        report += `  - \`${error}\`\n`;
      });
    } else {
      report += `- **Console Errors:** None ✅\n`;
    }
    
    report += `- **Screenshots:** ${route.screenshots.map(s => s.viewport).join(', ')}\n`;
    
    if (route.error) {
      report += `- **Test Error:** ${route.error} ❌\n`;
    }
    
    report += `\n`;
  });
  
  // Write report to file
  fs.writeFileSync(REPORT_PATH, report);
}

// Run the tests
runTests().catch(error => {
  console.error('❌ Test execution failed:', error);
  process.exit(1);
});
