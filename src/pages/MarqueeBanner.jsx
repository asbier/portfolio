import React from 'react';
import { motion } from 'framer-motion';

const MarqueeBanner = () => {
  const text = "PRODUCT DESIGN & BRANDING   ✦   SINCE 2012   ✦   SPECIALISED IN E-COMMERCE & SERVICE DESIGN   ✦   GOOD DESIGN PERFORMS   ✦   STOP BEING BORING   ✦   ";

  return (
    <div 
      className="w-full bg-[#F1F2E5] border-b border-black/10 py-2 overflow-hidden whitespace-nowrap flex"
      aria-hidden="true"
    >
      <motion.div
        className="flex"
        animate={{ x: [0, -1000] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      >
        <span className="text-[12px] font-black uppercase tracking-widest text-black/20 px-4">
          {text}{text}{text}
        </span>
      </motion.div>
    </div>
  );
};

export default MarqueeBanner;