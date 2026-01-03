import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

// Staggered word reveal component - "Reading" feeling like Art Yakushev
const FadeInText = ({ text, className = '', delay = 0, staggerDelay = 0.03 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  
  const words = text.split(' ');
  
  return (
    <motion.p 
      ref={ref}
      className={`flex flex-wrap overflow-hidden ${className}`}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ 
            duration: 0.5, 
            delay: delay + (i * staggerDelay),
            ease: [0.215, 0.61, 0.355, 1] // Apple-style easing
          }}
          className="mr-[0.25em]"
        >
          {word}
        </motion.span>
      ))}
    </motion.p>
  );
};

export default FadeInText;

