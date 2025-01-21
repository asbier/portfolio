import React from 'react';
import './CarharttModalContent.css';
import image1 from '../../Assets/carhartt_wip/Image1.png';
import image2 from '../../Assets/carhartt_wip/Image2.png';
import videoFile from '../../Assets/carhartt_wip/carhartt_us.mp4'; 

const CarharttModalContent = () => (
    <div className="carhartt-modal-content-container">
        <h2>Digital UX Designer</h2>
        <h4>Carhartt WIP</h4>
        <p>  </p> <p>
            As a UX Designer within the Digital Design Team at Carhartt, I was tasked with addressing several key challenges, blending both UX and UI design to create holistic solutions that improved user experience across various platforms.
        </p>
        <div className="carhartt-image-gallery">
  <img src={image1} alt="Image1" />
  <img src={image2} alt="Image2" />
  <video
  autoPlay
  muted
  loop
  playsInline
  onMouseOver={(e) => e.target.pause()}
  onMouseOut={(e) => e.target.play()}
>
  <source src={videoFile} type="video/mp4" />
  Your browser does not support the video tag.
</video>

</div>
        
        <section className="modal-section">
        <h3>Help Desk development</h3>
        <h4>Problem</h4>
        <div className="carhartt-section">
            Inifficient Customer Support.
            Users struggled with accessing help and support, making it difficult for them to resolve issues efficiently on both the web and app platforms.
        </div>

        <h4>Method</h4>
        <div className="carhartt-section">
            I conducted benchmark research, identifying key pain points and understanding the needs of our target audience. I mapped out the user journey to highlight friction points and collaborated directly with developers to ensure technical feasibility. We presented my findings and solutions to the dev team, ensuring alignment on user needs and design requirements.
        </div>

        <h4>Solution</h4>
        <div className="carhartt-section">
            I developed intuitive user flows and interfaces that made it easier for customers to access support, track their requests, and receive timely updates. The improved design significantly reduced service request resolution time and increased customer satisfaction.
</div> </section>

< section className="modal-section">
<div>
        <h3>Checkout Experience Optimization</h3>
        <h4>Problem</h4>
        <div className="carhartt-section">
            The checkout process was cumbersome, particularly for users in the U.S. and EU-Markets, which led to higher cart abandonment rates and a frustrating user experience.
        </div>

        <h4>Method</h4>
        <div className="carhartt-section">
            I worked closely with Digital Design Lead, and SEO Marketers to understand market-specific needs and user behavior. We all collaborated on addressing friction points in the checkout flow. I ensured the design was aligned with SEO best practices to enhance discoverability and conversion.
        </div>

        <h4>Solution</h4>
        <div className="carhartt-section">
            I redesigned the checkout system, optimizing mobile usability, improving the filter system, and simplifying the overall flow. The new design streamlined the purchasing process, resulting in lower cart abandonment rates and higher conversions.
        </div>

        </div> 
        </section>

        <section className="modal-section"> 
            <div>
        <h3>Transitioning Design Tools from Sketch to Figma</h3>
        <h4>Problem</h4>
        <div className="carhartt-section">
            The team was facing challenges in collaboration due to the limitations of Sketch, and it was crucial to transition to a more flexible design system.
        </div>

        <h4>Method</h4>
        <div className="carhartt-section">
            I worked closely with the Design Lead to evaluate Figma’s features and its potential to improve workflow.
        </div>

        <h4>Solution</h4>
        <div className="carhartt-section">
            By transitioning the design system to Figma, I improved team collaboration, allowing for real-time feedback, seamless handoffs, and more efficient workflows. This also improved consistency across design outputs and made cross-functional collaboration smoother.
        </div>
        </div>
</section>

<p>
  <a href="https://www.carhartt-wip.com/de" target="_blank" rel="noopener noreferrer">🌐 See Live on Carhartt-WIP EU</a>
  <a href="https://us.carhartt-wip.com/?cl=true" target="_blank" rel="noopener noreferrer">🌐 See Live on Carhartt-WIP US</a>
</p>

    </div>
);

export default CarharttModalContent;