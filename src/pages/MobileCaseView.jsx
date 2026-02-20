
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import Navbar from '../components/Navbar/Navbar';
import GrainOverlay from '../components/GrainOverlay/GrainOverlay';

// TextFade Component - Fade up animation for text content with stretchy/elastic effect
const TextFade = ({
  direction = 'up',
  children,
  className = '',
  staggerChildren = 0.1,
}) => {
  const FADE_DOWN = {
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        type: 'spring',
        stiffness: 40,   // Niedriger = "schwerer" und langsamer
        damping: 14,     // Kontrolle über das Nachschwingen
        mass: 1,         // Erhöhen, wenn es sich noch massiver anfühlen soll
        velocity: 2      // Startgeschwindigkeit
      } 
    },
    hidden: { 
      opacity: 0, 
      y: direction === 'down' ? -30 : 30 // Etwas mehr Weg (30 statt 18) macht die Bewegung sichtbarer
    },
  };
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '0px 0px -100px 0px' });
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'show' : ''}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: staggerChildren,
          },
        },
      }}
      className={className}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child) ? (
          <motion.div variants={FADE_DOWN}>{child}</motion.div>
        ) : (
          child
        )
      )}
    </motion.div>
  );
};

// FadeUp Component - For images and cards with stretchy/elastic effect
const FadeUp = ({ children, className = '' }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '0px 0px -100px 0px' });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{
        type: 'spring',
        stiffness: 40,   // Niedriger = "schwerer" und langsamer
        damping: 14,     // Kontrolle über das Nachschwingen
        mass: 1,         // Erhöhen, wenn es sich noch massiver anfühlen soll
        velocity: 2      // Startgeschwindigkeit
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const MobileCaseView = ({ caseItem }) => {
  const navigate = useNavigate();
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Same order as desktop allImages — for looking up imageTitles by URL
  const imageList = React.useMemo(() => [
    caseItem.introImage,
    caseItem.image,
    caseItem.detailImage1, caseItem.detailImage2, caseItem.detailImage3,
    caseItem.detailImage4, caseItem.detailImage5, caseItem.detailImage6,
    caseItem.detailImage7, caseItem.detailImage8, caseItem.detailImage9,
    caseItem.detailImage10, caseItem.detailImage11,
    caseItem.detailVideo1, caseItem.detailVideo2
  ].filter(Boolean), [caseItem]);

  const getTitleForUrl = (url) => {
    if (!url || !caseItem.imageTitles) return null;
    const idx = imageList.indexOf(url);
    return idx >= 0 ? caseItem.imageTitles[idx] : null;
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
  
  // Hilfsfunktion: Entscheidet ob Bild, Video oder Verlauf gerendert wird; Titel wie auf Desktop auf dem Bild
  const renderMedia = (source, alt, className = "", poster = null, caption = null) => {
    if (!source) return null;
    const title = caption ?? getTitleForUrl(source);
    const isGradient = source.startsWith('linear-gradient');
    const isVideo = source.endsWith('.mp4') || source.endsWith('.webm') || source.endsWith('.mov');

    return (
      <div className="w-full relative">
        <div 
          className={`w-full overflow-hidden ${className}`}
          style={{ 
            background: isGradient ? source : 'transparent',
            aspectRatio: isGradient ? '16/9' : 'auto'
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
                e.target.style.display = 'none';
              }}
            />
          )}
        </div>
        {title && (
          <div className="absolute bottom-0 left-0 pl-4 pb-4 z-10 pointer-events-none">
            <p className="text-base font-neue-semibold uppercase text-[#363C53]">{title}</p>
          </div>
        )}
      </div>
    );
  };

  const heroImage = caseItem.mobileImage || caseItem.image;
  const heroIsGradient = heroImage?.startsWith('linear-gradient');

  // Show back to top button when scrolled down
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F5F3F0] text-[#363C53] font-neue select-text selection:bg-[#DFFF00] selection:text-[#363C53]" style={{ WebkitOverflowScrolling: 'touch', scrollBehavior: 'smooth' }}>
      <GrainOverlay />
      <Navbar />
      
      <main className="pt-0 pb-32 relative" style={{ WebkitOverflowScrolling: 'touch', scrollBehavior: 'smooth' }}> 
        {/* 1. HERO BEREICH */}
        <div 
          className="relative w-full overflow-hidden"
          style={{ 
            height: typeof window !== 'undefined' ? `${window.innerHeight * 0.6}px` : '400px',
            background: heroIsGradient ? heroImage : 'transparent',
          }}
        >
          {!heroIsGradient && (
            <>
              <img 
                src={heroImage} 
                alt={caseItem.title} 
                className={`w-full h-full block ${caseItem.imageFit === 'contain' ? 'object-contain' : 'object-cover'}`} 
                loading="eager" 
                decoding="async"
              />
            </>
          )}

          {/* Navigation - Overlay on Hero Image */}
          <div className="absolute bottom-4 left-4 z-30">
            <button 
              onClick={() => navigate('/')}
              className="text-xs font-black font-neue uppercase touch-manipulation text-white"
              style={{
                lineHeight: '1',
                minHeight: '44px',
                minWidth: '44px'
              }}
            >
              ← See all cases
            </button>
          </div>
        </div>

        <div className="h-[3px] w-full bg-[#F0F5F5] -mt-[3px] relative z-30"></div>

        {/* 2. INTRO CARD */}
        <div className="mb-[0.1875rem] relative z-30">
          <div className="p-8 space-y-0 backdrop-blur-xl" style={{ background: 'linear-gradient(to bottom, rgba(230, 228, 222, 0.4) 0%, rgba(245, 243, 240, 0.98) 50%, rgba(235, 233, 228, 0.95) 100%)' }}>
            <TextFade direction="up">
            <h1 className="text-[62px] lg:text-[36px] font-neue-semibold uppercase tracking-normal leading-[1.1] text-[#363C53] text-grain mb-[62px]">
              {caseItem.title}
            </h1>
              <p className="text-base lg:text-lg font-neue-book-semi leading-relaxed text-[#979797] text-grain text-justify hyphens-auto" style={{ textAlignLast: 'left' }}>
                {caseItem.description}
              </p>
            </TextFade>
          </div>
        </div>

        {/* 3. CONTENT SECTIONS - Improved Storytelling Flow */}
        <div className="space-y-[0.1875rem] snap-y snap-mandatory snap-proximity relative z-30" style={{ scrollBehavior: 'smooth', scrollPaddingTop: '20px' }}>
          
          {/* Intro Image - Right after intro (e.g. moodboard) */}
          {caseItem.introImage && (
            <FadeUp className="space-y-[0.1875rem] snap-start">
              {renderMedia(caseItem.introImage, "Moodboard", "")}
            </FadeUp>
          )}

          {/* Context Image - Visual hook after intro */}
          {caseItem.detailImage1 && (
            <FadeUp className="space-y-[0.1875rem] snap-start">
              {renderMedia(
                caseItem.id === 6 ? caseItem.detailImageMobile1 : caseItem.detailImage1, 
                "Context", 
                ""
              )}
            </FadeUp>
          )}

          {/* CHALLENGE - Problem statement */}
          {caseItem.challenge && (
            <FadeUp className="space-y-[0.1875rem] snap-start">
              <div className="p-8 space-y-0 backdrop-blur-xl" style={{ background: 'linear-gradient(to bottom, rgba(230, 228, 222, 0.4) 0%, rgba(245, 243, 240, 0.98) 50%, rgba(235, 233, 228, 0.95) 100%)' }}>
                <TextFade direction="up">
                <h2 className="text-[28px] lg:text-[36px] font-neue-semibold uppercase tracking-normal leading-[1.1] text-[#363C53] text-grain mb-[62px]">CHALLENGE</h2>
                <p className="text-base lg:text-lg font-neue-book-semi leading-relaxed text-[#979797] text-grain text-justify hyphens-auto" style={{ textAlignLast: 'left' }}>{caseItem.challenge}</p>
                </TextFade>
              </div>
            </FadeUp>
          )}

          {/* Challenge Visual - Shows the problem */}
          {/* Skip detailImage2 for VW (id: 3) - it comes after OUTCOME; skip for Jovana (id: 13) - it comes after IMPACT */}
          {caseItem.detailImage2 && caseItem.id !== 3 && caseItem.id !== 13 && (
            <FadeUp className="space-y-[0.1875rem] snap-start">
              {renderMedia(
                caseItem.id === 6 ? caseItem.detailImageMobile2 : caseItem.detailImage2, 
                "Challenge Visual", 
                "grayscale hover:grayscale-0 transition-all duration-700"
              )}
            </FadeUp>
          )}

          {/* IMPACT - Solution approach */}
          {caseItem.impact && (
            <FadeUp className="space-y-[0.1875rem] snap-start">
              <div className="p-8 space-y-0 backdrop-blur-xl" style={{ background: 'linear-gradient(to bottom, rgba(230, 228, 222, 0.4) 0%, rgba(245, 243, 240, 0.98) 50%, rgba(235, 233, 228, 0.95) 100%)' }}>
                <TextFade direction="up">
                <h2 className="text-[28px] lg:text-[36px] font-neue-semibold uppercase tracking-normal leading-[1.1] text-[#363C53] text-grain mb-[62px]">IMPACT</h2>
                <p className="text-base lg:text-lg font-neue-book-semi leading-relaxed text-[#979797] text-grain text-justify hyphens-auto" style={{ textAlignLast: 'left' }}>{caseItem.impact}</p>
                </TextFade>
              </div>
            </FadeUp>
          )}

          {/* Impact Visual - Shows the solution/process */}
          {/* Skip detailImage3 for VW (id: 3) - no image needed under IMPACT */}
          {caseItem.detailImage3 && caseItem.id !== 3 && (
            <FadeUp className="space-y-[0.1875rem] snap-start">
              {renderMedia(
                caseItem.id === 6 ? caseItem.detailImageMobile4 : caseItem.detailImage3, 
                "Impact Visual", 
                ""
              )}
            </FadeUp>
          )}

          {/* Jovana (id: 13) - Last image(s) after IMPACT */}
          {caseItem.id === 13 && caseItem.detailImage2 && (
            <FadeUp className="space-y-[0.1875rem] snap-start">
              {renderMedia(caseItem.detailImage2, "Final poster", "")}
            </FadeUp>
          )}

          {/* Additional supporting images - Show process/details */}
          {caseItem.detailImage4 && caseItem.id !== 6 && (
            <FadeUp className="space-y-[0.1875rem] snap-start">
              {renderMedia(caseItem.detailImage4, "Process Detail", "")}
            </FadeUp>
          )}
          {caseItem.detailImage5 && caseItem.id !== 6 && (
            <FadeUp className="space-y-[0.1875rem] snap-start">
              {renderMedia(caseItem.detailImage5, "Detail", "")}
            </FadeUp>
          )}

          {/* Video 1 - Show solution in action (after supporting images, before OUTCOME) */}
          {caseItem.detailVideo1 && (
            <FadeUp className="space-y-[0.1875rem] snap-start">
              {renderMedia(caseItem.detailVideo1, "Video Demo", "", caseItem.detailVideo1Poster)}
            </FadeUp>
          )}

          {/* OUTCOME - Results */}
          {caseItem.outcome && (
            <FadeUp className="space-y-[0.1875rem] snap-start">
              <div className="p-8 space-y-0 backdrop-blur-xl" style={{ background: 'linear-gradient(to bottom, rgba(230, 228, 222, 0.4) 0%, rgba(245, 243, 240, 0.98) 50%, rgba(235, 233, 228, 0.95) 100%)' }}>
                <TextFade direction="up">
                <h2 className="text-[28px] lg:text-[36px] font-neue-semibold uppercase tracking-normal leading-[1.1] text-[#363C53] text-grain mb-[62px]">OUTCOME</h2>
                <p className="text-base lg:text-lg font-neue-book-semi leading-relaxed text-[#979797] text-grain text-justify hyphens-auto" style={{ textAlignLast: 'left' }}>{caseItem.outcome}</p>
                </TextFade>
              </div>
            </FadeUp>
          )}

          {/* Final Outcome Visual - The result */}
          {caseItem.id === 6 && caseItem.detailImageMobile5 && (
            <FadeUp className="space-y-[0.1875rem] snap-start">
              {renderMedia(caseItem.detailImageMobile5, "Final Outcome", "shadow-lg")}
            </FadeUp>
          )}
          {/* VW (id: 3) - IDModelle image comes after OUTCOME */}
          {caseItem.id === 3 && caseItem.detailImage2 && (
            <FadeUp className="space-y-[0.1875rem] snap-start">
              {renderMedia(caseItem.detailImage2, "Final Outcome", "shadow-lg")}
            </FadeUp>
          )}
          {caseItem.id !== 6 && caseItem.id !== 3 && caseItem.detailImage6 && (
            <FadeUp className="space-y-[0.1875rem] snap-start">
              {renderMedia(caseItem.detailImage6, "Final Outcome", "shadow-lg")}
            </FadeUp>
          )}

          {/* Video 2 - Final result demonstration (after OUTCOME) */}
          {caseItem.detailVideo2 && (
            <FadeUp className="space-y-[0.1875rem] snap-start">
              {renderMedia(caseItem.detailVideo2, "Final Video", "", caseItem.detailVideo2Poster)}
            </FadeUp>
          )}

          {/* Additional detail images after outcome (for cases with many images) */}
          {caseItem.detailImage7 && (
            <FadeUp className="space-y-[0.1875rem] snap-start">
              {renderMedia(caseItem.detailImage7, "Detail", "")}
            </FadeUp>
          )}
          {caseItem.detailImage8 && (
            <FadeUp className="space-y-[0.1875rem] snap-start">
              {renderMedia(caseItem.detailImage8, "Detail", "")}
            </FadeUp>
          )}
          {caseItem.detailImage9 && (
            <FadeUp className="space-y-[0.1875rem] snap-start">
              {renderMedia(caseItem.detailImage9, "Detail", "")}
            </FadeUp>
          )}
          {caseItem.detailImage10 && (
            <FadeUp className="space-y-[0.1875rem] snap-start">
              {renderMedia(caseItem.detailImage10, "Detail", "")}
            </FadeUp>
          )}
          {caseItem.detailImage11 && (
            <FadeUp className="space-y-[0.1875rem] snap-start">
              {renderMedia(caseItem.detailImage11, "Detail", "")}
            </FadeUp>
          )}

          {/* LEARNING - Reflection at the end */}
          {caseItem.learning && (
            <FadeUp className="space-y-[0.1875rem] snap-start">
              <div className="p-8 space-y-0 backdrop-blur-xl" style={{ background: 'linear-gradient(to bottom, rgba(230, 228, 222, 0.4) 0%, rgba(245, 243, 240, 0.98) 50%, rgba(235, 233, 228, 0.95) 100%)' }}>
                <TextFade direction="up">
                  <h2 className="text-[28px] lg:text-[36px] font-neue-semibold uppercase tracking-normal leading-[1.1] text-[#363C53] text-grain mb-[62px]">LEARNING</h2>
                  <p className="text-base lg:text-lg font-neue-book-semi leading-relaxed text-[#979797] text-grain italic text-justify hyphens-auto" style={{ textAlignLast: 'left' }}>"{caseItem.learning}"</p>
                </TextFade>
            </div>
            </FadeUp>
          )}

          {/* YEAR, ROLE & TEAM - REORDERED SECTION */}
          <FadeUp className="space-y-[0.1875rem] snap-start">
            <div className="p-8 space-y-0 backdrop-blur-xl" style={{ background: 'linear-gradient(to bottom, rgba(230, 228, 222, 0.4) 0%, rgba(245, 243, 240, 0.98) 50%, rgba(235, 233, 228, 0.95) 100%)' }}>
              <TextFade direction="up">
                {/* 1. The Heading/Team Title - same as desktop: team?.title || 'TEAM' */}
                <div className="mb-8">
                  <h2 className="text-[28px] lg:text-[36px] font-neue-semibold uppercase tracking-normal leading-[1.1] text-[#363C53] text-grain mb-6">
                    {caseItem.team?.title || 'TEAM'}
                  </h2>
                </div>

                {/* 2. YEAR & ROLE (Now underneath the title) */}
                <div className="flex gap-12 mb-8">
                  <div className="flex-1">
                    {caseItem.year && (
                      <div className="mb-8">
                        <h2 className="text-[17px] font-neue-semibold uppercase tracking-normal leading-tight text-[#979797] text-grain mb-2">YEAR</h2>
                        <p className="text-base lg:text-lg font-neue-book-semi leading-relaxed text-[#979797] text-grain">{caseItem.year}</p>
                      </div>
                    )}
                    {/* TEAM in left column under YEAR - same logic as desktop */}
                    {caseItem.team?.collaboration ? (
                      <p className="text-base lg:text-lg font-neue-book-semi leading-relaxed text-[#979797] text-grain">{caseItem.team.collaboration}</p>
                    ) : caseItem.team?.members ? (
                      <div className="space-y-2 text-base lg:text-lg font-neue-book-semi leading-relaxed text-[#979797] text-grain">
                        {caseItem.team.members.map((member, index) => (
                          <p key={index}>{member}</p>
                        ))}
                      </div>
                    ) : (
                      <p className="text-base lg:text-lg font-neue-book-semi leading-relaxed text-[#979797] text-grain">Collaborative Project</p>
                    )}
                  </div>
                  {caseItem.role && (
                    <div className="flex-1">
                      <h2 className="text-[17px] font-neue-semibold uppercase tracking-normal leading-tight text-[#979797] text-grain mb-2">ROLE</h2>
                      <p className="text-base lg:text-lg font-neue-book-semi leading-relaxed text-[#979797] text-grain">{caseItem.role}</p>
                    </div>
                  )}
                </div>
              </TextFade>
            </div>
          </FadeUp>

        </div>
      </main>

      {/* Back to Top Button - Mobile Only */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed right-4 bottom-[126px] z-50 lg:hidden bg-[#DFFF00] border border-black/10 text-[#979797] rounded-full w-10 h-10 flex items-center justify-center font-neue-semibold text-2xl touch-manipulation shadow-lg hover:bg-[#FFB115] transition-colors"
          aria-label="Back to top"
        >
          ↑
        </button>
      )}
    </div>
  );
};

export default MobileCaseView;