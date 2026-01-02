import { motion, useSpring, useMotionValue, animate } from 'framer-motion';
import { useEffect, useRef } from 'react';

const letterColors = ['#DEE6DF', '#E3EEEC', '#D9DED4'];

const PhysicsLetter = ({ char, defaultX, defaultY, delay = 0, letterId, isSwirling = false, fallIn = false, colorIndex = 0, size = 'normal' }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(fallIn ? -1000 : 0);
  const rotate = useMotionValue(0);
  const opacity = useMotionValue(0);
  
  const letterRef = useRef(null);
  const velocity = useRef({ x: 0, y: 0 });
  const lastPos = useRef({ x: 0, y: 0 });

  const letterColor = letterColors[colorIndex % letterColors.length];
  
  // SCHWERE PHYSIK: Hohe Masse und Dämpfung für den "Öl-Effekt"
  const springConfig = { stiffness: 20, damping: 30, mass: 8 };
  const rotateSpringConfig = { stiffness: 15, damping: 25, mass: 5 };
  
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);
  const springRotate = useSpring(rotate, rotateSpringConfig);

  // 1. Initialer Fall in die Flüssigkeit
  useEffect(() => {
    const timeout = setTimeout(() => {
      animate(y, 0, {
        type: "spring",
        stiffness: 15,
        damping: 20,
        mass: 5
      });
      animate(opacity, 0.4, { duration: 1.5 });
    }, delay * 1000);
    return () => clearTimeout(timeout);
  }, [y, opacity, delay]);

  // 2. Kontinuierliche Physik-Berechnung (Stoß & Umfallen)
  useEffect(() => {
    const updatePhysics = () => {
      if (!letterRef.current) {
        requestAnimationFrame(updatePhysics);
        return;
      }

      // Geschwindigkeit berechnen
      const currentX = x.get();
      const currentY = y.get();
      velocity.current = {
        x: currentX - lastPos.current.x,
        y: currentY - lastPos.current.y
      };
      lastPos.current = { x: currentX, y: currentY };

      const rect = letterRef.current.getBoundingClientRect();
      const nav = document.querySelector('header') || document.querySelector('nav');
      const navBottom = nav ? nav.getBoundingClientRect().bottom : 80;

      const limits = {
        top: navBottom + 10,
        bottom: window.innerHeight - 40,
        left: 20,
        right: (window.innerWidth / 2) - 20
      };

      let hitWall = false;

      // Wand-Kollision mit "Umkipp-Effekt" (Torque) - sehr subtil
      if (rect.left < limits.left) {
        x.set(currentX + 10);
        rotate.set(rotate.get() + velocity.current.y * 0.3); // Sehr leichte Rotation
        hitWall = true;
      }
      if (rect.right > limits.right) {
        x.set(currentX - 10);
        rotate.set(rotate.get() - velocity.current.y * 0.3);
        hitWall = true;
      }
      if (rect.top < limits.top) {
        y.set(currentY + 10);
        rotate.set(rotate.get() + velocity.current.x * 0.3);
        hitWall = true;
      }
      if (rect.bottom > limits.bottom) {
        y.set(currentY - 10);
        rotate.set(rotate.get() - velocity.current.x * 0.3);
        hitWall = true;
      }

      // LETTER-TO-LETTER KOLLISION mit Reaktion
      const allLetterElements = document.querySelectorAll('[data-letter-id]');
      allLetterElements.forEach((otherElement) => {
        if (otherElement !== letterRef.current) {
          const otherRect = otherElement.getBoundingClientRect();
          const otherCenterX = otherRect.left + otherRect.width / 2;
          const otherCenterY = otherRect.top + otherRect.height / 2;
          
          const letterCenterX = rect.left + rect.width / 2;
          const letterCenterY = rect.top + rect.height / 2;
          
          const letterDistance = Math.sqrt(
            Math.pow(letterCenterX - otherCenterX, 2) + 
            Math.pow(letterCenterY - otherCenterY, 2)
          );
          
          const minDistance = (rect.width + otherRect.width) / 3;
          
          if (letterDistance < minDistance && letterDistance > 0) {
            // Kollisionskraft berechnen
            const collisionForce = ((minDistance - letterDistance) / minDistance) * 30;
            const pushX = ((letterCenterX - otherCenterX) / letterDistance) * collisionForce;
            const pushY = ((letterCenterY - otherCenterY) / letterDistance) * collisionForce;
            
            // Position korrigieren
            x.set(currentX + pushX * 0.5);
            y.set(currentY + pushY * 0.5);
            
            // Torque bei Kollision: sehr subtile Rotation
            const relativeVelocity = Math.sqrt(velocity.current.x ** 2 + velocity.current.y ** 2);
            rotate.set(rotate.get() + (pushX * 0.05 + pushY * 0.05) * relativeVelocity * 0.02);
            
            hitWall = true;
          }
        }
      });

      // Reibung / Widerstand (Viskosität)
      if (!hitWall) {
        x.set(currentX * 0.98);
        y.set(currentY * 0.98);
        rotate.set(rotate.get() * 0.97);
      }

      requestAnimationFrame(updatePhysics);
    };

    const animId = requestAnimationFrame(updatePhysics);
    return () => cancelAnimationFrame(animId);
  }, [x, y, rotate]);

  // 3. Maus-Interaktion
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!letterRef.current) return;
      const rect = letterRef.current.getBoundingClientRect();
      const lX = rect.left + rect.width / 2;
      const lY = rect.top + rect.height / 2;
      const dX = e.clientX - lX;
      const dY = e.clientY - lY;
      const dist = Math.sqrt(dX * dX + dY * dY);
      
      if (dist < 300 && dist > 0) {
        const force = Math.pow((300 - dist) / 300, 2);
        // Drücken schiebt nicht nur, sondern lässt den Buchstaben sehr leicht rotieren (Drehmoment)
        x.set(x.get() + (dX / dist) * force * -40);
        y.set(y.get() + (dY / dist) * force * -40);
        rotate.set(rotate.get() + (dX / dist) * force * 2); // Sehr subtile Rotation
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [x, y, rotate]);

  // 4. Swirling-Effekt bei Paragraph-Wechsel - sehr subtil
  useEffect(() => {
    if (isSwirling) {
      const swirlX = (Math.random() - 0.5) * 20;
      const swirlY = (Math.random() - 0.5) * 15;
      const swirlRotate = (Math.random() - 0.5) * 3; // Sehr leichte Rotation
      
      x.set(x.get() + swirlX);
      y.set(y.get() + swirlY);
      rotate.set(rotate.get() + swirlRotate);
    }
  }, [isSwirling, x, y, rotate]);

  return (
    <motion.span
      ref={letterRef}
      data-letter-id={letterId}
      style={{
        x: springX,
        y: springY,
        rotate: springRotate,
        opacity: opacity,
        left: defaultX,
        top: defaultY,
        color: letterColor,
        willChange: 'transform'
      }}
      className={`absolute font-neue-semibold select-none pointer-events-auto leading-none tracking-tighter ${
        size === 'large' ? 'text-[28vw] lg:text-[32vw]' : 'text-[22vw] lg:text-[24vw]'
      }`}
    >
      {char}
    </motion.span>
  );
};

export default PhysicsLetter;
