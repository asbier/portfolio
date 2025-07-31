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
            <strong>ABOUT YOU is one of Europe's leading fashion e-commerce platforms, revolutionizing online shopping through personalization and digital innovation.</strong>
        </p>
        <p className="role-description">
            As Art Director Brand Experience, I contributed to ABOUT YOU's strategic shift from niche to mainstream, focusing on diversity, inclusivity, and personalization.
        </p>

        <div className="column">
          <div>
            <h3><strong>My Role</strong></h3>
            <ul className="checklist">
              <li>Art Director Brand Experience</li>
              <li>Strategy</li>
              <li>Personalization</li>
            </ul>
          </div>
          <div>
            <h3><strong>Team</strong></h3>
            <ul className="list">
              <li><strong>Brand Director</strong> Franziska Nellesen</li>
              <li><strong>Art Director</strong> Annemarie Sauerbier</li>
            </ul>
          </div>
        </div>

        <section className="modal-section">
            <h2>Holistic Marketing Strategies</h2>
           
            <figure className="image-gallery">
              <img src={Image2} alt="Slider" />
              <figcaption className="image-caption">Final Stories Layout Implementation</figcaption>
            </figure>

            <p>
                I contributed to the strategic shift as ABOUT YOU transitioned from a niche e-commerce platform to a mainstream brand, focusing on diversity, inclusivity, and personalization.
            </p>

            <p><strong>My Strategy</strong></p>
            <ul className="checklist">
              <li className="fontWeight">Shift from catalog images to engaging real-life content with diversity</li>
              <li className="fontWeight">"Stories" feature - Outfits curated for every occasion</li>
              <li className="fontWeight">Personalization strategy - Name-based greetings and tailored experiences</li>
              <li className="fontWeight">Editorial collections launched like high-fashion drops</li>
              <li className="fontWeight">Celebrity collaborations starting with C&B Celebs</li>
            </ul>

            <figure className="image-gallery">
              <img src={Image15} alt="Slider" />
              <figcaption className="image-caption"> Moodboard  - Final Spots and Wireframe</figcaption>
              <img src={Image10} alt="Slider" /> 
              <figcaption className="image-caption">Outcome of Videos - After</figcaption>
              <img src={Image5} alt="Slider" />  
              <figcaption className="image-caption">Outcome of the Editorial Stories - After</figcaption>
              <img src={Image8} alt="Slider" /> 
              <figcaption className="image-caption">Wireframe of Storie Layout - Concept</figcaption>
              <img src={Image9} alt="AY Awards" />
              <figcaption className="image-caption">ABOUT YOU Awards and achievements</figcaption>
            </figure>
        </section>

        <section className="modal-section">
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
            <h2>Influencer and Celebrity Engagement</h2>
            <p>
                I developed strategies for influencer and celebrity collaborations, creating authentic partnerships that resonated with ABOUT YOU's target audience. This included working with celebrities like Gigi Hadid and other high-profile influencers to create aspirational content that drove engagement and sales.
            </p>

            <figure className="image-gallery">
                <img src={Image13} alt="Anna und Ella Brand Soho Event" />
                <figcaption className="image-caption">Anna und Ella Brand - Soho Event</figcaption>
                <img src={Image14} alt="Anna&Ella Moodboard" />
                <figcaption className="image-caption">Anna&Ella Moodboard</figcaption>
            </figure>
        </section>

        <section className="modal-section">
            <h2>Key Achievements</h2>
            <ul className="checklist">
                <li>Successfully rebranded ABOUT YOU from niche to mainstream</li>
                <li>Implemented diversity and inclusivity in brand communication</li>
                <li>Created "Stories" feature for curated outfit narratives</li>
                <li>Developed personalization strategies including name-based greetings</li>
                <li>Launched Emily & Eve shoe brand concept</li>
                <li>Established celebrity and influencer collaboration strategies</li>
            </ul>
        </section>

        <p>
            <a href="https://www.aboutyou.de" target="_blank" rel="noopener noreferrer">
                ➞ See Live on ABOUT YOU
            </a>
        </p>
    </div>
);

export default AboutYouModalContent;
