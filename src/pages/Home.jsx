// src/pages/Home.jsx

import React, { useState } from 'react';
import Navbar from '../components/Navbar/Navbar.jsx'; // Will now handle filters
import CaseSlider from '../components/CaseSlider/CaseSlider.jsx'; 
import { cases } from '../data/cases.js'; 

const Home = () => {
    // 🛑 KEEP STATE HERE: This state controls the slider filtering.
    const [activeFilter, setActiveFilter] = useState('all'); 

    return (
        <div className="min-h-screen bg-background-light"> 
            <Navbar 
                activeFilter={activeFilter} 
                setActiveFilter={setActiveFilter} 
            />
            
            {/* 🛑 MODIFIED: Responsive top padding based on Navbar height 🛑 */}
            {/* pt-20 for mobile, pt-32 for large screens where Navbar is taller */}
            <main className="pt-20 lg:pt-32">
                
            
                
                {/* Case Slider remains (it needs to handle its own margins) */}
                <div className="relative"> 
                   <CaseSlider 
                        cases={cases} 
                        filter={activeFilter}
                    /> 
                </div>
            </main>
        </div>
    );
}; export default Home;