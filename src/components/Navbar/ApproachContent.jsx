import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import PhysicsLetter from './PhysicsLetter';
import SplitFlapRow from './SplitFlapRow';

const LetterRevealParagraph = ({ text, scrollProgress, isActive }) => {
  const words = text.split(' ');
  const letters = text.split('');
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    if (!isActive) { setVisibleCount(0); return; }
    return scrollProgress.on('change', (latest) => {
      setVisibleCount(Math.floor(latest * letters.length));
    });
  }, [scrollProgress, letters.length, isActive]);

  return (
    <div className="text-[22px] lg:text-[38px] leading-[1.1] font-neue-book-semi tracking-tight text-[#979797]">
      {words.map((word, wIdx) => {
        const wordStart = words.slice(0, wIdx).join(' ').length + (wIdx > 0 ? 1 : 0);
        return (
          <span key={wIdx} className="inline-block mr-[0.3em] mb-1">
            {word.split('').map((l, lIdx) => (
              <motion.span
                key={lIdx}
                animate={{ color: (wordStart + lIdx) < visibleCount ? '#979797' : 'rgba(151, 151, 151, 0.2)' }}
                transition={{ duration: 0.1 }}
              >
                {l}
              </motion.span>
            ))}
          </span>
        );
      })}
    </div>
  );
};

