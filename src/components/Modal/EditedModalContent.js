import React from 'react';
import './modal-common.css';
import image1 from '../../Assets/Image_2_EDITED/Editedweb.png';
import image2 from '../../Assets/Image_2_EDITED/Frankfurt_openingdesign.png';
import image4 from '../../Assets/Image_2_EDITED/Image 4.png';
import image5_2 from '../../Assets/Image_2_EDITED/Image 5_2.png';
import image15 from '../../Assets/Image_2_EDITED/Image 15.png';
import image17 from '../../Assets/Image_2_EDITED/laidbackopening.png';
import image18 from '../../Assets/Image_2_EDITED/shoe_packaging.png';
import image19 from '../../Assets/Image_2_EDITED/bladerunnerc.png';
import image20 from '../../Assets/Image_2_EDITED/launchevent-mexico.png';
import image21 from '../../Assets/Image_2_EDITED/umkleide.png';
import image22 from '../../Assets/Image_2_EDITED/collab-design.png';
import image23 from '../../Assets/Image_2_EDITED/Online.png';
import image24 from '../../Assets/Image_2_EDITED/stores.png';
import image25 from '../../Assets/Image_2_EDITED/first-stores.png';
import image26 from '../../Assets/Image_2_EDITED/fashionshow.png';
import image27 from '../../Assets/Image_2_EDITED/berlin-collection.png';
import image28 from '../../Assets/Image_2_EDITED/Luma.png'
import image29 from '../../Assets/Image_2_EDITED/malaika.png';
import image30 from '../../Assets/Image_2_EDITED/priouette.png';
import image31 from '../../Assets/Image_2_EDITED/Pullver-Design.png';
import image32 from '../../Assets/Image_2_EDITED/magazines.png';

const EditedModalContent = () => (
  <div className="modal-content-container">
    <h1>EDITED the Label</h1>
    <p>
      <strong>With modern looks, current trend pieces, and a strong focus on the house-owned brand, EDITED stands for a unique mix of clothes, accessories, and shoes for women passionate about fashion. Created in a multifaceted city like Berlin by an international creative team, EDITED stands out with inspiring and trend-focused fashion that is simply fun. © EDITED the Label.</strong>
    </p>
    <p className="role-description">
      In 2016/2017, I contributed to the brand's creative direction and rebranding efforts, working on strategy, personalization, and user experience.
    </p>
    
    <div className="column">
      <div>
        <h3><strong>My Role</strong></h3>
        <ul className="checklist">
          <li>Art Director</li>
          <li>Content Designer</li>
          <li>Concepter</li>
        </ul>
      </div>
      <div>
        <h3><strong>Design Team</strong></h3>
        <ul className="list">
          <li><b>Brand Director</b> Franziska Nellesen</li>
          <li><b>Freelance Art Director Editorials & Brand</b> Sonja Klements</li>
          <li><b>Freelance Art Director, Brand, EDITED Paper</b> Sally Milota</li>
          <li><b>Art Director Brand Vision, Stores, Engagement</b> Annemarie Sauerbier</li>
          <li><b>Designer</b> Vivien Voss</li>
        </ul>
      </div>
    </div>

    <section className="modal-section">


    <h2>Building the Brand Ecosystem</h2>


      <p>Introducing a redesign concept for the Social Media and the new website, 
        steering the brand towards a more modern and holistic direction.</p>



      <div className="image-gallery">
          <figure>
            <img src={image1} alt="Product Design" />
            <figcaption className="image-caption"> Circular e-commerce content design, weekly blog updates, UI redesign—from illustrated top navigation to a classic sidenav with editorial focus over product images.</figcaption>
          </figure>
          
          <figure>
            <img src={image32} alt="EDITED Paper Design" />  
            <figcaption className="image-caption">In 2017, we shifted #EDITEDpaper from four to two larger print issues per year, with all designers contributing to design and illustrations.</figcaption>
          </figure>
 
          <figure>
            <img src={image2} alt="EDITED Store Events" />
            <figcaption className="image-caption">EDITED store scaling, launch events, and merchandise, including in-store displays.</figcaption>
          </figure>
        </div>


    </section>

    <section className="modal-section">
      <h2>Corporate Identity for EDITEDtheLabel Stores</h2> 
      <p>Developing mood boards, interior concepts, and merchandise displays that reflected the brand's ethos.</p>
      <p>Established brand books and design guidelines for retail and events to maintain 
        consistency across physical and digital touchpoints.</p>


        <p>Objectives of our Redesign in 2016</p>
<ul className="checklist">
  <li className="fontWeight">Everything we produce must be shareable—Pinterest posts, Instagram, YouTube, and the in-store experience (each corner should serve as an inviting photo background).</li>
  <li className="fontWeight">Each launch should be memorable.</li>
  <li className="fontWeight">Packaging shall be completely sustainable by 2025.</li>
  <li className="fontWeight">Each store should reflect the city's unique vibes.</li>
  <li className="fontWeight">Everything should be technologically advanced—always use the latest technologies.</li>
  <li className="fontWeight">Consistent experiences across all touchpoints.</li>
  <li className="fontWeight">High-quality, mid-level pricing—affordable yet premium.</li>
</ul>


      <div className="image-gallery">
      <img src={image24} alt="EDITED Laid-Back Launch" />
      <img src={image25} alt="All Stores" />
        <img src={image4} alt="EDITED Store in Vienna" />
        <img src={image21} alt="Umkleide" />
        <img src={image5_2} alt="EDITED Window-Store in Munich" />
      </div>
    </section>

    <section className="modal-section">
      <h2>Concept-Collections and Influencer Collaborations </h2>

      <figure className="image-gallery">
          <img src={image18} alt="Product Design" />
          <img src={image22} alt="Collab Design" />
          <img src={image31} alt="Product Design" />
          <figcaption className="image-caption">Examples of Collab Design </figcaption>
        </figure>

    </section>

    <section className="modal-section">
      <h2>Collection Launch Events</h2>

      <figure className="image-gallery">
    <img src={image17} alt="EDITED Launch Store Event in Berlin" />
    <img src={image26} alt="EDITED Launch Store Event in Berlin" />
    <figcaption className="image-caption">Store Event with Fashionshow Collection Launch</figcaption>
    <img src={image28} alt="Luma" />
    <figcaption className="image-caption">EDITED x Luma Grothe launch in Berlin</figcaption>
    <img src={image29} alt="Product Design" />
    <figcaption className="image-caption">EDITED launch of a new collection</figcaption>
    <img src={image30} alt="Product Design" />
    <figcaption className="image-caption">EDITED x Malaika Raiss</figcaption>
    <img src={image15} alt="Nina Kastens Launch Event 1" />
    <figcaption className="image-caption">EDITEDxNina Kastens Event & Website Launch</figcaption>
    <img src={image19} alt="Bladerunner" />
    <figcaption className="image-caption">Blade Runner collection launch </figcaption>
    <img src={image20} alt="New Mexico Collection Launch" />
    <figcaption className="image-caption">New Mexico collection launch Dinner </figcaption>
    <img src={image27} alt="VideoMaterial Collections" />
    <figcaption className="image-caption">Campaign Videos for Shop, App and Social Media usage</figcaption>
    <img src={image23} alt="Online-Launch" />
    <figcaption className="image-caption">Campaigns Online matching Offline Events</figcaption>
    </figure>
    </section>



    <p>
      <a href="https://www.edited.de/" target="_blank" rel="noopener noreferrer">➞ See Live on EDITED.de</a>
    </p>
  </div>
);

export { EditedModalContent };