import React from 'react';
import './DayoneModalContent.css';
import logo1 from '../../Assets/dayone/Logo 1.png';
import logo2 from '../../Assets/dayone/Logo 2.png';

const DayoneModalContent = () => (
    <div className="dayone-modal-content-container">

        <h2>UX Designer & Innovation Consultant</h2>
        <h4>DAYONE</h4>
        <h3>
        Transformative Design, Leadership, and Growth
        </h3> 
        <p>At Dayone, I discovered how transformative design can shape both products and people. Embracing design as a core driving force fosters growth, imagination, and innovation. I learned that actively listening to customers, colleagues, and surroundings is essential to making meaningful progress.
I also gained valuable insights into how leadership and culture drive innovation. Design-led teams are often bold, pushing boundaries, while business-driven approaches prioritize practicality—sometimes at the expense of creativity. These lessons about the intersection of design, leadership, and growth influence all of my work today.
        </p>

        {/* Image Gallery for Logos */}
        <div className="dayone-image-gallery">
            <img src={logo1} alt="Logo 1" />
            <img src={logo2} alt="Logo 2" />
        </div>

        <h3>Automotive Industry Projects: Insights & Contributions</h3>
        <p>
        Over several projects across German and international automotive markets, I built expertise in crafting user journeys, conducting user research, and benchmarking competitive products. These experiences helped me design localized, user-centric digital solutions and tackle the complexities of large-scale, cross-functional projects.
        </p>

        <h4>Key Areas of Focus:</h4>
        <p>
        Streamlining Vehicle Searches: Addressed user needs for intuitive search options by analyzing behavior, mapping journeys, and prototyping enhanced filtering tools.</p>
        <p>Improving Vehicle Detail Presentation: Designed user-centric solutions to present specifications and details more clearly, including specialized information for electric vehicles.</p>
        <p>Enhancing Dealer Connections: Developed journeys and prototypes to simplify user access to dealer and service information.</p>
        <p>Simplifying Trade-in Processes: Worked on mapping and refining the journey for trading in vehicles, ensuring clarity and usability.</p>
        <p>Boosting Model Discoverability: Created solutions to improve the visibility and comparison of car models, responding to user difficulties highlighted by research.</p>
        <p>AI Workshop for Ecosystem Integration: Participated in a workshop exploring the integration of AI technologies into the automotive ecosystem. The focus was on how AI could enhance user experiences, particularly in vehicle configurations and service optimizations, enabling more personalized and efficient interactions.</p>

        <p>
            This experience equipped me with a strong foundation in user-centric design, strategic problem-solving, and the ability to deliver tailored solutions in complex, multi-stakeholder environments.
        </p>

        <h3>UX Design for ADAS System Configuration Tool</h3>
        <p>
            I contributed to the UX design of a dashboard for an Advanced Driver Assistance System (ADAS) configuration tool. The primary goal was to simplify the process for mechanics setting up car systems such as cameras and sensors. Working closely with a development-focused Product Owner, the key challenge was balancing complex technical requirements with an intuitive and user-friendly interface, tailored to non-technical users like mechanics.
        </p>
        <p>
            Our team focused on creating a dashboard that was efficient, easy to navigate, and practical for real-world use. The final design aimed to streamline configuration tasks, ensuring processes could be completed quickly and accurately. The project was showcased at an industry trade show, reflecting its innovative approach to improving the mechanic's workflow and user experience.
        </p>

        <h3>Guest List & Artist Dashboard App (Confidential Project)</h3>
        <p>
            I contributed to the design of the user flow and dashboard for a confidential app aimed at simplifying the guest list process and providing an intuitive artist dashboard. My responsibilities included designing the guest list flow, login processes, artist pages, and mission pages. Working closely with my UX Lead, we quickly developed and presented the first prototype for both guests and artists, based on user hypothesis.
        </p>
        <p>
            The primary goal of the app was to reduce stress for guests and venue staff by simplifying event entry and navigation. In the absence of a clear brand or concept, I led research efforts to understand event workflows and user expectations, ensuring the app addressed the needs of both parties effectively.
        </p>
        <p>
            In addition to its functional goals, the app had a social impact mission: a portion of its income supports music education for children in need. The app was designed to save time and money, streamline event processes, reduce queues, and enhance the overall experience for both attendees and venue staff.
        </p>
        <h3>Final Thoughts</h3><p>
Through my work at Dayone and beyond, I’ve developed a deep appreciation for the intersection of design, leadership, and growth. Each project has enriched my ability to deliver innovative, user-centric solutions across diverse industries.
</p>
        <p>
            <a href="https://www.dayone.de/case/case-autosuche" target="_blank" rel="noopener noreferrer">🌐 See Live DAYONE.de</a>
        </p>
    
    </div>
);

export default DayoneModalContent;