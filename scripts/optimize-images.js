#!/usr/bin/env node

/**
 * Image Optimization Script
 * Converts all JPG/PNG images to WebP format for better performance
 * 
 * Usage: node scripts/optimize-images.js
 */

const fs = require('fs');
const path = require('path');

// Check if sharp is installed
let sharp;
try {
  sharp = require('sharp');
} catch (e) {
  console.error('❌ Error: sharp is not installed.');
  console.log('📦 Please install it first: npm install --save-dev sharp');
  process.exit(1);
}

const IMAGE_DIR = path.join(__dirname, '../public/images');
const SUPPORTED_FORMATS = ['.jpg', '.jpeg', '.png'];
const QUALITY = 85; // WebP quality (0-100)
const DELETE_ORIGINALS = process.argv.includes('--delete-originals'); // Delete original files after conversion

async function convertToWebP(inputPath, outputPath) {
  try {
    await sharp(inputPath)
      .webp({ quality: QUALITY })
      .toFile(outputPath);
    
    const originalSize = fs.statSync(inputPath).size;
    const webpSize = fs.statSync(outputPath).size;
    const savings = ((1 - webpSize / originalSize) * 100).toFixed(1);
    
    return {
      success: true,
      originalSize,
      webpSize,
      savings: parseFloat(savings),
    };
  } catch (error) {
    return {
      success: false,
      error: error.message,
    };
  }
}

async function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  const results = {
    converted: 0,
    skipped: 0,
    errors: 0,
    deleted: 0,
    totalSavings: 0,
    totalOriginalSize: 0,
    totalWebpSize: 0,
  };

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      // Recursively process subdirectories
      const subResults = await processDirectory(filePath);
      results.converted += subResults.converted;
      results.skipped += subResults.skipped;
      results.errors += subResults.errors;
      results.deleted += subResults.deleted;
      results.totalSavings += subResults.totalSavings;
      results.totalOriginalSize += subResults.totalOriginalSize;
      results.totalWebpSize += subResults.totalWebpSize;
    } else {
      const ext = path.extname(file).toLowerCase();
      
      if (SUPPORTED_FORMATS.includes(ext)) {
        const webpPath = filePath.replace(/\.(jpg|jpeg|png)$/i, '.webp');
        
        // Skip if WebP already exists
        if (fs.existsSync(webpPath)) {
          console.log(`⏭️  Skipping ${filePath} (WebP already exists)`);
          results.skipped++;
          continue;
        }

        console.log(`🔄 Converting ${filePath}...`);
        const result = await convertToWebP(filePath, webpPath);

        if (result.success) {
          results.converted++;
          results.totalOriginalSize += result.originalSize;
          results.totalWebpSize += result.webpSize;
          results.totalSavings += result.savings;
          console.log(`✅ ${path.basename(filePath)} → ${path.basename(webpPath)} (${result.savings}% smaller)`);
          
          // Delete original file if option is enabled and WebP was created successfully
          if (DELETE_ORIGINALS && fs.existsSync(webpPath)) {
            try {
              fs.unlinkSync(filePath);
              results.deleted++;
              console.log(`🗑️  Deleted original: ${path.basename(filePath)}`);
            } catch (deleteError) {
              console.error(`⚠️  Could not delete ${filePath}: ${deleteError.message}`);
            }
          }
        } else {
          results.errors++;
          console.error(`❌ Error converting ${filePath}: ${result.error}`);
        }
      }
    }
  }

  return results;
}

async function main() {
  console.log('🚀 Starting image optimization...\n');
  
  if (DELETE_ORIGINALS) {
    console.log('⚠️  WARNING: --delete-originals flag is enabled. Original files will be deleted after conversion!\n');
  }
  
  if (!fs.existsSync(IMAGE_DIR)) {
    console.error(`❌ Error: Image directory not found: ${IMAGE_DIR}`);
    process.exit(1);
  }

  const results = await processDirectory(IMAGE_DIR);

  console.log('\n📊 Summary:');
  console.log(`✅ Converted: ${results.converted} images`);
  console.log(`⏭️  Skipped: ${results.skipped} images`);
  console.log(`❌ Errors: ${results.errors} images`);
  if (DELETE_ORIGINALS) {
    console.log(`🗑️  Deleted originals: ${results.deleted} files`);
  }
  console.log(`💾 Original size: ${(results.totalOriginalSize / 1024 / 1024).toFixed(2)} MB`);
  console.log(`💾 WebP size: ${(results.totalWebpSize / 1024 / 1024).toFixed(2)} MB`);
  if (results.converted > 0) {
    console.log(`🎉 Total savings: ${(results.totalSavings / results.converted).toFixed(1)}% (${((results.totalOriginalSize - results.totalWebpSize) / 1024 / 1024).toFixed(2)} MB)`);
  }
  
  if (!DELETE_ORIGINALS) {
    console.log('\n📝 Next steps:');
    console.log('1. Test the WebP images in your application');
    console.log('2. Update your code to use .webp images');
    console.log('3. Run with --delete-originals flag to remove original files');
  } else {
    console.log('\n✅ Optimization complete! Original files have been deleted.');
    console.log('📝 Next steps:');
    console.log('1. Update your code to use .webp images');
    console.log('2. Test the images in your application');
  }
}

main().catch(console.error);

