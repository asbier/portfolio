import React from 'react';
import { useNavigate } from 'react-router-dom';

const CaseSlider = ({ cases, filter }) => {
  const navigate = useNavigate();
  const filteredCases = filter === 'all' 
    ? cases 
    : cases.filter(c => c.category.toLowerCase() === filter.toLowerCase());

  return (
    /* Desktop: h-[calc(100vh-120px)] passt exakt unter die 120px Nav.
       Mobile: h-[calc(100vh-80px)] füllt alles über der 80px Nav aus.
       overflow-x-auto + scrollbar-hide verhindert sichtbare Balken.
    */
    <div className="w-full overflow-x-auto scrollbar-hide snap-x snap-mandatory bg-background-light
                    mt-0 h-[calc(100vh-80px)]      /* Mobile: Startet ganz oben */
                    lg:mt-[120px] lg:h-[calc(100vh-120px)]"> 
      
      <div className="flex h-full w-max"> {/* w-max verhindert das Stauchen der Bilder */}
        {filteredCases.map((caseItem) => ( 
          <div
            key={caseItem.id}
            onClick={() => navigate(`/case/${caseItem.id}`)}
            className="flex-shrink-0 w-screen h-full snap-center relative group
                       lg:w-[33.33vw] lg:border-r lg:border-black/5"
          >
            <img 
              src={caseItem.image} 
              alt={caseItem.title} 
              className="absolute inset-0 w-full h-full object-cover" 
            />

            {/* Overlay für Titel & Tags wie im Ziel-Design */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent flex flex-col justify-end p-8">
              <h3 className="text-white text-3xl lg:text-5xl font-black font-neue uppercase leading-none mb-4">
                {caseItem.title}
              </h3>
              <div className="flex gap-2">
                {caseItem.tags?.map(tag => (
                  <span key={tag} className="px-4 py-1 border border-white/40 rounded-full text-[10px] text-white uppercase font-neue backdrop-blur-md">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseSlider;