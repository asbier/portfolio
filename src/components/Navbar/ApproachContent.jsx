import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useSpring, useMotionValue, useTransform } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import PhysicsLetter from './PhysicsLetter';

// Scroll Progress Cursor - kreisförmiger Indikator
const ScrollProgressCursor = ({ progress }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 150, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 150, damping: 20 });
  
  // SVG Kreis-Parameter
  const size = 60;
  const strokeWidth = 2;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  
  // Progress zu strokeDashoffset
  const strokeDashoffset = useTransform(progress, [0, 1], [circumference, 0]);
  
  // Hide cursor when progress reaches 1 (circle is complete)
  const opacity = useTransform(progress, [0, 0.99, 1], [1, 1, 0]);
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="fixed pointer-events-none z-[100] hidden lg:flex items-center justify-center"
      style={{
        left: smoothX,
        top: smoothY,
        translateX: '-50%',
        translateY: '-50%',
        width: size,
        height: size,
        opacity
      }}
    >
      <svg width={size} height={size} className="transform -rotate-90">
        {/* Hintergrund-Kreis */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#D9D9D9"
          strokeWidth={strokeWidth}
          opacity={0.3}
        />
        {/* Progress-Kreis */}
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#979797"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          style={{ strokeDashoffset }}
        />
      </svg>
      {/* Kleiner Punkt in der Mitte */}
      <div 
        className="absolute w-1.5 h-1.5 bg-[#979797] rounded-full"
        style={{ left: size / 2 - 3, top: size / 2 - 3 }}
      />
    </motion.div>
  );
};

