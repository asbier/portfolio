// src/components/Main/Main.js
import React, { useState } from 'react';
import Carousel from '../Carousel/Carousel';
import Modal from '../Modal/Modal';
import DayoneModalContent from '../Modal/DayoneModalContent';
import CarharttModalContent from '../Modal/CarharttModalContent';
import { EditedModalContent } from '../Modal/EditedModalContent';
import AboutYouModalContent from '../Modal/AboutYouModalContent';
import ConicRoseModalContent from '../Modal/ConicRoseModalContent';
import HeroesnHeroinesModalContent from '../Modal/HeroesnHeroinesModalContent';
import PlasticMediaModalContent from '../Modal/PlasticMediaModalContent';
import MonopolGmbHModalContent from '../Modal/MonopolGmbHModalContent';
import CommaModalContent from '../Modal/CommaModalContent';
import MonaMModalContent from '../Modal/MonaMModalContent';
import './Main.css';


const imagesData = [
    { src: 'path/to/dayone.jpg', alt: 'DAYONE', title: 'DAYONE', subtitle: 'Learn more about my Projects at DAYONE' },
    { src: 'path/to/carhartt.jpg', alt: 'Carhartt-WIP', title: 'Carhartt Digital UX Design', subtitle: 'Learn more about my Carhartt Projects' },
    { src: 'path/to/edited.jpg', alt: 'Edited', title: 'Edited Art Direction', subtitle: 'Learn more about Edited ArtDirection' },
    { src: 'path/to/aboutyou.jpg', alt: 'AboutYou', title: 'AboutYou Redesign', subtitle: 'Learn more about AboutYou Redesign' },
    { src: 'path/to/conicrose.jpg', alt: 'Conic Rose', title: 'CONIC ROSE ALBUM ART WORK', subtitle: 'Learn more about Cover Redesign' },
    { src: 'path/to/heroesnheroines.jpg', alt: 'HeroesnHeroines', title: 'Heroes & Heroines AGENCY', subtitle: 'Learn more about my work at Heroes & Heroines' },
    { src: 'path/to/plasticMedia.jpg', alt: 'PlasticMedia', title: 'Plastic Media AGENCY', subtitle: 'Learn more about my work at Plastic Media' },
    { src: 'path/to/monopolGmbH.jpg', alt: 'MonopolGmbH', title: 'MonopolGmbH AGENCY', subtitle: 'Learn more about my work at MonopolGmbH' },
    { src: 'path/to/comma.jpg', alt: 'Comma', title: 'SuperrealxComma', subtitle: 'Learn more about my work at SuperReal for Comma' },
    { src: 'path/to/MonaM.jpg', alt: 'MonaM', title: 'MonaM Album Art', subtitle: 'Learn more about my work for MonaM' },
];

const Main = ({ darkMode }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState(null);

    const handleImageClick = (index) => {
        switch(index) {
            case 0:
                setModalContent(<DayoneModalContent />);
                break;
            case 1:
                setModalContent(<CarharttModalContent />);
                break;
            case 2:
                setModalContent(<EditedModalContent />);
                break;
            case 3:
                setModalContent(<AboutYouModalContent />);
                break;
            case 4:
                setModalContent(<ConicRoseModalContent />);
                break;

            case 5:
                setModalContent(<HeroesnHeroinesModalContent/>);
                break;
            case 6:
                setModalContent(<PlasticMediaModalContent/>);
                break;
            case 7:
                setModalContent(<MonopolGmbHModalContent/>);
                break;
            case 8:
                setModalContent(<CommaModalContent/>);
                break;
            case 9:
                setModalContent(<MonaMModalContent/>);
                break;
            default:
                setModalContent(null);
        }
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setModalContent(null);
    };

    return (
        <main className={darkMode ? "body-dark" : "body-light"}>
            <Carousel onImageClick={handleImageClick} images={imagesData} />
            <Modal isOpen={isModalOpen} onClose={closeModal} content={modalContent} />
        </main>
    );
};

export default Main;