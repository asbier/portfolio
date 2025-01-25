import React from 'react';
import './CarharttModalContent.css';
import image1 from '../../Assets/carhartt_wip/Image1.png';
import image2 from '../../Assets/carhartt_wip/Image2.png';
import videoFile from '../../Assets/carhartt_wip/carhartt_us.mp4'; 

const CarharttModalContent = () => (
    <div className="modal-content-container">
        <p>  </p> <p>
        <strong>Carhartt Work In Progress (Carhartt WIP)</strong> forms a division of the 
        American brand Carhartt, one of the first companies to pioneer workwear in the USA. 
        Founded in Europe in 1989, 100 years after Hamilton Carhartt established his business in Detroit, Carhartt WIP 
        has been carefully adapting and modifying Carhartt's core product characteristics for a different audience of 
        consumers who value refined design and quality while still remaining true to Carhartt's brand origins. 
©CARHARRT-WIP

<h3>ROLE</h3>
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
        <div className="modal-section">
            Inifficient Customer Support.
            Users struggled with accessing help and support, making it difficult for them to resolve issues efficiently on both the web and app platforms.
        </div>

        <h4>Method</h4>
        <div className="modal-section">
            I conducted benchmark research, identifying key pain points and understanding the needs of our target audience. I mapped out the user journey to highlight friction points and collaborated directly with developers to ensure technical feasibility. We presented my findings and solutions to the dev team, ensuring alignment on user needs and design requirements.
        </div>

        <h4>Solution</h4>
        <div className="modal-section">
            I developed intuitive user flows and interfaces that made it easier for customers to access support, track their requests, and receive timely updates. The improved design significantly reduced service request resolution time and increased customer satisfaction.
</div> </section>

< section className="modal-section">
<div>
        <h3>Checkout Experience Optimization</h3>
        <h4>Problem</h4>
        <div className="modal-section">
            The checkout process was cumbersome, particularly for users in the U.S. and EU-Markets, which led to higher cart abandonment rates and a frustrating user experience.
        </div>

        <h4>Method</h4>
        <div className="modal-section">
            I worked closely with Digital Design Lead, and SEO Marketers to understand market-specific needs and user behavior. We all collaborated on addressing friction points in the checkout flow. I ensured the design was aligned with SEO best practices to enhance discoverability and conversion.
        </div>

        <h4>Solution</h4>
        <div className="modal-section">
            I redesigned the checkout system, optimizing mobile usability, improving the filter system, and simplifying the overall flow. The new design streamlined the purchasing process, resulting in lower cart abandonment rates and higher conversions.
        </div>

        </div> 
        </section>

        <section className="modal-section"> 
            <div>
        <h3>Transitioning Design Tools from Sketch to Figma</h3>
        <h4>Problem</h4>
        <div className="modal-section">
            The team was facing challenges in collaboration due to the limitations of Sketch, and it was crucial to transition to a more flexible design system.
        </div>

        <h4>Method</h4>
        <div className="modal-section">
            I worked closely with the Design Lead to evaluate Figma’s features and its potential to improve workflow.
        </div>

        <h4>Solution</h4>
        <div className="modal-section">
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