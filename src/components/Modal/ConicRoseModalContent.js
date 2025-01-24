import React from 'react';
import './ConicRoseModalContent.css';

import image1 from '../../Assets/Image_5_Conic Rose/Vision 1.png';
import image2 from '../../Assets/Image_5_Conic Rose/Vision 2.png';
import image4 from '../../Assets/Image_5_Conic Rose/Vision 4.png';
import image5 from '../../Assets/Image_5_Conic Rose/Vision 3.png';
import image6 from '../../Assets/Image_5_Conic Rose/Vision 5.png';
import image7 from '../../Assets/Image_5_Conic Rose/Vision 6.png';
import image8 from '../../Assets/Image_5_Conic Rose/Vision 7.png';
import image3 from '../../Assets/Image_5_Conic Rose/Final.png';
import image9 from '../../Assets/Image_5_Conic Rose/How.png';
import image10 from '../../Assets/Image_5_Conic Rose/How 2.png';
import image11 from '../../Assets/Image_5_Conic Rose/How 3.png';
import image12 from '../../Assets/Image_5_Conic Rose/How 4.png';
import image13 from '../../Assets/Image_5_Conic Rose/How 5.png';
import image14 from '../../Assets/Image_5_Conic Rose/Vision-F.png';



const ConicRoseModalContent= () => (
    <div className="conicrose-modal-content-container">
    
        <h1>Conic Rose</h1>
    

        <div className="conicrose-image-gallery">
                    <img src={image3} alt="Final" /> 
                    </div>
                    
     <p>
        I love Music, so if I get the change to interpret the music into a visual. I will do my best.
        </p>

 <section className='modal-section'>
 <h3>How I Design Covers</h3>
 <p> When approaching a project, I begin by immersing myself in the music. 
    I listen carefully, allowing the sound to guide my initial impressions. 
    </p>
    <p>  <strong>I listen  </strong> to the musicians to understand their interpretation—what story they want 
        to tell, what emotions they aim to evoke. As we know from both psychology and human-centered design, 
        perception is inherently subjective, shaped by personal experiences, culture, and context. 
        My goal is to bridge their intent with how the audience might perceive and connect with the work.
 </p>
</section>
<section className='modal-section'>

<p>
<strong>I analyze </strong> market—exploring existing designs in the genre, 
understanding what resonates with audiences, and identifying the band’s preferences. My goal is to craft something original yet instantly recognizable as a reflection of the sound.
</p>

<p>I often mix analog and digital tools to create designs that feel both organic 
and modern. With a strong intuition for color and visualization, I aim to make covers that, 
like the music itself, draw the right audience. As a digger myself, I know the power of a cover 
that perfectly captures the essence of the sound.

</p>

<div className="how-image-gallery">
<img src={image9} alt="How"    />
<img src={image10} alt="How 2" />  
<img src={image11} alt="How 3" />  
<img src={image12} alt="How 4" />  
<img src={image13} alt="How 5" />  
</div>
</section>

<section className='modal-section'>

<p><strong>What I aim to achieve </strong>are designs that visually echo the essence of the music, drawing the right audience with 
clarity and authenticity.
</p>
<div className="how-image-gallery">
                    <img src={image1} alt="Vision 1" />
                    <img src={image2} alt="Vision 2" /> 
                    <img src={image4} alt="Vision 3" /> 
                    <img src={image5} alt="Vision 4" />
                    <img src={image6} alt="Vision 5" />  
                    <img src={image7} alt="Vision 6" />  
                    <img src={image8} alt="Vision 7" />  
                    <img src={image14} alt="Vision-F" />
                    </div>
                    <p>          
  <a href="https://conicrose.bandcamp.com/album/heller-tag" target="_blank" rel="noopener noreferrer">🌐Buy Here</a>
</p>
 </section>

    
 </div>
);

export default ConicRoseModalContent;