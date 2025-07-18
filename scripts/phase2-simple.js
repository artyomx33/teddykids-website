#!/usr/bin/env node

/**
 * Phase 2 Simple Testing Script for TeddyKids Website
 * 
 * This script performs basic testing on key routes:
 * - HTTP status checks using curl
 * - Response time measurements
 * - Basic content validation
 * - Generates a markdown report
 * 
 * Usage: node scripts/phase2-simple.js [baseUrl]
 * Example: node scripts/phase2-simple.js http://localhost:3001
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Default settings
const DEFAULT_BASE_URL = 'http://localhost:3001';
const REPORT_PATH = path.join(process.cwd(), 'lighthouse-reports', 'phase2-simple-report.md');

// Routes to test with expected content markers
const ROUTES = [
  { path: '/', name: 'Homepage', expectedContent: ['Teddy Kids', 'From Baby Steps to Global Citizens'] },
  { path: '/about', name: 'About Page', expectedContent: ['Our Mission', 'Our Journey'] },
  { path: '/about/policy', name: 'Policy Page', expectedContent: ['Policy', 'Documents'] },
  { path: '/programs', name: 'Programs Overview', expectedContent: ['Our Programs', 'Nursery', 'Preschool'] },
  { path: '/programs/after-school', name: 'After School Program', expectedContent: ['After School', 'Activities'] },
  { path: '/programs/nursery', name: 'Nursery Program', expectedContent: ['Nursery', 'Features'] },
  { path: '/team', name: 'Team Page', expectedContent: ['Team', 'Magic Makers'] },
  { path: '/locations', name: 'Locations Page', expectedContent: ['Locations', 'Leiden'] },
  { path: '/learning', name: 'Learning Moments', expectedContent: ['Learning', 'Moments'] },
  { path: '/contact', name: 'Contact Page', expectedContent: ['Contact', 'Touch'] },
  { path: '/apply', name: 'Apply Page', expectedContent: ['Apply', 'Journey'] }
];

// Results storage
const results = {
  summary: {
    passedRoutes: 0,
    failedRoutes: 0,
    totalRoutes: ROUTES.length,
    averageResponseTime: 0,
    recommendations: []
  },
  routes: []
};

// Ensure reports directory exists
const reportsDir = path.dirname(REPORT_PATH);
if (!fs.existsSync(reportsDir)) {
  fs.mkdirSync(reportsDir, { recursive: true });
}

/**
 * Test a route using curl
 * @param {string} url - The URL to test
 * @returns {Object} - Status code and response time
 */
function testRoute(url) {
  try {
    // Use curl to get status code and time_total
    const curlCommand = `curl -s -w "%{http_code} %{time_total}" -o /dev/null ${url}`;
    const result = execSync(curlCommand, { encoding: 'utf8' });
    const [statusCode, responseTime] = result.trim().split(' ');
    
    return {
      statusCode: parseInt(statusCode, 10),
      responseTime: parseFloat(responseTime) * 1000 // Convert to ms
    };
  } catch (error) {
    return {
      statusCode: 0,
      responseTime: 0,
      error: error.message
    };
  }
}

/**
 * Check if the page content contains expected strings
 * @param {string} url - The URL to check
 * @param {Array<string>} expectedContent - Strings that should be present
 * @returns {Object} - Missing content and found content
 */
function checkContent(url, expectedContent) {
  try {
    // Get the page content
    const content = execSync(`curl -s ${url}`, { encoding: 'utf8' });
    
    const missing = [];
    const found = [];
    
    // Check for each expected content string
    for (const expected of expectedContent) {
      if (content.includes(expected)) {
        found.push(expected);
      } else {
        missing.push(expected);
      }
    }
    
    return { missing, found };
  } catch (error) {
    return {
      missing: expectedContent,
      found: [],
      error: error.message
    };
  }
}

/**
 * Generate a markdown report from test results
 */
