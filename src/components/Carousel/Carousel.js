import React, { useRef, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Scrollbar from "smooth-scrollbar";
import imagesData from "../../data/imagesData";
import './Carousel.css';

const Carousel = ({ onImageClick }) => {
    const [maxScrollWidth, setMaxScrollWidth] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const carousel = useRef();
    const innerCarousel = useRef();
    const controls = useAnimation();

    useEffect(() => {
        if (carousel.current) {
            Scrollbar.init(carousel.current, { damping: 0.05 });
        }

        const handleResize = () => {
            if (innerCarousel.current && carousel.current) {
                const totalScrollWidth = innerCarousel.current.scrollWidth;
                const visibleWidth = carousel.current.offsetWidth;
                setMaxScrollWidth(totalScrollWidth - visibleWidth);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        controls.start({ opacity: 1 });
    }, [controls]);

    return (
        <motion.div
            ref={carousel}
            className="carousel"
            whileTap={{ cursor: "grabbing" }}
            animate={controls}
        >
            <motion.div
                ref={innerCarousel}
                drag="x"
                dragConstraints={{ right: 0, left: -maxScrollWidth }}
                dragElastic={0.1}
                dragTransition={{ bounceStiffness: 200, bounceDamping: 20 }}
                onDragStart={() => setIsDragging(true)}
                onDragEnd={() => setIsDragging(false)}
                className="inner-carousel"
                style={{ width: `calc(${imagesData.length} * 300px)` }} // Adjust width based on number of images and their width
            >
                {imagesData.map((image, index) => (
                    <motion.div
                        className="item"
                        whileHover={{ scale: 1.05 }}
                        key={index}
                        onClick={() => !isDragging && onImageClick(index)}
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
                            ) : index === 2 ? (
                                <>
                                    <span className="image-title-small">UX Designer</span>
                                    <h2 className="image-title-main">EDITED</h2>
                                </>
                            ) : (
                                <h3>{`Title for Image ${index + 1}`}</h3>
                            )}
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
};

export default Carousel;