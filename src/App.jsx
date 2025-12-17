// src/App.jsx
import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home'));
const CaseDetail = lazy(() => import('./pages/CaseDetail')); 

// 🛑 HIER DEFINIEREN WIR DAS ARRAY MIT DEN TAGS 🛑
const cases = [
  {
    id: 1,
    title: "E-Commerce Platform Redesign",
    category: "commercial",
    image: "/images/project1.jpg", // Pfad zu deinen Bildern
    tags: ["Volkswagen", "Product Design", "Landingpage", "UX/UI"], // Tags aus deinem Screenshot
    description: "A deep dive into the digital transformation of e-commerce systems."
  },
  {
    id: 2,
    title: "Brand Identity System",
    category: "private",
    image: "/images/project2.jpg",
    tags: ["Branding", "Concept", "Design System"],
    description: "Developing a cohesive visual language for modern brands."
  }
  // Füge hier deine weiteren Projekte hinzu...
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
                    {/* Wir geben das cases-Array an Home weiter */}
                    <Route path="/" element={<Home cases={cases} />} />
                    
                    {/* Wir geben das cases-Array an CaseDetail weiter */}
                    <Route path="/case/:id" element={<CaseDetail cases={cases} />} /> 
                    
                    <Route path="/history" element={<Home cases={cases} />} /> 
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
}

export default App;