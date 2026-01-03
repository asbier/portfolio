import { motion, useSpring, useMotionValue, animate } from 'framer-motion';
import { useEffect, useRef } from 'react';

const letterColors = ['#DEE6DF', '#E3EEEC', '#D9DED4'];

const PhysicsLetter = ({ char, defaultX, defaultY, delay = 0, letterId, fallIn = false, colorIndex = 0, size = 'normal', isMobile = false }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(fallIn ? -600 : 0);
  const rotate = useMotionValue(0);
  const opacity = useMotionValue(0);
  const letterRef = useRef(null);
  const velocity = useRef({ x: 0, y: 0 });
  const maxVelocity = 15; // Velocity limiter to prevent explosions

  const letterColor = letterColors[colorIndex % letterColors.length];
  
  // Stabilere Physik: höhere Masse und Dämpfung für "öliges" Gefühl - ruhiger
  const springConfig = isMobile 
    ? { stiffness: 8, damping: 45, mass: 18 }  // Mobile: noch ruhiger
    : { stiffness: 12, damping: 40, mass: 8 };  // Desktop: ruhiger
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);
  const springRotate = useSpring(rotate, { stiffness: 8, damping: 35, mass: 6 });

  // Fall-in Animation direkt auf MotionValue für physikalische Trägheit - ruhiger
  useEffect(() => {
    const timeout = setTimeout(() => {
      animate(y, 0, { 
        type: "spring", 
        stiffness: isMobile ? 6 : 10,  // Ruhiger
        damping: isMobile ? 35 : 25,    // Mehr Dämpfung
        mass: isMobile ? 15 : 6         // Schwerer
      });
      animate(opacity, 0.4, { duration: 2.0 }); // Langsameres Fade-in
    }, delay * 1000);
    return () => clearTimeout(timeout);
  }, [y, opacity, delay, isMobile]);

  // Sanfte Boundary-Checks und Velocity-Limiter
  useEffect(() => {
    const updatePhysics = () => {
      if (!letterRef.current) {
        requestAnimationFrame(updatePhysics);
        return;
      }

      const rect = letterRef.current.getBoundingClientRect();
      const nav = document.querySelector('header') || document.querySelector('nav');
      const navBottom = nav ? nav.getBoundingClientRect().bottom : 80;

      const limits = isMobile
        ? {
            top: navBottom + 10,
            bottom: window.innerHeight * 0.4,
            left: 10,
            right: window.innerWidth - 10
          }
        : {
            top: navBottom + 10,
            bottom: window.innerHeight - 40,
            left: 20,
            right: (window.innerWidth / 2) - 20
          };

      const currentX = x.get();
      const currentY = y.get();
      
      // Velocity berechnen und limitieren
      velocity.current = {
        x: currentX - (velocity.current.lastX || 0),
        y: currentY - (velocity.current.lastY || 0)
      };
      
      // Velocity-Limiter: verhindert Explosionen
      if (Math.abs(velocity.current.x) > maxVelocity) {
        velocity.current.x = Math.sign(velocity.current.x) * maxVelocity;
      }
      if (Math.abs(velocity.current.y) > maxVelocity) {
        velocity.current.y = Math.sign(velocity.current.y) * maxVelocity;
      }
      
      velocity.current.lastX = currentX;
      velocity.current.lastY = currentY;

      // Sanfte Boundary-Checks
      let needsCorrection = false;
      let newX = currentX;
      let newY = currentY;

      if (rect.left < limits.left) {
        newX = currentX + (limits.left - rect.left) * 0.1;
        needsCorrection = true;
      }
      if (rect.right > limits.right) {
        newX = currentX - (rect.right - limits.right) * 0.1;
        needsCorrection = true;
      }
      if (rect.top < limits.top) {
        newY = currentY + (limits.top - rect.top) * 0.1;
        needsCorrection = true;
      }
      if (rect.bottom > limits.bottom) {
        newY = currentY - (rect.bottom - limits.bottom) * 0.1;
        needsCorrection = true;
      }

      if (needsCorrection) {
        x.set(newX);
        y.set(newY);
      }

      // Sanfte Reibung wenn keine Korrektur nötig - ruhiger
      if (!needsCorrection) {
        x.set(currentX * 0.96);  // Mehr Reibung = ruhiger
        y.set(currentY * 0.96);
        rotate.set(rotate.get() * 0.95);
      }

      requestAnimationFrame(updatePhysics);
    };

    const animId = requestAnimationFrame(updatePhysics);
    return () => cancelAnimationFrame(animId);
  }, [x, y, rotate, isMobile]);

  // Sanfte Maus-Interaktion mit Torque
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!letterRef.current) return;
      const rect = letterRef.current.getBoundingClientRect();
      const lX = rect.left + rect.width / 2;
      const lY = rect.top + rect.height / 2;
      const dX = e.clientX - lX;
      const dY = e.clientY - lY;
      const dist = Math.sqrt(dX * dX + dY * dY);
      
      if (dist < 250 && dist > 0) {
        const force = Math.pow((250 - dist) / 250, 2);
        const pushX = (dX / dist) * force * -20;  // Weniger Kraft = ruhiger
        const pushY = (dY / dist) * force * -20;
        
        // Sanftes Wegdrücken mit Velocity-Limiter
        const newX = x.get() + pushX;
        const newY = y.get() + pushY;
        
        // Velocity-Limiter anwenden (reduziert für ruhigere Bewegung)
        const velX = newX - x.get();
        const velY = newY - y.get();
        const limitedVel = maxVelocity * 0.7;  // Noch langsamer
        
        if (Math.abs(velX) > limitedVel) {
          x.set(x.get() + Math.sign(velX) * limitedVel);
        } else {
          x.set(newX);
        }
        
        if (Math.abs(velY) > limitedVel) {
          y.set(y.get() + Math.sign(velY) * limitedVel);
        } else {
          y.set(newY);
        }
        
        // Leichte Rotation (Torque) - reduziert
        rotate.set(rotate.get() + dX * 0.03);
      } else {
        // Sanfte Rückkehr zur Ruhe - mehr Reibung
        x.set(x.get() * 0.96);
        y.set(y.get() * 0.96);
        rotate.set(rotate.get() * 0.95);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [x, y, rotate]);

  return (
    <motion.span
      ref={letterRef}
      data-letter-id={letterId}
      style={{
        x: springX,
        y: springY,
        rotate: springRotate,
        opacity,
        left: defaultX,
        top: defaultY,
        color: letterColor,
        willChange: 'transform'
      }}
      className={`absolute font-neue-semibold select-none pointer-events-auto leading-none tracking-tighter ${
        isMobile
          ? (size === 'large' ? 'text-[35vw]' : 'text-[30vw]')
          : (size === 'large' ? 'text-[28vw] lg:text-[32vw]' : 'text-[22vw] lg:text-[26vw]')
      }`}
    >
      {char}
    </motion.span>
  );
};

export default PhysicsLetter;
