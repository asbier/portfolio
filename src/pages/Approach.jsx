import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import ApproachContent from '../components/Navbar/ApproachContent';
import GrainOverlay from '../components/GrainOverlay/GrainOverlay';

const Approach = () => {
  return (
    <div className="min-h-screen bg-[#F0F5F5]">
      <GrainOverlay />
      <Navbar />
      <ApproachContent />
    </div>
  );
};

export default Approach;

