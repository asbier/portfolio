import React from "react";
import "./about.css";

function About({ isVisible, toggleContentVisibility }) {
  const handleClose = () => {
    toggleContentVisibility('about');
  };

  return (
    <div className="about-page">
      {/* Close Button */}
      <button className="about-close" onClick={handleClose}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M18 6L6 18M6 6l12 12"/>
        </svg>
      </button>

      {/* Content */}
      <div className="about-content">
        <h1 className="about-title">HISTORY</h1>
        
        <p className="about-intro">
          Art Director & Product Designer — I create awareness and profits for brands that want to stand out from the crowd.
        </p>

        <div className="about-details">
          <p>
            For over 12 years, I've been designing holistic, humanity-first experiences that elevate how people connect — with each other, with systems, and with the ways they consume.
          </p>
          <p>
            The future demands new ways of engaging our senses, rethinking materials, and reimagining how we source, perceive, and experience goods.
          </p>
        </div>

        <div className="about-clients">
          <span className="clients-label">WORKED WITH</span>
          <p>
            DAYONE × VOLKSWAGEN × HELLA GUTMANN / CARHARTT WIP / EDITED / ABOUT YOU / PLASTIC MEDIA × INDIE × MONKI / HEROES & HEROINES × BUMBLE × ABSOLUT × HENNESSY / SUPERREAL × COMMA' / MONOPOL × BIORAMA × THE GAP
          </p>
        </div>

        <div className="about-cta">
          <a 
            href="/CV-Annemarie-Sauerbier.pdf" 
            download="CV-Annemarie-Sauerbier.pdf"
            className="cta-link"
          >
            ↓ DOWNLOAD CV
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
