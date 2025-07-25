// src/components/Main/Main.js
import React, { useState } from 'react';
import Carousel from '../Carousel/Carousel';
import Modal from '../Modal/Modal';
import PasswordModal from '../Modal/PasswordModal';
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
import BiodiversityModalContent from '../Modal/BiodiversityModalContent';
import JovanaReisingerModalContent from '../Modal/JovanaReisingerModalContent';
import './Main.css';

const Main = ({ hasVisibleContent }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState(null);
    const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
    const [pendingProjectIndex, setPendingProjectIndex] = useState(null);

    // Protected projects that require password
    const protectedProjects = {
        1: 'DAYONE',
        2: 'Carhartt-WIP'
    };

    const openProjectModal = (index) => {
        switch(index) {
            case 0:
                setModalContent(<BiodiversityModalContent />);
                break;
            case 1:
                setModalContent(<DayoneModalContent />);
                break;
            case 2:
                setModalContent(<CarharttModalContent />);
                break;
            case 3:
                setModalContent(<EditedModalContent />);
                break;
            case 4:
                setModalContent(<AboutYouModalContent />);
                break;
            case 5:
                setModalContent(<ConicRoseModalContent />);
                break;
            case 6:
                setModalContent(<JovanaReisingerModalContent />);
                break;
            case 7:
                setModalContent(<HeroesnHeroinesModalContent/>);
                break;
            case 8:
                setModalContent(<PlasticMediaModalContent/>);
                break;
            case 9:
                setModalContent(<MonopolGmbHModalContent/>);
                break;
            case 10:
                setModalContent(<CommaModalContent/>);
                break;
            case 11:
                setModalContent(<MonaMModalContent/>);
                break;
            default:
                setModalContent(null);
        }
        setIsModalOpen(true);
    };

    const handleImageClick = (index) => {
        // Check if project is protected
        if (protectedProjects[index]) {
            setPendingProjectIndex(index);
            setIsPasswordModalOpen(true);
        } else {
            openProjectModal(index);
        }
    };

    const handlePasswordSuccess = () => {
        setIsPasswordModalOpen(false);
        openProjectModal(pendingProjectIndex);
        setPendingProjectIndex(null);
    };

    const handlePasswordClose = () => {
        setIsPasswordModalOpen(false);
        setPendingProjectIndex(null);
    };



    const closeModal = () => {
        setIsModalOpen(false);
        setModalContent(null);
    };

    return (
        <main>
            <Carousel onImageClick={handleImageClick} hasVisibleContent={hasVisibleContent} />
            <Modal isOpen={isModalOpen} onClose={closeModal} content={modalContent} />
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