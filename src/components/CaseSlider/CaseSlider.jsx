import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const CaseSlider = ({ cases, activeTagFilter, setActiveTagFilter }) => {
  const navigate = useNavigate();
  const [viewportHeight, setViewportHeight] = useState(
    typeof window !== 'undefined' ? window.innerHeight : 0
  );

  // Handle viewport height changes for Chrome on mobile
  useEffect(() => {
    const updateViewportHeight = () => {
      setViewportHeight(window.innerHeight);
    };

    // Set initial height
    updateViewportHeight();

    // Update on resize
    window.addEventListener('resize', updateViewportHeight);
    window.addEventListener('orientationchange', updateViewportHeight);

    // Chrome-specific: handle visual viewport changes
    if (window.visualViewport) {
      window.visualViewport.addEventListener('resize', updateViewportHeight);
    }

    return () => {
      window.removeEventListener('resize', updateViewportHeight);
      window.removeEventListener('orientationchange', updateViewportHeight);
      if (window.visualViewport) {
        window.visualViewport.removeEventListener('resize', updateViewportHeight);
      }
    };
  }, []);
  
  // Filter cases by tag if a tag filter is active
  const filteredCases = activeTagFilter
    ? cases.filter(c => 
        c.tags?.some(tag => tag.toLowerCase() === activeTagFilter.toLowerCase()) ||
        c.title?.toLowerCase() === activeTagFilter.toLowerCase()
      )
    : cases;
  
  const handleTagClick = (e, tag) => {
    e.stopPropagation(); // Prevent navigation when clicking tag
    // Toggle: if same tag clicked, clear filter; otherwise set new filter
    if (activeTagFilter?.toLowerCase() === tag.toLowerCase()) {
      setActiveTagFilter(null);
    } else {
      setActiveTagFilter(tag);
    }
  };

  return (
   <div 
      className="fixed left-0 w-full overflow-x-auto scrollbar-hide snap-x snap-mandatory 
                top-0 bottom-[110px]
               h-[calc(100vh-110px)]
                lg:top-[120px] lg:bottom-auto lg:h-[calc(100vh-120px)]
                z-40"
      style={{
        // Fix for Chrome on iPhone - use dynamic viewport height
        height: viewportHeight > 0 ? `${viewportHeight - 110}px` : 'calc(100vh - 110px)',
        minHeight: viewportHeight > 0 ? `${viewportHeight - 110}px` : 'calc(100vh - 110px)',
        maxHeight: viewportHeight > 0 ? `${viewportHeight - 110}px` : 'calc(100vh - 110px)',
        // Ensure it respects safe areas on mobile
        paddingBottom: 'env(safe-area-inset-bottom)',
        // Force hardware acceleration
        transform: 'translateZ(0)',
        WebkitTransform: 'translateZ(0)',
      }}
    >
      
      <div className="flex h-full w-max">
        {filteredCases.map((caseItem, index) => {
          // Prüfen, ob es ein Verlauf ist
          const isGradient = caseItem.image?.startsWith('linear-gradient');
          const isComingSoon = caseItem.isPrivate && caseItem.id === 1; // First dashboard project

          return (
            <div
              key={caseItem.id}
              onClick={() => !isComingSoon && navigate(`/case/${caseItem.id}`)}
              className={`flex-shrink-0 w-screen h-full snap-center relative group
                         lg:w-[33.33vw] lg:border-r lg:border-black/5 ${isComingSoon ? 'cursor-default' : 'cursor-pointer'}`}
            >
              {/* Projekt-Hintergrund Logik */}
              <div className="absolute inset-0 w-full h-full overflow-hidden">
                {isGradient ? (
                  <div 
                    className="w-full h-full" 
                    style={{ background: caseItem.image }} 
                  />
                ) : (
                  <img 
                    src={caseItem.image} 
                    alt={caseItem.title} 
                    className="w-full h-full object-cover" 
                    loading={index === 0 ? "eager" : "lazy"}
                    decoding="async"
                    fetchPriority={index === 0 ? "high" : "auto"}
                  />
                )}
              </div>

              {/* Gradient Overlay - Full Image */}
              <div 
                className="absolute inset-0 z-0"
                style={{
                  background: 'linear-gradient(to top, rgba(128, 93, 10, 0.25) 0%, transparent 100%)'
                }}
              />
              
              {/* Coming Soon Overlay */}
              {isComingSoon && (
                <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
                  <div className="text-center px-6">
                    <div className="inline-block px-6 py-3 rounded-full bg-[#DFFF00] border border-black/10 mb-4">
                      <span className="text-sm sm:text-base lg:text-lg font-semibold font-neue-semibold uppercase text-[#D9D9D9]">
                        COMING SOON
                      </span>
                    </div>
                    <p className="text-white/80 text-xs sm:text-sm font-neue-book-semi">
                      Scroll to view other projects
                    </p>
                  </div>
                </div>
              )}
              
              {/* Titel-Overlay */}
              <div className="absolute inset-x-0 bottom-0 p-4 pb-6 sm:p-6 sm:pb-8 lg:p-12 z-20">
                {/* Tags - Title als erster Tag, dann die anderen Tags */}
                <div className="flex flex-wrap gap-2 sm:gap-2.5 relative z-30">
                  {/* Title als Tag - clickable */}
                  <button
                    onClick={(e) => handleTagClick(e, caseItem.title)}
                    className={`px-3 py-1.5 sm:px-4 sm:py-2 lg:px-4 lg:py-2 rounded-full text-[21px] sm:text-[17px] lg:text-sm font-semibold font-neue-semibold uppercase transition-colors relative z-30 min-h-[32px] sm:min-h-[36px] lg:min-h-[40px] flex items-center justify-center ${
                      activeTagFilter?.toLowerCase() === caseItem.title?.toLowerCase()
                        ? 'bg-[#DFFF00] border border-black/10 text-[#D9D9D9]'
                        : 'text-[#979797] bg-transparent border border-[#979797] hover:text-white hover:border-white'
                    }`}
                  >
                    {caseItem.title}
                  </button>
                  {/* Weitere Tags - clickable */}
                  {caseItem.tags && caseItem.tags.map((tag, index) => (
                    <button
                      key={index}
                      onClick={(e) => handleTagClick(e, tag)}
                      className={`px-3 py-1.5 sm:px-4 sm:py-2 lg:px-4 lg:py-2 rounded-full text-[21px] sm:text-[17px] lg:text-sm font-semibold font-neue-semibold uppercase transition-colors relative z-30 min-h-[32px] sm:min-h-[36px] lg:min-h-[40px] flex items-center justify-center ${
                        activeTagFilter?.toLowerCase() === tag.toLowerCase()
                          ? 'bg-[#DFFF00] border border-black/10 text-[#D9D9D9]'
                          : 'text-[#979797] bg-transparent border border-[#979797] hover:text-white hover:border-white'
                      }`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CaseSlider;