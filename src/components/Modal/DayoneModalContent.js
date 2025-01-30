import React from 'react';
import './DayoneModalContent.css';
import logo1 from '../../Assets/Image_0_ dayone/Logo 1.png';
import logo2 from '../../Assets/Image_0_ dayone/Logo 2.png';
import Image1 from '../../Assets/Image_0_ dayone/mydealer.png';
import Image2 from '../../Assets/Image_0_ dayone/userflowmanualtargetdata.png';
import Image3 from '../../Assets/Image_0_ dayone/userflowprotocol-manual-data-change.png';
const DayoneModalContent = () => (
    <div className="modal-content-container">
<h1>DAYONE</h1>

  <p><strong>DAYONE is a company that provides innovative consulting and design services for digital transformation. © DAYONE
  </strong> </p>
    <p><strong> As Product Designer, at DAYONE </strong> I balanced design, leadership, and business strategy, taking ownership of my work with minimal oversight.
       Beyond UX, I acted as a communicator, considering business strategy alongside problem-solving. Time management and a holistic approach were essential, shaping both my workflow and project outcomes.
I truly enjoy having the full overview of a project and creating 
a holistic world around it. I can go deep into details or zoom out 
to see the bigger picture. My focus was to gain experience as a Product 
Owner, contributing to all aspects of the design process. 
User research was a core part of this, guiding decisions with 
qualitative, quantitative, and benchmarking insights. </p>


      
<section className="modal-section">
  <p> <strong> Over several projects across German and international automotive markets </strong>, 
  I built expertise in crafting user journeys, conducting user research, and benchmarking competitive products. 
  These experiences helped me design localized, 
  user-centric digital solutions and tackle the complexities of large-scale, 
  cross-functional projects.</p>
  <p></p>
  </section>
  
  <section className="modal-section">
  <h3>CASE 1 ­- Optimizing Volkswagen`s MyDealer Feature for Better Engagement</h3>
  <p></p>
  <div className="dayone-image-gallery">
                    <img src={Image1} alt="myDealer" /> 
                    </div>

  <p><strong>Challenge </strong> <p></p>
  Dealers were reluctant to pay for Volkswagen’s MyDealer platform, feeling it lacked essential features and selling materials. 
  The platform didn’t meet their business needs, causing frustration. While addressing this directly with VW was sensitive, 
  I identified a key disconnect between the platform’s offerings and dealer expectations.
  </p> <p> 
  <strong>Process</strong> 
  <p></p> I focused on gathering dealer feedback from our Steakholders to identify gaps 
  and understand their needs. By carefully navigating sensitive feedback, 
  I collaborated with the team to find solutions that balanced dealer requirements 
  and VW’s objectives, ultimately driving improvements to enhance user engagement and platform value.
</p>

<strong>Outcome</strong>
<p> </p>Dealers were initially reluctant to pay for Volkswagen’s MyDealer platform due to its lack of essential features and marketing materials. By addressing their feedback, we successfully identified key areas of improvement, leading to more valuable engagement with the platform. The final high-fidelity designs addressed various focus areas, enabling a better alignment with dealer needs, even though we weren’t given specific direction on the creative approach. This helped create a more usable and engaging experience, ultimately driving positive outcomes for the project.
  <p></p>
  <h4>Other Key Contributions in that Project</h4>
  <ul className='key'>
    <li>
       <p><strong>Streamlining Vehicle Searches</strong> Enhanced search functionality by analyzing user behavior, mapping journeys, and prototyping intuitive filtering tools.</p>
    <p><strong>Improving Vehicle Detail Presentation</strong> Designed user-centric ways to showcase specifications, including specialized information for electric vehicles.</p>
    <p><strong>Enhancing Dealer Connections</strong> Simplified access to dealer and service information through improved user journeys and prototypes.</p>
    <p><strong>Simplifying Trade-In Processes</strong> Refined and streamlined the vehicle trade-in journey for better clarity and usability.</p>
    <p><strong>Boosting Model Discoverability</strong> Created solutions to improve car model visibility and comparison, addressing pain points identified through research.</p>
    <p><strong>AI Integration Workshop</strong> Contributed to a workshop exploring how AI could enhance automotive ecosystems, focusing on personalized vehicle configuration and service optimization.</p>
    </li>
  </ul>
  <p>These experiences solidified my ability to design tailored, user-focused solutions in dynamic, multi-stakeholder environments.</p>
  
<div className="logos">
            <img src={logo1} alt="Logo 1" />
        </div>
        </section>

<section className="modal-section">
  <h1>CASE 2 ­– UX Design for ADAS Dashboard </h1>
  <h3>Manual Input Feature</h3>
  <p><strong>I contributed to the UX design of a ADAS dashboard </strong> The project involved designing an ADAS dashboard for mechanics, with a focus on manual data input for unlisted measurement tools. This had to be seamlessly integrated into the system for legal compliance. Another challenge was ensuring accountability, as only one mechanic could be logged in at a time while multiple users could make changes.</p>
  <div className="dayone-image-gallery">
                    <img src={Image2} alt="ADAS" /> 
                    <img src={Image3} alt="ADAS" /> 
                    </div>

                    <p><strong>Challenge</strong>
                    <p></p>
On task in the journey to optimize the Dashboard was to design a user-friendly ADAS dashboard for mechanics, enabling them to manually add data for unlisted measurement tools while ensuring compliance with legal documentation. A key challenge was addressing the accountability of changes, as only one mechanic could be logged in at a time while others could make changes.
</p>
<p><strong>Process</strong>
<p></p>
I researched frictionless methods for data entry and designed an intuitive interface for seamless manual input, ensuring that changes were documented in the protocol with timestamps.
</p>
<strong>Outcome</strong>
<p></p>
The final product streamlined the process, improved efficiency, and was showcased at an industry trade show, demonstrating the effectiveness of thoughtful design.
  <div className="logos">
            <img src={logo2} alt="Logo 2" />
        </div>

</section>
<p></p>

<section className="modal-section">
  <h3>Guest List & Artist Dashboard App</h3>
  <p>For a confidential app project, I designed the user flows and dashboards for simplifying guest list management and providing artists with an intuitive dashboard. My contributions included crafting flows for guest list entry, login, and artist pages. Collaborating with my UX Lead, we rapidly prototyped and tested solutions based on Hypothesis and Artist Insights</p>
  
  <h4>Impact
  </h4>
  <ul className='key'><li>
    <p><strong>User-Centric Design</strong> Focused on reducing stress for guests and staff by simplifying event workflows.</p>
    <p><strong>Research-Driven Solutions</strong> Conducted extensive research to understand event dynamics and user needs.</p>
    <p><strong>Social Impact</strong> Helped design an app that not only streamlined event entry but also contributed to music education for children in need.</p>
    </li>
  </ul>
  <p>This project demonstrated the power of user-focused, purpose-driven design to improve processes while creating a broader positive impact.</p>
</section>



<p>
  <a href="https://www.dayone.de" target="_blank" rel="noopener noreferrer">🌐 Learn more about DAYONE</a>

</p>

</div>
);

export default DayoneModalContent;