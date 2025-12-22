# Video Performance Analysis & Optimization Plan

## Current Status

### Video Files:
- **MM_Phone_PH-G-12.mp4**: 9.1 MB
- **Video_comp_final.mp4**: 12 MB
- **Format**: MP4 (H.264) ✅ Good for compatibility
- **Total**: ~21 MB

### Current Implementation:
- ✅ `preload="none"` - Videos don't download until user clicks
- ✅ `loading="lazy"` - Videos load only when scrolled into view
- ✅ Poster images - Show thumbnail before play
- ✅ `playsInline` - Better mobile experience

## Performance Recommendations

### 1. **File Size Optimization** (Recommended)
**Current**: 9.1 MB + 12 MB = 21 MB total
**Target**: 5-8 MB each = 10-16 MB total (30-50% reduction)

**Options:**
- **Option A: Use HandBrake** (Easiest - GUI tool)
  - Download: https://handbrake.fr
  - Preset: "Fast 720p30" or "Fast 1080p30"
  - Quality: RF 23-28
  - Expected reduction: 30-50%

- **Option B: Use CloudConvert** (Online - No install)
  - Upload videos → Convert → Optimize
  - Set resolution: 1080p max
  - Set bitrate: 2-4 Mbps
  - URL: https://cloudconvert.com

- **Option C: Install ffmpeg** (Most control)
  ```bash
  brew install ffmpeg
  npm run optimize:video path/to/video.mp4
  ```

### 2. **Code-Level Optimizations** (Already Implemented ✅)
- ✅ `preload="none"` - No download until play
- ✅ `loading="lazy"` - Lazy loading
- ✅ Poster images - Thumbnail before play
- ✅ `playsInline` - Mobile optimization

### 3. **Additional Optimizations** (Can Add)

#### A. Intersection Observer for Video Loading
Only load video when it's about to enter viewport:
```jsx
// More aggressive lazy loading
useEffect(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Load video source
      }
    });
  });
}, []);
```

#### B. Multiple Video Sources (WebM fallback)
Provide WebM version for better compression:
```jsx
<video>
  <source src="video.webm" type="video/webm" />
  <source src="video.mp4" type="video/mp4" />
</video>
```

#### C. Responsive Video Sizes
Serve different sizes for mobile vs desktop:
- Mobile: 720p (smaller file)
- Desktop: 1080p (larger file)

#### D. Video CDN (For Future)
- Use Cloudflare Stream
- Use Vimeo (free tier)
- Use AWS S3 + CloudFront

## Recommended Action Plan

### Immediate (Quick Win):
1. ✅ **Keep current implementation** - Already optimized at code level
2. **Optimize video files** - Reduce file sizes by 30-50%
   - Use HandBrake or CloudConvert
   - Target: 5-8 MB per video

### Short Term (Better Performance):
1. Add Intersection Observer for smarter loading
2. Consider WebM format for additional 30% size reduction
3. Add responsive video sizes (mobile vs desktop)

### Long Term (Best Performance):
1. Move videos to CDN
2. Implement adaptive bitrate streaming
3. Add video analytics

## File Size Targets

| Resolution | Bitrate | File Size (1 min) | Use Case |
|------------|---------|-------------------|----------|
| 720p | 2 Mbps | 15 MB | Mobile |
| 1080p | 4 Mbps | 30 MB | Desktop |
| 1080p | 2 Mbps | 15 MB | **Recommended** |

## Current vs Optimized

| Video | Current | Optimized (Target) | Savings |
|-------|---------|-------------------|---------|
| MM_Phone_PH-G-12.mp4 | 9.1 MB | 5-6 MB | ~40% |
| Video_comp_final.mp4 | 12 MB | 6-8 MB | ~40% |
| **Total** | **21 MB** | **11-14 MB** | **~35%** |

## Next Steps

1. **Test current performance** - Check loading times
2. **Optimize videos** - Use HandBrake or CloudConvert
3. **Replace optimized videos** - Update in `/public/images/05_carhartt-wip-new journey_04/`
4. **Test again** - Verify performance improvement

