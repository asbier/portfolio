import React from 'react';
import './modal-common.css';
import image1 from '../../Assets/Image_5_Heroesnheroines/tallyw.png';
import image2 from '../../Assets/Image_5_Heroesnheroines/HennessybyFuturaEvent.png';
import image3 from '../../Assets/Image_5_Heroesnheroines/Bumblebig1.png';
import image4 from '../../Assets/Image_5_Heroesnheroines/Bumble-cards.png';
import image5 from '../../Assets/Image_5_Heroesnheroines/ballons.png';


const HeroesnHeroinesModalContent = () => (
    <div className="modal-content-container">
        <h1>Heroes & Heroines</h1>
        <p><strong>A fearless network of innovators, strategic masterminds, and digital mavericks, we elevate brands to the next level with our 360° APPROACH. Heroes & Heroines ©.</strong></p>
        <p className="role-description">
            As a designer for Heroes & Heroines, I worked on forward-thinking projects across Vienna and Berlin studios for clients like Bumble. Driven by Kira's visionary mindset (CD and CEO of PlasticMedia), we pushed boundaries and challenged conventions through innovative visual designs and cohesive branding strategies.
        </p>
        <div className="column">
              <div>
                <h3><strong>My Role</strong></h3>
                <ul className="checklist">
                  <li>Graphic Design</li>
                  <li>Strategy</li>
                </ul>
              </div>
              <div>
                <h3><strong>Design Team</strong></h3>
                <ul className="list">
                  <li><strong>Creative Director</strong> Kira Stachowitz</li>
                  <li><strong>Lead</strong> Daniela Bily</li>
                  <li><strong>Assistant</strong> Annemarie Sauerbier</li>
                </ul>
              </div>
            </div>
<p></p>

        <section className="modal-section">
            <h2>Tally Weijl Store Opening & Hennessy Event</h2>
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
            <h2>Bumble Event</h2>
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
