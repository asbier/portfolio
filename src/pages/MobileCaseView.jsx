
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import GrainOverlay from '../components/GrainOverlay/GrainOverlay';

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
          <img 
            src={source} 
            alt={alt} 
            className="w-full h-auto block" 
            loading="lazy" 
            decoding="async"
          />
        )}
      </div>
    );
  };

  const heroImage = caseItem.mobileImage || caseItem.image;
  const heroIsGradient = heroImage?.startsWith('linear-gradient');

  return (
    <div className="min-h-screen bg-[#F1F2E5] text-black font-neue" style={{ WebkitOverflowScrolling: 'touch' }}>
      <GrainOverlay />
      <Navbar />
      
      <main className="pt-0 pb-32 scroll-smooth relative overflow-y-auto" style={{ height: 'calc(100vh - 110px)', WebkitOverflowScrolling: 'touch' }}> 
        {/* 1. HERO BEREICH - Sticky 10px from top */}
        <div 
          className="sticky top-[10px] z-50 relative w-full h-[60vh] overflow-hidden"
          style={{ 
            background: heroIsGradient ? heroImage : 'transparent',
            position: 'sticky',
            WebkitPosition: 'sticky'
          }}
        > 
          {!heroIsGradient && (
            <img src={heroImage} alt={caseItem.title} className="w-full h-full object-cover block" loading="eager" decoding="async" />
          )}
          
          <div className="absolute bottom-6 left-5 flex flex-wrap gap-2 z-20">
            {caseItem.tags?.map((tag, index) => (
              <span key={index} className="px-4 py-2 rounded-full text-[10px] font-semibold font-neue-semibold uppercase text-[#979797] bg-transparent border border-[#979797]">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="h-[3px] w-full bg-[#F1F2E5] -mt-[3px] relative z-30"></div>

        {/* Navigation - Above first card */}
        <div className="px-5 pt-8 pb-4 relative z-30">
          <button 
            onClick={() => navigate('/')}
            className="text-xs font-black font-neue uppercase min-h-[44px] min-w-[44px] touch-manipulation leading-none relative inline-block"
            style={{
              borderBottom: '1px solid black',
              paddingBottom: '2px',
              lineHeight: '1'
            }}
          >
            ← See all cases
          </button>
        </div>

        {/* 2. INTRO CARD */}
        <div className="px-5 mb-[0.1875rem] relative z-30">
          <div className="bg-[#E2DED3] p-8 space-y-0">
            <h1 className="text-[32px] lg:text-[36px] font-neue-semibold uppercase tracking-normal leading-tight text-black mb-[62px]">
              {caseItem.title}
            </h1>
            <div className="flex justify-between items-start">
              <p className="text-base lg:text-lg font-neue-book-semi leading-relaxed text-black max-w-[65%]">
                {caseItem.description}
              </p>
              <div className="text-sm font-neue-book-semi uppercase text-right leading-relaxed text-black">
                YEAR: {caseItem.year || '2024'}<br />ROLE: {caseItem.role || 'LEAD'}
              </div>
            </div>
          </div>
        </div>

        {/* 3. CONTENT SECTIONS */}
        <div className="px-5 space-y-[0.1875rem] snap-y snap-mandatory relative z-30">
          
          {/* CHALLENGE */}
          {caseItem.challenge && (
            <div className="space-y-[0.1875rem] snap-start">
              <div className="bg-[#E2DED3] p-8 space-y-0">
                <h2 className="text-[28px] lg:text-[36px] font-neue-semibold uppercase tracking-normal leading-tight text-black mb-[62px]">CHALLENGE</h2>
                <p className="text-base lg:text-lg font-neue-book-semi leading-relaxed text-black">{caseItem.challenge}</p>
              </div>
              {renderMedia(caseItem.id === 6 ? caseItem.detailImageMobile1 : caseItem.detailImage1, "Challenge Detail", "grayscale hover:grayscale-0 transition-all duration-700")}
            </div>
          )}

          {/* IMPACT */}
          {caseItem.impact && (
            <div className="space-y-[0.1875rem] snap-start">
              <div className="bg-[#E2DED3] p-8 space-y-0">
                <h2 className="text-[28px] lg:text-[36px] font-neue-semibold uppercase tracking-normal leading-tight text-black mb-[62px]">IMPACT</h2>
                <p className="text-base lg:text-lg font-neue-book-semi leading-relaxed text-black">{caseItem.impact}</p>
              </div>
              {renderMedia(caseItem.id === 6 ? caseItem.detailImageMobile2 : caseItem.detailImage2, "Impact Detail", "")}
            </div>
          )}

          {/* LEARNING */}
          {caseItem.learning && (
            <div className="space-y-[0.1875rem] snap-start">
              <div className="bg-[#E2DED3] p-8 space-y-0">
                <h2 className="text-[28px] lg:text-[36px] font-neue-semibold uppercase tracking-normal leading-tight text-black mb-[62px]">LEARNING</h2>
                <p className="text-base lg:text-lg font-neue-book-semi leading-relaxed text-black italic">"{caseItem.learning}"</p>
              </div>
            </div>
          )}

          {/* Additional image for Conic Rose (before OUTCOME) */}
          {caseItem.id === 6 && caseItem.detailImageMobile4 && (
            <div className="space-y-[0.1875rem] snap-start">
              {renderMedia(caseItem.detailImageMobile4, "Detail", "")}
            </div>
          )}

          {/* OUTCOME */}
          {caseItem.outcome && (
            <div className="space-y-[0.1875rem] snap-start">
              <div className="bg-[#E2DED3] p-8 space-y-0">
                <h2 className="text-[28px] lg:text-[36px] font-neue-semibold uppercase tracking-normal leading-tight text-black mb-[62px]">OUTCOME</h2>
                <p className="text-base lg:text-lg font-neue-book-semi leading-relaxed text-black">{caseItem.outcome}</p>
              </div>
              {renderMedia(caseItem.id === 6 ? caseItem.detailImageMobile5 : caseItem.detailImage3, "Final Outcome Detail", "shadow-lg")}
            </div>
          )}

          {/* Additional detail images for cases with more than 3 images */}
          {caseItem.detailImage4 && caseItem.id !== 6 && (
            <div className="space-y-[0.1875rem] snap-start">
              {renderMedia(caseItem.detailImage4, "Detail 4", "")}
            </div>
          )}
          {caseItem.detailImage5 && caseItem.id !== 6 && (
            <div className="space-y-[0.1875rem] snap-start">
              {renderMedia(caseItem.detailImage5, "Detail 5", "")}
            </div>
          )}
          {caseItem.detailImage6 && caseItem.id !== 6 && (
            <div className="space-y-[0.1875rem] snap-start">
              {renderMedia(caseItem.detailImage6, "Detail 6", "")}
            </div>
          )}

        </div>
      </main>
    </div>
  );
};

export default MobileCaseView;