import React from 'react';
import './modal-common.css';
import image1 from '../../Assets/Image_6_Plastic Media/Image-1.png';
import image2 from '../../Assets/Image_6_Plastic Media/Image-2.png';
import image3 from '../../Assets/Image_6_Plastic Media/Image-3.png';
import image4 from '../../Assets/Image_6_Plastic Media/Image-4.png';
import image5 from '../../Assets/Image_6_Plastic Media/CollageTypografie.png';
import image6 from '../../Assets/Image_6_Plastic Media/monki2.png';
import image7 from '../../Assets/Image_6_Plastic Media/monki3.png';
import image8 from '../../Assets/Image_6_Plastic Media/monki4.png';
import image9 from '../../Assets/Image_6_Plastic Media/monkisurvival.png';
import image10 from '../../Assets/Image_6_Plastic Media/Indie2.png';
import gif7 from '../../Assets/Image_6_Plastic Media/10years2.gif';
import gif8 from '../../Assets/Image_6_Plastic Media/10years.gif';

const PlasticMediaModalContent = () => (
  <div className="modal-content-container">
    <h1>Plastic Media</h1>

    
      <p><strong>“WE LIVE ONLINE, YET ARE ADDICTED TO THE SMELL OF FRESHLY PRINTED MAGAZINE PAGES.  
      WE IMMERSE OURSELVES IN NEW AND NICHE TRENDS, WHILE WE STRATEGIZE WITH A COMMERCIAL AWARENESS.  
      WE ARE DEEPLY ROOTED IN OUR LOCAL COMMUNITY, WHILST ALSO WORKING WITH THE VERY BEST OF INTERNATIONAL TEAMS.  
      HELLO, THIS IS PLASTIC MEDIA.” ©PLASTIC MEDIA</strong></p>

      <p className="role-description">
        Here I had my first design-related experiences with international customer contact. Under the mentorship of Art Director Daniela Bily and Creative Director Kira Stachowitz, I learned how to channel my skills and creativity within the realms of editorial design, brand marketing, and public relations. We designed the Monki Magazine, four issues of INDIE Magazine, and Material Girl Magazine.
      </p>
     
     
      <div className="column">
  <h3><strong>My Role</strong></h3>
  <ul className="checklist" >
    <li className="fontWeight"> Editorial Design & </li>
    <li className="fontWeight"> Strategy </li>
  </ul>
  <h3><strong>Design Team</strong></h3>
  <ul className="list" >
  <li className="list"><b>Lead </b> Daniela Bily</li>
    <li className="fontWeight"> <b>Assistant </b> Annemarie Sauerbier </li>
  </ul>
</div>
<p></p>

    <section className="modal-section">
      <h3>INDIE & Material - Girl Magazine</h3>
      <p>INDIE Magazine is a renowned independent fashion and culture publication that originally started in Austria before relocating to Berlin.  
      Founded by Plastic Media and Kira Stachowitz (Creative Head), along with Clemens Steinmüller (Chapter Magazine),  
      the magazine quickly gained international recognition for its bold aesthetics, avant-garde storytelling, and fresh take on youth culture.</p>

      <p>While its origins lie in Austria, INDIE evolved within Berlin’s dynamic creative scene, embracing the city's progressive and experimental spirit.  
      The magazine merges fashion, art, and cultural commentary, showcasing both emerging talents and established voices.  
      With a strong emphasis on visual storytelling and edgy editorial design, INDIE remains a pioneering force in independent publishing,  
      bridging Austrian craftsmanship with Berlin’s underground energy.</p>

    <figure className="image-gallery">
          <img src={image1} alt="Product Design" />
          <img src={image10} alt="Collab Design" />
          <img src={image2} alt="Collab Design" />
          
          <img src={image3} alt="Product Design" />
          <img src={image5} alt="Product Design" />
       
          <img src={gif7} alt="Product Design" />
          <img src={gif8} alt="Product Design" />
          <figcaption className="image-caption">Editorial Design & illustration</figcaption>
        </figure>

    </section>
<section className="modal-section">

<h3>Monki Magazine</h3>
      <p>We created the Monki Magazines</p>
<figure className="image-gallery">
        
          <img src={image4} alt="Product Design" />
          <img src={image6} alt="Product Design" />
          <img src={image7} alt="Product Design" />
          <img src={image9} alt="Product Design" />
          <img src={image8} alt="Product Design" />
          <figcaption className="image-caption">Editorial Design & illustration</figcaption>
        </figure>

</section>


    <p>
        <a href="https://www.heroes-heroines.com/" target="_blank" rel="noopener noreferrer"> ➞ Learn more about Plastic Media</a>
    
        </p>


  </div>
);

export default PlasticMediaModalContent;
