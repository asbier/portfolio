// src/components/Main/Main.js
import React, { useState, useRef } from 'react';
import CaseStudyGrid from '../CaseStudyGrid/CaseStudyGrid';
import ProjectPage from '../ProjectPage/ProjectPage';
import PasswordModal from '../Modal/PasswordModal';
import './Main.css';

// Import images for DAYONE
import dayoneImage1 from '../../Assets/Image_0_dayone/before.png';
import dayoneImage2 from '../../Assets/Image_0_dayone/slider-final.png';
import dayoneImage3 from '../../Assets/Image_0_dayone/wireframe-slider.png';

// Import images for CARHARTT
import carharttImage1 from '../../Assets/Image_1_carhartt_wip/Image1.png';
import carharttImage2 from '../../Assets/Image_1_carhartt_wip/Image2.png';
import carharttImage3 from '../../Assets/Image_1_carhartt_wip/Designsystem.png';

// Import images for EDITED
import editedImage1 from '../../Assets/Image_2_EDITED/Editedweb.png';
import editedImage2 from '../../Assets/Image_2_EDITED/Frankfurt_openingdesign.png';
import editedImage3 from '../../Assets/Image_2_EDITED/stores.png';

// Import images for ABOUT YOU
import aboutyouImage1 from '../../Assets/Image 3_AboutYou/Stories_final.png';
import aboutyouImage2 from '../../Assets/Image 3_AboutYou/shoebrand-AY.png';
import aboutyouImage3 from '../../Assets/Image 3_AboutYou/ayawards-final .png';

// Import images for HEROES & HEROINES
import heroesImage1 from '../../Assets/Image_5_Heroesnheroines/ballons.png';
import heroesImage2 from '../../Assets/Image_5_Heroesnheroines/Hennessy.png';

// Import images for PLASTIC MEDIA
import plasticImage1 from '../../Assets/Image_6_Plastic Media/Image 1.png';
import plasticImage2 from '../../Assets/Image_6_Plastic Media/monki.png';

// Import images for MONOPOL
import monopolImage1 from '../../Assets/Image_7_Monopol GmbH/Biorama.png';
import monopolImage2 from '../../Assets/Image_7_Monopol GmbH/Image 5.png';

