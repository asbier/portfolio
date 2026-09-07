import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar/Navbar';
import GrainOverlay from '../components/GrainOverlay/GrainOverlay';
import { preventOrphan } from '../utils/text';
import { TITLE_ON_DARK, TITLE_ON_LIGHT, titleColorForImage } from '../utils/imageTone';

const DesktopCaseView = ({ caseItem }) => {
  const navigate = useNavigate();
  const [scaledImages, setScaledImages] = useState({});
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showMouseFollower, setShowMouseFollower] = useState(true);
  const [isDesktop, setIsDesktop] = useState(false);
  const [imageFormats, setImageFormats] = useState({});
  const [imageAspects, setImageAspects] = useState({});
  const [imageTitleColors, setImageTitleColors] = useState({});
  const IMAGE_WIDTHS = { landscape: 420, portrait: 280, square: 360 };
  const IMAGE_HEIGHTS = { landscape: 294, portrait: 400, square: 360 }; // 10:7 / 7:10 / 1:1
  const MAX_IMAGE_WIDTH = 420;
  const [viewportSize, setViewportSize] = useState({ width: window.innerWidth, height: window.innerHeight });

  const toggleScale = (imageId) => {
    setScaledImages(prev => ({ ...prev, [imageId]: !prev[imageId] }));
  };

  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 1024);
    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  useEffect(() => {
    const handleResize = () => setViewportSize({ width: window.innerWidth, height: window.innerHeight });
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;
    const handleMouseMove = (e) => setMousePosition({ x: e.clientX, y: e.clientY });
    const hideTimer = setTimeout(() => setShowMouseFollower(false), 8000);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      clearTimeout(hideTimer);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isDesktop]);

  const allImages = useMemo(() => {
    return [
      caseItem.introImage,
      caseItem.image,
      caseItem.detailImage1, caseItem.detailImage2, caseItem.detailImage3,
      caseItem.detailImage4, caseItem.detailImage5, caseItem.detailImage6,
      caseItem.detailImage7, caseItem.detailImage8, caseItem.detailImage9,
      caseItem.detailImage10, caseItem.detailImage11,
      caseItem.detailVideo1, caseItem.detailVideo2
    ].filter(Boolean);
  }, [caseItem]);

  const grid = useMemo(() => {
    const containerWidth = Math.min(1800, viewportSize.width - 96);
    const containerLeft = (viewportSize.width - containerWidth) / 2 + 48;
    const colWidth = containerWidth / 12;
    return { containerWidth, containerLeft, colWidth };
  }, [viewportSize]);

  const colX = (col) => grid.containerLeft + grid.colWidth * (col - 1);

  const layoutConfig = useMemo(() => {
    const startY = 180;
    const cols = [1, 5, 9]; // left, center, right (grid-aligned)
    const yOffsets = [-20, -140, 120];
    const imageRows = Math.ceil(allImages.length / 3);
    const rowGap = imageRows <= 1 ? 420 : imageRows === 2 ? 520 : 600;
    return { startY, cols, yOffsets, rowGap };
  }, [allImages.length]);

  const getRowAnchorY = (row) => {
    const imageMid = layoutConfig.startY
      + row * layoutConfig.rowGap
      + layoutConfig.yOffsets[1] // center image offset
      + 160; // approx half of 320px image height
    return imageMid + 16; // subtle offset for readability
  };

  // 1. ZENTRALE TEXT-POSITIONEN (an Bildern ausgerichtet)
  const cardPositions = useMemo(() => {
    const leftCol = 2;
    const rightCol = 8;
    const zigzagOffset = (row, side) => {
      const base = row % 2 === 0 ? -20 : 20;
      const sideNudge = side === 'left' ? -8 : 8;
      return base + sideNudge;
    };
    return {
      projectInfo: { x: colX(leftCol), y: getRowAnchorY(0) + zigzagOffset(0, 'left') },
      challenge:   { x: colX(rightCol), y: getRowAnchorY(0) + zigzagOffset(0, 'right') },
      impact:      { x: colX(leftCol), y: getRowAnchorY(1) + zigzagOffset(1, 'left') },
      outcome:     { x: colX(rightCol), y: getRowAnchorY(1) + zigzagOffset(1, 'right') },
      learning:    { x: colX(leftCol), y: getRowAnchorY(2) + zigzagOffset(2, 'left') },
      offer:       { x: colX(rightCol), y: getRowAnchorY(2) + zigzagOffset(2, 'right') }
    };
  }, [grid, layoutConfig]);

  const getCardMotion = (key, order) => ({
    initial: { x: cardPositions[key].x, y: cardPositions[key].y + 40, opacity: 0 },
    animate: { x: cardPositions[key].x, y: cardPositions[key].y, opacity: 1 },
    transition: { duration: 0.7, delay: 0.1 * order, ease: "easeOut" }
  });

  const getCardMotionAt = (pos, order) => ({
    initial: { x: pos.x, y: pos.y + 40, opacity: 0 },
    animate: { x: pos.x, y: pos.y, opacity: 1 },
    transition: { duration: 0.7, delay: 0.1 * order, ease: "easeOut" }
  });

  // 2. BILDER-POSITIONEN
  const initialPositions = useMemo(() => {
    const imageCount = allImages.length;
    const positions = [];
    const { cols, yOffsets, startY, rowGap } = layoutConfig;

    for (let i = 0; i < imageCount; i++) {
      const row = Math.floor(i / 3);
      const slot = i % 3;
      const overlapY = slot === 1 ? -40 : slot === 2 ? -10 : 0;
      const overlapX = 0;
      const rawX = colX(cols[slot]) + overlapX;
      const rawY = startY + row * rowGap + yOffsets[slot] + overlapY;
      const maxX = grid.containerLeft + grid.containerWidth - MAX_IMAGE_WIDTH;
      const clampedX = Math.max(grid.containerLeft, Math.min(rawX, maxX));
      const clampedY = Math.max(60, rawY);
      positions.push({
        x: clampedX,
        y: clampedY
      });
    }
    return positions;
  }, [allImages, colX, layoutConfig, grid]);

  const outcomePosition = useMemo(() => {
    if (!caseItem.outcome || initialPositions.length === 0) {
      return cardPositions.outcome;
    }
    // Use default grid position when there's only one row of images (e.g. 3 images) so cards stay in zigzag grid like other cases
    const imageRows = Math.ceil(initialPositions.length / 3);
    if (imageRows <= 1) {
      return cardPositions.outcome;
    }
    const rightX = colX(7);
    const leftX = colX(1);
    let maxIndex = 0;
    initialPositions.forEach((pos, idx) => {
      if (pos.y > initialPositions[maxIndex].y) maxIndex = idx;
    });
    const last = initialPositions[maxIndex];
    const outcomeX = last.x >= colX(6) ? leftX : rightX;
    return { x: outcomeX, y: last.y };
  }, [caseItem.outcome, initialPositions, cardPositions.outcome, colX]);

  const minContentHeight = useMemo(() => {
    const imageLastY = initialPositions.length === 0
      ? 0
      : Math.max(...initialPositions.map(p => p.y));
    const cardLastY = Math.max(
      cardPositions.projectInfo.y,
      cardPositions.challenge.y,
      cardPositions.impact.y,
      outcomePosition?.y ?? cardPositions.outcome.y,
      cardPositions.learning.y,
      cardPositions.offer.y
    );
    return Math.max(imageLastY + 900, cardLastY + 800, viewportSize.height + 400);
  }, [initialPositions, cardPositions, outcomePosition, viewportSize.height]);

  useEffect(() => {
    const formats = {};
    const aspects = {};
    const titleColors = {};
    allImages.forEach((url, index) => {
      const isVideo = url.toLowerCase().match(/\.(mp4|mov|webm)$/);
      const forcedDark = caseItem.darkImages?.includes(url);
      if (caseItem.forceSquareImages?.includes(url)) {
        formats[index] = 'square';
        aspects[index] = 1;
        setImageFormats(prev => ({ ...prev, ...formats }));
        setImageAspects(prev => ({ ...prev, ...aspects }));
      } else if (isVideo) {
        formats[index] = 'landscape';
        aspects[index] = 10 / 7;
        titleColors[index] = TITLE_ON_DARK;
        setImageFormats(prev => ({ ...prev, ...formats }));
        setImageAspects(prev => ({ ...prev, ...aspects }));
        setImageTitleColors(prev => ({ ...prev, ...titleColors }));
      } else {
        const img = new Image();
        img.onload = () => {
          const ratio = img.width / img.height;
          aspects[index] = ratio;
          formats[index] =
            Math.abs(ratio - 1) < 0.08 ? 'square' :
            ratio >= 1 ? 'landscape' : 'portrait';
          titleColors[index] = titleColorForImage(img, forcedDark);
          setImageFormats(prev => ({ ...prev, ...formats }));
          setImageAspects(prev => ({ ...prev, ...aspects }));
          setImageTitleColors(prev => ({ ...prev, ...titleColors }));
        };
        img.src = url;
      }
      if (forcedDark) {
        titleColors[index] = TITLE_ON_DARK;
        setImageTitleColors(prev => ({ ...prev, ...titleColors }));
      }
    });
  }, [allImages, caseItem.forceSquareImages, caseItem.darkImages]);

  const getImageSize = (index, format) => {
    const ratio = imageAspects[index];
    if (ratio) {
      const width = ratio >= 1 ? IMAGE_WIDTHS.landscape : IMAGE_WIDTHS.portrait;
      return { width, height: Math.round(width / ratio) };
    }
    return {
      width: IMAGE_WIDTHS[format] || IMAGE_WIDTHS.landscape,
      height: IMAGE_HEIGHTS[format] || IMAGE_HEIGHTS.landscape,
    };
  };

  const getImageTitle = (url, index) => {
    if (caseItem.imageTitles?.[index]) return caseItem.imageTitles[index];
    const filename = url.split('/').pop()?.split('.')[0] || '';
    return filename.replace(/[-_]/g, ' ').toUpperCase();
  };

  return (
    <div className="min-h-screen bg-[#F5F3F0] overflow-x-hidden select-text selection:bg-[#DFFF00] selection:text-[#363C53]">
      <GrainOverlay />
      <Navbar />
      
      {isDesktop && showMouseFollower && (
        <motion.div className="fixed pointer-events-none z-[100]" style={{ left: mousePosition.x + 20, top: mousePosition.y + 20, transform: 'translate(-50%, -50%)' }}>
          <div className="relative flex items-center justify-center w-[200px] h-[200px]">
            <svg width="200" height="200" viewBox="0 0 200 200" className="absolute inset-0">
              <circle cx="100" cy="100" r="90" fill="none" stroke="#FFB115" strokeWidth="0.8" />
            </svg>
            <div className="text-black text-[10px] font-neue-book-semi uppercase text-center px-6 leading-tight">Drag to reorder, pull to resize</div>
          </div>
        </motion.div>
      )}
      
      <main className="relative w-full pt-[120px] cursor-crosshair">
        <button onClick={() => navigate('/')} className="fixed top-[140px] left-12 z-50 text-xs font-black font-neue uppercase border-b border-black">← See all cases</button>

        <div className="relative max-w-[1800px] mx-auto px-12" style={{ minHeight: `${minContentHeight}px` }}>
          
          {allImages.map((url, index) => {
            const isVideo = url.toLowerCase().match(/\.(mp4|mov|webm)$/);
            const mediaId = `media-${index}`;
            const isScaled = scaledImages[mediaId];
            const format = imageFormats[index] || 'landscape';
            const { width: mediaWidth, height: mediaHeight } = getImageSize(index, format);

            return (
              <motion.div
                key={mediaId}
                drag dragMomentum={false}
                initial={{ x: initialPositions[index]?.x || 400, y: initialPositions[index]?.y || 200 }}
                onClick={() => toggleScale(mediaId)}
                className="absolute z-10 group cursor-grab active:cursor-grabbing"
                style={{ width: `${mediaWidth}px` }} 
                animate={{ scale: isScaled ? 1.8 : 1, zIndex: isScaled ? 100 : 10 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <div className="relative w-full shadow-2xl overflow-hidden bg-black/5">
                  <div className="relative w-full" style={{ height: `${mediaHeight}px` }}>
                    {isVideo ? (
                      <video src={url} autoPlay loop muted playsInline className="w-full h-full object-cover pointer-events-none" />
                    ) : (
                      <img
                        src={url}
                        alt=""
                        className="w-full h-full object-cover select-none pointer-events-none"
                        style={
                          caseItem.imagePositions?.[url]
                            ? { objectPosition: caseItem.imagePositions[url] }
                            : url === caseItem.image && caseItem.imagePosition
                              ? { objectPosition: caseItem.imagePosition }
                              : { objectPosition: 'center' }
                        }
                      />
                    )}
                    {/* Radial gradient overlay - smooth gradient from 70% center to 10% edges, disappears on hover */}
                    <div 
                      className="absolute inset-0 z-10 pointer-events-none opacity-100 group-hover:opacity-0 transition-opacity duration-500"
                      style={{
                        background: 'radial-gradient(ellipse at center, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.1) 100%)'
                      }}
                    />
                  </div>
                  {url !== caseItem.image && (
                    <div className="absolute bottom-0 left-0 pl-4 pb-4 z-20 pointer-events-none">
                      <p
                        className="text-base font-neue-semibold uppercase"
                        style={{ color: imageTitleColors[index] || TITLE_ON_LIGHT }}
                      >
                        {getImageTitle(url, index)}
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}

          <motion.div 
            drag dragMomentum={false}
            {...getCardMotion('projectInfo', 0)}
            className="absolute backdrop-blur-xl p-8 cursor-move w-[340px] z-20"
            style={{
              background: 'linear-gradient(to bottom, rgba(124, 122, 116, 0) 0%, rgba(245, 243, 240, 0.95) 100%)'
            }}
          >
            <h2 className="text-[24px] lg:text-[36px] font-neue-semibold uppercase mb-[40px] text-[#363C53] text-grain leading-[1.1]">{caseItem.title}</h2>
            <p className="text-lg font-neue-book-semi leading-relaxed text-[#979797] text-grain text-justify hyphens-none" style={{ textAlignLast: 'left' }}>{preventOrphan(caseItem.description)}</p>
          </motion.div>

          {caseItem.challenge && (
            <motion.div 
              drag dragMomentum={false}
              {...getCardMotion('challenge', 1)}
              className="absolute backdrop-blur-xl p-8 cursor-move w-[340px] z-20"
              style={{
                background: 'linear-gradient(to bottom, rgba(124, 122, 116, 0) 0%, rgba(245, 243, 240, 0.95) 100%)'
              }}
            >
              <h2 className="text-[24px] lg:text-[36px] font-neue-semibold uppercase mb-[40px] text-[#363C53] text-grain leading-[1.1]">CHALLENGE</h2>
              <p className="text-lg font-neue-book-semi leading-relaxed text-[#979797] text-grain text-justify hyphens-none" style={{ textAlignLast: 'left' }}>{preventOrphan(caseItem.challenge)}</p>
            </motion.div>
          )}

          {caseItem.impact && (
            <motion.div 
              drag dragMomentum={false}
              {...getCardMotion('impact', 2)}
              className="absolute backdrop-blur-xl p-8 cursor-move w-[340px] z-20"
              style={{
                background: 'linear-gradient(to bottom, rgba(124, 122, 116, 0) 0%, rgba(245, 243, 240, 0.95) 100%)'
              }}
            >
              <h2 className="text-[24px] lg:text-[36px] font-neue-semibold uppercase mb-[40px] text-[#363C53] text-grain leading-[1.1]">IMPACT</h2>
              <p className="text-lg font-neue-book-semi leading-relaxed text-[#979797] text-grain text-justify hyphens-none" style={{ textAlignLast: 'left' }}>{preventOrphan(caseItem.impact)}</p>
            </motion.div>
          )}

          {caseItem.outcome && (
            <motion.div 
              drag dragMomentum={false}
              {...getCardMotionAt(outcomePosition, 3)}
              className="absolute backdrop-blur-xl p-8 cursor-move w-[340px] z-20"
              style={{
                background: 'linear-gradient(to bottom, rgba(124, 122, 116, 0) 0%, rgba(245, 243, 240, 0.95) 100%)'
              }}
            >
              <h2 className="text-[24px] lg:text-[36px] font-neue-semibold uppercase mb-[40px] text-[#363C53] text-grain leading-[1.1]">OUTCOME</h2>
              <p className="text-lg font-neue-book-semi leading-relaxed text-[#979797] text-grain text-justify hyphens-none" style={{ textAlignLast: 'left' }}>{preventOrphan(caseItem.outcome)}</p>
            </motion.div>
          )}

          {caseItem.learning && (
            <motion.div 
              drag dragMomentum={false}
              {...getCardMotion('learning', 4)}
              className="absolute backdrop-blur-xl p-8 cursor-move w-[340px] z-20"
              style={{
                background: 'linear-gradient(to bottom, rgba(124, 122, 116, 0) 0%, rgba(245, 243, 240, 0.95) 100%)'
              }}
            >
              <h2 className="text-[24px] lg:text-[36px] font-neue-semibold uppercase mb-[40px] text-[#363C53] text-grain leading-[1.1]">LEARNING</h2>
              <p className="text-lg font-neue-book-semi leading-relaxed italic text-[#979797] text-grain text-justify hyphens-none" style={{ textAlignLast: 'left' }}>"{preventOrphan(caseItem.learning)}"</p>
            </motion.div>
          )}

          {caseItem.offer && (
            <motion.div 
              drag dragMomentum={false}
              {...getCardMotion('offer', 5)}
              className="absolute backdrop-blur-xl p-8 cursor-move w-[340px] z-20"
              style={{
                background: 'linear-gradient(to bottom, rgba(124, 122, 116, 0) 0%, rgba(245, 243, 240, 0.95) 100%)'
              }}
            >
              <p className="text-lg font-neue-book-semi mb-6 text-[#979797] text-grain text-justify hyphens-none" style={{ textAlignLast: 'left' }}>{preventOrphan(caseItem.offer)}</p>
              <a href="mailto:mail@annemaris.de" className="text-lg font-neue-book-semi underline text-[#363C53] text-grain">Contact</a>
            </motion.div>
          )}

          <div className="fixed bottom-12 left-12 z-0 pointer-events-none text-[#363C53]">
            <h3 className="text-[24px] lg:text-[36px] font-neue-semibold uppercase mb-6 text-grain">{caseItem.team?.title || 'TEAM'}</h3>
            <div className="space-y-2 text-lg font-neue-book-semi text-grain">
              {caseItem.team?.collaboration ? (
                <p>{caseItem.team.collaboration}</p>
              ) : (
                caseItem.team?.members?.map((m, i) => <p key={i}>{m}</p>)
              )}
              {!caseItem.team?.collaboration && !caseItem.team?.members && <p>Collaborative Project</p>}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DesktopCaseView;