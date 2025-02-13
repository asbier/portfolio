import React from 'react';
import './modal-common.css';
import image1 from '../../Assets/Image_9_MonaM/Final-LP.png';
import image2 from '../../Assets/Image_9_MonaM/Lp-Mona-M-Teaser.png';

import gif1 from '../../Assets/Image_9_MonaM//5f329f7759b1249a739e9af8_2rot.gif';
import gif2 from '../../Assets/Image_9_MonaM/5f3296783cb04c18cab4ed9f_weiß-3gm-.gif';
import gif3 from '../../Assets/Image_9_MonaM/5f329ee54b42d204b3e78de0_3.gif';


const MonaMModalContent = () => (
    <div className="modal-content-container">
        <h1>Mona M</h1>

            <p>
                Mona M. is a Hamburg-based artist known for her unique blend of electronic, experimental, and alternative music. Drawing influences from ambient, techno, and industrial sounds, Mona M.’s music creates an atmospheric experience, merging abstract soundscapes with emotional depth.
            </p>
            <p>
                Her work often explores themes of identity, technology, and human connection, incorporating innovative production techniques alongside raw, 
                organic elements. With her experimental approach, Mona M. has developed a distinctive voice in the German music scene, captivating listeners 
                with tracks that are both thought-provoking and immersive. Her music continues to push boundaries, 
                challenging traditional genres and offering a fresh perspective on contemporary electronic music.
            </p>

            <div>
                <h3><strong>My Role</strong></h3> <ul className="list"> <li className="fontWeight"> Mona Mandouri - Creative Direction, Responsible 
                    for analog masks, set design, and filming </li><p></p>
  <li className="fontWeight"> Annemarie Sauerbier Creative Direction, Assisted with set design and filming, editing, and graphic design</li>
  </ul>
</div> <p></p>

       

        <section className="modal-section">
            <h2>Album Cover & Videos for Social Media</h2>

            
            <p>
                During the COVID-19 pandemic, we had the unique opportunity to experiment with minimal resources and break traditional creative boundaries. Mona M., the artist behind the project, needed a new album cover, and Mona Mandouri initiated this project. We wanted to create something that blurred the lines between analog and digital, as that's what we felt the music represents.
            </p>
            <figure className="image-gallery">
          <img src={image1} alt="Event" />
        
        </figure>
        <h2>The Process</h2>
            <p>
                As digital art and AI-generated visuals were gaining popularity, we decided to take a different approach: using an analog process with an old iPhone. The aim was to create an image where it’s difficult to tell if it was digitally manipulated or captured in the physical world. Though the final product was digital, the conceptual layers—built with analog patterns and textures—shone through, merging the two worlds.
            </p>
            <h2>The Solution</h2>
    <p></p>

   
            <p>
                The result was a striking, experimental album cover, filled with broken art, 
                abstract patterns, and a raw aesthetic that felt both nostalgic and forward-thinking. Unfortunately, this project never saw the light 
                of day, as the vinyl was never printed or recorded. However, looking back, it feels incredibly relevant to today’s evolving landscape of art and digital media. Shot entirely on an iPhone for maximum flexibility</p>

                <figure className="image-gallery">
         
          <img src={image2} alt="Event" />
     
          <img src={gif1} alt="Event" />
          <img src={gif3} alt="Event" />
          <img src={gif2} alt="Event" />
    
        </figure>
        
        </section>

    </div>
);

export default MonaMModalContent;
