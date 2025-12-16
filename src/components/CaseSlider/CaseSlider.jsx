import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const CaseSlider = ({ cases, filter }) => {
    const navigate = useNavigate();
    const sliderRef = useRef(null);

    // Ensure filtering logic is correct (caseItem.category should match filter, or show all)
    const filteredCases = filter === 'all' 
        ? cases 
        : cases.filter(caseItem => caseItem.category.toLowerCase() === filter.toLowerCase());

    const handleCaseClick = (caseId) => {
        navigate(`/case/${caseId}`);
    };

    return (
        // Added scrollbar-hide to prevent horizontal scrollbar from showing
        <div className="w-full overflow-x-auto scrollbar-hide" ref={sliderRef}>
            <div className="flex space-x-6 pb-4"> {/* Increased space-x for better separation */}
                {filteredCases.map((caseItem, index) => (
                    <motion.div
                        key={caseItem.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        // Increased w-[350px] to make the image stand out more
                        className="flex-shrink-0 w-[400px] cursor-pointer group" 
                        onClick={() => handleCaseClick(caseItem.id)}
                    >
                        <div className="relative overflow-hidden rounded-none bg-gray-100 aspect-[7/10] shadow-xl">
                            <img
                                src={caseItem.image}
                                alt={caseItem.title}
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                loading="lazy"
                            />
                            {/* Overlay to create the dark gradient effect at the bottom */}
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                            
                            {/* 🛑 UPDATED TITLE/TAG STYLING 🛑 */}
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
