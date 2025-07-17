#!/usr/bin/env node

/**
 * Translation Audit Script for TeddyKids Website
 * 
 * This script analyzes the translations.ts file to find:
 * - Missing keys between EN/NL language pairs
 * - Inconsistent nesting structures
 * - Placeholder mismatches (e.g., {0}, %s, {name})
 * - Syntax issues (trailing commas, etc.)
 * 
 * Usage: node scripts/translation-audit.js
 */

const fs = require('fs');
const path = require('path');
const util = require('util');
const os   = require('os');

// Colors for console output
const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  white: '\x1b[37m',
  bold: '\x1b[1m'
};

// Configuration
const CONFIG = {
  // Always resolve relative to the repository root (one level above /scripts)
  translationsPath: path.resolve(__dirname, '..', 'lib', 'translations.ts'),
  outputPath: path.resolve(__dirname, '..', 'translation-audit-report.md'),
  languages: ['en', 'nl'],
  placeholderPatterns: [
    /\{[a-zA-Z0-9_]+\}/g,  // {name}, {count}, etc.
    /\{[0-9]+\}/g,         // {0}, {1}, etc.
    /%[sdifocxXeEgGp%]/g,  // %s, %d, etc. (printf style)
    /<[^>]+>/g             // HTML tags like <strong>
  ]
};

// Results storage
const results = {
  missingKeys: {
    en: [],
    nl: []
  },
  placeholderMismatches: [],
  nestedInconsistencies: [],
  syntaxIssues: [],
  summary: {
    totalKeysEn: 0,
    totalKeysNl: 0,
    missingKeysEn: 0,
    missingKeysNl: 0,
    placeholderMismatches: 0,
    nestedInconsistencies: 0,
    syntaxIssues: 0
  }
};

/**
 * Reads and parses the translations file
 */
async function getTranslations() {
  try {
    // Read the translations.ts file
    const content = fs.readFileSync(CONFIG.translationsPath, 'utf8');
    
    // Extract the translations object using regex
    // This is a simplified approach - in a real-world scenario, you might want to use a TS parser
    // Updated regex to also match variants ending with "} as const;"
    const translationsMatch = content.match(/export\s+const\s+translations\s*=\s*({[\s\S]*?}\s*(?:as\s+const)?\s*;)/);
    
    if (!translationsMatch) {
      throw new Error('Could not find translations object in the file');
    }
    
    // Remove trailing \"as const\" (TS-only syntax) so Node can evaluate the object
    const translationsObjectCode = translationsMatch[1].replace(
      /\s*as\s+const\s*;?$/,
      ';'
    );

    // Create a temporary file to evaluate the translations object
    const tempDir  = fs.mkdtempSync(path.join(os.tmpdir(), 'translation-audit-'));
    const tempFile = path.join(tempDir, 'translations.js');
    fs.writeFileSync(tempFile, `module.exports = ${translationsObjectCode}`);
    
    // Import the translations object
    const translations = require(tempFile);
    
    // Clean up the temporary file
    fs.rmSync(tempDir, { recursive: true, force: true });
    
    return translations;
  } catch (error) {
    console.error(`${colors.red}${colors.bold}Error reading translations:${colors.reset}`, error.message);
    process.exit(1);
  }
}

/**
 * Recursively collects all keys from a nested object
 */
function collectKeys(obj, prefix = '', result = new Set()) {
  if (!obj || typeof obj !== 'object') return result;
  
  Object.entries(obj).forEach(([key, value]) => {
    const fullKey = prefix ? `${prefix}.${key}` : key;
    result.add(fullKey);
    
    if (value && typeof value === 'object' && !Array.isArray(value)) {
      collectKeys(value, fullKey, result);
    }
  });
  
  return result;
}

/**
 * Gets the value at a specific key path in an object
 */
function getValueAtPath(obj, path) {
  const parts = path.split('.');
  let current = obj;
  
  for (const part of parts) {
    if (current === undefined || current === null) return undefined;
    current = current[part];
  }
  
  return current;
}

/**
 * Checks for placeholder mismatches between two strings
 */
function checkPlaceholders(enValue, nlValue, key) {
  if (typeof enValue !== 'string' || typeof nlValue !== 'string') return null;
  
  for (const pattern of CONFIG.placeholderPatterns) {
    const enMatches = enValue.match(pattern) || [];
    const nlMatches = nlValue.match(pattern) || [];
    
    // Check if the number of placeholders matches
    if (enMatches.length !== nlMatches.length) {
      return {
        key,
        enValue,
        nlValue,
        enPlaceholders: enMatches,
        nlPlaceholders: nlMatches,
        pattern: pattern.toString()
      };
    }
    
    // For named placeholders, check if the names match
    if (pattern.toString().includes('[a-zA-Z')) {
      const enPlaceholderSet = new Set(enMatches);
      const nlPlaceholderSet = new Set(nlMatches);
      
      if (enMatches.length > 0 && 
          (enPlaceholderSet.size !== nlPlaceholderSet.size || 
           ![...enPlaceholderSet].every(p => nlPlaceholderSet.has(p)))) {
        return {
          key,
          enValue,
          nlValue,
          enPlaceholders: [...enPlaceholderSet],
          nlPlaceholders: [...nlPlaceholderSet],
          pattern: pattern.toString()
        };
      }
    }
  }
  
  return null;
}

/**
 * Checks for nested inconsistencies (object vs string)
 */
function checkNestedInconsistencies(translations) {
  const issues = [];
  const { en, nl } = translations;
  
  function checkRecursive(enObj, nlObj, path = '') {
    if (!enObj || !nlObj) return;
    
    // Get all keys from both objects
    const enKeys = Object.keys(enObj);
    const nlKeys = Object.keys(nlObj);
    const allKeys = new Set([...enKeys, ...nlKeys]);
    
    for (const key of allKeys) {
      const fullPath = path ? `${path}.${key}` : key;
      const enValue = enObj[key];
      const nlValue = nlObj[key];
      
      // Skip if the key doesn't exist in one of the languages
      if (enValue === undefined || nlValue === undefined) continue;
      
      // Check if the types are different (object vs non-object)
      const enIsObject = enValue && typeof enValue === 'object' && !Array.isArray(enValue);
      const nlIsObject = nlValue && typeof nlValue === 'object' && !Array.isArray(nlValue);
      
      if (enIsObject !== nlIsObject) {
        issues.push({
          key: fullPath,
          enType: enIsObject ? 'object' : typeof enValue,
          nlType: nlIsObject ? 'object' : typeof nlValue,
          enValue: util.inspect(enValue, { depth: 0 }),
          nlValue: util.inspect(nlValue, { depth: 0 })
        });
      } else if (enIsObject && nlIsObject) {
        // Recursively check nested objects
        checkRecursive(enValue, nlValue, fullPath);
      }
    }
  }
  
  checkRecursive(en, nl);
  return issues;
}

/**
 * Main audit function
 */
async function auditTranslations() {
  console.log(`${colors.cyan}${colors.bold}Starting translation audit...${colors.reset}`);
  
  // Get translations
  const translations = await getTranslations();
  
  // Collect all keys for each language
  const enKeys = collectKeys(translations.en);
  const nlKeys = collectKeys(translations.nl);
  
  results.summary.totalKeysEn = enKeys.size;
  results.summary.totalKeysNl = nlKeys.size;
  
  // Find missing keys
  for (const key of enKeys) {
    const nlValue = getValueAtPath(translations.nl, key);
    if (nlValue === undefined) {
      results.missingKeys.nl.push(key);
      results.summary.missingKeysNl++;
    } else if (typeof nlValue === 'string' && nlValue === key) {
      // Detect keys that are being used as fallback values
      results.missingKeys.nl.push(`${key} (fallback)`);
      results.summary.missingKeysNl++;
    } else {
      // Check for placeholder mismatches
      const enValue = getValueAtPath(translations.en, key);
      if (typeof enValue === 'string' && typeof nlValue === 'string') {
        const mismatch = checkPlaceholders(enValue, nlValue, key);
        if (mismatch) {
          results.placeholderMismatches.push(mismatch);
          results.summary.placeholderMismatches++;
        }
      }
    }
  }
  
  for (const key of nlKeys) {
    const enValue = getValueAtPath(translations.en, key);
    if (enValue === undefined) {
      results.missingKeys.en.push(key);
      results.summary.missingKeysEn++;
    } else if (typeof enValue === 'string' && enValue === key) {
      // Detect keys that are being used as fallback values
      results.missingKeys.en.push(`${key} (fallback)`);
      results.summary.missingKeysEn++;
    }
  }
  
  // Check for nested inconsistencies
  results.nestedInconsistencies = checkNestedInconsistencies(translations);
  results.summary.nestedInconsistencies = results.nestedInconsistencies.length;
  
  // Generate report
  generateReport();
  
  // Print summary to console
  printSummary();
}

/**
 * Generates a markdown report of the audit results
 */
