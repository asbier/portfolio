// src/pages/Home.jsx

import React, { useState } from 'react';
import Navbar from '../components/Navbar/Navbar.jsx'; // Will now handle filters
// 🛑 REMOVE THIS IMPORT: import FilterTabs from '../components/FilterTabs/FilterTabs.jsx'; 
import CaseSlider from '../components/CaseSlider/CaseSlider.jsx'; 
import { cases } from '../data/cases.js'; 

const Home = () => {
    // 🛑 KEEP STATE HERE: This state controls the slider filtering.
    const [activeFilter, setActiveFilter] = useState('all'); 

    return (
        <div className="min-h-screen bg-white text-black">
            {/* 🛑 PASS FILTER STATE TO NAVBAR 🛑 */}
            <Navbar 
                activeFilter={activeFilter} 
                setActiveFilter={setActiveFilter} 
            />
            
            {/* 🛑 REMOVE STICKY HEADER AND FILTER SECTION FROM MAIN 🛑 */}
            {/* The main content now starts after the fixed Navbar height. */}
            <main className="pt-24 max-w-7xl mx-auto"> 
                
                {/* Clean up the Portfolio title/desc section */}
                <div className="px-8 pb-8"> 
                    <h2 className="text-xl font-neue mb-2">Portfolio</h2>
                    <p className="text-sm text-gray-700">
                        Creator & Art Director with focus on building holistic digital and spatial experiences.
                    </p>
                </div>
                
                {/* Case Slider remains */}
                <div className="relative -mx-8"> 
                   <CaseSlider 
                        cases={cases} 
                        filter={activeFilter}
                    /> 
                </div>
            </main>
        </div>
    );
};

export default Home;