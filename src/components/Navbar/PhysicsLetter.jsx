import { motion, useSpring, useMotionValue, animate } from 'framer-motion';

import { useEffect, useRef, useMemo } from 'react';



const letterColors = ['#2A2D35', '#363C53', '#3A3F4F'];



const PhysicsLetter = ({ char, defaultX, defaultY, delay = 0, index = 0, totalLetters = 0 }) => {

  const x = useMotionValue(0);

  const y = useMotionValue(-500); 

  const rotate = useMotionValue(0);

  const opacity = useMotionValue(0);

  

  // Ensure at least 2 letters per word are very bright and use #363C53 color

  // First letter and one in the middle/last are bright

  const isBright = index === 0 || index === Math.floor(totalLetters / 2) || index === totalLetters - 1;

  const targetOpacity = useRef(isBright ? 0.7 + Math.random() * 0.2 : 0.2 + Math.random() * 0.25); // Bright: 0.7-0.9, others: 0.2-0.45

  // At least 2 letters should use #363C53 color (first and middle)

  const letterColor = useMemo(() => {

    return (index === 0 || index === Math.floor(totalLetters / 2)) ? '#363C53' : letterColors[Math.floor(Math.random() * letterColors.length)];

  }, [index, totalLetters]);

  

  const letterRef = useRef(null);

  const vel = useRef({ x: 0, y: 0 }); 

  const mousePos = useRef({ x: -1000, y: -1000 });



  // EXTREME TRÄGHEIT: Masse 20 verhindert nervöses Zittern

  const springConfig = { stiffness: 50, damping: 100, mass: 25 };

  const springX = useSpring(x, springConfig);

  const springY = useSpring(y, springConfig);

  const springRotate = useSpring(rotate, { stiffness: 50, damping: 40 });



  useEffect(() => {

    const handleMove = (e) => {

      const clientX = e.touches ? e.touches[0].clientX : e.clientX;

      const clientY = e.touches ? e.touches[0].clientY : e.clientY;

      mousePos.current = { x: clientX, y: clientY };

    };

    window.addEventListener('mousemove', handleMove);

    window.addEventListener('touchmove', handleMove, { passive: true });

    

    const timeout = setTimeout(() => {

      animate(opacity, targetOpacity.current, { duration: 1 });

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

        vel.current.x -= (dx / dist) * force * 0.8;

        vel.current.y -= (dy / dist) * force * 0.8;

        rotate.set(vel.current.x * 4); 

      } else {

        rotate.set(rotate.get() * 0.9); 

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

        vel.current.x *= 0.5; // Reibung bremst Rutschen

        curY -= (rect.bottom - container.bottom);

      }



      // REIBUNG (Macht die Bewegung "ölig")

      vel.current.x *= 0.65;

      vel.current.y *= 0.65;



      // SPEED LIMIT (Verhindert das Verschwinden)

      const maxSpeed = 8;

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

        display: 'inline-block'

      }}

      className="font-neue-semibold select-none pointer-events-none text-[30vw] lg:text-[20vw] leading-none will-change-transform"

    >

      {char}

    </motion.span>

  );

};



export default PhysicsLetter;