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
  const [navbarHeight, setNavbarHeight] = useState(120); // Default: Desktop Navbar ist 120px laut Navbar.jsx
  const [isDesktop, setIsDesktop] = useState(typeof window !== 'undefined' ? window.innerWidth >= 1024 : false);

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
      // 5 Stufen: 4 Paragraphen + 1 Gig-Wall + 1 Kontakt-Links
      const totalStages = paragraphs.length + 2;
      const idx = Math.floor(latest * totalStages);
      const currentIdx = Math.min(idx, paragraphs.length + 1);
      setCurrentParagraph(currentIdx);
      // SYSTEM erscheint schon beim zweiten Paragraph (I utilise...) - Index 1
      setShowSystem(currentIdx >= 1 && latest < 0.7);
      setShowOpportunity(latest >= 0.7);
    });
  }, [scrollYProgress, paragraphs.length]);

  const paragraphProgresses = paragraphs.map((_, i) => 
    useTransform(scrollYProgress, [i / 5, (i + 1) / 5], [0, 1])
  );

  // Navbar-Höhe: Desktop ist immer 120px laut Navbar.jsx
  useEffect(() => {
    const checkDesktop = () => {
      const desktop = window.innerWidth >= 1024;
      setIsDesktop(desktop);
      setNavbarHeight(desktop ? 120 : 0);
    };
    
    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  return (
    <div className="relative bg-[#F1F2E5]" ref={containerRef} style={{ height: '550vh' }}>
      <div className="fixed grid grid-cols-1 lg:grid-cols-2" style={{
        top: isDesktop ? '120px' : '0',
        left: '0',
        right: '0',
        bottom: isDesktop ? '0' : 'auto',
        height: isDesktop ? 'calc(100vh - 120px)' : '100vh',
        width: '100%',
        overflow: 'hidden',
        zIndex: 0
      }}>
        
        {/* LINKS: AQUARIUM */}
        <div className="aquarium-container relative w-full h-full">
          <div className="absolute inset-0 pointer-events-none">
            {showOpportunity ? (
              "OPPORTUNITY".split("").map((c, i) => {
                // OPPORTUNITY hat 11 Buchstaben - braucht mehr Platz, daher kleinerer Abstand
                const isMobile = window.innerWidth < 1024;
                const startX = isMobile ? 10 : 3; // Desktop: Weniger Startposition für mehr Platz
                const spacing = isMobile ? 8 : 9; // Desktop: Kleinerer Abstand, damit es in Container passt
                const centerY = isMobile ? 50 : 30; // Einheitliche vertikale Position
                return (
                  <PhysicsLetter 
                    key={`opp-${i}`} 
                    letterId={`opp-${i}`} 
                    char={c} 
                    defaultX={`${startX + (i * spacing)}%`} 
                    defaultY={`${centerY}%`} 
                    delay={i * 0.1} 
                  />
                );
              })
            ) : showSystem ? (
              "SYSTEM".split("").map((c, i) => {
                // Einheitliche Einstellungen für alle Wörter
                const isMobile = window.innerWidth < 1024;
                const startX = isMobile ? 10 : 5; // Desktop: Mehr Abstand vom Rand
                const spacing = isMobile ? 8 : 12; // Desktop: Mehr Abstand zwischen Buchstaben
                const centerY = isMobile ? 50 : 30; // Einheitliche vertikale Position
                return (
                  <PhysicsLetter 
                    key={`sys-${i}`} 
                    letterId={`sys-${i}`} 
                    char={c} 
                    defaultX={`${startX + (i * spacing)}%`} 
                    defaultY={`${centerY}%`} 
                    delay={i * 0.1} 
                  />
                );
              })
            ) : (
              "APPROACH".split("").map((c, i) => {
                // Einheitliche Einstellungen für alle Wörter
                const isMobile = window.innerWidth < 1024;
                const startX = isMobile ? 10 : 5; // Desktop: Mehr Abstand vom Rand
                const spacing = isMobile ? 8 : 12; // Desktop: Mehr Abstand zwischen Buchstaben
                const centerY = isMobile ? 50 : 30; // Einheitliche vertikale Position
                return (
                  <PhysicsLetter 
                    key={`app-${i}`} 
                    letterId={`app-${i}`} 
                    char={c} 
                    defaultX={`${startX + (i * spacing)}%`} 
                    defaultY={`${centerY}%`} 
                    delay={i * 0.1} 
                  />
                );
              })
            )}
          </div>
        </div>

        {/* RECHTS: TEXT & LINKS */}
        <div className="relative w-full h-full z-10 overflow-hidden">
          <div className="relative w-full h-full px-8 lg:px-20" style={{
            display: 'flex',
            alignItems: 'center',
            overflow: 'hidden'
          }}>
            <div className="relative w-full max-w-[550px] mx-auto" style={{ height: '100%', overflow: 'hidden' }}>
            {paragraphs.map((text, i) => (
              <motion.div
                key={i}
                className="absolute w-full"
                style={{ top: '50%', transform: 'translateY(-50%)' }}
                animate={{ 
                  opacity: i === currentParagraph ? 1 : 0, 
                  y: i === currentParagraph ? 0 : 40,
                  pointerEvents: i === currentParagraph ? 'auto' : 'none'
                }}
                transition={{ duration: 0.6 }}
              >
                <LetterRevealParagraph text={text} scrollProgress={paragraphProgresses[i]} isActive={i === currentParagraph} />
              </motion.div>
            ))}

            {/* GIG-WALL (Experience) - 5. Stufe */}
            <motion.div
              className="absolute w-full"
              style={{
                top: '0',
                left: '0',
                right: '0',
                bottom: '0',
                height: '100%',
                maxHeight: '100%',
                overflowY: 'auto',
                overflowX: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start'
              }}
              animate={{ 
                opacity: currentParagraph === paragraphs.length ? 1 : 0, 
                pointerEvents: currentParagraph === paragraphs.length ? 'auto' : 'none',
                y: currentParagraph === paragraphs.length ? 0 : 40 
              }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-full">
                <h3 className="text-[10px] lg:text-[12px] mb-8 opacity-40 uppercase tracking-[0.4em] text-[#979797] font-neue-semibold">
                  Selected Gigs / Experience
                </h3>
                {experience.map((gig, idx) => (
                  <SplitFlapRow 
                    key={idx} 
                    label={gig.label} 
                    value={gig.value} 
                    active={currentParagraph === paragraphs.length}
                    delay={idx * 200} // Nacheinander "klackern" - 200ms Delay pro Zeile
                  />
                ))}
              </div>
            </motion.div>

            {/* KONTAKT-LINKS FIX - 6. Stufe */}
            <motion.div
              className="absolute w-full flex flex-col items-start"
              style={{
                top: '50%',
                transform: 'translateY(-50%)'
              }}
              animate={{ 
                opacity: currentParagraph === paragraphs.length + 1 ? 1 : 0, 
                y: currentParagraph === paragraphs.length + 1 ? 0 : 40 
              }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-[22px] lg:text-[38px] font-neue-book-semi text-[#979797] mb-16 leading-[1.1]">
                Ready to move beyond the box?
              </p>
              <div className="flex gap-12 text-[11px] lg:text-[17px] font-neue-semibold uppercase tracking-[0.25em] text-[#979797]">
                <a 
                  href="mailto:amsauerbier@proton.me" 
                  style={{ textDecoration: 'none' }} 
                  className="pb-2 hover:text-[#979797] transition-all duration-300"
                >
                  Email
                </a>
                <a 
                  href="https://www.linkedin.com/in/annemarie-s-394a444b/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'none' }} 
                  className="pb-2 hover:text-[#979797] transition-all duration-300"
                >
                  LinkedIn
                </a>
                <a 
                  href="https://github.com/asbier-lab" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'none' }} 
                  className="pb-2 hover:text-[#979797] transition-all duration-300"
                >
                  GitHub
                </a>
              </div>
            </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApproachContent;
