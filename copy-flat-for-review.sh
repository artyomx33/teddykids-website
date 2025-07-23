#!/usr/bin/env bash
#
# copy-flat-for-review.sh
#
# This script copies all TypeScript and JavaScript files from the project
# into a single flat directory 'review/reviewallinone' without preserving
# the directory structure. If filename collisions occur, a counter suffix
# is appended to ensure uniqueness.
#
# Usage: 
#   chmod +x copy-flat-for-review.sh
#   ./copy-flat-for-review.sh
#

# Define source and destination directories
SRC_DIR="."
DEST_DIR="review/reviewallinone"

echo "🔍 Starting code files flat copy process..."

# Remove any existing destination folder
if [ -d "$DEST_DIR" ]; then
  echo "🗑️  Removing existing $DEST_DIR directory..."
  rm -rf "$DEST_DIR"
fi

# Create the destination directory
mkdir -p "$DEST_DIR"
echo "📁 Created $DEST_DIR directory"

# Find and copy all TypeScript and JavaScript files
echo "📋 Copying files to flat directory..."
find "$SRC_DIR" \
  -type f \
  \( -iname '*.ts' -o -iname '*.tsx' -o -iname '*.js' -o -iname '*.jsx' \) \
  ! -path "./node_modules/*" \
  ! -path "./.next/*" \
  ! -path "./review/*" \
  ! -path "./dist/*" \
| while read -r file; do
    # Get just the filename without path
    filename=$(basename "$file")
    target="$DEST_DIR/$filename"
    
    # Handle filename collisions by appending a counter
    counter=1
    base_name="${filename%.*}"
    extension="${filename##*.}"
    
    while [ -f "$target" ]; do
      target="$DEST_DIR/${base_name}_${counter}.${extension}"
      ((counter++))
    done
    
    # Copy the file
    cp "$file" "$target"
    echo "  ✓ Copied: $file → $(basename "$target")"
  done

# Count the number of copied files
file_count=$(find "$DEST_DIR" -type f | wc -l)

echo "✅ Completed! $file_count code files have been copied into ./$DEST_DIR"
echo "📝 You can now review all files in a single flat directory"
