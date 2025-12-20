// src/App.jsx
import React, { Suspense, lazy, useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { cases } from './data/cases';
import LoadingOverlay from './components/LoadingOverlay/LoadingOverlay';

const Home = lazy(() => import('./pages/Home'));
const CaseDetail = lazy(() => import('./pages/CaseDetail'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Privacy = lazy(() => import('./pages/Privacy'));

function App() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Hide loading once fonts and initial content are loaded
        const hideLoading = () => {
            // Wait for fonts to load
            if (document.fonts && document.fonts.ready) {
                document.fonts.ready.then(() => {
                    setTimeout(() => setIsLoading(false), 300);
                });
            } else {
                setTimeout(() => setIsLoading(false), 500);
            }
        };

        // If page is already loaded
        if (document.readyState === 'complete') {
            hideLoading();
        } else {
            window.addEventListener('load', hideLoading);
            return () => window.removeEventListener('load', hideLoading);
        }
    }, []);

    return (
        <BrowserRouter>
            <Suspense fallback={<LoadingOverlay />}>
                {isLoading && <LoadingOverlay />}
                <Routes>
                    <Route path="/" element={<Home cases={cases} />} />
                    <Route path="/case/:id" element={<CaseDetail cases={cases} />} /> 
                    <Route path="/history" element={<Home cases={cases} />} /> 
                    <Route path="/privacy" element={<Privacy />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
}

export default App;