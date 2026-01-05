import { motion, useSpring, useMotionValue, animate } from 'framer-motion';
import { useEffect, useRef } from 'react';

const letterColors = ['#C8D4C9', '#CDDEDC', '#C3D0C4']; // Etwas dunklere Versionen

const PhysicsLetter = ({ char, defaultX, defaultY, delay = 0 }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(-1200); 
  const rotate = useMotionValue(0);
  const opacity = useMotionValue(0);
  
  const letterRef = useRef(null);
  const vel = useRef({ x: 0, y: 0 }); 
  const mousePos = useRef({ x: -1000, y: -1000 });

  // Spring-Eigenschaften für das "Kippen" und "Schwingen"
  const springConfig = { stiffness: 20, damping: 30, mass: 5 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);
  const springRotate = useSpring(rotate, { stiffness: 15, damping: 20 });

  useEffect(() => {
    const handleMove = (e) => {
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      mousePos.current = { x: clientX, y: clientY };
    };
    window.addEventListener('mousemove', handleMove);
    window.addEventListener('touchmove', handleMove, { passive: true });
    
    const timeout = setTimeout(() => {
      animate(opacity, 0.45, { duration: 1.5 });
      animate(y, 0, { type: "spring", stiffness: 10, damping: 20, mass: 4 });
    }, delay * 1000);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('touchmove', handleMove);
      clearTimeout(timeout);
    };
  }, [delay, y, opacity]);

  useEffect(() => {
    let frame;
    const update = () => {
      if (!letterRef.current) return;
      const isMobile = window.innerWidth < 1024;
      const parent = letterRef.current.closest('.aquarium-container');
      if (!parent) return;
      
      const rect = letterRef.current.getBoundingClientRect();
      const container = parent.getBoundingClientRect();
      const nav = document.querySelector('header') || document.querySelector('nav');
      const navHeight = nav ? nav.getBoundingClientRect().height : 0;
      
      let curX = x.get();
      let curY = y.get();

      // 1. LEICHTE GRAVITATION - Buchstaben sinken leicht nach unten
      const gravity = isMobile ? 0.08 : 0.05; // Mobile: etwas stärker
      vel.current.y += gravity;

      // 2. ANKER (Zieht Buchstaben zurück zur Leseposition) - horizontal
      vel.current.x += (0 - curX) * 0.004;

      // 3. INTERAKTION & KIPPEN
      const dx = mousePos.current.x - (rect.left + rect.width / 2);
      const dy = mousePos.current.y - (rect.top + rect.height / 2);
      const dist = Math.sqrt(dx * dx + dy * dy);
      const radius = isMobile ? 150 : 250;
      
      if (dist < radius) {
        const force = (radius - dist) / radius;
        vel.current.x -= (dx / dist) * force * 1.2; 
        vel.current.y -= (dy / dist) * force * 1.2;
        
        // KIPP-LOGIK: Rotiert basierend auf der horizontalen Verschiebung
        rotate.set(vel.current.x * 15); 
      } else {
        // Langsam zurück zur geraden Ausrichtung
        rotate.set(rotate.get() * 0.95);
      }

      // 4. BOUNDARY CHECKS - Sanftes Abprallen am unteren Rand (Viewport-Ende)
      const padding = isMobile ? 40 : 20;
      const visibleLeft = container.left + padding;
      const visibleRight = container.right - padding;
      const visibleTop = container.top + navHeight + padding;
      // Bottom: wirklich am Viewport-Ende, nicht außerhalb
      const visibleBottom = window.innerHeight - padding; // Viewport-Höhe, nicht Container

      // Links & Rechts
      if (rect.left < visibleLeft) {
        vel.current.x = Math.abs(vel.current.x) * 0.5;
        curX += 2;
      } else if (rect.right > visibleRight) {
        vel.current.x = -Math.abs(vel.current.x) * 0.5;
        curX -= 2;
      }

      // Oben & Unten - besonders wichtig für das "Sinken"
      if (rect.top < visibleTop) {
        vel.current.y = Math.abs(vel.current.y) * 0.5;
        curY += 2;
      } else if (rect.bottom > visibleBottom) {
        // Am unteren Rand: sanftes Abprallen, verhindert weiteres Sinken
        vel.current.y = -Math.abs(vel.current.y) * 0.3; // Sanfter Rückschlag
        curY -= 2;
      }

      // 5. REIBUNG - Mehr Reibung für schwerere, langsamere Bewegung
      const friction = isMobile ? 0.96 : 0.97;
      vel.current.x *= friction; 
      vel.current.y *= friction;

      x.set(curX + vel.current.x);
      y.set(curY + vel.current.y);
      frame = requestAnimationFrame(update);
    };
    frame = requestAnimationFrame(update);
    return () => cancelAnimationFrame(frame);
  }, [x, y, rotate]);

  return (
    <motion.span
      ref={letterRef}
      style={{ 
        x: springX, 
        y: springY, 
        rotate: springRotate, 
        opacity, 
        left: defaultX, 
        top: defaultY, 
        position: 'absolute',
        color: letterColors[Math.floor(Math.random() * letterColors.length)]
      }}
      className="font-neue-semibold select-none pointer-events-auto leading-[0.5] tracking-tighter text-[42vw] lg:text-[38vw] will-change-transform"
    >
      {char}
    </motion.span>
  );
};

export default PhysicsLetter;