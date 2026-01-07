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
  
  const renderMarqueeText = () => {
    const sentences = marqueeText.split(' ✦ ').filter(s => s.trim());
    return sentences.map((sentence, index) => {
      const isEven = index % 2 === 1; 
      const color = isEven ? 'text-[#979797]' : 'text-black/20';
      return (
        <React.Fragment key={index}>
          <span className={color}>{sentence}</span>
          {index < sentences.length - 1 && (
            <motion.span 
              className="text-black/20 inline-flex items-center justify-center align-middle"
              style={{ 
                fontSize: '0.35em', 
                display: 'inline-flex',
                verticalAlign: 'middle',
                lineHeight: '1',
                marginLeft: '1.1em',
                marginRight: '0.9em'
              }}
              animate={{ rotate: 360 }}
              transition={{ 
                repeat: Infinity, 
                duration: 6, 
                ease: "linear" 
              }}
            >
              ✦
            </motion.span>
          )}
        </React.Fragment>
      );
    });
  };

  return (
    <>
      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center backdrop-blur-md bg-[#F1F2E5]/60" onClick={() => setIsMenuOpen(false)}>
          <div className="flex flex-col items-center space-y-10">
            {hiddenPages.map(page => (
              <button
                key={page}
                onClick={(e) => {
                  e.stopPropagation();
                  setIsMenuOpen(false);
                  if (page === 'Home') navigate('/');
                  else if (page === 'Privacy') navigate('/privacy');
                  else if (page === 'Contact') window.location.href = 'mailto:mail@annemaris.de';
                }}
                className="text-5xl font-neue-semibold uppercase text-black/30 touch-manipulation min-h-[44px]"
              >
                {page}
              </button>
            ))}
            <button onClick={(e) => { e.stopPropagation(); setIsMenuOpen(false); }} className="w-[1.5rem] h-[1.5rem] rounded-full bg-[#DFFF00] flex items-center justify-center mt-8 min-h-[44px] min-w-[44px]" />
          </div>
        </div>
      )}

      {/* Main Navbar */}
      <header className="fixed left-0 w-full z-50 bg-[#F1F2E5]/90 backdrop-blur-sm bottom-0 lg:top-0 lg:bottom-auto h-[110px] lg:h-[120px] border-t lg:border-t-0 lg:border-b border-black/5">
      <div className="flex flex-col lg:flex-row items-center h-full max-w-[1800px] mx-auto overflow-hidden px-6 lg:gap-6"> 
          {/* TAPE SECTION */}
          <div className="w-full lg:flex-1 overflow-hidden whitespace-nowrap h-[50px] lg:h-full flex items-center border-b lg:border-none border-black/5">
            <motion.div 
              animate={{ x: [0, -2500] }} 
              transition={{ 
                repeat: Infinity, 
                duration: 60, 
                ease: "linear" 
              }}
              className="text-[40px] lg:text-[110px] font-black font-neue uppercase flex items-center leading-none italic"
            >
              <span className="px-4 flex">{renderMarqueeText()}</span>
              <span className="px-4 flex">{renderMarqueeText()}</span>
            </motion.div>
          </div>

          {/* SPACER FÜR DESKTOP (Erzwingt den Abstand zwischen Tape und Buttons) */}
          <div className="hidden lg:block w-[6px] shrink-0"></div>

          {/* NAV BUTTONS */}
          <nav className="flex items-center w-full lg:w-auto justify-end h-[60px] lg:h-full shrink-0">
            <div className="flex space-x-2 items-center lg:space-x-4">
              <button 
                onClick={() => isApproachPage ? navigate('/') : navigate('/approach')} 
                className="text-[1.2rem] lg:text-[2rem] font-neue-semibold uppercase px-4 lg:px-[1.5rem] py-2 lg:py-[0.5rem] rounded-full border bg-transparent border-black/10 text-black/30 hover:bg-[#DFFF00] hover:text-[#979797] transition-colors leading-none flex items-center justify-center whitespace-nowrap"
              >
                {isApproachPage ? 'HOME' : 'APPROACH'}
              </button>
              
              <a 
                href="mailto:mail@annemaris.de" 
                className="text-[1.2rem] lg:text-[2rem] font-neue-semibold uppercase px-4 lg:px-[1.5rem] py-2 lg:py-[0.5rem] rounded-full bg-[#FFB115] border border-black/10 text-[#D9D9D9] hover:bg-transparent hover:border-[#FFB115] hover:text-[#FFB115] transition-colors leading-none flex items-center justify-center whitespace-nowrap"
              >
                GET IN TOUCH
              </a>
              
              <button onClick={() => setIsMenuOpen(true)} className="lg:hidden flex items-center justify-center ml-2">
                <div className="w-[1.2rem] h-[1.2rem] bg-[#D9D9D9] rounded-full"></div>
              </button>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;