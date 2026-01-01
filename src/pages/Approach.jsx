import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import ApproachContent from '../components/Navbar/ApproachContent';
import GrainOverlay from '../components/GrainOverlay/GrainOverlay';

const Approach = () => {
  return (
    <div className="min-h-screen bg-[#F1F2E5]">
      <GrainOverlay />
      <Navbar />
      <ApproachContent />
    </div>
  );
};

export default Approach;

