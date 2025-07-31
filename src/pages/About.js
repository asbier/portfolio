import React, { useState, useRef } from "react";
import "../pages/About.css"; // Import the styles

function About({ isVisible, toggleContentVisibility }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showTimeline, setShowTimeline] = useState(false);
  const timelineRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleToggleContent = () => {
    console.log("Button clicked");
    // Close timeline when opening read more
    if (!isExpanded) {
      setShowTimeline(false);
    }
    setIsExpanded((prev) => {
      console.log("isExpanded:", !prev);
      return !prev;
    });
  };

  const handleToggleTimeline = () => {
    // Close read more when opening timeline
    if (!showTimeline) {
      setIsExpanded(false);
    }
    setShowTimeline((prev) => !prev);
  };

  // Drag to scroll handlers
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - timelineRef.current.offsetLeft);
    setScrollLeft(timelineRef.current.scrollLeft);
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - timelineRef.current.offsetLeft);
    setScrollLeft(timelineRef.current.scrollLeft);
    e.stopPropagation();
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - timelineRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed
    timelineRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    // Don't prevent default on mobile to allow native scrolling
    const x = e.touches[0].pageX - timelineRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // Reduced scroll speed for mobile
    timelineRef.current.scrollLeft = scrollLeft - walk;
  };

  const timelineData = [
    {
      year: "2022 to 2025",
      title: "UX/UI Consultant",
      company: "DAYONE x VOLKSWAGEN",
      role: "UX Designer & Digital Consultant",
      description: "UX Design, Research, Ideation & UX strategy for VW's AutoSuche, optimizing e-commerce for sustainable car sales",
      type: "current",
      image: "/timeline/dayone.jpg"
    },

    {
      year: "2021",
      title: "E-Commerce UX",
      company: "Carhartt WIP",
      role: "UX/UI Designer",
      description: "Design system migration, checkout optimization, help center launch",
      type: "ux",
      image: "/timeline/carhartt.jpg"
    },
    {
      year: "2019",
      title: "Leadership",
      company: "We22 GmbH - Websitebuilder",
      role: "Team Lead Design",
      description: "Led Team motivation and craeted  design systems for Telekom & Strato, cross-functional",
      type: "leadership",
      image: "/timeline/we22.jpg"
    },
    {
      year: "2015",
      title: "Art Direction Holistic Brand",
      company: "EDITED / AboutYou",
      role: "2015 Designer became 2016 Art Director",
      description: "Holistic brand experiences across digital & spatial touchpoints, diversity campaigns, strategic brand direction",
      type: "digital",
      image: "/timeline/edited.jpg"
    },
    {
      year: "2015",
      title: "Editorial Freelance",
      company: "SuperReal",
      role: "Freelance Art Director",
      description: "COMMA StyleMagazine",
      type: "editorial",
      image: "/timeline/SuperReal.jpg"
    },
    {
      year: "2014",
      title: "Art Direction Agency",
      company: "Monopol Media GmbH",
      role: "Art Director",
      description: "Full-time Art Director position for 1 year at Monopol Media, BIORAMA & The Gap redesigns",
      type: "editorial",
      image: "/timeline/monopol.jpg"
    },
    {
      year: "2013",
      title: "Industry Entry",
      company: "Plastic Media / Heroes&Heroines",
      role: "Intern → Freelancer",
      description: "INDIE Magazine, Bumble, Absolut Events with my mentor Daniela Bily",
      type: "editorial",
      image: "/timeline/plastic.jpg"
    },
    {
      year: "2012",
      title: "Foundation",
      company: "Nido Magazine / G+J",
      role: "Editorial Designer",
      description: "Layout design, illustrations, visual storytelling",
      type: "foundation",
      image: "/timeline/nido.jpg"
    },
    {
      year: "2007",
      title: "Creative Roots",
      company: "Staatstheater Braunschweig",
      role: "Stage & Costume Design",
      description: "12-month internship in theater design, graphic arts foundation",
      type: "foundation",
      image: "/timeline/theater.jpg"
    }
  ];

  return (
    <div className="abstand">
      <p>Creator & Art Director with focus on
      building holistic digital and spatial experiences</p> 
    
      {/* CTA Buttons */}
      <div className="cta-buttons">
        <button onClick={handleToggleContent} className="cta-button">
          {isExpanded ? "Read Less" : "Read More About My Journey"}
        </button>
        <button onClick={handleToggleTimeline} className="cta-button cta-timeline">
          {showTimeline ? "Hide Timeline" : "View Timeline"}
        </button>
        <a 
          href="/cv-annemarie-sauerbier.pdf" 
          download="CV-Annemarie-Sauerbier.pdf"
          className="cta-button cta-download"
        >
          ↓ Download CV
        </a>
      </div>

      {/* Timeline Section - Collapsible like about-details */}
      <div className={`timeline-container ${showTimeline ? 'expanded' : ''}`}>
        <div 
          className="timeline-wrapper"
          ref={timelineRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onTouchMove={handleTouchMove}
        >
          <div className="timeline">
                          {timelineData.map((item, index) => (
                <div key={index} className={`timeline-item ${item.type}`}>
                  <div className="timeline-year">{item.year}</div>
                  <div className="timeline-image">
                    <img src={item.image} alt={item.company} />
                  </div>
                  <div className="timeline-content">
                    <div className="timeline-title">{item.title}</div>
                    <div className="timeline-company">{item.company}</div>
                    <div className="timeline-role">{item.role}</div>
                    <div className="timeline-description">{item.description}</div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* Collapsible Section with Scroll */}
      {isExpanded && (
        <div className="about-details">
          <div className="text-column">
            <p> 
              I never stopped playing or staying curious.
            
    For over 12 years, I've been designing holistic, humanity-first experiences that elevate how people connect — with each other, with systems, and with the ways they consume. Rooted in visual communication and guided by intuition and experimentation, my practice blends branding, user interaction, and creative direction to explore the space where emotion, narrative, and systems thinking intersect.
            </p>
          </div>
          
          <div className="text-column">
            <p>
              The future demands new ways of engaging our senses, rethinking materials, and reimagining how we source, perceive, and experience goods. I'm currently deepening my data fluency and am actively seeking new opportunities — also in AR, VR, or MR — where analogue meets digital, and conceptual design can shape new worlds.
        
           
              To me, design isn't just about aesthetics; it's about shaping what we pay attention to, what we value, and how we engage with the world.
            </p>
          </div>
          
          <div className="full-width">
            <p>Worked with</p>
            
            <p>
              DAYONE x VOLKSWAGEN x HELLA GUTMANN / CARHARTT WIP / EDITED / ABOUT YOU /
              PLASTIC MEDIA x INDIE x MATERIAL GIRL x MONKI / HEROES & HEROINES x BUMBLE x ABSOLUT x HENNESSY x TALLY WEIJL / SUPERREAL x COMMA' / CONIC ROSE / SCHINKEL PAVILLION / MONA.M / JOVANA REISINGER /
              MONOPOL x BIORAMA x THE GAP x DIE GRÜNEN x JOYA
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default About;