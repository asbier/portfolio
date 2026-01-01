import { motion } from 'framer-motion';

const FloatingLetter = ({ char, x, y, rotate }) => {
  return (
    <motion.span
      drag
      dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
      dragElastic={0.6} // Erzeugt den "Wasser-Widerstand"
      dragTransition={{ bounceStiffness: 40, bounceDamping: 10 }} // Sanftes Nachschwingen
      initial={{ y: -200, opacity: 0, rotate: rotate - 20 }}
      animate={{ 
        y: y, 
        opacity: 1, 
        rotate: rotate,
        transition: { type: "spring", stiffness: 30, damping: 15, delay: Math.random() * 0.5 }
      }}
      whileHover={{ scale: 1.1, cursor: "grab" }}
      whileTap={{ cursor: "grabbing" }}
      className="absolute text-[80px] lg:text-[120px] font-neue-semibold text-black/20 select-none pointer-events-auto"
      style={{ left: x }}
    >
      {char}
    </motion.span>
  );
};

export default FloatingLetter;

