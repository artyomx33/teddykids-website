#!/usr/bin/env bash
#
# copy-for-review.sh
#
# This script copies all TypeScript and JavaScript files from the project
# into a 'review/' folder while preserving the directory structure.
# Excludes files in node_modules, .next, and review directories.
#
# Usage: 
#   chmod +x copy-for-review.sh
#   ./copy-for-review.sh
#

# Define source and destination directories
SRC_DIR="."
DEST_DIR="review"

echo "🔍 Starting code files copy process..."

# Remove any existing review folder
if [ -d "$DEST_DIR" ]; then
  echo "🗑️  Removing existing $DEST_DIR directory..."
  rm -rf "$DEST_DIR"
fi

# Create the destination directory
mkdir -p "$DEST_DIR"
echo "📁 Created $DEST_DIR directory"

# Find and copy all TypeScript and JavaScript files
echo "📋 Copying files..."
find "$SRC_DIR" \
  -type f \
  \( -iname '*.ts' -o -iname '*.tsx' -o -iname '*.js' -o -iname '*.jsx' \) \
  ! -path "./node_modules/*" \
  ! -path "./.next/*" \
  ! -path "./review/*" \
  ! -path "./dist/*" \
| while read -r file; do
    # Compute target path
    target="$DEST_DIR/${file#./}"
    # Create target directory if it doesn't exist
    mkdir -p "$(dirname "$target")"
    # Copy the file
    cp "$file" "$target"
    echo "  ✓ Copied: $file"
  done

# Count the number of copied files
file_count=$(find "$DEST_DIR" -type f | wc -l)

echo "✅ Completed! $file_count code files have been copied into ./$DEST_DIR"
echo "📝 You can now review the files in the $DEST_DIR directory"
