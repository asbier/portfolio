import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Text component that changes from light gray to darker gray while scrolling/reading
const ScrollRevealText = ({ children, className = '', delay = 0 }) => {
  const ref = useRef(null);
  const [isInViewport, setIsInViewport] = useState(false);
  
  // Track scroll progress for this element
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Transform scroll progress to opacity/color intensity
  // Start with light gray (0.3 opacity), end with full gray (1.0)
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 1]);
  const color = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ['rgba(151, 151, 151, 0.3)', 'rgba(151, 151, 151, 1)', 'rgba(151, 151, 151, 1)']
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInViewport(entry.isIntersecting);
      },
      { threshold: 0.1, rootMargin: '-100px 0px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <motion.div
      ref={ref}
      style={{ color }}
      className={className}
      initial={{ opacity: 0.3 }}
      animate={isInViewport ? { opacity: 1 } : { opacity: 0.3 }}
      transition={{ duration: 0.6, delay, ease: [0.215, 0.61, 0.355, 1] }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollRevealText;

