import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { AnimatePresence, motion, useScroll, useSpring, useTransform } from 'framer-motion';

const ABOUT_LINES = [
  'ANNEMARIE SAUERBIER',
  'SENIOR ART DIRECTOR · BRAND & PRODUCT DESIGN',
];

const IntroAtmosphere = () => (
  <>
    <div
      className="absolute inset-0"
      style={{
        background:
          'radial-gradient(ellipse 80% 60% at 50% 42%, #4A453C 0%, #2E323C 55%, #1F2228 100%)',
      }}
    />
    <div
      className="absolute inset-0 opacity-[0.12] pointer-events-none mix-blend-overlay"
      style={{
        backgroundImage:
          'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")',
      }}
    />
  </>
);

const IntroCopy = ({ inlineLogo, showScrollHint, textClassName }) => {
  const [lineIndex, setLineIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setLineIndex((i) => (i + 1) % ABOUT_LINES.length);
    }, 2800);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <div
        className="absolute inset-x-0 flex flex-col items-center px-6 lg:px-10"
        style={{ top: 'calc(38.2% - 74px)' }}
      >
        {inlineLogo ? (
          <motion.div
            className="relative w-[148px] h-[148px] mb-[10px] shrink-0"
            style={{ perspective: 600 }}
          >
            <motion.img
              src="/am-mark.webp"
              alt=""
              width={148}
              height={148}
              className="w-full h-full object-contain drop-shadow-lg"
              animate={{ rotateY: 360 }}
              transition={{ repeat: Infinity, duration: 10, ease: 'linear' }}
              style={{ backfaceVisibility: 'hidden' }}
            />
          </motion.div>
        ) : (
          <div className="w-[148px] h-[148px] mb-[10px] shrink-0" aria-hidden />
        )}

        <div className="h-[3.2rem] lg:h-[3.6rem] flex items-center justify-center w-full max-w-[22rem] lg:max-w-none">
          <AnimatePresence mode="wait">
            <motion.p
              key={lineIndex}
              initial={{ opacity: 0, y: 14, filter: 'blur(6px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -12, filter: 'blur(4px)' }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className={
                textClassName ||
                'text-center text-[15px] sm:text-[17px] lg:text-[22px] font-neue-semibold uppercase tracking-[0.18em] text-white leading-snug'
              }
            >
              {ABOUT_LINES[lineIndex]}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>

      {showScrollHint && (
        <div className="absolute inset-x-0 bottom-0 p-4 pb-6 z-10 flex flex-col items-center justify-end gap-2">
          <p className="text-[11px] font-neue-book-semi uppercase tracking-[0.22em] text-white/70 leading-none">
            Scroll to see cases
          </p>
          <motion.span
            className="block w-[2px] bg-white origin-top"
            style={{ height: 44 }}
            animate={{ scaleY: [0.45, 1, 0.45], opacity: [0.55, 1, 0.55] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          />
        </div>
      )}
    </>
  );
};

/** Mobile: first snap slide (logo morphs via MorphingBrandMark) */
const AboutIntroSlide = () => (
  <div
    className="flex-shrink-0 w-full min-h-full h-full snap-start relative overflow-hidden lg:hidden"
    aria-label="About Annemarie Sauerbier"
  >
    <IntroAtmosphere />
    <IntroCopy inlineLogo={false} showScrollHint />
  </div>
);

const DESKTOP_INTRO_SEEN_KEY = 'am-desktop-intro-seen';

const hasSeenDesktopIntro = () => {
  try {
    return sessionStorage.getItem(DESKTOP_INTRO_SEEN_KEY) === '1';
  } catch {
    return false;
  }
};

const markDesktopIntroSeen = () => {
  try {
    sessionStorage.setItem(DESKTOP_INTRO_SEEN_KEY, '1');
  } catch {
    /* ignore */
  }
};

/** Desktop splash over home — fades out on scroll; only on a fresh session visit */
const DesktopIntroLayer = ({ onDismissStart, onDismissed }) => {
  const layerRef = useRef(null);
  const [exiting, setExiting] = useState(false);
  const startedRef = useRef(false);
  const finishedRef = useRef(false);

  useEffect(() => {
    const el = layerRef.current;
    if (!el) return undefined;

    const onWheel = (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (e.deltaY > 0 || e.deltaX > 0) {
        setExiting(true);
        if (!startedRef.current) {
          startedRef.current = true;
          markDesktopIntroSeen();
          onDismissStart?.(); // unlock case scroll during fade
        }
      }
    };

    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
  }, [onDismissStart]);

  return (
    <motion.div
      ref={layerRef}
      className={`fixed inset-0 z-[80] overflow-hidden ${exiting ? 'pointer-events-none' : 'pointer-events-auto'}`}
      aria-label="About Annemarie Sauerbier"
      initial={{ opacity: 1 }}
      animate={{ opacity: exiting ? 0 : 1 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      onAnimationComplete={() => {
        if (exiting && !finishedRef.current) {
          finishedRef.current = true;
          onDismissed?.();
        }
      }}
    >
      <div className="absolute inset-0">
        <IntroAtmosphere />
        <IntroCopy inlineLogo showScrollHint={false} />
      </div>
    </motion.div>
  );
};

/** One logo: center on About → corner on cases (scroll-linked) */
const MorphingBrandMark = ({ sliderRef, viewportHeight, showIntro, onHome }) => {
  const { scrollY } = useScroll({ container: sliderRef });
  const slideH = Math.max(
    (viewportHeight || (typeof window !== 'undefined' ? window.innerHeight : 700)) - 110,
    320
  );
  const winW = typeof window !== 'undefined' ? window.innerWidth : 390;
  const cornerTop = 10;

  const progress = useTransform(
    scrollY,
    showIntro ? [0, slideH * 0.92] : [0, 1],
    showIntro ? [0, 1] : [1, 1],
    { clamp: true }
  );

  // Intro: upper golden section (1 − 1/φ ≈ 38.2%); cases: corner
  const introTop = slideH * 0.382 - 74;
  const left = useTransform(progress, [0, 1], [winW / 2 - 74, 12]);
  const top = useTransform(progress, [0, 1], [introTop, cornerTop]);
  const mark = useTransform(progress, [0, 1], [148, 88]);
  const markOffset = useTransform(mark, (m) => -m / 2);
  const ringOpacity = useTransform(progress, [0.35, 0.85], [0, 1]);

  return (
    <motion.button
      type="button"
      onClick={onHome}
      className="lg:hidden fixed z-[60] touch-manipulation"
      style={{
        left,
        top,
        width: 148,
        height: 148,
        perspective: 600,
      }}
      aria-label="Portfolio of AM . Brand & Product Designer — Home"
    >
      <motion.svg
        viewBox="0 0 148 148"
        className="absolute inset-0 w-full h-full pointer-events-none"
        aria-hidden
        style={{ opacity: ringOpacity }}
      >
        <defs>
          <path
            id="am-name-ring-morph"
            d="M 74,24 A 50,50 0 1,1 73.999,24"
            fill="none"
          />
        </defs>
        <text
          fill="#4A4A4A"
          style={{
            fontSize: 20,
            letterSpacing: '0.08em',
            fontFamily: 'NeueMontrealSemiBold, sans-serif',
            textTransform: 'uppercase',
          }}
        >
          <textPath href="#am-name-ring-morph" xlinkHref="#am-name-ring-morph" startOffset="0">
            {`PORTFOLIO OF AM . BRAND & PRODUCT DESIGNER${'\u00A0'.repeat(2)}•${'\u00A0'.repeat(2)}PORTFOLIO OF AM . BRAND & PRODUCT DESIGNER${'\u00A0'.repeat(2)}•${'\u00A0'.repeat(2)}`}
          </textPath>
        </text>
      </motion.svg>
      <motion.span
        className="absolute z-10 block"
        style={{
          left: '50%',
          top: '50%',
          width: mark,
          height: mark,
          marginLeft: markOffset,
          marginTop: markOffset,
          transformStyle: 'preserve-3d',
        }}
        animate={{ rotateY: 360 }}
        transition={{ repeat: Infinity, duration: 8, ease: 'linear' }}
      >
        <img
          src="/am-mark.webp"
          alt=""
          className="h-full w-full object-contain block drop-shadow-sm"
          width={148}
          height={148}
          decoding="async"
          style={{ backfaceVisibility: 'hidden' }}
        />
      </motion.span>
    </motion.button>
  );
};

// Slide Item Component with parallax effect
const SlideItem = ({ 
  caseItem, 
  index, 
  totalSlides, 
  smoothScroll, 
  isMobile, 
  isGradient, 
  handleNavigation,
  handleTagClick,
  activeTagFilter,
}) => {
  // Calculate parallax offset for this slide
  // When scrolling, images should come together to maintain the 3px gap
  const slideProgress = useTransform(
    smoothScroll,
    [index / totalSlides, (index + 1) / totalSlides],
    [0, 1]
  );
  // Kein Parallax-Effekt - Bilder bleiben bei 3px Gap
  const parallaxX = useTransform(slideProgress, [0, 1], [0, isMobile ? 0 : 0]);

  return (
    <motion.div
      onClick={handleNavigation}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "0px" }}
      transition={{ 
        type: "spring", 
        stiffness: 40, 
        damping: 20, 
        delay: index * 0.05 
      }}
      style={{ x: parallaxX }}
      className={`flex-shrink-0 w-full min-h-full h-full snap-start relative group
                 lg:min-h-0 lg:w-[calc((100vw-6px)/3)] ${isMobile ? 'cursor-default' : 'cursor-pointer'}`}
    >
      {/* Projekt-Hintergrund - Bild bleibt statisch, Container bewegt sich */}
      <div
        className="absolute inset-0 w-full h-full overflow-hidden"
        style={caseItem.imageFit === 'contain' ? { background: caseItem.sliderVideoBg || '#FFFFFF' } : undefined}
      >
        {isGradient ? (
          <div 
            className="w-full h-full" 
            style={{ background: caseItem.image }} 
          />
        ) : (
          <>
            {(() => {
              const slideVideo = isMobile
                ? (caseItem.mobileSliderVideo || caseItem.sliderVideo)
                : (caseItem.sliderVideo || caseItem.mobileSliderVideo);
              const poster = caseItem.detailVideo1Poster || caseItem.mobileImage || caseItem.image;
              if (slideVideo) {
                return (
                  <video
                    key={slideVideo}
                    src={slideVideo}
                    poster={poster}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className={`w-full h-full ${caseItem.imageFit === 'contain' ? 'object-contain' : 'object-cover'} transition-all duration-300 group-hover:brightness-75 group-hover:contrast-110 group-hover:saturate-90`}
                    style={caseItem.imagePosition ? { objectPosition: caseItem.imagePosition } : (caseItem.imageFit === 'contain' ? { objectPosition: 'center top' } : undefined)}
                    onError={(e) => {
                      const el = e.currentTarget;
                      el.style.display = 'none';
                      const fallback = el.nextElementSibling;
                      if (fallback) fallback.style.display = 'block';
                    }}
                  />
                );
              }
              return null;
            })()}
            <img 
              src={isMobile && caseItem.mobileImage ? caseItem.mobileImage : caseItem.image} 
              alt={caseItem.title} 
              className={`w-full h-full ${caseItem.imageFit === 'contain' ? 'object-contain' : 'object-cover'} transition-all duration-300 group-hover:brightness-75 group-hover:contrast-110 group-hover:saturate-90`} 
              style={{
                ...(caseItem.imagePosition
                  ? { objectPosition: caseItem.imagePosition }
                  : caseItem.imageFit === 'contain'
                    ? { objectPosition: 'center top' }
                    : {}),
                display: (isMobile ? (caseItem.mobileSliderVideo || caseItem.sliderVideo) : (caseItem.sliderVideo || caseItem.mobileSliderVideo)) ? 'none' : undefined,
              }}
              loading={index === 0 ? "eager" : "lazy"}
              decoding="async"
              fetchPriority={index === 0 ? "high" : "auto"}
            />
            {/* Optional brand wash over the photo */}
            {caseItem.imageOverlay && (
              <div
                className="absolute inset-0 z-[5] pointer-events-none"
                style={{ background: caseItem.imageOverlay }}
              />
            )}
            {/* Gradient overlay for text readability - only on hover (desktop only) */}
            <div 
              className="absolute inset-0 z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden lg:block"
              style={{
                background: 'linear-gradient(to top, rgba(128, 93, 10, 0.6) 0%, rgba(128, 93, 10, 0.3) 30%, transparent 70%)'
              }}
            />
          </>
        )}
      </div>

      {/* Gradient Overlay - Full Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: 'linear-gradient(to top, rgba(128, 93, 10, 0.25) 0%, transparent 100%)'
        }}
      />
      
      {/* Titel-Overlay */}
      <div className={`absolute inset-x-0 bottom-0 p-4 pb-6 sm:p-6 sm:pb-8 lg:p-12 z-50`}>
        {/* Tags — company/brand gets a filled default state; others stay outline */}
        <div className="flex flex-wrap gap-2 sm:gap-2.5 relative z-30">
          {!caseItem.hideTitleTag && (
            <button
              onClick={(e) => handleTagClick(e, caseItem.title)}
              className={`px-3 py-1.5 sm:px-4 sm:py-2 lg:px-4 lg:py-2 rounded-full text-[17px] sm:text-[17px] lg:text-sm font-semibold font-neue-semibold uppercase tracking-[1px] transition-colors relative z-30 min-h-[32px] sm:min-h-[36px] lg:min-h-[40px] flex items-center justify-center ${
                tagTone(caseItem.title, true, activeTagFilter)
              }`}
            >
              {caseItem.title}
            </button>
          )}
          {caseItem.tags && caseItem.tags.map((tag, tagIndex) => {
            const isBrandTag = Boolean(caseItem.hideTitleTag && tagIndex === 0);
            return (
              <button
                key={tagIndex}
                onClick={(e) => handleTagClick(e, tag)}
                className={`px-3 py-1.5 sm:px-4 sm:py-2 lg:px-4 lg:py-2 rounded-full text-[17px] sm:text-[17px] lg:text-sm font-semibold font-neue-semibold uppercase tracking-[1px] transition-colors relative z-30 min-h-[32px] sm:min-h-[36px] lg:min-h-[40px] flex items-center justify-center ${
                  tagTone(tag, isBrandTag, activeTagFilter)
                }`}
              >
                {tag}
              </button>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

const PROMINENT_TAG =
  'bg-[#DFFF00] border border-black/10 text-[#363C53]';
// Mobile: white by default, no hover (touch). Desktop: grey → white on hover only.
const OUTLINE_TAG =
  'bg-transparent border text-white border-white lg:text-[#979797] lg:border-[#979797] lg:hover:text-white lg:hover:border-white lg:group-hover:text-white lg:group-hover:border-white';

const tagTone = (tag, isBrand, activeTagFilter) => {
  const isActive = activeTagFilter?.toLowerCase() === tag?.toLowerCase();
  if (isActive || isBrand) return PROMINENT_TAG;
  return OUTLINE_TAG;
};

const CaseSlider = ({ cases, activeTagFilter, setActiveTagFilter, mode = 'selected' }) => {
  const navigate = useNavigate();
  const isArchive = mode === 'archive';
  const [viewportHeight, setViewportHeight] = useState(
    typeof window !== 'undefined' ? window.innerHeight : 0
  );
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth < 1024 : false
  );
  const [currentSlide, setCurrentSlide] = useState(1);
  const [desktopIntroDone, setDesktopIntroDone] = useState(() => {
    if (typeof window === 'undefined') return true;
    if (window.innerWidth < 1024) return true;
    return hasSeenDesktopIntro();
  });
  const sliderRef = useRef(null);
  const currentSlideRef = useRef(1);
  const autoScrollLockRef = useRef(false);
  const resumeTimerRef = useRef(null);
  const advanceTimerRef = useRef(null);
  const desktopIntroDoneRef = useRef(desktopIntroDone);
  
  // Track scroll progress of the container (vertical on mobile, horizontal on desktop)
  const { scrollXProgress, scrollYProgress } = useScroll({
    container: sliderRef
  });
  const scrollProgress = isMobile ? scrollYProgress : scrollXProgress;

  // Create a "heavy" spring for the scroll value
  // Magnet-Physik: Niedriger stiffness = weicherer Zug, höhere mass = mehr Gewicht
  const smoothScroll = useSpring(scrollProgress, {
    stiffness: 30,   // Niedriger = weicherer, magnetischer Zug
    damping: 25,     // Verhindert zu starkes Wackeln
    mass: 1.8,       // Gibt dem Slider "Gewicht"
    restDelta: 0.001
  });

  // Handle viewport height changes for Chrome on mobile
  useEffect(() => {
    const updateViewportHeight = () => {
      setViewportHeight(window.innerHeight);
    };

    const updateIsMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    // Set initial values
    updateViewportHeight();
    updateIsMobile();

    // Update on resize
    window.addEventListener('resize', () => {
      updateViewportHeight();
      updateIsMobile();
    });
    window.addEventListener('orientationchange', () => {
      updateViewportHeight();
      updateIsMobile();
    });

    // Chrome-specific: handle visual viewport changes
    if (window.visualViewport) {
      window.visualViewport.addEventListener('resize', updateViewportHeight);
    }

    return () => {
      window.removeEventListener('resize', updateViewportHeight);
      window.removeEventListener('orientationchange', updateViewportHeight);
      if (window.visualViewport) {
        window.visualViewport.removeEventListener('resize', updateViewportHeight);
      }
    };
  }, []);

  // Track current slide based on scroll position (mobile: vertical, desktop: horizontal)
  useEffect(() => {
    if (!sliderRef.current) return;

    const updateCurrentSlide = () => {
      if (!sliderRef.current) return;
      const container = sliderRef.current;
      if (isMobile) {
        const scrollTop = container.scrollTop;
        const slideHeight = container.clientHeight;
        const currentIndex = slideHeight > 0 ? Math.round(scrollTop / slideHeight) : 0;
        const next = currentIndex + 1;
        currentSlideRef.current = next;
        setCurrentSlide(next);
      } else {
        const scrollLeft = container.scrollLeft;
        const slideWidth = window.innerWidth;
        const currentIndex = Math.round(scrollLeft / slideWidth);
        const next = currentIndex + 1;
        currentSlideRef.current = next;
        setCurrentSlide(next);
      }
    };

    updateCurrentSlide();
    sliderRef.current.addEventListener('scroll', updateCurrentSlide, { passive: true });

    return () => {
      if (sliderRef.current) {
        sliderRef.current.removeEventListener('scroll', updateCurrentSlide);
      }
    };
  }, [isMobile, cases.length]);
  
  // Filter cases by tag if a tag filter is active
  const filteredCases = activeTagFilter
    ? cases.filter(c => 
        c.tags?.some(tag => tag.toLowerCase() === activeTagFilter.toLowerCase()) ||
        c.title?.toLowerCase() === activeTagFilter.toLowerCase()
      )
    : cases;
  
  const handleTagClick = (e, tag) => {
    e.stopPropagation(); // Prevent navigation when clicking tag
    // Toggle: if same tag clicked, clear filter; otherwise set new filter
    if (activeTagFilter?.toLowerCase() === tag.toLowerCase()) {
      setActiveTagFilter(null);
    } else {
      setActiveTagFilter(tag);
    }
  };

  // Mobile: About is first slide. Desktop: About is a layer above slider/nav.
  const showIntro = isMobile && !activeTagFilter;
  const showEndPanel = !isMobile && !activeTagFilter;
  const introOffset = showIntro ? 1 : 0;
  const totalSlides = filteredCases.length + introOffset + (showEndPanel ? 1 : 0);

  const scrollToSlide = (slideIndex) => {
    const container = sliderRef.current;
    if (!container) return;
    if (isMobile) {
      container.scrollTo({ top: slideIndex * container.clientHeight, behavior: 'smooth' });
    } else {
      container.scrollTo({ left: slideIndex * window.innerWidth, behavior: 'smooth' });
    }
  };

  // Zara-style autoplay — mobile only: advance when idle, loop, pause on touch/scroll
  useEffect(() => {
    if (!isMobile || totalSlides < 2) return undefined;

    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return undefined;

    const IDLE_MS = 4200;
    const RESUME_MS = 2800;
    const container = sliderRef.current;
    if (!container) return undefined;

    const clearTimers = () => {
      if (resumeTimerRef.current) {
        clearTimeout(resumeTimerRef.current);
        resumeTimerRef.current = null;
      }
      if (advanceTimerRef.current) {
        clearTimeout(advanceTimerRef.current);
        advanceTimerRef.current = null;
      }
    };

    const goNext = () => {
      if (document.hidden) return;
      const from = currentSlideRef.current - 1;
      const nextIndex = (from + 1) % totalSlides;
      autoScrollLockRef.current = true;
      container.scrollTo({
        top: nextIndex * container.clientHeight,
        behavior: 'smooth',
      });
      window.setTimeout(() => {
        autoScrollLockRef.current = false;
      }, 900);
      scheduleAdvance();
    };

    const scheduleAdvance = () => {
      if (advanceTimerRef.current) clearTimeout(advanceTimerRef.current);
      advanceTimerRef.current = setTimeout(goNext, IDLE_MS);
    };

    const pauseAndResume = () => {
      if (autoScrollLockRef.current) return;
      clearTimers();
      resumeTimerRef.current = setTimeout(scheduleAdvance, RESUME_MS);
    };

    const onVisibility = () => {
      if (document.hidden) clearTimers();
      else scheduleAdvance();
    };

    scheduleAdvance();
    container.addEventListener('touchstart', pauseAndResume, { passive: true });
    container.addEventListener('scroll', pauseAndResume, { passive: true });
    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      clearTimers();
      container.removeEventListener('touchstart', pauseAndResume);
      container.removeEventListener('scroll', pauseAndResume);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, [isMobile, totalSlides, activeTagFilter, mode]);

  // Never re-show splash when returning to overview in this tab session
  useEffect(() => {
    if (isMobile || activeTagFilter || hasSeenDesktopIntro()) {
      desktopIntroDoneRef.current = true;
      setDesktopIntroDone(true);
    }
  }, [isMobile, activeTagFilter, mode]);

  // After splash: vertical trackpad/wheel drives the same horizontal strip (visual unchanged)
  useEffect(() => {
    if (isMobile) return undefined;

    let snapRestoreTimer = null;

    const onWheel = (e) => {
      if (!desktopIntroDoneRef.current) return; // splash still up

      // Prefer vertical intent; allow native horizontal swipe on trackpads
      const verticalIntent = Math.abs(e.deltaY) >= Math.abs(e.deltaX);
      if (!verticalIntent) return;

      const container = sliderRef.current;
      if (!container) return;

      const maxScroll = container.scrollWidth - container.clientWidth;
      if (maxScroll <= 1) return;

      const next = Math.min(maxScroll, Math.max(0, container.scrollLeft + e.deltaY));
      if (next === container.scrollLeft) return;

      e.preventDefault();

      // Snap fights tiny scrollLeft steps — disable briefly while wheeling
      container.style.scrollSnapType = 'none';
      container.scrollLeft = next;
      if (snapRestoreTimer) clearTimeout(snapRestoreTimer);
      snapRestoreTimer = setTimeout(() => {
        container.style.scrollSnapType = '';
      }, 120);
    };

    // Capture on window so wheel works over navbar + cases (slider is z-40 under nav)
    window.addEventListener('wheel', onWheel, { passive: false, capture: true });
    return () => {
      window.removeEventListener('wheel', onWheel, { capture: true });
      if (snapRestoreTimer) clearTimeout(snapRestoreTimer);
    };
  }, [isMobile, filteredCases.length, desktopIntroDone]);

  return (
    <>
      {!isMobile && !activeTagFilter && !desktopIntroDone && (
        <DesktopIntroLayer
          onDismissStart={() => {
            desktopIntroDoneRef.current = true;
          }}
          onDismissed={() => {
            desktopIntroDoneRef.current = true;
            setDesktopIntroDone(true);
          }}
        />
      )}

      {isMobile && (
        <MorphingBrandMark
          sliderRef={sliderRef}
          viewportHeight={viewportHeight}
          showIntro={showIntro}
          onHome={() => {
            if (sliderRef.current) {
              sliderRef.current.scrollTo({ top: 0, behavior: 'smooth' });
            }
            navigate('/');
          }}
        />
      )}

      <div 
        ref={sliderRef} 
        className="fixed left-0 w-full scrollbar-hide 
                  overflow-y-auto overflow-x-hidden snap-y snap-mandatory
                  lg:overflow-x-auto lg:overflow-y-hidden lg:snap-x lg:snap-mandatory
                  top-0 bottom-[110px]
                  h-[calc(100vh-110px)]
                  lg:top-[120px] lg:bottom-auto lg:h-[calc(100vh-120px)]
                  z-40"
        style={{
          // Fix for Chrome on iPhone - use dynamic viewport height
          height: viewportHeight > 0 ? `${viewportHeight - 110}px` : 'calc(100vh - 110px)',
          minHeight: viewportHeight > 0 ? `${viewportHeight - 110}px` : 'calc(100vh - 110px)',
          maxHeight: viewportHeight > 0 ? `${viewportHeight - 110}px` : 'calc(100vh - 110px)',
          padding: 0,
          WebkitOverflowScrolling: 'touch',
        }}
      >
        {/* Mobile: vertical stack (scroll top-to-bottom). Desktop: horizontal row with 3px gap */}
        <div className="flex flex-col h-full gap-0 lg:flex-row lg:gap-[3px] lg:justify-start">
          {showIntro && <AboutIntroSlide />}

          {filteredCases.map((caseItem, index) => {
            // Prüfen, ob es ein Verlauf ist
            const isGradient = caseItem.image?.startsWith('linear-gradient');

            const handleNavigation = () => {
              navigate(`/case/${caseItem.slug}`);
            };

            return (
              <SlideItem
                key={caseItem.id}
                caseItem={caseItem}
                index={index + introOffset}
                totalSlides={totalSlides}
                smoothScroll={smoothScroll}
                isMobile={isMobile}
                isGradient={isGradient}
                handleNavigation={handleNavigation}
                handleTagClick={handleTagClick}
                activeTagFilter={activeTagFilter}
              />
            );
          })}

          {showEndPanel && (
            <motion.div
              onClick={() => navigate(isArchive ? '/' : '/history')}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '0px' }}
              transition={{ type: 'spring', stiffness: 40, damping: 20 }}
              className="flex-shrink-0 w-full min-h-full h-full snap-start relative group cursor-pointer
                         lg:min-h-0 lg:w-[calc((100vw-6px)/3)] bg-[#F0F5F5]"
              role="link"
              aria-label={isArchive ? 'Back to selected work' : 'Open archive'}
            >
              <div className="absolute inset-0 flex flex-col justify-end p-4 pb-6 sm:p-6 sm:pb-8 lg:p-12">
                <p className="text-[11px] lg:text-sm font-neue-semibold uppercase tracking-[0.2em] text-[#979797] mb-4">
                  {isArchive ? 'Selected work' : 'Earlier work'}
                </p>
                <p className="text-[28px] sm:text-[36px] lg:text-[42px] font-neue-semibold uppercase leading-[1.05] text-[#363C53] border-b border-[#363C53]/40 pb-1 w-fit group-hover:border-[#363C53] transition-colors">
                  {isArchive ? '← Selected' : 'Archive →'}
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Zara-style: vertical label above dots, right edge, vertically centered */}
      {isMobile && totalSlides > 1 && (() => {
        const onIntro = showIntro && currentSlide === 1;
        const isEndPanel = showEndPanel && currentSlide === totalSlides;
        const caseIndex = currentSlide - 1 - introOffset;
        const currentCase = !onIntro && !isEndPanel ? filteredCases[caseIndex] : null;
        const label = onIntro
          ? 'PORTFOLIO OF AM'
          : isEndPanel
            ? (isArchive ? 'SELECTED WORK' : 'ARCHIVE')
            : (currentCase?.caseStudyLabel || `${currentCase?.title || ''} CASE STUDY`);
        // Intro is dark; case heroes vary — keep white chrome for consistency
        const chrome = 'text-white';

        return (
          <div className="fixed right-4 bottom-[190px] z-[60] flex flex-col items-center gap-3 pointer-events-auto lg:hidden">
            <p
              className={`font-neue-book-semi text-[11px] uppercase tracking-[0.22em] whitespace-nowrap ${chrome}`}
              style={{
                writingMode: 'vertical-rl',
                transform: 'rotate(180deg)',
              }}
            >
              {label}
            </p>
            <nav aria-label="Case slides" className="flex flex-col items-center gap-[3px]">
              {Array.from({ length: totalSlides }, (_, i) => {
                const active = currentSlide === i + 1;
                return (
                  <button
                    key={i}
                    type="button"
                    aria-label={`Go to slide ${i + 1}`}
                    aria-current={active ? 'true' : undefined}
                    onClick={() => scrollToSlide(i)}
                    className="flex items-center justify-center w-3.5 h-3.5"
                  >
                    <span
                      className={`block rounded-full transition-all duration-200 ${
                        active ? 'w-[5px] h-[5px] bg-white' : 'w-[3px] h-[3px] bg-white/40'
                      }`}
                    />
                  </button>
                );
              })}
            </nav>
          </div>
        );
      })()}
    </>
  );
};

export default CaseSlider;
