import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './EditedBento.css';

const EditedBento = () => {
  const [activeSection, setActiveSection] = useState(null);

  // Placeholder for now - user can add their EDITED images later
  const bentoItems = [
    {
      id: 'before-1',
      type: 'before',
      title: 'Before',
      subtitle: 'Original EDITED Vision',
      description: 'The initial concept and approach to the EDITED brand',
      imagePlaceholder: 'Add your EDITED before image here',
      gridArea: 'item-1'
    },
    {
      id: 'after-1', 
      type: 'after',
      title: 'After',
      subtitle: 'Transformed Brand',
      description: 'The evolved brand experience with new visual identity',
      imagePlaceholder: 'Add your EDITED after image here',
      gridArea: 'item-2'
    },
    {
      id: 'process-1',
      type: 'process',
      title: 'Process',
      subtitle: 'Design Journey',
      description: 'Strategic thinking, research, and design methodology',
      imagePlaceholder: 'Add process documentation',
      gridArea: 'item-3'
    },
    {
      id: 'impact-1',
      type: 'impact',
      title: 'Impact',
      subtitle: 'Results & Metrics',
      description: 'Measurable brand transformation and business results',
      imagePlaceholder: 'Add impact visuals',
      gridArea: 'item-4'
    },
    {
      id: 'details-1',
      type: 'details',
      title: 'Details',
      subtitle: 'Brand Elements',
      description: 'Typography, colors, logo applications, and brand assets',
      imagePlaceholder: 'Add brand detail shots',
      gridArea: 'item-5'
    },
    {
      id: 'context-1',
      type: 'context',
      title: 'Context',
      subtitle: 'Market Position',
      description: 'Strategic brand positioning and competitive landscape',
      imagePlaceholder: 'Add context visuals',
      gridArea: 'item-6'
    }
  ];

  const handleItemClick = (item) => {
    setActiveSection(activeSection === item.id ? null : item.id);
  };

  return (
    <div className="edited-bento-container">
      <nav className="bento-nav">
        <Link to="/" className="nav-back">
          ← Back to Portfolio
        </Link>
      </nav>
      
      <header className="bento-header">
        <h1 className="bento-title">EDITED</h1>
        <p className="bento-subtitle">Brand Transformation Journey</p>
        <p className="bento-description">
          Click on any section below to add your EDITED project images and explore the brand evolution
        </p>
      </header>
      
      <div className="bento-grid">
        {bentoItems.map((item) => (
          <div 
            key={item.id}
            className={`bento-item ${item.type} ${activeSection === item.id ? 'active' : ''}`}
            style={{ gridArea: item.gridArea }}
            onClick={() => handleItemClick(item)}
          >
            <div className="bento-content">
              <div className="bento-image-placeholder">
                <span className="placeholder-text">{item.imagePlaceholder}</span>
                <div className="image-overlay">
                  <span className="overlay-icon">📸</span>
                </div>
              </div>
              
              <div className="bento-text">
                <h3 className="item-title">{item.title}</h3>
                <p className="item-subtitle">{item.subtitle}</p>
                {activeSection === item.id && (
                  <p className="item-description">{item.description}</p>
                )}
              </div>
              
              <div className="bento-indicator">
                <span className={`indicator-dot ${item.type}`}></span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <footer className="bento-footer">
        <p className="footer-text">
          Strategic brand evolution through design thinking & creative direction
        </p>
        <p className="footer-note">
          This is a template - replace placeholders with your EDITED project images
        </p>
      </footer>
    </div>
  );
};

export default EditedBento; 