import { motion, useSpring, useMotionValue, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';

// Wasser-ähnliche Farben für Reflexion
const letterColors = ['#DEE6DF', '#E3EEEC', '#D9DED4'];

const PhysicsLetter = ({ char, defaultX, defaultY, containerRef, delay = 0, letterId, isSwirling = false, fallIn = false, colorIndex = 0, size = 'normal' }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const letterRef = useRef(null);
  const controls = useAnimation();
  
  // Zufällige Farbe für Wasser-Reflexion
  const letterColor = letterColors[colorIndex % letterColors.length];
  
  // Sehr weiche Federung für "Wasser-Gefühl"
  const springConfig = { stiffness: 12, damping: 8, mass: 2.5 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  // Kontinuierliche Wasser-Bewegung (langsamer, organischer)
  useEffect(() => {
    const startFloating = async () => {
      if (fallIn) {
        // ÖLIGE PHYSIK: Schweres Fallen mit Kipp-Punkt und Wobble
        const tippingDirection = Math.random() > 0.5 ? 1 : -1; // Kippt links oder rechts
        const tippingAngle = tippingDirection * (25 + Math.random() * 35); // 25-60° Kippung
        const settleAngle = tippingDirection * (Math.random() * 8); // Leichte Endneigung
        
        // Phase 1: Langsames Fallen mit starker Kippung (wie schweres Objekt in Öl)
        await controls.start({
          y: ['-500%', '-200%', '5%', '-2%', '0%'], // Sinkt, federt leicht nach
          rotate: [0, tippingAngle * 1.5, tippingAngle * 0.8, -tippingAngle * 0.3, settleAngle], // Kippt, wobbled
          x: [0, tippingDirection * 15, tippingDirection * -8, tippingDirection * 3, 0], // Seitliches Schwanken
          opacity: [0, 0.3, 0.4, 0.4, 0.4],
          transition: {
            duration: 3.5 + Math.random() * 1.5, // 3.5-5 Sekunden (sehr langsam)
            delay: delay,
            ease: [0.15, 0.8, 0.3, 1], // Sehr träge Kurve
            times: [0, 0.3, 0.7, 0.85, 1] // Timing der Keyframes
          }
        });
        
        // Phase 2: Nachschwingen/Settlen wie in zäher Flüssigkeit
        await controls.start({
          rotate: [settleAngle, settleAngle * 0.5, settleAngle * 0.8, settleAngle * 0.3],
          y: ['0%', '1%', '-0.5%', '0%'],
          transition: {
            duration: 2,
            ease: "easeInOut"
          }
        });
      } else {
        // Normal einblenden für APPROACH
        await controls.start({
          y: 0,
          opacity: 0.4,
          transition: {
            type: "spring",
            stiffness: 15,
            damping: 10,
            mass: 3,
            delay: delay
          }
        });
      }
      
      // Dann kontinuierliches Schweben (für beide)
      controls.start({
        x: [0, Math.random() * 20 - 10, Math.random() * -15 + 7.5, 0],
        y: [0, Math.random() * 15 - 7.5, Math.random() * -10 + 5, 0],
        rotate: fallIn 
          ? [0, Math.random() * 6 - 3, Math.random() * -4 + 2, 0] // Weniger Rotation für SYSTEM
          : [0, Math.random() * 8 - 4, Math.random() * -6 + 3, 0],
        transition: {
          duration: 8 + Math.random() * 4, // Langsamer
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }
      });
    };
    
    startFloating();
  }, [controls, delay, fallIn]);

  // "Aufwirbeln" bei Paragraph-Wechsel
  useEffect(() => {
    if (isSwirling) {
      const swirlX = (Math.random() - 0.5) * 100;
      const swirlY = (Math.random() - 0.5) * 80;
      const rotation = (Math.random() - 0.5) * 40;
      
      controls.start({
        x: [0, swirlX, swirlX * 0.6, swirlX * 0.2, 0],
        y: [0, swirlY, swirlY * 0.6, swirlY * 0.2, 0],
        rotate: [0, rotation, rotation * 0.5, rotation * 0.1, 0],
        transition: {
          duration: 1.2,
          ease: [0.25, 0.1, 0.25, 1],
        }
      });
    }
  }, [isSwirling, controls]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!letterRef.current) return;
      
      const rect = letterRef.current.getBoundingClientRect();
      const letterCenterX = rect.left + rect.width / 2;
      const letterCenterY = rect.top + rect.height / 2;
      
      const deltaX = e.clientX - letterCenterX;
      const deltaY = e.clientY - letterCenterY;
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
      
      const repulsionRadius = 350;
      if (distance < repulsionRadius && distance > 0) {
        const force = Math.pow((repulsionRadius - distance) / repulsionRadius, 2);
        let moveX = (deltaX / distance) * force * 60;
        let moveY = (deltaY / distance) * force * 60;
        
        // Kollisionserkennung
        const allLetterElements = document.querySelectorAll('[data-letter-id]');
        allLetterElements.forEach((otherElement) => {
          if (otherElement !== letterRef.current && otherElement.getAttribute('data-letter-id') !== letterId) {
            const otherRect = otherElement.getBoundingClientRect();
            const otherCenterX = otherRect.left + otherRect.width / 2;
            const otherCenterY = otherRect.top + otherRect.height / 2;
            
            const letterDistance = Math.sqrt(
              Math.pow(letterCenterX - otherCenterX, 2) + 
              Math.pow(letterCenterY - otherCenterY, 2)
            );
            
            const minDistance = (rect.width + otherRect.width) / 2 + 40;
            
            if (letterDistance < minDistance && letterDistance > 0) {
              const pushForce = Math.pow((minDistance - letterDistance) / minDistance, 1.5);
              const pushX = ((letterCenterX - otherCenterX) / letterDistance) * pushForce * 35;
              const pushY = ((letterCenterY - otherCenterY) / letterDistance) * pushForce * 35;
              moveX += pushX;
              moveY += pushY;
            }
          }
        });
        
        // Boundary check
        const viewportWidth = window.innerWidth / 2;
        const viewportHeight = window.innerHeight;
        
        const currentLeft = rect.left;
        const currentTop = rect.top;
        const letterWidth = rect.width;
        const letterHeight = rect.height;
        
        const newLeft = currentLeft + moveX;
        const newTop = currentTop + moveY;
        
        const edgePadding = 30;
        const bounceStrength = 0.4;
        
        if (newLeft < edgePadding) {
          const bounce = (edgePadding - newLeft) * bounceStrength;
          moveX = -currentLeft + edgePadding - bounce;
        } else if (newLeft + letterWidth > viewportWidth - edgePadding) {
          const bounce = (newLeft + letterWidth - (viewportWidth - edgePadding)) * bounceStrength;
          moveX = viewportWidth - currentLeft - letterWidth - edgePadding + bounce;
        }
        
        if (newTop < edgePadding + 120) {
          const bounce = (edgePadding + 120 - newTop) * bounceStrength;
          moveY = -(currentTop - edgePadding - 120) - bounce;
        } else if (newTop + letterHeight > viewportHeight - edgePadding) {
          const bounce = (newTop + letterHeight - (viewportHeight - edgePadding)) * bounceStrength;
          moveY = viewportHeight - currentTop - letterHeight - edgePadding + bounce;
        }
        
        x.set(moveX);
        y.set(moveY);
      } else {
        // Langsames Zurückgleiten wie im Wasser
        x.set(x.get() * 0.92);
        y.set(y.get() * 0.92);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [x, y, letterId]);

  return (
    <motion.span
      ref={letterRef}
      data-letter-id={letterId}
      drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      dragElastic={0.98}
      dragTransition={{ bounceStiffness: 100, bounceDamping: 15 }}
      initial={{ y: fallIn ? '-400%' : -300, opacity: 0 }}
      animate={controls}
      onMouseLeave={() => { 
        x.set(x.get() * 0.85);
        y.set(y.get() * 0.85);
      }}
      style={{ 
        x: springX, 
        y: springY, 
        left: defaultX, 
        top: defaultY,
        color: letterColor,
        opacity: 0.4
      }}
      className={`absolute font-neue-semibold select-none cursor-grab active:cursor-grabbing leading-none tracking-tighter pointer-events-auto ${
        size === 'large' 
          ? 'text-[28vw] lg:text-[32vw] xl:text-[30vw]' 
          : 'text-[22vw] lg:text-[26vw] xl:text-[24vw]'
      }`}
    >
      {char}
    </motion.span>
  );
};

export default PhysicsLetter;
