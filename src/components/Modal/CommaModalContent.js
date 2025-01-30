import React from 'react';
import './CommaModalContent.css';
import image1 from '../../Assets/Image_8_Comma/Image 1.png';
import image2 from '../../Assets/Image_8_Comma/Image 2.png';
import image3 from '../../Assets/Image_8_Comma/Image 3.png';
// Ensure the component name matches the export name
const CommaModalContent = () => (

    <div className="modal-content-container">
  
  
     <h4>Comma</h4>
     Comma is a fashion brand known for its modern, stylish collections that blend contemporary 
     trends with timeless design. 
     Focused on offering high-quality, versatile pieces, 
     Comma targets a diverse audience seeking sophistication and comfort.
<p></p>

        <div className="modal-section">
        
        <h4>Problem</h4>
        Comma needed a fresh approach to engage a younger audience while retaining its appeal to an older demographic. 
        The catalog, previously similar to a brochure with small product images and numbers, 
        required a redesign that would highlight the new collection and elevate the brand’s image. 
        Additionally, the project aimed to translate this new editorial direction into a compelling and 
        seamless e-commerce experience.


        <p><strong>I was brought in to create an editorial lookbook that went beyond simply showcasing the collection.</strong> 
        <p></p>The solution was to develop a dynamic, visually rich zine-style magazine that provided styling inspiration, brand insights, and a deeper connection with the models and materials used in the collection.

To address the needs of the younger demographic, I focused on a collage-driven approach, incorporating serif-less typography, bold patterns, and a modern aesthetic, while keeping the colors and typography grounded in classic design elements. This blend of modernity and tradition captured the essence of the brand while appealing to a younger audience.

Recognizing the need for a seamless integration between the physical magazine and the online shopping experience, I worked with the developer to translate the design into the digital world. The collage style and parallax scrolling effects were incorporated into the web version, creating a dynamic and immersive online shopping experience.

The result was a holistic design concept where both print and web came together as a cohesive brand experience, delivering a consistent aesthetic across all platforms.
</p>
<p><strong>The web concept won an award for its innovative parallax scrolling and collage style. </strong>The redesign resonated with both younger and older audiences, creating a cohesive print-digital experience driving success.
</p>


             <div className="image-gallery">
                    <img src={image1} alt="Comma Mag1" />
                    <img src={image2} alt="Comma Mag1" />
                    <img src={image3} alt="Comma Mag3" />
                    </div>

                    </div>         


                   
 
<p>
  <a href="https://www.deptagency.com/de-dach/" target="_blank" rel="noopener noreferrer">🌐 Learn more about former SuperReal now deptagency</a>
  </p>

 </div>
);

export default CommaModalContent;