const ApproachContent = () => {
  const containerRef = useRef(null);
  const [currentParagraph, setCurrentParagraph] = useState(0);
  const [showSystem, setShowSystem] = useState(false);
  const [showOpportunity, setShowOpportunity] = useState(false);
  const [isDesktop, setIsDesktop] = useState(typeof window !== 'undefined' ? window.innerWidth >= 1024 : false);

  const DESKTOP_NAV_HEIGHT = 120;
  const MOBILE_NAV_HEIGHT = 110;

  const paragraphs = [
    "A market obsessed with rigid categorisation, I build systems that transcend them. I believe that a digital product is a brand's primary utility, and a brand is the product's soul.",
    "I utilise systemic thinking across all mediums—from complex interface logic to expressive editorial frameworks. My goal is to ensure the result is visible, likeable, and memorable.",
    "I choose tools based on the project goal. I am a professional in Figma and Adobe Creative Suite. For this website, I built custom with React, Tailwind CSS, and Cursor.",
    "I am learning to build because I want to speak the same language as the engineers I work with. My goal is to collaborate on technical solutions as a Design Engineer."
  ];

    const experience = [

    { label: "2026", value: "Looking for opportunities to help your growth" },

    { label: "Data Analytics Program (AfA)", value: "August 2025 to December 2025" },

    { label: "Dayone", value: "UX Designer / Product Designer - Volkswagen GER/INT - HellaGutmann - FamFam App October 2022 to June 2025" },

    { label: "Carhartt WIP", value: "UX / Design Digital Designer September 2021 to June 2022" },

    { label: "Conic Rose", value: "Cover Design" },

    { label: "Jovana Reisinger", value: "Design" },

    { label: "WE 22", value: "Design Lead 2018 to 2020 - Training Designers, Client Consulting, Whitelabel Solutions" },

    { label: "Plastic Media", value: "Bumble" },

    { label: "Plastic Media", value: "Absolut" },

    { label: "UX Programm", value: "Intro to UX Design" },

    { label: "Film Project", value: "Khanom Thailand 2018" },

    { label: "VG+ Collective", value: "Designer" },

    { label: "Edited The Label / About You", value: "Designer → Art Director 2015 to 2018" },

    { label: "Tissue Collective", value: "2017 Event Designer for Harmony Horizon / Baby Father" },

    { label: "Innen", value: "Female Collective - Designer Exhibition & Demonstration" },

    { label: "Comma Style Magazine", value: "Freelance AD for Superreal 2015" },

    { label: "Monopol Medien GmbH", value: "Art Director Deputy 2014 - Biorama - The Gap - Heineken" },

    { label: "Plastic Media", value: "Editorial Design Assistant 2013" },

    { label: "Diplom in Communication Design", value: "Institute of Design Hamburg 2008 to 2012" }

  ];

  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });

  useEffect(() => {
    return scrollYProgress.on("change", (latest) => {
      const totalStages = paragraphs.length + 2;
      const idx = Math.floor(latest * totalStages);
      const currentIdx = Math.min(idx, paragraphs.length + 1);
      setCurrentParagraph(currentIdx);
      setShowSystem(currentIdx >= 1 && latest < 0.7);
      setShowOpportunity(latest >= 0.7);
    });
  }, [scrollYProgress, paragraphs.length]);

  const paragraphProgresses = paragraphs.map((_, i) => 
    useTransform(scrollYProgress, [i / 5, (i + 1) / 5], [0, 1])
  );

  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 1024);
    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  return (
    <div className="relative bg-[#F1F2E5]" ref={containerRef} style={{ height: '600vh' }}>
      <div 
        className="fixed grid grid-cols-1 lg:grid-cols-2 w-full overflow-hidden" 
        style={{
          top: isDesktop ? `${DESKTOP_NAV_HEIGHT}px` : '0',
          bottom: isDesktop ? '0' : `${MOBILE_NAV_HEIGHT}px`,
          height: isDesktop 
            ? `calc(100vh - ${DESKTOP_NAV_HEIGHT}px)` 
            : `calc(100vh - ${MOBILE_NAV_HEIGHT}px)`,
          left: '0',
          zIndex: 0
        }}
      >
        
        {/* LINKS: AQUARIUM */}
        <div className="aquarium-container relative w-full h-full border-r border-black/5">
          <div className="absolute inset-0 pointer-events-none">
            {(showOpportunity ? "OPPORTUNITY" : showSystem ? "SYSTEM" : "APPROACH")
              .split("")
              .map((c, i, arr) => {
                const word = showOpportunity ? "OPPORTUNITY" : showSystem ? "SYSTEM" : "APPROACH";
                const spacing = 80 / arr.length; 
                const startX = 10;
                return (
                  <PhysicsLetter 
                    key={`${word}-${i}`}
                    char={c}
                    defaultX={`${startX + (i * spacing)}%`}
                    defaultY={`${isDesktop ? 15 : 25}%`}
                    delay={i * 0.12} 
                  />
                );
            })}
          </div>
        </div>

        {/* RECHTS: CONTENT AREA */}
        <div className="relative w-full h-full px-8 lg:px-20 flex flex-col justify-center">
          
          {/* Paragraphen */}
          {paragraphs.map((text, i) => (
            <motion.div
              key={i}
              className="absolute w-full max-w-[550px]"
              animate={{ 
                opacity: currentParagraph === i ? 1 : 0,
                y: currentParagraph === i ? 0 : 40,
                pointerEvents: currentParagraph === i ? 'auto' : 'none'
              }}
              transition={{ duration: 0.6 }}
            >
              <LetterRevealParagraph text={text} scrollProgress={paragraphProgresses[i]} isActive={currentParagraph === i} />
            </motion.div>
          ))}

          {/* GIG-WALL (Wieder scrollbar gemacht) */}
          <motion.div
            className="absolute inset-0 flex flex-col justify-start pt-20 px-8 lg:px-20 scrollbar-hide"
            style={{ 
              overflowY: 'auto', 
              WebkitOverflowScrolling: 'touch',
              zIndex: currentParagraph === paragraphs.length ? 50 : -1,
            }}
            animate={{ 
              opacity: currentParagraph === paragraphs.length ? 1 : 0,
              pointerEvents: currentParagraph === paragraphs.length ? 'auto' : 'none',
              y: currentParagraph === paragraphs.length ? 0 : 40 
            }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-[10px] lg:text-[12px] mb-8 opacity-40 uppercase tracking-[0.4em] text-[#979797] font-neue-semibold">
              Selected Gigs / Experience
            </h3>
            <div className="flex flex-col gap-1 pb-40">
              {experience.map((gig, idx) => (
                <SplitFlapRow 
                  key={idx} 
                  label={gig.label} 
                  value={gig.value} 
                  active={currentParagraph === paragraphs.length}
                />
              ))}
            </div>
          </motion.div>

          {/* KONTAKT */}
          <motion.div
            className="absolute w-full flex flex-col items-start"
            style={{ zIndex: currentParagraph === paragraphs.length + 1 ? 50 : -1 }}
            animate={{ 
              opacity: currentParagraph === paragraphs.length + 1 ? 1 : 0,
              pointerEvents: currentParagraph === paragraphs.length + 1 ? 'auto' : 'none',
              y: currentParagraph === paragraphs.length + 1 ? 0 : 40 
            }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[22px] lg:text-[38px] font-neue-book-semi text-[#979797] mb-16">Ready to move beyond the box?</p>
            <div className="flex gap-12 text-[11px] lg:text-[17px] font-neue-semibold uppercase tracking-[0.25em] text-[#979797]">
            <a href="mailto:amsauerbier@proton.me" className="hover:text-black transition-colors">Email</a>
    <a href="https://github.com/asbier" target="_blank" rel="noreferrer" className="hover:text-black transition-colors">GitHub</a>
    <a href="https://linkedin.com/in/DEIN-PROFIL" target="_blank" rel="noreferrer" className="hover:text-black transition-colors">LinkedIn</a>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default ApproachContent;