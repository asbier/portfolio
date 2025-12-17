import React from 'react';
import { useNavigate } from 'react-router-dom';

const CaseSlider = ({ cases, filter }) => {
  const navigate = useNavigate();
  
  const filteredCases = filter === 'all' 
    ? cases 
    : cases.filter(c => c.category.toLowerCase() === filter.toLowerCase());

  return (
   <div className="fixed left-0 w-full overflow-x-auto scrollbar-hide snap-x snap-mandatory 
                top-0 
               h-[calc(100vh-119px)] /* Muss exakt h der Navbar entsprechen */
                lg:top-[120px] lg:h-[calc(100vh-120px)]">
      
      <div className="flex h-full w-max">
        {filteredCases.map((caseItem) => ( 
          <div
            key={caseItem.id}
            onClick={() => navigate(`/case/${caseItem.id}`)}
            className="flex-shrink-0 w-screen h-full snap-center relative group
                       lg:w-[33.33vw] lg:border-r lg:border-black/5"
          >
            {/* Projektbild */}
            <img 
              src={caseItem.image} 
              alt={caseItem.title} 
              className="absolute inset-0 w-full h-full object-cover" 
            />

            {/* 🏷️ TAGS SECTION (Angepasst: Höher rutschen wegen Navbar) */}
            <div className="absolute bottom-32 left-8 lg:bottom-32 lg:left-12 flex flex-wrap gap-2 z-10">
              {caseItem.tags && caseItem.tags.map((tag, index) => (
                <span 
                  key={index} 
                  className="px-4 py-1.5 border border-white/40 rounded-full text-[10px] lg:text-[12px] text-white uppercase font-neue font-bold backdrop-blur-md tracking-wider shadow-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Titel (Angepasst: padding-bottom erhöht, damit er über der Navbar steht) */}
            <div className="absolute inset-x-0 bottom-0 p-8 pb-12 lg:p-12 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
              <h3 className="text-white text-3xl lg:text-5xl font-black font-neue uppercase leading-none tracking-tighter">
                {caseItem.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseSlider;