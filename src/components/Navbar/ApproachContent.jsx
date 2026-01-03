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
      className="text-[22px] lg:text-[36px] leading-[1.25] font-neue-book-semi tracking-wide lg:tracking-normal" 
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
    "A market obsessed with rigid categorisation, I build systems that transcend them. I believe that a digital product is a brand's primary utility, and a brand is the product's soul. To treat them as separate 'boxes' is to miss the connection that makes design effective.",
    "I utilise systemic thinking across all mediums—from complex interface logic to expressive editorial frameworks. Whether I am architecting a dashboard or defining a brand language, my goal is to ensure the result is visible, likeable, and memorable.",
    "The world does not need more products or services destined for the bin. I help businesses innovate for the long-term by creating solutions that people need before they even realise they need them.",
    "I choose tools based on the project goal. I am a professional in Figma and Adobe Creative Suite, including InDesign for print. I enjoy bridging the gap between brand mediums.",
    "For this website, I built custom with React, Tailwind CSS, Cursor, and Hosting on GitHub. I prefer to code myself because it removes the design hurdles of mainstream builders.",
    "During the pandemic, I spent 2 years working with CMS solutions for SMEs at We22. I can consult on tools like Squarespace or Webflow. I have an honest view on when they help and when they get in the way of good design.",
    "Like the Design Lead at Cursor, I believe that in the future, we will all code. I am learning to build because I want to speak the same language as the engineers I work with.",
    "My goal is to collaborate on technical solutions as a Design Engineer, while ensuring that the 'love for design detail' never gets lost in the implementation."
  ];

  const [showSystem, setShowSystem] = useState(false);
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
      setShowSystem(latest > 0.35);
      
      // Bestimme aktuellen Paragraph basierend auf Scroll-Position
      // Contact Section ist der "nächste" Paragraph nach dem letzten Text-Paragraph
      const pCount = paragraphs.length;
      const totalSections = pCount + 1; // +1 für Contact Section
      const newP = Math.floor(latest * totalSections);
      setCurrentParagraph(Math.min(newP, totalSections - 1));
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
        {!showSystem ? (
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
          "SYSTEM".split("").map((c, i) => (
            <PhysicsLetter 
              key={`s-${i}`} 
              char={c} 
              defaultX={`${10 + i * 12}%`} 
              defaultY={`${30 + (i % 2) * 5}%`} 
              delay={i * 0.1} 
              letterId={`sys-${i}`}
              fallIn={true} 
              size="large" 
              colorIndex={i + 10} 
            />
          ))
        )}
      </div>

      {/* Mobile: Letters im oberen Drittel (10-30%) */}
      <div className="fixed left-0 top-0 w-full h-[50vh] pointer-events-none z-20 overflow-visible lg:hidden">
        {!showSystem ? (
          "APPROACH".split("").map((c, i) => (
            <PhysicsLetter 
              key={`a-mobile-${i}`} 
              char={c} 
              defaultX={`${8 + i * 12}%`} 
              defaultY={`${10 + (i % 3) * 7}%`}  // Oberes Drittel: 10-24%
              delay={i * 0.1} 
              letterId={`app-mobile-${i}`}
              colorIndex={i}
              isMobile={true}
            />
          ))
        ) : (
          "SYSTEM".split("").map((c, i) => (
            <PhysicsLetter 
              key={`s-mobile-${i}`} 
              char={c} 
              defaultX={`${8 + i * 15}%`} 
              defaultY={`${15 + (i % 2) * 8}%`}  // Oberes Drittel: 15-23%
              delay={i * 0.12} 
              letterId={`sys-mobile-${i}`}
              fallIn={true}
              size="large"
              colorIndex={i + 10}
              isMobile={true}
            />
          ))
        )}
      </div>

      {/* Rechte Hälfte: Scrollbarer Content */}
      <div className="relative z-10 flex flex-col lg:flex-row">
        {/* Spacer für Desktop: linke Hälfte */}
        <div className="hidden lg:block lg:w-1/2 h-screen sticky top-0" />
        
        {/* Content-Bereich: rechte Hälfte - Fixed Position für 1-2 sichtbare Paragraphen */}
        <div 
          ref={contentRef}
          className="fixed right-0 top-0 w-full lg:w-1/2 flex px-4 sm:px-6 lg:px-16 z-10 overflow-y-auto"
          style={{ 
            height: '100dvh',
            paddingTop: isMobile ? 'calc(50vh + 80px)' : '120px',
            paddingBottom: isMobile ? '5rem' : '120px',
            alignItems: isMobile ? 'flex-start' : 'center',
            justifyContent: isMobile ? 'flex-start' : 'center'
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
                    top: isActive && isMobile ? '20%' : '0',
                    maxHeight: isMobile ? 'calc(100vh - 50vh - 80px)' : 'none' // Verhindert Abschneiden auf Mobile
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
                top: currentParagraph >= paragraphs.length && isMobile ? '20%' : '0',
                maxHeight: isMobile ? 'calc(100vh - 50vh - 80px)' : 'none'
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
