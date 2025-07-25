import React from 'react';
import './modal-common.css';
import bioramaCover from '../../Assets/biorama-cover.png';
import image3 from '../../Assets/Image_7_Monopol GmbH/Image 10.png';
import image5 from '../../Assets/Image_7_Monopol GmbH/Image 5.png';
import image6 from '../../Assets/Image_7_Monopol GmbH/Image 6.png';
import image7 from '../../Assets/Image_7_Monopol GmbH/Image 11.png';
import image8 from '../../Assets/Image_7_Monopol GmbH/Image 12.png';

import gif1 from '../../Assets/Image_7_Monopol GmbH/Cover.gif';
import gapImage from '../../Assets/fd05a329442313.55f9612230b20.gif';


const MonopolGmbHModalContent = () => (
    <div className="modal-content-container">
        <h1>Monopol GmbH</h1>
            <p>
            <strong>Medienhaus & Agentur für Kreativwirtschaft, Kultur und Kunst - Monopol is a dynamic media house and agency based in Vienna, focusing on creative industries, culture, and art. They specialize in producing content and providing strategic services for various sectors, offering expertise in branding, design, and digital media. Their work spans a wide range of creative fields, including editorial content, social media marketing, and web design.</strong>
        </p>
        <p className="role-description">
            The design system was already established when I joined as Art Director, replacing someone on Bildungskarenz. Thomas and I brought modernity through refined layout, whitespace, and image curation—inspired by magazines like Brand Eins, Neon, Nido, and Apartamento. Beyond editorial work, we collaborated with diverse Austrian clients, delivering branding, packaging design, and social media marketing solutions for Austria's creative industry.
            </p>

        <div className="column">
          <div>
            <h3><strong>My Role</strong></h3>
            <ul className="checklist">
              <li>Art Direction</li>
              <li>Strategy</li>
              <li>Design</li>
  </ul>
          </div>
          <div>
  <h3><strong>Design Team</strong></h3>
            <ul className="list">
              <li><strong>Art Director</strong> Thomas Albdorf</li>
              <li><strong>Art Director</strong> Annemarie Sauerbier</li>
  </ul>
          </div>
        </div>

        <section className="modal-section">
            <h2>BIORAMA</h2>
<p>
                As <strong>Art Director</strong> at Monopol, I led the art direction, design, and visual identity for <em>Biorama</em>, a sustainability-focused lifestyle publication. My role encompassed overseeing the magazine's aesthetics while ensuring a cohesive and engaging reader experience that aligned with its environmental values.
            </p>

            <div className="image-gallery">
                <img src={bioramaCover} alt="BIORAMA Magazine Covers" />
            </div>

            <h2>THE GAP</h2>
            <p>
                Additionally, I worked on <em>The Gap</em>—a music and culture magazine—applying similar art direction principles to capture the dynamic energy of Austria's music scene. Here you can see a development towards a cleaner key visual language. The covers had a banderole with shadow effects (Banderole mit Schatten) which we reduced in the following issues, while the titles evolved to have a more focused and louder visual presence.
</p>

            <div className="image-gallery">
                <img src={gapImage} alt="The Gap Magazine Cover" />
                <img src={image5} alt="Monopol GmbH project showcase" />
                <img src={image6} alt="Monopol GmbH project showcase" />
                <img src={image3} alt="Monopol GmbH project showcase" />
                <img src={image7} alt="Monopol GmbH project showcase" />
                <img src={image8} alt="Monopol GmbH project showcase" />
            </div>


        </section>

        <p>
            <a href="https://www.monopol.at/" target="_blank" rel="noopener noreferrer"> ➞ Learn more about Monopol</a>
        </p>
    </div>
);

export default MonopolGmbHModalContent;
