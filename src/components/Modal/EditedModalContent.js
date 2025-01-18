import React from 'react';
import './EditedModalContent.css';
import image1 from '../../Assets/Image 4_EDITED/Image 2.png';
import image2 from '../../Assets/Image 4_EDITED/Image 3.png';
import image3 from '../../Assets/Image 4_EDITED/Image 4.png';
import image4 from '../../Assets/Image 4_EDITED/Image 5.png';
import image5 from '../../Assets/Image 4_EDITED/Image 8.png';
import image6 from '../../Assets/Image 4_EDITED/Image 7.png';
import image7 from '../../Assets/Image 4_EDITED/Image 7.png';
import image8 from '../../Assets/Image 4_EDITED/Image 8.png';

const EditedModalContent = () => (
    <div className="edited-modal-content-container">
        <h2>At Edited & AboutYou</h2>

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
        </div>

        <h3>At About You</h3>
        <p>
            I played a significant role in the creative evolution of the company’s brand strategy, contributing to key projects like the LeGer by Lena Gercke label and other major brand initiatives. During my time there, About You was undergoing a strategic shift towards a broader, mainstream audience, which required adapting lessons learned from previous projects in more niche markets. This process focused on enhancing personalization and creating a user-centered platform, key to competing with major players in the e-commerce sector.
        </p>

        <h3>Key Contributions</h3>

        <div className="edited-key-contributions">
            <h4>Recreating Brand Strategy</h4>
            <p>Collaborated with cross-functional teams to redefine About You’s approach, focusing on enhancing user engagement through personalization and ensuring the platform spoke to a more diverse and mainstream audience.</p>
            <p>Helped develop concepts that positioned the platform as a celebration of individuality, emphasizing the user as the core of the experience, rather than just fashion itself.</p>
            <p>Incorporated market trends from high-performing regions to align with industry shifts, ensuring that About You could capture a larger market share.</p>

            <h4>Creative Freedom & Experimentation</h4>
            <p>Enjoyed the creative freedom to explore innovative ideas, fostering a culture of experimentation. This approach allowed us to test concepts and refine them based on real-time feedback, ensuring the ideas that resonated most with users were brought to life.</p>
            <p>Embraced a trial-and-error mindset, which helped the brand evolve organically while maintaining flexibility and agility in execution.</p>

            <h4>Website and Commercial Adjustments</h4>
            <p>Contributed to the development of a new website structure focused on enhancing the sense of individuality and personal connection with the audience.</p>
            <p>Worked on conceptualizing campaigns and commercials that resonated with a wider, more diverse audience, emphasizing inclusivity and user-driven content.</p>

            <h4>Influencer and Celebrity Engagement</h4>
            <p>Developed the “Celebrity X” initiative to incorporate well-known public figures into campaigns, making the brand feel more relatable and authentic, and directly engaging with a broader user base.</p>

            <h4>Store & Event Concepts</h4>
            <p>Designed innovative store concepts and pop-up events to enhance the brand’s physical presence and improve consumer interaction with the platform.</p>
            <p>Developed branding strategies for high-profile events that aligned with the company’s vision of creating an engaging and immersive shopping experience.</p>

            <h4>Collaboration with External Brands</h4>
            <p>Led efforts to collaborate with well-known external designers and influencers, creating strategic partnerships that elevated the brand’s visibility and market positioning.</p>
            <p>Worked on co-branded campaigns that aligned the About You aesthetic with well-established names in fashion, making the platform more appealing to a larger audience.</p>

            <h4>Strategic Adaptation</h4>
            <p>Contributed to the shift in strategy as About You transitioned from a niche e-commerce platform to a more mainstream approach, focusing on diversity and inclusivity, with an emphasis on personalization.</p>
            <p>Ensured that the platform’s structure, content, and branding strategies aligned with these shifts, fostering a deeper connection with a broader customer base.</p>
        </div>

        <div className="edited-image-gallery">
            <img src={image7} alt="Image 7" />
            <img src={image8} alt="Image 8" />
        </div>

        <p>
            Looking back, it was an exhilarating, fast-paced journey. Both brands experienced rapid growth over those three and something years, and every initiative we launched seemed to succeed. It was an exciting time—full of creativity, risk, and reward. There were moments of self-doubt and times when I didn’t feel fully valued, but those challenges only made the experience more memorable. Ultimately, it was a truly magical period of growth and discovery. If given the chance, I would relive those years in the same way, and likely make the same decision to move on when I did.
        </p>
    </div>
);

export default EditedModalContent;