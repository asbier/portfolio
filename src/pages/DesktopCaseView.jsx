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

  // Beispiel-Anordnung der Bilder für das Desktop-Grid
  const caseImages = [
    { id: 1, url: caseItem.image, format: 'portrait', initialX: 450, initialY: 100 },
    { id: 2, url: caseItem.detailImage1, format: 'landscape', initialX: 850, initialY: 450 },
    { id: 3, url: caseItem.detailImage2, format: 'portrait', initialX: 150, initialY: 400 },
  ].filter(img => img.url); // Zeigt nur Bilder an, die existieren

  return (
    <div className="min-h-screen bg-[#F1F2E5] overflow-hidden">
      <Navbar />
      <main className="relative w-full h-screen pt-[120px] cursor-crosshair">
        
        {/* Navigation & Headline */}
        <button 
          onClick={() => navigate('/')}
          className="absolute top-32 left-12 z-50 text-xs font-black font-neue uppercase border-b border-black"
        >
          ← Back to Index
        </button>

        <div className="absolute top-[200px] left-12 z-0 max-w-4xl pointer-events-none">
          <h1 className="text-9xl font-black font-neue uppercase tracking-tighter text-black/10 leading-[0.8] mb-8">
            {caseItem.title}
          </h1>
        </div>

        {/* Drag & Scale Bilder */}
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

        {/* Info Card */}
        <motion.div 
          drag 
          dragMomentum={false} 
          className="absolute top-[650px] left-[120px] bg-white/10 backdrop-blur-xl p-8 border border-white/20 w-[320px] z-20 cursor-move shadow-xl"
        >
          <div className="w-8 h-1 bg-[#FFB115] mb-4"></div>
          <p className="text-[11px] font-neue uppercase leading-tight text-black/70 italic">
            {caseItem.description}
          </p>
        </motion.div>
      </main>
    </div>
  );
};

export default DesktopCaseView;