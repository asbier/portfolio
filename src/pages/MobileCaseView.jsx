
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';

const MobileCaseView = ({ caseItem }) => {
  const navigate = useNavigate();
  // Hilfsfunktion: Entscheidet ob Bild oder Verlauf gerendert wird
  const renderMedia = (source, alt, className = "") => {
    if (!source) return null;
    const isGradient = source.startsWith('linear-gradient');

    return (
      <div 
        className={`w-full overflow-hidden ${className}`}
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
    <div className="min-h-screen bg-[#F1F2E5] text-black font-neue overflow-y-auto" style={{ WebkitOverflowScrolling: 'touch' }}>
      <Navbar />
      
      <main className="pt-0 pb-32 scroll-smooth"> 
        {/* 1. HERO BEREICH - Sticky */}
        <div 
          className="sticky top-0 z-30 relative w-full h-[60vh] overflow-hidden"
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

        {/* Navigation - Above first card */}
        <div className="px-5 pt-8 pb-4">
          <button 
            onClick={() => navigate('/')}
            className="text-xs font-black font-neue uppercase border-b border-black"
          >
            ← See all cases
          </button>
        </div>

        {/* 2. INTRO CARD */}
        <div className="px-5 mb-[0.1875rem]">
          <div className="bg-[#E2DED3] p-8 space-y-0">
            <h1 className="text-[24px] lg:text-[36px] font-neue-semibold uppercase tracking-normal leading-tight text-black mb-[68px]">
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
        <div className="px-5 space-y-[0.1875rem] snap-y snap-mandatory">
          
          {/* CHALLENGE */}
          {caseItem.challenge && (
            <div className="space-y-[0.1875rem] snap-start">
              <div className="bg-[#E2DED3] p-8 space-y-0">
                <h2 className="text-[24px] lg:text-[36px] font-neue-semibold uppercase tracking-normal leading-tight text-black mb-[68px]">CHALLENGE</h2>
                <p className="text-base lg:text-lg font-neue-book-semi leading-relaxed text-black">{caseItem.challenge}</p>
              </div>
              {renderMedia(caseItem.detailImage1, "Challenge Detail", "grayscale hover:grayscale-0 transition-all duration-700")}
            </div>
          )}

          {/* IMPACT */}
          {caseItem.impact && (
            <div className="space-y-[0.1875rem] snap-start">
              <div className="bg-[#E2DED3] p-8 space-y-0">
                <h2 className="text-[24px] lg:text-[36px] font-neue-semibold uppercase tracking-normal leading-tight text-black mb-[68px]">IMPACT</h2>
                <p className="text-base lg:text-lg font-neue-book-semi leading-relaxed text-black">{caseItem.impact}</p>
              </div>
              {renderMedia(caseItem.detailImage2, "Impact Detail", "")}
            </div>
          )}

          {/* OUTCOME */}
          {caseItem.outcome && (
            <div className="space-y-[0.1875rem] snap-start">
              <div className="bg-[#E2DED3] p-8 space-y-0">
                <h2 className="text-[24px] lg:text-[36px] font-neue-semibold uppercase tracking-normal leading-tight text-black mb-[68px]">OUTCOME</h2>
                <p className="text-base lg:text-lg font-neue-book-semi leading-relaxed text-black">{caseItem.outcome}</p>
              </div>
              {renderMedia(caseItem.detailImage3, "Final Outcome Detail", "shadow-lg")}
            </div>
          )}

          {/* LEARNING */}
          {caseItem.learning && (
            <div className="space-y-[0.1875rem] snap-start">
              <div className="bg-[#E2DED3] p-8 space-y-0">
                <h2 className="text-[24px] lg:text-[36px] font-neue-semibold uppercase tracking-normal leading-tight text-black mb-[68px]">LEARNING</h2>
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