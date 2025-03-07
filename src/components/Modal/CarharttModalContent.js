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
            <strong>Carhartt Work In Progress (Carhartt WIP)</strong> forms a division of the
            American brand Carhartt, one of the first companies to pioneer workwear in the USA.
            Founded in Europe in 1989, 100 years after Hamilton Carhartt established 
            his business in Detroit, Carhartt WIP
            has been carefully adapting and modifying Carhartt's core product characteristics for a different audience
            of consumers who value refined design and quality while still remaining true to Carhartt's brand origins.
            ©CARHARRT-WIP
        </p>
        
        <div className="column">
  <h3><strong>My Role</strong></h3>
  <ul className="list" >
    <li className="fontWeight">UX </li>
    <li className="fontWeight">UI </li>
    <li className="fontWeight">Strategy</li>

  </ul>
  <h3><strong>Our Design Team for UX /UI </strong></h3>
  <ul className="list" >
  <li className="list">Digital Design Lead, Lutz Erian </li><p></p>
    <li className="fontWeight"> UX Designer, Annemarie Sauerbier </li>
  </ul>
</div>

        
        <figure className="image-gallery">
        <img src={Image13} alt="Research"/>
                <img src={Image1} alt="Research"/>
                <img src={Image2} alt="Research"/>
                <figcaption className="image-caption">Carhartt-WIP.US & Carhartt-WIP.EU</figcaption>
            </figure>

            <div className="video-gallery">
          <video ref={videoRefs[1]} src={video2} muted loop playsInline></video>
        </div>
        <section className="modal-section">

            <h1>Help Yourself - Help Desk development</h1>
            <p>Time <big>→</big> Within 3 Month live</p>
            <div className="column">
                <h3><strong>Deliverables</strong></h3>
                <ul>
                    <li className="fontWeight">UX Concept, Prototypes, UI Design</li>
                </ul>
            </div>

        
            <h3><strong>Challenge</strong></h3>
            <p>As UX Designer within the Digital Design Team at Carhartt, I was tasked with addressing several key
                challenges, blending both UX and UI design to create holistic solutions that improved user
                experience across various platforms.
            </p>Inifficient Customer Support.
            Users struggled with accessing
            help and support, making it difficult for them to resolve issues efficiently on both the web and app
            platforms.

            <h3><strong>Process</strong></h3>
            I conducted benchmark research, identifying key pain points and understanding the needs of our target
            audience. I mapped out the user journey to highlight friction points and collaborated directly with
            developers to ensure technical feasibility. We presented my findings and solutions to the dev team, ensuring
            alignment on user needs and design requirements.

        
            <figure className="image-gallery">
                    <img src={Image11} alt="Research"/>
                    <img src={Image12} alt="Research"/>
                    <figcaption className="image-caption">HelpDesk Flow</figcaption>
                </figure>
                <p></p>
            <h3><strong>Solution</strong></h3>
           <p>
                I developed intuitive user flows and interfaces that made it easier for customers to access support,
                track their requests, and receive timely updates. The improved design significantly reduced
                service request resolution time and increased customer satisfaction.
            </p>

            <div className="video-gallery">
          <video ref={videoRefs[0]} src={video1} muted loop playsInline></video>
          </div>
          <figcaption className="image-caption">Helpdesk Live</figcaption>

        </section>

        <section className="modal-section">
            <div>
                <h1>Easy Checkout - Experience Optimization</h1>
                <p>Time <big> → </big>Within 2 Month Live</p>
                <p></p>
                <p></p>
                As a UX Designer within the Digital Design Team at Carhartt, 
                I was responsible for optimizing the checkout experience 
                across multiple regions. The existing checkout process was a standard Shopify flow, lacking flexibility for order adjustments, real-time status updates, and fast-payment options. Our goal was to create a smart, seamless, and efficient checkout tailored for Carhartt WIP customers in the US and Europe/Germany, ensuring an improved conversion rate and customer satisfaction.
                <p>
                <figure className="image-gallery">
                    <img src={Image6} alt="Research"/>
                    <figcaption className="image-caption">Before: A standard guided checkout—no order edits, status updates, or fast-payment options.</figcaption>
                </figure>
                <p></p>

                    </p>Process<p></p>
                    I started by conducting benchmark research to identify pain points and analyze 
                    competitor solutions. Then, I mapped out the user journey to pinpoint friction 
                    areas and collaborated with developers to ensure technical feasibility. Through prototyping and iterative design, we fine-tuned the checkout experience, focusing on improving usability and streamlining the process. The findings and solutions were presented to the development 
                    team to align on user needs and ensure seamless integration of the new features.

                <figure className="image-gallery">
                    <img src={Image7} alt="Research"/>
                    <figcaption className="image-caption">New Cart Design Features, aswell as a smart-Checkout</figcaption>
                </figure>

                <div className="video-gallery">
          <video ref={videoRefs[2]} src={video3} muted loop playsInline></video>
        </div>
        <figcaption className="image-caption">New Shopping Cart Design for EU/Germ</figcaption>

                <p>Solution<p></p>
                <p>  The final solution introduced a smart checkout experience, replacing the default Shopify checkout with a custom fast-checkout solution tailored for Carhartt WIP US and Europe/Germany. Key improvements included:</p>
        <ul className="checklist">
          <li className="fontWeight">New Cart Design Features – Enhanced visual hierarchy for improved usability.</li>
          <li className="fontWeight">One-Click Fast Payment Options – Seamless integrations with Apple Pay, Google Pay, and PayPal.</li>
          <li className="fontWeight">Real-Time Order Adjustments – Allowing users to modify their orders before finalizing.</li>
          <li className="fontWeight">Live Order Tracking & Status Updates – Providing clear post-purchase transparency.
          </li>
        </ul><p></p>
              These optimizations significantly reduced checkout time, improved conversion rates, and enhanced overall customer satisfaction.
                </p>
            </div>

        </section>

       
        <section className="modal-section">
    <h1>Get Inspired - GIF and Video Integration</h1>
    <p>Time <big>→</big> Within 2 Weeks</p>

    <h3>Challenge</h3>
    <p>
        Enhance the Image sections to support GIFs and videos seamlessly, ensuring that 
        content creators can easily upload and manage these media types through the interface.
    </p>

    <h3>Process</h3>
    <figure className="image-gallery">
        <img src={Image4} alt="Research"/>
        <figcaption className="image-caption">Task: UX/UI Video-Implememtation</figcaption>
    </figure>

    <h4>Solution</h4>
    <p>
        Implement a user-friendly upload system that automatically detects and handles different media 
        formats, ensuring smooth playback and accessibility.
    </p>
    <div className="video-gallery">
          <video ref={videoRefs[3]} src={video4} muted loop playsInline></video>
        </div>
    
