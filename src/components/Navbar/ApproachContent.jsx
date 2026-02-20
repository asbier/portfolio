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
    "I utilise systemic thinking across all mediums—from complex interface logic to expressive editorial frameworks. I aim for one coherent direction that fits the challenge and puts the audience at the centre—so the work gets seen, used, and remembered.",
    "I choose tools based on the project goal. I am a professional in Figma and Adobe Creative Suite. For this website, I built custom with React, Tailwind CSS, and Cursor.",
    "I am learning to build because I want to speak the same language as the engineers I work with. My goal is to collaborate on technical solutions as a Design Engineer—giving direction and ideas—with the aim to do good."
  ];

  const experience = [
    { label: "2026", value: "Looking for opportunities to help with your next step" },
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

      {/* Awwwards Honorable Mention Badge */}
      <div
        id="awwwards"
        className="fixed right-0 top-1/2 -translate-y-1/2 z-[999] pointer-events-auto"
      >
        <a href="https://www.awwwards.com/sites/annemariesauerbier-com" target="_blank" rel="noreferrer">
          <svg width="53.08" height="171.358" className="block">
            <path className="js-color-bg" fill="#9BD4D7" d="M0 0h53.08v171.358H0z" />
            <g className="js-color-text" fill="#fff">
              <path d="M20.047 153.665v-1.9h3.888v-4.093h-3.888v-1.9h10.231v1.9h-4.59v4.093h4.59v1.9zM29.898 142.236c-.331.565-.784.997-1.359 1.294s-1.222.446-1.944.446c-.721 0-1.369-.149-1.943-.446a3.316 3.316 0 0 1-1.36-1.294c-.331-.564-.497-1.232-.497-2.002s.166-1.438.497-2.002a3.316 3.316 0 0 1 1.36-1.294c.574-.297 1.223-.445 1.943-.445.723 0 1.369.148 1.944.445a3.307 3.307 0 0 1 1.359 1.294c.331.564.497 1.232.497 2.002s-.166 1.438-.497 2.002m-1.703-3.347c-.435-.33-.967-.496-1.601-.496-.633 0-1.166.166-1.601.496-.433.332-.649.78-.649 1.346 0 .564.217 1.013.649 1.345.435.331.968.497 1.601.497.634 0 1.166-.166 1.601-.497.435-.332.649-.78.649-1.345.001-.566-.214-1.014-.649-1.346M22.911 134.852v-1.813h1.186a3.335 3.335 0 0 1-.951-1.009 2.423 2.423 0 0 1-.352-1.271c0-.682.19-1.229.57-1.645.381-.413.932-.621 1.652-.621h5.262v1.812h-4.721c-.419 0-.727.096-.921.285-.195.19-.292.447-.292.769 0 .302.115.58.35.833.234.254.577.458 1.03.613.454.156.993.234 1.616.234h2.938v1.813h-7.367zM29.898 125.136a3.314 3.314 0 0 1-1.359 1.294c-.575.297-1.222.445-1.944.445-.721 0-1.369-.148-1.943-.445a3.322 3.322 0 0 1-1.36-1.294c-.331-.565-.497-1.232-.497-2.002 0-.771.166-1.438.497-2.003a3.313 3.313 0 0 1 1.36-1.293c.574-.297 1.223-.446 1.943-.446.723 0 1.369.149 1.944.446s1.028.728 1.359 1.293.497 1.232.497 2.003c.001.769-.166 1.436-.497 2.002m-1.703-3.347c-.435-.331-.967-.497-1.601-.497-.633 0-1.166.166-1.601.497-.433.331-.649.778-.649 1.345 0 .564.217 1.013.649 1.344.435.332.968.498 1.601.498.634 0 1.166-.166 1.601-.498.435-.331.649-.779.649-1.344.001-.567-.214-1.014-.649-1.345M22.911 117.75v-1.812h1.199c-.419-.265-.742-.586-.972-.966s-.345-.784-.345-1.213c0-.272.05-.569.146-.892l1.682.336a1.429 1.429 0 0 0-.205.76c0 .576.261 1.048.783 1.418.521.37 1.342.557 2.461.557h2.617v1.812h-7.366zM29.812 111.252c-.391.511-.857.851-1.403 1.016l-.776-1.446c.381-.138.68-.329.893-.577.215-.249.321-.544.321-.885a1.2 1.2 0 0 0-.168-.658c-.112-.175-.294-.263-.548-.263-.225 0-.406.105-.548.313-.142.21-.291.534-.446.973-.019.068-.058.17-.117.307-.224.565-.506 1.004-.848 1.315-.34.313-.779.467-1.314.467-.381 0-.727-.102-1.039-.306a2.185 2.185 0 0 1-.744-.84 2.554 2.554 0 0 1-.279-1.207c0-.497.105-.949.314-1.359.211-.408.506-.725.886-.949l.993 1.082c-.43.292-.644.686-.644 1.184a.84.84 0 0 0 .154.504.471.471 0 0 0 .401.212c.176 0 .338-.103.49-.307.15-.205.334-.604.547-1.199.205-.564.474-1.001.805-1.308.332-.308.756-.46 1.271-.46.721 0 1.299.229 1.732.687s.65 1.057.65 1.797c.001.759-.194 1.396-.583 1.907M35.481 17.006l-4.782 14.969h-3.266l-2.584-9.682-2.584 9.682h-3.268l-4.782-14.969h3.713l2.673 10.276 2.525-10.276h3.445l2.524 10.276 2.674-10.276zM37.978 27.163c1.426 0 2.496 1.068 2.496 2.495 0 1.425-1.07 2.495-2.496 2.495-1.425 0-2.494-1.07-2.494-2.495-.001-1.427 1.069-2.495 2.494-2.495" />
            </g>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default ApproachContent;