import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar/Navbar';
import GrainOverlay from '../components/GrainOverlay/GrainOverlay';

const DesktopCaseView = ({ caseItem }) => {
  const navigate = useNavigate();
  const [scaledImages, setScaledImages] = useState({});

  const toggleScale = (imageId) => {
    setScaledImages(prev => ({ ...prev, [imageId]: !prev[imageId] }));
  };

  // 1. Definiere oben eine Verteilung für die Text-Karten - harmonisch verteilt
  const cardPositions = {
    projectInfo: { x: 100, y: 50 },
    challenge: { x: 400, y: 450 },
    impact: { x: 550, y: 700 },
    outcome: { x: 1000, y: 350 },
    learning: { x: 600, y: 1050 },
    offer: { x: 1200, y: 1100 }
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
        caseItem.detailImage15,
        caseItem.detailImage16
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
    if (caseItem.id === 10) { // PLASTIC MEDIA
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

  const initialPositions = caseItem.id === 2
    ? [
        { x: 500, y: 200 },
        { x: 1100, y: 500 },
        { x: 300, y: 800 },
        { x: 900, y: 1100 }
      ]
    : caseItem.id === 6
    ? [
        { x: 600, y: 200 },
        { x: 1200, y: 500 },
        { x: 200, y: 800 },
        { x: 900, y: 1000 },
        { x: 400, y: 600 },
        { x: 1400, y: 300 },
        { x: 1100, y: 900 }
      ]
    : caseItem.id === 7
    ? [
        { x: 600, y: 200 },
        { x: 1200, y: 500 },
        { x: 200, y: 800 },
        { x: 900, y: 1000 },
        { x: 400, y: 600 },
        { x: 1400, y: 300 },
        { x: 1100, y: 900 },
        { x: 300, y: 400 },
        { x: 800, y: 700 },
        { x: 1300, y: 1100 },
        { x: 500, y: 1200 },
        { x: 1000, y: 300 },
        { x: 150, y: 600 },
        { x: 750, y: 1100 },
        { x: 1100, y: 200 },
        { x: 450, y: 900 },
        { x: 1350, y: 800 }
      ]
    : caseItem.id === 8
    ? [
        { x: 600, y: 200 },
        { x: 1200, y: 500 },
        { x: 200, y: 800 },
        { x: 900, y: 1000 },
        { x: 400, y: 600 },
        { x: 1400, y: 300 },
        { x: 1100, y: 900 },
        { x: 300, y: 400 }
      ]
    : caseItem.id === 9
    ? [
        { x: 300, y: 150 },
        { x: 1100, y: 300 },
        { x: 200, y: 700 },
        { x: 1000, y: 800 },
        { x: 500, y: 1100 },
        { x: 1300, y: 600 }
      ]
    : caseItem.id === 10
    ? [
        { x: 250, y: 200 },
        { x: 1050, y: 350 },
        { x: 150, y: 750 },
        { x: 950, y: 900 },
        { x: 450, y: 1150 },
        { x: 1250, y: 650 },
        { x: 700, y: 500 },
        { x: 1400, y: 1000 }
      ]
    : caseItem.id === 11
    ? [
        { x: 600, y: 200 },
        { x: 1200, y: 500 },
        { x: 200, y: 800 },
        { x: 900, y: 1000 },
        { x: 400, y: 600 },
        { x: 1400, y: 300 },
        { x: 1100, y: 900 }
      ]
    : caseItem.id === 12
    ? [
        { x: 600, y: 200 },
        { x: 1200, y: 500 },
        { x: 200, y: 800 },
        { x: 900, y: 1000 }
      ]
    : [
        { x: 600, y: 200 },
        { x: 1200, y: 500 },
        { x: 200, y: 800 }
      ];

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
      <main className="relative w-full pt-[120px] pb-32 cursor-crosshair">
        
        {/* Navigation */}
        <button 
          onClick={() => navigate('/')}
          className="fixed top-32 left-12 z-50 text-xs font-black font-neue uppercase border-b border-black"
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
                  <div className="relative w-full shadow-2xl overflow-hidden">
                    <div className="relative w-full" style={{ height: img.format === 'portrait' ? '500px' : '340px' }}>
                      <img 
                        src={img.url} 
                        alt="" 
                        className="w-full h-full object-cover select-none pointer-events-none" 
                      />
                    </div>
                    {img.title && (
                      <div className="absolute bottom-0 left-0 pl-[18px] pb-[18px] z-20 pointer-events-none">
                        <p className="text-[10px] lg:text-[14px] font-neue-semibold uppercase text-[#979797]">
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
              className="absolute bg-[#E2DED3] p-8 cursor-move shadow-lg w-[300px] z-20"
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
                className="absolute bg-[#E2DED3] p-8 cursor-move shadow-lg w-[300px] z-20"
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
                className="absolute bg-[#E2DED3] p-8 cursor-move shadow-lg w-[300px] z-20"
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
                className="absolute bg-[#E2DED3] p-8 cursor-move shadow-lg w-[300px] z-20"
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
                className="absolute bg-[#E2DED3] p-8 cursor-move shadow-lg w-[300px] z-20"
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
                className="absolute bg-[#E2DED3] p-8 cursor-move shadow-lg w-[300px] z-20"
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