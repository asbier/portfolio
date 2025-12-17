import React from 'react';
import Navbar from '../components/Navbar/Navbar';

const MobileCaseView = ({ caseItem }) => {
    // Prüft, ob 'image' ein Verlaufstext ist
    const isGradient = caseItem.image?.startsWith('linear-gradient');
  
    return (
      <div className="min-h-screen bg-[#F1F2E5] text-black font-neue">
        <Navbar />
        
        <main className="pt-0 pb-32"> 
          {/* 1. HERO BEREICH */}
          <div 
            className="relative w-full h-[60vh] overflow-hidden"
            style={{ 
              // Hier wird der Verlauf aus Case 0 aktiv
              background: isGradient ? caseItem.image : 'transparent' 
            }}
          > 
            {/* Bild nur laden, wenn es ein echter Pfad ist */}
            {!isGradient && (
              <img 
                src={caseItem.image} 
                alt={caseItem.title} 
                className="w-full h-full object-cover block" 
              />
            )}
            
            <div className="absolute bottom-6 left-5 flex flex-wrap gap-2">
              {caseItem.tags?.map((tag, index) => (
                <span key={index} className="px-4 py-1.5 border border-white/40 rounded-full text-[10px] text-white uppercase font-bold backdrop-blur-md">
                  {tag}
                </span>
              ))}
            </div>
          </div>

        {/* 2. DER 3PX SPALT */}
        <div className="h-[3px] w-full bg-[#F1F2E5]"></div>

        {/* 3. INTRO BEREICH */}
        <div className="px-5 pt-8 mb-16">
          <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#FFB115] mb-3 block">
            {caseItem.category}
          </span>
          
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
        </div>

        {/* 4. DYNAMISCHE CASE STUDY CARDS & IMAGES */}
        <div className="px-5 space-y-20">
          
          {caseItem.challenge && (
            <div className="space-y-6">
              <span className="text-[10px] font-bold uppercase tracking-widest text-black/40">01. Challenge</span>
              <p className="text-2xl font-black uppercase tracking-tighter leading-[1.1]">
                {caseItem.challenge}
              </p>
            </div>
          )}

          {caseItem.detailImage1 && (
            <div className="w-full h-auto py-4">
              <img src={caseItem.detailImage1} alt="Detail 1" className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700" />
            </div>
          )}

          {caseItem.impact && (
            <div className="bg-[#1A1D25] text-white p-8 rounded-[2rem] space-y-4 border border-white/5 shadow-2xl">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#FFB115]">02. Impact</span>
              <p className="text-2xl font-black uppercase tracking-tighter leading-[1.1]">
                {caseItem.impact}
              </p>
            </div>
          )}

          {caseItem.detailImage2 && (
            <div className="w-full h-auto py-4">
              <img src={caseItem.detailImage2} alt="Detail 2" className="w-full h-auto" />
            </div>
          )}

          {caseItem.outcome && (
            <div className="space-y-6 border-t border-black/10 pt-10">
              <span className="text-[10px] font-bold uppercase tracking-widest text-black/40">03. Outcome</span>
              <p className="text-2xl font-black uppercase tracking-tighter leading-[1.1]">
                {caseItem.outcome}
              </p>
            </div>
          )}

        </div>
      </main>
    </div>
  );
};

export default MobileCaseView;