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
               h-[calc(100vh-119px)] 
                lg:top-[120px] lg:h-[calc(100vh-120px)]">
      
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

              {/* Titel-Overlay */}
              <div className="absolute inset-x-0 bottom-0 p-8 pb-12 lg:p-12 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                <h3 className="text-white text-3xl lg:text-5xl font-black font-neue uppercase leading-none tracking-tighter">
                  {caseItem.title}
                </h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CaseSlider;