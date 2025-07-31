import React from 'react';
import './modal-common.css';
import image1 from '../../Assets/Image_2_EDITED/Editedweb.png';
import image2 from '../../Assets/Image_2_EDITED/Frankfurt_openingdesign.png';
import image4 from '../../Assets/Image_2_EDITED/Image 4.png';
import image17 from '../../Assets/Image_2_EDITED/laidbackopening.png';
import image18 from '../../Assets/Image_2_EDITED/shoe_packaging.png';
import image22 from '../../Assets/Image_2_EDITED/collab-design.png';
import image24 from '../../Assets/Image_2_EDITED/stores.png';
import image25 from '../../Assets/Image_2_EDITED/first-stores.png';
import image26 from '../../Assets/Image_2_EDITED/fashionshow.png';
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
          <li><b>Brand Director/Lead </b> Franziska Nellesen</li>
          <li><b>Freelance Creative Director Editorials & Brand</b> Sonja Klements</li>
          <li><b>Freelance Art Director, Brand, EDITED Paper</b> Sally Milota</li>
          <li><b>Art Director Brand Vision, Stores, Engagement</b> Annemarie Sauerbier</li>
          <li><b>Designer/Art Director </b> Vivien Voss</li>
        </ul>
      </div>
    </div>

    <section className="modal-section">
      <h2>Building the Brand Ecosystem</h2>
      <p>Introducing a redesign concept for the Social Media and the new website, steering the brand towards a more modern and holistic direction.</p>

      <div className="image-gallery">
        <figure>
          <img src={image1} alt="Product Design" />
          <figcaption className="image-caption">Circular e-commerce content design, weekly blog updates, UI redesign—from illustrated top navigation to a classic sidenav with editorial focus over product images.</figcaption>
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
      <p>Developing mood boards, interior concepts, and merchandise displays that reflected the brand's ethos. Established brand books and design guidelines for retail and events to maintain consistency across physical and digital touchpoints.</p>

      <p>Objectives of our Redesign in 2016</p>
      <ul className="checklist">
        <li className="fontWeight">Everything we produce must be shareable—Pinterest posts, Instagram, YouTube, and the in-store experience (each corner should serve as an inviting photo background).</li>
        <li className="fontWeight">Each launch should be memorable.</li>
        <li className="fontWeight">Packaging shall be completely sustainable by 2025.</li>
        <li className="fontWeight">Each store should reflect the city's unique vibes.</li>
        <li className="fontWeight">Everything should be technologically advanced—always use the latest technologies.</li>
      </ul>

      <div className="image-gallery">
        <figure>
          <img src={image24} alt="Store Design" />
          <figcaption className="image-caption">Store design concepts and interior layouts</figcaption>
        </figure>
        
        <figure>
          <img src={image25} alt="First Stores" />
          <figcaption className="image-caption">First store implementations and brand guidelines</figcaption>
        </figure>
        
        <figure>
          <img src={image4} alt="EDITED Store Vienna" />
          <figcaption className="image-caption">EDITED store in Vienna - brand implementation</figcaption>
        </figure>
      </div>
    </section>

    <section className="modal-section">
      <h2>Collection Launches & Collaborations</h2>
      <p>Designing memorable launch events and collaboration concepts that brought the brand to life through innovative experiences and partnerships.</p>

      <div className="image-gallery">
        <figure>
          <img src={image17} alt="Laid Back Launch" />
          <figcaption className="image-caption">EDITED Launch Store Event in Berlin</figcaption>
        </figure>
        
        <figure>
          <img src={image26} alt="Fashion Show" />
          <figcaption className="image-caption">Store Event with Fashion Show Collection Launch</figcaption>
        </figure>
        
        <figure>
          <img src={image18} alt="Shoe Packaging" />
          <figcaption className="image-caption">Sustainable packaging design concepts</figcaption>
        </figure>
        
        <figure>
          <img src={image22} alt="Collaboration Design" />
          <figcaption className="image-caption">Collaboration design examples</figcaption>
        </figure>
      </div>
    </section>

    <section className="modal-section">
      <h2>Key Achievements</h2>
      <ul className="checklist">
        <li>Successfully redesigned brand ecosystem for modern digital presence</li>
        <li>Developed comprehensive corporate identity for retail stores</li>
        <li>Created shareable content strategy for social media platforms</li>
        <li>Established sustainable packaging goals and guidelines</li>
        <li>Implemented technology-forward approach across all touchpoints</li>
        <li>Designed memorable launch events and in-store experiences</li>
      </ul>
    </section>

    <p>
      <a href="https://www.edited.com" target="_blank" rel="noopener noreferrer">
        ➞ See Live on EDITED
      </a>
    </p>
  </div>
);

export default EditedModalContent;