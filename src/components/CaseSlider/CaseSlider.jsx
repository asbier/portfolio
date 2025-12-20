import React from 'react';
import { useNavigate } from 'react-router-dom';

const CaseSlider = ({ cases, activeTagFilter, setActiveTagFilter }) => {
  const navigate = useNavigate();
  
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
        // Fix for Chrome on iPhone - use actual viewport height
        minHeight: 'calc(100vh - 110px)',
        maxHeight: 'calc(100vh - 110px)',
        // Ensure it respects safe areas on mobile
        paddingBottom: 'env(safe-area-inset-bottom)',
      }}
    >
      
      <div className="flex h-full w-max">
        {filteredCases.map((caseItem) => {
          // Prüfen, ob es ein Verlauf ist
          const isGradient = caseItem.image?.startsWith('linear-gradient');

          return (
            <div
              key={caseItem.id}
              onClick={() => navigate(`/case/${caseItem.id}`)}
              className="flex-shrink-0 w-screen h-full snap-center relative group
                         lg:w-[33.33vw] lg:border-r lg:border-black/5 cursor-pointer"
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
              
              {/* Titel-Overlay */}
              <div className="absolute inset-x-0 bottom-0 p-4 pb-6 sm:p-6 sm:pb-8 lg:p-12 z-20">
                {/* Tags - Title als erster Tag, dann die anderen Tags */}
                <div className="flex flex-wrap gap-2 sm:gap-2.5 relative z-30">
                  {/* Title als Tag - clickable */}
                  <button
                    onClick={(e) => handleTagClick(e, caseItem.title)}
                    className={`px-3 py-1.5 sm:px-4 sm:py-2 lg:px-4 lg:py-2 rounded-full text-[11px] sm:text-xs lg:text-sm font-semibold font-neue-semibold uppercase transition-colors relative z-30 min-h-[32px] sm:min-h-[36px] lg:min-h-[40px] flex items-center justify-center ${
                      activeTagFilter?.toLowerCase() === caseItem.title?.toLowerCase()
                        ? 'bg-[#DFFF00] border border-black/10 text-[#D9D9D9]'
                        : 'text-[#979797] bg-transparent border border-[#979797] hover:text-white hover:border-white'
                    }`}
                    style={{ 
                      WebkitTextStroke: '0.3px',
                      textShadow: '0 1px 2px rgba(0,0,0,0.3)'
                    }}
                  >
                    {caseItem.title}
                  </button>
                  {/* Weitere Tags - clickable */}
                  {caseItem.tags && caseItem.tags.map((tag, index) => (
                    <button
                      key={index}
                      onClick={(e) => handleTagClick(e, tag)}
                      className={`px-3 py-1.5 sm:px-4 sm:py-2 lg:px-4 lg:py-2 rounded-full text-[11px] sm:text-xs lg:text-sm font-semibold font-neue-semibold uppercase transition-colors relative z-30 min-h-[32px] sm:min-h-[36px] lg:min-h-[40px] flex items-center justify-center ${
                        activeTagFilter?.toLowerCase() === tag.toLowerCase()
                          ? 'bg-[#DFFF00] border border-black/10 text-[#D9D9D9]'
                          : 'text-[#979797] bg-transparent border border-[#979797] hover:text-white hover:border-white'
                      }`}
                      style={{ 
                        WebkitTextStroke: '0.3px',
                        textShadow: '0 1px 2px rgba(0,0,0,0.3)'
                      }}
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