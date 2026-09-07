import React, { useState, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar.jsx'; 
import CaseSlider from '../components/CaseSlider/CaseSlider.jsx';
import GrainOverlay from '../components/GrainOverlay/GrainOverlay';

const Home = ({ cases }) => {
    const location = useLocation();
    const isArchive = location.pathname === '/history';
    const [activeTagFilter, setActiveTagFilter] = useState(null);

    const visibleCases = useMemo(
        () => (isArchive ? cases.filter((c) => c.archived) : cases.filter((c) => !c.archived)),
        [cases, isArchive]
    );

    return (
        <div className="min-h-screen bg-[#F0F5F5]"> 
            <GrainOverlay />
            <Navbar />
            <main className="pt-0 lg:pt-32">
                <div className="relative">
                   <CaseSlider
                        cases={visibleCases}
                        activeTagFilter={activeTagFilter}
                        setActiveTagFilter={setActiveTagFilter}
                        mode={isArchive ? 'archive' : 'selected'}
                   />
                </div>
            </main>
        </div>
    );
}; 

export default Home;
