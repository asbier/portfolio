// src/App.jsx
import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home'));
const CaseDetail = lazy(() => import('./pages/CaseDetail')); 

const cases = [
  {
    id: 0, // Das wird dein Berlin Dashboard
    title: "Berlin Tech Job Dashboard",
    category: "PRODUCT DESIGN / DEV COLLAB",
    // Dein Verlauf
    image: "linear-gradient(180deg, #3A4057 0%, #363C53 100%)", 
    tags: ["REACT", "TAILWIND", "DASHBOARD"],
    description: "A collaborative project for the Berlin tech market.",
    year: "2024",
    challenge: "Fragmented job data made it hard for developers to find roles.",
    impact: "Created a focused interface for tech-stack based job hunting.",
    outcome: "A high-fidelity MVP built with a developer partner."
  },
  {
    id: 1, // Das wird Hella Gutmann
    title: "Hella Gutmann Solution",
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