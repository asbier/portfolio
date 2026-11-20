import React, { useState, useEffect } from 'react';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 -_/&+';

const scrambleToward = (target, iterations) =>
  target
    .split('')
    .map((char, index) => {
      if (char === ' ') return ' ';
      if (iterations > index + 5) return char;
      return CHARS[Math.floor(Math.random() * CHARS.length)];
    })
    .join('');

const SplitFlapRow = ({ label, value, active, delay = 0 }) => {
  const labelTarget = String(label || '').toUpperCase();
  const valueTarget = String(value || '').toUpperCase();
  const [displayLabel, setDisplayLabel] = useState('');
  const [displayValue, setDisplayValue] = useState('');

  useEffect(() => {
    if (!active) {
      setDisplayLabel('');
      setDisplayValue('');
      return;
    }

    let intervalId = null;
    const longest = Math.max(labelTarget.length, valueTarget.length);
    const maxIterations = 15;

    const timeout = setTimeout(() => {
      let iterations = 0;
      intervalId = setInterval(() => {
        setDisplayLabel(scrambleToward(labelTarget, iterations));
        setDisplayValue(scrambleToward(valueTarget, iterations));
        iterations += 1;
        if (iterations > longest + maxIterations) {
          clearInterval(intervalId);
          setDisplayLabel(labelTarget);
          setDisplayValue(valueTarget);
        }
      }, 30);
    }, delay);

    return () => {
      clearTimeout(timeout);
      if (intervalId) clearInterval(intervalId);
    };
  }, [active, labelTarget, valueTarget, delay]);

  return (
    <div className="w-full py-4 border-b border-[#979797]/30">
      <p className="text-[15px] lg:text-[17px] font-neue-semibold uppercase tracking-[0.12em] text-[#363C53] leading-snug">
        {displayLabel || '\u00A0'}
      </p>
      <p className="mt-1.5 text-[13px] lg:text-[15px] font-neue-book-semi uppercase tracking-[0.08em] text-[#979797] leading-snug">
        {displayValue || '\u00A0'}
      </p>
    </div>
  );
};

export default SplitFlapRow;
