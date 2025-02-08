import React from 'react';
import './modal-common.css';
import image1 from '../../Assets/Image 3_AboutYou/final.png';
import image2 from '../../Assets/Image 3_AboutYou/ayawards.png';

const AboutYouModalContent = () => (
    <div className="modal-content-container">
        <h1>About You</h1>
            <p>
                ABOUT YOU is one of Europe’s leading fashion e-commerce platforms, revolutionizing online shopping through personalization and digital innovation. 
                Launched in 2014 by the Otto Group, the platform merges content and commerce, offering a curated and inspiring shopping experience driven by AI and influencer collaborations.
            </p>
            <p>
                In 2017, I contributed to the brand’s creative direction and rebranding efforts, working on strategy, personalization, and user experience.
            </p>

        <section className="modal-section">
            <h2>Case 1 — Influencer and Celebrity Engagement</h2>
            <p>
                I developed the “Celebrity X” initiative to incorporate well-known public figures into campaigns, making the brand feel more relatable and authentic, while directly engaging with a broader user base.
            </p>
            <p>
                I collaborated with renowned external designers and influencers, creating strategic partnerships that elevated the brand’s visibility and market positioning. Additionally, I worked on co-branded campaigns that aligned the ABOUT YOU aesthetic with established fashion icons, making the platform more appealing to a larger audience.
            </p>

            <div className="image-gallery">
                <img src={image1} alt="Influencer and Celebrity Campaigns" />
            </div>
        </section>

        <section className="modal-section">
            <h2>Case 2 — Store & Event Concepts</h2>
            <p>
                I designed innovative store concepts and pop-up events to enhance the brand’s physical presence and improve consumer interaction with the platform. 
                Additionally, I developed branding strategies for high-profile events that aligned with the company’s vision of creating an engaging and immersive shopping experience.
            </p>

            <div className="image-gallery">
                <img src={image2} alt="Store and Event Concepts for ABOUT YOU" />
            </div>
        </section>

        <section className="modal-section">
            <h2>Case 3 — Holistic Marketing Strategies</h2>
            <p>
                I visualized the award designs and booths for the ABOUT YOU Awards, as well as the booth and label presentations for EDITED in collaboration with my brand lead.
            </p>
            <p>
                I contributed to the strategic shift as ABOUT YOU transitioned from a niche e-commerce platform to a mainstream brand, focusing on diversity, inclusivity, and personalization. 
                I ensured that the platform’s structure, content, and branding strategies aligned with these shifts, fostering deeper connections with a broader customer base.
            </p>
        </section>
    </div>
);

export default AboutYouModalContent;
