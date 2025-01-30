import React from 'react';
import './MonopolGmbHModalContent.css';
import image1 from '../../Assets/Image_7_Monopol GmbH/image-1.png';

// Ensure the component name matches the export name
const MonopolGmbHModalContent = () => (
    <div className="modal-content-container">

     <h2>Monopol GmbH</h2>
     <section className="modal-section"> 

         <p> <strong>Medienhaus & Agentur für Kreativwirtschaft, Kultur und Kunst</strong>
As Art Director I was responsible for The Gap Music and Culture City Magazine and the Biorama Magazine a Lifestyle Magazine about Sustainability.
We also had various clients all over Austria for packaging design, branding or social media marketing, aswell as various Projects like webdesign for the Blog www.schroedingerskatze.at or Social Media assets for Die Grünen Wien.
</p>
    
             <div className="image-gallery">
                    <img src={image1} alt="Monopol" />
                    </div>
                </section>
    

             <section className="modal-section">
              <h4>ROLE</h4>
               <p>I worked project-based for a year and tried to follow the former art director's guidelines while he was at Bildungskranz but created some 
                new guidelines and Redesigns in that year.</p>
                </section>
    </div>
);

export default MonopolGmbHModalContent;