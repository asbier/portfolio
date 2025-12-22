
import React, { useState, useEffect } from 'react';
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
      
      <main className="pt-0 pb-32 relative" style={{ WebkitOverflowScrolling: 'touch', scrollBehavior: 'auto' }}> 
        {/* 1. HERO BEREICH */}
        <div 
          className="relative w-full overflow-hidden"
          style={{ 
            height: typeof window !== 'undefined' ? `${window.innerHeight * 0.6}px` : '400px',
            background: heroIsGradient ? heroImage : 'transparent',
          }}
        > 
          {!heroIsGradient && (
            <img 
              src={heroImage} 
              alt={caseItem.title} 
              className="w-full h-full object-cover block" 
              loading="eager" 
              decoding="async"
            />
          )}
          
          <div className="absolute bottom-2 left-5 flex flex-wrap gap-2 z-20">
            {caseItem.tags?.map((tag, index) => (
              <span key={index} className="px-3 py-1.5 rounded-full text-[9px] font-semibold font-neue-semibold uppercase text-[#979797] bg-transparent border border-[#979797]">
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
            className="text-xs font-black font-neue uppercase touch-manipulation relative inline-block"
            style={{
              lineHeight: '1',
              minHeight: '44px',
              minWidth: '44px'
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
            <p className="text-base lg:text-lg font-neue-book-semi leading-relaxed text-black">
              {caseItem.description}
            </p>
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

          {/* YEAR, ROLE & TEAM - REORDERED SECTION */}
          <div className="space-y-[0.1875rem] snap-start">
            <div className="bg-[#E2DED3] p-8 space-y-0">
              
              {/* 1. The Heading/Team Title */}
              {!caseItem.team ? (
                <div className="mb-8">
                  <h2 className="text-[28px] lg:text-[36px] font-neue-semibold uppercase tracking-normal leading-tight text-black mb-6">
                    DAYONE X HELLAGUTMANN
                  </h2>
                </div>
              ) : (
                <div className="mb-8">
                  <h2 className="text-[28px] lg:text-[36px] font-neue-semibold uppercase tracking-normal leading-tight text-black mb-6">
                    {caseItem.team.title}
                  </h2>
                </div>
              )}

              {/* 2. YEAR & ROLE (Now underneath the title) */}
              <div className="flex gap-12 mb-8">
                <div className="flex-1">
                  {caseItem.year && (
                    <div className="mb-8">
                      <h2 className="text-[17px] font-neue-semibold uppercase tracking-normal leading-tight text-black mb-2">YEAR</h2>
                      <p className="text-base lg:text-lg font-neue-book-semi leading-relaxed text-black">{caseItem.year}</p>
                    </div>
                  )}
                  {/* TEAM in left column under YEAR */}
                  {caseItem.team ? (
                    <div>
                      {caseItem.team.collaboration ? (
                        <p className="text-base lg:text-lg font-neue-book-semi leading-relaxed text-black">{caseItem.team.collaboration}</p>
                      ) : (
                        <div>
                          <h2 className="text-[17px] font-neue-semibold uppercase tracking-normal leading-tight text-black mb-2">TEAM</h2>
                          <div className="space-y-2 text-base lg:text-lg font-neue-book-semi leading-relaxed text-black">
                            {caseItem.team.members?.map((member, index) => (
                              <p key={index}>{member}</p>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div>
                      <h2 className="text-[17px] font-neue-semibold uppercase tracking-normal leading-tight text-black mb-2">TEAM</h2>
                      <div className="space-y-2 text-base lg:text-lg font-neue-book-semi leading-relaxed text-black">
                        <p>Consultancy and Guidance Christopher G. (Lead)</p>
                        <p>UX & Strategy Annemarie S.</p>
                        <p>UI Bean D.</p>
                        <p>PM Silvana M.</p>
                      </div>
                    </div>
                  )}
                </div>
                {caseItem.role && (
                  <div className="flex-1">
                    <h2 className="text-[17px] font-neue-semibold uppercase tracking-normal leading-tight text-black mb-2">ROLE</h2>
                    <p className="text-base lg:text-lg font-neue-book-semi leading-relaxed text-black">{caseItem.role}</p>
                  </div>
                )}
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default MobileCaseView;