import React, { useState, useEffect } from 'react';
import './ClimateBot.css';
import stoneImage from '../../Assets/stone.png';

const ClimateBot = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [
    {
      id: 'design',
      title: 'How do you approach design?',
      color: '#000',
      position: { bottom: '140px', right: '100px' },
      fact: "I design holistic solutions that consider the entire user ecosystem"
    },
    {
      id: 'mindful',
      title: 'What\'s your design philosophy?',
      color: '#000',
      position: { bottom: '80px', right: '220px' },
      fact: "Good intentions, less waste, circularity, new material exploration, invest and risk"
    },
    {
      id: 'future',
      title: 'Who do you design for?',
      color: '#000',
      position: { bottom: '140px', right: '340px' },
      fact: "I design for humanity, not just usability - considering social impact, equity, and environmental consequences"
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleStoneClick = () => {
    if (selectedCategory) {
      setSelectedCategory(null);
    } else {
      setShowCategories(!showCategories);
    }
  };

  const handleCategoryClick = (category, e) => {
    e.stopPropagation();
    if (selectedCategory?.id === category.id) {
      // Deselect if same category clicked
      setSelectedCategory(null);
    } else {
      // Select new category
      setSelectedCategory(category);
    }
  };



  return (
    <div className="climate-game-container">
      {/* Stone Button */}
      <div 
        className={`climate-earth ${isVisible ? 'visible' : ''} ${showCategories ? 'expanded' : ''}`}
        onClick={handleStoneClick}
      >
        <div className="earth-core">
          <img 
            src={stoneImage} 
            alt="Stone" 
            className="stone-image"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.parentElement.innerHTML = '<span class="earth-emoji">🪨</span>';
            }}
          />
        </div>
      </div>

      {/* Category Bubbles */}
      {showCategories && categories.map((category, index) => (
        <div
          key={category.id}
          className={`floating-category ${showCategories ? 'visible' : ''} ${selectedCategory?.id === category.id ? 'active' : ''}`}
          style={{
            ...category.position,
            '--category-color': category.color,
            animationDelay: `${index * 0.1}s`
          }}
          onClick={(e) => handleCategoryClick(category, e)}
        >
          <div className="category-content">
            {selectedCategory?.id === category.id ? (
              <div className="category-fact">
                <div className="fact-text">{category.fact}</div>
              </div>
            ) : (
              <span className="category-text">{category.title}</span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ClimateBot; 