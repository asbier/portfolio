import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Buchstabe-für-Buchstabe Reveal-Effekt - wie beim Lesen
const LetterReveal = ({ text, className = '', scrollProgress }) => {
  const ref = useRef(null);
  
  // Transform scroll progress to reveal progress (0 = start, 1 = all letters visible)
  const revealProgress = useTransform(scrollProgress, [0, 1], [0, 1]);
  
  const letters = text.split('');
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    const unsubscribe = revealProgress.on('change', (latest) => {
      const count = Math.floor(latest * letters.length);
      setVisibleCount(count);
    });
    return () => unsubscribe();
  }, [revealProgress, letters.length]);

  return (
    <motion.div 
      ref={ref}
      className={`flex flex-wrap ${className}`}
    >
      {letters.map((letter, i) => {
        const isVisible = i < visibleCount;
        const isSpace = letter === ' ';
        
        return (
          <motion.span
            key={i}
            initial={{ opacity: 0.2 }}
            animate={{ 
              opacity: isVisible ? 1 : 0.2,
              color: isVisible ? 'rgba(0, 0, 0, 1)' : 'rgba(151, 151, 151, 0.2)'
            }}
            transition={{ duration: 0.1 }}
            className={isSpace ? 'mr-1' : ''}
          >
            {letter}
          </motion.span>
        );
      })}
    </motion.div>
  );
};

export default LetterReveal;

