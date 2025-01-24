import React from 'react';
import './AboutYouModalContent.css';
import image1 from '../../Assets/Image 5_AboutYou/aboutyouweb2.png';
import image2 from '../../Assets/Image 5_AboutYou/Image 2.png';
import image3 from '../../Assets/Image 5_AboutYou/Image 3.png';
import image4 from '../../Assets/Image 5_AboutYou/Image 4.png';
import image6 from '../../Assets/Image 5_AboutYou/Editedbooth.png';

// Ensure the component name matches the export name
const AboutYouModalContent = () => (
    <div className="aboutyou-modal-content-container">

     <h2> About You</h2>
     <section className="modal-section"> 
         <p> <strong>Collaborated with cross-functional teams to redefine About You’s 
            strategy, enhancing 
            personalization and positioning the platform to engage a broader, 
            more diverse audience. </strong> Developed concepts that celebrated individuality, 
            placing users at the center of the experience, while aligning with market trends to 
            capture greater share.<p></p> Contributed to a new website structure and storytelling approach, 
            emphasizing emotional connection, and conceptualized campaigns and commercials 
            that championed inclusivity and user-driven content.</p>
    
             <div className="aboutyou-image-gallery">
                    <img src={image1} alt="AboutYouweb" />
                    </div>
                </section>
        

             <section className="modal-section">
              <h4>Creative Freedom & Experimentation</h4>
               <p>Enjoyed the creative freedom to explore innovative ideas, fostering a culture of experimentation. This approach allowed us to test concepts and refine them based on real-time feedback, ensuring the ideas that resonated most with users were brought to life.</p>
               <p>Embraced a trial-and-error mindset, which helped the brand evolve organically while maintaining flexibility and agility in execution.</p>
                </section>

                

                    <section className="modal-section">
                    <h4>Influencer and Celebrity Engagement</h4>
                    <p>Developed the “Celebrity X” initiative to incorporate well-known public figures into campaigns, making the brand feel more relatable and authentic, and directly engaging with a broader user base.</p>
                    
                    <div className="image-gallery">
                    <img src={image2} alt="AboutYou" /> 
                    
                    </div>
                    </section>

                    <section className="modal-section">
                    <h4>Store & Event Concepts</h4>
                    <p>Designed innovative store concepts and pop-up events to enhance the brand’s physical presence and improve consumer interaction with the platform.</p>
                    <p>Developed branding strategies for high-profile events that aligned with the company’s vision of creating an engaging and immersive shopping experience.</p>
                    </section>
                    <section className="modal-section">
                    
                    <h4>Collaboration with Influencers and External Brands</h4>
                    <p>Visionised the Awards Packaging and Booth for EDITED at the AboutYou Awards, aswell as teh Fashion Show for EDITED. 
                        Cllaborate with well-known external designers and influencers, creating strategic partnerships that elevated the brand’s visibility and market positioning.</p>
                    <p>Worked on co-branded campaigns that aligned the About You aesthetic with well-established names in fashion, making the platform more appealing to a larger audience.</p>
                    
                    <div className="image-gallery">
                    <img src={image6} alt="EditedBoothdesign" /> 
                <img src={image3} alt="AboutYouWeb" />
                    <img src={image4} alt="AboutYouLabels" /> 
                    </div></section>

                    <section className="modal-section">
                    <h4>Strategic Adaptation</h4>
                    <p>Contributed to the shift in strategy as About You transitioned from a niche e-commerce platform to a more mainstream approach, focusing on diversity and inclusivity, with an emphasis on personalization.</p>
                    <p>Ensured that the platform’s structure, content, and branding strategies aligned with these shifts, fostering a deeper connection with a broader customer base.</p>
            </section>
    </div>
);

export default AboutYouModalContent;