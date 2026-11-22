import React, { useState, useMemo, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar.jsx'; 
import CaseSlider from '../components/CaseSlider/CaseSlider.jsx';
import GrainOverlay from '../components/GrainOverlay/GrainOverlay';

const Home = ({ cases }) => {
    const location = useLocation();
    const isArchive = location.pathname === '/history';
    const [activeTagFilter, setActiveTagFilter] = useState(null);
    const [isMobile, setIsMobile] = useState(
        typeof window !== 'undefined' ? window.innerWidth < 1024 : false
    );

    useEffect(() => {
        const update = () => setIsMobile(window.innerWidth < 1024);
        update();
        window.addEventListener('resize', update);
        return () => window.removeEventListener('resize', update);
    }, []);

    const visibleCases = useMemo(() => {
        // Mobile: one continuous list — selected first, then earlier work
        if (isMobile) {
            return [
                ...cases.filter((c) => !c.archived),
                ...cases.filter((c) => c.archived),
            ];
        }
        return isArchive
            ? cases.filter((c) => c.archived)
            : cases.filter((c) => !c.archived);
    }, [cases, isArchive, isMobile]);

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
                        mode={isMobile ? 'selected' : (isArchive ? 'archive' : 'selected')}
                   />
                </div>
            </main>
        </div>
    );
}; 

export default Home;
