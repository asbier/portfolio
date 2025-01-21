// src/components/Main/Main.js
import React, { useState } from 'react';
import Carousel from '../Carousel/Carousel';
import Modal from '../Modal/Modal';
import DayoneModalContent from '../Modal/DayoneModalContent';
import CarharttModalContent from '../Modal/CarharttModalContent';
import EditedModalContent from '../Modal/EditedModalContent';
import AboutYouModalContent from '../Modal/AboutYouModalContent';
import './Main.css';

const imagesData = [
    { src: 'path/to/dayone.jpg', alt: 'DAYONE', title: 'DAYONE', subtitle: 'Learn more about my Projects at DAYONE' },
    { src: 'path/to/carhartt.jpg', alt: 'Carhartt', title: 'Carhartt Digital UX Design', subtitle: 'Learn more about my Carhartt Projects' },
    { src: 'path/to/edited.jpg', alt: 'Edited', title: 'Edited Art Direction', subtitle: 'Learn more about Edited ArtDirection' },
    { src: 'path/to/aboutyou.jpg', alt: 'AboutYou', title: 'AboutYou Redesign', subtitle: 'Learn more about AboutYou Redesign' },

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