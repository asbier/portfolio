import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isApproachPage = location.pathname === '/approach';
  const hiddenPages = ['Home', 'Privacy', 'Contact'];
  const marqueeText = " ✦ PORTFOLIO OF AM ✦ HOLISTIC DESIGN & BRANDING ✦ SYSTEMIC THINKING ACROSS ALL MEDIUMS ✦ FROM INTERFACE LOGIC TO VISUAL IDENTITY ✦ NO BOXES, JUST SOLUTIONS ✦ STOP BEEING BORING ✦ ";
  
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
            {hiddenPages.map(page => {
              const handleNavigation = (e) => {
                e.stopPropagation();
                setIsMenuOpen(false);
                if (page === 'Home') {
                  navigate('/');
                } else if (page === 'Privacy') {
                  navigate('/privacy');
                } else if (page === 'Contact') {
                  // Contact can be handled via email link or just close menu
                  window.location.href = 'mailto:mail@annemaris.de';
                }
              };
              return (
                <button
                  key={page}
                  onClick={handleNavigation}
                  className="text-5xl font-neue-semibold uppercase text-black/30 touch-manipulation min-h-[44px]"
                >
                  {page}
                </button>
              );
            })}
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setIsMenuOpen(false);
              }} 
              className="w-[1.5rem] h-[1.5rem] rounded-full bg-[#DFFF00] flex items-center justify-center mt-8 touch-manipulation min-h-[44px] min-w-[44px]"
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
              className="text-[20px] lg:text-[40px] font-black font-neue uppercase flex"
            >
              <span className="pr-4 flex">{renderMarqueeText()}</span>
              <span className="pr-4 flex">{renderMarqueeText()}</span>
            </motion.div>
          </div>
          <nav className="flex space-x-2 lg:space-x-4 items-center w-full lg:w-auto justify-end h-[70px]">
            <div className="flex space-x-2 overflow-x-auto no-scrollbar pl-6 lg:pl-0">
              <button 
                onClick={() => isApproachPage ? navigate('/') : navigate('/approach')} 
                className="text-[22px] sm:text-[17px] lg:text-2xl font-semibold uppercase px-5 py-2 sm:px-6 sm:py-2.5 lg:px-8 lg:py-3 rounded-full border font-neue-semibold bg-transparent border-black/10 text-black/30 hover:bg-[#DFFF00] hover:text-[#D9D9D9] hover:border-black/10 transition-colors min-h-[36px] sm:min-h-[40px] flex items-center justify-center"
              >
                {isApproachPage ? 'HOME' : 'APPROACH'}
              </button>
            </div>
            <div className="flex items-center space-x-2 pr-6 lg:pr-0">
              <a href="mailto:mail@annemaris.de" className="px-5 py-2 sm:px-6 sm:py-2.5 lg:px-8 lg:py-3 text-[22px] sm:text-[17px] lg:text-2xl font-semibold uppercase rounded-full bg-[#FFB115] border border-black/10 text-[#D9D9D9] hover:bg-transparent hover:border-[#FFB115] hover:text-[#FFB115] transition-colors font-neue-semibold min-h-[36px] sm:min-h-[40px] flex items-center justify-center">GET IN TOUCH</a>
              <button onClick={() => setIsMenuOpen(true)} className="lg:hidden w-10 h-10 flex items-center justify-center"><div className="w-[1.5rem] h-[1.5rem] bg-[#D9D9D9] rounded-full"></div></button>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};
export default Navbar;