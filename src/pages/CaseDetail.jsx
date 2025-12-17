import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar/Navbar';
import { getCaseById } from '../data/cases';

const CaseDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate(); 
  const caseItem = getCaseById(id);
  
  const [scaledImages, setScaledImages] = useState({});

  if (!caseItem) return <div className="p-20 text-center font-neue">Case not found</div>;

  // 1. Die Logik zum Skalieren
  const toggleScale = (imageId) => {
    setScaledImages(prev => ({
      ...prev,
      [imageId]: !prev[imageId]
    }));
  };

  // 2. Deine Formate & Startpositionen (Beispielwerte)
  const caseImages = [
    { id: 1, url: caseItem.image, format: 'portrait', initialX: 80, initialY: 100 },
    { id: 2, url: caseItem.image, format: 'landscape', initialX: 500, initialY: 60 },
    { id: 3, url: caseItem.image, format: 'portrait', initialX: 1050, initialY: 140 },
    { id: 4, url: caseItem.image, format: 'landscape', initialX: 750, initialY: 520 },
  ];

  return (
    <div className="min-h-screen bg-[#E5E5DE] overflow-hidden">
      {/* Navbar braucht activeFilter Props, auch wenn sie hier nur passiv ist */}
      <Navbar activeFilter="all" setActiveFilter={() => navigate('/')} />
      
      <main className="relative w-full h-screen pt-[120px] cursor-crosshair">
        
        {/* BACK BUTTON (Löst die unused navigate Warnung) */}
        <button 
          onClick={() => navigate('/')}
          className="absolute top-32 left-12 z-50 text-xs font-black font-neue uppercase border-b border-black hover:opacity-50 transition-opacity"
        >
          ← Back to Index
        </button>

        {/* TITLE LAYER (Hinter den Bildern) */}
        <div className="absolute top-[200px] left-12 z-0 max-w-2xl pointer-events-none">
          <h1 className="text-7xl lg:text-9xl font-black font-neue uppercase tracking-tighter text-title-gray leading-[0.8] mb-8">
            {caseItem.title}
          </h1>
          <p className="text-sm font-neue uppercase max-w-md text-tag-gray">
            {caseItem.description}
          </p>
        </div>

        {/* DRAGGABLE CANVAS */}
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
                scale: isScaled ? 2 : 1, // Zoom Format (x2)
                zIndex: isScaled ? 50 : 10
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="relative w-full h-full overflow-hidden shadow-2xl transition-transform duration-500 hover:rotate-1">
                <img
                  src={img.url}
                  alt={caseItem.title}
                  className="w-full h-full object-cover select-none pointer-events-none"
                />
                <div className="absolute bottom-4 left-4 text-[10px] text-white/50 font-mono uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                  {img.format} {isScaled ? 'Zoom' : 'Standard'}
                </div>
              </div>
            </motion.div>
          );
        })}

        {/* FLOATING TEXT CARD (Moodboard Style) */}
        <motion.div 
          drag 
          dragMomentum={false}
          className="absolute top-[650px] left-[120px] bg-white/10 backdrop-blur-xl p-8 border border-white/20 w-[320px] z-20 cursor-move shadow-xl"
        >
          <div className="w-8 h-1 bg-[#FFB115] mb-4"></div> {/* Akzentfarbe Orange */}
          <h3 className="text-xs font-bold font-neue uppercase mb-4 tracking-widest text-black">Technical Detail</h3>
          <p className="text-[11px] font-neue uppercase leading-tight text-black/70">
            {caseItem.description}
          </p>
        </motion.div>

      </main>
    </div>
  );
};

export default CaseDetail;