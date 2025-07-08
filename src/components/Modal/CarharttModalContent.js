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

import video1 from '../../Assets/Image_1_carhartt_wip/Helpdesk_live.mp4';
import video2 from '../../Assets/Image_1_carhartt_wip/MM_Phone_PH-G-12.mp4';
import video3 from '../../Assets/Image_1_carhartt_wip/CardDesign.mp4';
import video4 from '../../Assets/Image_1_carhartt_wip/Video_comp_final.mp4';



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
            <h3><strong>UX/UITeam</strong></h3>
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
          <h2>Mobile Filter Experience & Navigation</h2>
          
          <h3><strong>Challenge</strong></h3>
          <p>Mobile users struggled with product discovery and filtering, especially on smaller screens where navigation needed to be more intuitive and accessible.</p>
          
          <h3><strong>Solution</strong></h3>
          <p>Developed an improved mobile filter experience including toggle functionality and enhanced navigation that made product discovery more efficient on mobile devices.</p>
          
          <figure className="image-gallery">
            <img src={Image9} alt="Filter navigation"/>
            <figcaption className="image-caption">Enhanced mobile filtering and navigation with toggle functionality</figcaption>
          </figure>
        </section>

        <section className="modal-section">
          <h2>Video Implementation & Content Strategy</h2>
          
          <h3><strong>Challenge</strong></h3>
          <p>The brand needed better material presentation and content planning to showcase products more effectively and engage customers.</p>
          
          <h3><strong>Solution</strong></h3>
          <p>Implemented video and GIF integration systems to better showcase product materials and developed an improved content strategy for product presentation.</p>
          
          <figure className="image-gallery">
            <img src={Image4} alt="Video implementation"/>
            <figcaption className="image-caption">Video and GIF integration system for better product showcase</figcaption>
          </figure>

          <div className="video-gallery">
            <div className="video-wrapper">
              <video ref={videoRefs[3]} src={video4} muted loop playsInline></video>
            </div>
          </div>
        </section>

        <section className="modal-section">
          <h2>Help Desk System - Corona Response</h2>
          
          <h3><strong>Challenge</strong></h3>
          <p>During Corona, online purchasing surged and the sales team and US team were overwhelmed with customer emails. They urgently needed a solution to handle the increased customer support volume efficiently.</p>
          
                     <h3><strong>My Approach</strong></h3>
           <p>While the decision to create a help desk was driven by the sales team's urgent needs, my approach focused on research-based design. I designed a modern, mobile-friendly version that provides enough information for users to self-organize their questions and includes functionality for sending articles back to customers.</p>
           
           <h3><strong>Solution</strong></h3>
           <p>Created a comprehensive help desk system with intuitive user flows, mobile optimization, and an integrated FAQ system that enables customer self-service while providing support agents with tools to efficiently share relevant articles and information.</p>
          
          <figure className="image-gallery">
            <img src={Image11} alt="Help flow"/>
            <img src={Image12} alt="FAQ specs"/>
            <figcaption className="image-caption">Help desk user flows and FAQ system</figcaption>
          </figure>

          <div className="video-gallery">
            <div className="video-wrapper">
              <video ref={videoRefs[0]} src={video1} muted loop playsInline></video>
            </div>
          </div>
          <figcaption className="image-caption">Live help desk implementation</figcaption>

          <h3><strong>Impact</strong></h3>
          <p>The new help desk system significantly reduced customer support resolution time and improved customer satisfaction scores across both US and European markets.</p>
        </section>

        <section className="modal-section">
          <h2>Checkout Optimization</h2>
          
          <figure className="image-gallery">
            <img src={Image13} alt="Carhartt platforms"/>
            <img src={Image1} alt="US site"/>
            <img src={Image2} alt="EU site"/>
            <figcaption className="image-caption">Carhartt-WIP.US & Carhartt-WIP.EU</figcaption>
          </figure>

          <div className="video-gallery">
            <div className="video-wrapper">
              <video ref={videoRefs[1]} src={video2} muted loop playsInline></video>
            </div>
          </div>

          <h3><strong>Challenge</strong></h3>
          <p>The standard Shopify checkout was limiting conversion rates with complex flows and lack of modern payment options across US and European markets.</p>
          
          <h3><strong>Solution</strong></h3>
          <p>Replaced standard Shopify checkout with custom fast-checkout solution, adding Apple Pay, real-time order adjustments, and mobile optimization.</p>

          <figure className="image-gallery">
            <img src={Image6} alt="Before checkout"/>
            <figcaption className="image-caption">Before: Standard checkout with limitations</figcaption>
          </figure>

          <figure className="image-gallery">
            <img src={Image7} alt="New checkout"/>
            <figcaption className="image-caption">After: Smart checkout with fast payment options</figcaption>
          </figure>

          <div className="video-gallery">
            <div className="video-wrapper">
              <video ref={videoRefs[2]} src={video3} muted loop playsInline></video>
            </div>
          </div>
          <figcaption className="image-caption">New shopping cart design for EU/Germany</figcaption>

          <h3><strong>Impact</strong></h3>
          <p>The systematic approach—from design system migration through mobile optimization, content strategy, and checkout improvements to emergency help desk implementation—significantly enhanced the overall e-commerce experience and customer support efficiency across both US and European markets.</p>
        </section>

        <p>
          <a href="https://www.carhartt-wip.com/de" target="_blank" rel="noopener noreferrer">
            ➞ See Live on Carhartt-WIP EU
          </a>
          <br />
          <a href="https://us.carhartt-wip.com/?cl=true" target="_blank" rel="noopener noreferrer">
            ➞ See Live on Carhartt-WIP US
          </a>
        </p>

    </div>
);
};
export default CarharttModalContent;