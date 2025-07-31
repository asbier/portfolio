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
      As a Product Designer at DAYONE, I balanced design and business strategy, with Volkswagen as my main client.
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
      <h3><strong>UX/UI Team</strong></h3>
      <ul className="list">
        <li><b>Digital Design Lead AccentureSong</b> Odair Faléco</li>
        <li><b>UX/UI Designer AccentureSong</b> Marina Meinhardt</li>
        <li><b>UX Product-Designer DAYONE</b> Annemarie Sauerbier</li>
        <li><b>UX/UI Product-Designer DAYONE</b> Skirmante Radvucuite</li>
        <li><b>UX/UI Designer DAYONE</b> Anna Kutíková</li>
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
    <p>I designed a category slider that simplified vehicle selection, transforming complex filters into an intuitive, visual experience that guided users through their car selection journey.</p>
    
    <figure className="image-gallery">
      <img src={Image10} alt="Wireframe Slider" />
      <img src={Image9} alt="Final Slider" />
      <figcaption className="image-caption">Design evolution: Wireframe to final implementation</figcaption>
    </figure>
    
    <h3><strong>Solution</strong></h3>
    <p>Created an intuitive category slider that simplified vehicle selection, reducing complexity and improving user engagement through visual, guided interactions.</p>
    
    <div className="video-gallery">
      <div className="video-wrapper">
        <video ref={videoRefs[0]} src={video1} muted loop playsInline></video>
      </div>
    </div>
    <figcaption className="image-caption">Demo: New filter experience</figcaption>
    
    <h3><strong>Impact</strong></h3>
    <p>The new filter experience significantly improved user engagement and reduced bounce rates, making vehicle selection more intuitive and enjoyable for Volkswagen customers.</p>
  </section>
);

const Takeaway = () => (
  <section className="modal-section">
    <h2>Key Learnings</h2>
    <ul className="checklist">
      <li>Simplified complex interfaces through visual design</li>
      <li>Balanced business requirements with user needs</li>
      <li>Collaborated effectively across multiple design teams</li>
      <li>Delivered measurable improvements in user engagement</li>
    </ul>
  </section>
);

const Links = () => (
  <p>
    <a href="https://www.dayone.de" target="_blank" rel="noopener noreferrer">
      ➞ See Live on DAYONE
    </a>
  </p>
);

export default DayoneModalContent;
