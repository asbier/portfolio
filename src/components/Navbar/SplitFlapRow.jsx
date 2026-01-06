import React, { useState, useEffect } from 'react';

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 -_/";

const SplitFlapRow = ({ label, value, active, delay = 0 }) => {
  const [displayValue, setDisplayValue] = useState("");
  const targetText = `${label} — ${value}`.toUpperCase();

  useEffect(() => {
    if (!active) {
      setDisplayValue("");
      return;
    }

    let intervalId = null;
    
    // Delay für nacheinander "klackern"
    const timeout = setTimeout(() => {
      let iterations = 0;
      const maxIterations = 15;
      
      intervalId = setInterval(() => {
        const scrambled = targetText.split("").map((char, index) => {
          if (char === " ") return " ";
          if (iterations > index + 5) return char;
          return CHARS[Math.floor(Math.random() * CHARS.length)];
        }).join("");

        setDisplayValue(scrambled);
        iterations++;

        if (iterations > targetText.length + maxIterations) {
          clearInterval(intervalId);
        }
      }, 30);
    }, delay);

    return () => {
      clearTimeout(timeout);
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [active, targetText, delay]);

  return (
    <div className="w-full py-4 border-b border-[#979797]/30 text-[10px] lg:text-[13px] font-neue-semibold uppercase tracking-[0.2em] text-[#979797]">
      <span>{displayValue || " "}</span>
    </div>
  );
};

export default SplitFlapRow;

