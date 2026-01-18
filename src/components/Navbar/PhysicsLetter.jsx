import { motion, useSpring, useMotionValue, animate } from 'framer-motion';
import { useEffect, useRef, useMemo } from 'react';

const letterColor = '#E7ECEC';

const PhysicsLetter = ({ char, defaultX, defaultY, delay = 0, index = 0, totalLetters = 0 }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(-500);
  const rotate = useMotionValue(0);
  const opacity = useMotionValue(1);

  const letterRef = useRef(null);
  const vel = useRef({ x: 0, y: 0 });
  const mousePos = useRef({ x: -1000, y: -1000 });
  
  // Random scale for letters - variable sizes for visual interest
  const letterScale = useMemo(() => {
    // Base range for all devices
    const baseMin = 0.85;
    const baseMax = 1.55;
    // Narrower range for long words (better readability)
    const min = totalLetters >= 9 ? 0.85 : baseMin;
    const max = totalLetters >= 9 ? 1.55 : baseMax;
    return Math.random() * (max - min) + min;
  }, [index, totalLetters]);

  // EXTREME TRÄGHEIT: Masse 20 verhindert nervöses Zittern
  const springConfig = { stiffness: 50, damping: 120, mass: 25 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);
  const springRotate = useSpring(rotate, { stiffness: 50, damping: 50 });

  useEffect(() => {
    const handleMove = (e) => {
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      mousePos.current = { x: clientX, y: clientY };
    };

    window.addEventListener('mousemove', handleMove);
    window.addEventListener('touchmove', handleMove, { passive: true });

    const timeout = setTimeout(() => {
      animate(y, 0, { duration: 2.5, ease: "easeOut" });
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
      const rect = letterRef.current.getBoundingClientRect();
      const parent = letterRef.current.parentElement;
      if (!parent) return;
      const container = parent.getBoundingClientRect();

      let curX = x.get();
      let curY = y.get();

      // Schwerkraft
      vel.current.y += 0.12;

      // Maus-Abstoßung
      const dx = mousePos.current.x - (rect.left + rect.width / 2);
      const dy = mousePos.current.y - (rect.top + rect.height / 2);
      const dist = Math.sqrt(dx * dx + dy * dy);
      const radius = 250;

      if (dist < radius) {
        const force = (radius - dist) / radius;
        vel.current.x -= (dx / dist) * force * 0.6;
        vel.current.y -= (dy / dist) * force * 0.6;
        rotate.set(vel.current.x * 3);
      } else {
        rotate.set(rotate.get() * 0.85);
      }

      // GRENZEN (WÄNDE)
      if (rect.left < container.left) {
        vel.current.x = 0;
        curX += (container.left - rect.left) + 1;
      } else if (rect.right > container.right) {
        vel.current.x = 0;
        curX -= (rect.right - container.right) + 1;
      }

      // BODEN (KEIN BOUNCE)
      if (rect.bottom > container.bottom) {
        vel.current.y = 0; // Stoppt sofort
        vel.current.x *= 0.3; // Mehr Reibung bremst Rutschen
        curY -= (rect.bottom - container.bottom);
      }

      // REIBUNG (Macht die Bewegung "ölig" - erhöht für weniger Bouncen)
      vel.current.x *= 0.5;
      vel.current.y *= 0.5;

      // SPEED LIMIT (Verhindert das Verschwinden - reduziert für weniger Bouncen)
      const maxSpeed = 6;
      vel.current.x = Math.max(Math.min(vel.current.x, maxSpeed), -maxSpeed);
      vel.current.y = Math.max(Math.min(vel.current.y, maxSpeed), -maxSpeed);

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
        x: springX, y: springY, rotate: springRotate, opacity,
        left: defaultX, top: defaultY, position: 'absolute',
        color: letterColor,
        display: 'inline-block',
        filter: 'blur(1.5px)',
        transform: `scale(${letterScale})`,
      }}
      className="font-neue-semibold select-none pointer-events-none text-[45vw] lg:text-[20vw] leading-none will-change-transform"
    >
      {char}
    </motion.span>
  );
};

export default PhysicsLetter;