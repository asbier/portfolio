import React, { useState, useEffect, useCallback } from 'react';
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

  const toggleScale = (imageId) => {
    setScaledImages(prev => ({ ...prev, [imageId]: !prev[imageId] }));
  };

  // Check if desktop (only show mouse follower on desktop)
  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  // Mouse follower: Track mouse position and hide after delay
  useEffect(() => {
    if (!isDesktop) return;

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    // Hide mouse follower after 8 seconds
    const hideTimer = setTimeout(() => {
      setShowMouseFollower(false);
    }, 8000);

    // Hide mouse follower when user starts dragging
    const handleDragStart = () => {
      setShowMouseFollower(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleDragStart);

    return () => {
      clearTimeout(hideTimer);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleDragStart);
    };
  }, [isDesktop]);

  // 1. Definiere oben eine Verteilung für die Text-Karten - harmonisch verteilt wie ein Poster
  const cardPositions = {
    projectInfo: { x: 150, y: 100 },
    challenge: { x: 800, y: 200 },
    impact: { x: 200, y: 600 },
    outcome: { x: 1000, y: 500 },
    learning: { x: 500, y: 900 },
    offer: { x: 1200, y: 800 }
  };

  // Harmonische Anordnung der Bilder für den Licht-Tisch
  // Automatische Erkennung des Bildformats oder verwende definierte Formate
  const [imageFormats, setImageFormats] = useState({});

  // Für Conic Rose, EDITED, BIORAMA und Plastic Media alle Bilder verwenden (ohne Duplikate), sonst nur die ersten 3
  const getUniqueImages = useCallback(() => {
    if (caseItem.id === 2) { // HELLAGUTMANN
      const images = [
        caseItem.image,
        caseItem.detailImage1,
        caseItem.detailImage2,
        caseItem.detailImage3
      ].filter(Boolean);
      // Entferne Duplikate
      return [...new Set(images)];
    }
    if (caseItem.id === 6) { // CONIC ROSE
      const images = [
        caseItem.image,
        caseItem.detailImage1,
        caseItem.detailImage2,
        caseItem.detailImage3,
        caseItem.detailImage4,
        caseItem.detailImage5,
        caseItem.detailImage6
      ].filter(Boolean);
      // Entferne Duplikate
      return [...new Set(images)];
    }
    if (caseItem.id === 7) { // EDITED
      const images = [
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
        caseItem.detailImage12,
        caseItem.detailImage13,
        caseItem.detailImage14,
        caseItem.detailImage15
      ].filter(Boolean);
      // Entferne Duplikate
      return [...new Set(images)];
    }
    if (caseItem.id === 8) { // ABOUT YOU
      const images = [
        caseItem.image,
        caseItem.detailImage1,
        caseItem.detailImage2,
        caseItem.detailImage3,
        caseItem.detailImage4,
        caseItem.detailImage5,
        caseItem.detailImage6,
        caseItem.detailImage7
      ].filter(Boolean);
      // Entferne Duplikate
      return [...new Set(images)];
    }
    if (caseItem.id === 9) { // BIORAMA
      const images = [
        caseItem.image,
        caseItem.detailImage1,
        caseItem.detailImage2,
        caseItem.detailImage3,
        caseItem.detailImage4,
        caseItem.detailImage5
      ].filter(Boolean);
      // Entferne Duplikate
      return [...new Set(images)];
    }
    if (caseItem.id === 10) { // INDIE / PLASTIC MEDIA
      const images = [
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
        caseItem.detailImage11
      ].filter(Boolean);
      // Entferne Duplikate
      return [...new Set(images)];
    }
    if (caseItem.id === 11) { // MONKI
      const images = [
        caseItem.image,
        caseItem.detailImage1,
        caseItem.detailImage2,
        caseItem.detailImage3,
        caseItem.detailImage4,
        caseItem.detailImage5,
        caseItem.detailImage6
      ].filter(Boolean);
      // Entferne Duplikate
      return [...new Set(images)];
    }
    if (caseItem.id === 12) { // COMMA
      const images = [
        caseItem.image,
        caseItem.detailImage1,
        caseItem.detailImage2,
        caseItem.detailImage3
      ].filter(Boolean);
      // Entferne Duplikate
      return [...new Set(images)];
    }
    return [
      caseItem.image,
      caseItem.detailImage1,
      caseItem.detailImage2
    ].filter(Boolean);
  }, [caseItem.id, caseItem.image, caseItem.detailImage1, caseItem.detailImage2, caseItem.detailImage3, caseItem.detailImage4, caseItem.detailImage5, caseItem.detailImage6, caseItem.detailImage7, caseItem.detailImage8, caseItem.detailImage9, caseItem.detailImage10, caseItem.detailImage11, caseItem.detailImage12, caseItem.detailImage13, caseItem.detailImage14, caseItem.detailImage15, caseItem.detailImage16]);

  const allImages = getUniqueImages();
  
  // Wenn imageFormats definiert sind, verwende diese, sonst erkenne automatisch
  useEffect(() => {
    const currentImages = getUniqueImages();
    
    if (caseItem.imageFormats && caseItem.id === 6) {
      // Für Conic Rose: Mappe die Formate auf die eindeutigen Bilder
      const formats = {};
      const originalImages = [
        caseItem.image,
        caseItem.detailImage1,
        caseItem.detailImage2,
        caseItem.detailImage3,
        caseItem.detailImage4,
        caseItem.detailImage5,
        caseItem.detailImage6
      ].filter(Boolean);
      
      currentImages.forEach((url, uniqueIndex) => {
        const originalIndex = originalImages.indexOf(url);
        if (originalIndex !== -1 && caseItem.imageFormats[originalIndex]) {
          formats[uniqueIndex] = caseItem.imageFormats[originalIndex];
        }
      });
      setImageFormats(formats);
    } else {
      // Automatische Erkennung
      const formats = {};
      currentImages.forEach((url, index) => {
        if (url) {
          const img = new Image();
          img.onload = () => {
            const aspectRatio = img.width / img.height;
            formats[index] = aspectRatio >= 1 ? 'landscape' : 'portrait';
            setImageFormats({ ...formats });
          };
          img.src = url;
        }
      });
    }
  }, [getUniqueImages, caseItem.id, caseItem.imageFormats, caseItem.image, caseItem.detailImage1, caseItem.detailImage2, caseItem.detailImage3, caseItem.detailImage4, caseItem.detailImage5, caseItem.detailImage6, caseItem.detailImage7, caseItem.detailImage8, caseItem.detailImage9, caseItem.detailImage10, caseItem.detailImage11, caseItem.detailImage12, caseItem.detailImage13, caseItem.detailImage14, caseItem.detailImage15, caseItem.detailImage16]);

  // Harmonische Poster-ähnliche Verteilung der Bilder
  // Dynamische Berechnung basierend auf Anzahl der Bilder - skaliert mit Anzahl
  const getImagePositions = (imageCount) => {
    const positions = [];
    
    // Skaliere Abstände basierend auf Anzahl der Bilder
    // Mehr Bilder = mehr Verteilung, weniger Bilder = kompakter
    let cols, baseSpacingX, baseSpacingY, startX, startY;
    
    if (imageCount === 1) {
      return [{ x: 500, y: 300 }];
    } else if (imageCount === 2) {
      // 2 Bilder: kompakt, diagonal
      return [
        { x: 300, y: 200 },
        { x: 900, y: 500 }
      ];
    } else if (imageCount === 3) {
      // 3 Bilder: mäßige Verteilung
      return [
        { x: 200, y: 200 },
        { x: 900, y: 400 },
        { x: 500, y: 800 }
      ];
    } else if (imageCount <= 6) {
      // 4-6 Bilder: 2 Spalten mit mäßiger Verteilung
      cols = 2;
      baseSpacingX = 600;
      baseSpacingY = 500; // Mäßiger vertikaler Abstand
      startX = 200;
      startY = 200;
    } else if (imageCount <= 10) {
      // 7-10 Bilder: mehr Verteilung
      cols = Math.max(2, Math.ceil(Math.sqrt(imageCount * 0.7))); 
      baseSpacingX = 550;
      baseSpacingY = 600; // Mehr vertikaler Abstand
      startX = 200;
      startY = 200;
    } else {
      // 11+ Bilder: viel Verteilung über großen Raum
      cols = Math.max(2, Math.ceil(Math.sqrt(imageCount * 0.6))); 
      baseSpacingX = 500;
      baseSpacingY = 700; // Viel vertikaler Abstand
      startX = 200;
      startY = 200;
    }
    
    // Erstelle eine Grid-Struktur mit Variationen
    for (let i = 0; i < imageCount; i++) {
      const col = i % cols;
      const row = Math.floor(i / cols);
      
      // Deterministische Variationen basierend auf Index
      const variationX = ((i * 37) % 150) - 75;
      const variationY = ((i * 23) % 120) - 60;
      
      // Alterniere die Positionen für dynamischeres Layout
      const offsetX = col % 2 === 0 ? 0 : 100;
      const offsetY = row % 2 === 0 ? 0 : 80;
      
      positions.push({
        x: startX + (col * baseSpacingX) + variationX + offsetX,
        y: startY + (row * baseSpacingY) + variationY + offsetY
      });
    }
    
    return positions;
  };

  const initialPositions = (() => {
    const imageCount = allImages.length;
    
    // Spezielle Layouts für bestimmte Projekte
    if (caseItem.id === 2) { // HELLAGUTMANN - 4 Bilder, besser verteilt
      return [
        { x: 300, y: 200 },
        { x: 1000, y: 300 },
        { x: 400, y: 800 },
        { x: 1200, y: 900 }
      ].slice(0, imageCount);
    }
    
    if (caseItem.id === 6) { // CONIC ROSE - 6 Bilder, deutlich besser verteilt mit viel mehr Abstand
      return [
        { x: 200, y: 150 },   // Links oben
        { x: 1100, y: 250 },  // Rechts oben, viel horizontaler Abstand
        { x: 300, y: 1000 },  // Links mitte, viel mehr vertikaler Abstand (850px)
        { x: 1200, y: 1100 }, // Rechts mitte, viel mehr vertikaler Abstand
        { x: 150, y: 2000 },  // Links unten, noch mehr vertikaler Abstand (900px)
        { x: 1050, y: 2100 }  // Rechts unten, noch mehr vertikaler Abstand
      ].slice(0, imageCount);
    }
    
    if (caseItem.id === 7) { // EDITED - viele Bilder, braucht mehr vertikalen Raum
      return [
        { x: 200, y: 200 }, { x: 750, y: 250 }, { x: 1300, y: 180 },
        { x: 350, y: 700 }, { x: 900, y: 750 }, { x: 1450, y: 680 },
        { x: 150, y: 1200 }, { x: 700, y: 1250 }, { x: 1250, y: 1180 },
        { x: 400, y: 1700 }, { x: 950, y: 1750 }, { x: 1400, y: 1680 },
        { x: 250, y: 2200 }, { x: 800, y: 2250 }, { x: 1350, y: 2180 },
        { x: 500, y: 2700 }
      ].slice(0, imageCount);
    }
    
    if (caseItem.id === 10) { // INDIE - viele Bilder (bis zu 11), besser vertikal verteilt
      return [
        { x: 150, y: 200 }, { x: 700, y: 250 }, { x: 1250, y: 180 },
        { x: 300, y: 700 }, { x: 850, y: 750 }, { x: 1400, y: 680 },
        { x: 200, y: 1200 }, { x: 750, y: 1250 }, { x: 1300, y: 1180 },
        { x: 450, y: 1700 }, { x: 1000, y: 1750 }, { x: 1500, y: 1680 }
      ].slice(0, imageCount);
    }
    
    // Für alle anderen Projekte: dynamische Verteilung
    return getImagePositions(imageCount);
  })();

  // Extrahiere Bildtitel aus URLs oder verwende definierte Titel
  const getImageTitle = (url, index) => {
    if (caseItem.imageTitles && caseItem.imageTitles[index]) {
      return caseItem.imageTitles[index];
    }
    // Fallback: Extrahiere Dateinamen ohne Extension
    if (url) {
      const filename = url.split('/').pop().replace(/\.[^/.]+$/, '');
      return filename.replace(/[-_]/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    }
    return '';
  };

  const caseImages = allImages
    .map((url, index) => ({
      id: index + 1,
      url,
      title: getImageTitle(url, index),
      format: imageFormats[index] || 'landscape', // Fallback zu landscape während des Ladens
      initialX: initialPositions[index]?.x || 600,
      initialY: initialPositions[index]?.y || 200
    }))
    .filter(img => img.url); // Zeigt nur Bilder an, die existieren

  return (
    <div className="min-h-screen bg-[#F1F2E5] overflow-y-auto">
      <GrainOverlay />
      <Navbar />
      
      {/* Mouse Follower - Instructional hint (Desktop only) */}
      {isDesktop && showMouseFollower && (
        <motion.div
          className="fixed pointer-events-none z-[100]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          style={{
            left: mousePosition.x + 20,
            top: mousePosition.y + 20,
            transform: 'translate(-50%, -50%)',
          }}
        >
          <div className="relative flex items-center justify-center w-[200px] h-[200px]">
            <svg
              width="200"
              height="200"
              viewBox="0 0 200 200"
              className="absolute inset-0"
            >
              <circle
                cx="100"
                cy="100"
                r="90"
                fill="none"
                stroke="#FFB115"
                strokeWidth="0.8"
              />
            </svg>
            <div className="text-black text-[10px] font-neue-book-semi uppercase whitespace-normal text-center px-6 py-4 leading-tight max-w-[160px]">
              Drag to reorder, pull to resize
            </div>
          </div>
        </motion.div>
      )}
      
      <main className="relative w-full pt-[120px] pb-32 cursor-crosshair">
        
        {/* Navigation */}
        <button 
          onClick={() => navigate('/')}
          className="fixed top-32 left-12 z-50 text-xs font-black font-neue uppercase"
          style={{
            lineHeight: '1',
            paddingBottom: '0',
            boxShadow: '0 1px 0 0 black'
          }}
        >
          ← See all cases
        </button>

        {/* Container for scrollable content */}
        <div className="relative max-w-[1800px] mx-auto px-12">
          

          {/* Drag & Scale Bilder - positioned relative to scroll */}
          <div className="relative min-h-[1200px] mb-16">
            {caseImages.map((img) => {
              const isScaled = scaledImages[img.id];
              return (
                <motion.div
                  key={img.id}
                  drag
                  dragMomentum={false}
                  initial={{ x: img.initialX, y: img.initialY }}
                  onClick={() => toggleScale(img.id)}
                  className="absolute z-10 group cursor-grab active:cursor-grabbing"
                  style={{
                    width: img.format === 'portrait' ? '350px' : '500px',
                  }}
                  animate={{ 
                    scale: isScaled ? 2 : 1, 
                    zIndex: isScaled ? 50 : 10 
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  <div className="relative w-full shadow-2xl overflow-hidden group">
                    <div className="relative w-full" style={{ height: img.format === 'portrait' ? '500px' : '340px' }}>
                      <img 
                        src={img.url} 
                        alt="" 
                        className="w-full h-full object-cover select-none pointer-events-none transition-all duration-300 group-hover:brightness-75 group-hover:contrast-110 group-hover:saturate-90" 
                      />
                      {/* Gradient overlay for text readability - only on hover */}
                      <div 
                        className="absolute inset-0 z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{
                          background: 'linear-gradient(to top, rgba(128, 93, 10, 0.6) 0%, rgba(128, 93, 10, 0.3) 30%, transparent 70%)'
                        }}
                      />
                    </div>
                    {img.title && (
                      <div className="absolute bottom-0 left-0 pl-[18px] pb-[18px] z-20 pointer-events-none">
                        <p className="text-[10px] lg:text-[14px] font-neue-semibold uppercase text-[#979797] group-hover:text-white transition-colors duration-300">
                          {img.title}
                        </p>
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}

            {/* Content Cards - Jetzt absolut verteilt statt gestapelt */}
            {/* Project Info Card - Top */}
            <motion.div 
              drag 
              dragMomentum={false} 
              initial={{ x: cardPositions.projectInfo.x, y: cardPositions.projectInfo.y }}
              className="absolute bg-[#E2DED3]/60 backdrop-blur-sm p-8 cursor-move shadow-lg w-[300px] z-20 border border-black/10"
            >
              <h2 className="text-[24px] lg:text-[36px] font-neue-semibold uppercase tracking-normal leading-tight text-black mb-[68px]">{caseItem.title}</h2>
              <p className="text-lg font-neue-book-semi leading-relaxed text-black">{caseItem.description}</p>
            </motion.div>

            {/* Challenge Card */}
            {caseItem.challenge && (
              <motion.div 
                drag 
                dragMomentum={false} 
                initial={{ x: cardPositions.challenge.x, y: cardPositions.challenge.y }}
                className="absolute bg-[#E2DED3]/60 backdrop-blur-sm p-8 cursor-move shadow-lg w-[300px] z-20 border border-black/10"
              >
                <h2 className="text-[24px] lg:text-[36px] font-neue-semibold uppercase tracking-normal leading-tight text-black mb-[68px]">CHALLENGE</h2>
                <p className="text-lg font-neue-book-semi leading-relaxed text-black">{caseItem.challenge}</p>
              </motion.div>
            )}

            {/* Impact Card */}
            {caseItem.impact && (
              <motion.div 
                drag 
                dragMomentum={false} 
                initial={{ x: cardPositions.impact.x, y: cardPositions.impact.y }}
                className="absolute bg-[#E2DED3]/60 backdrop-blur-sm p-8 cursor-move shadow-lg w-[300px] z-20 border border-black/10"
              >
                <h2 className="text-[24px] lg:text-[36px] font-neue-semibold uppercase tracking-normal leading-tight text-black mb-[68px]">IMPACT</h2>
                <p className="text-lg font-neue-book-semi leading-relaxed text-black">{caseItem.impact}</p>
              </motion.div>
            )}

            {/* Outcome Card */}
            {caseItem.outcome && (
              <motion.div 
                drag 
                dragMomentum={false} 
                initial={{ x: cardPositions.outcome.x, y: cardPositions.outcome.y }}
                className="absolute bg-[#E2DED3]/60 backdrop-blur-sm p-8 cursor-move shadow-lg w-[300px] z-20 border border-black/10"
              >
                <h2 className="text-[24px] lg:text-[36px] font-neue-semibold uppercase tracking-normal leading-tight text-black mb-[68px]">OUTCOME</h2>
                <p className="text-lg font-neue-book-semi leading-relaxed text-black">{caseItem.outcome}</p>
              </motion.div>
            )}

            {/* Learning Card */}
            {caseItem.learning && (
              <motion.div 
                drag 
                dragMomentum={false} 
                initial={{ x: cardPositions.learning.x, y: cardPositions.learning.y }}
                className="absolute bg-[#E2DED3]/60 backdrop-blur-sm p-8 cursor-move shadow-lg w-[300px] z-20 border border-black/10"
              >
                <h2 className="text-[24px] lg:text-[36px] font-neue-semibold uppercase tracking-normal leading-tight text-black mb-[68px]">LEARNING</h2>
                <p className="text-lg font-neue-book-semi leading-relaxed text-black italic">"{caseItem.learning}"</p>
              </motion.div>
            )}

            {/* Offer Card */}
            {caseItem.offer && (
              <motion.div 
                drag 
                dragMomentum={false} 
                initial={{ x: cardPositions.offer.x, y: cardPositions.offer.y }}
                className="absolute bg-[#E2DED3]/60 backdrop-blur-sm p-8 cursor-move shadow-lg w-[300px] z-20 border border-black/10"
              >
                <p className="text-lg font-neue-book-semi leading-relaxed text-black mb-6">{caseItem.offer}</p>
                <a 
                  href="mailto:mail@annemaris.de" 
                  className="text-lg font-neue-book-semi leading-relaxed text-black underline hover:no-underline transition-all"
                >
                  Contact
                </a>
              </motion.div>
            )}

          </div>

          {/* Team Info - Fixed on Background, Bottom Left Corner */}
          {caseItem.team && (
            <div className="fixed bottom-12 left-12 z-0 pointer-events-none">
              <h3 className="text-[24px] lg:text-[36px] font-neue-semibold uppercase tracking-normal leading-tight text-black mb-6">{caseItem.team.title}</h3>
              {caseItem.team.collaboration ? (
                <p className="text-lg font-neue-book-semi leading-relaxed text-black">{caseItem.team.collaboration}</p>
              ) : (
                <div className="space-y-2 text-lg font-neue-book-semi leading-relaxed text-black">
                  {caseItem.team.members?.map((member, index) => (
                    <p key={index}>{member}</p>
                  ))}
                </div>
              )}
            </div>
          )}
          {!caseItem.team && (
            <div className="fixed bottom-12 left-12 z-0 pointer-events-none">
              <h3 className="text-[24px] lg:text-[36px] font-neue-semibold uppercase tracking-normal leading-tight text-black mb-6">DAYONE X HELLAGUTMANN</h3>
              <div className="space-y-2 text-lg font-neue-book-semi leading-relaxed text-black">
                <p>Christopher G. Product Design Lead</p>
                <p>Annemarie S. UX</p>
                <p>Bean D. UI</p>
                <p>Silvana M. PM</p>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default DesktopCaseView;