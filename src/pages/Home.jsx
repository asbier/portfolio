import React, { useState } from 'react';
import Navbar from '../components/Navbar/Navbar.jsx';
import FilterTabs from '../components/FilterTabs/FilterTabs.jsx';
import CaseSlider from '../components/CaseSlider/CaseSlider.jsx'; 
import { cases } from '../data/cases.js'; 

const Home = () => {
    const [activeFilter, setActiveFilter] = useState('all'); 

    return (
        <div className="min-h-screen bg-white text-black">
            <Navbar />
            
            {/* 🛑 REMOVED pt-24 from <main> 🛑 */}
            <main className="max-w-7xl mx-auto"> 
                
                {/* 1. Sticky Content Container (Portfolio title, description, and filters) */}
                {/* 🛑 UPDATED top-0 and added pt-24 here 🛑 */}
                <div className="sticky top-0 bg-white z-10 pb-4 px-8 pt-24"> 
                    <h2 className="text-xl font-neue mb-2">Portfolio</h2>
                    <p className="text-sm text-gray-700 mb-8">
                        Creator & Art Director with focus on building holistic digital and spatial experiences.
                    </p>
                    
                    <FilterTabs 
                        activeFilter={activeFilter} 
                        onFilterChange={setActiveFilter} 
                    /> 
                </div>
                
                {/* 2. Case Slider - Should remain scrollable and full-bleed */}
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