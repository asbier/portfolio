import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Modal from "./Modal"; // Import Modal component
import images from "../images"; // Assuming images are imported from this file

function Main(props) {
  const [width, setWidth] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isDragging, setIsDragging] = useState(false); // Track dragging state
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  // Open modal with selected image description
  const handleImageClick = (image) => {
    if (!isDragging) {
      setSelectedImage(image);
      setIsModalOpen(true);
    }
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  // Detect drag events to prevent modal interaction during drag
  const handleDragStart = () => setIsDragging(true);
  const handleDragEnd = () => setIsDragging(false);

  // Map images to their respective descriptions
  const getImageDescription = (image) => {
    switch (image) {
      case images[0]:
        return (
          <div>
            <h2>UX Designer & Innovation Consultant</h2>
            <h3>For DAYONE</h3>
            <p>
              At Dayone, I learned how transformative great design can be and how crucial it
              is for teams to embrace it as a driving force...
            </p>
            <h3>Automotive Industry Projects: Insights & Contributions</h3>
            <p>
              Over the course of several German and International market-focused automotive projects...
            </p>
          </div>
        );
      case images[1]:
        return (
          <div>
            <h2>Carhartt WIP</h2>
            <p>
              As a UX Designer within the Digital Design Team at Carhartt, I was tasked with addressing several key challenges...
            </p>
            <h3>Inefficient Help Desk Experience</h3>
            <h4>Problem</h4>
            <p>Users struggled with accessing help and support...</p>
          </div>
        );
      default:
        return <p>No description available.</p>;
    }
  };

  return (
    <main className={props.darkMode ? "dark" : ""}>
      {/* Carousel */}
      <motion.div
        ref={carousel}
        className="carousel"
        whileTap={{ cursor: "grabbing" }}
        onWheel={(e) => {
          e.preventDefault(); // Prevent default scroll
          carousel.current.scrollLeft += e.deltaY; // Scroll horizontally
        }}
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="inner-carousel"
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
        >
          {images.map((image, index) => (
            <motion.div
              className="item"
              whileHover={{ scale: 1.1 }}
              key={index}
              onMouseUp={() => handleImageClick(image)} // Open modal if not dragging
            >
              <div className="image-container">
                <img src={image} alt={`Carousel Item ${index + 1}`} />
              </div>
              <div className="title-container">
                {index === 0 ? (
                  <>
                    <h3 className="image-title-small">
                      UX Designer & Innovation Consultant
                    </h3>
                    <h2 className="image-title-main">DAYONE</h2>
                  </>
                ) : index === 1 ? (
                  <>
                    <span className="image-title-small">
                      Digital UX Designer
                    </span>
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
        content={selectedImage && getImageDescription(selectedImage)} // Pass content to Modal
      />
    </main>
  );
}

export default Main;
