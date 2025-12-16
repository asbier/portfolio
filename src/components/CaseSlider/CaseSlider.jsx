import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const CaseSlider = ({ cases, filter }) => {
    const navigate = useNavigate();
    const sliderRef = useRef(null);

    const filteredCases = filter === 'all' 
        ? cases 
        : cases.filter(caseItem => caseItem.category.toLowerCase() === filter.toLowerCase());

    const handleCaseClick = (caseId) => {
        navigate(`/case/${caseId}`);
    };

    return (
        // Container for scrolling: Apply horizontal scroll and snapping behavior
        <div 
            className="w-full overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory" 
            ref={sliderRef}
        >
            {/* Content container: Must be wide enough to hold all items */}
            <div className="flex space-x-6 pb-4 px-8"> 
                {filteredCases.map((caseItem, index) => (
                    <motion.div
                        key={caseItem.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        // 🛑 UPDATED WIDTH and SCROLL SNAP 🛑
                        // Use a specific width and the snap-center utility
                        className="flex-shrink-0 w-[500px] xl:w-[600px] snap-center cursor-pointer group" 
                        onClick={() => handleCaseClick(caseItem.id)}
                    >
                        {/* ... (rest of the content styling is the same) ... */}
                        <div className="relative overflow-hidden rounded-none bg-gray-100 aspect-[7/10] shadow-xl">
                            <img
                                src={caseItem.image}
                                alt={caseItem.title}
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                loading="lazy"
                            />
                            
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                            
                            <div className="absolute bottom-0 left-0 right-0 p-4">
                                <h3 
                                    className="text-white text-lg font-neue uppercase font-extrabold tracking-wider"
                                >
                                    {caseItem.title}
                                </h3>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default CaseSlider;