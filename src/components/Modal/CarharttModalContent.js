import React from 'react';
import './CarharttModalContent.css';
import image1 from '../../Assets/Image_1_carhartt_wip/Image1.png';
import image2 from '../../Assets/Image_1_carhartt_wip/Image2.png';


const CarharttModalContent = () => (
    <div className="modal-content-container">
        <p>  
        <strong>Carhartt Work In Progress (Carhartt WIP)</strong> forms a division of the 
        American brand Carhartt, one of the first companies to pioneer workwear in the USA. 
        Founded in Europe in 1989, 100 years after Hamilton Carhartt established his business in Detroit, Carhartt WIP 
        has been carefully adapting and modifying Carhartt's core product characteristics for a different audience of 
        consumers who value refined design and quality while still remaining true to Carhartt's brand origins. 
©CARHARRT-WIP
</p>

        <div className="carhartt-image-gallery">
  <img src={image1} alt="Image1" />
  <img src={image2} alt="Image2" /></div>
        
        <section className="modal-section">
        <h1>Help Desk development</h1>
        <p>Time  <big> →  </big>Within 2 Month Live</p> 
     <h2>
<p>As UX Designer within the Digital Design Team at Carhartt, I was tasked with addressing several key challenges, blending both UX and UI design to create holistic solutions that improved user experience across various platforms.
        </p>Inifficient Customer Support.
            Users struggled with accessing 
            help and support, making it difficult for them to resolve issues efficiently on both the web and app platforms.
            </h2>
Process<p></p>
I conducted benchmark research, identifying key pain points and understanding the needs of our target audience. I mapped out the user journey to highlight friction points and collaborated directly with developers to ensure technical feasibility. We presented my findings and solutions to the dev team, ensuring alignment on user needs and design requirements.

<p></p>Solution<p></p>
I developed intuitive user flows and interfaces that made it easier for customers to access support, track their requests, and receive timely updates. The improved design significantly reduced service request resolution time and increased customer satisfaction.
</section>

< section className="modal-section">
<div>
 <h1>Checkout Experience Optimization</h1>
        <p>Time  <big> →  </big>Within 2 Month Live</p> 
<p></p>
<p></p>
<h2>As UX Designer within the Digital Design Team at Carhartt, I was tasked with addressing several key challenges, blending both UX and UI design to create holistic solutions that improved user experience across various platforms.
</h2> 
<p></p>Process<p></p>
I conducted benchmark research, identifying key pain points and understanding the needs of our target audience. I mapped out the user journey to highlight friction points and collaborated directly with developers to ensure technical feasibility. 
We presented my findings and solutions to the dev team, ensuring alignment on user needs and design requirements.        

<p></p>Solution<p></p>
I developed intuitive user flows and interfaces that made it easier for customers 
to access support, track their requests, and receive timely updates. 
The improved design significantly reduced service 
request resolution time and increased customer satisfaction.       

        </div> 
        </section>

        <section className="modal-section"> 
           
        <h1>Transitioning Design Tools from Sketch to Figma</h1>
        <p>Time<big> →  </big>Within 1 Week</p> 

        
        <h2>The team was facing challenges in collaboration due to the limitations of Sketch, and it was crucial to transition to a more flexible design system.
        </h2>
            <p></p>Process<p></p>
       
            I worked closely with the Design Lead to evaluate Figma’s features and its potential to improve workflow.
       

        <h4>Solution</h4> 
            By transitioning the design system to Figma, I improved team collaboration, allowing for real-time feedback, seamless handoffs, and more efficient workflows. This also improved consistency across design outputs and made cross-functional collaboration smoother.
       
    
</section>

<p>
  <a href="https://www.carhartt-wip.com/de" target="_blank" rel="noopener noreferrer">🌐 See Live on Carhartt-WIP EU</a>
  <a href="https://us.carhartt-wip.com/?cl=true" target="_blank" rel="noopener noreferrer">🌐 See Live on Carhartt-WIP US</a>
</p>

    </div>
);

export default CarharttModalContent;