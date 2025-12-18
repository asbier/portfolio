import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar/Navbar';

const DesktopCaseView = ({ caseItem }) => {
  const navigate = useNavigate();
  const [scaledImages, setScaledImages] = useState({});

  const toggleScale = (imageId) => {
    setScaledImages(prev => ({ ...prev, [imageId]: !prev[imageId] }));
  };

  // 1. Definiere oben eine Verteilung für die Text-Karten - harmonisch verteilt
  const cardPositions = {
    projectInfo: { x: 100, y: 50 },
    challenge: { x: 100, y: 400 },
    impact: { x: 550, y: 700 },
    outcome: { x: 1000, y: 350 },
    learning: { x: 600, y: 1050 }
  };

  // Harmonische Anordnung der Bilder für den Licht-Tisch
  const caseImages = [
    { id: 1, url: caseItem.image, format: 'portrait', initialX: 600, initialY: 200 },
    { id: 2, url: caseItem.detailImage1, format: 'landscape', initialX: 1200, initialY: 500 },
    { id: 3, url: caseItem.detailImage2, format: 'portrait', initialX: 200, initialY: 800 },
  ].filter(img => img.url); // Zeigt nur Bilder an, die existieren

  return (
    <div className="min-h-screen bg-[#F1F2E5] overflow-y-auto">
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
                    height: img.format === 'portrait' ? '500px' : '340px',
                  }}
                  animate={{ 
                    scale: isScaled ? 2 : 1, 
                    zIndex: isScaled ? 50 : 10 
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  <div className="relative w-full h-full shadow-2xl overflow-hidden">
                    <img 
                      src={img.url} 
                      alt="" 
                      className="w-full h-full object-cover select-none pointer-events-none" 
                    />
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
              className="absolute bg-[#E2DED3] p-8 cursor-move shadow-lg z-20"
            >
              <h2 className="text-[24px] lg:text-[36px] font-neue-semibold uppercase tracking-normal leading-tight text-black mb-[68px]">DASHBOARD DESIGN ADAS SYSTEM GUIDE</h2>
              <p className="text-lg font-neue-book-semi leading-relaxed text-black">Streamlined ADAS dashboard workflows to save time and improve documentation.</p>
            </motion.div>

            {/* Challenge Card */}
            {caseItem.challenge && (
              <motion.div 
                drag 
                dragMomentum={false} 
                initial={{ x: cardPositions.challenge.x, y: cardPositions.challenge.y }}
                className="absolute bg-[#E2DED3] p-8 cursor-move shadow-lg w-[400px] h-[300px] z-20 flex flex-col overflow-hidden"
              >
                <h2 className="text-[24px] lg:text-[36px] font-neue-semibold uppercase tracking-normal leading-tight text-black mb-[68px] flex-shrink-0">CHALLENGE</h2>
                <p className="text-lg font-neue-book-semi leading-relaxed text-black overflow-y-auto flex-1">{caseItem.challenge}</p>
              </motion.div>
            )}

            {/* Impact Card */}
            {caseItem.impact && (
              <motion.div 
                drag 
                dragMomentum={false} 
                initial={{ x: cardPositions.impact.x, y: cardPositions.impact.y }}
                className="absolute bg-[#E2DED3] p-8 cursor-move shadow-lg w-[400px] h-[300px] z-20 flex flex-col overflow-hidden"
              >
                <h2 className="text-[24px] lg:text-[36px] font-neue-semibold uppercase tracking-normal leading-tight text-black mb-[68px] flex-shrink-0">IMPACT</h2>
                <p className="text-lg font-neue-book-semi leading-relaxed text-black overflow-y-auto flex-1">{caseItem.impact}</p>
              </motion.div>
            )}

            {/* Outcome Card */}
            {caseItem.outcome && (
              <motion.div 
                drag 
                dragMomentum={false} 
                initial={{ x: cardPositions.outcome.x, y: cardPositions.outcome.y }}
                className="absolute bg-[#E2DED3] p-8 cursor-move shadow-lg w-[400px] h-[300px] z-20 flex flex-col overflow-hidden"
              >
                <h2 className="text-[24px] lg:text-[36px] font-neue-semibold uppercase tracking-normal leading-tight text-black mb-[68px] flex-shrink-0">OUTCOME</h2>
                <p className="text-lg font-neue-book-semi leading-relaxed text-black overflow-y-auto flex-1">{caseItem.outcome}</p>
              </motion.div>
            )}

            {/* Learning Card */}
            {caseItem.learning && (
              <motion.div 
                drag 
                dragMomentum={false} 
                initial={{ x: cardPositions.learning.x, y: cardPositions.learning.y }}
                className="absolute bg-[#E2DED3] p-8 cursor-move shadow-lg w-[400px] h-[300px] z-20 flex flex-col overflow-hidden"
              >
                <h2 className="text-[24px] lg:text-[36px] font-neue-semibold uppercase tracking-normal leading-tight text-black mb-[68px] flex-shrink-0">LEARNING</h2>
                <p className="text-lg font-neue-book-semi leading-relaxed text-black italic overflow-y-auto flex-1">"{caseItem.learning}"</p>
              </motion.div>
            )}

          </div>

          {/* Team Info - Fixed on Background, Bottom Left Corner */}
          <div className="fixed bottom-12 left-12 z-0 pointer-events-none">
            <h3 className="text-[24px] lg:text-[36px] font-neue-semibold uppercase tracking-normal leading-tight text-black mb-6">DAYONE X HELLAGUTMANN</h3>
            <div className="space-y-2 text-lg font-neue-book-semi leading-relaxed text-black">
              <p>Christopher G. Product Design Lead</p>
              <p>Annemarie S. UX</p>
              <p>Bean D. UI</p>
              <p>Silvana M. PM</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DesktopCaseView;