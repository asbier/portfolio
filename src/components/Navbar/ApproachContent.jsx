import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import PhysicsLetter from './PhysicsLetter';
import SplitFlapRow from './SplitFlapRow';

const LetterRevealParagraph = ({ text, scrollProgress, isActive, textColor = '#979797' }) => {
  const words = text.split(' ');
  const letters = text.split('');
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    if (!isActive) { setVisibleCount(0); return; }
    return scrollProgress.on('change', (latest) => {
      setVisibleCount(Math.floor(latest * letters.length));
    });
  }, [scrollProgress, letters.length, isActive]);

  const visibleColor = textColor;
  const hiddenColor = textColor === '#979797' ? 'rgba(151, 151, 151, 0.2)' : `rgba(54, 60, 83, 0.2)`;

  return (
    <div className="text-[22px] lg:text-[38px] leading-[1.1] font-neue-book-semi tracking-[0.02em]" style={{ color: textColor }}>
      {words.map((word, wIdx) => {
        const wordStart = words.slice(0, wIdx).join(' ').length + (wIdx > 0 ? 1 : 0);
        return (
          <span key={wIdx} className="inline-block mr-[0.3em] mb-1">
            {word.split('').map((l, lIdx) => (
              <motion.span
                key={lIdx}
                animate={{ color: (wordStart + lIdx) < visibleCount ? visibleColor : hiddenColor }}
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
    window.addEventListener('resize', checkDesktop);
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  return (
    <div className="relative bg-[#F0F5F5]" ref={containerRef} style={{ height: '600vh' }}>
      <div 
        className="fixed w-full overflow-hidden flex flex-col lg:grid lg:grid-cols-2" 
        style={{
          top: isDesktop ? `${DESKTOP_NAV_HEIGHT}px` : '0',
          bottom: isDesktop ? '0' : `${MOBILE_NAV_HEIGHT}px`,
          height: isDesktop 
            ? `calc(100vh - ${DESKTOP_NAV_HEIGHT}px)` 
            : `calc(100dvh - ${MOBILE_NAV_HEIGHT}px)`,
          left: '0',
          zIndex: 0
        }}
      >
        
        {/* AQUARIUM (Oben auf Mobile / Links auf Desktop) */}
        <div className="relative w-full h-[40dvh] lg:h-full border-b lg:border-b-0 lg:border-r border-black/5 order-2 lg:order-1">
          <div className="absolute inset-0 pointer-events-none">
            {(showOpportunity ? "OPPORTUNITY" : showSystem ? "SYSTEM" : "APPROACH")
              .split("")
              .map((c, i, arr) => {
                const word = showOpportunity ? "OPPORTUNITY" : showSystem ? "SYSTEM" : "APPROACH";
                const spacing = 80 / arr.length; 
                return (
                  <PhysicsLetter 
                    key={`${word}-${i}`}
                    char={c}
                    defaultX={`${10 + (i * spacing)}%`}
                    defaultY={`${isDesktop ? 15 : 10}%`}
                    delay={i * 0.12} 
                    index={i}
                    totalLetters={arr.length}
                  />
                );
              })}
          </div>
        </div>

        {/* CONTENT AREA (Unten auf Mobile / Rechts auf Desktop) */}
        <div className="relative w-full h-[60dvh] lg:h-full px-8 lg:px-20 flex flex-col justify-center order-1 lg:order-2">
          
          {/* Paragraphen */}
          {paragraphs.map((text, i) => (
            <motion.div
              key={i}
              className="absolute w-full pr-12 lg:pr-0"
              style={{ maxWidth: '550px' }}
              animate={{ 
                opacity: currentParagraph === i ? 1 : 0,
                y: currentParagraph === i ? 0 : 40,
                pointerEvents: currentParagraph === i ? 'auto' : 'none'
              }}
              transition={{ duration: 0.6 }}
            >
              <LetterRevealParagraph 
                text={text} 
                scrollProgress={paragraphProgresses[i]} 
                isActive={currentParagraph === i}
                textColor="#363C53"
              />
            </motion.div>
          ))}

          {/* GIG-WALL (Full Width) */}
          <motion.div
            className="absolute inset-0 flex flex-col justify-start pt-10 lg:pt-20 px-8 lg:px-20 scrollbar-hide"
            style={{ 
              overflowY: 'auto', 
              WebkitOverflowScrolling: 'touch',
              zIndex: currentParagraph === paragraphs.length ? 50 : -1,
              backgroundColor: '#F0F5F5' // Deckt das Aquarium oben ab für bessere Lesbarkeit
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
                <SplitFlapRow key={idx} label={gig.label} value={gig.value} active={currentParagraph === paragraphs.length} />
              ))}
            </div>
          </motion.div>

          {/* KONTAKT */}
          <motion.div
            className="absolute w-full flex flex-col items-start pr-8"
            style={{ zIndex: currentParagraph === paragraphs.length + 1 ? 50 : -1 }}
            animate={{ 
              opacity: currentParagraph === paragraphs.length + 1 ? 1 : 0,
              pointerEvents: currentParagraph === paragraphs.length + 1 ? 'auto' : 'none',
              y: currentParagraph === paragraphs.length + 1 ? 0 : 40 
            }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[22px] lg:text-[38px] font-neue-book-semi text-[#979797] mb-12 tracking-wide">Ready to move beyond the box?</p>
            <div className="flex flex-wrap gap-8 text-[11px] lg:text-[17px] font-neue-semibold uppercase tracking-[0.25em] text-[#979797]">
            <a href="mailto:amsauerbier@proton.me" className="hover:text-[#D9D9D9] transition-colors">
  Email
</a>
<a href="https://github.com/asbier-lab" target="_blank" rel="noreferrer" className="hover:text-[#D9D9D9] transition-colors">
  GitHub
</a>
<a href="https://www.linkedin.com/in/annemarie-s-394a444b/" target="_blank" rel="noreferrer" className="hover:text-[#D9D9D9] transition-colors">
  LinkedIn
</a>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Awwwards Nominee Badge */}
      <div
        id="awwwards"
        className="fixed right-0 top-1/2 -translate-y-1/2 z-[999] pointer-events-auto"
      >
        <a href="https://www.awwwards.com/sites/annemariesauerbier-com" target="_blank" rel="noreferrer">
          <svg width="53.08" height="171.358" className="block">
            <path className="js-color-bg" fill="black" d="M0 0h53.08v171.358H0z" />
            <g className="js-color-text" fill="white">
              <path d="M20.048 153.585v-2.002l6.752-3.757h-6.752v-1.9h10.23v2.002l-6.752 3.757h6.752v1.9zM29.899 142.382a3.317 3.317 0 0 1-1.359 1.293c-.575.297-1.223.446-1.944.446-.721 0-1.369-.149-1.944-.446a3.317 3.317 0 0 1-1.359-1.293c-.331-.564-.497-1.232-.497-2.003 0-.769.166-1.437.497-2.002a3.332 3.332 0 0 1 1.359-1.294c.575-.297 1.224-.445 1.944-.445.722 0 1.369.148 1.944.445a3.326 3.326 0 0 1 1.359 1.294c.33.565.496 1.233.496 2.002.001.77-.166 1.438-.496 2.003m-1.703-3.348c-.435-.331-.967-.497-1.601-.497s-1.167.166-1.601.497c-.434.332-.65.78-.65 1.345s.217 1.014.65 1.346c.434.33.967.496 1.601.496s1.166-.166 1.601-.496c.434-.332.649-.78.649-1.346.001-.565-.215-1.013-.649-1.345M22.912 134.996v-1.812h1.185c-.43-.283-.752-.593-.973-.929-.219-.336-.329-.732-.329-1.19 0-.479.127-.902.38-1.272.254-.37.635-.633 1.141-.79-.478-.262-.851-.591-1.118-.985a2.221 2.221 0 0 1-.402-1.265c0-.682.2-1.218.599-1.607.4-.391.957-.585 1.668-.585h5.218v1.812H25.37c-.682 0-1.023.303-1.023.907 0 .467.264.85.789 1.146.527.299 1.286.446 2.28.446h2.865v1.813H25.37c-.682 0-1.023.303-1.023.906 0 .468.275.851.826 1.147.551.298 1.352.446 2.404.446h2.704v1.812h-7.369zM21.626 122.457c-.225.224-.502.336-.833.336s-.608-.112-.833-.336a1.128 1.128 0 0 1-.336-.833c0-.331.111-.609.336-.833.225-.225.502-.336.833-.336s.608.111.833.336c.225.224.337.502.337.833 0 .332-.112.608-.337.833m1.286-1.739h7.366v1.813h-7.366v-1.813zM22.912 118.668v-1.812h1.185a3.348 3.348 0 0 1-.951-1.009 2.434 2.434 0 0 1-.351-1.272c0-.681.19-1.229.57-1.644.38-.414.931-.621 1.651-.621h5.263v1.812h-4.722c-.418 0-.727.096-.92.285-.195.19-.293.447-.293.769 0 .302.116.58.351.833.233.254.577.458 1.03.613.453.156.992.234 1.615.234h2.938v1.812h-7.366zM29.833 109.129a3.33 3.33 0 0 1-1.432 1.169 4.535 4.535 0 0 1-1.805.373 4.537 4.537 0 0 1-1.807-.373c-.579-.248-1.057-.638-1.432-1.169s-.563-1.196-.563-1.995c0-.771.183-1.413.549-1.93a3.28 3.28 0 0 1 1.382-1.141 4.221 4.221 0 0 1 1.709-.364h.746v5.071c.447-.02.838-.183 1.168-.49.332-.307.498-.724.498-1.248 0-.41-.093-.754-.277-1.031-.186-.278-.473-.529-.863-.753l.542-1.462c.69.303 1.224.724 1.592 1.265.371.541.556 1.235.556 2.083 0 .799-.188 1.464-.563 1.995m-4.085-3.574c-.41.088-.746.261-1.009.52-.262.258-.395.61-.395 1.06 0 .428.137.784.409 1.067.272.282.604.458.994.525v-3.172zM29.833 100.878c-.375.531-.852.921-1.432 1.169a4.552 4.552 0 0 1-3.612 0c-.579-.248-1.057-.638-1.432-1.169s-.563-1.196-.563-1.995c0-.77.183-1.412.549-1.93a3.278 3.278 0 0 1 1.382-1.14 4.222 4.222 0 0 1 1.709-.365h.746v5.072a1.794 1.794 0 0 0 1.168-.49c.332-.307.498-.724.498-1.249 0-.41-.093-.753-.277-1.031-.186-.277-.473-.528-.863-.753l.542-1.462c.69.302 1.224.724 1.592 1.265.371.541.556 1.234.556 2.083 0 .799-.188 1.464-.563 1.995m-4.085-3.573c-.41.088-.746.261-1.009.519-.262.258-.395.611-.395 1.06 0 .429.137.784.409 1.067.272.282.604.458.994.526v-3.172zM35.481 16.926l-4.782 14.969h-3.266l-2.584-9.682-2.584 9.682h-3.268l-4.781-14.969h3.713l2.673 10.276 2.524-10.276h3.445l2.524 10.276 2.674-10.276zM37.979 27.083c1.426 0 2.495 1.068 2.495 2.495 0 1.425-1.069 2.495-2.495 2.495-1.425 0-2.495-1.07-2.495-2.495-.001-1.427 1.07-2.495 2.495-2.495" />
            </g>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default ApproachContent;