import React from 'react';
import { useNavigate } from 'react-router-dom';

const CaseSlider = ({ cases, filter }) => {
  const navigate = useNavigate();
  const filteredCases = filter === 'all' 
    ? cases 
    : cases.filter(c => c.category.toLowerCase() === filter.toLowerCase());

  return (
    /* Wir nutzen 'fixed' oder 'absolute', um sicherzustellen, dass 
       kein Padding des Eltern-Elements (z.B. in App.jsx) den Slider verschiebt.
    */
    <div className="fixed left-0 w-full overflow-x-auto scrollbar-hide snap-x snap-mandatory bg-background-light
                    /* 📱 Mobile: Startet exakt bei 0, füllt Platz bis zur 80px Nav unten */
                    top-0 h-[calc(100vh-80px)] 
                    /* 💻 Desktop: Startet exakt unter der 120px Nav oben */
                    lg:top-[120px] lg:h-[calc(100vh-120px)]"> 
      
      <div className="flex h-full w-max">
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

            {/* Titel am unteren Rand des Bildes */}
            <div className="absolute inset-x-0 bottom-0 p-8 lg:p-12 bg-gradient-to-t from-black/60 to-transparent">
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