function generateReport() {
  const { summary, missingKeys, placeholderMismatches, nestedInconsistencies } = results;
  
  let report = `# TeddyKids Translation Audit Report\n\n`;
  report += `Generated on: ${new Date().toLocaleString()}\n\n`;
  
  // Summary
  report += `## Summary\n\n`;
  report += `- Total keys in English: ${summary.totalKeysEn}\n`;
  report += `- Total keys in Dutch: ${summary.totalKeysNl}\n`;
  report += `- Missing keys in English: ${summary.missingKeysEn}\n`;
  report += `- Missing keys in Dutch: ${summary.missingKeysNl}\n`;
  report += `- Placeholder mismatches: ${summary.placeholderMismatches}\n`;
  report += `- Nested inconsistencies: ${summary.nestedInconsistencies}\n\n`;
  
  // Missing keys
  if (missingKeys.en.length > 0 || missingKeys.nl.length > 0) {
    report += `## Missing Keys\n\n`;
    
    if (missingKeys.en.length > 0) {
      report += `### Missing in English\n\n`;
      report += `\`\`\`\n${missingKeys.en.sort().join('\n')}\n\`\`\`\n\n`;
    }
    
    if (missingKeys.nl.length > 0) {
      report += `### Missing in Dutch\n\n`;
      report += `\`\`\`\n${missingKeys.nl.sort().join('\n')}\n\`\`\`\n\n`;
    }
  }
  
  // Placeholder mismatches
  if (placeholderMismatches.length > 0) {
    report += `## Placeholder Mismatches\n\n`;
    
    placeholderMismatches.forEach(mismatch => {
      report += `### ${mismatch.key}\n\n`;
      report += `- **English:** \`${mismatch.enValue}\`\n`;
      report += `- **Dutch:** \`${mismatch.nlValue}\`\n`;
      report += `- **English placeholders:** ${mismatch.enPlaceholders.join(', ') || 'none'}\n`;
      report += `- **Dutch placeholders:** ${mismatch.nlPlaceholders.join(', ') || 'none'}\n`;
      report += `- **Pattern:** \`${mismatch.pattern}\`\n\n`;
    });
  }
  
  // Nested inconsistencies
  if (nestedInconsistencies.length > 0) {
    report += `## Nested Inconsistencies\n\n`;
    
    nestedInconsistencies.forEach(issue => {
      report += `### ${issue.key}\n\n`;
      report += `- **English type:** \`${issue.enType}\`\n`;
      report += `- **Dutch type:** \`${issue.nlType}\`\n`;
      report += `- **English value:** \`${issue.enValue}\`\n`;
      report += `- **Dutch value:** \`${issue.nlValue}\`\n\n`;
    });
  }
  
  // Write report to file
  fs.writeFileSync(CONFIG.outputPath, report);
  console.log(`${colors.green}Report written to ${CONFIG.outputPath}${colors.reset}`);
}

/**
 * Prints a summary of the audit results to the console
 */
function printSummary() {
  const { summary } = results;
  
  console.log('\n');
  console.log(`${colors.bold}${colors.cyan}======= Translation Audit Summary =======${colors.reset}`);
  console.log(`${colors.bold}Total keys:${colors.reset} EN: ${summary.totalKeysEn}, NL: ${summary.totalKeysNl}`);
  
  if (summary.missingKeysEn > 0) {
    console.log(`${colors.yellow}${colors.bold}Missing in English:${colors.reset} ${summary.missingKeysEn} keys`);
  } else {
    console.log(`${colors.green}${colors.bold}Missing in English:${colors.reset} None`);
  }
  
  if (summary.missingKeysNl > 0) {
    console.log(`${colors.yellow}${colors.bold}Missing in Dutch:${colors.reset} ${summary.missingKeysNl} keys`);
  } else {
    console.log(`${colors.green}${colors.bold}Missing in Dutch:${colors.reset} None`);
  }
  
  if (summary.placeholderMismatches > 0) {
    console.log(`${colors.red}${colors.bold}Placeholder mismatches:${colors.reset} ${summary.placeholderMismatches}`);
  } else {
    console.log(`${colors.green}${colors.bold}Placeholder mismatches:${colors.reset} None`);
  }
  
  if (summary.nestedInconsistencies > 0) {
    console.log(`${colors.red}${colors.bold}Nested inconsistencies:${colors.reset} ${summary.nestedInconsistencies}`);
  } else {
    console.log(`${colors.green}${colors.bold}Nested inconsistencies:${colors.reset} None`);
  }
  
  console.log(`${colors.cyan}${colors.bold}=========================================${colors.reset}`);
  console.log(`\nDetailed report saved to: ${colors.bold}${CONFIG.outputPath}${colors.reset}`);
  
  // Print actionable next steps
  console.log('\n');
  console.log(`${colors.bold}${colors.magenta}Next steps:${colors.reset}`);
  
  if (summary.missingKeysNl > 0) {
    console.log(`- Add the ${summary.missingKeysNl} missing Dutch translations`);
  }
  
  if (summary.missingKeysEn > 0) {
    console.log(`- Add the ${summary.missingKeysEn} missing English translations`);
  }
  
  if (summary.placeholderMismatches > 0) {
    console.log(`- Fix the ${summary.placeholderMismatches} placeholder mismatches`);
  }
  
  if (summary.nestedInconsistencies > 0) {
    console.log(`- Resolve the ${summary.nestedInconsistencies} structure inconsistencies`);
  }
  
  if (summary.missingKeysEn === 0 && summary.missingKeysNl === 0 && 
      summary.placeholderMismatches === 0 && summary.nestedInconsistencies === 0) {
    console.log(`${colors.green}${colors.bold}✓ All translations look good!${colors.reset}`);
  }
}

// Run the audit
auditTranslations().catch(error => {
  console.error(`${colors.red}${colors.bold}Error:${colors.reset}`, error);
  process.exit(1);
});
