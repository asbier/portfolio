import React from 'react';
import Navbar from '../components/Navbar/Navbar';

const MobileCaseView = ({ caseItem }) => {
  return (
    <div className="min-h-screen bg-[#F1F2E5] text-black font-neue">
      <Navbar />
      
      <main className="pt-0 pb-32"> 
        {/* 1. HERO IMAGE BEREICH - Jetzt mit Begrenzung für den "kürzeren" Look */}
        <div className="relative w-full h-[60vh] overflow-hidden"> 
          <img 
            src={caseItem.image} 
            alt={caseItem.title} 
            className="w-full h-full object-cover block" /* object-cover sorgt dafür, dass das Bild trotz Kürzung gut aussieht */
          />
          
          {/* Tags direkt auf dem Bild */}
          <div className="absolute bottom-6 left-5 flex flex-wrap gap-2">
            {caseItem.tags?.map((tag, index) => (
              <span 
                key={index} 
                className="px-4 py-1.5 border border-white/40 rounded-full text-[10px] text-white uppercase font-bold backdrop-blur-md"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* 2. DER 3PX SPALT */}
        <div className="h-[3px] w-full bg-[#F1F2E5]"></div>

        {/* 3. CONTENT BEREICH */}
        <div className="px-5 pt-8">
          <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#FFB115] mb-3 block">
            {caseItem.category} {/* UI DESIGN*/}
          </span>
          
          {/* Tight Headline Look */}
          <h1 className="text-[40px] font-black uppercase tracking-tighter leading-[0.85] mb-6">
            {caseItem.title}
          </h1>
          
          <div className="flex justify-between items-start border-b border-black/10 pb-12">
            <p className="text-[12px] uppercase leading-tight max-w-[65%] text-black/80">
              {caseItem.description}
            </p>
            <div className="text-[10px] font-bold uppercase text-right leading-[1.2]">
              YEAR: {caseItem.year || '2024'}<br />ROLE: LEAD
            </div>
          </div>

          {/* 4. DEKO-BANNER */}
          <div className="relative mt-16 mb-10 overflow-hidden">
            <h2 className="text-[18vw] font-black uppercase tracking-tighter leading-none text-black/[0.04] whitespace-nowrap">
              {caseItem.title.split(' ')[0]} IDENTI
            </h2>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MobileCaseView;