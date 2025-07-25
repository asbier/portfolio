import React, { useState, useEffect } from 'react';
import './CookieBanner.css';

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [consent, setConsent] = useState(null);

  useEffect(() => {
    // Check if user already gave consent
    const savedConsent = localStorage.getItem('cookie-consent');
    if (!savedConsent) {
      setShowBanner(true);
    } else {
      setConsent(savedConsent);
      if (savedConsent === 'accepted') {
        loadGoogleAnalytics();
      }
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setConsent('accepted');
    setShowBanner(false);
    loadGoogleAnalytics();
  };

  const handleReject = () => {
    localStorage.setItem('cookie-consent', 'rejected');
    setConsent('rejected');
    setShowBanner(false);
  };

  const loadGoogleAnalytics = () => {
    // Load Google Analytics only after consent
    if (window.gtag) return; // Already loaded

    // Add Google Analytics script
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = 'https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID';
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'GA_MEASUREMENT_ID', {
        anonymize_ip: true,
        cookie_flags: 'SameSite=None;Secure'
      });
    `;
    document.head.appendChild(script2);
  };

  if (!showBanner) return null;

  return (
    <div className="cookie-banner">
      <div className="cookie-content">
        <div className="cookie-text">
          <h3>🍪 Cookies & Analytics</h3>
          <p>
            Ich verwende Google Analytics, um zu verstehen, wie Besucher mein Portfolio nutzen. 
            Dies hilft mir, die Benutzererfahrung zu verbessern.
          </p>
          <div className="cookie-details">
            <p><strong>Was wird gespeichert:</strong></p>
            <ul>
              <li>Anonymisierte Besucherstatistiken</li>
              <li>Seiten-Aufrufe und Verweildauer</li>
              <li>Geräte- und Browser-Informationen</li>
            </ul>
          </div>
        </div>
        <div className="cookie-buttons">
          <button onClick={handleAccept} className="accept-btn">
            ✅ Akzeptieren
          </button>
          <button onClick={handleReject} className="reject-btn">
            ❌ Ablehnen
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner; 