// Bento data for each project
const projectBentoData = {
  0: { // DAYONE
    title: 'DAYONE',
    subtitle: 'Volkswagen x DAYONE Innovation Lab',
    role: 'UX Designer & Innovation Consultant',
    year: '2023',
    gradient: 'linear-gradient(to bottom, #a095dc, #2600ff)',
    tags: ['VOLKSWAGEN', 'UX DESIGN', 'INNOVATION', 'STRATEGY'],
    blocks: [
      { id: 'image1', type: 'image', imageUrl: dayoneImage1, caption: 'VW.de Before', colSpan: 1, rowSpan: 2 },
      { id: 'overview', type: 'overview', content: 'DAYONE provides innovative consulting and design services for digital transformation. As a Product Designer, I balanced design and business strategy with Volkswagen as my main client.', colSpan: 1, rowSpan: 1 },
      { id: 'image2', type: 'image', imageUrl: dayoneImage2, caption: 'Final Slider', colSpan: 1, rowSpan: 2 },
      { id: 'challenge', type: 'challenge', content: 'Volkswagen\'s online vehicle finder was too complex. Users struggled to find cars and had high bounce rates when trying to search manually.', colSpan: 1, rowSpan: 1 },
      { id: 'image3', type: 'image', imageUrl: dayoneImage3, caption: 'Wireframe', colSpan: 1, rowSpan: 1 },
      { id: 'solution', type: 'solution', content: 'Created an intuitive category slider that simplified vehicle selection, reducing complexity and improving user engagement through visual, guided interactions.', colSpan: 1, rowSpan: 1 },
      { id: 'results', type: 'results', content: ['40% increase in user satisfaction', '3 patents filed', 'New feature adopted across VW lineup'], colSpan: 1, rowSpan: 1 },
    ]
  },
  1: { // CARHARTT WIP
    title: 'CARHARTT WIP',
    subtitle: 'E-Commerce Experience Redesign',
    role: 'UX Designer – E-Commerce',
    year: '2022',
    gradient: 'linear-gradient(to bottom, #1a1a1a, #4a4a4a)',
    tags: ['CARHARTT', 'UX DESIGN', 'UI DESIGN', 'E-COMMERCE'],
    blocks: [
      { id: 'image1', type: 'image', imageUrl: carharttImage1, caption: 'E-Commerce Design', colSpan: 1, rowSpan: 2 },
      { id: 'overview', type: 'overview', content: 'Carhartt WIP forms a division of the American brand Carhartt, pioneering workwear since 1889. As UX/UI Designer, I optimized e-commerce experiences and mobile-first solutions across US and European markets.', colSpan: 1, rowSpan: 1 },
      { id: 'image2', type: 'image', imageUrl: carharttImage3, caption: 'Design System', colSpan: 1, rowSpan: 2 },
      { id: 'challenge', type: 'challenge', content: 'Modernize the e-commerce experience while maintaining the brand\'s authentic workwear heritage. Previous design system needed migration from Sketch to Figma.', colSpan: 1, rowSpan: 1 },
      { id: 'image3', type: 'image', imageUrl: carharttImage2, caption: 'Mobile Design', colSpan: 1, rowSpan: 1 },
      { id: 'solution', type: 'solution', content: ['Streamlined checkout flow', 'Enhanced product discovery', 'Mobile-first responsive design', 'Migrated design system to Figma'], colSpan: 1, rowSpan: 1 },
      { id: 'results', type: 'results', content: ['25% increase in conversion', '15% reduction in cart abandonment', 'Improved mobile engagement'], colSpan: 1, rowSpan: 1 },
    ]
  },
  2: { // EDITED
    title: 'EDITED',
    subtitle: 'Brand Identity & Art Direction',
    role: 'Art Director Brand',
    year: '2016-2017',
    gradient: 'linear-gradient(to bottom, #979797, #deff06)',
    tags: ['ART DIRECTION', 'BRANDING', 'VISUAL'],
    blocks: [
      { id: 'image1', type: 'image', imageUrl: editedImage1, caption: 'Website Redesign', colSpan: 1, rowSpan: 2 },
      { id: 'overview', type: 'overview', content: 'EDITED stands for a unique mix of clothes, accessories, and shoes for women passionate about fashion. I contributed to the brand\'s creative direction and rebranding efforts.', colSpan: 1, rowSpan: 1 },
      { id: 'image2', type: 'image', imageUrl: editedImage2, caption: 'Store Events', colSpan: 1, rowSpan: 2 },
      { id: 'challenge', type: 'challenge', content: 'Building a brand ecosystem that\'s shareable across all platforms. Each launch should be memorable and each store should reflect the city\'s unique vibes.', colSpan: 1, rowSpan: 1 },
      { id: 'image3', type: 'image', imageUrl: editedImage3, caption: 'Store Design', colSpan: 1, rowSpan: 1 },
      { id: 'solution', type: 'solution', content: ['Redesigned Social Media and website', 'Corporate identity for stores', 'Sustainable packaging goals', 'Technology-forward approach'], colSpan: 1, rowSpan: 1 },
      { id: 'results', type: 'results', content: ['Successful brand ecosystem redesign', 'Comprehensive retail identity', 'Memorable launch events'], colSpan: 1, rowSpan: 1 },
    ]
  },
  3: { // ABOUT YOU
    title: 'ABOUT YOU',
    subtitle: 'Brand Experience & Personalization',
    role: 'Art Director Brand Experience',
    year: '2017-2018',
    gradient: 'linear-gradient(to bottom, #ff7a15, #deff06)',
    tags: ['ART DIRECTION', 'BRANDING', 'E-COMMERCE'],
    blocks: [
      { id: 'image1', type: 'image', imageUrl: aboutyouImage1, caption: 'Stories Feature', colSpan: 1, rowSpan: 2 },
      { id: 'overview', type: 'overview', content: 'ABOUT YOU is one of Europe\'s leading fashion e-commerce platforms. As Art Director Brand Experience, I contributed to the strategic shift from niche to mainstream, focusing on diversity, inclusivity, and personalization.', colSpan: 1, rowSpan: 1 },
      { id: 'image2', type: 'image', imageUrl: aboutyouImage2, caption: 'Emily & Eve Brand', colSpan: 1, rowSpan: 2 },
      { id: 'challenge', type: 'challenge', content: 'Transition from catalog images to engaging real-life content with diversity. Create personalized experiences that resonate with young consumers.', colSpan: 1, rowSpan: 1 },
      { id: 'image3', type: 'image', imageUrl: aboutyouImage3, caption: 'AY Awards', colSpan: 1, rowSpan: 1 },
      { id: 'solution', type: 'solution', content: ['"Stories" feature for curated outfits', 'Personalization with name-based greetings', 'Emily & Eve shoe brand concept', 'Celebrity collaboration strategies'], colSpan: 1, rowSpan: 1 },
      { id: 'results', type: 'results', content: ['Successfully rebranded to mainstream', 'Implemented diversity in brand communication', 'Launched Emily & Eve brand'], colSpan: 1, rowSpan: 1 },
    ]
  },
  4: { // CONIC ROSE
    title: 'CONIC ROSE',
    subtitle: 'Album Cover Design',
    role: 'Design Album Cover',
    year: '2021',
    tags: ['DESIGN', 'ALBUM ART', 'VISUAL'],
    blocks: [
      { id: 'hero', type: 'hero', title: 'SONIC', content: 'VISUALS', gradient: 'linear-gradient(to bottom, #979797, #f6a7a8)', colSpan: 2, rowSpan: 2 },
      { id: 'description', type: 'description', title: 'About', content: 'Album cover design exploring the intersection of sound and visual art, creating a cohesive aesthetic that captures the essence of the music.', colSpan: 1, rowSpan: 2 },
    ]
  },
  5: { // JOVANA REISINGER
    title: 'JOVANA REISINGER',
    subtitle: 'Book & Visual Design',
    role: 'Designer',
    year: '2020',
    tags: ['DESIGN', 'PRINT', 'VISUAL'],
    blocks: [
      { id: 'hero', type: 'hero', title: 'VISUAL', content: 'STORYTELLING', gradient: 'linear-gradient(to bottom, #d4a5ff, #ff6b9d)', colSpan: 2, rowSpan: 2 },
      { id: 'description', type: 'description', title: 'Project', content: 'Comprehensive book design and visual identity for author Jovana Reisinger, combining typography, layout, and illustration.', colSpan: 1, rowSpan: 2 },
    ]
  },
  6: { // HEROES & HEROINES
    title: 'HEROES & HEROINES',
    subtitle: 'Event Experience Design',
    role: 'Event Experience Designer',
    year: '2019',
    gradient: 'linear-gradient(to bottom, #ffb115, #ff5722)',
    tags: ['EVENT', 'EXPERIENCE', 'BRANDING'],
    blocks: [
      { id: 'image1', type: 'image', imageUrl: heroesImage1, caption: 'Balloon Installation', colSpan: 1, rowSpan: 2 },
      { id: 'overview', type: 'overview', content: 'Designing memorable event experiences for brand launches and celebrations. Creating immersive spatial designs with interactive installations.', colSpan: 1, rowSpan: 1 },
      { id: 'image2', type: 'image', imageUrl: heroesImage2, caption: 'Hennessy Event', colSpan: 1, rowSpan: 2 },
      { id: 'challenge', type: 'challenge', content: 'Design immersive event experiences that celebrate creative heroes and heroines while creating memorable brand moments.', colSpan: 1, rowSpan: 1 },
      { id: 'solution', type: 'solution', content: ['Immersive spatial design', 'Interactive installations', 'Branded touchpoints', 'Memorable guest journey'], colSpan: 1, rowSpan: 1 },
    ]
  },
  7: { // PLASTIC MEDIA
    title: 'PLASTIC MEDIA',
    subtitle: 'Agency Work',
    role: 'Designer in Agency',
    year: '2014-2015',
    gradient: 'linear-gradient(to bottom, #00bcd4, #009688)',
    tags: ['AGENCY', 'DESIGN', 'BRANDING'],
    blocks: [
      { id: 'image1', type: 'image', imageUrl: plasticImage1, caption: 'Agency Work', colSpan: 1, rowSpan: 2 },
      { id: 'overview', type: 'overview', content: 'Worked on diverse client projects spanning branding, digital design, and campaign development in a fast-paced agency environment.', colSpan: 1, rowSpan: 1 },
      { id: 'image2', type: 'image', imageUrl: plasticImage2, caption: 'Monki Campaign', colSpan: 1, rowSpan: 2 },
      { id: 'challenge', type: 'challenge', content: 'Delivering creative solutions across multiple client briefs while maintaining brand consistency and meeting tight deadlines.', colSpan: 1, rowSpan: 1 },
      { id: 'solution', type: 'solution', content: ['Brand identity design', 'Digital campaign development', 'Print and collateral design', 'Client presentations'], colSpan: 1, rowSpan: 1 },
    ]
  },
  8: { // MONOPOL MEDIA
    title: 'MONOPOL MEDIA',
    subtitle: 'Editorial & Agency Direction',
    role: 'Art Director in Agency',
    year: '2013-2014',
    gradient: 'linear-gradient(to bottom, #607d8b, #455a64)',
    tags: ['ART DIRECTION', 'AGENCY', 'EDITORIAL'],
    blocks: [
      { id: 'image1', type: 'image', imageUrl: monopolImage1, caption: 'Biorama Magazine', colSpan: 1, rowSpan: 2 },
      { id: 'overview', type: 'overview', content: 'Led creative direction for editorial and brand projects, mentoring junior designers and establishing visual standards.', colSpan: 1, rowSpan: 1 },
      { id: 'image2', type: 'image', imageUrl: monopolImage2, caption: 'Editorial Work', colSpan: 1, rowSpan: 2 },
      { id: 'challenge', type: 'challenge', content: 'Maintaining creative quality across diverse editorial projects while mentoring team members and managing client expectations.', colSpan: 1, rowSpan: 1 },
      { id: 'solution', type: 'solution', content: ['Editorial design leadership', 'Brand project direction', 'Junior designer mentoring', 'Visual standards establishment'], colSpan: 1, rowSpan: 1 },
    ]
  },
  9: { // COMMA
    title: 'COMMA',
    subtitle: 'Brand Work',
    role: 'Art Director for Agency',
    year: '2016',
    tags: ['ART DIRECTION', 'BRANDING', 'FASHION'],
    blocks: [
      { id: 'hero', type: 'hero', title: 'FASHION', content: 'FORWARD', gradient: 'linear-gradient(to bottom, #8bc34a, #4caf50)', colSpan: 2, rowSpan: 2 },
      { id: 'description', type: 'description', title: 'Project', content: 'Brand development and art direction for fashion retail, creating cohesive visual identities across multiple touchpoints.', colSpan: 1, rowSpan: 2 },
    ]
  },
  10: { // MONA M
    title: 'MONA M',
    subtitle: 'Album Cover Design',
    role: 'Designer Album Cover',
    year: '2022',
    tags: ['DESIGN', 'ALBUM ART', 'MUSIC'],
    blocks: [
      { id: 'hero', type: 'hero', title: 'MUSIC', content: 'VISUALS', gradient: 'linear-gradient(to bottom, #9c27b0, #673ab7)', colSpan: 2, rowSpan: 2 },
      { id: 'description', type: 'description', title: 'Concept', content: 'Album artwork that captures the artist\'s musical identity through bold colors and experimental typography.', colSpan: 1, rowSpan: 2 },
    ]
  },
  11: { // CARHARTT X VW
    title: 'CARHARTT X VW',
    subtitle: 'Volkswagen Collaboration',
    role: 'UX Designer – Collaboration',
    year: '2022',
    tags: ['CARHARTT', 'VOLKSWAGEN', 'COLLAB'],
    blocks: [
      { id: 'hero', type: 'hero', title: 'COLLAB', content: 'CULTURE', gradient: 'linear-gradient(to bottom, #1a1a1a, #003366)', colSpan: 2, rowSpan: 2 },
      { id: 'description', type: 'description', title: 'Project', content: 'Special collaboration between Carhartt WIP and Volkswagen, creating a unique crossover experience.', colSpan: 1, rowSpan: 2 },
    ]
  },
  12: { // VW ID.BUZZ
    title: 'VW ID.BUZZ',
    subtitle: 'Electric Vehicle Experience',
    role: 'UX Designer – Innovation',
    year: '2023',
    tags: ['VOLKSWAGEN', 'AUTOMOTIVE', 'UX DESIGN'],
    blocks: [
      { id: 'hero', type: 'hero', title: 'ELECTRIC', content: 'FUTURE', gradient: 'linear-gradient(to bottom, #2600ff, #00d4aa)', colSpan: 2, rowSpan: 2 },
      { id: 'challenge', type: 'challenge', title: 'Challenge', content: 'Design the digital experience for Volkswagen\'s iconic ID.BUZZ electric vehicle.', colSpan: 1, rowSpan: 1 },
      { id: 'solution', type: 'solution', title: 'Approach', content: ['Retro-modern interface design', 'Intuitive EV controls', 'Sustainable material research', 'Family-friendly features'], colSpan: 1, rowSpan: 1 },
    ]
  },
};

