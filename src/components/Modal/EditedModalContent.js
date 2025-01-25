import React from 'react';
import './EditedModalContent.css';
import image1 from '../../Assets/Image 4_EDITED/Image 1.png';
import image2 from '../../Assets/Image 4_EDITED/Image 2.png';
import image3 from '../../Assets/Image 4_EDITED/Image 3.png';
import image4 from '../../Assets/Image 4_EDITED/Image 4.png';
import image5_2 from '../../Assets/Image 4_EDITED/Image 5_2.png';
import image5 from '../../Assets/Image 4_EDITED/Image 5.png';
import image6 from '../../Assets/Image 4_EDITED/Image 6.png';
import image7 from '../../Assets/Image 4_EDITED/Image 7.png';
import image8 from '../../Assets/Image 4_EDITED/Image 8.png';
import image9 from '../../Assets/Image 4_EDITED/Image 9.png';
import image9_2 from '../../Assets/Image 4_EDITED/Image 9_2.png';
import image10 from '../../Assets/Image 4_EDITED/Image 10.png';
import image11 from '../../Assets/Image 4_EDITED/Image 11.png';
import image12 from '../../Assets/Image 4_EDITED/Image 12.png';
import image13 from '../../Assets/Image 4_EDITED/Image 13.png';
import image14 from '../../Assets/Image 4_EDITED/Image 14.png';
import image15 from '../../Assets/Image 4_EDITED/Image 15.png';
import image16 from '../../Assets/Image 4_EDITED/Edited Product Design.png';
import image17 from '../../Assets/Image 4_EDITED/Edited_Launch.png';
import image18 from '../../Assets/Image 4_EDITED/Editedweb.png';

const EditedModalContent = () => (
    <div className="modal-content-container">
        <h1>EDITED the Label</h1>
            <p>
                I began as a designer at EDITED and worked in the Brand Team to establish a highly creative and collaborative design environment. Our work focused on transforming the brand's identity, content strategy, and physical presence into a cohesive ecosystem that bridged digital, social, and retail channels.
            </p>
            
            <section className='modal-section'>
                <p><strong>Building the Brand Ecosystem </strong> due Introducing a redesign concept for the new website, steering the brand toward a more modern and user-friendly direction.</p>
                
        
                    <div className="image-gallery">
                    <img src={image1} alt="EDITED Web and App" /> 
                    <img src={image2} alt="EDITED Store Franfurt" /> 
                    </div>
            </section>

                    <section className='modal-section'>
                    <p><strong>Designed and launched new e-commerce stores and enhanced the mobile 
                        app</strong>, focusing on seamless usability and visually cohesive design.</p>
                    <p>Developed content strategies for social media, including photography concepts, campaign direction, and video production for web and social platforms.</p>
                   
                    <div className="edited-image-gallery-center">  
                         
                     <img src={image18} alt="EDITED Web Redesign" />
                    </div> 
                     <p></p>
               
        
                </section>
    
                
                <section className='modal-section'>
             
            <p><strong> Created the CI (Corporate Identity) for Stores, developing mood boards, interior concepts, and merchandise displays</strong>  that reflected the brand’s ethos.</p>
                <p>Established brand books and design guidelines for retail and events to maintain consistency across physical and digital touchpoints.</p>
                <div className="image-gallery">
                    <img src={image3} alt="EDITEDLaidBackLaunch" />
                    <img src={image4} alt="EDITEDStoreVienna" /> 
                    <img src={image5_2} alt="EDITEDStoreMunich" /> 
                    </div> 
            
                </section>

                <section className='modal-section'>
              
                <p><strong> Designed concepts for Edited collections, including the Shoe Collection and Sport Collection</strong> , aligning them with contemporary market trends.</p>
                <p>Developed sustainable packaging concepts, combining design and strategy to enhance eco-conscious branding.</p>

                <div className="image-gallery">
                    <img src={image5} alt="EDITEDConcepts" />
                    <img src={image6} alt="EDITEDStoreShoes" />
            
                    <img src={image16} alt="ProductDesign" />
                </div>

                   </section>

        <section className='modal-section'> 
       
    
            <p><strong> Conceptualized and executed fashion show concepts and exclusive pop-up store designs</strong>, ensuring a cohesive and innovative customer experience.</p>
            <p>Participated in editorial shoots to capture backstage content, and created engaging video material to amplify campaign coverage.</p>
            <div className="image-gallery">
            <img src={image7} alt="EDITEDxInstyle Event Berlin" />
            <img src={image17} alt="EDITEDLaunchStoreEventBerlin" />
                <img src={image9_2} alt="BladeRunnerKollektion1" />
                <img src={image9} alt="BladeRunnerKollektion2" />
                <img src={image10} alt="BladeRunnerKollektion3" />
                <img src={image8} alt="BladeRunnerKollektion4" />
                <img src={image11} alt="BladeRunnerKollektion5" />
                <img src={image15} alt="NinaKastensLaunchEvent1" />
                <img src={image12} alt="NinaKastensxEDITEDLaunchEvent2" />
                <img src={image13} alt="NinaKastensxEDITEDLaunchEvent3" />
                <img src={image14} alt="NinaKastensxEDITEDLaunchEvent4" />
            </div>  
            </section>

            
            <section className='modal-section'> 
            
            <p><strong>Designed sustainable packaging concepts</strong>, integrating eco-friendly materials and strategies to 
                align with EDITED's evolving commitment to sustainability.</p>
        
            </section>

            <section className='modal-section'> 
          
        
            <p><strong>Worked on marketing strategies</strong> that balanced new bold and sometimes more expensive ideas with scalability, aligning campaigns with long-term brand objectives.</p>
            <p>Supported team growth and culture by developing workflows that streamlined design production while allowing room for innovation.</p>
        </section>

        <p>
        <strong>Looking back</strong> , it was an exhilarating, fast-paced journey. Both brands experienced rapid growth 
            over those years, and every initiative we launched seemed to succeed. It was an exciting time—full 
            of creativity, risk, and reward. There were moments of self-doubt and times when improvisation was necessary—times I wished for more time—but these challenges made the experience all the more memorable. Ultimately, it was a period of growth and discovery that felt truly magical. If given the chance, I would relive those years in the same way, and likely make the same decision to move on when I did.
        </p><p>
  <a href="https://www.edited.de/" target="_blank" rel="noopener noreferrer">🌐 See Live on EDITED.de</a>
</p>
</div>
);

export default EditedModalContent;
