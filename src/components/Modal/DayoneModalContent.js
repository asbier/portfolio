import React from 'react';
import './DayoneModalContent.css';
import logo1 from '../../Assets/dayone/Logo 1.png';
import logo2 from '../../Assets/dayone/Logo 2.png';

const DayoneModalContent = () => (
    <div className="dayone-modal-content-container">
<h1>DAYONE</h1>
<section>
  <h2>Transformative Design, Leadership, and Growth</h2>
  <p>At Dayone, I discovered how transformative design can shape both products and people. Embracing design as a core driving force fosters growth, imagination, and innovation. I learned that actively listening to customers, colleagues, and surroundings is essential to making meaningful progress.</p>
  <p>I also gained valuable insights into how leadership and culture drive innovation. Design-led teams are often bold, pushing boundaries, while business-driven approaches prioritize practicality—sometimes at the expense of creativity. These lessons about the intersection of design, leadership, and growth influence all of my work today.</p>
</section> 
{/* Logos Section */}
        <div className="logos">
            <img src={logo1} alt="Logo 1" />
            <img src={logo2} alt="Logo 2" />
        </div>
<section>
  <h2>Automotive Industry Projects</h2>
  <p>Over several projects across German and international automotive markets, I built expertise in crafting user journeys, conducting user research, and benchmarking competitive products. These experiences helped me design localized, user-centric digital solutions and tackle the complexities of large-scale, cross-functional projects.</p>
  <h3>Key Contributions:</h3>
  <ul>
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
</section>
<p></p>
<section>
  <h2>UX Design for ADAS System Configuration Tool</h2>
  <p>I contributed to the UX design of a dashboard for configuring Advanced Driver Assistance Systems (ADAS). The challenge was to balance complex technical requirements with an intuitive interface designed for non-technical users like mechanics.</p>
  <p>Collaborating closely with a development-focused Product Owner, we prioritized real-world usability by designing a dashboard that streamlined tasks and improved efficiency. The final product, showcased at an industry trade show, demonstrated how thoughtful design could simplify processes and improve workflows for mechanics.</p>
</section>
<p></p>
<section>
  <h2>Guest List & Artist Dashboard App</h2>
  <p>For a confidential app project, I designed the user flows and dashboards for simplifying guest list management and providing artists with an intuitive dashboard. My contributions included crafting flows for guest list entry, login, and artist pages. Collaborating with my UX Lead, we rapidly prototyped and tested solutions based on Hypothesis and Artist Insights</p>
  <h3>Impact
  </h3>
  <p></p>
  <ul><li>
    <p><strong>User-Centric Design</strong> Focused on reducing stress for guests and staff by simplifying event workflows.</p>
    <p><strong>Research-Driven Solutions</strong> Conducted extensive research to understand event dynamics and user needs.</p>
    <p><strong>Social Impact</strong> Helped design an app that not only streamlined event entry but also contributed to music education for children in need.</p>
    </li>
  </ul>
  <p>This project demonstrated the power of user-focused, purpose-driven design to improve processes while creating a broader positive impact.</p>
</section>
<p></p>
<p>
  <p><strong>Final Thoughts</strong> <p></p>Through my work at Dayone and beyond, I’ve developed a deep appreciation for the intersection of design, leadership, and growth. Each project has enriched my ability to deliver innovative, user-centric solutions across diverse industries.</p>
</p>
</div>
);

export default DayoneModalContent;