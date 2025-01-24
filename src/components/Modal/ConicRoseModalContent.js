import React from 'react';
import './ConicRoseModalContent.css';

import image1 from '../../Assets/Image_5_Conic Rose/Vision 1.png';
import image2 from '../../Assets/Image_5_Conic Rose/Vision 2.png';


const ConicRoseModalContent= () => (
    <div className="conicrose-modal-content-container">
    
        <h1>Conic Rose</h1>
     <p>
        I love Music, so if I get the change to interpret the music into a visual. I will do my best.
        </p>
 <section className='modal-section'>

 <p> How I Design:
    -When approaching a project, I begin by immersing myself in the music. I listen carefully, allowing the sound to guide my initial impressions. I speak with the musicians to understand their interpretation—what story they want to tell, what emotions they aim to evoke. As we know from both psychology and human-centered design, perception is inherently subjective, shaped by personal experiences, culture, and context. My goal is to bridge their intent with how the audience might perceive and connect with the work.

From there, I analyze the market. I explore what already exists in the genre—what designs resonate with similar audiences and which aesthetics the band themselves gravitate toward. I tread carefully to ensure originality, crafting something unique while ensuring it speaks directly to the listeners who already appreciate this style of music. It’s a delicate balance: creating something distinctive yet instantly recognizable as a reflection of the sound.

I have a strong intuition for color and visualization, often inspired by my own experience as a digger. I’ve bought music purely because of the cover design, and more often than not, it matches my taste perfectly. That’s exactly what I aim to achieve—designs that visually echo the essence of the music, drawing the right audience with clarity and authenticity.
        </p>
        <div className="conicrose-image-gallery">
                    <img src={image1} alt="Vision 1" />
                    <img src={image2} alt="Vision 2" /> 
                    </div>
                    <p>
  <a href="https://conicrose.bandcamp.com/album/heller-tag" target="_blank" rel="noopener noreferrer">🌐Buy Here</a>
</p>
                </section>
    

    </div>
);

export default ConicRoseModalContent;