import React from 'react';
import './modal-common.css';
import image1 from '../../Assets/Image_5_Heroesnheroines/Tallyudnhennesy.png';
import image3 from '../../Assets/Image_5_Heroesnheroines/Bumblebig1.png';
import image4 from '../../Assets/Image_5_Heroesnheroines/Bumble cards.png';


const HeroesnHeroinesModalContent = () => (
    <div className="modal-content-container">
        <h2>Heroes & Heroines</h2>

        <section className="modal-section">
            <p>
                A fearless network of innovators, strategic masterminds, and digital mavericks, we elevate brands to the next level with our 360° APPROACH. Heroes & Heroines ©.
                As a designer for Heroes & Heroines, I had the opportunity to work on forward-thinking and interconnected projects across our studios in Vienna and later as a freelancer in Berlin for clients like Bumble.
                These ideas were truly fast-forward, driven by Kira’s visionary mindset (who is also the CD and CEO of PlasticMedia).
                Her ability to think differently and inspire those around her pushed boundaries and challenged conventions.
                My work involved crafting innovative visual designs, developing cohesive branding strategies for marketing events, and contributing to a fearless, boundary-pushing spirit.
                Collaborating in such an inspiring environment was transformative and reinforced the power of daring creativity in delivering meaningful results.
            </p>
        </section>

        <section className="modal-section">
            <h2>CASE 2 — Tally Weijl Store Opening & After Party</h2>
            <p>
                I contributed to the strategy for bringing the Tally Weijl event to life. Additionally, I created graphic designs for the stations we set up in the shop.
                The experience had a circus theme, and the event was attended by influencers and artists from Austria and the UK.
            </p>
            <figure className="image-gallery">
          <img src={image1} alt="tally" />
         
          <figcaption className="image-caption">Bumble Event Desig / Graphics</figcaption>
        </figure>
        </section>

        <section className="modal-section">
            <h2>CASE 1 — Bumble Event</h2>
            <p>I was primarily responsible for the graphic design during the event's execution.</p>
            <figure className="image-gallery">
          <img src={image3} alt="Event" />
          <img src={image4} alt="Event" />
          <figcaption className="image-caption">Bumble Event Desig / Graphics</figcaption>
        </figure>
        </section>

        <p>
            <a href="https://www.heroes-heroines.com/" target="_blank" rel="noopener noreferrer">
                Learn more about Heroes & Heroines
            </a>
        </p>
    </div>
);

export default HeroesnHeroinesModalContent;
