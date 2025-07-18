#!/usr/bin/env node
/**
 * Translation Keys Counter & Analyzer
 * 
 * This script analyzes the translations.ts file to:
 * - Count total keys per language
 * - Provide a breakdown by section
 * - Identify mismatches between languages
 * 
 * Usage: node scripts/count-translation-keys.js
 */

// Import the translations object
// Note: We're using dynamic require to handle TypeScript files
try {
  // Try to require directly first (for compiled JS)
  var { translations } = require('../lib/translations');
} catch (e) {
  try {
    // If that fails, try using ts-node to load TypeScript
    require('ts-node/register');
    var { translations } = require('../lib/translations.ts');
  } catch (err) {
    console.error('Error loading translations file:');
    console.error(err.message);
    console.error('\nPlease make sure:');
    console.error('1. You\'re running this from the project root');
    console.error('2. The translations file exists at lib/translations.ts');
    console.error('3. You have ts-node installed (npm install -g ts-node)');
    process.exit(1);
  }
}

// ANSI color codes for prettier output
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  gray: '\x1b[90m',
};

/**
 * Recursively counts keys in an object
 * @param {Object} obj - The object to count keys in
 * @param {String} prefix - Current key path prefix
 * @param {Object} result - Accumulator for results
 * @returns {Object} Object with counts and paths
 */
function countKeysRecursive(obj, prefix = '', result = { count: 0, paths: [] }) {
  for (const key in obj) {
    const currentPath = prefix ? `${prefix}.${key}` : key;
    
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      // Recurse into nested objects
      countKeysRecursive(obj[key], currentPath, result);
    } else {
      // Count leaf nodes (actual translation strings)
      result.count++;
      result.paths.push(currentPath);
    }
  }
  return result;
}

/**
 * Analyzes sections in a language
 * @param {Object} langObj - The language object to analyze
 * @returns {Object} Section breakdown with counts
 */
function analyzeSections(langObj) {
  const sections = {};
  
  for (const section in langObj) {
    sections[section] = countKeysRecursive(langObj[section]).count;
  }
  
  return sections;
}

/**
 * Finds missing keys between languages
 * @param {Array} languages - Array of language codes
 * @returns {Object} Missing keys by language
 */
function findMissingKeys(languages) {
  const allPaths = {};
  const missingKeys = {};
  
  // Initialize results
  languages.forEach(lang => {
    allPaths[lang] = countKeysRecursive(translations[lang]).paths;
    missingKeys[lang] = [];
  });
  
  // Find all unique paths across all languages
  const uniquePaths = new Set();
  languages.forEach(lang => {
    allPaths[lang].forEach(path => uniquePaths.add(path));
  });
  
  // Check each language for missing paths
  uniquePaths.forEach(path => {
    languages.forEach(lang => {
      if (!allPaths[lang].includes(path)) {
        missingKeys[lang].push(path);
      }
    });
  });
  
  return missingKeys;
}

/**
 * Main function to run the analysis
 */
function analyzeTranslations() {
  console.log(`\n${colors.bright}${colors.cyan}=== TRANSLATION KEYS ANALYSIS ===${colors.reset}\n`);
  
  // Get available languages
  const languages = Object.keys(translations);
  console.log(`${colors.bright}Found ${languages.length} languages:${colors.reset} ${languages.join(', ')}\n`);
  
  // Count total keys per language
  console.log(`${colors.bright}${colors.blue}Total Keys Per Language:${colors.reset}`);
  const langCounts = {};
  
  languages.forEach(lang => {
    const result = countKeysRecursive(translations[lang]);
    langCounts[lang] = result.count;
    console.log(`${colors.yellow}${lang}:${colors.reset} ${result.count} keys`);
  });
  
  // Section breakdown
  console.log(`\n${colors.bright}${colors.blue}Section Breakdown:${colors.reset}`);
  
  languages.forEach(lang => {
    console.log(`\n${colors.bright}${colors.yellow}${lang.toUpperCase()}:${colors.reset}`);
    
    const sections = analyzeSections(translations[lang]);
    const sortedSections = Object.entries(sections)
      .sort((a, b) => b[1] - a[1]); // Sort by count descending
    
    // Calculate max length for padding
    const maxLength = Math.max(...sortedSections.map(([name]) => name.length));
    
    sortedSections.forEach(([section, count]) => {
      const percentage = ((count / langCounts[lang]) * 100).toFixed(1);
      const bar = '█'.repeat(Math.floor(percentage / 5));
      
      console.log(
        `  ${colors.cyan}${section.padEnd(maxLength)}${colors.reset}: ` +
        `${count.toString().padStart(4)} keys ` +
        `${colors.gray}(${percentage}%)${colors.reset} ${colors.green}${bar}${colors.reset}`
      );
    });
  });
  
  // Missing keys analysis
  console.log(`\n${colors.bright}${colors.blue}Missing Keys Analysis:${colors.reset}`);
  
  const missingKeys = findMissingKeys(languages);
  let hasMissingKeys = false;
  
  languages.forEach(lang => {
    if (missingKeys[lang].length > 0) {
      hasMissingKeys = true;
      console.log(`\n${colors.bright}${colors.red}Keys missing in ${lang}:${colors.reset} ${missingKeys[lang].length}`);
      
      // Only show first 10 missing keys to avoid overwhelming output
      const keysToShow = missingKeys[lang].slice(0, 10);
      keysToShow.forEach(key => {
        console.log(`  - ${key}`);
      });
      
      if (missingKeys[lang].length > 10) {
        console.log(`  ${colors.gray}... and ${missingKeys[lang].length - 10} more${colors.reset}`);
      }
    }
  });
  
  if (!hasMissingKeys) {
    console.log(`\n${colors.green}✓ All languages have the same keys. No mismatches found!${colors.reset}`);
  }
  
  // Summary
  console.log(`\n${colors.bright}${colors.cyan}=== SUMMARY ===${colors.reset}`);
  console.log(`${colors.bright}Total unique keys:${colors.reset} ${Math.max(...Object.values(langCounts))}`);
  
  // Calculate file size estimate
  const totalKeys = Object.values(langCounts).reduce((sum, count) => sum + count, 0);
  const estimatedSize = (totalKeys * 30) / 1024; // Rough estimate: 30 bytes per key
  console.log(`${colors.bright}Estimated file size:${colors.reset} ~${estimatedSize.toFixed(1)} KB`);
  
  // Recommendations based on size
  if (estimatedSize > 100) {
    console.log(`\n${colors.yellow}⚠️ Recommendation:${colors.reset} Consider splitting translations into multiple files.`);
    console.log(`  The translations file is getting large, which may impact load times.`);
    console.log(`  Consider using a library like next-intl for better code splitting.`);
  }
}

// Run the analysis
analyzeTranslations();
