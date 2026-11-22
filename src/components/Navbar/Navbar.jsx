import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { MARQUEE_ITEMS } from '@/content/marquee';
import { LINKEDIN_PROFILE_URL } from '@/content/links';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isApproachPage = location.pathname === '/approach';
  const isArchivePage = location.pathname === '/history';
  const showHomeCta = isApproachPage || isArchivePage;
  // CaseSlider owns the morphing mobile mark on home / history
  const hideMobileBrandMark =
    location.pathname === '/' || location.pathname === '/history';
  // Archive is desktop-only — mobile shows all projects on Home
  const hiddenPages =
    typeof window !== 'undefined' && window.innerWidth >= 1024
      ? ['Home', 'Archive', 'Privacy', 'Contact']
      : ['Home', 'Privacy', 'Contact'];
  const marqueeText = ` ✦ ${MARQUEE_ITEMS.join(' ✦ ')} ✦ `;
  
  const renderMarqueeText = () => {
    const sentences = marqueeText.split(' ✦ ').filter(s => s.trim());
    return sentences.map((sentence, index) => {
      const color = 'text-[#535762]';
      return (
        <React.Fragment key={index}>
          <span className={color}>{sentence}</span>
          {index < sentences.length - 1 && (
            <motion.span 
              className="text-[#535762] inline-flex items-center justify-center align-middle"
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
      {/* Mobile brand mark — top left (hidden on home; CaseSlider morphs center → corner) */}
      {!hideMobileBrandMark && (
      <button
        type="button"
        onClick={() => navigate('/')}
        className="lg:hidden fixed left-3 z-[60] touch-manipulation"
        style={{
          top: 'max(0.65rem, env(safe-area-inset-top))',
          width: 148,
          height: 148,
          perspective: 600,
        }}
        aria-label="Portfolio of AM . Brand & Product Designer — Home"
      >
        <svg
          viewBox="0 0 148 148"
          className="absolute inset-0 w-full h-full pointer-events-none"
          aria-hidden
        >
          <defs>
            {/* Full closed circle starting at top, clockwise */}
            <path
              id="am-name-ring"
              d="M 74,24 A 50,50 0 1,1 73.999,24"
              fill="none"
            />
          </defs>
          <text
            fill="#4A4A4A"
            style={{
              fontSize: 20,
              letterSpacing: '0.08em',
              fontFamily: 'NeueMontrealSemiBold, sans-serif',
              textTransform: 'uppercase',
            }}
          >
            <textPath href="#am-name-ring" xlinkHref="#am-name-ring" startOffset="0">
              {`PORTFOLIO OF AM . BRAND & PRODUCT DESIGNER${'\u00A0'.repeat(2)}•${'\u00A0'.repeat(2)}PORTFOLIO OF AM . BRAND & PRODUCT DESIGNER${'\u00A0'.repeat(2)}•${'\u00A0'.repeat(2)}`}
            </textPath>
          </text>
        </svg>
        <motion.span
          className="absolute z-10 block"
          style={{
            left: '50%',
            top: '50%',
            width: 88,
            height: 88,
            marginLeft: -44,
            marginTop: -44,
            transformStyle: 'preserve-3d',
          }}
          animate={{ rotateY: 360 }}
          transition={{ repeat: Infinity, duration: 8, ease: 'linear' }}
        >
          <img
            src="/am-mark.webp"
            alt=""
            className="h-full w-full object-contain block drop-shadow-sm"
            width={88}
            height={88}
            decoding="async"
            style={{ backfaceVisibility: 'hidden' }}
          />
        </motion.span>
      </button>
      )}

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center backdrop-blur-md bg-[#F5F5F5]/90" onClick={() => setIsMenuOpen(false)}>
          <div className="flex flex-col items-center space-y-10">
            {hiddenPages.map(page => (
              page === 'Contact' ? (
                <a
                  key={page}
                  href={LINKEDIN_PROFILE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsMenuOpen(false);
                  }}
                  className="text-5xl font-neue-semibold uppercase touch-manipulation min-h-[44px]"
                  style={{ color: '#D0D0D0', filter: 'blur(1.5px)' }}
                >
                  {page}
                </a>
              ) : (
                <button
                  key={page}
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsMenuOpen(false);
                    if (page === 'Home') navigate('/');
                    else if (page === 'Archive') navigate('/history');
                    else if (page === 'Privacy') navigate('/privacy');
                  }}
                  className="text-5xl font-neue-semibold uppercase touch-manipulation min-h-[44px]"
                  style={{ color: '#D0D0D0', filter: 'blur(1.5px)' }}
                >
                  {page}
                </button>
              )
            ))}
            <button onClick={(e) => { e.stopPropagation(); setIsMenuOpen(false); }} className="w-[1.5rem] h-[1.5rem] rounded-full bg-[#DFFF00] flex items-center justify-center mt-8 min-h-[44px] min-w-[44px]" />
          </div>
        </div>
      )}

      {/* Main Navbar */}
      <header className="fixed left-0 w-full z-50 bg-[#F5F5F5]/90 backdrop-blur-sm bottom-0 lg:top-0 lg:bottom-auto h-[110px] lg:h-[120px] border-t lg:border-t-0 lg:border-b border-black/5">
      <div className="relative flex flex-col lg:block h-full w-full overflow-hidden px-0"> 
          {/* TAPE SECTION — full width on desktop, runs behind CTAs */}
          <div className="w-full lg:absolute lg:inset-0 overflow-hidden whitespace-nowrap h-[50px] lg:h-full flex items-center border-b lg:border-none border-black/5 px-4 lg:px-0 pointer-events-none">
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

          {/* NAV BUTTONS */}
          <nav className="relative z-10 flex items-center w-full lg:w-auto lg:absolute lg:right-0 lg:top-0 lg:h-full justify-end h-[60px] shrink-0 px-4 lg:pr-6">
            <div className="flex space-x-2 items-center lg:space-x-4">
              <button 
                onClick={() => showHomeCta ? navigate('/') : navigate('/approach')} 
                className="text-[1.2rem] lg:text-[2.55rem] font-neue-semibold uppercase px-4 lg:px-8 py-2 lg:py-3 rounded-full border bg-[#F5F5F5] border-black/10 text-black/30 hover:bg-[#DFFF00] hover:text-[#979797] transition-colors leading-none flex items-center justify-center whitespace-nowrap"
              >
                {showHomeCta ? 'HOME' : 'APPROACH'}
              </button>
              
              <a 
                href={LINKEDIN_PROFILE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[1.2rem] lg:text-[2.55rem] font-neue-semibold uppercase px-4 lg:px-8 py-2 lg:py-3 rounded-full bg-[#FFB115] border border-black/10 text-[#D9D9D9] hover:bg-[#D9D9D9] hover:border-[#D9D9D9] hover:text-[#FFB115] transition-colors leading-none flex items-center justify-center whitespace-nowrap"
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