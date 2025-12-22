
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import GrainOverlay from '../components/GrainOverlay/GrainOverlay';

const MobileCaseView = ({ caseItem }) => {
  const navigate = useNavigate();
  const [visibleElements, setVisibleElements] = useState(new Set());
  
  // Scroll animation component - fades in and slides up when entering viewport
  const AnimatedCard = ({ children, id, className = "" }) => {
    const cardRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsVisible(true);
              setVisibleElements(prev => new Set([...prev, id]));
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px', // Trigger slightly before element enters
        }
      );

      if (cardRef.current) {
        observer.observe(cardRef.current);
      }

      return () => {
        if (cardRef.current) {
          observer.unobserve(cardRef.current);
        }
      };
    }, [id]);

    return (
      <div
        ref={cardRef}
        className={`transition-all duration-700 ease-out ${
          isVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-8'
        } ${className}`}
      >
        {children}
      </div>
    );
  };
  
  // Video component with Intersection Observer for autoplay on viewport entry
  const VideoPlayer = ({ source, poster, className = "" }) => {
    const videoRef = useRef(null);
    const [shouldLoad, setShouldLoad] = useState(false);

    useEffect(() => {
      const video = videoRef.current;
      if (!video) return;

      // Intersection Observer: Load and play video when it enters viewport
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Load video source if not already loaded
              if (!shouldLoad) {
                setShouldLoad(true);
              }
              
              // Play video when it enters viewport
              if (video.paused) {
                video.play().catch((error) => {
                  // Autoplay was prevented (user interaction required)
                  console.log('Autoplay prevented:', error);
                });
              }
            } else {
              // Pause video when it leaves viewport (save bandwidth)
              if (!video.paused) {
                video.pause();
              }
            }
          });
        },
        {
          rootMargin: '200px', // Start loading 200px before video enters viewport
          threshold: 0.1, // Trigger when 10% of video is visible (load earlier)
        }
      );

      observer.observe(video);

      return () => {
        observer.disconnect();
      };
    }, [shouldLoad]);

    return (
      <video 
        ref={videoRef}
        className={`w-full h-auto block ${className}`}
        controls
        preload="none"
        poster={poster ? encodeURI(poster) : undefined}
        playsInline
        muted={true} // Required for autoplay in most browsers
        loop={true} // Loop video for better portfolio experience
      >
        {shouldLoad && (
          <source src={encodeURI(source)} type={`video/${source.split('.').pop()}`} />
        )}
        Your browser does not support the video tag.
      </video>
    );
  };
  
  // Hilfsfunktion: Entscheidet ob Bild, Video oder Verlauf gerendert wird
  const renderMedia = (source, alt, className = "", poster = null) => {
    if (!source) return null;
    
    const isGradient = source.startsWith('linear-gradient');
    const isVideo = source.endsWith('.mp4') || source.endsWith('.webm') || source.endsWith('.mov');

    return (
      <div 
        className={`w-full overflow-hidden ${className}`}
        style={{ 
          background: isGradient ? source : 'transparent',
          aspectRatio: isGradient ? '16/9' : 'auto' // Platzhalter-Ratio für Verläufe
        }}
      >
        {isVideo ? (
          <VideoPlayer source={source} poster={poster} />
        ) : !isGradient && (
          <img 
            src={encodeURI(source)} 
            alt={alt} 
            className="w-full h-auto block" 
            loading="lazy" 
            decoding="async"
            onError={(e) => {
              // Hide image if it fails to load (empty/corrupted)
              e.target.style.display = 'none';
            }}
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

        {/* 3. CONTENT SECTIONS - Improved Storytelling Flow */}
        <div className="px-5 space-y-[0.1875rem] snap-y snap-mandatory relative z-30">
          
          {/* Context Image - Visual hook after intro */}
          {caseItem.detailImage1 && (
            <AnimatedCard id="image1" className="space-y-[0.1875rem] snap-start">
              {renderMedia(
                caseItem.id === 6 ? caseItem.detailImageMobile1 : caseItem.detailImage1, 
                "Context", 
                ""
              )}
            </AnimatedCard>
          )}

          {/* CHALLENGE - Problem statement */}
          {caseItem.challenge && (
            <AnimatedCard id="challenge" className="space-y-[0.1875rem] snap-start">
              <div className="bg-[#E2DED3] p-8 space-y-0">
                <h2 className="text-[28px] lg:text-[36px] font-neue-semibold uppercase tracking-normal leading-tight text-black mb-[62px]">CHALLENGE</h2>
                <p className="text-base lg:text-lg font-neue-book-semi leading-relaxed text-black">{caseItem.challenge}</p>
              </div>
            </AnimatedCard>
          )}

          {/* Challenge Visual - Shows the problem */}
          {/* Skip detailImage2 for VW (id: 3) - it comes after OUTCOME */}
          {caseItem.detailImage2 && caseItem.id !== 3 && (
            <AnimatedCard id="image2" className="space-y-[0.1875rem] snap-start">
              {renderMedia(
                caseItem.id === 6 ? caseItem.detailImageMobile2 : caseItem.detailImage2, 
                "Challenge Visual", 
                "grayscale hover:grayscale-0 transition-all duration-700"
              )}
            </AnimatedCard>
          )}

          {/* IMPACT - Solution approach */}
          {caseItem.impact && (
            <AnimatedCard id="impact" className="space-y-[0.1875rem] snap-start">
              <div className="bg-[#E2DED3] p-8 space-y-0">
                <h2 className="text-[28px] lg:text-[36px] font-neue-semibold uppercase tracking-normal leading-tight text-black mb-[62px]">IMPACT</h2>
                <p className="text-base lg:text-lg font-neue-book-semi leading-relaxed text-black">{caseItem.impact}</p>
              </div>
            </AnimatedCard>
          )}

          {/* Impact Visual - Shows the solution/process */}
          {/* Skip detailImage3 for VW (id: 3) - no image needed under IMPACT */}
          {caseItem.detailImage3 && caseItem.id !== 3 && (
            <div className="space-y-[0.1875rem] snap-start">
              {renderMedia(
                caseItem.id === 6 ? caseItem.detailImageMobile4 : caseItem.detailImage3, 
                "Impact Visual", 
                ""
              )}
            </div>
          )}

          {/* Additional supporting images - Show process/details */}
          {caseItem.detailImage4 && caseItem.id !== 6 && (
            <div className="space-y-[0.1875rem] snap-start">
              {renderMedia(caseItem.detailImage4, "Process Detail", "")}
            </div>
          )}
          {caseItem.detailImage5 && caseItem.id !== 6 && (
            <div className="space-y-[0.1875rem] snap-start">
              {renderMedia(caseItem.detailImage5, "Detail", "")}
            </div>
          )}

          {/* Video 1 - Show solution in action (after supporting images, before OUTCOME) */}
          {caseItem.detailVideo1 && (
            <div className="space-y-[0.1875rem] snap-start">
              {renderMedia(caseItem.detailVideo1, "Video Demo", "", caseItem.detailVideo1Poster)}
            </div>
          )}

          {/* OUTCOME - Results */}
          {caseItem.outcome && (
            <AnimatedCard id="outcome" className="space-y-[0.1875rem] snap-start">
              <div className="bg-[#E2DED3] p-8 space-y-0">
                <h2 className="text-[28px] lg:text-[36px] font-neue-semibold uppercase tracking-normal leading-tight text-black mb-[62px]">OUTCOME</h2>
                <p className="text-base lg:text-lg font-neue-book-semi leading-relaxed text-black">{caseItem.outcome}</p>
              </div>
            </AnimatedCard>
          )}

          {/* Final Outcome Visual - The result */}
          {caseItem.id === 6 && caseItem.detailImageMobile5 && (
            <div className="space-y-[0.1875rem] snap-start">
              {renderMedia(caseItem.detailImageMobile5, "Final Outcome", "shadow-lg")}
            </div>
          )}
          {/* VW (id: 3) - IDModelle image comes after OUTCOME */}
          {caseItem.id === 3 && caseItem.detailImage2 && (
            <div className="space-y-[0.1875rem] snap-start">
              {renderMedia(caseItem.detailImage2, "Final Outcome", "shadow-lg")}
            </div>
          )}
          {caseItem.id !== 6 && caseItem.id !== 3 && caseItem.detailImage6 && (
            <div className="space-y-[0.1875rem] snap-start">
              {renderMedia(caseItem.detailImage6, "Final Outcome", "shadow-lg")}
            </div>
          )}

          {/* Video 2 - Final result demonstration (after OUTCOME) */}
          {caseItem.detailVideo2 && (
            <div className="space-y-[0.1875rem] snap-start">
              {renderMedia(caseItem.detailVideo2, "Final Video", "", caseItem.detailVideo2Poster)}
            </div>
          )}

          {/* Additional detail images after outcome (for cases with many images) */}
          {caseItem.detailImage7 && (
            <div className="space-y-[0.1875rem] snap-start">
              {renderMedia(caseItem.detailImage7, "Detail", "")}
            </div>
          )}
          {caseItem.detailImage8 && (
            <div className="space-y-[0.1875rem] snap-start">
              {renderMedia(caseItem.detailImage8, "Detail", "")}
            </div>
          )}
          {caseItem.detailImage9 && (
            <div className="space-y-[0.1875rem] snap-start">
              {renderMedia(caseItem.detailImage9, "Detail", "")}
            </div>
          )}
          {caseItem.detailImage10 && (
            <div className="space-y-[0.1875rem] snap-start">
              {renderMedia(caseItem.detailImage10, "Detail", "")}
            </div>
          )}
          {caseItem.detailImage11 && (
            <div className="space-y-[0.1875rem] snap-start">
              {renderMedia(caseItem.detailImage11, "Detail", "")}
            </div>
          )}

          {/* LEARNING - Reflection at the end */}
          {caseItem.learning && (
            <AnimatedCard id="learning" className="space-y-[0.1875rem] snap-start">
              <div className="bg-[#E2DED3] p-8 space-y-0">
                <h2 className="text-[28px] lg:text-[36px] font-neue-semibold uppercase tracking-normal leading-tight text-black mb-[62px]">LEARNING</h2>
                <p className="text-base lg:text-lg font-neue-book-semi leading-relaxed text-black italic">"{caseItem.learning}"</p>
              </div>
            </AnimatedCard>
          )}

          {/* YEAR, ROLE & TEAM - REORDERED SECTION */}
          <AnimatedCard id="year-role-team" className="space-y-[0.1875rem] snap-start">
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
          </AnimatedCard>

        </div>
      </main>
    </div>
  );
};

export default MobileCaseView;