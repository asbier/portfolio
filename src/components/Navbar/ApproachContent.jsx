import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import PhysicsLetter from './PhysicsLetter';

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

  const paragraphs = [
    "A market obsessed with rigid categorisation, I build systems that transcend them. I believe that a digital product is a brand's primary utility, and a brand is the product's soul.",
    "I utilise systemic thinking across all mediums—from complex interface logic to expressive editorial frameworks. My goal is to ensure the result is visible, likeable, and memorable.",
    "I choose tools based on the project goal. I am a professional in Figma and Adobe Creative Suite. For this website, I built custom with React, Tailwind CSS, and Cursor.",
    "I am learning to build because I want to speak the same language as the engineers I work with. My goal is to collaborate on technical solutions as a Design Engineer."
  ];

  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });

  useEffect(() => {
    return scrollYProgress.on("change", (latest) => {
      const idx = Math.floor(latest * (paragraphs.length + 1));
      setCurrentParagraph(Math.min(idx, paragraphs.length));
      setShowSystem(latest > 0.25 && latest < 0.7);
      setShowOpportunity(latest >= 0.7);
    });
  }, [scrollYProgress, paragraphs.length]);

  const paragraphProgresses = paragraphs.map((_, i) => 
    useTransform(scrollYProgress, [i / 5, (i + 1) / 5], [0, 1])
  );

  return (
    <div className="relative bg-[#F1F2E5]" ref={containerRef} style={{ height: '550vh' }}>
      <div className="fixed inset-0 grid grid-cols-1 lg:grid-cols-2 overflow-hidden">
        
        {/* LINKS: AQUARIUM */}
        <div className="aquarium-container relative w-full h-full">
          <div className="absolute inset-0 pointer-events-none">
            {showOpportunity ? (
              "OPPORTUNITY".split("").map((c, i) => {
                // Bessere Koordinaten für Lesbarkeit: Buchstaben horizontal angeordnet
                const isMobile = window.innerWidth < 1024;
                const startX = 15; // Startposition
                const spacing = 7; // Abstand zwischen Buchstaben
                const centerY = isMobile ? 40 : 30; // Mobile: mehr Abstand zur Browser-Leiste
                return (
                  <PhysicsLetter 
                    key={`opp-${i}`} 
                    letterId={`opp-${i}`} 
                    char={c} 
                    defaultX={`${startX + (i * spacing)}%`} 
                    defaultY={`${centerY}%`} 
                    delay={i * 0.05} 
                  />
                );
              })
            ) : showSystem ? (
              "SYSTEM".split("").map((c, i) => {
                // Bessere Koordinaten für Lesbarkeit: Buchstaben horizontal angeordnet
                const isMobile = window.innerWidth < 1024;
                const startX = 10;
                const spacing = 10;
                const centerY = isMobile ? 35 : 25; // Mobile: mehr Abstand zur Browser-Leiste
                return (
                  <PhysicsLetter 
                    key={`sys-${i}`} 
                    letterId={`sys-${i}`} 
                    char={c} 
                    defaultX={`${startX + (i * spacing)}%`} 
                    defaultY={`${centerY}%`} 
                    delay={i * 0.08} 
                  />
                );
              })
            ) : (
              "APPROACH".split("").map((c, i) => {
                // Bessere Koordinaten für Lesbarkeit: Buchstaben horizontal angeordnet
                const isMobile = window.innerWidth < 1024;
                const startX = 8;
                const spacing = 8;
                const centerY = isMobile ? 40 : 30; // Mobile: mehr Abstand zur Browser-Leiste
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
        <div className="relative w-full h-screen flex items-center px-8 lg:px-20 z-10">
          <div className="relative w-full max-w-[550px]">
            {paragraphs.map((text, i) => (
              <motion.div
                key={i}
                className="absolute w-full top-1/2 -translate-y-1/2"
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

            {/* KONTAKT-LINKS FIX */}
            <motion.div
              className="absolute w-full top-1/2 -translate-y-1/2 flex flex-col items-start"
              animate={{ opacity: currentParagraph === paragraphs.length ? 1 : 0, y: currentParagraph === paragraphs.length ? 0 : 40 }}
            >
              <p className="text-[22px] lg:text-[38px] font-neue-book-semi text-[#979797] mb-16 leading-[1.1]">
                Ready to move beyond the box?
              </p>
              <div className="flex gap-12 text-[11px] font-neue-semibold uppercase tracking-[0.25em] text-[#979797]">
                {['Email', 'LinkedIn', 'GitHub'].map((label) => (
                  <a 
                    key={label}
                    href="#" 
                    style={{ textDecoration: 'none' }} 
                    className="pb-2 border-b border-[#979797]/40 hover:border-black hover:text-black transition-all duration-300"
                  >
                    {label}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApproachContent;
