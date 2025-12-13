import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { trackContactClick, trackPageSection } from '../../utils/analytics';
import './Nav.css';

function Nav({ toggleContentVisibility, closeAllContent, activeFilter, setActiveFilter }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleHistoryClick = () => {
    toggleContentVisibility('about');
    trackPageSection('about', 'opened');
    setIsMenuOpen(false);
  };

  const handlePrivacyClick = () => {
    toggleContentVisibility('privacy');
    setIsMenuOpen(false);
  };

  const handleHireClick = () => {
    trackContactClick('nav');
  };

  const handleCommercialClick = () => {
    setActiveFilter(activeFilter === 'commercial' ? 'all' : 'commercial');
  };

  const handlePrivateClick = () => {
    setActiveFilter(activeFilter === 'private' ? 'all' : 'private');
  };

  const handleHomeClick = (e) => {
    e.preventDefault();
    closeAllContent();
    setActiveFilter('all');
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Mobile: Fixed bottom nav */}
      <nav className="mobile-nav">
        <div className="mobile-nav-container">
          <div className="mobile-filters">
            <button 
              className={`mobile-filter ${activeFilter === 'commercial' ? 'active' : ''}`}
              onClick={handleCommercialClick}
            >
              COMMERCIAL
            </button>
            <button 
              className={`mobile-filter ${activeFilter === 'private' ? 'active' : ''}`}
              onClick={handlePrivateClick}
            >
              PRIVATE
            </button>
          </div>
          
          <button className="menu-toggle" onClick={toggleMenu}>
            <span className="menu-dot"></span>
          </button>

          <a 
            href="mailto:annemariesauerbier@googlemail.com" 
            className="mobile-contact-btn"
            onClick={handleHireClick}
          >
            CONTACT
          </a>
        </div>
      </nav>

      {/* Desktop: Sticky top nav */}
      <nav className="desktop-nav">
        <a href="/" className="nav-home" onClick={handleHomeClick}>
          <div className="logo-letters">
            <span className="logo-a">A</span>
            <span className="logo-m">M</span>
          </div>
          <span className="nav-title">PRODUCT DESIGN & BRANDING</span>
        </a>
        
        <div className="nav-buttons">
          <a 
            href="mailto:annemariesauerbier@googlemail.com" 
            className="btn-contact-active"
            onClick={handleHireClick}
          >
            CONTACT
          </a>
          
          <button 
            className={`btn-filter ${activeFilter === 'commercial' ? 'active' : ''}`}
            onClick={handleCommercialClick}
          >
            COMMERCIAL
          </button>
          
          <button 
            className={`btn-filter ${activeFilter === 'private' ? 'active' : ''}`}
            onClick={handlePrivateClick}
          >
            PRIVATE
          </button>
          
          <button className="btn-filter" onClick={handleHistoryClick}>
            HISTORY
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}
        onClick={() => setIsMenuOpen(false)}
      >
        <button 
          className="mobile-menu-close"
          onClick={(e) => { e.stopPropagation(); setIsMenuOpen(false); }}
          aria-label="Close menu"
        >
          ×
        </button>
        
        <a 
          href="/" 
          className="mobile-menu-item"
          onClick={(e) => { 
            e.preventDefault();
            e.stopPropagation(); 
            handleHomeClick(e); 
            setIsMenuOpen(false); 
          }}
        >
          HOME
        </a>
        <button className="mobile-menu-item" onClick={(e) => { e.stopPropagation(); handleHistoryClick(); setIsMenuOpen(false); }}>
          HISTORY
        </button>
        <button className="mobile-menu-item" onClick={(e) => { e.stopPropagation(); handlePrivacyClick(); setIsMenuOpen(false); }}>
          PRIVACY
        </button>
        
        <span className="yellow-dot"></span>
        
        <div className="menu-footer">
          <span className="menu-footer-text">
            PORTFOLIO 2025{' '}
            <button 
              onClick={(e) => { e.stopPropagation(); handlePrivacyClick(); setIsMenuOpen(false); }}
              className="menu-footer-privacy"
            >
              PRIVACY
            </button>
          </span>
        </div>
      </div>
    </>
  );
}

export default Nav;