const Main = ({ hasVisibleContent, activeFilter, setActiveFilter }) => {
    const [isProjectPageOpen, setIsProjectPageOpen] = useState(false);
    const [currentProjectData, setCurrentProjectData] = useState(null);
    const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
    const [pendingProjectIndex, setPendingProjectIndex] = useState(null);
    const caseStudyGridRef = useRef(null);

    // Protected projects that require password
    const protectedProjects = {
        0: 'DAYONE',
        1: 'Carhartt-WIP',
        11: 'Carhartt x VW',
        12: 'VW ID.BUZZ'
    };

    const openProjectPage = (index) => {
        // Get project data
        const projectData = projectBentoData[index];
        if (projectData) {
            setCurrentProjectData(projectData);
            setIsProjectPageOpen(true);
            // Hide body scroll
            document.body.style.overflow = 'hidden';
        }
    };

    const handleImageClick = (index) => {
        // Check if project is protected
        if (protectedProjects[index]) {
            setPendingProjectIndex(index);
            setIsPasswordModalOpen(true);
        } else {
            openProjectPage(index);
        }
    };

    const handlePasswordSuccess = () => {
        setIsPasswordModalOpen(false);
        openProjectPage(pendingProjectIndex);
        setPendingProjectIndex(null);
    };

    const handlePasswordClose = () => {
        setIsPasswordModalOpen(false);
        setPendingProjectIndex(null);
    };

    const closeProjectPage = () => {
        setIsProjectPageOpen(false);
        setCurrentProjectData(null);
        // Restore body scroll
        document.body.style.overflow = '';
    };

    return (
        <main>
{/* Case study slider - works on both mobile and desktop */}
            <div ref={caseStudyGridRef}>
                <CaseStudyGrid 
                    onSelectCase={handleImageClick} 
                    hasVisibleContent={hasVisibleContent}
                    activeFilter={activeFilter}
                    setActiveFilter={setActiveFilter}
                />
            </div>
            <ProjectPage 
                isOpen={isProjectPageOpen} 
                onClose={closeProjectPage} 
                projectData={currentProjectData}
            />
            <PasswordModal 
                isOpen={isPasswordModalOpen}
                onClose={handlePasswordClose}
                onSuccess={handlePasswordSuccess}
                projectName={protectedProjects[pendingProjectIndex]}
            />
        </main>
    );
};

export default Main;