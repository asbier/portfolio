import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Modal from "./Modal"; // Import Modal component
import images from "../images"; // Assuming images are imported from this file

function Main(props) {
  const [width, setWidth] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isDragging, setIsDragging] = useState(false); // Track dragging state
  const [startX, setStartX] = useState(0);
  const [startTime, setStartTime] = useState(0);

  const carousel = useRef();

  // Update width of the carousel to reflect scrolling constraints
  useEffect(() => {
    const handleResize = () => {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    };

    handleResize();
    window.addEventListener("resize", handleResize);  // Recalculate width on resize

    return () => window.removeEventListener("resize", handleResize); // Clean up listener
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
  const handleDragStart = (e) => {
    setStartX(e.clientX || e.touches[0].clientX);
    setStartTime(new Date().getTime());
    setIsDragging(true);
  };

  const handleDragEnd = (e) => {
    const endX = e.clientX || e.changedTouches[0].clientX;
    const delta = startX - endX;
    const deltaTime = new Date().getTime() - startTime;
    const swipeSpeed = Math.abs(delta) / deltaTime;

    // Adjust scroll velocity based on swipe speed
    if (swipeSpeed > 0.5) {
      const scrollAmount = Math.sign(delta) * swipeSpeed * 30; // adjust scroll multiplier
      carousel.current.scrollLeft += scrollAmount;
    }

    setIsDragging(false);
  };

  // Map images to their respective descriptions
  const getImageDescription = (image) => {
    switch (image) {
      case images[0]:
        return (
          <div>
            <h2>UX Designer & Innovation Consultant</h2>
            <h3>For DAYONE</h3>
            <p>At Dayone, I learned how transformative great design can be...</p>
          </div>
        );
      case images[1]:
        return (
          <div>
            <h2>Carhartt WIP</h2>
            <p>As a UX Designer, I was tasked with addressing several key challenges...</p>
          </div>
        );
      default:
        return <p>No description available.</p>;
    }
  };

  return (
    <main className={props.darkMode ? "body-dark" : "body-light"}>
      {/* Carousel */}
      <motion.div
        ref={carousel}
        className="carousel"
        whileTap={{ cursor: "grabbing" }}
        onWheel={(e) => {
          if (window.innerWidth > 768) {
            e.preventDefault(); // Disable horizontal scroll on desktop only
            carousel.current.scrollLeft += e.deltaY; // Scroll horizontally only on desktop
          }
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
              onMouseUp={() => handleImageClick(image)} // Open modal when not dragging
            >
              <div className="image-container">
                <img src={image} alt={`Carousel Item ${index + 1}`} />
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
        content={selectedImage && getImageDescription(selectedImage)} // Pass image content to Modal
      />
    </main>
  );
}

export default Main;
