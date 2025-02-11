import React from 'react';
import './modal-common.css';
import image1 from '../../Assets/Image_8_Comma/Image 1.png';
import image2 from '../../Assets/Image_8_Comma/Image 2.png';
import image3 from '../../Assets/Image_8_Comma/Image 3.png';
import image4 from '../../Assets/Image_8_Comma/Image-4.png';
import image5 from '../../Assets/Image_8_Comma/Image-5.png';
import image6 from '../../Assets/Image_8_Comma/Image-6.png';
import image7 from '../../Assets/Image_8_Comma/Image-7.png';
// Ensure the component name matches the export name
const CommaModalContent = () => (

    <div className="modal-content-container">
  
  
  <h1>Comma</h1>
<p>
    Comma is a fashion brand that blends modern trends with timeless design, offering high-quality, versatile pieces 
    for those seeking sophistication and comfort.
</p>

<div><h3><strong>My Role</strong></h3>
  <ul className="list" >
  <li className="fontWeight">Freelance Art Director for creating Magazines</li>
  </ul>
</div> <p></p>

        <div className="modal-section">
        
        <h2>The Challenge</h2>
    <p>
        Comma needed a fresh approach to attract a younger audience while maintaining its classic appeal. 
        Their catalog, previously a simple brochure, required a redesign to elevate the brand’s image and create a seamless 
        e-commerce experience.
    </p>

    <h2>The Solution</h2>
    <p>
        I developed a dynamic, zine-style lookbook featuring bold typography, collage elements, and modern aesthetics. 
        This design was translated into a digital experience using parallax scrolling and interactive visuals, 
        ensuring a cohesive print-to-web transformation.
    </p>

    <h2>The Outcome</h2>
    <p>
        The redesign successfully resonated with both younger and older audiences, creating a unified brand experience. 
        The innovative web concept won an award for its unique collage style and immersive user experience.
    </p>



             <div className="image-gallery">
             <img src={image6} alt="Comma Mag4" />
             
             <img src={image5} alt="Comma Mag3" />
                    <img src={image3} alt="Comma Mag4" />
                    <img src={image4} alt="Comma Mag4" />
                    <img src={image7} alt="Comma Mag4" />
                    <img src={image1} alt="Comma Mag1" />
                    <img src={image2} alt="Comma Mag1" />
                   
                    
                    </div>

                    </div>         


                   
 
<p>
  <a href="https://www.deptagency.com/de-dach/" target="_blank" rel="noopener noreferrer"> ➞ Learn more about former SuperReal now deptagency</a>
  </p>

 </div>
);

export default CommaModalContent;