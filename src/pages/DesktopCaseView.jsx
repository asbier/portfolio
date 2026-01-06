import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar/Navbar';
import GrainOverlay from '../components/GrainOverlay/GrainOverlay';

const DesktopCaseView = ({ caseItem }) => {
  const navigate = useNavigate();
  const [scaledImages, setScaledImages] = useState({});
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showMouseFollower, setShowMouseFollower] = useState(true);
  const [isDesktop, setIsDesktop] = useState(false);
  const [imageFormats, setImageFormats] = useState({});

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
    if (!isDesktop) return;
    const handleMouseMove = (e) => setMousePosition({ x: e.clientX, y: e.clientY });
    const hideTimer = setTimeout(() => setShowMouseFollower(false), 8000);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      clearTimeout(hideTimer);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isDesktop]);

  // 1. Stabile Medienliste (Namen bleiben gleich)
  const allImages = useMemo(() => {
    return [
      caseItem.image,
      caseItem.detailImage1,
      caseItem.detailImage2,
      caseItem.detailImage3,
      caseItem.detailImage4,
      caseItem.detailImage5,
      caseItem.detailImage6,
      caseItem.detailImage7,
      caseItem.detailImage8,
      caseItem.detailImage9,
      caseItem.detailImage10,
      caseItem.detailImage11,
      caseItem.detailVideo1,
      caseItem.detailVideo2
    ].filter(Boolean);
  }, [caseItem]);

  // 2. DEINE SCHÖNEN LAYOUT KOORDINATEN (Zurückgebracht)
  const initialPositions = useMemo(() => {
    const imageCount = allImages.length;

    // HELLAGUTMANN (ID 2)
    if (caseItem.id === 2) {
      return [
        { x: 300, y: 200 }, { x: 1000, y: 300 },
        { x: 400, y: 800 }, { x: 1200, y: 900 }
      ].slice(0, imageCount);
    }
    
    // CONIC ROSE (ID 6)
    if (caseItem.id === 6) {
      return [
        { x: 200, y: 150 }, { x: 1100, y: 250 },
        { x: 300, y: 1000 }, { x: 1200, y: 1100 },
        { x: 150, y: 2000 }, { x: 1050, y: 2100 }
      ].slice(0, imageCount);
    }
    
    // EDITED (ID 7)
    if (caseItem.id === 7) {
      return [
        { x: 200, y: 200 }, { x: 750, y: 250 }, { x: 1300, y: 180 },
        { x: 350, y: 700 }, { x: 900, y: 750 }, { x: 1450, y: 680 },
        { x: 150, y: 1200 }, { x: 700, y: 1250 }, { x: 1250, y: 1180 },
        { x: 400, y: 1700 }, { x: 950, y: 1750 }, { x: 1400, y: 1680 },
        { x: 250, y: 2200 }, { x: 800, y: 2250 }, { x: 1350, y: 2180 }
      ].slice(0, imageCount);
    }

    // INDIE / PLASTIC MEDIA (ID 10)
    if (caseItem.id === 10) {
      return [
        { x: 150, y: 200 }, { x: 700, y: 250 }, { x: 1250, y: 180 },
        { x: 300, y: 700 }, { x: 850, y: 750 }, { x: 1400, y: 680 },
        { x: 200, y: 1200 }, { x: 750, y: 1250 }, { x: 1300, y: 1180 },
        { x: 450, y: 1700 }, { x: 1000, y: 1750 }, { x: 1500, y: 1680 }
      ].slice(0, imageCount);
    }

    // Standard Grid für alle anderen
    const positions = [];
    for (let i = 0; i < imageCount; i++) {
      positions.push({
        x: 200 + (i % 3) * 500 + ((i * 37) % 100),
        y: 200 + Math.floor(i / 3) * 600 + ((i * 23) % 100)
      });
    }
    return positions;
  }, [allImages, caseItem.id]);

  // 3. Dynamische Höhe basierend auf den Koordinaten
  const minContentHeight = useMemo(() => {
    if (initialPositions.length === 0) return 1200;
    const lastY = Math.max(...initialPositions.map(p => p.y));
    return lastY + 900;
  }, [initialPositions]);

  useEffect(() => {
    const formats = {};
    allImages.forEach((url, index) => {
      const isVideo = url.toLowerCase().match(/\.(mp4|mov|webm)$/);
      if (isVideo) {
        formats[index] = 'landscape';
        setImageFormats(prev => ({ ...prev, ...formats }));
      } else {
        const img = new Image();
        img.onload = () => {
          formats[index] = img.width / img.height >= 1 ? 'landscape' : 'portrait';
          setImageFormats(prev => ({ ...prev, ...formats }));
        };
        img.src = url;
      }
    });
  }, [allImages]);

  const getImageTitle = (url, index) => {
    if (caseItem.imageTitles?.[index]) return caseItem.imageTitles[index];
    const filename = url.split('/').pop()?.split('.')[0] || '';
    return filename.replace(/[-_]/g, ' ').toUpperCase();
  };

  const cardPositions = {
    projectInfo: { x: 150, y: 100 }, challenge: { x: 800, y: 200 },
    impact: { x: 200, y: 600 }, outcome: { x: 1000, y: 500 },
    learning: { x: 500, y: 900 }, offer: { x: 1200, y: 800 }
  };

  return (
    <div className="min-h-screen bg-[#F1F2E5] overflow-y-auto">
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
        <button onClick={() => navigate('/')} className="fixed top-32 left-12 z-50 text-xs font-black font-neue uppercase border-b border-black">← See all cases</button>

        <div className="relative max-w-[1800px] mx-auto px-12" style={{ minHeight: `${minContentHeight}px` }}>
          
          {allImages.map((url, index) => {
            const isVideo = url.toLowerCase().match(/\.(mp4|mov|webm)$/);
            const mediaId = `media-${index}`;
            const isScaled = scaledImages[mediaId];
            const format = imageFormats[index] || 'landscape';

            return (
              <motion.div
                key={mediaId}
                drag dragMomentum={false}
                initial={{ x: initialPositions[index]?.x || 400, y: initialPositions[index]?.y || 200 }}
                onClick={() => toggleScale(mediaId)}
                className="absolute z-10 group cursor-grab active:cursor-grabbing"
                style={{ width: format === 'portrait' ? '350px' : '550px' }}
                animate={{ scale: isScaled ? 1.8 : 1, zIndex: isScaled ? 100 : 10 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <div className="relative w-full shadow-2xl overflow-hidden bg-black/5">
                  <div className="relative w-full" style={{ height: format === 'portrait' ? '500px' : '360px' }}>
                    {isVideo ? (
                      <video src={url} autoPlay loop muted playsInline className="w-full h-full object-cover pointer-events-none" />
                    ) : (
                      <img src={url} alt="" className="w-full h-full object-cover select-none pointer-events-none" />
                    )}
                  </div>
                  <div className="absolute bottom-0 left-0 pl-4 pb-4 z-20 pointer-events-none">
                    <p className="text-[11px] font-neue-semibold uppercase text-white/70">{getImageTitle(url, index)}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}

          {/* Alle Text-Cards */}
          <motion.div drag dragMomentum={false} initial={{ x: cardPositions.projectInfo.x, y: cardPositions.projectInfo.y }} className="absolute bg-[#E2DED3]/60 backdrop-blur-sm p-8 cursor-move shadow-lg w-[300px] z-20 border border-black/10">
            <h2 className="text-[24px] lg:text-[36px] font-neue-semibold uppercase mb-[68px]">{caseItem.title}</h2>
            <p className="text-lg font-neue-book-semi leading-relaxed">{caseItem.description}</p>
          </motion.div>

          {caseItem.challenge && (
            <motion.div drag dragMomentum={false} initial={{ x: cardPositions.challenge.x, y: cardPositions.challenge.y }} className="absolute bg-[#E2DED3]/60 backdrop-blur-sm p-8 cursor-move shadow-lg w-[300px] z-20 border border-black/10">
              <h2 className="text-[24px] lg:text-[36px] font-neue-semibold uppercase mb-[68px]">CHALLENGE</h2>
              <p className="text-lg font-neue-book-semi leading-relaxed">{caseItem.challenge}</p>
            </motion.div>
          )}

          {caseItem.impact && (
            <motion.div drag dragMomentum={false} initial={{ x: cardPositions.impact.x, y: cardPositions.impact.y }} className="absolute bg-[#E2DED3]/60 backdrop-blur-sm p-8 cursor-move shadow-lg w-[300px] z-20 border border-black/10">
              <h2 className="text-[24px] lg:text-[36px] font-neue-semibold uppercase mb-[68px]">IMPACT</h2>
              <p className="text-lg font-neue-book-semi leading-relaxed">{caseItem.impact}</p>
            </motion.div>
          )}

          {caseItem.outcome && (
            <motion.div drag dragMomentum={false} initial={{ x: cardPositions.outcome.x, y: cardPositions.outcome.y }} className="absolute bg-[#E2DED3]/60 backdrop-blur-sm p-8 cursor-move shadow-lg w-[300px] z-20 border border-black/10">
              <h2 className="text-[24px] lg:text-[36px] font-neue-semibold uppercase mb-[68px]">OUTCOME</h2>
              <p className="text-lg font-neue-book-semi leading-relaxed">{caseItem.outcome}</p>
            </motion.div>
          )}

          {caseItem.learning && (
            <motion.div drag dragMomentum={false} initial={{ x: cardPositions.learning.x, y: cardPositions.learning.y }} className="absolute bg-[#E2DED3]/60 backdrop-blur-sm p-8 cursor-move shadow-lg w-[300px] z-20 border border-black/10">
              <h2 className="text-[24px] lg:text-[36px] font-neue-semibold uppercase mb-[68px]">LEARNING</h2>
              <p className="text-lg font-neue-book-semi leading-relaxed italic">"{caseItem.learning}"</p>
            </motion.div>
          )}

          {caseItem.offer && (
            <motion.div drag dragMomentum={false} initial={{ x: cardPositions.offer.x, y: cardPositions.offer.y }} className="absolute bg-[#E2DED3]/60 backdrop-blur-sm p-8 cursor-move shadow-lg w-[300px] z-20 border border-black/10">
              <p className="text-lg font-neue-book-semi mb-6">{caseItem.offer}</p>
              <a href="mailto:mail@annemaris.de" className="text-lg font-neue-book-semi underline">Contact</a>
            </motion.div>
          )}

          <div className="fixed bottom-12 left-12 z-0 pointer-events-none">
            <h3 className="text-[24px] lg:text-[36px] font-neue-semibold uppercase mb-6">{caseItem.team?.title || 'TEAM'}</h3>
            <div className="space-y-2 text-lg font-neue-book-semi">
              {caseItem.team?.members?.map((m, i) => <p key={i}>{m}</p>) || <p>Collaborative Project</p>}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DesktopCaseView;