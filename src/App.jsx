// src/App.jsx
import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home'));
const CaseDetail = lazy(() => import('./pages/CaseDetail')); 

const cases = [
  {
    id: 1,
    title: "Berlin Tech Job Dashboard",
    category: "PRODUCT DESIGN / DEV COLLAB",
    image: "linear-gradient(180deg, #3A4057 0%, #363C53 100%)", // Nur EINMAL 'image' behalten!
    tags: ["REACT", "TAILWIND", "DASHBOARD"],
    description: "Visualizing the Berlin tech job market through data-driven design.",
    year: "2024",
    challenge: "Fragmented job data made it hard for developers to find roles.",
    detailImage1: "linear-gradient(180deg, #3A4057 0%, #363C53 100%)",
    impact: "Created a focused interface for tech-stack based job hunting.",
    detailImage2: "linear-gradient(180deg, #363C53 0%, #1A1D25 100%)",
    outcome: "A high-fidelity MVP built with a developer partner.",
    detailImage3: "linear-gradient(180deg, #3A4057 0%, #363C53 100%)",
  },
  {
    id: 2, 
    title: "HellagutmannxDAYONE",
    category: "PRODUCT DESIGN",
    // Dein Pfad
    image: "/images/01_hellagutmann/sliderImage_hellagutmann_dashboard_hero.jpg",
    tags: ["DIAGNOSTICS", "ADAS", "UI-DESIGN"],
    description: "Advanced diagnostic systems for workshops.",
    year: "2024",
    challenge: "Workshops needed faster vehicle selection.",
    impact: "Streamlined ADAS workflows to save time.",
    detailImage1: "/images/01_hellagutmann/fahrzeug_auswählen_basis_default_1280-800.png",
  detailImage2: "/images/01_hellagutmann/hella_gutmann_protocol_2.png",
  detailImage3: "/images/01_hellagutmann/hellagutmann_dashboard_adas_guide.png",
    outcome: "Reduced vehicle selection time and improved accuracy."
  }
];

function App() {
    return (
        <BrowserRouter>
            <Suspense fallback={
                <div className="flex justify-center items-center min-h-screen bg-background-light">
                    <h1 className="text-4xl font-neue uppercase text-title-gray">Loading...</h1>
                </div>
            }>
                <Routes>
                    <Route path="/" element={<Home cases={cases} />} />
                    <Route path="/case/:id" element={<CaseDetail cases={cases} />} /> 
                    <Route path="/history" element={<Home cases={cases} />} /> 
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
}

export default App;