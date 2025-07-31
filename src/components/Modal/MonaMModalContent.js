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
            <strong>Mona M. is a Hamburg-based artist known for her unique blend of electronic, experimental, and alternative music. Drawing influences from ambient, techno, and industrial sounds, Mona M.'s music creates an atmospheric experience, merging abstract soundscapes with emotional depth.</strong>
        </p>
        <p className="role-description">
            As visual artist for this project, I blended analog and digital techniques to create experimental album artwork that mirrors the music's boundary-pushing aesthetic. All during the pandemic.
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
            <h2>Album Artwork</h2>
            <div className="image-gallery">
                <img src={image1} alt="Mona M creative direction" />
                <img src={image2} alt="Mona M creative direction" />
                <img src={image3} alt="Mona M creative direction" />
                <img src={gif2} alt="Mona M creative direction" />
                <img src={gif3} alt="Mona M creative direction" />
            </div>
        </section>

        <section className="modal-section">
            <h2>Key Achievements</h2>
            <ul className="checklist">
                <li>Created experimental album artwork</li>
                <li>Blended analog and digital techniques</li>
                <li>Explored themes of identity and technology</li>
                <li>Challenged boundaries between analog and digital artistry</li>
            </ul>
        </section>
    </div>
);

export default MonaMModalContent;
