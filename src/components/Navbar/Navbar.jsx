import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Navbar = ({ activeFilter, setActiveFilter }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const filterOptions = ['all', 'commercial', 'private'];
  const hiddenPages = ['Home', 'Privacy', 'Contact'];
  const marqueeText = " ✦ PRODUCT DESIGN & BRANDING ✦ SINCE 2012 ✦ SPECIALISED IN E-COMMERCE & SERVICE DESIGN ✦ STOP BEING BORING ✦ ";
  
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
          <nav className="flex space-x-2 lg:space-x-4 items-center w-full lg:w-auto justify-between lg:justify-end h-[70px]">
            <div className="flex space-x-2 overflow-x-auto no-scrollbar pl-6 lg:pl-0">
              {filterOptions.map((f) => (
                <button key={f} onClick={() => setActiveFilter(f)} className={`text-[10px] lg:text-2xl font-semibold uppercase px-4 py-2 rounded-full border font-neue-semibold ${activeFilter === f ? 'bg-[#DFFF00] border-black/10 text-[#D9D9D9]' : 'bg-transparent border-black/10 text-black/30'}`}>{f}</button>
              ))}
            </div>
            <div className="flex items-center space-x-2 pr-6 lg:pr-0">
              <a href="mailto:mail@annemaris.de" className="px-5 py-2 lg:px-8 lg:py-3 text-[10px] lg:text-2xl font-semibold uppercase rounded-full bg-[#FFB115] border border-black/10 text-[#D9D9D9] hover:bg-transparent hover:border-[#FFB115] hover:text-[#FFB115] transition-colors font-neue-semibold">Contact</a>
              <button onClick={() => setIsMenuOpen(true)} className="lg:hidden w-10 h-10 flex items-center justify-center"><div className="w-[1.5rem] h-[1.5rem] bg-[#D9D9D9] rounded-full"></div></button>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};
export default Navbar;