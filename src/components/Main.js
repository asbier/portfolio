import React, { useRef, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion"; // Import useAnimation here
import Modal from "./Modal"; // Import Modal component
import images from "../images"; // Assuming images are imported from this file
import Scrollbar from "smooth-scrollbar"; // Import smooth-scrollbar

function Main(props) {
  const [width, setWidth] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  const carousel = useRef();
  const controls = useAnimation(); // Now using the controls from useAnimation hook

  useEffect(() => {
    if (carousel.current) {
      Scrollbar.init(carousel.current, { damping: 0.05 });
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

  const handleImageClick = (image) => {
    if (!isDragging) {
      setSelectedImage(image);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  // Sample usage of `controls` if you want to trigger animations
  // Example: animating carousel item opacity
  useEffect(() => {
    controls.start({ opacity: 1 });
  }, [controls]);

  return (
    <main className={props.darkMode ? "body-dark" : "body-light"}>
      {/* Carousel */}
      <motion.div
        ref={carousel}
        className="carousel"
        whileTap={{ cursor: "grabbing" }}
        animate={controls} // Attach animation controls to the motion component
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          dragElastic={0.1} // Control drag elasticity for smooth interactions
          dragTransition={{ bounceStiffness: 200, bounceDamping: 20 }}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={() => setIsDragging(false)}
          className="inner-carousel"
        >
          {images.map((image, index) => (
            <motion.div
              className="item"
              whileHover={{ scale: 1.05 }}
              key={index}
              onClick={() => handleImageClick(image)} // Handle modal opening only if not dragging
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
        content={selectedImage && (
          <div>
            <h2>{selectedImage.title}</h2>
            <p>{selectedImage.description}</p>
          </div>
        )}
      />
    </main>
  );
}

export default Main;