const ApproachContent = () => {
  const navigate = useNavigate();
  const lettersContainerRef = useRef(null);
  const [currentParagraph, setCurrentParagraph] = useState(0);
  const [showSystemLetters, setShowSystemLetters] = useState(false);
  const [isSwirling, setIsSwirling] = useState(false);
  const [hasReachedLast, setHasReachedLast] = useState(false);
  
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      const pCount = 9; // Anzahl deiner Paragraphen
      const newP = Math.floor(latest * pCount);
      if (newP >= 3) setShowSystemLetters(true);
      
      // Track ob der letzte Paragraph erreicht wurde
      if (newP >= pCount - 1) {
        setHasReachedLast(true);
      }
      
      if (newP !== currentParagraph) {
        setCurrentParagraph(newP);
        setIsSwirling(true);
        setTimeout(() => setIsSwirling(false), 600);
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress, currentParagraph]);

  // Prevent forward scrolling when at the end
  useEffect(() => {
    const handleWheel = (e) => {
      const progress = scrollYProgress.get();
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      
      // If at the end (progress >= 0.99 or at max scroll) and trying to scroll down, prevent it
      if ((progress >= 0.99 || currentScroll >= maxScroll - 1) && e.deltaY > 0) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    
    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [scrollYProgress]);

  const paragraphs = [
    { id: 0, content: <p>A market obsessed with rigid categorisation, I build systems that transcend them. I believe that a digital product is a brand's primary utility, and a brand is the product's soul. To treat them as separate "boxes" is to miss the connection that makes design effective.</p> },
    { id: 1, content: <p>I utilise systemic thinking across all mediums—from complex interface logic to expressive editorial frameworks. Whether I am architecting a dashboard or defining a brand language, my goal is to ensure the result is visible, likeable, and memorable.</p> },
    { id: 2, content: <p>The world does not need more products or services destined for the bin. I help businesses innovate for the long-term by creating solutions that people need before they even realise they need them.</p> },
    { id: 3, content: <p>I choose tools based on the project goal. I am a professional in Figma and Adobe Creative Suite, including InDesign for print. I enjoy bridging the gap between brand mediums.</p> },
    { id: 4, content: <p>For this website, I built custom with React, Tailwind CSS, Cursor, and Hosting on GitHub. I prefer to code myself because it removes the design hurdles of mainstream builders.</p> },
    { id: 5, content: <p>During the pandemic, I spent 2 years working with CMS solutions for SMEs at We22. I can consult on tools like Squarespace or Webflow. I have an honest view on when they help and when they get in the way of good design.</p> },
    { id: 6, content: <p>Like the Design Lead at Cursor, I believe that in the future, we will all code. I am learning to build because I want to speak the same language as the engineers I work with.</p> },
    { id: 7, content: <p>My goal is to collaborate on technical solutions as a Design Engineer, while ensuring that the "love for design detail" never gets lost in the implementation.</p> },
    { id: 8, content: (
        <div>
          <p className="mb-4">Ready to move beyond the box?</p>
          <p>
            <a href="mailto:mail@annemaris.de" className="underline hover:no-underline">Email Me</a>
            <span className="mx-2">/</span>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">LinkedIn</a>
            <span className="mx-2">/</span>
            <a href="https://github.com/asbier-lab" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">GitHub</a>
          </p>
        </div>
      )
    }
  ];

  return (
    <div className="relative bg-[#F1F2E5]" style={{ height: `${paragraphs.length * 100}vh` }}>
      {/* Desktop: Letters in linker Hälfte */}
      <div ref={lettersContainerRef} className="fixed left-0 top-0 w-1/2 h-screen z-0 pointer-events-none hidden lg:block">
        <div className="relative w-full h-full">
          {/* APPROACH */}
          {!showSystemLetters && "APPROACH".split("").map((c, i) => (
            <PhysicsLetter 
              key={`app-${i}`} char={c} 
              defaultX={`${5 + i * 10}%`} defaultY={`${15 + (i % 3) * 10}%`}
              delay={i * 0.1} letterId={`app-${i}`} isSwirling={isSwirling} colorIndex={i}
            />
          ))}

          {/* SYSTEM - Höhere defaultY Werte, damit sie nicht unten rausfallen */}
          {showSystemLetters && "SYSTEM".split("").map((c, i) => (
            <PhysicsLetter 
              key={`sys-${i}`} char={c} 
              defaultX={`${5 + i * 14}%`} defaultY={`${20 + (i % 2) * 8}%`}
              delay={i * 0.12} letterId={`sys-${i}`} isSwirling={isSwirling} fallIn={true}
              colorIndex={i + 8} size="large"
            />
          ))}
        </div>
      </div>

      {/* Mobile: Letters im oberen Teil, langsam pumpend */}
      <div className="fixed left-0 top-0 w-full h-[40vh] z-0 pointer-events-none lg:hidden overflow-hidden">
        <div className="relative w-full h-full">
          {/* APPROACH - Mobile: kleiner, im oberen Bereich */}
          {!showSystemLetters && "APPROACH".split("").map((c, i) => (
            <PhysicsLetter 
              key={`app-mobile-${i}`} char={c} 
              defaultX={`${8 + i * 12}%`} defaultY={`${10 + (i % 3) * 8}%`}
              delay={i * 0.1} letterId={`app-mobile-${i}`} isSwirling={isSwirling} colorIndex={i}
              isMobile={true}
            />
          ))}

          {/* SYSTEM - Mobile: größer, im oberen Bereich */}
          {showSystemLetters && "SYSTEM".split("").map((c, i) => (
            <PhysicsLetter 
              key={`sys-mobile-${i}`} char={c} 
              defaultX={`${8 + i * 15}%`} defaultY={`${12 + (i % 2) * 6}%`}
              delay={i * 0.12} letterId={`sys-mobile-${i}`} isSwirling={isSwirling} fallIn={true}
              colorIndex={i + 8} size="large"
              isMobile={true}
            />
          ))}
        </div>
      </div>

      <div className="fixed right-0 top-0 w-full lg:w-1/2 h-screen flex items-center px-6 lg:px-24 z-10">
        <div className="relative w-full max-w-[500px]">
          {paragraphs.map((p, i) => {
            const isLast = i === paragraphs.length - 1;
            const isFirst = i === 0;
            // Only show the current paragraph - no layering
            // Last paragraph: once reached, it can be shown again when scrolling back to it
            const isVisible = currentParagraph === i;
            
            return (
              <motion.div
                key={p.id}
                initial={{ opacity: isFirst ? 1 : 0 }}
                animate={{ opacity: isVisible ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className={`absolute inset-0 text-[20px] lg:text-[32px] font-neue-book-semi text-[#979797] ${isLast && hasReachedLast && isVisible ? 'pointer-events-auto' : 'pointer-events-none'}`}
              >
                {p.content}
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="fixed left-6 top-[140px] z-50 hidden lg:block">
        <button onClick={() => navigate('/')} className="text-[32px] font-neue-semibold text-black/30 hover:opacity-100 transition-all">
          SEE ALL CASES
        </button>
      </div>

      {/* Scroll Progress Cursor */}
      <ScrollProgressCursor progress={scrollYProgress} />
    </div>
  );
};

export default ApproachContent;