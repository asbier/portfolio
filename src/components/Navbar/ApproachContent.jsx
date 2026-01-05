import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import PhysicsLetter from './PhysicsLetter';

// Buchstabe-für-Buchstabe Reveal-Effekt - wie beim Lesen
const LetterRevealParagraph = ({ text, scrollProgress, isActive }) => {
  const letters = text.split('');
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    if (!isActive) {
      setVisibleCount(0);
      return;
    }

    const unsubscribe = scrollProgress.on('change', (latest) => {
      // Reveal progress: 0 = start, 1 = all letters visible
      const count = Math.floor(latest * letters.length);
      setVisibleCount(Math.min(count, letters.length));
    });
    
    return () => unsubscribe();
  }, [scrollProgress, letters.length, isActive]);

  // Teile Text in Wörter auf, um korrekten Umbruch zu gewährleisten
  const words = text.split(' ');
  
  return (
    <div 
      className="text-[22px] lg:text-[36px] leading-[1.25] font-neue-book-semi tracking-wide" 
      style={{ 
        wordBreak: 'normal', 
        overflowWrap: 'break-word', 
        hyphens: 'auto',
        textAlign: 'left'
      }}
    >
      {words.map((word, wordIndex) => {
        // Berechne Start-Index dieses Wortes im Gesamttext
        const wordStartIndex = words.slice(0, wordIndex).join(' ').length + (wordIndex > 0 ? 1 : 0);
        
        return (
          <span key={wordIndex} className="inline">
            {word.split('').map((letter, letterIndex) => {
              const letterIndexInText = wordStartIndex + letterIndex;
              const isVisible = letterIndexInText < visibleCount;
              
              return (
                <motion.span
                  key={letterIndex}
                  initial={{ color: 'rgba(151, 151, 151, 0.5)' }}
                  animate={{ 
                    color: isVisible ? '#979797' : 'rgba(151, 151, 151, 0.5)'
                  }}
                  transition={{ duration: 0.15, ease: 'easeOut' }}
                >
                  {letter}
                </motion.span>
              );
            })}
            {wordIndex < words.length - 1 && <span className="mr-1"> </span>}
          </span>
        );
      })}
    </div>
  );
};

