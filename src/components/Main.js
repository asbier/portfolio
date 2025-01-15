import React, { useRef, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion"; // Import useAnimation here
import Modal from "./Modal"; // Import Modal component
import images from "../images"; // Assuming images are imported from this file
import Scrollbar from "smooth-scrollbar"; // Import smooth-scrollbar

const imagesData = [
  {
    title: "UX Designer & Innovation Consultant",
    subtitle: "DAYONE",
    content: (
      <div>
        <h2>DAYONE</h2>
        <p>
          At Dayone, I learned how transformative great design can be and how crucial it is for teams to embrace it as a driving force. Growth—both personal and product-driven—requires imagination and a willingness to listen. Without engaging with customers, colleagues, and surroundings, progress stalls.
        </p>
        <p>
          I also came to understand how leadership and culture influence growth. Design-led teams tend to push boundaries, while business-driven approaches often favor practicality, sometimes at the cost of innovation.
        </p>
        <p>
          These experiences shaped my perspective on the intersection of design, leadership, and growth, lessons I carry forward in all my work.
        </p>

        {/* Image Gallery for Logos */}
        <div className="image-gallery">
          <img src="logo1.jpg" alt="Logo 1" />
          <img src="logo2.jpg" alt="Logo 2" />
          <img src="logo3.jpg" alt="Logo 3" />
          <img src="logo4.jpg" alt="Logo 4" />
        </div>

        <h3>Automotive Industry Projects: Insights & Contributions</h3>
        <p>
          Over the course of several German and International market-focused automotive projects, I gained extensive experience in creating user journeys, conducting user research, and performing competitive benchmarking. These projects deepened my understanding of designing localized, user-centric digital solutions within the automotive sector. They also provided valuable lessons in cross-functional collaboration, market-specific challenges, and the complexities of large-scale product development.
        </p>

        <h4>Key Areas of Focus:</h4>
        <ul>
          <li>Streamlining Vehicle Searches: Addressed user needs for intuitive search options by analyzing behavior, mapping journeys, and prototyping enhanced filtering tools.</li>
          <li>Improving Vehicle Detail Presentation: Designed user-centric solutions to present specifications and details more clearly, including specialized information for electric vehicles.</li>
          <li>Enhancing Dealer Connections: Developed journeys and prototypes to simplify user access to dealer and service information.</li>
          <li>Simplifying Trade-in Processes: Worked on mapping and refining the journey for trading in vehicles, ensuring clarity and usability.</li>
          <li>Boosting Model Discoverability: Created solutions to improve the visibility and comparison of car models, responding to user difficulties highlighted by research.</li>
          <li>AI Workshop for Ecosystem Integration: Participated in a workshop exploring the integration of AI technologies into the automotive ecosystem. The focus was on how AI could enhance user experiences, particularly in vehicle configurations and service optimizations, enabling more personalized and efficient interactions.</li>
        </ul>

        <p>
          This experience equipped me with a strong foundation in user-centric design, strategic problem-solving, and the ability to deliver tailored solutions in complex, multi-stakeholder environments.
        </p>

        <h3>UX Design for ADAS System Configuration Tool</h3>
        <p>
          I contributed to the UX design of a dashboard for an Advanced Driver Assistance System (ADAS) configuration tool. The primary goal was to simplify the process for mechanics setting up car systems such as cameras and sensors. Working closely with a development-focused Product Owner, the key challenge was balancing complex technical requirements with an intuitive and user-friendly interface, tailored to non-technical users like mechanics.
        </p>
        <p>
          Our team focused on creating a dashboard that was efficient, easy to navigate, and practical for real-world use. The final design aimed to streamline configuration tasks, ensuring processes could be completed quickly and accurately. The project was showcased at an industry trade show, reflecting its innovative approach to improving the mechanic's workflow and user experience.
        </p>

        <h3>Guest List & Artist Dashboard App (Confidential Project)</h3>
        <p>
          I contributed to the design of the user flow and dashboard for a confidential app aimed at simplifying the guest list process and providing an intuitive artist dashboard. My responsibilities included designing the guest list flow, login processes, artist pages, and mission pages. Working closely with my UX Lead, we quickly developed and presented the first prototype for both guests and artists, based on user insights.
        </p>
        <p>
          The primary goal of the app was to reduce stress for guests and venue staff by simplifying event entry and navigation. In the absence of a clear brand or concept, I led research efforts to understand event workflows and user expectations, ensuring the app addressed the needs of both parties effectively.
        </p>
        <p>
          In addition to its functional goals, the app had a social impact mission: a portion of its income supports music education for children in need. The app was designed to save time and money, streamline event processes, reduce queues, and enhance the overall experience for both attendees and venue staff.
        </p>

        <p>
          <a href="https://www.example.com" target="_blank">See cases on website</a>
        </p>

        <h3>Collaborate with DAYONE</h3>
        <p></p>
      </div>
    ),
    },
  {
    title: "Digital UX Designer",
    subtitle: "Carhartt WIP",
    content: (
      <div>
        <h2>Digital UX Designer</h2>
        <h4>Carhartt WIP</h4>
        <p>
          As a UX Designer within the Digital Design Team at Carhartt, I was tasked with addressing several key challenges, blending both UX and UI design to create holistic solutions that improved user experience across various platforms.
        </p>

        <h3>Inefficient Help Desk Experience</h3>
        <h4>Problem</h4>
        <div className="section">
          Users struggled with accessing help and support, making it difficult for them to resolve issues efficiently on both the web and app platforms.
        </div>

        <h4>Method</h4>
        <div className="section">
          I conducted benchmark research, identifying key pain points and understanding the needs of our target audience. I mapped out the user journey to highlight friction points and collaborated directly with developers to ensure technical feasibility. We presented my findings and solutions to the dev team, ensuring alignment on user needs and design requirements.
        </div>

        <h4>Solution</h4>
        <div className="section">
          I developed intuitive user flows and interfaces that made it easier for customers to access support, track their requests, and receive timely updates. The improved design significantly reduced service request resolution time and increased customer satisfaction.
        </div>

        <h3>Checkout Experience Optimization</h3>
        <h4>Problem</h4>
        <div className="section">
          The checkout process was cumbersome, particularly for users in the U.S. and German markets, which led to higher cart abandonment rates and a frustrating user experience.
        </div>

        <h4>Method</h4>
        <div className="section">
          I worked closely with the Digital Design Lead, and SEO Marketers to understand market-specific needs and user behavior. We all collaborated on addressing friction points in the checkout flow. I ensured the design was aligned with SEO best practices to enhance discoverability and conversion.
        </div>

        <h3>Solution</h3>
        <div className="section">
          I redesigned the checkout system, optimizing mobile usability, improving the filter system, and simplifying the overall flow. The new design streamlined the purchasing process, resulting in lower cart abandonment rates and higher conversions.
        </div>

        <h3>Transitioning Design Tools from Sketch to Figma</h3>

        <h4>Problem</h4>
        <div className="section">
          The team was facing challenges in collaboration due to the limitations of Sketch, and it was crucial to transition to a more flexible design system.
        </div>

        <h4>Method</h4>
        <div className="section">
          I worked closely with the Design Lead to evaluate Figma’s features and its potential to improve workflow.
        </div>

        <h4>Solution</h4>
        <div className="section">
          By transitioning the design system to Figma, I improved team collaboration, allowing for real-time feedback, seamless handoffs, and more efficient workflows. This also improved consistency across design outputs and made cross-functional collaboration smoother.
        </div>

        <a href="https://www.example.com" target="_blank">
          🌐 See Live on Carhartt Wip
        </a>
        <a href="https://www.example.com" target="_blank">
          🌐 See Live on Carhartt Wip US
        </a>
      </div>
    ),
    },
  {
    title: "UX Designer & Innovation Consultant",
    subtitle: "DAYONE",
    content: (
        <div>
            <h2>At Edited & About You</h2>

            <p>
                I began as a designer at EDITED and worked alongside my colleagues to establish a highly creative and
                collaborative design environment. Our work focused on transforming the brand's identity, content
                strategy, and physical presence into a cohesive ecosystem that bridged digital, social, and retail
                channels.
            </p>

            <h3>Key Contributions</h3>

            <div className="key-contributions">
                <h4>Building the Brand Ecosystem</h4>
                <ul>
                    <li>Introduced a redesign concept for the new website, steering the brand toward a more modern and
                        user-friendly direction.
                    </li>
                    <li>Designed and launched new e-commerce stores and enhanced the mobile app, focusing on seamless
                        usability and visually cohesive design.
                    </li>
                    <li>Developed content strategies for social media, including photography concepts, campaign
                        direction, and video production for web and social platforms.
                    </li>
                </ul>

                <h4>Store Concept & Branding</h4>
                <ul>
                    <li>Created the CI (Corporate Identity) for Stores, developing mood boards, interior concepts, and
                        merchandise displays that reflected the brand’s ethos.
                    </li>
                    <li>Established brand books and design guidelines for retail and events to maintain consistency
                        across physical and digital touchpoints.
                    </li>
                </ul>

                <h4>Collection & Packaging Concepts</h4>
                <ul>
                    <li>Designed concepts for Edited collections, including the Shoe Collection and Sport Collection,
                        aligning them with contemporary market trends.
                    </li>
                    <li>Developed sustainable packaging concepts, combining design and strategy to enhance eco-conscious
                        branding.
                    </li>
                </ul>

                <div className="image-gallery">
                    <img src="image1.jpg" alt="Image 1"/>
                    <img src="image2.jpg" alt="Image 2"/>
                    <img src="image3.jpg" alt="Image 3"/>
                    <img src="image4.jpg" alt="Image 4"/>
                </div>

                <h4>Event and Campaign Activation</h4>
                <ul>
                    <li>Conceptualized and executed fashion show concepts and exclusive pop-up store designs, ensuring a
                        cohesive and innovative customer experience.
                    </li>
                    <li>Participated in editorial shoots to capture backstage content, and created engaging video
                        material to amplify campaign coverage.
                    </li>
                </ul>

                <h4>Sustainability Initiatives</h4>
                <ul>
                    <li>Designed sustainable packaging concepts, integrating eco-friendly materials and strategies to
                        align with EDITED's evolving commitment to sustainability.
                    </li>
                </ul>

                <h4>Scaling with Strategy</h4>
                <ul>
                    <li>Worked on marketing strategies that balanced creativity with scalability, aligning campaigns
                        with long-term brand objectives.
                    </li>
                    <li>Supported team growth and culture by developing workflows that streamlined design production
                        while allowing room for innovation.
                    </li>
                </ul>
            </div>

            <div className="image-gallery">
                <img src="image5.jpg" alt="Image 5"/>
                <img src="image6.jpg" alt="Image 6"/>
            </div>

            <h3>At About You</h3>
            <p>
                I played a significant role in the creative evolution of the company’s brand strategy, contributing to
                key projects like the LeGer by Lena Gercke label and other major brand initiatives. During my time
                there, About You was undergoing a strategic shift towards a broader, mainstream audience, which required
                adapting lessons learned from previous projects in more niche markets. This process focused on enhancing
                personalization and creating a user-centered platform, key to competing with major players in the
                e-commerce sector.
            </p>

            <h3>Key Contributions</h3>

            <div className="key-contributions">
                <h4>Recreating Brand Strategy</h4>
                <ul>
                    <li>Collaborated with cross-functional teams to redefine About You’s approach, focusing on enhancing
                        user engagement through personalization and ensuring the platform spoke to a more diverse and
                        mainstream audience.
                    </li>
                    <li>Helped develop concepts that positioned the platform as a celebration of individuality,
                        emphasizing the user as the core of the experience, rather than just fashion itself.
                    </li>
                    <li>Incorporated market trends from high-performing regions to align with industry shifts, ensuring
                        that About You could capture a larger market share.
                    </li>
                </ul>

                <h4>Creative Freedom & Experimentation</h4>
                <ul>
                    <li>Enjoyed the creative freedom to explore innovative ideas, fostering a culture of
                        experimentation. This approach allowed us to test concepts and refine them based on real-time
                        feedback, ensuring the ideas that resonated most with users were brought to life.
                    </li>
                    <li>Embraced a trial-and-error mindset, which helped the brand evolve organically while maintaining
                        flexibility and agility in execution.
                    </li>
                </ul>

                <h4>Website and Commercial Adjustments</h4>
                <ul>
                    <li>Contributed to the development of a new website structure focused on enhancing the sense of
                        individuality and personal connection with the audience.
                    </li>
                    <li>Worked on conceptualizing campaigns and commercials that resonated with a wider, more diverse
                        audience, emphasizing inclusivity and user-driven content.
                    </li>
                </ul>

                <h4>Influencer and Celebrity Engagement</h4>
                <ul>
                    <li>Developed the “Celebrity X” initiative to incorporate well-known public figures into campaigns,
                        making the brand feel more relatable and authentic, and directly engaging with a broader user
                        base.
                    </li>
                </ul>

                <h4>Store & Event Concepts</h4>
                <ul>
                    <li>Designed innovative store concepts and pop-up events to enhance the brand’s physical presence
                        and improve consumer interaction with the platform.
                    </li>
                    <li>Developed branding strategies for high-profile events that aligned with the company’s vision of
                        creating an engaging and immersive shopping experience.
                    </li>
                </ul>

                <h4>Collaboration with External Brands</h4>
                <ul>
                    <li>Led efforts to collaborate with well-known external designers and influencers, creating
                        strategic partnerships that elevated the brand’s visibility and market positioning.
                    </li>
                    <li>Worked on co-branded campaigns that aligned the About You aesthetic with well-established names
                        in fashion, making the platform more appealing to a larger audience.
                    </li>
                </ul>

                <h4>Strategic Adaptation</h4>
                <ul>
                    <li>Contributed to the shift in strategy as About You transitioned from a niche e-commerce platform
                        to a more mainstream approach, focusing on diversity and inclusivity, with an emphasis on
                        personalization.
                    </li>
                    <li>Ensured that the platform’s structure, content, and branding strategies aligned with these
                        shifts, fostering a deeper connection with a broader customer base.
                    </li>
                </ul>
            </div>

            <div className="image-gallery">
                <img src="image7.jpg" alt="Image 7"/>
                <img src="image8.jpg" alt="Image 8"/>
            </div>

            <p>
                Looking back, it was an exhilarating, fast-paced journey. Both brands experienced rapid growth over
                those three and something years, and every initiative we launched seemed to succeed. It was an exciting
                time—full of creativity, risk, and reward. There were moments of self-doubt and times when I didn’t feel
                fully valued, but those challenges only made the experience more memorable. Ultimately, it was a truly
                magical period of growth and discovery. If given the chance, I would relive those years in the same way,
                and likely make the same decision to move on when I did.
            </p>
        </div>
    ),
  },
];

function Main(props) {
    const [width, setWidth] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [isDragging, setIsDragging] = useState(false);

    const carousel = useRef();
    const controls = useAnimation(); // Now using the controls from useAnimation hook

    useEffect(() => {
        if (carousel.current) {
            Scrollbar.init(carousel.current, {damping: 0.05});
        }

        const handleResize = () => {
            if (carousel.current) {
                setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const handleImageClick = (index) => {
        if (!isDragging) {
            setSelectedImage(imagesData[index]);  // Set content based on clicked image index
            setIsModalOpen(true);
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedImage(null);
    };

    useEffect(() => {
        controls.start({opacity: 1});
    }, [controls]);

    return (
        <main className={props.darkMode ? "body-dark" : "body-light"}>
            {/* Carousel */}
            <motion.div
                ref={carousel}
                className="carousel"
                whileTap={{cursor: "grabbing"}}
                animate={controls}
            >
                <motion.div
                    drag="x"
                    dragConstraints={{right: 0, left: -width}}
                    dragElastic={0.1}
                    dragTransition={{bounceStiffness: 200, bounceDamping: 20}}
                    onDragStart={() => setIsDragging(true)}
                    onDragEnd={() => setIsDragging(false)}
                    className="inner-carousel"
                >
                    {images.map((image, index) => (
                        <motion.div
                            className="item"
                            whileHover={{scale: 1.05}}
                            key={index}
                            onClick={() => handleImageClick(index)} // Pass index to handleImageClick
                        >
                            <div className="image-container">
                                <img src={image} alt={`Carousel Item ${index + 1}`}/>
                            </div>
                            <div className="title-container">
                                {index === 0 ? (
                                    <>
                                        <h3 className="image-title-small">UX Designer & Innovation Consultant</h3>
                                        <h2 className="image-title-main">DAYONE</h2>
                                    </>
                                ) : index === 1 ? (
                                    <>
                                        <span className="image-title-small">Digital UX Designer</span>
                                        <h2 className="image-title-main">CARHARTT WIP</h2>
                                    </>
                                ) : (
                                    <h3>{`Title for Image ${index + 1}`}</h3>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>

            {/* Modal */}
            <Modal
                isOpen={isModalOpen}
                onClose={closeModal}
                content={selectedImage && (
                    <div>
                        <h2>{selectedImage.title}</h2>
                        <h4>{selectedImage.subtitle}</h4>
                        {selectedImage.content}
                    </div>
                )}
            />
        </main>
    );
}

export default Main;
