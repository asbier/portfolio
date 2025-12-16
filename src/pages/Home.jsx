import React, { useState } from 'react';
import Navbar from '../components/Navbar/Navbar.jsx';
import FilterTabs from '../components/FilterTabs/FilterTabs.jsx';
import CaseSlider from '../components/CaseSlider/CaseSlider.jsx'; 
import { cases } from '../data/cases.js'; 

const Home = () => {
    const [activeFilter, setActiveFilter] = useState('all'); 

    return (
        // The main container needs to allow scrolling
        <div className="min-h-screen bg-white text-black">
            {/* Navbar is already FIXED by design, but ensure content moves under it */}
            <Navbar />
            
            {/* Main content area */}
            <main className="pt-24 px-8 max-w-7xl mx-auto"> 
                
                {/* 1. Sticky Content Container */}
                {/* This top section needs to stay visible above the CaseSlider */}
                <div className="sticky top-24 bg-white z-10 pb-4">
                    <h2 className="text-xl font-neue mb-2">Portfolio</h2>
                    <p className="text-sm text-gray-700 mb-8">
                        Creator & Art Director with focus on building holistic digital and spatial experiences.
                    </p>
                    
                    <FilterTabs 
                        activeFilter={activeFilter} 
                        onFilterChange={setActiveFilter} 
                    /> 
                </div>
                
                {/* 2. Case Slider - Should be wide and scrollable */}
                {/* The CaseSlider component will handle the snapping */}
                <div className="relative -mx-8"> {/* Negative margin to stretch across the viewport width */}
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