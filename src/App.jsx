// src/App.jsx
import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { cases } from './data/cases';

const Home = lazy(() => import('./pages/Home'));
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
                    <Route path="/" element={<Home cases={cases} />} />
                    <Route path="/case/:id" element={<CaseDetail cases={cases} />} /> 
                    <Route path="/history" element={<Home cases={cases} />} /> 
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
}

export default App;