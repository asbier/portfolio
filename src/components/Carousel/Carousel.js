import React, { useRef, useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import './Carousel.css';
import imagesData from '../../data/imagesData';

const Carousel = ({ onImageClick, hasVisibleContent }) => {
    const carousel = useRef();
    const controls = useAnimation();
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    useEffect(() => {
        controls.start({ opacity: 1 });
    }, [controls]);

    // Drag to scroll handlers
    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - carousel.current.offsetLeft);
        setScrollLeft(carousel.current.scrollLeft);
    };

    const handleTouchStart = (e) => {
        setIsDragging(true);
        setStartX(e.touches[0].pageX - carousel.current.offsetLeft);
        setScrollLeft(carousel.current.scrollLeft);
        // Prevent page scrolling when touching the carousel
        e.stopPropagation();
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleTouchEnd = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - carousel.current.offsetLeft;
        const walk = (x - startX) * 2;
        carousel.current.scrollLeft = scrollLeft - walk;
    };

    const handleTouchMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        e.stopPropagation();
        const x = e.touches[0].pageX - carousel.current.offsetLeft;
        const walk = (x - startX) * 2;
        carousel.current.scrollLeft = scrollLeft - walk;
    };

    const handleItemClick = (index) => {
        if (!isDragging) {
            onImageClick(index);
        }
    };

    return (
        <motion.div
            className={`carousel ${hasVisibleContent ? 'with-about' : ''}`}
            initial={{ opacity: 0 }}
            animate={controls}
            ref={carousel}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onTouchMove={handleTouchMove}
        >
            <div className="inner-carousel">
                {imagesData.map((image, index) => {
                    const isProtected = index === 0 || index === 1; // DAYONE and Carhartt (shifted)
                    
                    return (
                    <motion.div
                        key={index}
                        className={`item ${isProtected ? 'protected' : ''}`}
                        whileHover={{ scale: 1.05, zIndex: 10 }}
                        onClick={() => handleItemClick(index)}
                    >
                        <div className="image-container">
                            <img 
                                src={image} 
                                alt={`Carousel Item ${index + 1}`}
                                loading="lazy"
                            />
                            <div className="title-overlay">
                                {index === 0 ? (
                                    <>
                                        <div className="image-title-small">UX Designer & Innovation Consultant</div>
                                        <div className="image-title-main">Volkswagen x DAYONE</div>
                                    </>
                                ) : index === 1 ? (
                                    <>
                                        <div className="image-title-small">UX Designer – E-Commerce</div>
                                        <div className="image-title-main">CARHARTT WIP</div>
                                    </>
                                ) : index === 2 ? (
                                    <>
                                        <div className="image-title-small">Art Director Brand</div>
                                        <div className="image-title-main">EDITED</div>
                                    </>
                                ) : index === 3 ? (
                                    <>
                                        <div className="image-title-small">Art Director New Brand Experience</div>
                                        <div className="image-title-main">aboutyou.de/dein-shop</div>
                                    </>
                                ) : index === 4 ? (
                                    <>
                                        <div className="image-title-small">Design Album Cover</div>
                                        <div className="image-title-main">Conic Rose</div>
                                    </>
                                ) : index === 5 ? (
                                    <>
                                        <div className="image-title-small">Designer</div>
                                        <div className="image-title-main">JOVANA REISINGER</div>
                                    </>
                                ) : index === 6 ? (
                                    <>
                                        <div className="image-title-small">Event Experience Designer</div>
                                        <div className="image-title-main">HEROES & HEROINES</div>
                                    </>
                                ) : index === 7 ? (
                                    <>
                                        <div className="image-title-small">Designer in Agency</div>
                                        <div className="image-title-main">PLASTIC MEDIA</div>
                                    </>
                                ) : index === 8 ? (
                                    <>
                                        <div className="image-title-small">Art Director in Agency</div>
                                        <div className="image-title-main">MONOPOL MEDIA GmbH</div>
                                    </>
                                ) : index === 9 ? (
                                    <>
                                        <div className="image-title-small">Art Director for Agency</div>
                                        <div className="image-title-main">Comma</div>
                                    </>
                                ) : index === 10 ? (
                                    <>
                                        <div className="image-title-small">Designer Album Cover</div>
                                        <div className="image-title-main">MonaM</div>
                                    </>
                                ) : (
                                    <div className="image-title-main">{`Image ${index + 1}`}</div>
                                )}
                            </div>
                        </div>
                        {isProtected && <div className="lock-indicator">🔒</div>}
                    </motion.div>
                    );
                })}
            </div>
        </motion.div>
    );
};

export default Carousel;