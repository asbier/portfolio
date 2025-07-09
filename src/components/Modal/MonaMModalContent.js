import React from 'react';
import './modal-common.css';
import image1 from '../../Assets/Image_9_MonaM/Final-LP.png';
import image2 from '../../Assets/Image_9_MonaM/Lp-Mona-M-Teaser.png';
import image3 from '../../Assets/Image_9_MonaM/5f329f7759b1249a739e9af8_2rot.gif';


import gif2 from '../../Assets/Image_9_MonaM/5f3296783cb04c18cab4ed9f_weiß-3gm-.gif';
import gif3 from '../../Assets/Image_9_MonaM/5f329ee54b42d204b3e78de0_3.gif';


const MonaMModalContent = () => (
    <div className="modal-content-container">
        <h1>Mona M</h1>
            <p>
            <strong>Mona M. is a Hamburg-based artist known for her unique blend of electronic, experimental, and alternative music. Drawing influences from ambient, techno, and industrial sounds, Mona M.'s music creates an atmospheric experience, merging abstract soundscapes with emotional depth. Her work often explores themes of identity, technology, and human connection, incorporating innovative production techniques alongside raw, organic elements.</strong>
        </p>
        <p className="role-description">
            As creative director and visual artist for this project, I blended analog and digital techniques during the pandemic to create experimental album artwork that mirrors the music's boundary-pushing aesthetic.
        </p>

        <div className="column">
          <div>
            <h3><strong>My Role</strong></h3>
            <ul className="checklist">
              <li>Art Direction</li>
              <li>Set Design and filming, Edit</li>
            </ul>
          </div>
            <div>
            <h3><strong>Team</strong></h3>
            <ul className="list">
              <li><strong>Creative Director</strong> Mona Mandouri</li>
              <li><strong>Art Direction</strong> Annemarie Sauerbier</li>
  </ul>
          </div>
        </div>

        <section className="modal-section">
            <h2>Album Art Creative Direction</h2>
            <p>For this unique collaboration, I worked closely with Mona M. during the pandemic to create album artwork that captures the essence of her experimental electronic music. The project required a blend of analog and digital techniques, incorporating mask-making, set design, and filming to produce visually striking content.</p>
            <p>The creative process involved exploring themes of identity and technology through visual storytelling, using innovative production methods that mirror the artist's own approach to music creation. The resulting artwork challenges traditional boundaries between analog craftsmanship and digital artistry.</p>

            <div className="image-gallery">
                <img src={image1} alt="Mona M creative direction" />
                <img src={image2} alt="Mona M creative direction" />
                <img src={image3} alt="Mona M creative direction" />
                <img src={gif2} alt="Mona M creative direction" />
                <img src={gif3} alt="Mona M creative direction" />
            </div>
        </section>
    </div>
);

export default MonaMModalContent;
