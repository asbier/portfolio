
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

        {/* 2. INTRO CARD */}
        <div className="px-5 pt-8 mb-[3px]">
          <div className="bg-[#E2DED3] p-8 rounded-[2rem] space-y-0">
            <span className="text-[10px] font-semibold font-neue-semibold uppercase tracking-[0.15em] text-[#FFB115] mb-3 block">
              {caseItem.category}
            </span>
            <h1 className="text-[32px] lg:text-[62px] font-semibold font-neue-semibold uppercase tracking-tighter leading-tight text-black mb-[68px]">
              {caseItem.title}
            </h1>
            <div className="flex justify-between items-start">
              <p className="text-base lg:text-lg font-neue-book-semi leading-relaxed text-black max-w-[65%]">
                {caseItem.description}
              </p>
              <div className="text-sm font-neue-book-semi uppercase text-right leading-relaxed text-black">
                YEAR: {caseItem.year || '2024'}<br />ROLE: LEAD
              </div>
            </div>
          </div>
        </div>

        {/* 3. CONTENT SECTIONS */}
        <div className="px-5 space-y-[3px]">
          
          {/* CHALLENGE */}
          {caseItem.challenge && (
            <div className="space-y-6">
              <div className="bg-[#E2DED3] p-8 rounded-[2rem] space-y-0">
                <h2 className="text-[32px] lg:text-[62px] font-semibold font-neue-semibold uppercase tracking-tighter leading-tight text-black mb-[68px]">CHALLENGE</h2>
                <p className="text-base lg:text-lg font-neue-book-semi leading-relaxed text-black">{caseItem.challenge}</p>
              </div>
              {renderMedia(caseItem.detailImage1, "Challenge Detail", "py-4 grayscale hover:grayscale-0 transition-all duration-700")}
            </div>
          )}

          {/* IMPACT */}
          {caseItem.impact && (
            <div className="space-y-6">
              <div className="bg-[#E2DED3] p-8 rounded-[2rem] space-y-0">
                <h2 className="text-[32px] lg:text-[62px] font-semibold font-neue-semibold uppercase tracking-tighter leading-tight text-black mb-[68px]">IMPACT</h2>
                <p className="text-base lg:text-lg font-neue-book-semi leading-relaxed text-black">{caseItem.impact}</p>
              </div>
              {renderMedia(caseItem.detailImage2, "Impact Detail", "py-4")}
            </div>
          )}

          {/* OUTCOME */}
          {caseItem.outcome && (
            <div className="space-y-6">
              <div className="bg-[#E2DED3] p-8 rounded-[2rem] space-y-0">
                <h2 className="text-[32px] lg:text-[62px] font-semibold font-neue-semibold uppercase tracking-tighter leading-tight text-black mb-[68px]">OUTCOME</h2>
                <p className="text-base lg:text-lg font-neue-book-semi leading-relaxed text-black">{caseItem.outcome}</p>
              </div>
              {renderMedia(caseItem.detailImage3, "Final Outcome Detail", "py-4 shadow-lg")}
            </div>
          )}

          {/* LEARNING */}
          {caseItem.learning && (
            <div className="space-y-6">
              <div className="bg-[#E2DED3] p-8 rounded-[2rem] space-y-0">
                <h2 className="text-[32px] lg:text-[62px] font-semibold font-neue-semibold uppercase tracking-tighter leading-tight text-black mb-[68px]">LEARNING</h2>
                <p className="text-base lg:text-lg font-neue-book-semi leading-relaxed text-black italic">"{caseItem.learning}"</p>
              </div>
            </div>
          )}

        </div>
      </main>
    </div>
  );
};

export default MobileCaseView;