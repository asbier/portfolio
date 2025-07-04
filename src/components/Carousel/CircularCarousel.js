import React, { useRef, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import imagesData from "../../data/imagesData";
import './CircularCarousel.css';

const CircularCarousel = ({ onImageClick }) => {
    const [rotation, setRotation] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [dragStart, setDragStart] = useState({ x: 0, rotation: 0 });
    const carousel = useRef();
    const controls = useAnimation();

    const totalItems = imagesData.length;
    const angleStep = 360 / totalItems;
    const radius = 250; // Radius of the circle

    useEffect(() => {
        controls.start({ opacity: 1 });
    }, [controls]);

    const handleDragStart = (event) => {
        setIsDragging(true);
        const clientX = event.type === 'mousedown' ? event.clientX : event.touches[0].clientX;
        setDragStart({ x: clientX, rotation: rotation });
    };

    const handleDragMove = (event) => {
        if (!isDragging) return;
        
        const clientX = event.type === 'mousemove' ? event.clientX : event.touches[0].clientX;
        const deltaX = clientX - dragStart.x;
        const rotationDelta = deltaX * 0.5; // Sensitivity factor
        
        setRotation(dragStart.rotation + rotationDelta);
    };

    const handleDragEnd = () => {
        setIsDragging(false);
        // Snap to nearest item
        const snapRotation = Math.round(rotation / angleStep) * angleStep;
        setRotation(snapRotation);
    };

    const handleItemClick = (index) => {
        if (!isDragging) {
            onImageClick(index);
        }
    };

    return (
        <motion.div
            ref={carousel}
            className="circular-carousel"
            animate={controls}
            onMouseDown={handleDragStart}
            onMouseMove={handleDragMove}
            onMouseUp={handleDragEnd}
            onMouseLeave={handleDragEnd}
            onTouchStart={handleDragStart}
            onTouchMove={handleDragMove}
            onTouchEnd={handleDragEnd}
        >
            <div className="circular-carousel-container">
                <motion.div
                    className="circular-carousel-track"
                    style={{
                        transform: `rotate(${rotation}deg)`,
                        transition: isDragging ? 'none' : 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
                    }}
                >
                    {imagesData.map((image, index) => {
                        const angle = index * angleStep;
                        const isProtected = index === 0 || index === 1;
                        
                        return (
                            <motion.div
                                key={index}
                                className={`circular-item ${isProtected ? 'protected' : ''}`}
                                style={{
                                    transform: `rotate(${angle}deg) translateY(-${radius}px) rotate(-${angle + rotation}deg)`,
                                }}
                                whileHover={{ scale: 1.1, zIndex: 10 }}
                                onClick={() => handleItemClick(index)}
                            >
                                <div className="circular-image-container">
                                    <img src={image} alt={`Carousel Item ${index + 1}`} />
                                    <div className="circular-title-overlay">
                                        {index === 0 ? (
                                            <>
                                                <span className="circular-title-small">UX Designer & Innovation</span>
                                                <h3 className="circular-title-main">Volkswagen x DAYONE</h3>
                                            </>
                                        ) : index === 1 ? (
                                            <>
                                                <span className="circular-title-small">UX Designer E-Commerce</span>
                                                <h3 className="circular-title-main">CARHARTT WIP</h3>
                                            </>
                                        ) : index === 2 ? (
                                            <>
                                                <span className="circular-title-small">Art Director Brand</span>
                                                <h3 className="circular-title-main">EDITED</h3>
                                            </>
                                        ) : index === 3 ? (
                                            <>
                                                <span className="circular-title-small">Art Director New Brand</span>
                                                <h3 className="circular-title-main">AboutYou</h3>
                                            </>
                                        ) : index === 4 ? (
                                            <>
                                                <span className="circular-title-small">Album Cover Design</span>
                                                <h3 className="circular-title-main">Conic Rose</h3>
                                            </>
                                        ) : index === 5 ? (
                                            <>
                                                <span className="circular-title-small">Event Experience</span>
                                                <h3 className="circular-title-main">HEROES & HEROINES</h3>
                                            </>
                                        ) : index === 6 ? (
                                            <>
                                                <span className="circular-title-small">Agency Designer</span>
                                                <h3 className="circular-title-main">PLASTIC MEDIA</h3>
                                            </>
                                        ) : index === 7 ? (
                                            <>
                                                <span className="circular-title-small">Art Director Agency</span>
                                                <h3 className="circular-title-main">MONOPOL MEDIA</h3>
                                            </>
                                        ) : index === 8 ? (
                                            <>
                                                <span className="circular-title-small">Art Director</span>
                                                <h3 className="circular-title-main">Comma</h3>
                                            </>
                                        ) : index === 9 ? (
                                            <>
                                                <span className="circular-title-small">Album Cover</span>
                                                <h3 className="circular-title-main">MonaM</h3>
                                            </>
                                        ) : (
                                            <h3>{`Project ${index + 1}`}</h3>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </motion.div>
    );
};

export default CircularCarousel; 