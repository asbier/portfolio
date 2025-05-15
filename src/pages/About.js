import React, { useState } from "react";
import "../pages/About.css"; // Import the styles

function About({ isVisible, toggleContentVisibility }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggleContent = () => {
    setIsExpanded((prev) => !prev);
    toggleContentVisibility("about"); // This will update App.js state
  };

  return (
    <div className="abstand">
      <h2>Annemarie is a multidisciplinary designer based in Berlin</h2>
      <p>
        Select Clients: DAYONExVolkswagen / Carhartt-WIP / EDITED / AboutYou /
        Plastic Media / SuperRealxComma / CONIC ROSE / MonaM
      </p>

      {/* CTA Button */}
      <button onClick={handleToggleContent} className="cta-button">
        {isExpanded ? "Read Less" : "Read More About My Journey"}
      </button>

      {/* Collapsible Section with Scroll */}
      {isExpanded && (
        <div className="about-details">
          <p>
            Annemarie’s design practice spans branding, interaction, and creative direction. 
            With a background in visual communication and new media, she develops visual 
            languages that are intuitive and exploratory. Her work explores emotion, interface, 
            and storytelling, often merging art and commercial contexts.
          </p>
        </div>
      )}
    </div>
  );
}

export default About;