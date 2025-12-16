// src/components/CaseSlider/CaseSlider.jsx

import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
// Removed: import { motion } from 'framer-motion';

const CaseSlider = ({ cases, filter }) => {
    const navigate = useNavigate();
    const sliderRef = useRef(null);

    // 🛑 FIX 1: filteredCases is now correctly used in the return map 🛑
    const filteredCases = filter === 'all'
        ? cases
        : cases.filter(caseItem => caseItem.category.toLowerCase() === filter.toLowerCase());

    // 🛑 FIX 2: handleCaseClick is now correctly used in the onClick handler 🛑
    const handleCaseClick = (caseId) => {
        navigate(`/case/${caseId}`);
    };

    return (
        <div 
            className="overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory" 
            ref={sliderRef}
        >
            <div className="flex space-x-[0.1875rem] pb-4 pl-8"> 
                {/* 🛑 USING filteredCases HERE 🛑 */}
                {filteredCases.map((caseItem) => ( 
                    <div
                        key={caseItem.id}
                        // 🛑 USING handleCaseClick HERE 🛑
                        onClick={() => handleCaseClick(caseItem.id)} 
                        className="flex-shrink-0 w-[510px] h-[742px] snap-center cursor-pointer group"
                    >
                        <div className="relative overflow-hidden rounded-none bg-gray-100 aspect-[510/742]">
                            {/* Image Placeholder */}
                            <div className="w-full h-full bg-gray-400"></div>

                            {/* Title (Ensuring the title is inside and styled) */}
                            <div className="absolute bottom-0 left-0 right-0 p-4">
                                <h3 
                                    className="text-white text-lg font-neue uppercase font-extrabold tracking-wider text-title-gray"
                                >
                                    {caseItem.title}
                                </h3>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default CaseSlider;