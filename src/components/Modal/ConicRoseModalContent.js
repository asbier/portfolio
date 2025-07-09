import React from 'react';
import './modal-common.css';

import image1 from '../../Assets/Image_4_Conic Rose/Vision 1.png';
import image2 from '../../Assets/Image_4_Conic Rose/Vision 2.png';
import image5 from '../../Assets/Image_4_Conic Rose/Vision 3.png';
import image6 from '../../Assets/Image_4_Conic Rose/Vision 5.png';
import image7 from '../../Assets/Image_4_Conic Rose/Vision 6.png';
import image8 from '../../Assets/Image_4_Conic Rose/Vision 7.png';
import image3 from '../../Assets/Image_4_Conic Rose/Final.png';

import image10 from '../../Assets/Image_4_Conic Rose//How-2.png';

import image12 from '../../Assets/Image_4_Conic Rose/How 4.png';
import image13 from '../../Assets/Image_4_Conic Rose/How 5.png';
import image14 from '../../Assets/Image_4_Conic Rose/Vision-F.png';

const ConicRoseModalContent = () => (
  <div className="modal-content-container">
    <h1>Conic Rose Album </h1>
    <p>
      <strong>Worked up via Bertram Burkert's mournful guitar improvisations, the cut and thrust of city life seeps through this Berlin band's teary debut. From the wistful vistas of Honeylake, filmic heartbreak of Uli to the wispy, held-in Chopin Rosé, its progressively playful tracks dabble with Hassell, Bach, Radiohead, hip-hop beats and woozy electronics, providing a masterful showcase for the mazy trumpet melodics and forlorn flugelhorns of Konstantin Döben.**** Mojo Music Magazine (2023)</strong>
    </p>
    <p className="role-description">
      As album cover designer, I interpreted the band's emotional soundscape into visual form, creating artwork that captures the essence of their Berlin-influenced experimental music.
    </p>

    <div className="column">
      <div>
        <h3><strong>My Role</strong></h3>
        <ul className="checklist">
          <li>Album Cover Design</li>
          <li>Visual Concept Development</li>
        </ul>
      </div>
    </div>

    <p>
      <a href="https://conicrose.bandcamp.com/album/heller-tag" target="_blank" rel="noopener noreferrer">
      ➞ Buy Here
      </a>
    </p>

    <section className="modal-section">
      <h2>Album Cover Artwork</h2>
      <p></p>
      <h3>Challenge</h3>
      <p>
        Album Cover Design for a Jazz band where it was not sure what songs will be on that album. The project was mentored by the artist CLUESO. The challenge was to create visual identity for music that was still evolving, capturing the essence of a jazz band's experimental sound while working with uncertainty about the final tracklist.
      </p>

      <h3>My Approach</h3>
      <p>
        When approaching Album-Cover Design, I begin by immersing myself in the music. I listen carefully, allowing
        the sound to guide my initial impressions.
      </p>

      <p>
        I listen to the musicians to understand their interpretation—what story they want to tell, what emotions they
        aim to evoke. As we know from both psychology and human-centered design, perception is inherently subjective,
        shaped by personal experiences, culture, and context.
      </p>

      <p>
        My goal is to bridge their intent with how the audience might perceive and connect with the work.
      </p>

      <p>
        I analyze the market—exploring existing designs in the genre, understanding what resonates with audiences, and
        identifying the band's preferences. My goal is to craft something original yet instantly recognizable as a
        reflection of the sound.
      </p>

      <div className="image-gallery">
        <img src={image10} alt="How-2" />
        <img src={image1} alt="Vision 1" />
        <img src={image2} alt="Vision 2" />
        <img src={image5} alt="Vision 3" />
        <img src={image6} alt="Vision 5" />
        <img src={image7} alt="Vision 6" />
        <img src={image8} alt="Vision 7" />
        <img src={image12} alt="How 4" />
        <img src={image13} alt="How 5" />
      </div>

      <h3>Solution</h3>
      <p>
        I often mix analog and digital tools to create designs that feel both organic and modern. With a strong
        intuition for color and visualization, I aim to make covers that, like the music itself, draw the right audience.
        As a digger myself, I know the power of a cover that perfectly captures the essence of the sound.
      </p>

      <p>
        What I aim to achieve are designs that visually echo the essence of the music, drawing the right audience with
        clarity and authenticity.
      </p>

      <div className="image-gallery">
        <img src={image14} alt="Vision-F" />
        <img src={image3} alt="Final" />
      </div>
    </section>
  </div>
);

export default ConicRoseModalContent;
