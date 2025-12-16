// src/App.jsx

import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// 🛑 Lazy Load Pages - NUR Home und CaseDetail behalten 🛑
const Home = lazy(() => import('./pages/Home'));
// const Contact = lazy(() => import('./pages/Contact')); <-- ENTFERNEN
const CaseDetail = lazy(() => import('./pages/CaseDetail')); 

function App() {
    return (
        <BrowserRouter>
            <Suspense fallback={
                <div className="flex justify-center items-center min-h-screen bg-background-light">
                    <h1 className="text-4xl font-neue uppercase text-title-gray">Loading...</h1>
                </div>
            }>
                <Routes>
                    <Route path="/" element={<Home />} />
                    {/* 🛑 Contact Route ENTFERNEN 🛑 */}
                    {/* <Route path="/contact" element={<Contact />} /> */}
                    <Route path="/case/:id" element={<CaseDetail />} /> 
                    <Route path="/history" element={<Home />} /> 
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
}

export default App;