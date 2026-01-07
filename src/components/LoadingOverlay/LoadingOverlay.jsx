import React from 'react';

const LoadingOverlay = () => {
  return (
    <div className="fixed inset-0 z-[9999] bg-[#F0F5F5]/95 backdrop-blur-sm flex items-center justify-center">
      <div className="text-center">
        <div className="inline-block w-12 h-12 sm:w-16 sm:h-16 border-4 border-[#979797] border-t-[#DFFF00] rounded-full animate-spin mb-4"></div>
        <p className="text-sm sm:text-base font-neue-semibold uppercase text-[#979797]">Loading...</p>
      </div>
    </div>
  );
};

export default LoadingOverlay;
