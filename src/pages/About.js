import React, { useState } from "react";
import "../pages/About.css"; // Import the styles

function About({ isVisible, toggleContentVisibility }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggleContent = () => {
    setIsExpanded((prev) => {
      console.log("isExpanded:", !prev);
      return !prev;
    });
    toggleContentVisibility("about");
  };

  return (
    <div className="abstand">
      <p> Creator & Art Director with focus on
      building holistic digital and spatial experiences</p> 
    
      {/* CTA Button */}
      <button onClick={handleToggleContent} className="cta-button">
        {isExpanded ? "Read Less" : "Read More About My Journey"}
      </button>

      {/* Collapsible Section with Scroll */}
      {isExpanded && (
        <div className="about-details">
          <p>
          Never stopped playing and being curious: for 12 years, I've designed 
          holistic, humanity-first experiences that elevate how people connect—with 
          each other and with how they consume. Rooted in visual communication 
          and guided by curiosity, my practice blends branding, user interaction, and 
          creative direction to explore where emotion, 
          narrative, and systems thinking intersect. The future demands new ways of 
          engaging our senses and rethinking how we source and interact with goods. 
          I'm actively seeking new opportunities, also in AR, VR, and MR. — to me, 
          design isn't just about aesthetics; it's about shaping what we pay attention to, what we value, and how we experience the world.
          <p>Worked with</p>
        <p> DAYONE x VOLKSWAGEN x HELLA GUTMANN / CARHARTT WIP / EDITED / ABOUT YOU /
        PLASTIC MEDIA x INDIE x MATERIAL GIRL x MONKI / HEROES & HEROINES x BUMBLE x ABSOLUT x HENNESSY x TALLY WEIJL / SUPERREAL x COMMA' / CONIC ROSE / SCHINKEL PAVILLION / MONA.M / JOVANA REISINGER /
        MONOPOL x BIORAMA x THE GAP x DIE GRÜNEN x JOYA  </p>
        </p>
        </div>
      )}
    </div>
  );
}

export default About;