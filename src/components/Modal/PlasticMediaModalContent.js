import React from 'react';
import './PlasticMediaModalContent.css';
import image1 from '../../Assets/Image_6_Plastic Media/Image 1.png';
import image2 from '../../Assets/Image_6_Plastic Media/Image 2.png';
import image3 from '../../Assets/Image_6_Plastic Media/Image 3.png';
import image4 from '../../Assets/Image_6_Plastic Media/Image 4.png';
import gif7 from '../../Assets/Image_6_Plastic Media/10years2.gif';
import gif8 from '../../Assets/Image_6_Plastic Media/10years.gif';

// Ensure the component name matches the export name
const PlasticMediaModalContent = () => (
    <div className="modal-content-container">

     <h2>Plastic Media</h2>
     <section className="modal-section"> 
         <p> <strong>“WE LIVE ONLINE, YET ARE ADDICTED TO THE SMELL
OF FRESHLY PRINTED MAGAZINE PAGES. 
WE IMMERSE OURSELVES IN NEW AND NICHE TRENDS,
WHILE WE STRATEGIZE WITH A COMMERCIAL AWARENESS. 
WE ARE DEEPLY ROOTED IN OUR LOCAL COMMUNITY, WHILST ALSO WORKING WITH THE VERY BEST OF INTERNATIONAL TEAMS.
HELLO, THIS IS PLASTIC MEDIA.”©PLASTIC MEDIA </strong></p>

<p>
Here I had my first deasign-related experiences with International customer contact.
With the Art Director and personal mentor Daniela Bily and CD Kira stachowitz I learned how to use my skills and creatvity in a very free space of Editorial Design, Brand Marketing and Public Relations. We designed the Monki Magazine, 4 Isssues of INDIE and the 
Material Girl Magazine. Aswell we had clients like Tallej Weijl or Hennesy and created a Brand Experience where we 
invited people for a day or night of pleasure and fun.
</p>

<p>
  <a href="https://www.dayone.de" target="_blank" rel="noopener noreferrer">🌐 Learn more about DAYONE</a>

</p>

             <div className="image-gallery">
                    <img src={image1} alt="Plastic" />
                    <img src={image2} alt="Plastic" />
                    <img src={image3} alt="Plastic" />
                    <img src={image4} alt="Plastic" />
                    <img src={gif7} alt="10 years 2" />
                    <img src={gif8} alt="10 years" />
                    </div>
                </section>
    
                   
    </div>
);

export default PlasticMediaModalContent;