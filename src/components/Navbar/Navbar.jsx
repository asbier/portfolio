import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isApproachModalOpen, setIsApproachModalOpen] = useState(false);
  const hiddenPages = ['Home', 'Privacy', 'Contact'];
  const marqueeText = " ✦ HOLISTIC DESIGN & BRANDING ✦ SYSTEMIC THINKING ACROSS ALL MEDIUMS ✦ FROM INTERFACE LOGIC TO VISUAL IDENTITY ✦ NO BOXES, JUST SOLUTIONS ✦ STOP BEEING BORING ✦ ";
  
  // Split text into sentences and render with alternating colors
  const renderMarqueeText = () => {
    const sentences = marqueeText.split(' ✦ ').filter(s => s.trim());
    return sentences.map((sentence, index) => {
      const isEven = index % 2 === 1; // Every 2nd sentence (index 1, 3, 5...)
      const color = isEven ? 'text-[#979797]' : 'text-black/20';
      return (
        <React.Fragment key={index}>
          <span className={color}>{sentence}</span>
          {index < sentences.length - 1 && <span className="text-black/20"> ✦ </span>}
        </React.Fragment>
      );
    });
  };

  return (
    <>
      {isMenuOpen && (
        <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center backdrop-blur-md bg-[#F1F2E5]/60" onClick={() => setIsMenuOpen(false)}>
          <div className="flex flex-col items-center space-y-10">
            {hiddenPages.map(page => (
              <a key={page} href={`/${page.toLowerCase()}`} className="text-5xl font-black uppercase text-black/30" onClick={(e) => e.stopPropagation()}>{page}</a>
            ))}
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setIsMenuOpen(false);
              }} 
              className="w-[1.5rem] h-[1.5rem] rounded-full bg-[#DFFF00] flex items-center justify-center mt-8"
            >
            </button>
          </div>
        </div>
      )}

      {isApproachModalOpen && (
        <div 
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center backdrop-blur-md bg-[#F1F2E5]/60 p-4 overflow-y-auto" 
          onClick={() => setIsApproachModalOpen(false)}
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          <div 
            className="w-full max-w-2xl my-auto bg-[#E2DED3]/60 backdrop-blur-sm p-6 sm:p-8 lg:p-12 border border-black/10 rounded-sm max-h-[90vh] overflow-y-auto" 
            onClick={(e) => e.stopPropagation()}
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            <div className="flex justify-between items-start mb-4 sm:mb-6 gap-4">
              <h2 className="text-xl sm:text-2xl lg:text-4xl font-neue-semibold uppercase text-black flex-1">APPROACH</h2>
              <button 
                onClick={() => setIsApproachModalOpen(false)}
                className="w-8 h-8 sm:w-6 sm:h-6 rounded-full bg-[#DFFF00] flex items-center justify-center flex-shrink-0 min-h-[44px] min-w-[44px] sm:min-h-0 sm:min-w-0 touch-manipulation"
                aria-label="Close approach modal"
              >
              </button>
            </div>
            <div className="space-y-4 sm:space-y-6 text-sm sm:text-base lg:text-lg font-neue-book-semi leading-relaxed text-black">
              <p className="text-lg sm:text-xl lg:text-2xl font-neue-semibold">
                In a market obsessed with rigid categorisation, I build systems that transcend them.
              </p>
              
              <p>
                I believe that a digital product is a brand's primary utility, and a brand is the product's soul. To treat them as separate "boxes" is to miss the connection that makes design effective. My work occupies the space where Product Design and Visual Identity intersect.
              </p>

              <div>
                <h3 className="font-neue-semibold uppercase mb-2 sm:mb-3 text-base sm:text-lg">What I bring to the table</h3>
                <p>
                  I utilise systemic thinking across all mediums—from complex interface logic to expressive editorial frameworks. Whether I am architecting a dashboard or defining a brand language, my goal is to ensure the result is visible, likeable, and memorable.
                </p>
              </div>

              <div>
                <h3 className="font-neue-semibold uppercase mb-2 sm:mb-3 text-base sm:text-lg">Strategic Innovation</h3>
                <p>
                  The world does not need more products or services destined for the bin. I help businesses innovate for the long-term by creating solutions that people need before they even realise they need them. My approach moves beyond aesthetic fixes; I translate complex services into intuitive value through the lens of human behaviour and systemic design. Inspired by the intersection of nature, technology, and logic, I aim to build meaningful systems that are as usable as they are enduring. We aren't just making things—we are designing for the world we inhabit.
                </p>
              </div>

              <div className="pt-4 border-t border-black/10">
                <h3 className="font-neue-semibold uppercase mb-2 sm:mb-3 text-base sm:text-lg">Contact</h3>
                <p className="mb-2 break-words">
                  Ready to move beyond the box? <a href="mailto:mail@annemaris.de" className="underline hover:no-underline break-all">Email Me</a> / <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">LinkedIn</a> / <a href="https://github.com/asbier-lab" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">GitHub</a>
                </p>
                <p className="text-xs sm:text-sm text-black/60">
                  Available for strategic partnerships and select commissions.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <header className="fixed left-0 w-full z-50 bg-[#F1F2E5]/90 backdrop-blur-sm bottom-0 lg:top-0 lg:bottom-auto h-[110px] lg:h-[120px] border-t lg:border-t-0 lg:border-b border-black/5">
        <div className="flex flex-col lg:flex-row lg:justify-start items-center px-0 lg:px-6 h-full max-w-[1800px] mx-auto overflow-hidden lg:gap-[2.5rem]">
          <div className="w-full lg:flex-1 overflow-hidden whitespace-nowrap h-[40px] flex items-center border-b lg:border-none border-black/5 px-6 lg:px-0">
            <motion.div 
              animate={{ x: [0, -1000] }} 
              transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
              className="text-[14px] lg:text-[40px] font-black font-neue uppercase flex"
            >
              <span className="pr-4 flex">{renderMarqueeText()}</span>
              <span className="pr-4 flex">{renderMarqueeText()}</span>
            </motion.div>
          </div>
          <nav className="flex space-x-2 lg:space-x-4 items-center w-full lg:w-auto justify-end h-[70px]">
            <div className="flex space-x-2 overflow-x-auto no-scrollbar pl-6 lg:pl-0">
              <button 
                onClick={() => setIsApproachModalOpen(true)} 
                className="text-xs sm:text-sm lg:text-2xl font-semibold uppercase px-4 py-2 sm:px-5 sm:py-2.5 lg:px-4 lg:py-2 rounded-full border font-neue-semibold bg-transparent border-black/10 text-black/30 hover:bg-[#DFFF00] hover:text-[#D9D9D9] hover:border-black/10 transition-colors min-h-[36px] sm:min-h-[40px] flex items-center justify-center"
              >
                APPROACH
              </button>
            </div>
            <div className="flex items-center space-x-2 pr-6 lg:pr-0">
              <a href="mailto:mail@annemaris.de" className="px-5 py-2 sm:px-6 sm:py-2.5 lg:px-8 lg:py-3 text-xs sm:text-sm lg:text-2xl font-semibold uppercase rounded-full bg-[#FFB115] border border-black/10 text-[#D9D9D9] hover:bg-transparent hover:border-[#FFB115] hover:text-[#FFB115] transition-colors font-neue-semibold min-h-[36px] sm:min-h-[40px] flex items-center justify-center">Contact</a>
              <button onClick={() => setIsMenuOpen(true)} className="lg:hidden w-10 h-10 flex items-center justify-center"><div className="w-[1.5rem] h-[1.5rem] bg-[#D9D9D9] rounded-full"></div></button>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};
export default Navbar;