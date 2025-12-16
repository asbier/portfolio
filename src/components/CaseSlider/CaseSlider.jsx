import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const CaseSlider = ({ cases, filter }) => {
  const navigate = useNavigate();
  const sliderRef = useRef(null);

  const filteredCases = filter === 'all' 
    ? cases 
    : cases.filter(caseItem => caseItem.category === filter);

  const handleCaseClick = (caseId) => {
    navigate(`/case/${caseId}`);
  };

  return (
    <div className="w-full overflow-x-auto scrollbar-hide" ref={sliderRef}>
      <div className="flex space-x-4 pb-4">
        {filteredCases.map((caseItem, index) => (
          <motion.div
            key={caseItem.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="flex-shrink-0 w-[350px] cursor-pointer group"
            onClick={() => handleCaseClick(caseItem.id)}
          >
            <div className="relative overflow-hidden rounded-lg bg-gray-100 aspect-[7/10]">
              <img
                src={caseItem.image}
                alt={caseItem.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                <h3 className="text-white font-medium text-sm">{caseItem.title}</h3>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CaseSlider;


