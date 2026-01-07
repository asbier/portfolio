import React from 'react';
import { motion } from 'framer-motion';

const MarqueeBanner = () => {
  const text = "PRODUCT DESIGN & BRANDING ✦ SINCE 2012 ✦ SPECIALISED IN E-COMMERCE & SERVICE DESIGN ✦ GOOD DESIGN PERFORMS ✦ STOP BEING BORING ✦ ";

  return (
    <div 
      style={{ 
        width: '100%', 
        backgroundColor: '#F0F5F5', 
        borderBottom: '1px solid rgba(0,0,0,0.1)', 
        overflow: 'hidden', 
        display: 'flex', 
        alignItems: 'center', 
        height: '150px' // SPIEL HIER: Band-Höhe
      }}
      aria-hidden="true"
    >
      <motion.div
        style={{ display: 'flex', whiteSpace: 'nowrap' }}
        animate={{ x: [0, -2000] }}
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
      >
        <span 
          style={{ 
            fontSize: '180px', // SPIEL HIER: Schrift-Größe
            fontWeight: '900', 
            textTransform: 'uppercase', 
            letterSpacing: '-0.05em', 
            color: 'rgba(0,0,0,0.1)', 
            lineHeight: '1',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          {text}{text}{text}
        </span>
      </motion.div>
    </div>
  );
};

export default MarqueeBanner;