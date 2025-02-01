import React from 'react';
import './MonopolGmbHModalContent.css';
import image1 from '../../Assets/Image_7_Monopol GmbH/image-1.png';

const MonopolGmbHModalContent = () => (
    <div className="modal-content-container">
        <h2>Monopol GmbH</h2>

        <section className="modal-section">
            <p>
                <strong>Medienhaus & Agentur für Kreativwirtschaft, Kultur und Kunst</strong><br />
                Monopol is a dynamic media house and agency based in Vienna, focusing on creative industries, culture, and art. They specialize in producing content and providing strategic services for various sectors, offering expertise in branding, design, and digital media. Their work spans a wide range of creative fields, including editorial content, social media marketing, and web design.
            </p>
        </section>

        <section className="modal-section">
            <h2>BIORAMA MAGAZINE</h2>
            <p>
                As an Art Director at Monopol, I was responsible for <em>The Gap Music and Culture City Magazine</em> and <em>Biorama Magazine</em>, a lifestyle publication dedicated to sustainability. My role included overseeing the creative direction, design, and visual identity of the magazines.
            </p>
            <p>
                In addition to the magazines, we collaborated with a diverse array of clients across Austria, providing branding, packaging design, and social media marketing solutions. Notable projects included web design for the blog <a href="https://www.schroedingerskatze.at" target="_blank" rel="noopener noreferrer">www.schroedingerskatze.at</a> and creating social media assets for <em>Die Grünen Wien</em>. Our team’s work helped elevate clients' creative visions and expand their reach across various digital and print platforms.
            </p>

            <div className="image-gallery">
                <img src={image1} alt="Monopol GmbH project showcase" />
            </div>
        </section>

        <section className="modal-section">
            <h4>ROLE</h4>
            <p>
                I worked on a project basis for a year, following the former art director's guidelines during his time at Bildungskranz. However, I also introduced new design guidelines and implemented redesigns throughout the year.
            </p>
        </section>
    </div>
);

export default MonopolGmbHModalContent;
