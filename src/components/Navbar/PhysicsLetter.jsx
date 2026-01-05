import { motion, useSpring, useMotionValue, animate } from 'framer-motion';
import { useEffect, useRef } from 'react';

const letterColors = ['#C8D4C9', '#CDDEDC', '#C3D0C4']; // Etwas dunklere Versionen

const PhysicsLetter = ({ char, defaultX, defaultY, delay = 0 }) => {
  const isMobileInitial = typeof window !== 'undefined' && window.innerWidth < 1024;
  const x = useMotionValue(0);
  const y = useMotionValue(isMobileInitial ? -300 : -1200); // Mobile: Starte näher, damit schneller sichtbar
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
    
    const isMobile = window.innerWidth < 1024;
    const timeout = setTimeout(() => {
      animate(opacity, 0.45, { duration: 1.5 });
      // Mobile: Direktes Sinken ohne lange Animation
      if (isMobile) {
        // Setze direkt auf Startposition, keine Animation
        y.set(0);
      } else {
        animate(y, 0, { type: "spring", stiffness: 10, damping: 20, mass: 4 });
      }
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

      // 1. GRAVITATION - Schweres, direktes Sinken (beide)
      const gravity = isMobile ? 0.35 : 0.15; // Beide: Stärkere Gravitation für schwerere Buchstaben
      vel.current.y += gravity;

      // 2. ANKER (Zieht Buchstaben zurück zur Leseposition) - nur horizontal, vertikal nicht
      vel.current.x += (0 - curX) * 0.004;
      
      // Vertikaler Anker: Sehr schwacher Anker nur nach unten, nie nach oben (schwere Buchstaben sinken)
      const maxSinkDepth = isMobile ? 300 : 100; // Sehr große Sink-Tiefe erlauben
      if (curY > maxSinkDepth) {
        const anchorStrength = isMobile ? 0.003 : 0.01; // Sehr schwacher Anker
        vel.current.y += (maxSinkDepth - curY) * anchorStrength;
      }
      // WICHTIG: Kein Anker nach oben - schwere Buchstaben sollen nicht an die Decke

      // 3. INTERAKTION & KIPPEN - Mobile: Sehr schwache Interaktion (wie Muschel im Wasser)
      const dx = mousePos.current.x - (rect.left + rect.width / 2);
      const dy = mousePos.current.y - (rect.top + rect.height / 2);
      const dist = Math.sqrt(dx * dx + dy * dy);
      const radius = isMobile ? 200 : 250; // Mobile: Größerer Radius für sanftere Interaktion
      
      if (dist < radius) {
        const force = (radius - dist) / radius;
        // Mobile: Sehr schwache Kraft (wie Muschel im Wasser)
        const interactionStrength = isMobile ? 0.15 : 1.2; // Mobile: Nur 15% der normalen Kraft
        vel.current.x -= (dx / dist) * force * interactionStrength; 
        vel.current.y -= (dy / dist) * force * interactionStrength;
        
        // KIPP-LOGIK: Mobile: Weniger Rotation
        const rotationStrength = isMobile ? 5 : 15;
        rotate.set(vel.current.x * rotationStrength); 
      } else {
        // Langsam zurück zur geraden Ausrichtung
        rotate.set(rotate.get() * 0.95);
      }

      // 4. BOUNDARY CHECKS - Sanftes Abprallen an den Rändern
      const padding = isMobile ? 40 : 20;
      const topPadding = isMobile ? 180 : 100; // Beide: Mehr Abstand oben, damit schwere Buchstaben nicht an die Decke gehen
      const visibleLeft = container.left + padding;
      const visibleRight = container.right - padding;
      const visibleTop = container.top + navHeight + topPadding; // Mehr Abstand zum Browser-Rand (Decke)
      
      // Bottom: Mobile = genau über dem Paragraphen (damit Text lesbar bleibt), Desktop = Viewport-Ende
      let visibleBottom;
      if (isMobile) {
        // Mobile: Meeresgrund muss genau über dem Paragraphen sein
        // Finde den Paragraph-Container - auf Mobile ist es das zweite Grid-Element
        const gridContainer = parent?.parentElement;
        const paragraphContainer = gridContainer?.children[1]; // Zweites Grid-Element
        let paragraphTop = window.innerHeight * 0.5; // Fallback: Mitte des Viewports
        
        if (paragraphContainer) {
          const paragraphRect = paragraphContainer.getBoundingClientRect();
          paragraphTop = paragraphRect.top; // Obere Kante des Paragraphen
        }
        
        // Stoppe genau über dem Paragraphen (mit etwas Abstand für Padding)
        const maxBottom = paragraphTop - (padding * 1.5); // Mehr Abstand für bessere Lesbarkeit
        
        // Auch prüfen ob Navigation höher ist
        const bottomNav = document.querySelector('header');
        const bottomNavTop = bottomNav ? bottomNav.getBoundingClientRect().top : window.innerHeight;
        visibleBottom = Math.min(bottomNavTop - padding, maxBottom);
      } else {
        // Desktop: Begrenzt auf oberen Bereich (max. 40% der Viewport-Höhe)
        const maxBottom = window.innerHeight * 0.4;
        visibleBottom = Math.min(window.innerHeight - padding, maxBottom);
      }

      // Links & Rechts - Kein Bouncen, schweres Stoppen
      if (rect.left < visibleLeft) {
        vel.current.x *= 0.1; // Sehr starke Dämpfung - kein Bounce
        curX += 1;
      } else if (rect.right > visibleRight) {
        vel.current.x *= 0.1; // Sehr starke Dämpfung - kein Bounce
        curX -= 1;
      }

      // Oben & Unten - Kein Bouncen, schweres Stoppen
      if (rect.top < visibleTop) {
        // Obere Grenze: Schwere Buchstaben - keine Bounce, nur nach unten
        vel.current.y *= 0.05; // Extrem starke Dämpfung - kein Bounce
        vel.current.y += 0.8; // Stärkere Kraft nach unten, damit sie schwer bleiben
        curY += 2;
      } else if (rect.bottom > visibleBottom) {
        // Am unteren Rand: schweres Stoppen, kein Bounce
        vel.current.y *= 0.05; // Extrem starke Dämpfung - kein Bounce
        curY -= 1;
      }

      // 5. REIBUNG - Mehr Reibung für schwerere, langsamere Bewegung (beide)
      const friction = isMobile ? 0.90 : 0.93; // Beide: Mehr Reibung für schwerere Buchstaben
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