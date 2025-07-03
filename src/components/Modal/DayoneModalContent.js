import React, { useRef, useEffect, useState } from 'react';
import './modal-common.css';
import Image1 from '../../Assets/Image_0_dayone/before.png';
import Image2 from '../../Assets/Image_0_dayone/Release.png';
import Image4 from '../../Assets/Image_0_dayone/Insights User 4.png';
import Image5 from '../../Assets/Image_0_dayone/insight-UserDay.png';
import Image6 from '../../Assets/Image_0_dayone/Insights User 3.png';
import Image7 from '../../Assets/Image_0_dayone/outcome.png';
import Image8 from '../../Assets/Image_0_dayone/Insight2.png';
import Image9 from '../../Assets/Image_0_dayone/slider-final.png';
import Image10 from '../../Assets/Image_0_dayone/wireframe-slider.png';

import video1 from '../../Assets/Image_0_dayone/Demo New Filter Experience video.mp4';
import video2 from '../../Assets/Image_0_dayone/PDPvideo.mp4'; // Example path

const DayoneModalContent = () => {
  const [videoRefs] = useState([useRef(null), useRef(null)]);

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          videoRefs[index].current.play();
        } else {
          videoRefs[index].current.pause();
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, { threshold: 0.5 });
    videoRefs.forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      videoRefs.forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, [videoRefs]);

  return (
    <div className="modal-content-container">
      <Header />
      <RoleAndTeam />
      <GlobalFilterExperience videoRefs={videoRefs} />
      <Takeaway />
      <Links />
    </div>
  );
};

const Header = () => (
  <>
    <h1>DAYONE</h1>
    <p><strong>DAYONE provides innovative consulting and design services for digital transformation. © DAYONE</strong></p>
    <p className="role-description">
      As Product Designer at DAYONE, I balanced design, leadership, and strategy with Volkswagen as my main client. Working as the German knowledge base with Accenture's international team, I brought local market expertise to global design solutions.
    </p>
  </>
);

const RoleAndTeam = () => (
  <div className="column">
    <div>
      <h3><strong>My Role</strong></h3>
      <ul className="checklist">
        <li><b>UX</b></li>
        <li><b>UI</b></li>
        <li><b>Strategy</b></li>
      </ul>
    </div>
    <div>
      <h3><strong>Our Design Team for UX/UI</strong></h3>
      <ul className="list">
        <li><b>Digital Design Lead AccentureSong</b> Odair Faléco</li>
        <li><b>UX/UI Designer AccentureSong</b> Marina Meinhardt</li>
        <li><b>UX Product-Designer DAYONE</b> Annemarie Sauerbier</li>
        <li><b>UX/UI Product-Designer DAYONE</b> Skirmante Radvucuite</li>
      </ul>
    </div>
  </div>
);

const GlobalFilterExperience = ({ videoRefs }) => (
  <section className="modal-section">
    <h2>Category Slider → led to a new Global Filter Experience</h2>
    
    <figure className="image-gallery">
      <img src={Image1} alt="Before" />
      <figcaption className="image-caption">VW.de 2022 Group Stock Locator "Before"</figcaption>
    </figure>
    
    <h3><strong>Challenge</strong></h3>
    <p>Volkswagen's online vehicle finder was too complex. Users struggled to find cars and had high bounce rates when trying to search manually.</p>
    
    <h3><strong>The Question</strong></h3>
    <p>How might we help users find their ideal vehicle in a simple, engaging way?</p>
    
    <h3><strong>My Approach</strong></h3>
    <p>I analyzed the user research that had taken place to understand the core problem: buyers preferred "shopping by lifestyle" over technical filters. Research also showed that category sliders used on the website currently had no use for users - they needed more relevant topics, better structure, and functionality that actually works on mobile devices. Through user interviews, heatmap analysis, and competitive benchmarking, I identified that successful sites use simple, high-level categories first.</p>
    
    <figure className="image-gallery">
      <img src={Image5} alt="Research" />
      <img src={Image4} alt="User Insights" />
      <img src={Image6} alt="User Research" />
      <figcaption className="image-caption">User research insights and analysis</figcaption>
    </figure>
    
    <h3><strong>Solution</strong></h3>
    <p>I designed "The Category Slider" - simple lifestyle-based filters that guide users to their ideal vehicle type. This personalized approach replaced complex technical filters with intuitive categories.</p>
    
    <div className="filter-chips-container">
      <div className="filter-chip">Electro & Hybrid</div>
      <div className="filter-chip">Models for Families</div>
      <div className="filter-chip">Economical Models & Under 20.000€</div>
      <div className="filter-chip">Sporty Models</div>
      <div className="filter-chip">Offroad Models</div>
    </div>

    <figure className="image-gallery">
      <img src={Image10} alt="Slider" />
      <figcaption className="image-caption">Category Slider wireframe</figcaption>
    </figure>
    <figure className="image-gallery">
      <img src={Image8} alt="Slider" />
      <img src={Image9} alt="Research" />
      <figcaption className="image-caption">Final implementation</figcaption>
    </figure>
    
    <div className="video-gallery">
      <div className="video-wrapper">
        <video ref={videoRefs[0]} src={video1} muted loop playsInline></video>
      </div>
      <div className="video-wrapper">
        <video ref={videoRefs[1]} src={video2} muted loop playsInline></video>
      </div>
    </div>
    
    <h3><strong>Impact</strong></h3>
    <p>The impact of this consultancy was significant: rather than just implementing the category slider on the landing page, my analysis revealed the need for a complete user journey transformation. We created an entirely upgraded experience with a comprehensive filter concept, enhanced search functionalities, redesigned product detail pages, and mobile-optimized interactions throughout.</p>
    
    <figure className="image-gallery">
      <img src={Image2} alt="Project Outcome" />
      <figcaption className="image-caption">Project outcomes and impact metrics</figcaption>
    </figure>
  </section>
);

const Takeaway = () => (
  <section className="modal-section">
    <h3><strong>Key Takeaway</strong></h3>
    <p>My takeaway is that every idea can open up new opportunities that lead to a deeper understanding of what users truly need and ask for. This is a great example of how I like to work—transforming a small idea into a big change with a positive outcome for the user.</p>
    <figure className="image-gallery">
      <img src={Image7} alt="Filtercockpit Live" />
      <figcaption className="image-caption"> Next Task was building the Global Filter Concept -> This is the Live Version from June 2024</figcaption>
    </figure>
  </section>
);

const Links = () => (
  <p>
    <a href="https://www.volkswagen.de/de/modelle/verfuegbare-fahrzeuge.html" target="_blank" rel="noopener noreferrer">
      → See the Product Live
    </a>
    <br />
    <a href="https://www.dayone.de" target="_blank" rel="noopener noreferrer">
      → Learn more about DAYONE
    </a>
  </p>
);

export default DayoneModalContent;
