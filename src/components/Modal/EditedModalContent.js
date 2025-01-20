import React from 'react';
import './EditedModalContent.css';
import image1 from '../../Assets/Image 4_EDITED/Image 1.png';
import image2 from '../../Assets/Image 4_EDITED/Image 2.png';
import image3 from '../../Assets/Image 4_EDITED/Image 3.png';
import image4 from '../../Assets/Image 4_EDITED/Image 4.png';
import image5 from '../../Assets/Image 4_EDITED/Image 5.png';
import image6 from '../../Assets/Image 4_EDITED/Image 6.png';
import image7 from '../../Assets/Image 4_EDITED/Image 7.png';
import image8 from '../../Assets/Image 4_EDITED/Image 8.png';
import image9 from '../../Assets/Image 4_EDITED/Image 9.png';
import image9_2 from '../../Assets/Image 4_EDITED/Image 9_2.png';
import image10 from '../../Assets/Image 4_EDITED/Image 10.png';
import image11 from '../../Assets/Image 4_EDITED/Image 11.png';


const EditedModalContent = () => (
    <div className="edited-modal-content-container">
        <h2>EDITEDtheLabel</h2>

        <p>
            I began as a designer at EDITED and worked alongside my colleagues to establish a highly creative and collaborative design environment. Our work focused on transforming the brand's identity, content strategy, and physical presence into a cohesive ecosystem that bridged digital, social, and retail channels.
        </p>

        <h3>Key Contributions</h3>

        <div className="edited-key-contributions">
            <h4>Building the Brand Ecosystem</h4>
            <p>Introduced a redesign concept for the new website, steering the brand toward a more modern and user-friendly direction.</p>
            <p>Designed and launched new e-commerce stores and enhanced the mobile app, focusing on seamless usability and visually cohesive design.</p>
            <p>Developed content strategies for social media, including photography concepts, campaign direction, and video production for web and social platforms.</p>

            <h4>Store Concept & Branding</h4>
            <p>Created the CI (Corporate Identity) for Stores, developing mood boards, interior concepts, and merchandise displays that reflected the brand’s ethos.</p>
            <p>Established brand books and design guidelines for retail and events to maintain consistency across physical and digital touchpoints.</p>

            <h4>Collection & Packaging Concepts</h4>
            <p>Designed concepts for Edited collections, including the Shoe Collection and Sport Collection, aligning them with contemporary market trends.</p>
            <p>Developed sustainable packaging concepts, combining design and strategy to enhance eco-conscious branding.</p>

            <div className="edited-image-gallery">
                <img src={image1} alt="Image 1" />
                <img src={image2} alt="Image 2" />
           
            </div>

            <div className="edited-image-gallery">
    
                <img src={image3} alt="Image 3" />
                <img src={image4} alt="Image 4" />
            
            </div>
            <h4>Event and Campaign Activation</h4>
            <p>Conceptualized and executed fashion show concepts and exclusive pop-up store designs, ensuring a cohesive and innovative customer experience.</p>
            <p>Participated in editorial shoots to capture backstage content, and created engaging video material to amplify campaign coverage.</p>

            <h4>Sustainability Initiatives</h4>
            <p>Designed sustainable packaging concepts, integrating eco-friendly materials and strategies to align with EDITED's evolving commitment to sustainability.</p>

            <h4>Scaling with Strategy</h4>
            <p>Worked on marketing strategies that balanced creativity with scalability, aligning campaigns with long-term brand objectives.</p>
            <p>Supported team growth and culture by developing workflows that streamlined design production while allowing room for innovation.</p>
        </div>

        <div className="edited-image-gallery">
            <img src={image5} alt="Image 5" />
            <img src={image6} alt="Image 6" /> 
            <img src={image7} alt="Image 7" />
        </div>

    

        <div className="edited-image-gallery">
        
        <img src={image8} alt="Image 8" />
            <img src={image9} alt="Image 9" />
            <img src={image9_2} alt="Image 9_2" />
            <img src={image10} alt="Image 10" />
            <img src={image11} alt="Image 11" />
            </div>

        <p>
            Looking back, it was an exhilarating, fast-paced journey. Both brands experienced rapid growth over those three and something years, and every initiative we launched seemed to succeed. It was an exciting time—full of creativity, risk, and reward. There were moments of self-doubt and times when I didn’t feel fully valued, but those challenges only made the experience more memorable. Ultimately, it was a truly magical period of growth and discovery. If given the chance, I would relive those years in the same way, and likely make the same decision to move on when I did.
        </p>
    </div>
);

export default EditedModalContent;