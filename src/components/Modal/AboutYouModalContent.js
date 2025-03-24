import React from 'react';
import './modal-common.css';
import Image2 from '../../Assets/Image 3_AboutYou/Stories_final.png';
import Image4 from '../../Assets/Image 3_AboutYou/shoebrand-AY.png';
import Image5 from '../../Assets/Image 3_AboutYou/RedesignContentStoriesafter.png';
import Image6 from '../../Assets/Image 3_AboutYou/LergerBrands.png';
import Image8 from '../../Assets/Image 3_AboutYou/Stories_wireframeoutcome.png';
import Image9 from '../../Assets/Image 3_AboutYou/ayawards-final .png';
import Image10 from '../../Assets/Image 3_AboutYou/Stories_video outcome.png';

import Image13 from '../../Assets/Image 3_AboutYou/AnnaundElla-Brand-soho-event.png';
import Image14 from '../../Assets/Image 3_AboutYou/Anna&Ella-Moodboard.png';

import Image15 from '../../Assets/Image 3_AboutYou/Moods_spots_wireframeoutcome.png';



const AboutYouModalContent = () => (
    <div className="modal-content-container">
        <h1>About You</h1>
            <p>
                ABOUT YOU is one of Europe’s leading fashion e-commerce platforms, revolutionizing online shopping through personalization and digital innovation. 
                Launched in 2014 by the Otto Group, the platform merges content and commerce, offering a curated and inspiring shopping experience driven by AI and influencer collaborations.
            </p>
            <p>
                In 2016/2017, I contributed to the brand’s creative direction and rebranding efforts, working on strategy, personalization, and user experience.
            </p>

            <section className="modal-section">
            <h2>Case 1 — Holistic Marketing Strategies</h2>
           
            <p>
                I contributed to the strategic shift as ABOUT YOU transitioned from a niche e-commerce platform to a mainstream brand, focusing on diversity, inclusivity, and personalization. 
                I ensured that the platform’s structure, content, and branding strategies aligned with these shifts, fostering deeper connections with a broader customer base.
            </p>

            <p><strong>My Idea & Strategy</strong></p>
<ul className="checklist">
  <li className="fontWeight">Shift from white-background catalog images to engaging real-life content with diversity & inclusivity.</li>
  <li className="fontWeight">Shareable Content </li>
  <li className="fontWeight">"Stories" to tell – Outfits curated for every occasion. Clothes are grouped into editorial narratives, making it easy to find the perfect look.</li>
  <li className="fontWeight">Elevate the brand philosophy: "It's About YOU —giving meaning to "AY."</li>
  <li className="fontWeight">Personalization: Features like name-based greetings (e.g.,"It's About Julia") for a tailored experience.</li>
  <li className="fontWeight">Editorial must be cutting-edge, collections launched like high-fashion drops.</li>
  <li className="fontWeight">Emphasize emotions, cultural diversity, and an international vibe.</li>
  <li className="fontWeight">Inspired by Zara, ASOS, and high-fashion brands.</li>
  <li className="fontWeight">High-quality Streetwaer communication style .</li>
  <li className="fontWeight">Collaboaration with Celebrities - "I want to wear what Gigi H. wears" - " I want be be like my Idol" Starting with C&B Celebs - going up to A. </li>
</ul>

            <figure className="image-gallery">
          <img src={Image15} alt="Slider" />
          <figcaption className="image-caption"> Moodboard  - Final Spots and Wireframe</figcaption>
         <img src={Image10} alt="Slider" /> 
         <figcaption className="image-caption">Outcome of Videos - After</figcaption>
         <img src={Image5} alt="Slider" />  
         <img src={Image8} alt="Slider" /> 
         <figcaption className="image-caption">Wireframe of Storie Layout - Concept</figcaption>
         <img src={Image2} alt="Slider" /> 
        </figure>
      
       <figcaption className="image-caption">Outcome of the Editorial Stories - After</figcaption>
        
            <h2>Emily & Eve new AY Shoe Brand Concept </h2>
            <p>
                I visualized the CI of the new Shoe Brand, we created a Social Media and extra Brand Internal Webshop on AY.
                This was the Start for AYs own Label Presentations. A follow up was Lena Gerkes ( Ger-Next-Top-Models-Winner) brand LeGer.
                Here I also did Logo and some Fashion Design Research and Graphics in the Berlin Studio.
            </p>

            <figure className="image-gallery">
            <img src={Image4} alt="emilyandeveshoebrand" />
          <figcaption className="image-caption"> Emily and Eve - New Shoes Brand Concept</figcaption>
        </figure>
        
        </section>


        <section className="modal-section">
            <h2>Case 2 — Influencer and Celebrity Engagement</h2>
            <p>
                I developed the “Celebrity X” initiative to incorporate well-known public figures into campaigns, 
                making the brand feel more relatable and authentic, while directly engaging with a broader user base.
            </p>
            <p>
                I collaborated with renowned external designers and influencers, creating strategic partnerships that elevated the brand’s 
                visibility and market positioning. Additionally, I worked on co-branded campaigns that aligned the ABOUT YOU aesthetic 
                with established fashion icons, 
                making the platform more appealing to a larger audience.
            </p>

            <figure className="image-gallery">
            <img src={Image6} alt="LeGer" />
        
          <figcaption className="image-caption"> Lena Gerkes first AY Collabo</figcaption>
        </figure>

        <a href="https://www.aboutyou.de/b/shop/leger-by-lena-gercke-61536?category=20201" target="_blank" rel="noopener noreferrer">➞ See Live today </a>
            

           

        </section>

        <section className="modal-section">
            <h2>Case 3 — Store & Event Concepts</h2>
            <p>
                I designed innovative store concepts and pop-up events to enhance the brand’s 
                physical presence and improve consumer interaction with the platform. 
                Additionally, I developed branding strategies for high-profile events 
                that aligned with the company’s vision of creating an engaging and immersive shopping experience.
            </p>

            <figure className="image-gallery">
            <img src={Image14} alt="ABOUT YOU LAUNCH EVENT AMSTERDAM EVENT IDENTITY" />
            <figcaption className="image-caption"> Moodboard</figcaption>
            <img src={Image13} alt="ABOUT YOU Brand" /> 
                      <figcaption className="image-caption">Anna&Ella new Shoe Brand by ABOUTYOU, Brand Launch Dinner Event in Soho House Barcelona</figcaption>
        </figure>
        </section>
            
    </div>
);

export default AboutYouModalContent;
