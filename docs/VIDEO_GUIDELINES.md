# Video Optimization Guidelines

## Recommended Video Specifications

### For Portfolio/Showcase Videos:
- **Format**: MP4 (H.264 codec) - best browser compatibility
- **Resolution**: 
  - Mobile: 720p (1280x720) or 1080p (1920x1080)
  - Desktop: 1080p (1920x1080) max
- **Frame Rate**: 24fps or 30fps (avoid 60fps unless necessary)
- **Bitrate**: 
  - 720p: 2-3 Mbps
  - 1080p: 4-5 Mbps
- **File Size Target**: 
  - 720p: 5-15 MB per minute
  - 1080p: 10-30 MB per minute
- **Max File Size**: 50 MB per video (for good loading performance)

### Alternative: WebM Format (Smaller, but less compatible)
- **Format**: WebM (VP9 codec)
- **File Size**: 30-50% smaller than MP4
- **Browser Support**: Chrome, Firefox, Edge (not Safari)

## Video Optimization Tools

### Online Tools (Free):
1. **CloudConvert** (https://cloudconvert.com)
   - Upload video → Convert to optimized MP4
   - Set resolution, bitrate, quality

2. **HandBrake** (Desktop App - Free)
   - Best for batch processing
   - Download: https://handbrake.fr

3. **FFmpeg** (Command Line - Most Control)
   ```bash
   # Install: brew install ffmpeg (Mac) or download from ffmpeg.org
   
   # Optimize video:
   ffmpeg -i input.mp4 -vcodec h264 -acodec aac -b:v 2M -b:a 128k -s 1280x720 output.mp4
   ```

### Quick HandBrake Settings:
- **Preset**: Fast 720p30 or Fast 1080p30
- **Quality**: RF 23-28 (lower = better quality, larger file)
- **Framerate**: Same as source or 30fps
- **Audio**: AAC, 128kbps

## Implementation Options

### Option 1: Self-Hosted (Recommended for small files)
- Store videos in `/public/videos/` folder
- Use HTML5 `<video>` tag
- Pros: Full control, no external dependencies
- Cons: Increases repository size

### Option 2: External Hosting (Recommended for large files)
- **Vimeo** (Free tier: 500MB/week, 5GB total)
- **YouTube** (Unlimited, but adds branding)
- **Cloudflare Stream** (Paid, but excellent performance)
- **AWS S3 + CloudFront** (Scalable, pay-per-use)

### Option 3: Lazy Loading with Poster Image
- Use a poster image (screenshot) as placeholder
- Load video only when user clicks/interacts
- Best for performance

## Example Implementation

```jsx
// In MobileCaseView.jsx or DesktopCaseView.jsx
const renderVideo = (source, poster, alt) => {
  return (
    <video 
      className="w-full h-auto"
      controls
      preload="metadata"
      poster={poster}
      playsInline
    >
      <source src={source} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};
```

## File Size Recommendations by Use Case

### Hero/Background Videos:
- Max: 10-15 MB
- Resolution: 720p
- Duration: 10-30 seconds

### Case Study Videos:
- Max: 20-50 MB
- Resolution: 1080p
- Duration: 30 seconds - 2 minutes

### Process/Detail Videos:
- Max: 15-30 MB
- Resolution: 720p-1080p
- Duration: 15-60 seconds

## Quick Checklist Before Uploading:
- [ ] Video is under 50 MB
- [ ] Resolution is 1080p or less
- [ ] Format is MP4 (H.264)
- [ ] Duration is under 2 minutes (for portfolio)
- [ ] Audio is AAC, 128kbps
- [ ] Tested on mobile device

