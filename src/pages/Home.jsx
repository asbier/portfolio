import React, { useState } from 'react';
import Navbar from '../components/Navbar/Navbar.jsx'; 
import CaseSlider from '../components/CaseSlider/CaseSlider.jsx';
import GrainOverlay from '../components/GrainOverlay/GrainOverlay'; 

// 🛑 WICHTIG: Den alten Import von '../data/cases.js' löschen!

const Home = ({ cases }) => { // ⬅️ cases hier als Prop entgegennehmen
    const [activeTagFilter, setActiveTagFilter] = useState(null);

    return (
        <div className="min-h-screen bg-[#F1F2E5]"> 
            <GrainOverlay />
            <Navbar />
            
            <main className="pt-20 lg:pt-32">
                <div className="relative"> 
                   <CaseSlider 
                        cases={cases}  // Nutzt jetzt die Daten aus App.jsx
                        activeTagFilter={activeTagFilter}
                        setActiveTagFilter={setActiveTagFilter}
                    /> 
                </div>
            </main>
        </div>
    );
}; 

export default Home;