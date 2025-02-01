import React from 'react';
import './EditedModalContent.css';
import image1 from '../../Assets/Image_2_EDITED/Image 1.png';
import image2 from '../../Assets/Image_2_EDITED/Image 2.png';
import image3 from '../../Assets/Image_2_EDITED/Image 3.png';
import image4 from '../../Assets/Image_2_EDITED/Image 4.png';
import image5_2 from '../../Assets/Image_2_EDITED/Image 5_2.png';
import image5 from '../../Assets/Image_2_EDITED/Image 5.png';
import image6 from '../../Assets/Image_2_EDITED/Image 6.png';
import image7 from '../../Assets/Image_2_EDITED/Image 7.png';
import image8 from '../../Assets/Image_2_EDITED/Image 8.png';
import image9 from '../../Assets/Image_2_EDITED/Image 9.png';
import image9_2 from '../../Assets/Image_2_EDITED/Image 10.png';
import image10 from '../../Assets/Image_2_EDITED/Image 10.png';
import image11 from '../../Assets/Image_2_EDITED/Image 11.png';
import image12 from '../../Assets/Image_2_EDITED/Image 12.png';
import image13 from '../../Assets/Image_2_EDITED/Image 13.png';
import image14 from '../../Assets/Image_2_EDITED/Image 14.png';
import image15 from '../../Assets/Image_2_EDITED/Image 15.png';
import image16 from '../../Assets/Image_2_EDITED/Edited Product Design.png';
import image17 from '../../Assets/Image_2_EDITED/Edited_Launch.png';

const EditedModalContent = () => (
  <div className="modal-content-container">
    <h1>EDITED the Label</h1>

    <p>
      With modern looks, current trend pieces, and a strong focus on the house-owned brand, EDITED stands for a unique mix of clothes, accessories, and shoes for women passionate about fashion. Created in a multifaceted city like Berlin by an international creative team, EDITED stands out with inspiring and trend-focused fashion that is simply fun. © EDITED the Label.
    </p>

    <p>
      I started at EDITED when the brand was just a year old. EDITED, a daughter company of ABOUT YOU, focuses on trend-driven, data-backed fashion. As an in-house label, EDITED blends contemporary styles with accessibility, offering curated collections that reflect emerging trends. The brand is known for its minimal yet expressive aesthetic, appealing to fashion-conscious consumers. My role involved shaping its art direction, ensuring a cohesive brand identity across digital and print.
    </p>

    <section className="modal-section">
      <p><strong>Building the Brand Ecosystem</strong>: Introducing a redesign concept for the new website, steering the brand toward a more modern and holistic direction.</p>

      <div className="image-gallery">
        <img src={image1} alt="EDITED Web and App" />
        <img src={image2} alt="EDITED Store in Frankfurt" />
      </div>
    </section>

    <section className="modal-section">
      <p><strong>Created the CI (Corporate Identity) for Stores</strong>, developing mood boards, interior concepts, and merchandise displays that reflected the brand’s ethos.</p>
      <p>Established brand books and design guidelines for retail and events to maintain consistency across physical and digital touchpoints.</p>

      <div className="image-gallery">
        <img src={image3} alt="EDITED Laid-Back Launch" />
        <img src={image4} alt="EDITED Store in Vienna" />
        <img src={image5_2} alt="EDITED Store in Munich" />
      </div>
    </section>

    <section className="modal-section">
      <p><strong>Designed concepts for EDITED collections</strong>, including the Shoe Collection and Sport Collection, aligning them with contemporary market trends.</p>
      <p>Developed sustainable packaging concepts, combining design and strategy to enhance eco-conscious branding.</p>

      <div className="image-gallery">
        <img src={image5} alt="EDITED Concepts" />
        <img src={image6} alt="EDITED Store Shoes" />
        <img src={image16} alt="Product Design" />
      </div>
    </section>

    <section className="modal-section">
      <p><strong>Conceptualized and executed fashion show concepts</strong> and exclusive pop-up store designs, ensuring a cohesive and innovative customer experience.</p>
      <p>Participated in editorial shoots to capture backstage content and created engaging video material to amplify campaign coverage.</p>

      <div className="image-gallery">
        <img src={image7} alt="EDITED x InStyle Event in Berlin" />
        <img src={image17} alt="EDITED Launch Store Event in Berlin" />
        <img src={image9_2} alt="Blade Runner Collection 1" />
        <img src={image9} alt="Blade Runner Collection 2" />
        <img src={image10} alt="Blade Runner Collection 3" />
        <img src={image8} alt="Blade Runner Collection 4" />
        <img src={image11} alt="Blade Runner Collection 5" />
        <img src={image15} alt="Nina Kastens Launch Event 1" />
        <img src={image12} alt="Nina Kastens x EDITED Launch Event 2" />
        <img src={image13} alt="Nina Kastens x EDITED Launch Event 3" />
        <img src={image14} alt="Nina Kastens x EDITED Launch Event 4" />
      </div>
    </section>

    <section className="modal-section">
      <p><strong>Designed sustainable packaging concepts</strong>, integrating eco-friendly materials and strategies to align with EDITED's evolving commitment to sustainability.</p>
    </section>

    <section className="modal-section">
      <p><strong>Worked on marketing strategies</strong> that balanced bold ideas with scalability, aligning campaigns with long-term brand objectives.</p>
      <p>Supported team growth and culture by developing workflows that streamlined design production while allowing room for innovation.</p>
    </section>

    <p>
      <strong>Looking back</strong>, it was an exhilarating, fast-paced journey. Both brands experienced rapid growth over those years, and every initiative we launched seemed to succeed. It was an exciting time—full of creativity, risk, and reward. There were moments of self-doubt and times when improvisation was necessary—times I wished for more time—but these challenges made the experience all the more memorable. Ultimately, it was a period of growth and discovery that felt truly magical. If given the chance, I would relive those years in the same way, and likely make the same decision to move on when I did.
    </p>

    <p>
      <a href="https://www.edited.de/" target="_blank" rel="noopener noreferrer">🌐 See Live on EDITED.de</a>
    </p>
  </div>
);

export { EditedModalContent };