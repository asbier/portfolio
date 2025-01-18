import React, { useState } from "react";
import Modal from "../Modal/Modal";
import Carousel from "../Carousel/Carousel";
import imagesData from "../../data/imagesData";

function Main(props) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (index) => {
        setSelectedImage(imagesData[index]); // Set content based on clicked image index
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedImage(null);
    };

    return (
        <main className={props.darkMode ? "body-dark" : "body-light"}>
            {/* Carousel */}
            <Carousel onImageClick={handleImageClick} />

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