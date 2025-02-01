import React from 'react';
import './PlasticMediaModalContent.css';
import image1 from '../../Assets/Image_6_Plastic Media/Image 1.png';
import image2 from '../../Assets/Image_6_Plastic Media/Image 2.png';
import image3 from '../../Assets/Image_6_Plastic Media/Image 3.png';
import image4 from '../../Assets/Image_6_Plastic Media/Image 4.png';
import gif7 from '../../Assets/Image_6_Plastic Media/10years2.gif';
import gif8 from '../../Assets/Image_6_Plastic Media/10years.gif';

const PlasticMediaModalContent = () => (
  <div className="modal-content-container">
    <h2>Plastic Media</h2>

    <section className="modal-section"> 
      <p><strong>“WE LIVE ONLINE, YET ARE ADDICTED TO THE SMELL OF FRESHLY PRINTED MAGAZINE PAGES.  
      WE IMMERSE OURSELVES IN NEW AND NICHE TRENDS, WHILE WE STRATEGIZE WITH A COMMERCIAL AWARENESS.  
      WE ARE DEEPLY ROOTED IN OUR LOCAL COMMUNITY, WHILST ALSO WORKING WITH THE VERY BEST OF INTERNATIONAL TEAMS.  
      HELLO, THIS IS PLASTIC MEDIA.” ©PLASTIC MEDIA</strong></p>

      <p>Here I had my first design-related experiences with international customer contact.  
      Under the mentorship of Art Director Daniela Bily and Creative Director Kira Stachowitz,  
      I learned how to channel my skills and creativity within the realms of editorial design, brand marketing, and public relations.  
      We designed the Monki Magazine, four issues of INDIE Magazine, and Material Girl Magazine.</p>

      <p>Additionally, we worked with clients like Tally Weijl and Hennessy, creating brand experiences  
      that invited people to immerse themselves in unforgettable events filled with pleasure and fun.</p>
    </section>

    <section className="modal-section">
      <h3>INDIE Magazine</h3>
      <p>INDIE Magazine is a renowned independent fashion and culture publication that originally started in Austria before relocating to Berlin.  
      Founded by Plastic Media and Kira Stachowitz (Creative Head), along with Clemens Steinmüller (Chapter Magazine),  
      the magazine quickly gained international recognition for its bold aesthetics, avant-garde storytelling, and fresh take on youth culture.</p>

      <p>While its origins lie in Austria, INDIE evolved within Berlin’s dynamic creative scene, embracing the city's progressive and experimental spirit.  
      The magazine merges fashion, art, and cultural commentary, showcasing both emerging talents and established voices.  
      With a strong emphasis on visual storytelling and edgy editorial design, INDIE remains a pioneering force in independent publishing,  
      bridging Austrian craftsmanship with Berlin’s underground energy.</p>
    </section>

    <p>
      <a href="https://www.dayone.de" target="_blank" rel="noopener noreferrer">🌐 Learn more about DAYONE</a>
    </p>

    <div className="image-gallery">
      <img src={image1} alt="Plastic Media Design 1" />
      <img src={image2} alt="Plastic Media Design 2" />
      <img src={image3} alt="Plastic Media Design 3" />
      <img src={image4} alt="Plastic Media Design 4" />
      <img src={gif7} alt="Plastic Media - 10 Years Celebration (2)" />
      <img src={gif8} alt="Plastic Media - 10 Years Celebration" />
    </div>
  </div>
);

export default PlasticMediaModalContent;
