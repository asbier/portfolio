import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Umami Analytics - Free, lightweight, privacy-focused analytics
 * 
 * To set up:
 * 1. Sign up at https://umami.is (free hobby plan: 3 websites, 10k events/month)
 * 2. Create a website in your Umami dashboard
 * 3. Get your website ID and script URL
 * 4. Create a .env file with:
 *    VITE_UMAMI_WEBSITE_ID=your-website-id
 *    VITE_UMAMI_SCRIPT_URL=https://your-umami-instance.com/script.js
 * 
 * The script is loaded asynchronously to minimize performance impact (~2KB).
 * Tracks pageviews for React Router navigation.
 */
const Analytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Only load in production
    if (process.env.NODE_ENV !== 'production') {
      return;
    }

    // Get Umami configuration from environment variables
    const websiteId = import.meta.env.VITE_UMAMI_WEBSITE_ID;
    const scriptUrl = import.meta.env.VITE_UMAMI_SCRIPT_URL || 'https://cloud.umami.is/script.js';
    
    // Don't load if website ID is not configured
    if (!websiteId) {
      return; // Silently skip if not configured
    }

    // Load Umami script asynchronously (only once)
    if (!document.querySelector(`script[data-website-id="${websiteId}"]`)) {
      const script = document.createElement('script');
      script.defer = true;
      script.async = true;
      script.dataset.websiteId = websiteId;
      script.src = scriptUrl;
      document.head.appendChild(script);
    }
  }, []);

  // Track pageviews on route changes (for React Router SPA)
  useEffect(() => {
    // Only track in production and if Umami is loaded
    if (process.env.NODE_ENV !== 'production' || !window.umami) {
      return;
    }

    // Track pageview for current route
    window.umami.track(window.location.pathname);
  }, [location]);

  return null; // This component doesn't render anything
};

export default Analytics;