const ApproachContent = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const paragraphs = [
    "A market obsessed with rigid categorisation, I build systems that transcend them. I believe that a digital product is a brand's primary utility, and a brand is the product's soul.",
    "I utilise systemic thinking across all mediums—from complex interface logic to expressive editorial frameworks. My goal is to ensure the result is visible, likeable, and memorable.",
    "I choose tools based on the project goal. I am a professional in Figma and Adobe Creative Suite. For this website, I built custom with React, Tailwind CSS, and Cursor. I prefer to code myself because it removes the design hurdles of mainstream builders.",
    "I am learning to build because I want to speak the same language as the engineers I work with. My goal is to collaborate on technical solutions as a Design Engineer, while ensuring that the 'love for design detail' never gets lost."
  ];

  const [showSystem, setShowSystem] = useState(false);
  const [showOpportunity, setShowOpportunity] = useState(false);
  const [currentParagraph, setCurrentParagraph] = useState(0);
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Paragraph-spezifischer Scroll-Progress für jeden Paragraph
  const paragraphRefs = useRef([]);

  useEffect(() => {
    return scrollYProgress.on("change", (latest) => {
      const pCount = paragraphs.length;
      const totalSections = pCount + 1; // +1 für Contact Section
      const newP = Math.floor(latest * totalSections);
      setCurrentParagraph(Math.min(newP, totalSections - 1));
      
      // SYSTEM erscheint zwischen 35% und 90%
      setShowSystem(latest > 0.35 && latest < 0.9);
      
      // OPPORTUNITY erscheint wenn Contact Section sichtbar wird (ab 90%)
      setShowOpportunity(latest > 0.9 || newP >= paragraphs.length);
    });
  }, [scrollYProgress, paragraphs.length]);

  // Erstelle Paragraph-Progress für jeden Paragraph außerhalb der map
  const totalSections = paragraphs.length + 1; // +1 für Contact Section
  const paragraphProgresses = paragraphs.map((_, i) => {
    const paragraphStart = i / totalSections;
    const paragraphEnd = (i + 1) / totalSections;
    return useTransform(
      scrollYProgress,
      [paragraphStart, paragraphEnd],
      [0, 1]
    );
  });

  // Contact Section Progress (letzter "Paragraph")
  const contactProgress = useTransform(
    scrollYProgress,
    [paragraphs.length / totalSections, 1],
    [0, 1]
  );

  return (
    <div className="relative bg-[#F1F2E5]" ref={containerRef} style={{ height: `${paragraphs.length * 100}vh` }}>
      {/* Desktop: Linke Hälfte - Fixierte Physics Letters */}
      <div className="fixed left-0 top-0 w-1/2 h-screen pointer-events-none z-0 overflow-hidden hidden lg:block">
        {showOpportunity ? (
          "OPPORTUNITY".split("").map((c, i) => {
            // Erster Buchstabe (O) fällt zuerst (delay 0), dann die anderen nacheinander
            const delay = i * 0.1;
            return (
              <PhysicsLetter 
                key={`o-${i}`} 
                char={c} 
                defaultX={`${8 + i * 6}%`} 
                defaultY={`${25 + (i % 3) * 8}%`} 
                delay={delay}
                letterId={`opp-${i}`}
                fallIn={true} 
                size="normal" 
                colorIndex={i + 20} 
              />
            );
          })
        ) : !showSystem ? (
          "APPROACH".split("").map((c, i) => (
            <PhysicsLetter 
              key={`a-${i}`} 
              char={c} 
              defaultX={`${10 + i * 8}%`} 
              defaultY={`${20 + (i % 3) * 10}%`} 
              delay={i * 0.1} 
              letterId={`app-${i}`}
              colorIndex={i} 
            />
          ))
        ) : (
          "SYSTEM".split("").map((c, i) => {
            const totalLetters = "SYSTEM".length;
            // Erster Buchstabe (S) fällt zuerst (delay 0), dann die anderen nacheinander
            const delay = i * 0.15;
            return (
              <PhysicsLetter 
                key={`s-${i}`} 
                char={c} 
                defaultX={`${10 + i * 12}%`} 
                defaultY={`${30 + (i % 2) * 5}%`} 
                delay={delay}
                letterId={`sys-${i}`}
                fallIn={true} 
                size="large" 
                colorIndex={i + 10} 
              />
            );
          })
        )}
      </div>

      {/* Mobile: Linke Hälfte - Fixierte Physics Letters (wie Desktop) */}
      <div className="fixed left-0 top-0 w-1/2 h-screen pointer-events-none z-0 overflow-hidden lg:hidden">
        {showOpportunity ? (
          "OPPORTUNITY".split("").map((c, i) => {
            // Erster Buchstabe (O) fällt zuerst (delay 0), dann die anderen nacheinander
            const delay = i * 0.1;
            return (
              <PhysicsLetter 
                key={`o-mobile-${i}`} 
                char={c} 
                defaultX={`${8 + i * 6}%`} 
                defaultY={`${25 + (i % 3) * 8}%`} 
                delay={delay}
                letterId={`opp-mobile-${i}`}
                fallIn={true}
                size="normal"
                colorIndex={i + 20}
                isMobile={true}
              />
            );
          })
        ) : !showSystem ? (
          "APPROACH".split("").map((c, i) => (
            <PhysicsLetter 
              key={`a-mobile-${i}`} 
              char={c} 
              defaultX={`${10 + i * 8}%`} 
              defaultY={`${20 + (i % 3) * 10}%`} 
              delay={i * 0.1} 
              letterId={`app-mobile-${i}`}
              colorIndex={i}
              isMobile={true}
            />
          ))
        ) : (
          "SYSTEM".split("").map((c, i) => {
            // Erster Buchstabe (S) fällt zuerst (delay 0), dann die anderen nacheinander
            const delay = i * 0.15;
            return (
              <PhysicsLetter 
                key={`s-mobile-${i}`} 
                char={c} 
                defaultX={`${10 + i * 12}%`} 
                defaultY={`${30 + (i % 2) * 5}%`} 
                delay={delay}
                letterId={`sys-mobile-${i}`}
                fallIn={true}
                size="large"
                colorIndex={i + 10}
                isMobile={true}
              />
            );
          })
        )}
      </div>

      {/* Rechte Hälfte: Scrollbarer Content */}
      <div className="relative z-10 flex flex-col lg:flex-row">
        {/* Spacer für Desktop und Mobile: linke Hälfte */}
        <div className="w-1/2 h-screen sticky top-0" />
        
        {/* Content-Bereich: rechte Hälfte - Fixed Position für 1-2 sichtbare Paragraphen */}
        <div 
          ref={contentRef}
          className="fixed right-0 top-0 w-full lg:w-1/2 flex px-4 sm:px-6 lg:px-16 z-10 overflow-y-auto"
          style={{ 
            height: '100dvh',
            paddingTop: isMobile ? '120px' : '0px',
            paddingBottom: isMobile ? '20rem' : '0px',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <div className="relative w-full max-w-[600px]">
            {/* Nur der aktuelle Paragraph sichtbar */}
            {paragraphs.map((text, i) => {
              const isActive = i === currentParagraph;
              const isCurrent = i === currentParagraph;

              return (
                <motion.div
                  key={i}
                  ref={(el) => (paragraphRefs.current[i] = el)}
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: isActive ? 1 : 0,
                    y: isActive ? 0 : 20
                  }}
                  transition={{ duration: 0.4 }}
                  className={`absolute left-0 w-full ${isActive ? 'pointer-events-auto' : 'pointer-events-none'}`}
                  style={{
                    top: '50%',
                    transform: 'translateY(-50%)',
                    maxHeight: isMobile ? 'calc(100dvh - 240px)' : 'none' // Verhindert Abschneiden auf Mobile
                  }}
                >
                  <div className={`${isMobile ? 'mb-8' : 'mb-24 lg:mb-40'}`}>
                    <LetterRevealParagraph 
                      text={text} 
                      scrollProgress={paragraphProgresses[i]}
                      isActive={isCurrent}
                    />
                  </div>
                </motion.div>
              );
            })}
            
            {/* Contact Section - erscheint als nächster Paragraph nach "implementation" */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: currentParagraph >= paragraphs.length ? 1 : 0,
                y: currentParagraph >= paragraphs.length ? 0 : 20
              }}
              transition={{ duration: 0.4 }}
              className={`absolute left-0 w-full ${currentParagraph >= paragraphs.length ? 'pointer-events-auto' : 'pointer-events-none'}`}
              style={{
                top: '50%',
                transform: 'translateY(-50%)',
                maxHeight: isMobile ? 'calc(100dvh - 240px)' : 'none'
              }}
            >
              <div className={`${isMobile ? 'mb-8 space-y-6' : 'mb-24 lg:mb-40 space-y-8'}`}>
                <p className="text-[22px] lg:text-[36px] font-neue-book-semi text-[#979797]">
                  Ready to move beyond the box?
                </p>
                <div className="flex gap-6 text-sm font-neue-semibold uppercase text-[#979797]">
                  <a href="mailto:mail@annemaris.de" className="underline underline-offset-4 hover:text-[#979797]/80">
                    Email
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-[#979797]/80">
                    LinkedIn
                  </a>
                  <a href="https://github.com/asbier-lab" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-[#979797]/80">
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApproachContent;
