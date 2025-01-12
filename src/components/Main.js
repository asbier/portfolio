import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import images from "../images";  // Assuming images are imported from this file

function Main(props) {
  const [width, setWidth] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null); // Store the selected image
  const [modalText, setModalText] = useState(""); // Store the text to be displayed in the modal
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  // Handle image click to set the selected image and corresponding text
  const handleImageClick = (image) => {
    setSelectedImage(image); // Set the image clicked
    setModalText(getImageDescription(image)); // Set the text based on the selected image
    setIsModalOpen(true); // Open the modal
  };

  // Close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
    setModalText(""); // Clear the text when closing
  };

  // Function to map image to its description
  const getImageDescription = (image) => {
    switch(image) {
      case images[0]:
        return (
          <div>
            <h2>UX Designer & Innovation Consultant</h2>
            <h3>For DAYONE</h3> {/* Bold and bigger title for DAYONE */}
            <p>At Dayone, I learned how transformative great design can be and how crucial it is for teams to embrace it as a driving force...</p>
            <h3>Automotive Industry Projects: Insights & Contributions</h3>
            <p>Over the course of several German and International market-focused automotive projects...</p>
          </div>
        );
      case images[1]:
        return (
          <div>
            <h2>Carhartt WIP</h2>
            <p>As a UX Designer within the Digital Design Team at Carhartt, I was tasked with addressing several key challenges...</p>
            <h3>Inefficient Help Desk Experience</h3>
            <h4>Problem</h4>
            <p>Users struggled with accessing help and support...</p>
          </div>
        );
      case images[2]:
        return (
          <div>
            <h2>Image 3 Title</h2>
            <p>Details for Image 3...</p>
          </div>
        );
      case images[3]:
        return (
          <div>
            <h2>Image 4 Title</h2>
            <p>Details for Image 4...</p>
          </div>
        );
      case images[4]:
        return (
          <div>
            <h2>Image 5 Title</h2>
            <p>Details for Image 5...</p>
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
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="inner-carousel"
        >
          {images.map((image, index) => (
            <motion.div
              className="item"
              whileHover={{ scale: 1.1 }}
              key={index}
              onClick={() => handleImageClick(image)} // Handle click to open modal
            >
              <img src={image} alt="Carousel Item" />
              {/* Titles for Each Image */}
              <div className="image-title">
                {index === 0 ? (
                  <>
                    <h3 className="image-title-small">UX Designer & Innovation Consultant</h3>
                    <h2 className="image-title-main">DAYONE</h2> {/* Larger, bold title for DAYONE */}
                  </>
                ) : index === 1 ? (
                  <>
                    <span className="image-title-small">Digital UX Designer</span> {/* Smaller title for Digital UX Designer */}
                    <h2 className="image-title-main">CARHARTT WIP</h2> {/* Larger title for CARHARTT WIP */}
                  </>
                ) : index === 2 ? (
                  <>
                    <span className="image-title-small">Designer</span> {/* Smaller title for Image 3 */}
                  </>
                ) : index === 3 ? (
                  <>
                    <span className="image-title-small">Art Director</span> {/* Smaller title for Image 4 */}
                  </>
                ) : index === 4 ? (
                  <>
                    <span className="image-title-small">Designer</span> {/* Smaller title for Image 5 */}
                  </>
                ) : (
                  <h3>{`Title for Image ${index + 1}`}</h3> // Default title for other images
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal" onClick={closeModal}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
          >
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            {/* Display the content based on the selected image */}
            {modalText}
          </div>
        </div>
      )}
    </main>
  );
}

export default Main;
