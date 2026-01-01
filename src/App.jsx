// src/App.jsx
import React, { Suspense, lazy, useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { cases } from './data/cases';
import LoadingOverlay from './components/LoadingOverlay/LoadingOverlay';
import Analytics from './components/Analytics/Analytics';

const Home = lazy(() => import('./pages/Home'));
const CaseDetail = lazy(() => import('./pages/CaseDetail'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Approach = lazy(() => import('./pages/Approach'));

// Component to handle GitHub Pages 404.html redirect
function RedirectHandler() {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        // Check if we have a redirect parameter from 404.html
        const path = location.pathname;
        const search = location.search;
        
        // Handle the GitHub Pages 404.html redirect format: /?/case/5
        if (search.includes('?/')) {
            const redirectPath = search
                .replace(/^\?\/?/, '/') // Remove ?/ prefix
                .replace(/~and~/g, '&') // Restore & characters
                .split('&')[0]; // Remove query params
            
            // Navigate to the correct route
            if (redirectPath && redirectPath !== '/') {
                navigate(redirectPath, { replace: true });
            }
        }
    }, [location, navigate]);

    return null;
}

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
                <RedirectHandler />
                <Analytics />
                {isLoading && <LoadingOverlay />}
                <Routes>
                    <Route path="/" element={<Home cases={cases} />} />
                    <Route path="/case/:id" element={<CaseDetail cases={cases} />} /> 
                    <Route path="/history" element={<Home cases={cases} />} /> 
                    <Route path="/privacy" element={<Privacy />} />
                    <Route path="/approach" element={<Approach />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
}

export default App;