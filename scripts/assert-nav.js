#!/usr/bin/env node
/**
 * Navigation SSR Assertion Script
 * 
 * This script verifies that the <nav> tag is properly included in the server-rendered HTML.
 * It makes a direct HTTP request to the local development server and checks the raw HTML
 * response before any client-side JavaScript runs.
 * 
 * Usage:
 *   node scripts/assert-nav.js
 * 
 * Exit codes:
 *   0 - Success: <nav> tag found in SSR HTML
 *   1 - Failure: <nav> tag not found in SSR HTML
 */

const http = require('http');
const url = 'http://localhost:3000';

// ANSI color codes for better visibility in terminal
const colors = {
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  reset: '\x1b[0m'
};

console.log(`${colors.blue}🔍 Checking for <nav> tag in SSR HTML from ${url}...${colors.reset}`);

http.get(url, (res) => {
  const { statusCode } = res;
  
  // Check if status code is OK (200)
  if (statusCode !== 200) {
    console.error(`${colors.red}❌ Request failed with status code: ${statusCode}${colors.reset}`);
    process.exit(1);
  }

  // Set encoding for text response
  res.setEncoding('utf8');
  
  let rawData = '';
  
  // Collect data chunks
  res.on('data', (chunk) => {
    rawData += chunk;
  });
  
  // Process complete response
  res.on('end', () => {
    try {
      // Search for <nav tag in the HTML (case insensitive)
      const navTagRegex = /<nav\b/i;
      const hasNavTag = navTagRegex.test(rawData);
      
      if (hasNavTag) {
        console.log(`${colors.green}✅ <nav> tag found in SSR HTML${colors.reset}`);
        
        // Extract and show the nav tag context for verification
        const navContext = extractNavContext(rawData);
        if (navContext) {
          console.log(`${colors.yellow}📋 Nav context:${colors.reset}\n${navContext}\n`);
        }
        
        process.exit(0);
      } else {
        console.error(`${colors.red}❌ <nav> tag NOT found in SSR HTML!${colors.reset}`);
        console.error(`${colors.yellow}This indicates the Navigation component may not be properly server-rendered.${colors.reset}`);
        
        // Log first 500 chars of HTML for debugging
        console.error(`${colors.yellow}📋 First 500 chars of HTML:${colors.reset}\n${rawData.substring(0, 500)}...\n`);
        
        process.exit(1);
      }
    } catch (e) {
      console.error(`${colors.red}❌ Error parsing response: ${e.message}${colors.reset}`);
      process.exit(1);
    }
  });
}).on('error', (e) => {
  console.error(`${colors.red}❌ Request error: ${e.message}${colors.reset}`);
  console.error(`${colors.yellow}Is the Next.js server running at ${url}?${colors.reset}`);
  process.exit(1);
});

/**
 * Extract the navigation tag and surrounding context from HTML
 */
function extractNavContext(html) {
  // Find the position of the nav tag
  const navPosition = html.search(/<nav\b/i);
  if (navPosition === -1) return null;
  
  // Extract 200 chars before and after for context
  const startPos = Math.max(0, navPosition - 200);
  const endPos = Math.min(html.length, navPosition + 200);
  
  return html.substring(startPos, endPos)
    .replace(/</g, '\n<')  // Add newlines before tags for readability
    .trim();
}
