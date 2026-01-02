import { motion, useSpring, useMotionValue, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';

// Wasser-ähnliche Farben für Reflexion
const letterColors = ['#DEE6DF', '#E3EEEC', '#D9DED4'];

const PhysicsLetter = ({ char, defaultX, defaultY, containerRef, delay = 0, letterId, isSwirling = false, fallIn = false, colorIndex = 0, size = 'normal' }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotate = useMotionValue(0);
  const letterRef = useRef(null);
  const controls = useAnimation();
  
  // Zufällige Farbe für Wasser-Reflexion
  const letterColor = letterColors[colorIndex % letterColors.length];
  
  // ÖLIGE PHYSIK: Stiffness runter, Mass hoch = viskos und träge
  const springConfig = { 
    stiffness: 8,
    damping: 12,
    mass: 5.0
  };
  
  // Federung für Rotation
  const rotateSpringConfig = { stiffness: 15, damping: 10, mass: 2 };
  
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);
  const springRotate = useSpring(rotate, rotateSpringConfig);

  // Kontinuierliche Wasser-Bewegung
  useEffect(() => {
    const startFloating = async () => {
      if (fallIn) {
        await controls.start({
          // Wir animieren y von einem negativen Wert auf 0 (seine defaultY Position)
          y: ['-400%', '0%'], 
          opacity: [0, 0.4],
          transition: {
            duration: 2.0,
            delay: delay,
            ease: [0.22, 1, 0.36, 1], // Starkes Abbremsen am Ende
          }
        });
        // Nach dem Aufprall kurz stabilisieren (sehr sanft)
        controls.start({
          y: [0, -5, 0],
          transition: { duration: 0.5 }
        });
        
        // Zusätzliche Boundary-Correction nach FallIn
        setTimeout(() => {
          if (letterRef.current) {
            const rect = letterRef.current.getBoundingClientRect();
            const containerWidth = window.innerWidth / 2;
            const containerHeight = window.innerHeight;
            const navElement = document.querySelector('header');
            const topLimit = navElement ? navElement.getBoundingClientRect().bottom + 20 : 140;
            const bottomLimit = containerHeight - 40;
            const leftLimit = 20;
            const rightLimit = containerWidth - 20;
            
            let correctionX = 0;
            let correctionY = 0;
            
            if (rect.left < leftLimit) {
              correctionX = leftLimit - rect.left + 20;
            } else if (rect.right > rightLimit) {
              correctionX = -(rect.right - rightLimit) - 20;
            }
            
            if (rect.top < topLimit) {
              correctionY = topLimit - rect.top + 20;
            } else if (rect.bottom > bottomLimit) {
              correctionY = -(rect.bottom - bottomLimit) - 20;
            }
            
            if (correctionX !== 0 || correctionY !== 0) {
              x.set(x.get() + correctionX);
              y.set(y.get() + correctionY);
            }
          }
        }, 2100 + delay * 1000); // Nach FallIn-Animation
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
      
      // Kontinuierliches Schweben (sehr sanft, um im Container zu bleiben)
      controls.start({
        x: [0, Math.random() * 4 - 2, Math.random() * -3 + 1.5, 0],
        y: [0, Math.random() * 3 - 1.5, Math.random() * -2.5 + 1.25, 0],
        rotate: [0, Math.random() * 2 - 1, Math.random() * -1.5 + 0.75, 0],
        transition: {
          duration: 15 + Math.random() * 8,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }
      });
    };
    
    startFloating();
  }, [controls, delay, fallIn]);

  // "Aufwirbeln" bei Paragraph-Wechsel (sehr sanft)
  useEffect(() => {
    if (isSwirling) {
      const swirlX = (Math.random() - 0.5) * 20; // Noch weiter reduziert
      const swirlY = (Math.random() - 0.5) * 15; // Noch weiter reduziert
      const rotation = (Math.random() - 0.5) * 12; // Noch weiter reduziert
      
      controls.start({
        x: [0, swirlX, 0],
        y: [0, swirlY, 0],
        rotate: [0, rotation, 0],
        transition: { duration: 1.0, ease: "easeOut" }
      });
    }
  }, [isSwirling, controls]);

  // Maus-Interaktion mit BOUNCE-Physik und Letter-Kollision
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!letterRef.current) return;
      
      const rect = letterRef.current.getBoundingClientRect();
      const letterCenterX = rect.left + rect.width / 2;
      const letterCenterY = rect.top + rect.height / 2;
      
      const deltaX = e.clientX - letterCenterX;
      const deltaY = e.clientY - letterCenterY;
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
      const repulsionRadius = 300;
      
      if (distance < repulsionRadius && distance > 0) {
        const force = Math.pow((repulsionRadius - distance) / repulsionRadius, 2);
        
        // Kraft berechnen - NEGATIVE Werte stoßen von der Maus WEG (reduziert)
        let moveX = (deltaX / distance) * force * -50;
        let moveY = (deltaY / distance) * force * -50;

        // --- LETTER-TO-LETTER KOLLISION (Softer) ---
        const allLetterElements = document.querySelectorAll('[data-letter-id]');
        allLetterElements.forEach((otherElement) => {
          if (otherElement !== letterRef.current) {
            const otherRect = otherElement.getBoundingClientRect();
            const otherCenterX = otherRect.left + otherRect.width / 2;
            const otherCenterY = otherRect.top + otherRect.height / 2;
            
            const letterDistance = Math.sqrt(
              Math.pow(letterCenterX - otherCenterX, 2) + 
              Math.pow(letterCenterY - otherCenterY, 2)
            );
            
            const minDistance = (rect.width + otherRect.width) / 4; // Kleinerer Kollisions-Radius
            
            if (letterDistance < minDistance && letterDistance > 0) {
              // Sanfteres Wegstoßen (weniger aggressiv)
              const pushForce = ((minDistance - letterDistance) / minDistance) * 20;
              moveX += ((letterCenterX - otherCenterX) / letterDistance) * pushForce;
              moveY += ((letterCenterY - otherCenterY) / letterDistance) * pushForce;
              // Sanfterer Dreh-Impuls
              rotate.set(rotate.get() + (Math.random() - 0.5) * 10);
            }
          }
        });

        // --- STRENGER CONTAINER-BOUNDARY CHECK ---
        const containerWidth = window.innerWidth / 2;
        const containerHeight = window.innerHeight;
        
        // Dynamische Nav-Erkennung
        const navElement = document.querySelector('header');
        const topLimit = navElement ? navElement.getBoundingClientRect().bottom + 20 : 140;
        
        const bottomLimit = containerHeight - 40;
        const leftLimit = 20;
        const rightLimit = containerWidth - 20;

        // Geplante Bewegung begrenzen, damit sie nicht "durch Wände tunneln"
        moveX = Math.max(-25, Math.min(25, moveX));
        moveY = Math.max(-25, Math.min(25, moveY));

        let currentX = x.get();
        let currentY = y.get();
        let newX = currentX + moveX;
        let newY = currentY + moveY;

        // Die tatsächliche Position des Elements im Viewport (inkl. Default-Offsets)
        // Wir nutzen rect, um die Kanten des RIESIGEN Buchstabens zu finden
        const buffer = 10; // Kleiner Puffer

        // Kollision Links/Rechts
        if (rect.left + moveX < leftLimit) {
          newX = currentX + (leftLimit - rect.left) + buffer;
        } else if (rect.right + moveX > rightLimit) {
          newX = currentX - (rect.right - rightLimit) - buffer;
        }

        // Kollision Oben (Nav) / Unten
        if (rect.top + moveY < topLimit) {
          newY = currentY + (topLimit - rect.top) + buffer;
        } else if (rect.bottom + moveY > bottomLimit) {
          newY = currentY - (rect.bottom - bottomLimit) - buffer;
        }

        // Sanfte Rotation bei Wandkontakt erzwingen
        if (newX !== currentX + moveX || newY !== currentY + moveY) {
          rotate.set(rotate.get() + (Math.random() - 0.5) * 30);
        }

        x.set(newX);
        y.set(newY);
      } else {
        // Zähes Ausgleiten im Öl
        x.set(x.get() * 0.96);
        y.set(y.get() * 0.96);
        rotate.set(rotate.get() * 0.96);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [x, y, rotate]);

  // KONTINUIERLICHER BOUNDARY-CORRECTION (auch für Animationen)
  useEffect(() => {
    let animationFrameId;
    
    const enforceBoundaries = () => {
      if (!letterRef.current) {
        animationFrameId = requestAnimationFrame(enforceBoundaries);
        return;
      }
      
      const rect = letterRef.current.getBoundingClientRect();
      const containerWidth = window.innerWidth / 2;
      const containerHeight = window.innerHeight;
      
      const navElement = document.querySelector('header');
      const topLimit = navElement ? navElement.getBoundingClientRect().bottom + 20 : 140;
      const bottomLimit = containerHeight - 40;
      const leftLimit = 20;
      const rightLimit = containerWidth - 20;
      
      let needsCorrection = false;
      let correctionX = 0;
      let correctionY = 0;
      
      // Prüfe alle 4 Grenzen
      if (rect.left < leftLimit) {
        correctionX = leftLimit - rect.left + 10;
        needsCorrection = true;
      } else if (rect.right > rightLimit) {
        correctionX = -(rect.right - rightLimit) - 10;
        needsCorrection = true;
      }
      
      if (rect.top < topLimit) {
        correctionY = topLimit - rect.top + 10;
        needsCorrection = true;
      } else if (rect.bottom > bottomLimit) {
        correctionY = -(rect.bottom - bottomLimit) - 10;
        needsCorrection = true;
      }
      
      // Sanfte Korrektur anwenden
      if (needsCorrection) {
        const currentX = x.get();
        const currentY = y.get();
        x.set(currentX + correctionX * 0.3); // Sanft zurückziehen
        y.set(currentY + correctionY * 0.3);
      }
      
      animationFrameId = requestAnimationFrame(enforceBoundaries);
    };
    
    animationFrameId = requestAnimationFrame(enforceBoundaries);
    return () => cancelAnimationFrame(animationFrameId);
  }, [x, y]);

  return (
    <motion.span
      ref={letterRef}
      data-letter-id={letterId}
      drag
      // Drag-Constraints begrenzen auf Container
      dragConstraints={{ 
        left: -50, 
        right: window.innerWidth / 4, 
        top: -50, 
        bottom: window.innerHeight / 2 
      }}
      dragElastic={0.2}
      dragTransition={{ bounceStiffness: 80, bounceDamping: 20 }}
      initial={{ y: fallIn ? '-400%' : -300, opacity: 0 }}
      animate={controls}
      onMouseLeave={() => { 
        rotate.set(rotate.get() * 0.9);
        x.set(x.get() * 0.9);
        y.set(y.get() * 0.9);
      }}
      style={{ 
        x: springX, 
        y: springY,
        rotate: springRotate,
        left: defaultX, 
        top: defaultY,
        color: letterColor,
        opacity: 0.4,
        willChange: 'transform' // GPU-Beschleunigung für große Buchstaben
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
