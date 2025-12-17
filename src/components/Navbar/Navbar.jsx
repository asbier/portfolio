import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Navbar = ({ activeFilter, setActiveFilter }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const filterOptions = ['all', 'commercial', 'private'];
  const hiddenPages = ['Home', 'Privacy', 'Contact'];
  const marqueeText = "PRODUCT DESIGN & BRANDING ✦ SINCE 2012 ✦ SPECIALISED IN E-COMMERCE & SERVICE DESIGN ✦ GOOD DESIGN PERFORMS ✦ STOP BEING BORING ✦ ";

  return (
    <>
      {isMenuOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/5 backdrop-blur-md" onClick={() => setIsMenuOpen(false)}>
          <div className="bg-white/80 backdrop-blur-2xl p-12 rounded-[2.5rem] w-[85%] max-w-md text-center border border-white/20">
            <div className="flex flex-col space-y-10">
              {hiddenPages.map(page => (
                <a key={page} href={`/${page.toLowerCase()}`} className="text-5xl font-black uppercase text-black/30">{page}</a>
              ))}
            </div>
          </div>
        </div>
      )}

      <header className="fixed left-0 w-full z-50 bg-[#F1F2E5]/90 backdrop-blur-sm bottom-0 lg:top-0 lg:bottom-auto h-[110px] lg:h-[120px] border-t lg:border-t-0 lg:border-b border-black/5">
        <div className="flex flex-col lg:flex-row justify-between items-center px-6 h-full max-w-[1800px] mx-auto overflow-hidden"> 
          <div className="w-full lg:flex-1 lg:max-w-[50%] overflow-hidden whitespace-nowrap h-[40px] flex items-center border-b lg:border-none border-black/5">
            <motion.div 
              animate={{ x: [0, -1000] }} 
              transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
              className="text-[14px] lg:text-[40px] font-black font-neue uppercase text-black/20 flex"
            >
              <span className="pr-10">{marqueeText}</span>
              <span className="pr-10">{marqueeText}</span>
            </motion.div>
          </div>
          <nav className="flex space-x-2 lg:space-x-4 items-center w-full lg:w-auto justify-between lg:justify-end h-[70px]">
            <div className="flex space-x-2 overflow-x-auto no-scrollbar">
              {filterOptions.map((f) => (
                <button key={f} onClick={() => setActiveFilter(f)} className={`text-[10px] lg:text-2xl font-black uppercase px-4 py-2 rounded-full border ${activeFilter === f ? 'bg-[#DFFF00] border-black shadow-[2px_2px_0px_rgba(0,0,0,1)]' : 'bg-transparent border-black/10 text-black/30'}`}>{f}</button>
              ))}
            </div>
            <div className="flex items-center space-x-2">
              <a href="mailto:mail@annemaris.de" className="px-5 py-2 lg:px-8 lg:py-3 text-[10px] lg:text-2xl font-black uppercase rounded-full bg-[#DFFF00] border border-black shadow-[2px_2px_0px_rgba(0,0,0,1)] lg:shadow-none lg:bg-transparent lg:border-black/10 lg:text-black/30">Contact</a>
              <button onClick={() => setIsMenuOpen(true)} className="lg:hidden w-10 h-10 rounded-full bg-black flex items-center justify-center"><div className="w-1.5 h-1.5 bg-white rounded-full"></div></button>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};
export default Navbar;