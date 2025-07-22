#!/usr/bin/env node
/**
 * Fix Apply Page Translation Keys
 * 
 * This script finds all translation function calls in ApplyPageClient.tsx
 * that use 'applyPage.' prefix but don't have 'locationsPage.' prefix,
 * and adds the missing prefix.
 * 
 * Usage:
 *   node scripts/fix-apply-translations.js
 */

const fs = require('fs');
const path = require('path');

// File path
const filePath = path.join(process.cwd(), 'app', 'apply', 'ApplyPageClient.tsx');

// Read the file
console.log(`Reading ${filePath}...`);
let content;
try {
  content = fs.readFileSync(filePath, 'utf8');
} catch (err) {
  console.error(`Error reading file: ${err.message}`);
  process.exit(1);
}

// Count original occurrences for reporting
const originalCount = (content.match(/t\(['"]applyPage\./g) || []).length;
console.log(`Found ${originalCount} instances of t('applyPage.* or t("applyPage.* to fix`);

// Create a backup
const backupPath = `${filePath}.bak`;
try {
  fs.writeFileSync(backupPath, content, 'utf8');
  console.log(`Backup created at ${backupPath}`);
} catch (err) {
  console.error(`Error creating backup: ${err.message}`);
  process.exit(1);
}

// Regular expressions to match translation calls with 'applyPage.' prefix
// but without 'locationsPage.' prefix
const singleQuoteRegex = /t\('(applyPage\.[^']+)'\)/g;
const doubleQuoteRegex = /t\("(applyPage\.[^"]+)"\)/g;

// Track changes for diff output
const changes = [];

// Replace function to capture changes
function replacer(match, group1, offset) {
  const line = content.substring(0, offset).split('\n').length;
  const newValue = `locationsPage.${group1}`;
  changes.push({
    line,
    old: group1,
    new: newValue
  });
  return match.replace(group1, newValue);
}

// Fix single quotes
let updatedContent = content.replace(singleQuoteRegex, (match, group1, offset) => {
  return replacer(match, group1, offset);
});

// Fix double quotes
updatedContent = updatedContent.replace(doubleQuoteRegex, (match, group1, offset) => {
  return replacer(match, group1, offset);
});

// Write the updated content
try {
  fs.writeFileSync(filePath, updatedContent, 'utf8');
  console.log(`Updated ${filePath}`);
} catch (err) {
  console.error(`Error writing file: ${err.message}`);
  console.log('Restoring from backup...');
  try {
    fs.copyFileSync(backupPath, filePath);
    console.log('Restored from backup');
  } catch (restoreErr) {
    console.error(`Error restoring backup: ${restoreErr.message}`);
  }
  process.exit(1);
}

// Show changes
if (changes.length > 0) {
  console.log('\nChanges made:');
  console.log('=============');
  changes.forEach(change => {
    console.log(`Line ${change.line}:`);
    console.log(`  - ${change.old}`);
    console.log(`  + ${change.new}`);
    console.log('');
  });
  console.log(`Total: ${changes.length} translation keys updated`);
} else {
  console.log('No changes were needed');
}

console.log('\nDone! 🎉');
