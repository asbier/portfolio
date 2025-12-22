#!/usr/bin/env node

/**
 * Video Optimization Script
 * Compresses videos for web using ffmpeg
 * 
 * Usage: node scripts/optimize-video.js <input-video> [output-video]
 * 
 * Requirements: ffmpeg must be installed
 * Install: brew install ffmpeg (Mac) or download from ffmpeg.org
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const inputFile = process.argv[2];
const outputFile = process.argv[3] || inputFile.replace(/\.[^/.]+$/, '_optimized.mp4');

if (!inputFile) {
  console.error('❌ Error: Please provide an input video file');
  console.log('Usage: node scripts/optimize-video.js <input-video> [output-video]');
  process.exit(1);
}

if (!fs.existsSync(inputFile)) {
  console.error(`❌ Error: File not found: ${inputFile}`);
  process.exit(1);
}

// Check if ffmpeg is installed
try {
  execSync('ffmpeg -version', { stdio: 'ignore' });
} catch (e) {
  console.error('❌ Error: ffmpeg is not installed.');
  console.log('📦 Please install it first:');
  console.log('   Mac: brew install ffmpeg');
  console.log('   Windows: Download from https://ffmpeg.org/download.html');
  console.log('   Linux: sudo apt-get install ffmpeg');
  process.exit(1);
}

// Get original file size
const originalSize = fs.statSync(inputFile).size;
const originalSizeMB = (originalSize / 1024 / 1024).toFixed(2);

console.log(`🚀 Optimizing video: ${path.basename(inputFile)}`);
console.log(`📊 Original size: ${originalSizeMB} MB`);
console.log(`⚙️  Settings: 1080p, H.264, 4Mbps bitrate, AAC audio\n`);

try {
  // Optimize video: 1080p, H.264, 4Mbps video bitrate, AAC audio 128kbps
  execSync(
    `ffmpeg -i "${inputFile}" ` +
    `-vcodec h264 ` +
    `-acodec aac ` +
    `-b:v 4M ` +
    `-b:a 128k ` +
    `-vf "scale=1920:1080:force_original_aspect_ratio=decrease,pad=1920:1080:(ow-iw)/2:(oh-ih)/2" ` +
    `-movflags +faststart ` +
    `-y "${outputFile}"`,
    { stdio: 'inherit' }
  );

  // Get optimized file size
  const optimizedSize = fs.statSync(outputFile).size;
  const optimizedSizeMB = (optimizedSize / 1024 / 1024).toFixed(2);
  const savings = ((1 - optimizedSize / originalSize) * 100).toFixed(1);

  console.log(`\n✅ Optimization complete!`);
  console.log(`📊 Original: ${originalSizeMB} MB`);
  console.log(`📊 Optimized: ${optimizedSizeMB} MB`);
  console.log(`🎉 Savings: ${savings}%`);
  console.log(`📁 Output: ${outputFile}`);
  
  if (optimizedSizeMB > 50) {
    console.log(`\n⚠️  Warning: File is still over 50MB. Consider:`);
    console.log(`   - Reducing resolution to 720p`);
    console.log(`   - Shortening video duration`);
    console.log(`   - Lowering bitrate to 2M`);
  }
} catch (error) {
  console.error(`\n❌ Error optimizing video: ${error.message}`);
  process.exit(1);
}

