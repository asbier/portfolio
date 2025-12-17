import React, { useState } from 'react';

const Navbar = ({ activeFilter, setActiveFilter }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Angleichung der Filter-Namen an deine Screenshots
  const filterOptions = ['all', 'commercial', 'private'];
  const hiddenPages = ['Home', 'Privacy', 'Contact'];

  return (
    <>
      {/* --- MOBILE PAPYRUS MODAL --- */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/5 backdrop-blur-md" 
          onClick={() => setIsMenuOpen(false)}
        >
          <div 
            className="bg-white/80 backdrop-blur-2xl p-12 rounded-[2.5rem] w-[85%] max-w-md text-center border border-white/20 shadow-2xl" 
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col space-y-10">
              {hiddenPages.map(page => (
                <a key={page} href={`/${page.toLowerCase()}`} className="text-5xl font-neue uppercase font-black text-black/30 hover:text-black transition-colors">
                  {page}
                </a>
              ))}
            </div>
            {/* Der neongelbe Punkt im Modal wie im Screenshot */}
            <div className="mt-12 flex justify-center">
                <div className="w-4 h-4 bg-[#DFFF00] rounded-full shadow-[0_0_15px_#DFFF00]"></div>
            </div>
          </div>
        </div>
      )}

      {/* --- MAIN NAVBAR --- */}
      <header className="fixed left-0 w-full z-40 bg-background-light border-gray-100 
                        bottom-0 h-[80px] border-t          /* Mobile Layout */
                        lg:top-0 lg:bottom-auto lg:h-[120px] lg:border-t-0 lg:border-b">
        
        <div className="flex justify-between items-center px-6 h-full max-w-[1800px] mx-auto"> 
          
          {/* Titel: Desktop groß & dunkel, Mobile klein & dezent */}
          <h1 className="text-lg lg:text-6xl font-black font-neue uppercase text-title-gray opacity-40 lg:opacity-100 tracking-tighter">
            PRODUCT DESIGN & BRANDING 
          </h1>

          <nav className="flex space-x-3 lg:space-x-6 items-center">
            {/* Dynamische Filter Buttons */}
            {filterOptions.map((f) => (
              <button 
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`text-xs lg:text-2xl font-black uppercase font-neue transition-all pb-1
                  ${activeFilter === f 
                    ? 'lg:bg-portfolio-green lg:px-6 lg:py-2 lg:rounded-full lg:text-black border-b-2 border-black lg:border-b-0' 
                    : 'text-tag-gray lg:border lg:border-tag-gray lg:px-6 lg:py-2 lg:rounded-full hover:text-black'
                  }`}
              >
                {f}
              </button>
            ))}

            {/* Desktop Only: History Button */}
            <a href="/history" className="hidden lg:block px-6 py-2 text-2xl font-black uppercase font-neue rounded-full border border-tag-gray text-tag-gray hover:bg-black hover:text-white transition-all">
              History
            </a>

            {/* Contact CTA: Giftgrün auf Mobile (Screen 08.26.33), Pill auf Desktop */}
            <a href="mailto:mail@annemaris.de" 
               className="px-5 py-2 text-xs lg:text-2xl font-black uppercase font-neue rounded-full 
                          bg-[#DFFF00] text-black border-none
                          lg:bg-transparent lg:border lg:border-tag-gray lg:text-tag-gray lg:hover:bg-portfolio-green">
              Contact
            </a>

            {/* Menü-Punkt (Dot) */}
            <button 
              onClick={() => setIsMenuOpen(true)} 
              className="w-10 h-10 lg:w-14 lg:h-14 rounded-full bg-black flex items-center justify-center hover:scale-110 active:scale-90 transition-transform"
            >
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </button>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;