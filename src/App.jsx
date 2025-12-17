// src/App.jsx
import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home'));
const CaseDetail = lazy(() => import('./pages/CaseDetail')); 

const cases = [
  {
    id: 1,
    title: "E-Commerce Platform Redesign",
    category: "commercial",
    image: "/images/project1.jpg", 
    tags: ["Volkswagen", "Product Design", "Landingpage", "UX/UI"],
    description: "A deep dive into the digital transformation of e-commerce systems.",
    year: "2024",
    // 💡 DIESE FELDER FEHLTEN:
    challenge: "The existing platform suffered from high bounce rates and a fragmented checkout process that frustrated users.",
    impact: "Boosted conversion rates by 25% and reduced mobile cart abandonment through a simplified 3-step checkout flow.",
    outcome: "A scalable, high-performing design system that unified the brand's global digital presence.",
    detailImage1: "/images/detail1.jpg", // Stelle sicher, dass die Pfade stimmen
    detailImage2: "/images/detail2.jpg"
  },
  {
    id: 2,
    title: "Brand Identity System",
    category: "private",
    image: "/images/project2.jpg",
    tags: ["Branding", "Concept", "Design System"],
    description: "Developing a cohesive visual language for modern brands.",
    year: "2023",
    challenge: "Defining a visual identity that feels both high-tech and human-centric for an AI-driven service.",
    impact: "The new identity secured a Series A funding round and established a distinctive market presence.",
    outcome: "A flexible brand toolkit including custom iconography and a vibrant typography-led interface.",
    detailImage1: "/images/brand-detail1.jpg"
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