function generateReport() {
  let report = `# TeddyKids Website - Phase 2 Simple Testing Report\n\n`;
  report += `*Generated on: ${new Date().toLocaleString()}*\n\n`;
  
  // Add summary section
  report += `## Summary\n\n`;
  report += `- **Routes Tested:** ${results.summary.totalRoutes}\n`;
  report += `- **Routes Passed:** ${results.summary.passedRoutes} ✅\n`;
  report += `- **Routes Failed:** ${results.summary.failedRoutes} ${results.summary.failedRoutes > 0 ? '❌' : ''}\n`;
  report += `- **Average Response Time:** ${Math.round(results.summary.averageResponseTime)}ms\n\n`;
  
  // Add recommendations
  report += `## Recommendations\n\n`;
  if (results.summary.recommendations.length === 0) {
    report += `- All routes are working correctly! ✅\n`;
  } else {
    results.summary.recommendations.forEach(rec => {
      report += `- ${rec}\n`;
    });
  }
  
  // Add detailed results
  report += `\n## Detailed Results\n\n`;
  
  results.routes.forEach(route => {
    report += `### ${route.name} (${route.path})\n\n`;
    report += `- **Status:** ${route.statusCode} ${route.statusCode === 200 ? '✅' : '❌'}\n`;
    report += `- **Response Time:** ${Math.round(route.responseTime)}ms\n`;
    
    if (route.missingContent.length > 0) {
      report += `- **Missing Content:** ${route.missingContent.join(', ')} ❌\n`;
    } else {
      report += `- **Expected Content:** All present ✅\n`;
    }
    
    if (route.error) {
      report += `- **Error:** ${route.error} ❌\n`;
    }
    
    report += `\n`;
  });
  
  // Write report to file
  fs.writeFileSync(REPORT_PATH, report);
  return report;
}

/**
 * Main test function
 */
async function runTests() {
  const baseUrl = process.argv[2] || DEFAULT_BASE_URL;
  console.log(`🚀 Starting Phase 2 Simple Testing on ${baseUrl}`);
  console.log('📊 Testing key routes for status, response time, and content...\n');

  let totalResponseTime = 0;
  
  for (const route of ROUTES) {
    const url = `${baseUrl}${route.path}`;
    console.log(`🔍 Testing ${route.name} (${url})`);
    
    // Test route status and response time
    const { statusCode, responseTime, error: routeError } = testRoute(url);
    
    // Check content if status code is 200
    let missingContent = [];
    let contentError = null;
    
    if (statusCode === 200) {
      const { missing, error } = checkContent(url, route.expectedContent);
      missingContent = missing;
      contentError = error;
    } else {
      missingContent = route.expectedContent;
    }
    
    // Create route result
    const routeResult = {
      name: route.name,
      path: route.path,
      url,
      statusCode,
      responseTime,
      missingContent,
      error: routeError || contentError,
      passed: statusCode === 200 && missingContent.length === 0
    };
    
    // Update summary
    if (routeResult.passed) {
      results.summary.passedRoutes++;
      totalResponseTime += responseTime;
    } else {
      results.summary.failedRoutes++;
      
      // Add recommendation
      if (statusCode !== 200) {
        results.summary.recommendations.push(
          `⚠️ ${route.name} returned status code ${statusCode}. Check if the route is properly implemented.`
        );
      } else if (missingContent.length > 0) {
        results.summary.recommendations.push(
          `⚠️ ${route.name} is missing expected content: ${missingContent.join(', ')}.`
        );
      }
    }
    
    results.routes.push(routeResult);
    
    // Log result
    console.log(`  ${routeResult.passed ? '✅' : '❌'} Status: ${statusCode}, Response time: ${Math.round(responseTime)}ms`);
  }
  
  // Calculate average response time for passed routes
  if (results.summary.passedRoutes > 0) {
    results.summary.averageResponseTime = totalResponseTime / results.summary.passedRoutes;
  }
  
  // Generate and print report
  const report = generateReport();
  
  console.log(`\n📝 Testing complete! Report saved to ${REPORT_PATH}`);
  console.log(`📊 Summary: ${results.summary.passedRoutes}/${results.summary.totalRoutes} routes passed`);
  
  return results;
}

// Run the tests
runTests().catch(error => {
  console.error('❌ Test execution failed:', error);
  process.exit(1);
});
