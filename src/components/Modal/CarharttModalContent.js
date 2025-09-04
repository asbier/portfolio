import React, { useRef, useEffect, useState } from 'react';

import './modal-common.css';
import Image1 from '../../Assets/Image_1_carhartt_wip/Image1.png';
import Image2 from '../../Assets/Image_1_carhartt_wip/Image2.png';
import Image4 from '../../Assets/Image_1_carhartt_wip/Vido_Implemetation.png';
import Image6 from '../../Assets/Image_1_carhartt_wip/before_guidescheckout.png';
import Image7 from '../../Assets/Image_1_carhartt_wip/new-card-features.png';
import Image8 from '../../Assets/Image_1_carhartt_wip/Designsystem.png';
import Image9 from '../../Assets/Image_1_carhartt_wip/outcome_filternav.png';
import Image10 from '../../Assets/Image_1_carhartt_wip/Design in Sketch.png';
import Image11 from '../../Assets/Image_1_carhartt_wip/Helpflow.png';
import Image12 from '../../Assets/Image_1_carhartt_wip/specsFAQ.png';
import Image13 from '../../Assets/Image_1_carhartt_wip/Video Desktop.png';

const CarharttModalContent = () => {
   const [videoRefs] = useState([
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null)
      ]);
     useEffect(() => {
  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      const video = entry.target;
      if (entry.isIntersecting) {
        video.play();
      } else {
        video.pause();
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, []);

    
      return (
      <div className="modal-content-container">
        <h1>Carhartt WIP</h1>
        <p>
          <strong>Carhartt Work In Progress (Carhartt WIP) forms a division of the American brand Carhartt, pioneering workwear since 1889. Founded in Europe in 1989, Carhartt WIP adapts core product characteristics for consumers who value refined design and quality while remaining true to Carhartt's brand origins. ©CARHARRT-WIP</strong>
        </p>
        <p className="role-description">
          As UX/UI Designer at Carhartt WIP, I optimized e-commerce experiences and mobile-first solutions across US and European markets.
        </p>
        
        <div className="column">
          <div>
            <h3><strong>My Role</strong></h3>
            <ul className="checklist">
              <li>UX Design</li>
              <li>UI Design</li>
              <li>Strategy</li>
            </ul>
          </div>
          <div>
            <h3><strong>UX/UI Team</strong></h3>
            <ul className="list">
              <li><b>Digital Design Lead</b> Lutz Erian</li>
              <li><b>UX/UI Designer</b> Annemarie Sauerbier</li>
            </ul>
          </div>
        </div>

        <section className="modal-section">
          <h2>Design System Migration & Component Optimization</h2>
          
          <h3><strong>Challenge</strong></h3>
          <p>Carhartt WIP needed to modernize their design workflow and improve e-commerce experiences across US and European markets. Previous research had been conducted, and I was brought in to execute design solutions based on existing findings.</p>
          
          <h3><strong>My Approach</strong></h3>
          <p>I started by transforming the existing Sketch design system to Figma, updating and optimizing components for better team collaboration. This systematic approach allowed me to understand the current state and identify improvement opportunities.</p>
          
          <h3><strong>Solution</strong></h3>
          <p>Successfully migrated the entire design system from Sketch to Figma, updating components and establishing a more efficient design workflow for the team.</p>
          
          <figure className="image-gallery">
            <img src={Image10} alt="From Sketch"/>
            <img src={Image8} alt="To Figma"/>
            <figcaption className="image-caption">Design system evolution: Sketch to Figma</figcaption>
          </figure>
        </section>

        <section className="modal-section">
          <h2>E-commerce Optimization & Mobile-First Design</h2>
          
          <h3><strong>Challenge</strong></h3>
          <p>Carhartt WIP needed to improve their e-commerce platform's user experience, particularly focusing on mobile performance and conversion optimization.</p>
          
          <h3><strong>My Approach</strong></h3>
          <p>I focused on mobile-first design principles, optimizing checkout flows, product filtering, and implementing responsive design patterns that enhanced user engagement across all devices.</p>
          
          <h3><strong>Solution</strong></h3>
          <p>Redesigned key e-commerce components including product cards, checkout process, and navigation systems, resulting in improved mobile user experience and conversion rates.</p>
          
          <figure className="image-gallery">
            <img src={Image6} alt="Before: Checkout Process"/>
            <img src={Image7} alt="After: Optimized Cards"/>
            <figcaption className="image-caption">E-commerce optimization: Before and after</figcaption>
          </figure>
        </section>

        <section className="modal-section">
          <h2>Help System & User Support Enhancement</h2>
          
          <h3><strong>Challenge</strong></h3>
          <p>Carhartt WIP needed to improve their customer support system and help users navigate their e-commerce platform more effectively.</p>
          
          <h3><strong>My Approach</strong></h3>
          <p>I designed an intuitive help system with improved FAQ sections, interactive guides, and contextual support that reduced customer service inquiries and improved user satisfaction.</p>
          
          <h3><strong>Solution</strong></h3>
          <p>Implemented a comprehensive help system with video tutorials, interactive guides, and contextual support features that enhanced user experience and reduced support tickets.</p>
          
          <figure className="image-gallery">
            <img src={Image11} alt="Help Flow Design"/>
            <img src={Image12} alt="FAQ Specifications"/>
            <figcaption className="image-caption">Help system: Flow design and FAQ specifications</figcaption>
          </figure>
        </section>

        <section className="modal-section">
          <h2>Video Implementation & Interactive Content</h2>
          
          <h3><strong>Challenge</strong></h3>
          <p>Carhartt WIP wanted to enhance their digital presence with engaging video content and interactive elements that would showcase their products more effectively.</p>
          
          <h3><strong>My Approach</strong></h3>
          <p>I designed and implemented video integration systems, creating interactive product showcases and promotional content that enhanced user engagement and brand storytelling.</p>
          
          <h3><strong>Solution</strong></h3>
          <p>Successfully integrated video content throughout the platform, including product showcases, promotional materials, and interactive elements that improved user engagement and brand perception.</p>
          
          <figure className="image-gallery">
            <img src={Image4} alt="Video Implementation"/>
            <img src={Image13} alt="Desktop Video"/>
            <figcaption className="image-caption">Video implementation: Mobile and desktop experiences</figcaption>
          </figure>
        </section>

        <section className="modal-section">
          <h2>Outcome & Impact</h2>
          
          <h3><strong>Key Achievements</strong></h3>
          <ul className="checklist">
            <li>Successfully migrated design system from Sketch to Figma</li>
            <li>Optimized e-commerce platform for mobile-first experience</li>
            <li>Implemented comprehensive help system reducing support tickets</li>
            <li>Enhanced user engagement through video content integration</li>
            <li>Improved conversion rates across US and European markets</li>
          </ul>

               
        </section>
      </div>
    );
};

export default CarharttModalContent;