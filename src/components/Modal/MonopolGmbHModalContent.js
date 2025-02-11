import React from 'react';
import './modal-common.css';
import image1 from '../../Assets/Image_7_Monopol GmbH/Biorama.png';
import image2 from '../../Assets/Image_7_Monopol GmbH/Biorama-web.png';
import image3 from '../../Assets/Image_7_Monopol GmbH/Image 10.png';
import image6 from '../../Assets/Image_7_Monopol GmbH/Image 8.png';
import image7 from '../../Assets/Image_7_Monopol GmbH/Image 11.png';
import image8 from '../../Assets/Image_7_Monopol GmbH/Image 12.png';

import gif1 from '../../Assets/Image_7_Monopol GmbH/Cover.gif';


const MonopolGmbHModalContent = () => (
    <div className="modal-content-container">
        <h2>Monopol GmbH</h2>

            <p>
                <strong>Medienhaus & Agentur für Kreativwirtschaft, Kultur und Kunst</strong><br />
                Monopol is a dynamic media house and agency based in Vienna, focusing on creative industries, culture, and art. They specialize in producing content and providing strategic services for various sectors, offering expertise in branding, design, and digital media. Their work spans a wide range of creative fields, including editorial content, social media marketing, and web design.
            </p>

            <div><h3><strong>My Role</strong></h3>
  <ul className="list" >
    <li className="fontWeight"> Art Direction </li>
    <li className="fontWeight"> & Strategy </li>
  </ul>
  <h3><strong>Design Team</strong></h3>
  <ul className="list" >
  <li className="list">Thomas Albdorf</li><p></p>
    <li className="fontWeight">Annemarie Sauerbier </li>
  </ul>
</div> <p></p>

        <section className="modal-section">
        <h2>BIORAMA MAGAZINE</h2>
<p>
    As <strong>Art Director</strong> at Monopol, I led the creative direction, design, and visual identity for <em>The Gap</em>—a music and culture magazine—and <em>Biorama</em>, a sustainability-focused lifestyle publication. My role encompassed overseeing the magazines' aesthetics while ensuring a cohesive and engaging reader experience.
</p>
<p>
    Beyond editorial work, we collaborated with a diverse range of Austrian clients, delivering branding, packaging design, and social media marketing solutions. Notable projects included web design for  
    <a href="https://www.schroedingerskatze.at" target="_blank" rel="noopener noreferrer"> Schrödinger’s Katze</a> and social media assets for <em>Die Grünen Wien</em>. Our team’s work amplified clients’ creative impact across digital and print platforms, helping them connect with broader audiences.
</p>


            <div className="image-gallery">
                <img src={image1} alt="Monopol GmbH project showcase" />
                <img src={image2} alt="Monopol GmbH project showcase" />
                <img src={gif1} alt="Monopol GmbH project showcase" />
                <img src={image3} alt="Monopol GmbH project showcase" />
                <img src={image6} alt="Monopol GmbH project showcase" />
                <img src={image7} alt="Monopol GmbH project showcase" />
                <img src={image8} alt="Monopol GmbH project showcase" />
                <p>
        <a href="https://www.monopol.at/" target="_blank" rel="noopener noreferrer"> ➞ Learn more about Monopol</a>
      </p>
            </div>
        </section>
    </div>
);

export default MonopolGmbHModalContent;
