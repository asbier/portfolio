import React from 'react';
import './modal-common.css';
import image1 from '../../Assets/Image_5_Heroesnheroines/tallyw.png';
import image2 from '../../Assets/Image_5_Heroesnheroines/HennessybyFuturaEvent.png';
import image3 from '../../Assets/Image_5_Heroesnheroines/Bumblebig1.png';
import image4 from '../../Assets/Image_5_Heroesnheroines/Bumble-cards.png';
import image5 from '../../Assets/Image_5_Heroesnheroines/ballons.png';


const HeroesnHeroinesModalContent = () => (
    <div className="modal-content-container">
        <h2>Heroes & Heroines</h2>

            <p>
                A fearless network of innovators, strategic masterminds, and digital mavericks, we elevate brands to the next level with our 360° APPROACH. Heroes & Heroines ©.
                As a designer for Heroes & Heroines, I had the opportunity to work on forward-thinking and interconnected projects across our studios in Vienna and later as a freelancer in Berlin for clients like Bumble.
                These ideas were truly fast-forward, driven by Kira’s visionary mindset (who is also the CD and CEO of PlasticMedia).
                Her ability to think differently and inspire those around her pushed boundaries and challenged conventions.
                My work involved crafting innovative visual designs, developing cohesive branding strategies for marketing events, and contributing to a fearless, boundary-pushing spirit.
                Collaborating in such an inspiring environment was transformative and reinforced the power of daring creativity in delivering meaningful results.
            </p>
            <div className="column">
  <h3><strong>My Role</strong></h3>
  <ul className="list" >
    <li className="fontWeight">Graphic Design & </li>
    <li className="fontWeight"> Strategy </li>
  </ul>
  <h3><strong>Design Team</strong></h3>
  <ul className="list" >
  <li className="list">Lead Daniela Bily</li><p></p>
    <li className="fontWeight"> Assistant Annemarie Sauerbier </li>
  </ul>
</div>
<p></p>

        <section className="modal-section">
            <h2>CASE 2 — Tally Weijl Store Opening & Hennessy Event</h2>
            <p>
                I contributed to the strategy for bringing the Tally Weijl event to life. Additionally, I created graphic designs for the stations we set up in the shop.
                The experience had a circus theme, and the event was attended by influencers and artists from Austria and the UK "Flagship Store-Opening with Pixie Geldof".
                
            </p>
            <figure className="image-gallery">
          <img src={image1} alt="tally" />
          <figcaption className="image-caption">Talley Wejl Opening</figcaption>
        </figure>
        <figure className="image-gallery">
          <img src={image2} alt="tally" />
          <figcaption className="image-caption">Hennessy by Futura in Vienna - Artist Tour Event Design</figcaption>
        </figure>

        <p>Aswell my first Event was a Hennessy Launch Event. We created a Street Art Theme.
            With A bar the Artist Who Designed the Bottle was invited and some Low brow artist did Live Action Painting with Futura.</p>
        </section>

        <section className="modal-section">
            <h2>CASE 1 — Bumble Event</h2>
            <p>I was primarily responsible for the graphic design during the event's execution.</p>
           
            <figure className="image-gallery">
          <img src={image3} alt="Event" />
          <img src={image4} alt="Event" />
          <img src={image5} alt="Event" />
          <figcaption className="image-caption">Bumble Event Desig / Graphics</figcaption>
        </figure>

        </section>

        <p>
          
            <p>
        <a href="https://www.heroes-heroines.com/" target="_blank" rel="noopener noreferrer"> ➞ Learn more about Heroes&heroines</a>
      </p>
        </p>
    </div>
);

export default HeroesnHeroinesModalContent;