</section>

<section className="modal-section">
    <h1>Find the right Fit - Filter experience</h1>
    <p>Time <big>→</big> Within 1 Month</p>

    <h3>Challenge</h3>
    <p>
    Ensure consistent navigation and categorization across the entire 
    marketplace experience through a component redesign and the 
    introduction of new logical groupings.

    </p>
    <h3>Process</h3>
  <p>
    In order to improve the user experience, we focused on optimizing the filtering and navigation components. The first step involved conducting user research to understand the pain points in the current system. We identified areas where the navigation was confusing or inefficient, and worked on creating a more intuitive interface.
  </p>
  <p>
    After gathering feedback, we proceeded to redesign the components with a fresh new style, incorporating secondary filter chips and a re-ordered grid view to enhance the filtering experience. Additionally, we implemented a PLP Product Image Preview, allowing users to browse through the next images shown in the product view. 
  </p>
  <p>
    To maintain the correct order and provide a seamless preview, we integrated a small slider. These improvements were designed to provide a smoother and more intuitive user experience, both on desktop and mobile views.
  </p>

  <h4>Solution</h4>
  <p>
    The solution involved a complete overhaul of the filtering options, ensuring users could quickly sort and find products in a streamlined interface. We also introduced responsive features to maintain consistency across all screen sizes.
  </p>
    <figure className="image-gallery">
        <img src={Image9} alt="Research"/>
        <figcaption className="image-caption">Task: UX/UI Navigation and Filtering within PLP Categories</figcaption>
    </figure>
</section>

<section className="modal-section">

<h1>Design System from Sketch to Figma</h1>
<p>Time<big> → </big>Within 1 Week</p>


The team was facing challenges in collaboration due to the limitations of Sketch, and it was crucial to
transition to a more flexible design system.
<p></p>Process<p></p>

I worked closely with the Design Lead to evaluate Figma’s features and its potential to improve workflow.

<figure className="image-gallery">
    <img src={Image10} alt="Research"/>
    <figcaption className="image-caption">From Sketch</figcaption>
    <img src={Image8} alt="Research"/>
    <figcaption className="image-caption">To Figma</figcaption>
</figure>

<h4>Solution</h4>
By transitioning the design system to Figma, I improved team collaboration, allowing for real-time feedback,
seamless handoffs, and more efficient workflows. This also improved consistency across design outputs and
made cross-functional collaboration smoother.

</section>

        <p>
            <a href="https://www.carhartt-wip.com/de" target="_blank" rel="noopener noreferrer">➞ See Live on
                Carhartt-WIP EU</a><p></p>
            <a href="https://us.carhartt-wip.com/?cl=true" target="_blank" rel="noopener noreferrer">➞ See Live on
                Carhartt-WIP US</a>
        </p>
        <p></p>

    </div>
);
};
export default CarharttModalContent;