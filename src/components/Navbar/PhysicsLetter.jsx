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
    ? { stiffness: 8, damping: 50, mass: 20 }  // Mobile: sehr ölig und schwer
    : { stiffness: 12, damping: 40, mass: 8 };  // Desktop: ruhiger
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);
  const springRotate = useSpring(rotate, { stiffness: 8, damping: 35, mass: 6 });

  // Fall-in Animation direkt auf MotionValue für physikalische Trägheit - ruhiger und smoother
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (fallIn) {
        // Für SYSTEM Letters: sehr smooth und ölig
        animate(y, 0, { 
          type: "spring", 
          stiffness: isMobile ? 5 : 8,  // Noch ruhiger für smooth Fall-in
          damping: isMobile ? 40 : 30,    // Mehr Dämpfung für smooth
          mass: isMobile ? 18 : 8         // Schwerer für öliges Gefühl
        });
        animate(opacity, isMobile ? 0.25 : 0.4, { duration: 2.5 }); // Mobile: niedrigere Opacity für bessere Lesbarkeit
      } else {
        // Für APPROACH Letters: normal
        animate(y, 0, { 
          type: "spring", 
          stiffness: isMobile ? 6 : 10,
          damping: isMobile ? 35 : 25,
          mass: isMobile ? 15 : 6
        });
        animate(opacity, isMobile ? 0.25 : 0.4, { duration: 2.0 }); // Mobile: niedrigere Opacity
      }
    }, delay * 1000);
    return () => clearTimeout(timeout);
  }, [y, opacity, delay, isMobile, fallIn]);

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
            bottom: window.innerHeight * 0.5, // Erhöht auf 50vh für bessere Sichtbarkeit
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

  // Auto-Drift Effekt für Mobile - sanftes Eigenleben
  useEffect(() => {
    if (!isMobile) return;
    
    const interval = setInterval(() => {
      // Erzeugt ein ganz sanftes Eigenleben (wie im Wasser)
      const driftX = (Math.random() - 0.5) * 2;
      const driftY = (Math.random() - 0.5) * 2;
      x.set(x.get() + driftX);
      y.set(y.get() + driftY);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [isMobile, x, y]);

  // Touch-Interaktion für Mobile
  useEffect(() => {
    if (!isMobile) return;

    const handleTouch = (e) => {
      if (!letterRef.current || !e.touches[0]) return;
      const touch = e.touches[0];
      const rect = letterRef.current.getBoundingClientRect();
      const lX = rect.left + rect.width / 2;
      const lY = rect.top + rect.height / 2;
      const dX = touch.clientX - lX;
      const dY = touch.clientY - lY;
      const dist = Math.sqrt(dX * dX + dY * dY);

      if (dist < 150 && dist > 0) { // Kleinerer Radius für Touch
        const force = Math.pow((150 - dist) / 150, 2);
        const pushX = (dX / dist) * force * -15;
        const pushY = (dY / dist) * force * -15;
        
        // Sanftes Wegdrücken mit Velocity-Limiter
        const newX = x.get() + pushX;
        const newY = y.get() + pushY;
        
        const velX = newX - x.get();
        const velY = newY - y.get();
        const limitedVel = maxVelocity * 0.5; // Noch langsamer für Touch
        
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
        
        rotate.set(rotate.get() + dX * 0.02);
      }
    };

    window.addEventListener('touchmove', handleTouch, { passive: true });
    return () => window.removeEventListener('touchmove', handleTouch);
  }, [isMobile, x, y, rotate]);

  // Scroll-Jiggle: Buchstaben reagieren auf Scroll-Impuls (Mobile)
  useEffect(() => {
    if (!isMobile) return;

    let lastScrollY = window.scrollY;
    let scrollVelocity = 0;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      scrollVelocity = currentScrollY - lastScrollY;
      lastScrollY = currentScrollY;

      // Kleiner vertikaler Impuls basierend auf Scroll-Geschwindigkeit
      if (Math.abs(scrollVelocity) > 1) {
        const jiggleY = scrollVelocity * 0.3; // Sanfter Impuls
        y.set(y.get() + jiggleY);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile, y]);

  // Tilt-Feature: Buchstaben rutschen zur Seite bei Handy-Neigung (optional)
  useEffect(() => {
    if (!isMobile) return;

    let deviceOrientation = null;

    const handleOrientation = (e) => {
      if (e.gamma !== null) { // Gamma = Neigung links/rechts (-90 bis 90)
        deviceOrientation = e.gamma;
        // Sanfte Neigung: Buchstaben rutschen leicht zur Seite
        const tiltX = deviceOrientation * 0.5; // Sehr subtil
        x.set(x.get() + tiltX * 0.1);
      }
    };

    // Prüfe ob DeviceOrientationEvent unterstützt wird
    if (window.DeviceOrientationEvent) {
      window.addEventListener('deviceorientation', handleOrientation, { passive: true });
      return () => window.removeEventListener('deviceorientation', handleOrientation);
    }
  }, [isMobile, x]);

  // Desktop: Sanfte Maus-Interaktion mit Torque
  useEffect(() => {
    if (isMobile) return;

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
        const pushX = (dX / dist) * force * -20;
        const pushY = (dY / dist) * force * -20;
        
        const newX = x.get() + pushX;
        const newY = y.get() + pushY;
        
        const velX = newX - x.get();
        const velY = newY - y.get();
        const limitedVel = maxVelocity * 0.7;
        
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
        
        rotate.set(rotate.get() + dX * 0.03);
      } else {
        x.set(x.get() * 0.96);
        y.set(y.get() * 0.96);
        rotate.set(rotate.get() * 0.95);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [x, y, rotate, isMobile]);

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
          ? (size === 'large' ? 'text-[28vw] sm:text-[35vw]' : 'text-[24vw] sm:text-[30vw]')
          : (size === 'large' ? 'text-[28vw] lg:text-[32vw]' : 'text-[22vw] lg:text-[26vw]')
      }`}
    >
      {char}
    </motion.span>
  );
};

export default PhysicsLetter;
