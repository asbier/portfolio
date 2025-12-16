import React, { useState } from 'react'; // 👈 Import useState
import Navbar from '../components/Navbar/Navbar.jsx';
import FilterTabs from '../components/FilterTabs/FilterTabs.jsx';
import CaseSlider from '../components/CaseSlider/CaseSlider.jsx'; 
import { cases } from '../data/cases.js'; // 👈 Import your case data

const Home = () => {
    const [activeFilter, setActiveFilter] = useState('all'); // 👈 Add state for filtering

    return (
        <div className="min-h-screen bg-white text-black">
            <Navbar />
            
            <main className="pt-24 px-8 max-w-7xl mx-auto"> 
                
                <h2 className="text-xl font-neue mb-2">Portfolio</h2>
                <p className="text-sm text-gray-700 mb-8">
                    Creator & Art Director with focus on building holistic digital and spatial experiences.
                </p>
                
                {/* 👈 Pass state and handler to FilterTabs */}
                <FilterTabs 
                    activeFilter={activeFilter} 
                    onFilterChange={setActiveFilter} 
                /> 
                
                <div className="mt-8">
                    {/* 👈 Pass case data and active filter to CaseSlider */}
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