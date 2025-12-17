
import React from 'react';
import Navbar from '../components/Navbar/Navbar';

const MobileCaseView = ({ caseItem }) => {
  // Hilfsfunktion: Entscheidet ob Bild oder Verlauf gerendert wird
  const renderMedia = (source, alt, className = "") => {
    if (!source) return null;
    const isGradient = source.startsWith('linear-gradient');

    return (
      <div 
        className={`w-full overflow-hidden rounded-xl ${className}`}
        style={{ 
          background: isGradient ? source : 'transparent',
          aspectRatio: isGradient ? '16/9' : 'auto' // Platzhalter-Ratio für Verläufe
        }}
      >
        {!isGradient && (
          <img src={source} alt={alt} className="w-full h-auto block" />
        )}
      </div>
    );
  };

  const heroIsGradient = caseItem.image?.startsWith('linear-gradient');

  return (
    <div className="min-h-screen bg-[#F1F2E5] text-black font-neue">
      <Navbar />
      
      <main className="pt-0 pb-32"> 
        {/* 1. HERO BEREICH */}
        <div 
          className="relative w-full h-[60vh] overflow-hidden"
          style={{ background: heroIsGradient ? caseItem.image : 'transparent' }}
        > 
          {!heroIsGradient && (
            <img src={caseItem.image} alt={caseItem.title} className="w-full h-full object-cover block" />
          )}
          
          <div className="absolute bottom-6 left-5 flex flex-wrap gap-2">
            {caseItem.tags?.map((tag, index) => (
              <span key={index} className="px-4 py-2 rounded-full text-[10px] font-semibold font-neue-semibold uppercase text-[#979797] bg-transparent border border-[#979797]">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="h-[3px] w-full bg-[#F1F2E5]"></div>

        {/* 2. INTRO */}
        <div className="px-5 pt-8 mb-16">
          <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#FFB115] mb-3 block">
            {caseItem.category}
          </span>
          <h1 className="text-[40px] font-semibold font-neue-semibold uppercase tracking-tighter leading-[0.85] mb-6 text-[#979797]">
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

        {/* 3. CONTENT SECTIONS */}
        <div className="px-5 space-y-20">
          
          {/* CHALLENGE */}
          {caseItem.challenge && (
            <div className="space-y-6">
              <span className="text-[10px] font-bold uppercase tracking-widest text-black/40">01. Challenge</span>
              <p className="text-2xl font-black uppercase tracking-tighter leading-[1.1]">{caseItem.challenge}</p>
              {renderMedia(caseItem.detailImage1, "Challenge Detail", "py-4 grayscale hover:grayscale-0 transition-all duration-700")}
            </div>
          )}

          {/* IMPACT */}
          {caseItem.impact && (
            <div className="space-y-6">
              <div className="bg-[#1A1D25] text-white p-8 rounded-[2rem] space-y-4 border border-white/5 shadow-2xl">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#FFB115]">02. Impact</span>
                <p className="text-2xl font-black uppercase tracking-tighter leading-[1.1]">{caseItem.impact}</p>
              </div>
              {renderMedia(caseItem.detailImage2, "Impact Detail", "py-4")}
            </div>
          )}

          {/* OUTCOME / ADAS GUIDE */}
          <div className="space-y-6">
            {caseItem.outcome && (
              <div className="border-t border-black/10 pt-10">
                <span className="text-[10px] font-bold uppercase tracking-widest text-black/40">03. Outcome</span>
                <p className="text-2xl font-black uppercase tracking-tighter leading-[1.1]">{caseItem.outcome}</p>
              </div>
            )}
            {renderMedia(caseItem.detailImage3, "Final Outcome Detail", "py-4 shadow-lg")}
          </div>

        </div>
      </main>
    </div>
  );
};

export default MobileCaseView;