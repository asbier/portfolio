import React from 'react';
import './HeroesnHeroinesModalContent';
import image1 from '../../Assets/Image_5_Heroesnheroines/Image 8.png';

// Ensure the component name matches the export name
const HeroesnHeroinesModalContent = () => (
    <div className="modal-content-container">

     <h2>Heroes & Heroines</h2>
     <section className="modal-section"> 
         <p> <strong>A fearless network of innovators, strategic masterminds, and digital mavericks, we elevate brands to the next level with our 360° APPROACH.©Heroes-heroines</strong> 
         As a designer for Heroes and Heroines, I had the opportunity to work on forward-thinking and interconnected projects across our studios in Vienna and as Freelancer later in Berlin for Clients like Bumble. These ideas were truly fast-forward, driven by Kira’s visionary mindset (who is also the CD and CEO of PlasticMedia btw). Her ability to think differently and inspire those around her pushed boundaries and challenged conventions.
My work involved crafting innovative visual designs, developing cohesive branding strategies for Maketing Events, and contributing to fearless, boundary-pushing spirit. Collaborating in such an inspiring environment was transformative and reinforced the power of daring creativity in delivering meaningful results. </p>

<p>
  <a href=" https://www.heroes-heroines.com/" target="_blank" rel="noopener noreferrer">🌐 Learn more about heroes&heroines </a>

</p>


             <div className="image-gallery">
                    <img src={image1} alt="Bumble" />
                    </div>
                </section>
        

          
    </div>
);

export default HeroesnHeroinesModalContent;