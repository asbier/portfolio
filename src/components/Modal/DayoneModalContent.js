import React from 'react';
import './DayoneModalContent.css';
import logo1 from '../../Assets/dayone/Logo 4.png';
import logo2 from '../../Assets/dayone/Logo 2.png';
import logo3 from '../../Assets/dayone/Logo 3.png';
import logo4 from '../../Assets/dayone/Logo 1.png';

const DayoneModalContent = () => (
    <div className="dayone-modal-content-container">
        <p className="dayone-bold-text">UX Designer & Innovation Consultant</p>
        <h2>DAYONE</h2>
        <p>
            At Dayone, I learned how transformative great design can be and how crucial it is for teams to embrace it as a driving force. Growth—both personal and product-driven—requires imagination and a willingness to listen. Without engaging with customers, colleagues, and surroundings, progress stalls.
        </p>
        <p>
            I also came to understand how leadership and culture influence growth. Design-led teams tend to push boundaries, while business-driven approaches often favor practicality, sometimes at the cost of innovation.
        </p>
        <p>
            These experiences shaped my perspective on the intersection of design, leadership, and growth, lessons I carry forward in all my work.
        </p>

        {/* Image Gallery for Logos */}
        <div className="dayone-image-gallery">
            <img src={logo1} alt="Logo 1" />
            <img src={logo2} alt="Logo 2" />
            <img src={logo3} alt="Logo 3" />
            <img src={logo4} alt="Logo 4" />
        </div>

        <h3>Automotive Industry Projects: Insights & Contributions</h3>
        <p>
            Over the course of several German and International market-focused automotive projects, I gained extensive experience in creating user journeys, conducting user research, and performing competitive benchmarking. These projects deepened my understanding of designing localized, user-centric digital solutions within the automotive sector. They also provided valuable lessons in cross-functional collaboration, market-specific challenges, and the complexities of large-scale product development.
        </p>

        <h4>Key Areas of Focus:</h4>
        <p>Streamlining Vehicle Searches: Addressed user needs for intuitive search options by analyzing behavior, mapping journeys, and prototyping enhanced filtering tools.</p>
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
            I contributed to the design of the user flow and dashboard for a confidential app aimed at simplifying the guest list process and providing an intuitive artist dashboard. My responsibilities included designing the guest list flow, login processes, artist pages, and mission pages. Working closely with my UX Lead, we quickly developed and presented the first prototype for both guests and artists, based on user insights.
        </p>
        <p>
            The primary goal of the app was to reduce stress for guests and venue staff by simplifying event entry and navigation. In the absence of a clear brand or concept, I led research efforts to understand event workflows and user expectations, ensuring the app addressed the needs of both parties effectively.
        </p>
        <p>
            In addition to its functional goals, the app had a social impact mission: a portion of its income supports music education for children in need. The app was designed to save time and money, streamline event processes, reduce queues, and enhance the overall experience for both attendees and venue staff.
        </p>

        <p>
            <a href="https://www.example.com" target="_blank" rel="noopener noreferrer">See cases on website</a>
        </p>

        <h3>Collaborate with DAYONE</h3>
        <p></p>
    </div>
);

export default DayoneModalContent;